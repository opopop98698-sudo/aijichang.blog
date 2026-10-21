<template>
  <div class="test-report-card">
    <div class="report-header">
      <div class="report-title">
        <span class="report-badge">实测记录</span>
        <h4>{{ report.title }}</h4>
      </div>
      <div class="report-date">{{ report.date }}</div>
    </div>

    <div class="report-env">
      <div class="env-item">
        <span class="env-k">测试基准网络:</span>
        <span class="env-v">{{ report.networkBaseline || '家庭千兆宽带 (三网抽样)' }}</span>
      </div>
      <div class="env-item">
        <span class="env-k">客户端核心:</span>
        <span class="env-v">{{ report.clientCore || 'Clash Meta (mihomo) / Sing-box' }}</span>
      </div>
      <div class="env-item">
        <span class="env-k">测试时段:</span>
        <span class="env-v">{{ report.timeWindow || '晚高峰 20:00 - 22:30 & 白天闲时' }}</span>
      </div>
    </div>

    <div class="report-content">
      <slot />
    </div>

    <div class="report-footer">
      <div class="method-ver">评测方法版本: v2.4 (四层递进核查模型)</div>
      <div class="disclaimer">注：本记录反映特定时间与网络节点表现，网络环境具备动态性，请结合最新复测考量。</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  report: {
    title: string;
    date: string;
    networkBaseline?: string;
    clientCore?: string;
    timeWindow?: string;
  };
}>();
</script>

<style scoped>
.test-report-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1.25rem;
  background-color: var(--vp-c-bg);
  margin: 1.5rem 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.75rem;
  margin-bottom: 0.75rem;
}

.report-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.report-title h4 {
  margin: 0;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

.report-badge {
  background-color: #e0f2fe;
  color: #0369a1;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
}

.report-date {
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
}

.report-env {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
  background-color: var(--vp-c-bg-alt);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.env-k {
  color: var(--vp-c-text-3);
  margin-right: 4px;
}

.env-v {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.report-content {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.report-footer {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 0.75rem;
  margin-top: 1rem;
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  display: flex;
  flex-direction: column;
  gap: 2px;
}
</style>
