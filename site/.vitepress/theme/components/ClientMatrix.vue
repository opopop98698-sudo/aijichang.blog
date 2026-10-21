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
    case 'windows': return { label: 'Win', class: 'bg-blue-50 text-blue-700 border-blue-200' };
    case 'android': return { label: 'Android', class: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
    case 'ios': return { label: 'iOS', class: 'bg-purple-50 text-purple-700 border-purple-200' };
    case 'macos': return { label: 'macOS', class: 'bg-slate-100 text-slate-800 border-slate-300' };
    case 'linux': return { label: 'Linux', class: 'bg-amber-50 text-amber-800 border-amber-200' };
    case 'router': return { label: '软路由', class: 'bg-rose-50 text-rose-700 border-rose-200' };
    default: return { label: p, class: 'bg-gray-100 text-gray-700 border-gray-200' };
  }
}

function getDownloadSourceLabel(type: string) {
  switch (type) {
    case 'github': return 'GitHub 官方发布页';
    case 'appstore': return 'Apple App Store';
    case 'official': return '官方文档与下载';
    default: return '官方下载渠道';
  }
}
</script>

<template>
  <div class="client-matrix-container my-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all sm:p-6">
    <!-- Header title -->
    <div class="mb-5 flex flex-col justify-between gap-3 border-b border-gray-100 pb-4 sm:flex-row sm:items-center">
      <div>
        <h3 class="text-xl font-bold tracking-tight text-gray-900 m-0">
          ⚡ 2026 跨平台机场代理客户端交互检索中心
        </h3>
        <p class="mt-1 text-sm text-gray-500 m-0">
          收录 Windows、Android、iOS、macOS、Linux 与 OpenWrt 软路由 28 款主流开源及合规客户端，所有下载均直通官方权威发布源。
        </p>
      </div>
      <div class="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full w-fit">
        共匹配到 <span class="text-blue-600 font-bold">{{ filteredClients.length }}</span> 款客户端
      </div>
    </div>

    <!-- Filter Controls -->
    <div class="space-y-3.5 mb-6">
      <!-- 1. Platform Tabs -->
      <div class="flex flex-wrap gap-2 items-center">
        <span class="text-xs font-semibold text-gray-400 mr-1">平台:</span>
        <button
          v-for="p in platforms"
          :key="p.id"
          @click="selectedPlatform = p.id"
          :class="[
            'px-3 py-1.5 text-xs font-medium rounded-lg transition-all border flex items-center gap-1.5 cursor-pointer',
            selectedPlatform === p.id
              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
              : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
          ]"
        >
          <span>{{ p.icon }}</span>
          <span>{{ p.label }}</span>
        </button>
      </div>

      <!-- 2. Core & Pricing & Level Dropdowns + Search Input -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
        <!-- Core Select -->
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">底层内核</label>
          <select
            v-model="selectedCore"
            class="w-full text-xs rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none"
          >
            <option v-for="c in coreOptions" :key="c.id" :value="c.id">{{ c.label }}</option>
          </select>
        </div>

        <!-- Pricing Select -->
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">资费授权</label>
          <select
            v-model="selectedPricing"
            class="w-full text-xs rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none"
          >
            <option v-for="pr in pricingOptions" :key="pr.id" :value="pr.id">{{ pr.label }}</option>
          </select>
        </div>

        <!-- Level Select -->
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">操作难度</label>
          <select
            v-model="selectedLevel"
            class="w-full text-xs rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none"
          >
            <option v-for="lv in levelOptions" :key="lv.id" :value="lv.id">{{ lv.label }}</option>
          </select>
        </div>

        <!-- Live Search -->
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">快速检索</label>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索客户端名、内核、协议..."
            class="w-full text-xs rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredClients.length === 0" class="py-12 text-center border rounded-xl border-dashed border-gray-200 bg-gray-50">
      <div class="text-3xl mb-2">🔍</div>
      <p class="text-sm font-medium text-gray-600 m-0">未找到符合当前组合条件的代理客户端</p>
      <button
        @click="selectedPlatform = 'all'; selectedCore = 'all'; selectedPricing = 'all'; selectedLevel = 'all'; searchQuery = '';"
        class="mt-3 inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 cursor-pointer"
      >
        重置所有筛选条件
      </button>
    </div>

    <!-- Cards Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="item in filteredClients"
        :key="item.id"
        class="flex flex-col justify-between rounded-xl border border-gray-200/90 bg-white p-4.5 shadow-sm transition hover:shadow-md hover:border-blue-200"
      >
        <div>
          <!-- Header: Name + Pricing Badge -->
          <div class="flex items-start justify-between gap-2">
            <div>
              <h4 class="text-base font-bold text-gray-900 m-0 flex items-center gap-2">
                {{ item.name }}
                <span
                  v-if="item.status === 'maintenance_warning'"
                  class="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300"
                >
                  维护预警
                </span>
              </h4>
              <p class="text-xs text-gray-500 mt-1 mb-2">
                核心: <span class="font-medium text-gray-700">{{ item.core }}</span>
                <span class="mx-1.5 text-gray-300">|</span>
                上手: <span class="text-gray-600">{{ item.levelNote }}</span>
              </p>
            </div>
            <span
              :class="[
                'text-[11px] font-semibold px-2 py-0.5 rounded border whitespace-nowrap',
                item.pricing === 'free'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-purple-50 text-purple-700 border-purple-200'
              ]"
            >
              {{ item.pricingNote }}
            </span>
          </div>

          <!-- Platform Badges -->
          <div class="flex flex-wrap gap-1.5 mb-2.5">
            <span
              v-for="p in item.platforms"
              :key="p"
              :class="['text-[10px] font-medium px-1.5 py-0.5 rounded border', getPlatformBadge(p).class]"
            >
              {{ getPlatformBadge(p).label }}
            </span>
          </div>

          <!-- Summary -->
          <p class="text-xs text-gray-600 line-clamp-2 leading-relaxed m-0 mb-3">
            {{ item.summary }}
          </p>

          <!-- Feature Tags -->
          <div class="flex flex-wrap gap-1 mb-3">
            <span
              v-for="f in item.features"
              :key="f"
              class="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-normal"
            >
              ✓ {{ f }}
            </span>
          </div>

          <!-- Safety Warning Banner -->
          <div
            v-if="item.warning"
            class="text-[11px] leading-relaxed p-2.5 rounded-lg border border-amber-300 bg-amber-50/90 text-amber-900 mb-3"
          >
            ⚠️ {{ item.warning }}
          </div>
        </div>

        <!-- Footer: Official Direct Link -->
        <div class="pt-3 border-t border-gray-100 flex items-center justify-between">
          <span class="text-[11px] text-gray-400">
            渠道: {{ getDownloadSourceLabel(item.downloadType) }}
          </span>
          <a
            :href="item.downloadUrl"
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50/80 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition"
          >
            <span>访问官方项目/下载</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.client-matrix-container {
  font-family: inherit;
}
</style>
