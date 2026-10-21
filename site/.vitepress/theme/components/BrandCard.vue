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
      <div v-for="b in filteredBrands" :key="b.id" class="brand-card">
        <div class="card-top-badge" v-if="b.rank <= 10">
          <span class="rank-tag" :class="b.rank === 1 ? 'gold-top' : 'blue-top'">
            {{ b.rank === 1 ? '🏆 全站第一主推旗舰' : `TOP ${b.rank} 推荐` }}
          </span>
          <span v-if="b.speedtestImage" class="speedtest-badge">⚡ 含测速大图</span>
          <span v-if="b.unlockImages" class="unlock-badge">🔓 含解锁图</span>
        </div>

        <div class="card-header">
          <div class="brand-identity">
            <div class="brand-avatar-box">
              <span class="brand-initial">{{ b.name.slice(0, 1) }}</span>
            </div>
            <div class="brand-titles">
              <h4 class="brand-name">
                <a :href="`/brands/${b.id}/`">{{ b.name }}</a>
                <span v-if="b.establishedYear" class="brand-year">{{ b.establishedYear }}年运营</span>
              </h4>
              <div class="brand-category-label">{{ b.categoryTag.split('（')[0] }}</div>
            </div>
          </div>
          <div class="price-tag">
            <span class="price-val">¥{{ b.startingPriceMonthly.toFixed(2) }}</span>
            <span class="price-unit">/月起</span>
          </div>
        </div>

        <p class="brand-summary">{{ b.summary }}</p>

        <div class="card-specs">
          <div class="spec-item">
            <span class="spec-label">线路架构:</span>
            <span class="spec-val">{{ b.lineType }}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">支持协议:</span>
            <span class="spec-val">{{ b.protocols.join(', ') }}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">客户端:</span>
            <span class="spec-val">{{ b.customClient ? '自研专属端 + 通用核心' : '通用订阅核心 (Clash/Sing-box)' }}</span>
          </div>
        </div>

        <div class="card-footer">
          <div class="footer-links">
            <a :href="`/brands/${b.id}/`" class="btn-outline btn-sm">深度档案</a>
            <a
              v-if="b.id === 'lightspeed'"
              href="/reviews/lightspeed/"
              class="btn-review-special btn-sm"
            >
              📖 8000字单品评测
            </a>
          </div>
          <div class="action-row">
            <a
              v-if="getBrandLink(b.id)"
              :href="getBrandLink(b.id).url"
              target="_blank"
              rel="nofollow sponsored noopener"
              class="btn-primary btn-sm sponsored-btn"
              :title="getBrandLink(b.id).disclaimer"
            >
              官网直达
              <span class="sponsored-tag">推广</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div v-if="filteredBrands.length === 0" class="empty-results">
      <p>未找到符合条件的机场品牌，请尝试清空筛选关键词。</p>
      <button class="btn-outline btn-sm" @click="resetFilters">重置全部筛选</button>
    </div>
  </div>

  <!-- Single Brand Mode when brandId is provided -->
  <div v-else class="brand-card">
    <div class="card-top-badge" v-if="singleBrand.rank <= 10">
      <span class="rank-tag" :class="singleBrand.rank === 1 ? 'gold-top' : 'blue-top'">
        {{ singleBrand.rank === 1 ? '🏆 全站第一主推旗舰' : `TOP ${singleBrand.rank} 推荐` }}
      </span>
      <span v-if="singleBrand.speedtestImage" class="speedtest-badge">⚡ 含测速大图</span>
      <span v-if="singleBrand.unlockImages" class="unlock-badge">🔓 含解锁图</span>
    </div>

    <div class="card-header">
      <div class="brand-identity">
        <div class="brand-avatar-box">
          <span class="brand-initial">{{ singleBrand.name.slice(0, 1) }}</span>
        </div>
        <div class="brand-titles">
          <h4 class="brand-name">
            <a :href="`/brands/${singleBrand.id}/`">{{ singleBrand.name }}</a>
            <span v-if="singleBrand.establishedYear" class="brand-year">{{ singleBrand.establishedYear }}年运营</span>
          </h4>
          <div class="brand-category-label">{{ singleBrand.categoryTag }}</div>
        </div>
      </div>
      <div class="price-tag">
        <span class="price-val">¥{{ singleBrand.startingPriceMonthly.toFixed(2) }}</span>
        <span class="price-unit">/月起</span>
      </div>
    </div>

    <p class="brand-summary">{{ singleBrand.summary }}</p>

    <div class="card-specs">
      <div class="spec-item">
        <span class="spec-label">线路架构:</span>
        <span class="spec-val">{{ singleBrand.lineType }}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">支持协议:</span>
        <span class="spec-val">{{ singleBrand.protocols.join(', ') }}</span>
      </div>
    </div>

    <div class="card-footer">
      <a :href="`/brands/${singleBrand.id}/`" class="btn-outline btn-sm">查看完整档案与套餐</a>
      <a
        v-if="singleBrandLink"
        :href="singleBrandLink.url"
        target="_blank"
        rel="nofollow sponsored noopener"
        class="btn-primary btn-sm sponsored-btn"
      >
        官网直达 <span class="sponsored-tag">推广</span>
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

.brand-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.brand-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.25rem;
  background-color: var(--vp-c-bg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.brand-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.08);
  transform: translateY(-2px);
}

.card-top-badge {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 0.75rem;
}

.rank-tag {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
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

.speedtest-badge {
  font-size: 0.75rem;
  font-weight: 600;
  background-color: #ecfdf5;
  color: #047857;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #a7f3d0;
}

.unlock-badge {
  font-size: 0.75rem;
  font-weight: 600;
  background-color: #fdf2f8;
  color: #be185d;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #fbcfe8;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.brand-identity {
  display: flex;
  align-items: center;
  gap: 10px;
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
}

.brand-name {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.brand-name a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.brand-name a:hover {
  color: var(--vp-c-brand-1);
}

.brand-year {
  font-size: 0.75rem;
  font-weight: normal;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-mute);
  padding: 1px 6px;
  border-radius: 4px;
}

.brand-category-label {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  margin-top: 2px;
}

.price-tag {
  text-align: right;
  flex-shrink: 0;
}

.price-val {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--vp-c-brand-1);
}

.price-unit {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

.brand-summary {
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 4em;
}

.card-specs {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.82rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.spec-item {
  display: flex;
  gap: 8px;
}

.spec-label {
  color: var(--vp-c-text-3);
  width: 65px;
  flex-shrink: 0;
}

.spec-val {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.card-footer {
  border-top: 1px solid var(--vp-c-border);
  padding-top: 0.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.footer-links {
  display: flex;
  gap: 6px;
  align-items: center;
}

.btn-sm {
  padding: 5px 12px;
  font-size: 0.82rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s;
}

.btn-outline {
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-1);
}

.btn-outline:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.btn-review-special {
  background-color: #fef3c7;
  border: 1px solid #fde68a;
  color: #b45309;
  font-weight: 600;
}

.btn-review-special:hover {
  background-color: #fde68a;
}

.btn-primary {
  background-color: var(--vp-c-brand-1);
  color: #ffffff;
  border: 1px solid var(--vp-c-brand-1);
}

.btn-primary:hover {
  background-color: var(--vp-c-brand-2);
}

.sponsored-btn {
  display: inline-flex;
  gap: 4px;
  align-items: center;
}

.sponsored-tag {
  font-size: 0.65rem;
  background: rgba(255, 255, 255, 0.25);
  padding: 1px 4px;
  border-radius: 3px;
}

.empty-results {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--vp-c-text-3);
}

@media (max-width: 640px) {
  .brand-grid {
    grid-template-columns: 1fr;
  }
}
</style>
