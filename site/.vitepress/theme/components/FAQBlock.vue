<template>
  <div class="faq-container">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="faq-item"
      :class="{ open: openIndex === index }"
    >
      <div class="faq-question" @click="toggle(index)">
        <span class="q-icon">Q</span>
        <span class="q-text">{{ item.q }}</span>
        <span class="q-arrow">{{ openIndex === index ? '−' : '+' }}</span>
      </div>
      <div class="faq-answer" v-show="openIndex === index">
        <div class="a-content" v-html="item.a"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  items: Array<{
    q: string;
    a: string;
  }>;
}>();

const openIndex = ref<number | null>(0); // First item open by default

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<style scoped>
.faq-container {
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.faq-item {
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background-color: var(--vp-c-bg);
  overflow: hidden;
  transition: border-color 0.2s;
}

.faq-item.open {
  border-color: var(--vp-c-brand-3);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  cursor: pointer;
  background-color: var(--vp-c-bg);
  user-select: none;
}

.faq-question:hover {
  background-color: var(--vp-c-bg-alt);
}

.q-icon {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.75rem;
  flex-shrink: 0;
}

.q-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  flex-grow: 1;
}

.q-arrow {
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--vp-c-text-3);
}

.faq-answer {
  padding: 12px 16px;
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-alt);
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

.a-content :deep(p) {
  margin-bottom: 0.5rem;
}
.a-content :deep(p:last-child) {
  margin-bottom: 0;
}
</style>
