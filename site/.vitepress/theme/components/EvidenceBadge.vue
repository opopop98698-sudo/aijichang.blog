<template>
  <span :class="['evidence-badge', `badge-${variant}`]" :title="description">
    <span class="badge-dot" :class="`dot-${variant}`"></span>
    <span class="badge-text">{{ label }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  result: 'success' | 'failure' | 'partial' | 'unknown' | 'not_tested' | 'not_applicable';
  text?: string;
}>(), {
  result: 'unknown'
});

const variant = computed(() => {
  switch (props.result) {
    case 'success': return 'success';
    case 'partial': return 'warning';
    case 'failure': return 'danger';
    case 'not_tested':
    case 'not_applicable':
    case 'unknown':
    default: return 'neutral';
  }
});

const label = computed(() => {
  if (props.text) return props.text;
  switch (props.result) {
    case 'success': return '实测可用';
    case 'partial': return '部分可用/受限';
    case 'failure': return '实测阻断/不可用';
    case 'not_tested': return '未测试';
    case 'not_applicable': return '不适用';
    case 'unknown':
    default: return '状态未知(未测)';
  }
});

const description = computed(() => {
  switch (props.result) {
    case 'success': return '在指定测试环境中验证达成目标任务';
    case 'partial': return '网页或基础任务通过，但部分高级功能/出口受限';
    case 'failure': return '在当期测试网络下出现 403 / 阻断 / 无法使用';
    case 'not_tested':
    case 'unknown': return '当前暂无独立复核记录，不代表必然支持或不支持';
    default: return '';
  }
});
</script>

<style scoped>
.evidence-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.2;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.badge-success { background-color: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; }
.dot-success { background-color: #10b981; }

.badge-warning { background-color: #fffbeb; color: #92400e; border: 1px solid #fde68a; }
.dot-warning { background-color: #f59e0b; }

.badge-danger { background-color: #fef2f2; color: #991b1b; border: 1px solid #fecaca; }
.dot-danger { background-color: #ef4444; }

.badge-neutral { background-color: #f8fafc; color: #475569; border: 1px solid #e2e8f0; }
.dot-neutral { background-color: #94a3b8; }
</style>
