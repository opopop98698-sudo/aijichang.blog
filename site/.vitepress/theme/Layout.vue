<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <div class="content-freshness-bar" v-if="frontmatter.verifiedAt || frontmatter.modifiedAt">
        <span class="freshness-item">
          ✍️ 评测架构师: <a href="/authors/lin-yue/" class="author-pill">林越 (Lin Yue)</a>
        </span>
        <span class="freshness-item">
          📅 证据核验时间: <strong>{{ frontmatter.verifiedAt || frontmatter.modifiedAt }}</strong>
        </span>
        <span class="freshness-item" v-if="frontmatter.provenance">
          📌 证据级别: <span class="badge badge-info">{{ formatProvenance(frontmatter.provenance) }}</span>
        </span>
        <span class="freshness-item" v-if="frontmatter.primaryIntent">
          🎯 核心意图: {{ frontmatter.primaryIntent }}
        </span>
      </div>
    </template>

    <template #doc-after>
      <div class="author-eeat-box" v-if="showAuthorBox">
        <div class="author-avatar-badge">林</div>
        <div class="author-info-body">
          <div class="author-name-row">
            <a href="/authors/lin-yue/" class="author-name">林越 (Lin Yue)</a>
            <span class="author-tag">首席跨境网络评测工程师</span>
            <span class="author-tag verified">✓ 实测实录认证</span>
          </div>
          <p class="author-desc">
            毕业于计算机科学与技术专业，拥有 10 年以上跨国网络专线（IEPL/IPLC）拓扑运维与云服务网络架构实操背景。专精于大语言模型（ChatGPT/Claude/Gemini）长连接反阻断、流媒体原生 IP 欺诈分过滤算法与真实套餐账本精算。
          </p>
          <div class="author-footer-row">
            <a href="/authors/lin-yue/" class="author-more-link">查阅林越的完整档案、测试用例与评测标准 &rarr;</a>
          </div>
        </div>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';
import { computed } from 'vue';

const { frontmatter, page } = useData();

const showAuthorBox = computed(() => {
  const p = page.value.relativePath;
  return p !== 'index.md' && p !== '404.md' && !p.startsWith('authors/');
});

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

.author-pill {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
}
.author-pill:hover {
  text-decoration: underline;
}

.author-eeat-box {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  margin-top: 2.5rem;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
}

.author-avatar-badge {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.author-info-body {
  flex: 1;
}

.author-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 6px;
}

.author-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.author-name:hover {
  color: var(--vp-c-brand-1);
}

.author-tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}

.author-tag.verified {
  background-color: #dcfce7;
  color: #166534;
  font-weight: 600;
}

.author-desc {
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--vp-c-text-2);
  margin: 6px 0 10px;
}

.author-more-link {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.author-more-link:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .author-eeat-box {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
