<template>
  <div class="related-links-box">
    <div class="box-title">
      <span class="box-icon">🧭</span>
      <span>下一步推荐探索路径</span>
    </div>
    <div class="links-grid">
      <a
        v-for="(link, i) in links"
        :key="i"
        :href="link.url"
        class="related-link-card"
      >
        <div class="link-label">{{ link.title }}</div>
        <div class="link-desc">{{ link.desc }}</div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  links: Array<{
    title: string;
    desc: string;
    url: string;
  }>;
}>();
</script>

<style scoped>
.related-links-box {
  margin: 2rem 0;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1.25rem;
  background-color: var(--vp-c-bg-alt);
}

.box-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
}

.related-link-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg);
  text-decoration: none !important;
  transition: all 0.2s;
}

.related-link-card:hover {
  border-color: var(--vp-c-brand-2);
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}

.link-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-brand-2);
}

.link-desc {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  line-height: 1.4;
}
</style>
