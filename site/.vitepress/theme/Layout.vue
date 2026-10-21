<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <div class="content-freshness-bar" v-if="frontmatter.verifiedAt || frontmatter.modifiedAt">
        <span class="freshness-item">
          📅 内容核验时间: <strong>{{ frontmatter.verifiedAt || frontmatter.modifiedAt }}</strong>
        </span>
        <span class="freshness-item" v-if="frontmatter.provenance">
          📌 证据级别: <span class="badge badge-info">{{ formatProvenance(frontmatter.provenance) }}</span>
        </span>
        <span class="freshness-item" v-if="frontmatter.primaryIntent">
          🎯 核心意图: {{ frontmatter.primaryIntent }}
        </span>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';

const { frontmatter } = useData();

const formatProvenance = (prov: string) => {
  switch (prov) {
    case 'vendor': return '服务商官方文档/公告';
    case 'self_measured': return '本站独立实测数据';
    case 'third_party': return '第三方交叉验证记录';
    case 'user_supplied': return '站长/用户提供记录';
    default: return '客观快照存证';
  }
};
</script>

<style scoped>
.content-freshness-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  margin-bottom: 1.25rem;
}

.freshness-item strong {
  color: var(--vp-c-text-1);
}
</style>
