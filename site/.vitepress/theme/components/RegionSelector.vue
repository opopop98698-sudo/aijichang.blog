<template>
  <div class="region-selector-wrapper">
    <div class="region-nav-pills">
      <button
        v-for="r in regions"
        :key="r.id"
        :class="['region-pill', { active: activeRegion === r.id }]"
        @click="activeRegion = r.id"
      >
        {{ r.name }}
      </button>
    </div>

    <div class="region-detail-card" v-if="currentRegion">
      <div class="detail-header">
        <h4>{{ currentRegion.name }}</h4>
        <span class="latency-badge">典型往返时延: {{ currentRegion.latencyRange }}</span>
      </div>

      <div class="detail-grid">
        <div class="detail-item">
          <span class="label">物理路由与机房：</span>
          <span class="value">{{ currentRegion.physicalProximity }}</span>
        </div>
        <div class="detail-item">
          <span class="label">AI 官方资格支持：</span>
          <span class="value font-medium">{{ currentRegion.officialAiStatus }}</span>
        </div>
        <div class="detail-item">
          <span class="label">流媒体内容库：</span>
          <span class="value">{{ currentRegion.officialStreamingStatus }}</span>
        </div>
        <div class="detail-item">
          <span class="label">推荐核心场景：</span>
          <span class="value highlight">{{ currentRegion.recommendScenario }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import regionsData from '../../../../data/public/regions.json';

const regions = regionsData;
const activeRegion = ref(regions[0]?.id || 'hk');

const currentRegion = computed(() => {
  return regions.find(r => r.id === activeRegion.value);
});
</script>

<style scoped>
.region-selector-wrapper {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  padding: 1.25rem;
  background-color: var(--vp-c-bg);
}

.region-nav-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.75rem;
}

.region-pill {
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.88rem;
  font-weight: 500;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
}

.region-pill:hover {
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-2);
}

.region-pill.active {
  background-color: var(--vp-c-brand-2);
  color: #ffffff;
  border-color: var(--vp-c-brand-2);
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.detail-header h4 {
  margin: 0;
  font-size: 1.15rem;
  color: var(--vp-c-text-1);
}

.latency-badge {
  background-color: #eff6ff;
  color: #1e40af;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: var(--vp-c-bg-alt);
  padding: 10px 12px;
  border-radius: 6px;
}

.detail-item .label {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}

.detail-item .value {
  font-size: 0.88rem;
  color: var(--vp-c-text-1);
}

.detail-item .highlight {
  color: var(--vp-c-brand-2);
  font-weight: 600;
}
</style>
