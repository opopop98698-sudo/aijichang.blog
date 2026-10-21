<template>
  <div class="decision-tree-card">
    <div class="tree-header">
      <span class="tree-badge">选型决策树</span>
      <h4>你主要用网络做什么？点击分支直接获取行动路径</h4>
    </div>

    <div class="tree-interactive">
      <div class="step-buttons">
        <button
          v-for="b in branches"
          :key="b.id"
          :class="['branch-btn', { active: selectedBranch === b.id }]"
          @click="selectedBranch = b.id"
        >
          {{ b.title }}
        </button>
      </div>

      <div class="branch-detail" v-if="currentBranch">
        <div class="flow-steps">
          <div v-for="(step, i) in currentBranch.steps" :key="i" class="flow-step-item">
            <div class="step-num">{{ i + 1 }}</div>
            <div class="step-txt">{{ step }}</div>
          </div>
        </div>

        <div class="flow-action">
          <span class="action-hint">推荐主承接入口：</span>
          <a :href="currentBranch.targetUrl" class="btn-primary btn-sm">
            {{ currentBranch.targetText }} &rarr;
          </a>
        </div>
      </div>
    </div>

    <details class="ascii-fallback">
      <summary>查看完整 ASCII 决策树文本图谱</summary>
      <pre class="ascii-pre"><code>你主要做什么？
+-- AI工作
|   +-- 先确认产品：网页 / 移动应用 / API / 开发工具
|   +-- 再确认官方资格、账号权益与设备系统
|   +-- 前往 [/ai/] 筛选有对应具体任务证据的机场
+-- 视频或TikTok
|   +-- 明确平台、片目或任务、会员套餐与播放设备
|   +-- 前往 [/streaming/] 查看实际播放或发布成功记录
+-- 想先免费体验
|   +-- 前往 [/free/] 确认零付款或试用条件与隐私限制
|   +-- 若当前无已核实资源：如实说明范围，绝不编造
+-- 遇到连接故障
    +-- 前往 [/guides/] 先区分账户、平台自身与网络问题
    +-- 前往 [/tests/] 核对相同条件下的历史与当前记录
最终收敛：核对真实实付、支持客户端、协议倍率和设备数后自主决策。</code></pre>
    </details>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const selectedBranch = ref('ai');

const branches = [
  {
    id: 'ai',
    title: '🤖 AI 工作与开发',
    steps: [
      '第一步：确认具体产品入口（ChatGPT 网页版、移动端、Claude Code 或 OpenAI API）',
      '第二步：核查官方服务资格（如香港出口不支持 OpenAI 网页登录，需日本/新加坡节点）',
      '第三步：查阅分平台任务矩阵，寻找有长文本流式与多模态实测证据的机场'
    ],
    targetUrl: '/ai/',
    targetText: '进入 AI机场推荐看板'
  },
  {
    id: 'streaming',
    title: '🎬 视频追剧与 TikTok',
    steps: [
      '第一步：明确平台与片目需求（如 Netflix 日区动画、美区独家剧、Disney+ 或 YouTube 4K）',
      '第二步：确认播放设备与客户端（电视机 AppleTV / 软路由 / 手机）',
      '第三步：核验节点高峰期抗拥塞能力与版权片目实际播放记录，避免仅看首页'
    ],
    targetUrl: '/streaming/',
    targetText: '进入 流媒体机场选型指南'
  },
  {
    id: 'free',
    title: '🎁 零预算与试用',
    steps: [
      '第一步：了解零付款资源的生命周期与限速限额风险',
      '第二步：核查试用资格是否需绑定支付方式或安装未知根证书（严防安全隐患）',
      '第三步：若免费无法满足工作，对比低至 ¥7~10/月 的正规小额月付方案'
    ],
    targetUrl: '/free/',
    targetText: '查看 免费机场与试用核查'
  },
  {
    id: 'troubleshoot',
    title: '🛠️ 已有故障排查',
    steps: [
      '第一步：区分是平台风控（429/403/Access Denied）还是网络底层断连',
      '第二步：检查客户端 DNS 解析与分流规则（TUN模式与系统代理差异）',
      '第三步：依据症状决策树逐步回退验证，定位原因前不盲目频繁换节点'
    ],
    targetUrl: '/guides/',
    targetText: '进入 AI使用与网络排障指南'
  }
];

const currentBranch = computed(() => {
  return branches.find(b => b.id === selectedBranch.value);
});
</script>

<style scoped>
.decision-tree-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  padding: 1.25rem;
  background-color: var(--vp-c-bg);
  margin: 1.5rem 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}

.tree-header {
  margin-bottom: 1rem;
}

.tree-badge {
  background-color: #f0fdf4;
  color: #166534;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
}

.tree-header h4 {
  margin: 4px 0 0 0;
  font-size: 1.15rem;
  color: var(--vp-c-text-1);
}

.step-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.25rem;
}

.branch-btn {
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.88rem;
  font-weight: 600;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
}

.branch-btn:hover {
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-2);
}

.branch-btn.active {
  background-color: var(--vp-c-brand-2);
  color: #ffffff;
  border-color: var(--vp-c-brand-2);
}

.branch-detail {
  background-color: var(--vp-c-bg-alt);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  border: 1px solid var(--vp-c-border);
}

.flow-steps {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1.25rem;
}

.flow-step-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.step-num {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: var(--vp-c-brand-2);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
}

.step-txt {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}

.flow-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 0.75rem;
  flex-wrap: wrap;
  gap: 8px;
}

.action-hint {
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
}

.ascii-fallback {
  margin-top: 1rem;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
}

.ascii-fallback summary {
  cursor: pointer;
}

.ascii-pre {
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  padding: 10px;
  border-radius: 6px;
  font-size: 0.78rem;
  overflow-x: auto;
  margin-top: 8px;
}
</style>
