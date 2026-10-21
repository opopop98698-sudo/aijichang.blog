<template>
  <div class="source-note-box">
    <span class="note-icon">📌</span>
    <div class="note-content">
      <span class="note-label">事实溯源编号：</span>
      <code>{{ refCode }}</code>
      <span class="note-desc" v-if="desc"> — {{ desc }}</span>
      <span class="note-meta" v-if="date"> (核查记录日期: {{ date }})</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  refCode: string;
  desc?: string;
  date?: string;
}>();
</script>

<style scoped>
.source-note-box {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background-color: var(--vp-c-bg-alt);
  border-left: 3px solid var(--vp-c-brand-3);
  padding: 6px 10px;
  border-radius: 4px;
  margin: 0.75rem 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}

.note-icon {
  font-size: 0.85rem;
}

.note-label {
  color: var(--vp-c-text-3);
  font-weight: 500;
}

.source-note-box code {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  padding: 1px 4px;
  border-radius: 3px;
  color: var(--vp-c-brand-2);
  font-size: 0.75rem;
}

.note-meta {
  color: var(--vp-c-text-3);
}
</style>
