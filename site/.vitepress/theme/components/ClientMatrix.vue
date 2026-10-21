<script setup lang="ts">
import { ref, computed } from 'vue';
import clientsData from '../../../../data/public/clients.json';

interface ClientItem {
  id: string;
  name: string;
  platforms: string[];
  core: string;
  coreType: string;
  pricing: string;
  pricingNote: string;
  level: string;
  levelNote: string;
  features: string[];
  downloadType: string;
  downloadUrl: string;
  warning: string | null;
  status: string;
  summary: string;
}

const clients = ref<ClientItem[]>(clientsData as ClientItem[]);

// Filters
const selectedPlatform = ref<string>('all');
const selectedCore = ref<string>('all');
const selectedPricing = ref<string>('all');
const selectedLevel = ref<string>('all');
const searchQuery = ref<string>('');

const platforms = [
  { id: 'all', label: '全部平台', icon: '🌐' },
  { id: 'windows', label: 'Windows', icon: '💻' },
  { id: 'android', label: 'Android', icon: '🤖' },
  { id: 'ios', label: 'iOS / iPadOS', icon: '📱' },
  { id: 'macos', label: 'macOS', icon: '🍎' },
  { id: 'linux', label: 'Linux', icon: '🐧' },
  { id: 'router', label: 'OpenWrt 软路由', icon: '📡' }
];

const coreOptions = [
  { id: 'all', label: '全部内核' },
  { id: 'mihomo', label: 'Mihomo (原 Meta)' },
  { id: 'sing-box', label: 'sing-box 官方/衍生' },
  { id: 'xray', label: 'Xray 协议系' },
  { id: 'proprietary', label: '专有/商业规则核心' }
];

const pricingOptions = [
  { id: 'all', label: '全部资费' },
  { id: 'free', label: '完全免费 / 开源' },
  { id: 'paid', label: '商业付费 (买断/内购)' }
];

const levelOptions = [
  { id: 'all', label: '全部上手难度' },
  { id: 'beginner', label: '新手开箱即用' },
  { id: 'intermediate', label: '中阶通用进阶' },
  { id: 'advanced', label: '高阶极客/开发者' }
];

const filteredClients = computed(() => {
  return clients.value.filter((item) => {
    // Platform match
    if (selectedPlatform.value !== 'all' && !item.platforms.includes(selectedPlatform.value)) {
      return false;
    }
    // Core match
    if (selectedCore.value !== 'all' && item.coreType !== selectedCore.value) {
      return false;
    }
    // Pricing match
    if (selectedPricing.value !== 'all' && item.pricing !== selectedPricing.value) {
      return false;
    }
    // Level match
    if (selectedLevel.value !== 'all' && item.level !== selectedLevel.value) {
      return false;
    }
    // Search query
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase().trim();
      const matchName = item.name.toLowerCase().includes(q);
      const matchCore = item.core.toLowerCase().includes(q);
      const matchSummary = item.summary.toLowerCase().includes(q);
      const matchFeatures = item.features.some(f => f.toLowerCase().includes(q));
      if (!matchName && !matchCore && !matchSummary && !matchFeatures) {
        return false;
      }
    }
    return true;
  });
});

function getPlatformBadge(p: string) {
  switch (p) {
    case 'windows': return { label: 'Win', class: 'badge-win' };
    case 'android': return { label: 'Android', class: 'badge-android' };
    case 'ios': return { label: 'iOS', class: 'badge-ios' };
    case 'macos': return { label: 'macOS', class: 'badge-macos' };
    case 'linux': return { label: 'Linux', class: 'badge-linux' };
    case 'router': return { label: '软路由', class: 'badge-router' };
    default: return { label: p, class: 'badge-default' };
  }
}

function getDownloadSourceLabel(type: string) {
  switch (type) {
    case 'github': return 'GitHub 官方发布';
    case 'appstore': return 'Apple App Store';
    case 'official': return '官方站点与下载';
    default: return '官方安全源';
  }
}

function resetAllFilters() {
  selectedPlatform.value = 'all';
  selectedCore.value = 'all';
  selectedPricing.value = 'all';
  selectedLevel.value = 'all';
  searchQuery.value = '';
}
</script>

<template>
  <div class="client-matrix-container">
    <!-- Header title -->
    <div class="matrix-header">
      <div class="header-titles">
        <h3 class="header-title">
          ⚡ 2026 跨平台机场代理客户端交互检索中心
        </h3>
        <p class="header-desc">
          收录 Windows、Android、iOS、macOS、Linux 与 OpenWrt 软路由 28 款主流开源及合规客户端，所有下载直通官方安全发布源。
        </p>
      </div>
      <div class="match-count-badge">
        共匹配到 <strong class="highlight-count">{{ filteredClients.length }}</strong> 款客户端
      </div>
    </div>

    <!-- Filter Controls -->
    <div class="matrix-filters">
      <!-- 1. Platform Tabs -->
      <div class="platform-tabs-row">
        <span class="filter-label-txt">平台筛选:</span>
        <div class="platform-tabs">
          <button
            v-for="p in platforms"
            :key="p.id"
            @click="selectedPlatform = p.id"
            :class="['tab-btn', { active: selectedPlatform === p.id }]"
          >
            <span class="tab-icon">{{ p.icon }}</span>
            <span>{{ p.label }}</span>
          </button>
        </div>
      </div>

      <!-- 2. Core & Pricing & Level Dropdowns + Search Input -->
      <div class="filter-dropdowns-grid">
        <!-- Core Select -->
        <div class="filter-select-group">
          <label class="dropdown-label">底层内核</label>
          <select v-model="selectedCore" class="select-input">
            <option v-for="c in coreOptions" :key="c.id" :value="c.id">{{ c.label }}</option>
          </select>
        </div>

        <!-- Pricing Select -->
        <div class="filter-select-group">
          <label class="dropdown-label">资费授权</label>
          <select v-model="selectedPricing" class="select-input">
            <option v-for="pr in pricingOptions" :key="pr.id" :value="pr.id">{{ pr.label }}</option>
          </select>
        </div>

        <!-- Level Select -->
        <div class="filter-select-group">
          <label class="dropdown-label">上手难度</label>
          <select v-model="selectedLevel" class="select-input">
            <option v-for="lv in levelOptions" :key="lv.id" :value="lv.id">{{ lv.label }}</option>
          </select>
        </div>

        <!-- Live Search -->
        <div class="filter-select-group">
          <label class="dropdown-label">快速检索</label>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索客户端名、内核、协议..."
            class="text-input"
          />
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredClients.length === 0" class="empty-matrix-state">
      <div class="empty-icon">🔍</div>
      <p class="empty-text">未找到符合当前组合条件的代理客户端</p>
      <button @click="resetAllFilters" class="btn-reset">
        重置所有筛选条件
      </button>
    </div>

    <!-- Cards Grid -->
    <div v-else class="client-grid">
      <div
        v-for="item in filteredClients"
        :key="item.id"
        class="client-card"
      >
        <div class="client-card-body">
          <!-- Header: Name + Pricing Badge -->
          <div class="client-header">
            <div class="name-box">
              <h4 class="client-name">
                {{ item.name }}
                <span
                  v-if="item.status === 'maintenance_warning'"
                  class="maintenance-badge"
                >
                  维护预警
                </span>
              </h4>
              <p class="client-meta">
                核心: <span class="meta-val">{{ item.core }}</span>
                <span class="meta-sep">|</span>
                上手: <span class="meta-val">{{ item.levelNote }}</span>
              </p>
            </div>
            <span
              :class="[
                'pricing-badge',
                item.pricing === 'free' ? 'pricing-free' : 'pricing-paid'
              ]"
            >
              {{ item.pricingNote }}
            </span>
          </div>

          <!-- Platform Badges -->
          <div class="platforms-row">
            <span
              v-for="p in item.platforms"
              :key="p"
              :class="['plat-badge', getPlatformBadge(p).class]"
            >
              {{ getPlatformBadge(p).label }}
            </span>
          </div>

          <!-- Summary -->
          <p class="client-summary">
            {{ item.summary }}
          </p>

          <!-- Feature Tags -->
          <div class="features-row">
            <span
              v-for="f in item.features"
              :key="f"
              class="feature-tag"
            >
              ✓ {{ f }}
            </span>
          </div>

          <!-- Safety Warning Banner -->
          <div v-if="item.warning" class="client-warning-box">
            ⚠️ {{ item.warning }}
          </div>
        </div>

        <!-- Footer: Official Direct Link -->
        <div class="client-footer">
          <span class="source-label">
            渠道: {{ getDownloadSourceLabel(item.downloadType) }}
          </span>
          <a
            :href="item.downloadUrl"
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="download-btn"
          >
            <span>访问官方项目/下载</span>
            <span class="arrow-icon">↗</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.client-matrix-container {
  margin: 2rem 0;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background-color: var(--vp-c-bg);
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

/* Header */
.matrix-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  border-bottom: 1px solid var(--vp-c-border);
  padding-bottom: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.header-titles {
  flex: 1;
  min-width: 260px;
}

.header-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.header-desc {
  margin: 0.35rem 0 0;
  font-size: 0.86rem;
  color: var(--vp-c-text-3);
  line-height: 1.5;
}

.match-count-badge {
  font-size: 0.8rem;
  font-weight: 500;
  padding: 4px 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-2);
  border-radius: 20px;
  white-space: nowrap;
  align-self: flex-start;
}

.highlight-count {
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

/* Filters */
.matrix-filters {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.platform-tabs-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.filter-label-txt {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  white-space: nowrap;
}

.platform-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  font-size: 0.82rem;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.tab-btn.active {
  background-color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #ffffff;
  font-weight: 600;
}

.tab-icon {
  font-size: 0.9rem;
}

.filter-dropdowns-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}

.filter-select-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dropdown-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
}

.select-input, .text-input {
  width: 100%;
  padding: 6px 10px;
  font-size: 0.82rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  outline: none;
  transition: border-color 0.2s;
}

.select-input:focus, .text-input:focus {
  border-color: var(--vp-c-brand-1);
}

/* Empty State */
.empty-matrix-state {
  text-align: center;
  padding: 3rem 1rem;
  border: 1px dashed var(--vp-c-border);
  border-radius: 10px;
  background-color: var(--vp-c-bg-soft);
}

.empty-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.empty-text {
  font-size: 0.9rem;
  color: var(--vp-c-text-3);
  margin: 0 0 1rem;
}

.btn-reset {
  display: inline-flex;
  padding: 6px 14px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  border: 1px solid #bfdbfe;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-reset:hover {
  background-color: #dbeafe;
}

/* Client Cards Grid */
.client-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
  align-items: stretch;
}

.client-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  background-color: var(--vp-c-bg);
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
}

.client-card:hover {
  border-color: var(--vp-c-brand-3);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.08);
  transform: translateY(-1px);
}

.client-card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.client-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 0.65rem;
}

.name-box {
  flex: 1;
  min-width: 0;
}

.client-name {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.maintenance-badge {
  font-size: 0.65rem;
  font-weight: 600;
  padding: 1px 5px;
  border-radius: 3px;
  background-color: #fef3c7;
  color: #92400e;
  border: 1px solid #fde68a;
}

.client-meta {
  margin: 3px 0 0;
  font-size: 0.76rem;
  color: var(--vp-c-text-3);
}

.meta-val {
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.meta-sep {
  margin: 0 5px;
  color: var(--vp-c-border);
}

.pricing-badge {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
}

.pricing-free {
  background-color: #ecfdf5;
  color: #047857;
  border: 1px solid #a7f3d0;
}

.pricing-paid {
  background-color: #faf5ff;
  color: #7e22ce;
  border: 1px solid #e9d5ff;
}

.platforms-row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 0.65rem;
}

.plat-badge {
  font-size: 0.68rem;
  font-weight: 500;
  padding: 1px 5px;
  border-radius: 3px;
  border: 1px solid transparent;
}

.badge-win { background-color: #eff6ff; color: #1d4ed8; border-color: #dbeafe; }
.badge-android { background-color: #ecfdf5; color: #047857; border-color: #a7f3d0; }
.badge-ios { background-color: #faf5ff; color: #6b21a8; border-color: #f3e8ff; }
.badge-macos { background-color: #f1f5f9; color: #334155; border-color: #e2e8f0; }
.badge-linux { background-color: #fffbeb; color: #92400e; border-color: #fde68a; }
.badge-router { background-color: #fff1f2; color: #be123c; border-color: #fecdd3; }
.badge-default { background-color: #f1f5f9; color: #475569; border-color: #e2e8f0; }

.client-summary {
  margin: 0 0 0.75rem;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 2.45rem;
}

.features-row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 0.75rem;
}

.feature-tag {
  font-size: 0.7rem;
  padding: 1px 6px;
  border-radius: 3px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-border);
}

.client-warning-box {
  font-size: 0.74rem;
  line-height: 1.45;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #fde68a;
  background-color: #fffbeb;
  color: #92400e;
  margin-bottom: 0.75rem;
}

.client-footer {
  border-top: 1px solid var(--vp-c-border);
  padding-top: 0.75rem;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.source-label {
  font-size: 0.74rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--vp-c-brand-1) !important;
  background-color: var(--vp-c-brand-soft);
  border: 1px solid #bfdbfe;
  border-radius: 5px;
  text-decoration: none !important;
  transition: all 0.2s;
  white-space: nowrap;
}

.download-btn:hover {
  background-color: #dbeafe;
  border-color: var(--vp-c-brand-1);
}

.arrow-icon {
  font-size: 0.85rem;
}

@media (max-width: 640px) {
  .client-matrix-container {
    padding: 1rem;
  }
  .client-grid {
    grid-template-columns: 1fr;
  }
}
</style>
