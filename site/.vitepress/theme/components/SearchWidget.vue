<template>
  <div class="search-widget-wrapper">
    <!-- Quick Search Recommendation Pills -->
    <div class="quick-keywords-bar">
      <span class="quick-label">⚡ 常用高频推荐词：</span>
      <div class="quick-pills">
        <button
          v-for="kw in quickKeywords"
          :key="kw"
          class="quick-kw-btn"
          @click="onQuickSearch(kw)"
        >
          {{ kw }}
        </button>
      </div>
    </div>

    <!-- Pagefind UI Root Container -->
    <div class="pagefind-container">
      <div id="pagefind-search-root"></div>

      <!-- Loading skeleton -->
      <div v-if="loading" class="search-loading-hint">
        <div class="loading-spinner"></div>
        <span>正在载入站内全文静态索引数据库...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const loading = ref(true);
let pagefindInstance: any = null;

const quickKeywords = [
  '光速云',
  'WgetCloud',
  '微风网络',
  '飞猫云',
  'ChatGPT',
  'Claude 3.5',
  'Netflix 4K',
  'IEPL 专线',
  '客户端配置',
  '优惠码 AMM',
  '晚高峰 MTR'
];

function loadStyle(href: string): Promise<void> {
  return new Promise((resolve) => {
    if (document.querySelector(`link[href="${href}"]`)) {
      resolve();
      return;
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => resolve();
    document.head.appendChild(link);
  });
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).PagefindUI) {
      resolve();
      return;
    }
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject());
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = (e) => reject(e);
    document.body.appendChild(script);
  });
}

function initPagefind() {
  const container = document.getElementById('pagefind-search-root');
  if (!container) return;

  // Clear previous DOM if any
  container.innerHTML = '';

  try {
    if ((window as any).PagefindUI) {
      pagefindInstance = new (window as any).PagefindUI({
        element: '#pagefind-search-root',
        bundlePath: '/pagefind/',
        resetStyles: false,
        showImages: false,
        showSubResults: true,
        autofocus: true,
        debounceTimeoutMs: 200,
        translations: {
          placeholder: '输入品牌名、AI平台、协议、地区或实测问题搜索...',
          clear_search: '清除',
          load_more: '加载更多结果',
          search_label: '全站检索',
          filters_label: '维度筛选',
          zero_results: '未找到匹配 "[SEARCH_TERM]" 的相关评测内容，建议尝试更换关键词',
          many_results: '找到 [COUNT] 条相关评测与深度指南',
          one_result: '找到 1 条相关评测记录',
          alt_search: '未找到直接匹配，建议尝试搜索：[SEARCH_TERM]',
          search_suggestion: '推荐相关搜索：',
          searching: '正在极速检索全站知识库...'
        }
      });
      loading.value = false;
    }
  } catch (err) {
    console.error('Failed to initialize PagefindUI:', err);
    loading.value = false;
  }
}

function onQuickSearch(kw: string) {
  if (pagefindInstance && typeof pagefindInstance.triggerSearch === 'function') {
    pagefindInstance.triggerSearch(kw);
  } else {
    // Fallback: directly find input
    const input = document.querySelector('#pagefind-search-root input') as HTMLInputElement;
    if (input) {
      input.value = kw;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.focus();
    }
  }
}

onMounted(async () => {
  try {
    await loadStyle('/pagefind/pagefind-ui.css');
    await loadScript('/pagefind/pagefind-ui.js');
    initPagefind();
  } catch (e) {
    console.warn('Pagefind static assets loading warning:', e);
    loading.value = false;
  }
});

onUnmounted(() => {
  if (pagefindInstance && typeof pagefindInstance.destroy === 'function') {
    pagefindInstance.destroy();
    pagefindInstance = null;
  }
});
</script>

<style scoped>
.search-widget-wrapper {
  margin: 1.5rem 0 2.5rem;
}

.quick-keywords-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  padding: 10px 14px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
}

.quick-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  white-space: nowrap;
}

.quick-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.quick-kw-btn {
  font-size: 0.78rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 14px;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.quick-kw-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.pagefind-container {
  min-height: 280px;
  position: relative;
}

.search-loading-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 3rem 1rem;
  color: var(--vp-c-text-3);
  font-size: 0.9rem;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid var(--vp-c-border);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Pagefind UI Custom Overrides to match Clean White Theme */
:deep(.pagefind-ui) {
  --pagefind-ui-scale: 0.95;
  --pagefind-ui-primary: var(--vp-c-brand-1);
  --pagefind-ui-text: var(--vp-c-text-1);
  --pagefind-ui-background: var(--vp-c-bg);
  --pagefind-ui-border: var(--vp-c-border);
  --pagefind-ui-tag: var(--vp-c-bg-soft);
  --pagefind-ui-border-radius: 8px;
  --pagefind-ui-font: var(--vp-font-family-base);
}

:deep(.pagefind-ui__search-input) {
  border: 2px solid var(--vp-c-border) !important;
  border-radius: 8px !important;
  font-size: 1rem !important;
  padding: 12px 16px !important;
  color: var(--vp-c-text-1) !important;
  background-color: var(--vp-c-bg) !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
  transition: border-color 0.2s, box-shadow 0.2s !important;
}

:deep(.pagefind-ui__search-input:focus) {
  border-color: var(--vp-c-brand-1) !important;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15) !important;
  outline: none !important;
}

:deep(.pagefind-ui__search-clear) {
  background-color: var(--vp-c-bg-soft) !important;
  color: var(--vp-c-text-3) !important;
  border-radius: 4px !important;
  padding: 4px 8px !important;
}

:deep(.pagefind-ui__result) {
  border: 1px solid var(--vp-c-border) !important;
  border-radius: 8px !important;
  padding: 1.25rem !important;
  margin-top: 1rem !important;
  background-color: var(--vp-c-bg) !important;
  transition: border-color 0.2s, box-shadow 0.2s !important;
}

:deep(.pagefind-ui__result:hover) {
  border-color: var(--vp-c-brand-1) !important;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.06) !important;
}

:deep(.pagefind-ui__result-link) {
  color: var(--vp-c-brand-1) !important;
  font-weight: 700 !important;
  font-size: 1.1rem !important;
  text-decoration: none !important;
}

:deep(.pagefind-ui__result-link:hover) {
  text-decoration: underline !important;
}

:deep(.pagefind-ui__result-excerpt) {
  color: var(--vp-c-text-2) !important;
  font-size: 0.9rem !important;
  line-height: 1.6 !important;
  margin-top: 0.5rem !important;
}

:deep(mark) {
  background-color: #fef08a !important;
  color: #854d0e !important;
  padding: 1px 4px !important;
  border-radius: 2px !important;
  font-weight: 600 !important;
}
</style>
