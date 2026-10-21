<template>
  <!-- Multi-Brand Gallery Mode when brandId is not provided -->
  <div v-if="!props.brandId" class="brand-gallery-wrapper">
    <!-- Filter and Search Toolbar -->
    <div class="gallery-toolbar">
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索品牌名称（如：光速云、飞猫、WgetCloud）..."
          class="gallery-search-input"
        />
        <button v-if="searchQuery" class="clear-search-btn" @click="searchQuery = ''">✕</button>
      </div>

      <div class="category-pills">
        <button
          v-for="cat in categories"
          :key="cat.key"
          :class="['cat-pill-btn', { active: currentCategory === cat.key }]"
          @click="currentCategory = cat.key"
        >
          {{ cat.label }} ({{ getCategoryCount(cat.key) }})
        </button>
      </div>

      <label class="speedtest-toggle">
        <input type="checkbox" v-model="onlyWithSpeedtest" />
        <span>⚡ 仅看有测速实测图 ({{ withSpeedtestCount }})</span>
      </label>
    </div>

    <!-- Gallery Grid -->
    <div class="brand-grid">
      <div
        v-for="b in filteredBrands"
        :key="b.id"
        class="brand-card"
        :class="{ 'flagship-card': b.rank === 1 }"
      >
        <!-- Top Rank & Test Badges -->
        <div class="card-top-badge">
          <div class="badge-cluster">
            <span v-if="b.rank === 1" class="rank-tag gold-top">🏆 TOP 1 全站主推旗舰</span>
            <span v-else-if="b.rank <= 10" class="rank-tag blue-top">⭐ TOP {{ b.rank }} 推荐</span>
            <span v-else class="rank-tag neutral-top">入库候选 #{{ b.rank }}</span>

            <span v-if="b.speedtestImage" class="speedtest-badge">⚡ 含测速大图</span>
            <span v-if="b.unlockImages" class="unlock-badge">🔓 含解锁图</span>
          </div>
        </div>

        <!-- Header: Avatar + Title/Category/Year + Price -->
        <div class="card-header">
          <div class="brand-identity">
            <div class="brand-avatar-box">
              <span class="brand-initial">{{ b.name.slice(0, 1) }}</span>
            </div>
            <div class="brand-titles">
              <h4 class="brand-name">
                <a :href="`/brands/${b.id}/`" :title="b.name">{{ b.name }}</a>
              </h4>
              <div class="brand-meta-row">
                <span class="brand-category-label">{{ b.categoryTag.split('（')[0] }}</span>
                <span v-if="b.establishedYear" class="brand-year">{{ b.establishedYear }}年运营</span>
              </div>
            </div>
          </div>
          <div class="price-tag">
            <div class="price-val-box">
              <span class="price-currency">¥</span>
              <span class="price-val">{{ b.startingPriceMonthly.toFixed(2) }}</span>
            </div>
            <span class="price-unit">/月起</span>
          </div>
        </div>

        <!-- Summary: Fixed 3-line clamp for rock-solid vertical alignment -->
        <p class="brand-summary" :title="b.summary">{{ b.summary }}</p>

        <!-- Specs Box: Exactly 3 single-line items -->
        <div class="card-specs">
          <div class="spec-item">
            <span class="spec-label">线路架构:</span>
            <span class="spec-val" :title="b.lineType">{{ b.lineType }}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">支持协议:</span>
            <span class="spec-val" :title="b.protocols.join(', ')">{{ b.protocols.join(', ') }}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">客户端型:</span>
            <span
              class="spec-val"
              :title="b.customClient ? '自研专属端 + 通用核心' : '通用订阅核心 (Clash/Sing-box)'"
            >
              {{ b.customClient ? '自研专属端 + 通用核心' : '通用订阅核心 (Clash/Sing-box)' }}
            </span>
          </div>
        </div>

        <!-- Exclusive Featured Review Banner for Lightspeed -->
        <div v-if="b.id === 'lightspeed'" class="card-featured-review">
          <a href="/reviews/lightspeed/" class="featured-review-pill">
            <span class="review-badge">独家首发</span>
            <span class="review-text">📖 8000字全景深度拆解评测</span>
            <span class="review-arrow">→</span>
          </a>
        </div>

        <!-- Card Footer: Symmetrical 2-button row, guaranteed no wrapping -->
        <div class="card-footer">
          <a :href="`/brands/${b.id}/`" class="btn-footer btn-outline">
            深度档案
          </a>
          <a
            v-if="getBrandLink(b.id)"
            :href="getBrandLink(b.id).url"
            target="_blank"
            rel="nofollow sponsored noopener"
            class="btn-footer btn-primary sponsored-btn"
            :title="getBrandLink(b.id).disclaimer"
          >
            <span>官网直达</span>
            <span class="sponsored-tag">推广</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div v-if="filteredBrands.length === 0" class="empty-results">
      <p>未找到符合条件的机场品牌，请尝试清空筛选关键词。</p>
      <button class="btn-footer btn-outline" @click="resetFilters">重置全部筛选</button>
    </div>
  </div>

  <!-- Single Brand Mode when brandId is provided -->
  <div v-else class="brand-card" :class="{ 'flagship-card': singleBrand.rank === 1 }">
    <!-- Top Rank & Test Badges -->
    <div class="card-top-badge">
      <div class="badge-cluster">
        <span v-if="singleBrand.rank === 1" class="rank-tag gold-top">🏆 TOP 1 全站主推旗舰</span>
        <span v-else-if="singleBrand.rank <= 10" class="rank-tag blue-top">⭐ TOP {{ singleBrand.rank }} 推荐</span>
        <span v-else class="rank-tag neutral-top">客观测评档案 #{{ singleBrand.rank }}</span>

        <span v-if="singleBrand.speedtestImage" class="speedtest-badge">⚡ 含测速大图</span>
        <span v-if="singleBrand.unlockImages" class="unlock-badge">🔓 含解锁图</span>
      </div>
    </div>

    <!-- Header -->
    <div class="card-header">
      <div class="brand-identity">
        <div class="brand-avatar-box">
          <span class="brand-initial">{{ singleBrand.name.slice(0, 1) }}</span>
        </div>
        <div class="brand-titles">
          <h4 class="brand-name">
            <a :href="`/brands/${singleBrand.id}/`" :title="singleBrand.name">{{ singleBrand.name }}</a>
          </h4>
          <div class="brand-meta-row">
            <span class="brand-category-label">{{ singleBrand.categoryTag }}</span>
            <span v-if="singleBrand.establishedYear" class="brand-year">{{ singleBrand.establishedYear }}年运营</span>
          </div>
        </div>
      </div>
      <div class="price-tag">
        <div class="price-val-box">
          <span class="price-currency">¥</span>
          <span class="price-val">{{ singleBrand.startingPriceMonthly.toFixed(2) }}</span>
        </div>
        <span class="price-unit">/月起</span>
      </div>
    </div>

    <!-- Summary -->
    <p class="brand-summary" :title="singleBrand.summary">{{ singleBrand.summary }}</p>

    <!-- Specs Box -->
    <div class="card-specs">
      <div class="spec-item">
        <span class="spec-label">线路架构:</span>
        <span class="spec-val" :title="singleBrand.lineType">{{ singleBrand.lineType }}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">支持协议:</span>
        <span class="spec-val" :title="singleBrand.protocols.join(', ')">{{ singleBrand.protocols.join(', ') }}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">客户端型:</span>
        <span
          class="spec-val"
          :title="singleBrand.customClient ? '自研专属端 + 通用核心' : '通用订阅核心 (Clash/Sing-box)'"
        >
          {{ singleBrand.customClient ? '自研专属端 + 通用核心' : '通用订阅核心 (Clash/Sing-box)' }}
        </span>
      </div>
    </div>

    <!-- Exclusive Featured Review Banner for Lightspeed -->
    <div v-if="singleBrand.id === 'lightspeed'" class="card-featured-review">
      <a href="/reviews/lightspeed/" class="featured-review-pill">
        <span class="review-badge">独家首发</span>
        <span class="review-text">📖 8000字全景深度拆解评测</span>
        <span class="review-arrow">→</span>
      </a>
    </div>

    <!-- Footer -->
    <div class="card-footer">
      <a :href="`/brands/${singleBrand.id}/`" class="btn-footer btn-outline">
        深度档案
      </a>
      <a
        v-if="singleBrandLink"
        :href="singleBrandLink.url"
        target="_blank"
        rel="nofollow sponsored noopener"
        class="btn-footer btn-primary sponsored-btn"
        :title="singleBrandLink.disclaimer"
      >
        <span>官网直达</span>
        <span class="sponsored-tag">推广</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import brandsData from '../../../../data/public/brands.json';
import linksData from '../../../../data/public/links.json';
import observationsData from '../../../../data/public/observations.json';

const props = defineProps<{
  brandId?: string;
}>();

// Toolbar filters
const searchQuery = ref('');
const currentCategory = ref('all');
const onlyWithSpeedtest = ref(false);

const categories = [
  { key: 'all', label: '全部品牌' },
  { key: 'top10', label: '⭐ 前十精选' },
  { key: 'iepl', label: '🚀 IEPL/IPLC 专线' },
  { key: 'budget', label: '💰 高性价比/低门槛' },
  { key: 'backup', label: '📦 不限时/大流量备用' }
];

function getCategoryCount(key: string) {
  if (key === 'all') return brandsData.length;
  if (key === 'top10') return brandsData.filter(b => b.rank <= 10).length;
  if (key === 'iepl') return brandsData.filter(b => b.lineType.includes('专线') || b.lineType.includes('IEPL') || b.lineType.includes('IPLC')).length;
  if (key === 'budget') return brandsData.filter(b => b.startingPriceMonthly <= 8.5).length;
  if (key === 'backup') return brandsData.filter(b => b.categoryTag.includes('不限时') || b.categoryTag.includes('大流量') || b.categoryTag.includes('备用')).length;
  return 0;
}

const withSpeedtestCount = computed(() => {
  return brandsData.filter(b => !!b.speedtestImage).length;
});

const filteredBrands = computed(() => {
  return brandsData.filter(b => {
    // Search query match
    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase().trim();
      const matchName = b.name.toLowerCase().includes(q);
      const matchAlias = b.aliases?.some(a => a.toLowerCase().includes(q));
      const matchLine = b.lineType.toLowerCase().includes(q);
      if (!matchName && !matchAlias && !matchLine) return false;
    }

    // Category filter
    if (currentCategory.value === 'top10' && b.rank > 10) return false;
    if (currentCategory.value === 'iepl' && !b.lineType.includes('专线') && !b.lineType.includes('IEPL') && !b.lineType.includes('IPLC')) return false;
    if (currentCategory.value === 'budget' && b.startingPriceMonthly > 8.5) return false;
    if (currentCategory.value === 'backup' && !b.categoryTag.includes('不限时') && !b.categoryTag.includes('大流量') && !b.categoryTag.includes('备用')) return false;

    // Speedtest filter
    if (onlyWithSpeedtest.value && !b.speedtestImage) return false;

    return true;
  });
});

function resetFilters() {
  searchQuery.value = '';
  currentCategory.value = 'all';
  onlyWithSpeedtest.value = false;
}

function getBrandLink(brandId: string) {
  return linksData.find(l => l.brandId === brandId);
}

// Single Brand Computed
const singleBrand = computed(() => {
  if (!props.brandId) return null;
  return brandsData.find(b => b.id === props.brandId) || {
    id: props.brandId,
    name: props.brandId,
    rank: 99,
    aliases: [],
    establishedYear: null,
    summary: '资料核验中',
    protocols: [],
    lineType: '标准网络',
    startingPriceMonthly: 15,
    customClient: false,
    thirdPartySupport: true,
    categoryTag: '常规方案',
    speedtestImage: null,
    unlockImages: null
  };
});

const singleBrandLink = computed(() => {
  if (!props.brandId) return null;
  return linksData.find(l => l.brandId === props.brandId);
});
</script>

<style scoped>
.brand-gallery-wrapper {
  margin: 1.5rem 0;
}

/* Gallery Toolbar */
.gallery-toolbar {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-box {
  position: relative;
  width: 100%;
}

.gallery-search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.gallery-search-input:focus {
  border-color: var(--vp-c-brand-1);
}

.clear-search-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
  font-size: 1rem;
}

.category-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.cat-pill-btn {
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.cat-pill-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.cat-pill-btn.active {
  background-color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #ffffff;
  font-weight: 600;
}

.speedtest-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  cursor: pointer;
  user-select: none;
}

/* Grid Layout */
.brand-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
  align-items: stretch;
}

/* Brand Card Base */
.brand-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.15rem 1.25rem;
  background-color: var(--vp-c-bg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
}

.brand-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.08);
  transform: translateY(-2px);
}

/* Top 1 Flagship Highlight */
.brand-card.flagship-card {
  border-color: #93c5fd;
  box-shadow: 0 3px 12px rgba(37, 99, 235, 0.07);
  background: linear-gradient(180deg, #f8faff 0%, #ffffff 80px);
}

/* Top Badge Row */
.card-top-badge {
  display: flex;
  align-items: center;
  min-height: 24px;
  margin-bottom: 0.75rem;
}

.badge-cluster {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.rank-tag {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
}

.rank-tag.gold-top {
  background-color: #fef3c7;
  color: #b45309;
  border: 1px solid #fde68a;
}

.rank-tag.blue-top {
  background-color: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #dbeafe;
}

.rank-tag.neutral-top {
  background-color: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
}

.speedtest-badge {
  font-size: 0.75rem;
  font-weight: 600;
  background-color: #ecfdf5;
  color: #047857;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #a7f3d0;
  white-space: nowrap;
}

.unlock-badge {
  font-size: 0.75rem;
  font-weight: 600;
  background-color: #fdf2f8;
  color: #be185d;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #fbcfe8;
  white-space: nowrap;
}

/* Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 0.75rem;
}

.brand-identity {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 0; /* Prevents overflow inside flex container */
}

.brand-avatar-box {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  color: var(--vp-c-brand-1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  border: 1px solid #bfdbfe;
  flex-shrink: 0;
}

.brand-titles {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 0;
}

.brand-name {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.brand-name a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s;
}

.brand-name a:hover {
  color: var(--vp-c-brand-1);
}

.brand-meta-row {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: nowrap;
}

.brand-category-label {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.brand-year {
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  padding: 0 5px;
  border-radius: 3px;
  white-space: nowrap;
  flex-shrink: 0;
  line-height: 1.4;
}

.price-tag {
  text-align: right;
  flex-shrink: 0;
  padding-left: 4px;
}

.price-val-box {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  line-height: 1;
}

.price-currency {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin-right: 1px;
}

.price-val {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  letter-spacing: -0.02em;
}

.price-unit {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  display: block;
  margin-top: 2px;
}

/* Summary: strictly fixed to 3 lines height */
.brand-summary {
  font-size: 0.86rem;
  color: var(--vp-c-text-2);
  line-height: 1.55;
  margin-bottom: 0.85rem;
  height: 4rem; /* Exactly 3 lines (0.86rem * 1.55 * 3 = ~4.0rem) */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Specs Box: strictly 3 single lines */
.card-specs {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 0.65rem 0.85rem;
  margin-bottom: 0.85rem;
  font-size: 0.82rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1.4;
}

.spec-label {
  color: var(--vp-c-text-3);
  width: 68px;
  flex-shrink: 0;
  font-weight: 500;
  white-space: nowrap;
}

.spec-val {
  color: var(--vp-c-text-1);
  font-weight: 500;
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Featured Review Banner (for Flagship) */
.card-featured-review {
  margin-bottom: 0.85rem;
}

.featured-review-pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  background: linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%);
  border: 1px solid #fde68a;
  border-radius: 7px;
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.featured-review-pill:hover {
  background: linear-gradient(135deg, #fde68a 0%, #fef3c7 100%);
  border-color: #f59e0b;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(245, 158, 11, 0.12);
}

.review-badge {
  font-size: 0.68rem;
  font-weight: 700;
  color: #b45309;
  background: #ffffff;
  padding: 1px 5px;
  border-radius: 4px;
  border: 1px solid #fde68a;
  white-space: nowrap;
}

.review-text {
  font-size: 0.8rem;
  font-weight: 600;
  color: #92400e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 6px;
  flex: 1;
}

.review-arrow {
  font-size: 0.82rem;
  font-weight: 700;
  color: #b45309;
  white-space: nowrap;
}

/* Footer Actions */
.card-footer {
  border-top: 1px solid var(--vp-c-border);
  padding-top: 0.85rem;
  margin-top: auto; /* Pins footer strictly to the bottom of the card */
  display: flex;
  gap: 8px;
  align-items: center;
}

.btn-footer {
  flex: 1;
  min-width: 0;
  padding: 7px 12px;
  font-size: 0.84rem;
  font-weight: 600;
  border-radius: 6px;
  text-align: center;
  justify-content: center;
  white-space: nowrap;
  text-decoration: none !important;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-outline {
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1) !important;
}

.btn-outline:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1) !important;
  background-color: var(--vp-c-brand-soft);
}

.btn-primary {
  background-color: var(--vp-c-brand-2);
  border: 1px solid var(--vp-c-brand-2);
  color: #ffffff !important;
}

.btn-primary:hover {
  background-color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.sponsored-btn {
  display: inline-flex;
  gap: 5px;
  align-items: center;
}

.sponsored-tag {
  font-size: 0.65rem;
  background: rgba(255, 255, 255, 0.22);
  padding: 1px 4px;
  border-radius: 3px;
  font-weight: normal;
}

.empty-results {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--vp-c-text-3);
}

/* Mobile Responsiveness */
@media (max-width: 640px) {
  .brand-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .brand-card {
    padding: 1rem;
  }
  .brand-name {
    font-size: 1.05rem;
  }
}
</style>
