<template>
  <div class="interactive-tools-wrapper">
    <div class="tool-tabs-bar">
      <button
        v-for="t in toolList"
        :key="t.id"
        :class="['tool-tab-btn', { active: currentTool === t.id }]"
        @click="currentTool = t.id"
      >
        {{ t.title }}
      </button>
    </div>

    <!-- 工具 1：按平台与任务找机场 -->
    <div v-if="currentTool === 'finder'" class="tool-pane">
      <h4>🔍 按平台与任务找机场候选</h4>
      <p class="tool-intro">选择你日常依赖的 AI 工具或视频流媒体平台，系统将从已核验实测证据库中筛选出支持该任务的机场候选。</p>

      <div class="finder-inputs">
        <div class="input-block">
          <label>选择核心平台：</label>
          <select v-model="finderPlatform">
            <option value="openai">ChatGPT (OpenAI)</option>
            <option value="anthropic">Claude (Anthropic)</option>
            <option value="google">Gemini (Google)</option>
            <option value="netflix">Netflix 奈飞</option>
          </select>
        </div>
      </div>

      <div class="finder-results">
        <div v-for="b in matchedBrandsForPlatform" :key="b.id" class="result-brand-card">
          <div class="res-head">
            <strong>{{ b.name }}</strong>
            <span class="res-price">¥{{ b.startingPriceMonthly.toFixed(2) }}/月起</span>
          </div>
          <p class="res-summary">{{ b.summary }}</p>
          <div class="res-meta">
            <span>线路: {{ b.lineType }}</span>
            <span>协议: {{ b.protocols.join(', ') }}</span>
          </div>
          <div class="res-action">
            <a :href="`/brands/${b.id}/`" class="btn-outline btn-sm">查看品牌档案</a>
            <a :href="`/recommend/#r01`" class="btn-primary btn-sm">在推荐表中对比</a>
          </div>
        </div>
        <div v-if="matchedBrandsForPlatform.length === 0" class="empty-res">
          暂无该平台独立实测归档品牌，请稍后复核或查阅完整实测中心。
        </div>
      </div>
    </div>

    <!-- 工具 2：官方资格与地区候选查询 -->
    <div v-if="currentTool === 'region'" class="tool-pane">
      <h4>🌐 官方服务资格与地区节点匹配查询</h4>
      <p class="tool-intro">查询不同目标服务在各个国家/地区的官方支持白名单状态与推荐连接策略。</p>

      <div class="region-checker-box">
        <div class="checker-row">
          <label>选择目标服务：</label>
          <select v-model="checkerPlatform">
            <option value="openai">OpenAI / ChatGPT</option>
            <option value="anthropic">Claude (Anthropic)</option>
            <option value="google">Google Gemini / AI Studio</option>
            <option value="netflix">Netflix (跨区版权库)</option>
          </select>
        </div>

        <div class="region-status-table">
          <table>
            <thead>
              <tr>
                <th>出口地区</th>
                <th>官方白名单资格</th>
                <th>往返时延基准</th>
                <th>推荐场景与注意事项</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reg in regionStatusList" :key="reg.id">
                <td><strong>{{ reg.name }}</strong></td>
                <td>
                  <span :class="['badge', reg.eligible ? 'badge-success' : 'badge-danger']">
                    {{ reg.eligible ? '官方直接支持' : '官方不支持(需绕行分流)' }}
                  </span>
                </td>
                <td>{{ reg.latency }}</td>
                <td>{{ reg.advice }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- 工具 3：两品牌同条件比较 -->
    <div v-if="currentTool === 'compare'" class="tool-pane">
      <h4>⚖️ 两品牌同条件横向对比</h4>
      <p class="tool-intro">选择两个机场品牌，在同屏客观比对协议、专线类型、起始实付款、客户端支持与实测证据覆盖。</p>

      <div class="compare-selectors">
        <div class="sel-box">
          <label>品牌 A：</label>
          <select v-model="compareBrandA">
            <option v-for="b in brands" :key="b.id" :value="b.id">{{ b.name }}</option>
          </select>
        </div>
        <div class="sel-vs">VS</div>
        <div class="sel-box">
          <label>品牌 B：</label>
          <select v-model="compareBrandB">
            <option v-for="b in brands" :key="b.id" :value="b.id">{{ b.name }}</option>
          </select>
        </div>
      </div>

      <div class="compare-table-box" v-if="brandAInfo && brandBInfo">
        <table>
          <thead>
            <tr>
              <th>对比维度</th>
              <th>{{ brandAInfo.name }}</th>
              <th>{{ brandBInfo.name }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>运营年份</td>
              <td>{{ brandAInfo.establishedYear || '未明示' }} 年</td>
              <td>{{ brandBInfo.establishedYear || '未明示' }} 年</td>
            </tr>
            <tr>
              <td>入门折算月价</td>
              <td><strong class="highlight">¥{{ brandAInfo.startingPriceMonthly.toFixed(2) }} /月</strong></td>
              <td><strong class="highlight">¥{{ brandBInfo.startingPriceMonthly.toFixed(2) }} /月</strong></td>
            </tr>
            <tr>
              <td>线路架构</td>
              <td>{{ brandAInfo.lineType }}</td>
              <td>{{ brandBInfo.lineType }}</td>
            </tr>
            <tr>
              <td>支持协议</td>
              <td>{{ brandAInfo.protocols.join(', ') }}</td>
              <td>{{ brandBInfo.protocols.join(', ') }}</td>
            </tr>
            <tr>
              <td>自研客户端</td>
              <td>{{ brandAInfo.customClient ? '✅ 提供专属端' : '❌ 仅通用订阅' }}</td>
              <td>{{ brandBInfo.customClient ? '✅ 提供专属端' : '❌ 仅通用订阅' }}</td>
            </tr>
            <tr>
              <td>通用订阅导入</td>
              <td>{{ brandAInfo.thirdPartySupport ? '✅ 支持 Clash/Sing-box' : '❌ 仅限自研端' }}</td>
              <td>{{ brandBInfo.thirdPartySupport ? '✅ 支持 Clash/Sing-box' : '❌ 仅限自研端' }}</td>
            </tr>
            <tr>
              <td>核验来源</td>
              <td><code>{{ brandAInfo.sourceRef }}</code></td>
              <td><code>{{ brandBInfo.sourceRef }}</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 工具 4：AI与视频流量预算计算器 -->
    <div v-if="currentTool === 'traffic'" class="tool-pane">
      <h4>🧮 AI 与流媒体月度流量预算计算器</h4>
      <p class="tool-intro">纯浏览器本地计算：输入你每天的预估使用频率，估算每月大概需要的真实流量基准。</p>

      <div class="calc-grid">
        <div class="calc-input-group">
          <label>每天 AI 文字对话轮数 (提问/回答)：</label>
          <input type="number" v-model.number="calcAiPrompts" min="0" max="1000" />
          <small class="hint">通常 1 轮 1000 字对话约消耗 50KB ~ 100KB</small>
        </div>

        <div class="calc-input-group">
          <label>每天 AI 上传文档/多模态图片数量：</label>
          <input type="number" v-model.number="calcAiDocs" min="0" max="200" />
          <small class="hint">每张图或文档按平均 3MB 计算</small>
        </div>

        <div class="calc-input-group">
          <label>每天 YouTube/Netflix 1080P 观看小时：</label>
          <input type="number" v-model.number="calcVideoHours1080" min="0" max="24" step="0.5" />
          <small class="hint">1080P 视频约 1.5GB / 小时</small>
        </div>

        <div class="calc-input-group">
          <label>每天 4K Ultra HD 观看小时：</label>
          <input type="number" v-model.number="calcVideoHours4k" min="0" max="24" step="0.5" />
          <small class="hint">4K HDR 高码率约 7.0GB / 小时</small>
        </div>
      </div>

      <div class="calc-result-box">
        <div class="result-title">每月预估流量需求：</div>
        <div class="result-num">{{ estimatedMonthlyGB }} <span class="unit">GB / 月</span></div>
        <div class="result-advice">
          <strong>套餐选型建议：</strong>
          <span v-if="estimatedMonthlyGB <= 60">轻度办公型，选择 50~80GB 入门版套餐（约 ¥7~15/月）即可轻松覆盖。</span>
          <span v-else-if="estimatedMonthlyGB <= 200">中度混合型，推荐 150~250GB 档位（约 ¥20~35/月），足以覆盖晚间追剧与 AI 对话。</span>
          <span v-else>重度影音/全家多屏型，建议 500GB 以上大流量专线套餐或团队定制方案。</span>
        </div>
      </div>
    </div>

    <!-- 工具 5：实付款与周期折算计算器 -->
    <div v-if="currentTool === 'cost'" class="tool-pane">
      <h4>💰 实付款与周期折算计算器</h4>
      <p class="tool-intro">防止被宣传中的“折合约 ¥5/月”误导。输入商家的总价格与计费周期，计算真实单月成本与首次资金占用。</p>

      <div class="cost-calc-form">
        <div class="form-row">
          <label>标称支付金额 (元)：</label>
          <input type="number" v-model.number="costTotalPay" min="1" step="1" />
        </div>
        <div class="form-row">
          <label>结算周期：</label>
          <select v-model="costCycle">
            <option value="1">单月付 (1个月)</option>
            <option value="3">季付 (3个月)</option>
            <option value="6">半年付 (6个月)</option>
            <option value="12">年付 (12个月)</option>
            <option value="24">两年付 (24个月)</option>
          </select>
        </div>
      </div>

      <div class="cost-calc-summary">
        <div class="summary-card">
          <div class="k">首次实付扣费</div>
          <div class="v">¥{{ costTotalPay }}</div>
          <div class="sub">钱包首期直接支出</div>
        </div>
        <div class="summary-card highlight">
          <div class="k">折算月均成本</div>
          <div class="v">¥{{ (costTotalPay / Number(costCycle)).toFixed(2) }}</div>
          <div class="sub">实际每月摊销</div>
        </div>
      </div>
      <div class="cost-warning" v-if="Number(costCycle) >= 12">
        ⚠️ 风险提醒：年付虽月均低，但若服务商中途线路劣化或跑路，沉没成本较高。建议新手首月先以月付体验验证常用任务后再考虑长周期。
      </div>
    </div>

    <!-- 工具 6：测试记录筛选与历史对照 -->
    <div v-if="currentTool === 'tests'" class="tool-pane">
      <h4>📊 测试记录多维筛选</h4>
      <p class="tool-intro">按测试平台、地区及结果筛选本站收录的真实抓包与连通性记录：</p>
      <PlatformTaskMatrix />
    </div>

    <!-- 工具 7：按错误现象选择排障路径 -->
    <div v-if="currentTool === 'trouble'" class="tool-pane">
      <h4>🔧 按错误现象选择排障路径</h4>
      <p class="tool-intro">根据你在使用 AI 或流媒体时遇到的具体错误提示，匹配推荐排查步骤：</p>

      <div class="trouble-selector">
        <label>选择你遇到的现象：</label>
        <select v-model="selectedTrouble">
          <option value="t1">ChatGPT 登录提示 "Access Denied" (1020 / Cloudflare 拦截)</option>
          <option value="t2">Claude 提示 "Not available in your region"</option>
          <option value="t3">对话生成中途转圈，提示 "Network Error" 断流</option>
          <option value="t4">Netflix 提示 "您似乎正在使用代理或解锁工具"</option>
          <option value="t5">终端/命令行运行 Python/Node SDK 报错 Connection Refused</option>
        </select>
      </div>

      <div class="trouble-advice-card" v-if="troubleGuide">
        <div class="tr-cause">
          <strong>根本原因定位：</strong> {{ troubleGuide.cause }}
        </div>
        <div class="tr-steps">
          <strong>标准化排障步骤：</strong>
          <ol>
            <li v-for="(s, i) in troubleGuide.steps" :key="i">{{ s }}</li>
          </ol>
        </div>
        <div class="tr-action">
          <a :href="troubleGuide.guideUrl" class="btn-primary btn-sm">查看详细图文排障指南 &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import PlatformTaskMatrix from './PlatformTaskMatrix.vue';
import brandsData from '../../../../data/public/brands.json';
import observationsData from '../../../../data/public/observations.json';

const brands = brandsData;

const toolList = [
  { id: 'finder', title: '🔍 按任务找机场' },
  { id: 'region', title: '🌐 地区资格查询' },
  { id: 'compare', title: '⚖️ 两品牌同屏比对' },
  { id: 'traffic', title: '🧮 流量预算计算器' },
  { id: 'cost', title: '💰 实付款折算器' },
  { id: 'tests', title: '📊 历史实测对照' },
  { id: 'trouble', title: '🔧 报错排障决策' }
];

const currentTool = ref('finder');

// Tool 1: Finder
const finderPlatform = ref('openai');
const matchedBrandsForPlatform = computed(() => {
  const brandIdsWithObs = new Set(
    observationsData.filter(o => o.platformId === finderPlatform.value && (o.result === 'success' || o.result === 'partial')).map(o => o.brandId)
  );
  return brandsData.filter(b => brandIdsWithObs.has(b.id));
});

// Tool 2: Region
const checkerPlatform = ref('openai');
const regionStatusList = computed(() => {
  if (checkerPlatform.value === 'openai' || checkerPlatform.value === 'anthropic' || checkerPlatform.value === 'google') {
    return [
      { id: 'hk', name: '香港 (HK)', eligible: false, latency: '15-35 ms', advice: '官方政策不直接支持，直连会被阻断，需配合机场高级分流规则绕行。' },
      { id: 'jp', name: '日本 (JP)', eligible: true, latency: '45-80 ms', advice: '官方全面支持，亚太专线出口首选，综合时延与稳定性最佳。' },
      { id: 'sg', name: '新加坡 (SG)', eligible: true, latency: '40-70 ms', advice: '官方全面支持，国际出口骨干汇聚，跨国办公主力。' },
      { id: 'us', name: '美国 (US)', eligible: true, latency: '130-190 ms', advice: '新模型首发资格区，功能最全，但物理延迟稍高。' }
    ];
  } else {
    return [
      { id: 'hk', name: '香港 (HK)', eligible: true, latency: '15-35 ms', advice: '支持港区 Netflix / Disney+ 繁体中文特有片库。' },
      { id: 'jp', name: '日本 (JP)', eligible: true, latency: '45-80 ms', advice: '日区动漫与独占剧集最全，需注意必须通过非自制剧播放实测。' },
      { id: 'sg', name: '新加坡 (SG)', eligible: true, latency: '40-70 ms', advice: '双语字幕极全，适合华语观众。' },
      { id: 'us', name: '美国 (US)', eligible: true, latency: '130-190 ms', advice: '片库最庞大，但对机房 IP 审查最为苛刻。' }
    ];
  }
});

// Tool 3: Compare
const compareBrandA = ref('lightspeed');
const compareBrandB = ref('wgetcloud');
const brandAInfo = computed(() => brandsData.find(b => b.id === compareBrandA.value));
const brandBInfo = computed(() => brandsData.find(b => b.id === compareBrandB.value));

// Tool 4: Traffic Calc
const calcAiPrompts = ref(30);
const calcAiDocs = ref(2);
const calcVideoHours1080 = ref(1);
const calcVideoHours4k = ref(0.5);

const estimatedMonthlyGB = computed(() => {
  const aiTextGB = (calcAiPrompts.value * 30 * 0.08) / 1024; // ~0.08MB per prompt
  const aiDocsGB = (calcAiDocs.value * 30 * 3) / 1024; // 3MB per doc
  const video1080GB = calcVideoHours1080.value * 30 * 1.5;
  const video4kGB = calcVideoHours4k.value * 30 * 7.0;
  return Math.ceil(aiTextGB + aiDocsGB + video1080GB + video4kGB);
});

// Tool 5: Cost Calc
const costTotalPay = ref(99);
const costCycle = ref('12');

// Tool 7: Trouble
const selectedTrouble = ref('t1');
const troubleGuide = computed(() => {
  switch (selectedTrouble.value) {
    case 't1':
      return {
        cause: '出口 IP 触发 Cloudflare 边缘安全规则，多因 IP 被识别为机房数据中心或滥用黑名单。',
        steps: [
          '检查客户端节点出口，切换为日本或新加坡的原生/专线落地节点；',
          '清除浏览器针对 chatgpt.com 的 Cookie 与本地储存；',
          '确保 DNS 解析无国内污染（开启纯洁净远端 DNS 解析）。'
        ],
        guideUrl: '/guides/#u03'
      };
    case 't2':
      return {
        cause: '节点出口识别处于未开放地区（如香港出口），或出口 IP 机房声誉过低被 Anthropic 拒绝服务。',
        steps: [
          '严禁使用香港节点直接访问 claude.ai；',
          '切换至美国或日本专线节点，使用无痕窗口重新认证；',
          '若仍报错，检查客户端分流规则是否误将 Claude 流量分流到了直连。'
        ],
        guideUrl: '/guides/#u01'
      };
    case 't3':
      return {
        cause: '长连接（SSE / WebSocket）被代理客户端超时中断，或节点晚高峰持续丢包。',
        steps: [
          '检查代理客户端是否开启了自动断开空闲连接；',
          '更换为 IEPL 企业级专线节点（低抖动防丢包）；',
          '暂时关闭本地杀毒软件对网络流量的深度拦截扫描。'
        ],
        guideUrl: '/guides/#u04'
      };
    case 't4':
      return {
        cause: 'Netflix 识别出当前出口为商业 IDC 代理 IP，触发反代理版权保护机制。',
        steps: [
          '切换机场专门标注为“流媒体解锁”或“原生 IP”的节点；',
          '在浏览器完全退出 Netflix 账号并重新打开页面播放；',
          '核验本站 [/tests/] 对应品牌的最新版权片播放实测。'
        ],
        guideUrl: '/streaming/#s01'
      };
    case 't5':
      return {
        cause: '系统终端默认不读取全局系统代理，需手动设置终端环境变量代理。',
        steps: [
          '检查代理客户端的本地 Mixed/HTTP 端口（如 7890）；',
          '在终端配置 export https_proxy=http://127.0.0.1:7890（Windows 为 $env:https_proxy）；',
          '测试 curl -I https://api.openai.com 验证连通性。'
        ],
        guideUrl: '/guides/#u06'
      };
    default:
      return null;
  }
});
</script>

<style scoped>
.interactive-tools-wrapper {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  background-color: var(--vp-c-bg);
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  overflow: hidden;
}

.tool-tabs-bar {
  display: flex;
  overflow-x: auto;
  background-color: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-border);
  padding: 6px 8px;
  gap: 6px;
}

.tool-tab-btn {
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.tool-tab-btn:hover {
  background-color: var(--vp-c-bg);
  color: var(--vp-c-brand-2);
}

.tool-tab-btn.active {
  background-color: var(--vp-c-bg);
  color: var(--vp-c-brand-2);
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.tool-pane {
  padding: 1.25rem;
}

.tool-pane h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.15rem;
  color: var(--vp-c-text-1);
}

.tool-intro {
  font-size: 0.86rem;
  color: var(--vp-c-text-3);
  margin-bottom: 1rem;
}

.finder-inputs {
  margin-bottom: 1rem;
}

.input-block {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
}

.input-block select {
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.finder-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 12px;
}

.result-brand-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1rem;
  background-color: var(--vp-c-bg-alt);
}

.res-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.res-price {
  font-weight: 700;
  color: var(--vp-c-brand-2);
}

.res-summary {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  line-height: 1.45;
  margin-bottom: 8px;
}

.res-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin-bottom: 10px;
}

.res-action {
  display: flex;
  gap: 8px;
}

.empty-res {
  grid-column: 1 / -1;
  text-align: center;
  padding: 1.5rem;
  color: var(--vp-c-text-3);
  font-style: italic;
}

/* Compare */
.compare-selectors {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 1rem;
  background-color: var(--vp-c-bg-alt);
  padding: 10px;
  border-radius: 8px;
}

.sel-box {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
}

.sel-box select {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-border);
}

.sel-vs {
  font-weight: 800;
  color: var(--vp-c-brand-2);
}

.highlight {
  color: var(--vp-c-brand-2);
}

/* Traffic Calc */
.calc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin-bottom: 1.25rem;
}

.calc-input-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: var(--vp-c-bg-alt);
  padding: 10px;
  border-radius: 6px;
}

.calc-input-group label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.calc-input-group input {
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-border);
  font-size: 0.95rem;
}

.calc-input-group .hint {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}

.calc-result-box {
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  padding: 1.25rem;
  text-align: center;
}

.result-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e40af;
}

.result-num {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1d4ed8;
  margin: 6px 0;
}

.result-num .unit {
  font-size: 1rem;
  font-weight: 500;
}

.result-advice {
  font-size: 0.85rem;
  color: #1e3a8a;
  text-align: left;
  line-height: 1.5;
  margin-top: 8px;
}

/* Cost Calc */
.cost-calc-form {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 1.25rem;
}

.form-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
}

.form-row input, .form-row select {
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-border);
}

.cost-calc-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 1rem;
}

.summary-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1rem;
  background-color: var(--vp-c-bg-alt);
  text-align: center;
}

.summary-card.highlight {
  border-color: #93c5fd;
  background-color: #eff6ff;
}

.summary-card .k {
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
}

.summary-card .v {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin: 4px 0;
}

.summary-card.highlight .v {
  color: var(--vp-c-brand-2);
}

.summary-card .sub {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}

.cost-warning {
  background-color: #fffbeb;
  border: 1px solid #fde68a;
  color: #92400e;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.82rem;
  line-height: 1.45;
}

/* Trouble */
.trouble-selector {
  margin-bottom: 1rem;
}

.trouble-selector select {
  width: 100%;
  max-width: 500px;
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-border);
  font-size: 0.88rem;
}

.trouble-advice-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1.25rem;
  background-color: var(--vp-c-bg-alt);
}

.tr-cause {
  font-size: 0.88rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.75rem;
}

.tr-steps {
  font-size: 0.88rem;
  margin-bottom: 1rem;
}

.tr-steps ol {
  padding-left: 20px;
  margin-top: 6px;
  color: var(--vp-c-text-2);
}

.tr-steps li {
  margin-bottom: 4px;
}
</style>
