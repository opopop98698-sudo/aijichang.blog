<template>
  <div class="matrix-container">
    <div class="matrix-filter-bar">
      <div class="filter-item">
        <label>目标平台：</label>
        <select v-model="filterPlatform">
          <option value="all">全部平台</option>
          <option value="openai">OpenAI / ChatGPT</option>
          <option value="anthropic">Anthropic / Claude</option>
          <option value="google">Google / Gemini</option>
          <option value="netflix">Netflix</option>
          <option value="disney">Disney+</option>
          <option value="youtube">YouTube</option>
        </select>
      </div>

      <div class="filter-item">
        <label>节点出口地区：</label>
        <select v-model="filterRegion">
          <option value="all">全部地区</option>
          <option value="hk">香港 [HK]</option>
          <option value="jp">日本 [JP]</option>
          <option value="sg">新加坡 [SG]</option>
          <option value="us">美国 [US]</option>
        </select>
      </div>

      <div class="filter-item">
        <label>实测结果：</label>
        <select v-model="filterResult">
          <option value="all">全部结果</option>
          <option value="success">实测可用</option>
          <option value="partial">部分受限</option>
          <option value="failure">阻断/失败</option>
        </select>
      </div>
    </div>

    <div class="table-responsive">
      <table class="matrix-table">
        <thead>
          <tr>
            <th>品牌 / 节点标签</th>
            <th>平台与具体产品</th>
            <th>实测执行任务</th>
            <th>官方资格状态</th>
            <th>出口识别地区</th>
            <th>实测结论</th>
            <th>TLS 延迟</th>
            <th>证据来源 / 记录日期</th>
            <th>局限与备注说明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="obs in filteredObservations" :key="obs.id">
            <td class="brand-col">
              <strong>{{ getBrandName(obs.brandId) }}</strong>
              <div class="node-tag-txt">{{ obs.nodeTag }}</div>
            </td>
            <td>
              <span class="platform-tag">{{ getPlatformName(obs.platformId) }}</span>
              <div class="product-txt">{{ getProductName(obs.productId) }}</div>
            </td>
            <td>
              <span class="task-txt">{{ getTaskName(obs.taskId) }}</span>
            </td>
            <td>
              <span class="official-check" :class="isOfficialEligible(obs.regionId, obs.platformId) ? 'eligible' : 'ineligible'">
                {{ isOfficialEligible(obs.regionId, obs.platformId) ? '官方白名单支持' : '官方不支持(需分流)' }}
              </span>
            </td>
            <td>
              <span class="exit-txt">{{ obs.observedExitRegion }}</span>
            </td>
            <td>
              <EvidenceBadge :result="obs.result" />
            </td>
            <td>
              <span v-if="obs.rttMs" class="rtt-val">{{ obs.rttMs }} ms</span>
              <span v-else class="text-muted">-</span>
            </td>
            <td>
              <div class="provenance-tag">来源: {{ obs.provenance }}</div>
              <small class="date-txt">{{ obs.observedAt }}</small>
            </td>
            <td>
              <div class="notes-txt">{{ obs.notes }}</div>
            </td>
          </tr>
          <tr v-if="filteredObservations.length === 0">
            <td colspan="9" class="empty-cell">
              当前筛选条件下暂无已归档测试记录（本站严格按真实测试呈现，绝不自动填补假绿色）
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="matrix-guideline">
      <strong>四层评估准则声明：</strong>
      <span>
        ① “实测可用”仅代表在指定测试窗口和网络环境下成功达成任务；
        ② 官方白名单依据平台官网技术文档（2026-10 状态）；
        ③ 严禁将单节点测速直接推论为全品牌全天候可用；
        ④ 任何未测试项一律显示为未知或留空，坚决拒绝伪造“全绿九宫格”。
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import EvidenceBadge from './EvidenceBadge.vue';
import observationsData from '../../../../data/public/observations.json';
import brandsData from '../../../../data/public/brands.json';
import platformsData from '../../../../data/public/platforms.json';
import productsData from '../../../../data/public/products.json';
import tasksData from '../../../../data/public/tasks.json';

const filterPlatform = ref('all');
const filterRegion = ref('all');
const filterResult = ref('all');

const getBrandName = (id: string) => {
  const b = brandsData.find(item => item.id === id);
  return b ? b.name : id;
};

const getPlatformName = (id: string) => {
  const p = platformsData.find(item => item.id === id);
  return p ? p.name : id;
};

const getProductName = (id: string) => {
  const pr = productsData.find(item => item.id === id);
  return pr ? pr.name : id;
};

const getTaskName = (id: string) => {
  const t = tasksData.find(item => item.id === id);
  return t ? t.name : id;
};

const isOfficialEligible = (regionId: string, platformId: string) => {
  if (platformId === 'openai' || platformId === 'anthropic' || platformId === 'google') {
    if (regionId === 'hk') return false; // Hong Kong is not officially supported by OpenAI/Claude/Gemini without specific proxy routing
    return true; // jp, sg, us supported
  }
  return true;
};

const filteredObservations = computed(() => {
  return observationsData.filter(obs => {
    if (filterPlatform.value !== 'all' && obs.platformId !== filterPlatform.value) return false;
    if (filterRegion.value !== 'all' && obs.regionId !== filterRegion.value) return false;
    if (filterResult.value !== 'all' && obs.result !== filterResult.value) return false;
    return true;
  });
});
</script>

<style scoped>
.matrix-container {
  margin: 1.5rem 0;
}

.matrix-filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  background-color: var(--vp-c-bg-alt);
  padding: 10px 14px;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid var(--vp-c-border);
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.86rem;
}

.filter-item select {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 1rem;
}

.matrix-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
  margin: 0 !important;
}

.matrix-table th, .matrix-table td {
  padding: 8px 10px;
  border: 1px solid var(--vp-c-border);
  text-align: left;
}

.matrix-table th {
  background-color: var(--vp-c-bg-alt);
  font-weight: 600;
  white-space: nowrap;
}

.brand-col strong {
  color: var(--vp-c-text-1);
}

.node-tag-txt {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.platform-tag {
  font-weight: 600;
  color: var(--vp-c-brand-2);
}

.product-txt {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.official-check {
  font-size: 0.75rem;
  padding: 2px 5px;
  border-radius: 3px;
  white-space: nowrap;
}

.official-check.eligible {
  background-color: #ecfdf5;
  color: #065f46;
}

.official-check.ineligible {
  background-color: #fef2f2;
  color: #991b1b;
}

.rtt-val {
  font-weight: 600;
  color: #0f172a;
}

.provenance-tag {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}

.notes-txt {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  max-width: 260px;
  line-height: 1.4;
}

.empty-cell {
  text-align: center !important;
  padding: 2rem !important;
  color: var(--vp-c-text-3);
  font-style: italic;
}

.matrix-guideline {
  margin-top: 0.75rem;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  line-height: 1.5;
  padding: 8px 12px;
  background-color: var(--vp-c-bg-alt);
  border-radius: 6px;
}
</style>
