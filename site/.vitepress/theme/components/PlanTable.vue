<template>
  <div class="plan-table-wrapper">
    <div class="table-controls" v-if="showFilter">
      <div class="filter-group">
        <label>按计费周期筛选：</label>
        <select v-model="selectedCycle">
          <option value="all">全部周期</option>
          <option value="monthly">真单月付</option>
          <option value="quarterly">季付</option>
          <option value="yearly">年付折算</option>
          <option value="once">不限时一次性</option>
        </select>
      </div>
    </div>

    <div class="table-responsive">
      <table class="plan-table">
        <thead>
          <tr>
            <th>品牌 / 套餐名称</th>
            <th>计费周期</th>
            <th>首次实付 (元)</th>
            <th>折算月价 (元/月)</th>
            <th>月度流量</th>
            <th>流量机制 / 倍率</th>
            <th>核心特性与适用人群</th>
            <th>最后核验</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="plan in filteredPlans" :key="plan.id">
            <td class="brand-cell">
              <strong>{{ getBrandName(plan.brandId) }}</strong>
              <div class="plan-subname">{{ plan.name }}</div>
            </td>
            <td>
              <span class="cycle-badge" :class="`cycle-${plan.billingCycle}`">
                {{ formatCycle(plan.billingCycle) }}
              </span>
            </td>
            <td class="payment-cell">
              <span class="actual-price">¥{{ plan.actualPayment }}</span>
            </td>
            <td class="cost-cell">
              <span class="monthly-cost">¥{{ plan.effectiveMonthlyCost.toFixed(2) }}</span>
            </td>
            <td class="traffic-cell">
              <strong>{{ plan.trafficGB }} GB</strong>
            </td>
            <td>
              <div>{{ plan.trafficReset }}</div>
              <div class="rate-note">{{ plan.rateMultiplier }}</div>
            </td>
            <td>
              <div class="tags-list">
                <span v-for="(f, i) in plan.features" :key="i" class="feature-tag">{{ f }}</span>
              </div>
            </td>
            <td class="verify-cell">
              <small>{{ plan.verifiedAt }}</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-foot-note">
      * 价格说明：实付款为首次结算时需向服务商支付的实际金额。年付与季付折算月价仅作为长期成本参考，绝不可当作单月付选购。所有套餐数据来自客观资料快照，未含任何未经确认的促销假扣减。
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import plansData from '../../../../data/public/plans.json';
import brandsData from '../../../../data/public/brands.json';

const props = withDefaults(defineProps<{
  brandId?: string;
  showFilter?: boolean;
}>(), {
  showFilter: true
});

const selectedCycle = ref('all');

const formatCycle = (cycle: string) => {
  switch (cycle) {
    case 'monthly': return '月付';
    case 'quarterly': return '季付';
    case 'yearly': return '年付';
    case 'once': return '不限时/一次性';
    default: return cycle;
  }
};

const getBrandName = (brandId: string) => {
  const b = brandsData.find(item => item.id === brandId);
  return b ? b.name : brandId;
};

const filteredPlans = computed(() => {
  return plansData.filter(p => {
    if (props.brandId && p.brandId !== props.brandId) return false;
    if (selectedCycle.value !== 'all' && p.billingCycle !== selectedCycle.value) return false;
    return true;
  });
});
</script>

<style scoped>
.plan-table-wrapper {
  margin: 1.5rem 0;
}

.table-controls {
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: flex-end;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
}

.filter-group select {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
}

.plan-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 !important;
  font-size: 0.9rem;
}

.plan-table th, .plan-table td {
  padding: 10px 12px;
  border: 1px solid var(--vp-c-border);
  text-align: left;
}

.plan-table th {
  background-color: var(--vp-c-bg-alt);
  font-weight: 600;
  white-space: nowrap;
}

.brand-cell strong {
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
}

.plan-subname {
  font-size: 0.82rem;
  color: var(--vp-c-brand-2);
}

.cycle-badge {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.cycle-monthly { background-color: #e0f2fe; color: #0369a1; }
.cycle-quarterly { background-color: #fef3c7; color: #92400e; }
.cycle-yearly { background-color: #dbeafe; color: #1e40af; }
.cycle-once { background-color: #f3e8ff; color: #6b21a8; }

.actual-price {
  font-weight: 700;
  color: #0f172a;
}

.monthly-cost {
  font-weight: 600;
  color: var(--vp-c-brand-2);
}

.rate-note {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.feature-tag {
  background-color: var(--vp-c-bg-alt);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.table-foot-note {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  margin-top: 0.5rem;
  line-height: 1.5;
}
</style>
