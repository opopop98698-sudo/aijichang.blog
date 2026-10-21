<template>
  <div class="offer-card" :class="{ expired: offer.isExpired }">
    <div class="offer-header">
      <div class="offer-brand-name">{{ getBrandName(offer.brandId) }}</div>
      <div class="offer-status">
        <span v-if="offer.isExpired" class="badge badge-neutral">已下架/失效</span>
        <span v-else class="badge badge-success">官方优惠生效中</span>
      </div>
    </div>

    <div class="offer-body">
      <div class="discount-desc">{{ offer.discountDescription }}</div>

      <div class="coupon-box" v-if="offer.couponCode">
        <span class="coupon-label">优惠码:</span>
        <code class="coupon-code">{{ offer.couponCode }}</code>
        <button class="copy-btn" @click="copyCode(offer.couponCode)">
          {{ copied ? '已复制' : '复制' }}
        </button>
      </div>

      <div class="offer-specs">
        <div class="spec-row">
          <span class="label">适用范围:</span>
          <span class="val">{{ offer.applicableScope }}</span>
        </div>
        <div class="spec-row">
          <span class="label">有效期截止:</span>
          <span class="val">{{ offer.validUntil || '长期官方活动 (以结算页为准)' }}</span>
        </div>
        <div class="spec-row" v-if="offer.historyNote">
          <span class="label">历史变更:</span>
          <span class="val text-muted">{{ offer.historyNote }}</span>
        </div>
      </div>
    </div>

    <div class="offer-footer">
      <div class="source-ref">核验来源: {{ offer.sourceRef }}</div>
      <a
        v-if="brandLink && !offer.isExpired"
        :href="brandLink.url"
        target="_blank"
        rel="nofollow sponsored noopener"
        class="btn-primary btn-sm"
      >
        去官网兑换
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import offersData from '../../../../data/public/offers.json';
import brandsData from '../../../../data/public/brands.json';
import linksData from '../../../../data/public/links.json';

const props = defineProps<{
  offerId: string;
}>();

const copied = ref(false);

const offer = computed(() => {
  return offersData.find(o => o.id === props.offerId) || {
    id: props.offerId,
    brandId: 'unknown',
    couponCode: '',
    discountDescription: '优惠活动整理中',
    actualPaymentAfterDiscount: 0,
    applicableScope: '全套餐',
    validUntil: null,
    sourceRef: '未知',
    isExpired: false
  };
});

const getBrandName = (brandId: string) => {
  const b = brandsData.find(item => item.id === brandId);
  return b ? b.name : brandId;
};

const brandLink = computed(() => {
  return linksData.find(l => l.brandId === offer.value.brandId);
});

const copyCode = (code: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      copied.value = true;
      setTimeout(() => copied.value = false, 2000);
    });
  }
};
</script>

<style scoped>
.offer-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1.25rem;
  background-color: var(--vp-c-bg);
  margin: 1rem 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}

.offer-card.expired {
  opacity: 0.65;
  background-color: var(--vp-c-bg-alt);
}

.offer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.offer-brand-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.discount-desc {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-brand-2);
  margin-bottom: 0.75rem;
}

.coupon-box {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #eff6ff;
  border: 1px dashed #3b82f6;
  padding: 6px 12px;
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.coupon-label {
  font-size: 0.82rem;
  color: #1e40af;
}

.coupon-code {
  font-size: 1rem;
  font-weight: 700;
  color: #1e3a8a;
  background: transparent;
  padding: 0;
}

.copy-btn {
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  cursor: pointer;
}

.copy-btn:hover {
  background-color: #1d4ed8;
}

.offer-specs {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.82rem;
  margin-bottom: 0.75rem;
}

.spec-row {
  display: flex;
  gap: 8px;
}

.spec-row .label {
  color: var(--vp-c-text-3);
  width: 90px;
}

.spec-row .val {
  color: var(--vp-c-text-2);
}

.offer-footer {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.source-ref {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}

.btn-sm {
  padding: 6px 14px;
  font-size: 0.82rem;
}
</style>
