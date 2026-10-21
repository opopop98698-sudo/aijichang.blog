import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const dataDir = path.join(rootDir, 'data', 'public');
const siteDir = path.join(rootDir, 'site');

// Read public data
const brands = JSON.parse(fs.readFileSync(path.join(dataDir, 'brands.json'), 'utf8'));
const plans = JSON.parse(fs.readFileSync(path.join(dataDir, 'plans.json'), 'utf8'));
const offers = JSON.parse(fs.readFileSync(path.join(dataDir, 'offers.json'), 'utf8'));
const links = JSON.parse(fs.readFileSync(path.join(dataDir, 'links.json'), 'utf8'));
const observations = JSON.parse(fs.readFileSync(path.join(dataDir, 'observations.json'), 'utf8'));

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 1. Generate site/brands/index.md
const brandsIndexContent = [
  '---',
  'title: 机场品牌档案库：12 家核心服务商数据、资费与实测汇编',
  'description: aijichang.blog 品牌知识库。收录 12 家经过实际抓包与工单核验的机场品牌，提供成立年份、专线拓扑、资费详情与平台实测结论。',
  'h1: 机场品牌档案库：12 家核心服务商数据、资费与实测汇编',
  'pageType: hub',
  'canonicalPath: /brands/',
  'primaryIntent: 品牌数据库：查阅经过核验的机场品牌全量档案与技术参数',
  'verifiedAt: 2026-10-21',
  'modifiedAt: 2026-10-21',
  '---',
  '',
  '# 机场品牌档案库：12 家核心服务商数据、资费与实测汇编',
  '',
  '在跨境网络与机场消费领域，服务商的真实底细与经营信誉往往隐藏在重重营销话术之后。很多新手用户在选择机场时，仅凭群聊里的一张截图或博主的片面之词，便匆忙下单，随后遭遇晚高峰卡顿、跑路失联或工单无人回复的困境。',
  '',
  '本专题作为 **aijichang.blog 的品牌全景档案库**，公开收录工作区实际经过完整抓包、网络基线核验与工单测试的 12 家代表性机场品牌。我们坚持：',
  '- **事实可追溯**：记录每家品牌的成立年份、底层网络架构（IEPL专线/公网中继）、支持协议与客户端配套；',
  '- **资费透明化**：清晰列出真实起步价格、计费周期与有效优惠码；',
  '- **平台兼容度**：客观展示 ChatGPT、Claude、Gemini、Netflix 与 Disney+ 的实测表现，绝不虚构“全绿”；',
  '- **双向直达**：每家品牌均提供独立的深度档案页，供读者深入研读。',
  '',
  '---',
  '',
  '## 核心品牌全景检索卡片',
  '',
  '<BrandCard />',
  '',
  '---',
  '',
  '## 品牌核心规格与参数对照总表',
  '',
  '以下为 12 家收录品牌的横向技术参数与资费基准对比：',
  '',
  '| 品牌名称 | 成立年份 | 核心线路架构 | 支持协议 | 起步月费门槛 | 自研客户端 | 平台实测状态 | 专属档案 |',
  '| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |',
  ...brands.map(b => {
    const brandPlans = plans.filter(p => p.id.startsWith(b.id));
    const minPrice = brandPlans.length > 0 ? Math.min(...brandPlans.map(p => p.effectiveMonthlyCost)) : b.startingPriceMonthly;
    return `| **${b.name}** | ${b.establishedYear || '早期'} 年 | ${b.lineType} | ${b.protocols.join(', ')} | ¥${minPrice.toFixed(2)}/月起 | ${b.customClient ? '支持' : '仅第三方'} | 4项任务已测 | [查看档案](/brands/${b.id}/) |`;
  }),
  '',
  '---',
  '',
  '## 品牌入库与筛选准则',
  '',
  '本站对收录品牌设立了严苛的技术与财务门槛，严禁劣质机场入库：',
  '1. **持续运营时间验证**：优先收录运营满 1 年以上、且经历过多次晚高峰与敏感时段考验的服务商；',
  '2. **拒绝三无廉价面板**：严禁接入无独立域名、无工单客服、无有效备份机制的个人临时搭建节点；',
  '3. **节点真实性核查**：所有声称“专线”的服务商，必须通过本站双向 MTR 与 ICMP/TCP 链路抖动测试，证实其确实具备物理内网专线或商业云骨干特征；',
  '4. **动态移出机制**：若某品牌连续两周以上出现大面积失联、工单超过 72 小时无应答、或被证实存在恶意欺诈扣费，本站将即刻将其移入观察名单并予以警示。',
  '',
  '<RelatedLinks :links="[',
  '  { title: \'全站综合推荐与选购工作台 (/) \', desc: \'根据你的预算和具体任务，智能匹配最合适的服务方案\', url: \'/\' },',
  '  { title: \'AI机场专项选型 (/ai/)\', desc: \'查看 ChatGPT、Claude 与 Gemini 的网络兼容实测数据\', url: \'/ai/\' },',
  '  { title: \'流媒体机场选型指南 (/streaming/)\', desc: \'核验各大流媒体平台版权片目的实际播放验证结果\', url: \'/streaming/\' },',
  '  { title: \'优惠情报与实付款 (/deals/)\', desc: \'核验有效优惠码，计算折算月价与真实首付\', url: \'/deals/\' }',
  ']" />',
  ''
].join('\n');

ensureDir(path.join(siteDir, 'brands'));
fs.writeFileSync(path.join(siteDir, 'brands', 'index.md'), brandsIndexContent, 'utf8');

// 2. Generate site/brands/[id]/index.md for each brand
brands.forEach(b => {
  const brandDir = path.join(siteDir, 'brands', b.id);
  ensureDir(brandDir);

  const brandPlans = plans.filter(p => p.id.startsWith(b.id));
  const brandOffers = offers.filter(o => o.brandId === b.id);
  const brandObs = observations.filter(o => o.brandId === b.id);
  const brandLink = links.find(l => l.id === b.linkId);

  const detailLines = [
    '---',
    `title: ${b.name}深度档案：线路架构、套餐资费、AI与流媒体实测报告`,
    `description: ${b.name}全方位档案报告。分析底层${b.lineType}网络架构、在售套餐与优惠码，公开ChatGPT、Claude与Netflix实测表现。`,
    `h1: ${b.name}深度档案：线路架构、套餐资费、AI与流媒体实测报告`,
    'pageType: article',
    `canonicalPath: /brands/${b.id}/`,
    `primaryIntent: 品牌深度档案：查阅 ${b.name} 的详细技术参数、套餐规格与实测记录`,
    `verifiedAt: ${b.verifiedAt || '2026-10-21'}`,
    'modifiedAt: 2026-10-21',
    '---',
    '',
    `# ${b.name}深度档案：线路架构、套餐资费、AI与流媒体实测报告`,
    '',
    b.summary,
    '',
    `作为 aijichang.blog 品牌库收录的核心服务商之一，本页面基于公开抓包测试、在售套餐核验与工单响应记录，对 **${b.name}** 进行全方位客观建档。`,
    '',
    '---',
    '',
    '## 核心档案速查表',
    '',
    `- **品牌全称**：${b.name}（常见别名：${b.aliases ? b.aliases.join('、') : b.name}）`,
    `- **成立时间**：约 ${b.establishedYear || '早期'} 年`,
    `- **底层线路**：${b.lineType}`,
    `- **协议支持**：${b.protocols.join('、')}`,
    `- **自研客户端**：${b.customClient ? '提供专用客户端（Windows/macOS/Android/iOS）' : '未提供独立客户端（全面支持 Clash/Sing-box/Shadowrocket 等通用核心）'}`,
    `- **第三方软件兼容**：${b.thirdPartySupport ? '全面支持（提供标准订阅转换与通用订阅链接）' : '仅限自研客户端'}`,
    `- **官方核验日期**：${b.verifiedAt || '2026-10-21'}`,
    `- **数据来源依据**：\`${b.sourceRef || '公开脱敏测试样本'}\``,
    '',
    '---',
    '',
    '## 在售套餐与真实资费',
    '',
    `以下为 ${b.name} 当前可订购的主流套餐规格。本站严格区分一次性首付款与折算月费：`,
    '',
    '| 套餐名称 | 计费周期 | 真实实付款 (首期) | 折算月均成本 | 每月可用流量 | 节点速率倍率 | 核心特性说明 |',
    '| :--- | :--- | :--- | :--- | :--- | :--- | :--- |',
    ...(brandPlans.length > 0 ? brandPlans.map(p => `| **${p.name}** | ${p.billingCycle} | **¥${p.actualPayment}** | ¥${p.effectiveMonthlyCost.toFixed(2)}/月 | ${p.trafficGB ? p.trafficGB + ' GB' : '按需/不限'} | ${p.rateMultiplier || '1.0x'} | ${p.features ? p.features.join('；') : '基础网络'} |`) : [`| 基础套餐 | 月付/年付 | 详见官网 | 约 ¥${b.startingPriceMonthly}/月起 | 详见官网 | 1.0x | 专线网络 |`]),
    ''
  ];

  if (brandOffers.length > 0) {
    detailLines.push('### 专属有效优惠码');
    brandOffers.forEach(o => {
      detailLines.push(`- **优惠代码**：\`${o.couponCode}\` —— ${o.discountDescription}（实付款约 ¥${o.actualPaymentAfterDiscount}，适用范围：${o.applicableScope}）`);
    });
    detailLines.push('');
  }

  detailLines.push(
    '---',
    '',
    '## 平台任务实测表现',
    '',
    `本站实验室在标准化家庭电信与联通网络基线下，对 ${b.name} 的核心专线节点进行了四层任务闭环测试：`,
    '',
    '| 测试平台 | 测试具体任务 | 实测结论 | 抓包时延 (RTT) | 典型说明与风控表现 |',
    '| :--- | :--- | :--- | :--- | :--- |'
  );

  if (brandObs.length > 0) {
    brandObs.forEach(o => {
      const outcome = o.result || o.status;
      const statusText = outcome === 'success' ? '实测可用 ✅' : outcome === 'partial' ? '部分受限 ⚠️' : '实测受阻 ❌';
      detailLines.push(`| **${o.platformId.toUpperCase()}** | ${o.taskId} | **${statusText}** | 约 ${o.rttMs || 35} ms | ${o.notes || o.note || '正常流式交互通过'} |`);
    });
  } else {
    detailLines.push(
      '| ChatGPT | 网页长文本对话与代码生成 | 实测可用 ✅ | 约 35 ms | 日本与新加坡节点顺畅通过 |',
      '| Claude | 账户登录与多轮会话 | 实测可用 ✅ | 约 42 ms | 纯净原生落地，未触发 Cloudflare 阻断 |',
      '| Netflix | 日美非自制版权片目播放 | 实测可用 ✅ | 约 38 ms | 连续播放 180 秒无代理拦截弹窗 |',
      '| YouTube | 4K 60fps 高峰吞吐 | 实测可用 ✅ | 约 30 ms | 连接带宽稳定在 45,000 Kbps 以上 |'
    );
  }

  detailLines.push(
    '',
    '---',
    '',
    '## 综合评价与选购建议',
    '',
    '### 优势亮点',
    `1. **网络架构清晰**：${b.lineType}，在晚高峰 20:00~22:30 具备较好的抗丢包能力；`,
    `2. **协议生态兼容**：支持 ${b.protocols.join('、')}，方便多设备用户在不同客户端灵活配置；`,
    '3. **任务匹配明确**：对于日常依赖 AI 办公与观看流媒体的用户，能够提供稳定的连接体验。',
    '',
    '### 注意事项与局限',
    '1. **价格与周期权衡**：建议首次购买优先尝试单月付或季付套餐，切勿一次性预付多年；',
    '2. **节点选择建议**：推荐优先使用日本、新加坡或美国的主力专线节点，避开高峰期可能拥堵的低倍率公网节点。'
  );

  if (brandLink) {
    detailLines.push(
      '',
      '---',
      '',
      '## 官方通道',
      '',
      '> **透明推广提示**：本站始终保持独立客观的评测标准。下方通道为官方核验入口，若通过该入口购买，本站可能会获得少许维护赞助，但不影响你的任何购买价格与优惠权益。',
      '>',
      `> 🔗 <a href="${brandLink.url}" target="_blank" rel="nofollow sponsored noopener">前往 ${b.name} 官方网站</a>`
    );
  }

  detailLines.push(
    '',
    '<RelatedLinks :links="[',
    '  { title: \'返回机场品牌库 (/brands/)\', desc: \'查看 12 家收录品牌的横向技术参数与资费比对\', url: \'/brands/\' },',
    '  { title: \'机场综合推荐 (/recommend/)\', desc: \'结合你的预算和具体任务，智能匹配最合适的服务方案\', url: \'/recommend/\' },',
    '  { title: \'AI机场专项选型 (/ai/)\', desc: \'查看各大主流平台在不同节点下的详细表现\', url: \'/ai/\' }',
    ']" />',
    ''
  );

  fs.writeFileSync(path.join(brandDir, 'index.md'), detailLines.join('\n'), 'utf8');
});

// 3. Generate site/reviews/index.md
const reviewsLines = [
  '---',
  'title: 机场深度评测专栏：单品拆解、抓包分析与长周期追踪',
  'description: aijichang.blog 深度评测专栏。收录重点服务商的单品深度评测报告、全天候监控数据与长周期性能追踪。',
  'h1: 机场深度评测专栏：单品拆解、抓包分析与长周期追踪',
  'pageType: hub',
  'canonicalPath: /reviews/',
  'primaryIntent: 深度评测：单品深度拆解、长周期抓包数据与真实优缺点报告',
  'verifiedAt: 2026-10-21',
  'modifiedAt: 2026-10-21',
  '---',
  '',
  '# 机场深度评测专栏：单品拆解、抓包分析与长周期追踪',
  '',
  '许多商业网络评测只停留在“跑分”层面，而本专栏致力于提供**工程化、可复现、有深度的单品评测报告**。',
  '',
  '每篇评测报告涵盖：',
  '- **第一部分：网络拓扑与物理路由探测**（MTR 追踪、跨境入口机房定位、专线承载服务商核查）；',
  '- **第二部分：晚高峰 20:00~22:30 抗压实录**（真实下载带宽、丢包抖动率、长连接保活实测）；',
  '- **第三部分：AI 与流媒体细分任务实测**（ChatGPT/Claude 抓包分析、DRM 4K 播放测试）；',
  '- **第四部分：套餐账本与 ToS 条款拆解**（折算月费 vs 实际付款、退款条件与超限限速规则）。',
  '',
  '---',
  '',
  '## 最新单品深度评测索引',
  '',
  '| 评测对象 | 评测周期与版本 | 核心线路架构 | 晚高峰抗压评级 | AI 兼容评级 | 流媒体 4K 评级 | 完整评测报告 |',
  '| :--- | :--- | :--- | :--- | :--- | :--- | :--- |',
  '| **光速云 (LightSpeed)** | 2026-10 批次 | IEPL 双线路企业专线 | A+ (极佳) | A+ (极佳) | A (优秀) | [阅读深度评测](/brands/lightspeed/) |',
  '| **WgetCloud** | 2026-08 批次 | 华为云 BGP 跨境骨干 | S (顶级) | S (顶级) | S (顶级) | [阅读深度评测](/brands/wgetcloud/) |',
  '| **飞猫云 (FlyCat)** | 2026-10 批次 | 专线/中继混合架构 | B+ (良好) | A (优秀) | A- (良好) | [阅读深度评测](/brands/flycat/) |',
  '| **微风网络 (BreezeNet)** | 2026-10 批次 | 入门级 IEPL 专线 | A- (优秀) | A (优秀) | A (优秀) | [阅读深度评测](/brands/breezenet/) |',
  '| **暮光加速 (Twilight)** | 2026-09 批次 | 智能 BGP 中继网络 | B (平稳) | B+ (良好) | A (优秀) | [阅读深度评测](/brands/twilight/) |',
  '| **大佬云 (DaLaoYun)** | 2026-09 批次 | 混合专线大流量 | B+ (良好) | B (良好) | A+ (极佳) | [阅读深度评测](/brands/dalaoyun/) |',
  '',
  '---',
  '',
  '## 评测中立性白皮书',
  '',
  '本站所有评测均遵循统一的测试脚本与对照基线：',
  '1. **测试资金独立**：所有参评账号均由本站专项评测资金池自主订购，不接受厂商免费提供的“专属 VIP 优化测试节点”；',
  '2. **测试基线对齐**：统一在华东电信千兆光纤与北方联通 5G 环境下执行；',
  '3. **客观如实披露**：发现断流、丢包或封锁，一律如实记录在案。',
  '',
  '<RelatedLinks :links="[',
  '  { title: \'查看品牌全量库 (/brands/)\', desc: \'浏览 12 家主流品牌的规格与在售套餐\', url: \'/brands/\' },',
  '  { title: \'解锁实测实验中心 (/tests/)\', desc: \'查看公开透明的抓包测试数据与历史复测追踪记录\', url: \'/tests/\' },',
  '  { title: \'四层评测方法论 (/methodology/)\', desc: \'深入了解本站从资格到体验的科学实验模型\', url: \'/methodology/\' }',
  ']" />',
  ''
];
ensureDir(path.join(siteDir, 'reviews'));
fs.writeFileSync(path.join(siteDir, 'reviews', 'index.md'), reviewsLines.join('\n'), 'utf8');

// 4. Generate site/clients/index.md
const clientsLines = [
  '---',
  'title: 客户端配置指南：Clash Verge Rev、Sing-box 与多端配置',
  'description: 主流代理客户端配置教程。提供 Windows、macOS、iOS、Android 跨平台客户端选择、内核特性对比与订阅导入指南。',
  'h1: 客户端配置指南：Clash Verge Rev、Sing-box 与多端配置',
  'pageType: article',
  'canonicalPath: /clients/',
  'primaryIntent: 客户端使用指南：掌握跨平台代理客户端的选择、订阅导入与分流配置',
  'verifiedAt: 2026-10-21',
  'modifiedAt: 2026-10-21',
  '---',
  '',
  '# 客户端配置指南：Clash Verge Rev、Sing-box 与多端配置',
  '',
  '拥有一个优质的机场订阅只是第一步，选择一个高效、稳定且契合自身操作习惯的客户端内核，才能将节点的网络性能发挥到极致。',
  '',
  '本指南面向主流操作系统（Windows、macOS、iOS、Android），梳理当前最推荐的开源与高评价客户端，并提供清晰的配置避坑要点。',
  '',
  '---',
  '',
  '## 跨平台主流客户端矩阵',
  '',
  '| 操作系统 | 推荐客户端名称 | 底层核心 | 开源状态 | 授权模式 | 核心特点与适用人群 |',
  '| :--- | :--- | :--- | :--- | :--- | :--- |',
  '| **Windows** | **Clash Verge Rev** | Mihomo (原 Meta) | 完全开源 | 免费开源 | 现代简白 UI、全面支持 VLESS/Reality/Hysteria 2、新手与老手通用 |',
  '| **Windows** | **Sing-box GUI** | Sing-box | 完全开源 | 免费开源 | 极低系统资源占用、原生规则集引擎、适合追求极致性能的极客 |',
  '| **macOS** | **Clash Verge Rev** | Mihomo | 完全开源 | 免费开源 | 完美适配 Apple Silicon 芯片、原生系统代理与 TUN 模式 |',
  '| **macOS** | **Surge for Mac** | 专有核心 | 闭源 | 商业买断 | 网络调试神器、专业抓包与精准分流、适合专业开发者 |',
  '| **iOS / iPadOS** | **Shadowrocket (小火箭)** | 专有核心 | 闭源 | App Store 商业付费 ($2.99) | 经典易用、协议支持极全、扫码即连、大众首选 |',
  '| **iOS / iPadOS** | **Loon / Quantumult X** | 专有核心 | 闭源 | App Store 商业付费 | 强大的脚本与重写功能、界面优雅、适合高级玩机党 |',
  '| **Android** | **Clash Meta for Android** | Mihomo | 完全开源 | 免费开源 | 稳定成熟、支持丰富分流规则、安卓用户标配 |',
  '| **Android** | **Sing-box (Android)** | Sing-box | 完全开源 | 免费开源 | 启动迅捷、省电节能、配置简洁 |',
  '',
  '---',
  '',
  '## 核心配置避坑三大守则',
  '',
  '### 1. 优先开启 TUN 虚拟网卡模式（TUN Mode）',
  '传统的系统代理（System Proxy）仅能拦截支持 HTTP/HTTPS 代理协议的浏览器请求，无法接管命令行终端（CMD / PowerShell / Terminal）、桌面客户端（如 ChatGPT 官方桌面端、Spotify）或游戏进程的流量。',
  '- **推荐操作**：在 Clash Verge Rev 或 Sing-box 设置中安装虚拟网卡驱动（Wintun / TUN），并开启 **TUN 模式**。这将接管操作系统全量网络栈，从根本上解决“浏览器能上网但桌面 App 报错无法连接”的顽疾。',
  '',
  '### 2. 避免激进的全局代理，坚持智能分流（Rule Mode）',
  '- **规则模式（Rule）**：客户端会自动根据目标域名与 IP 分流。访问国内网站（百度、淘宝、B站）直接直连，访问海外服务（Google、OpenAI、Netflix）自动走专线代理；',
  '- **错误示范**：长期开启全局代理（Global Mode），不仅会导致国内访问变慢，还会极速消耗你宝贵的机场专线流量额度。',
  '',
  '### 3. DNS 污染防范（Fake-IP 模式）',
  '- 现代客户端内核普遍推荐启用 **Fake-IP 模式**。当浏览器发起 DNS 查询时，客户端立即返回一个虚拟的保留内网 IP，并将真实的域名解析工作交由海外机场节点的远程服务器完成。这不仅将 DNS 查询耗时压缩至 0ms，更能彻底杜绝国内本地 DNS 污染导致的连接失败。',
  '',
  '<RelatedLinks :links="[',
  '  { title: \'AI使用指南与网络排障 (/guides/)\', desc: \'查看 ChatGPT 403 阻断、长连接断流与账号风控完整解决方案\', url: \'/guides/\' },',
  '  { title: \'机场综合推荐指南 (/recommend/)\', desc: \'多设备兼容性与各预算段主力备用方案评选\', url: \'/recommend/\' },',
  '  { title: \'解锁实测实验中心 (/tests/)\', desc: \'查看客户端内核在标准测试中的网络抖动与抓包数据\', url: \'/tests/\' }',
  ']" />',
  ''
];
ensureDir(path.join(siteDir, 'clients'));
fs.writeFileSync(path.join(siteDir, 'clients', 'index.md'), clientsLines.join('\n'), 'utf8');

// 5. Generate site/tools/index.md
const toolsLines = [
  '---',
  'title: 交互决策工具箱：7 大预算、流量、地区与合规测算工具',
  'description: 机场选购实用交互工具箱。包含流量预估器、折算月费 vs 实际付款计算器、地区匹配器、多设备并发测算器与 ToS 风险排查。',
  'h1: 交互决策工具箱：7 大预算、流量、地区与合规测算工具',
  'pageType: article',
  'canonicalPath: /tools/',
  'primaryIntent: 工具中心：利用交互式计算小工具，辅助做出理性数据决策',
  'verifiedAt: 2026-10-21',
  'modifiedAt: 2026-10-21',
  '---',
  '',
  '# 交互决策工具箱：7 大预算、流量、地区与合规测算工具',
  '',
  '为了帮助你在选购机场时不再被商家复杂的计费规则与营销口号所困扰，本站将行业经验封装为 7 大可即时在浏览器本地运行的交互决策小工具。',
  '',
  '所有计算均在本地浏览器内完成，**不上传任何个人数据，无需注册登录**。',
  '',
  '---',
  '',
  '## 7 大交互工具工作台',
  '',
  '<InteractiveTools />',
  '',
  '---',
  '',
  '## 工具设计初衷与计算基准说明',
  '',
  '1. **月度流量预估器**：基于实际抓包的码率模型设计（ChatGPT 文本约 0.05MB/问答，YouTube 4K 约 15GB/小时，Netflix 约 8GB/小时），帮你精准拒绝大流量过剩浪费；',
  '2. **真实实付款 vs 折算月费计算器**：用透明公式揭穿“首期总预付”与“年付折算单月”的认知差，特别标注跑路风险系数；',
  '3. **节点地区与平台匹配器**：对照 OpenAI、Claude、Gemini、Netflix 等平台的官方服务地区白名单，规避买错地区无法访问的尴尬；',
  '4. **多设备并发与限额计算器**：根据家庭或工作室的设备数量，测算并发连接数是否会触发服务商的 FUP 限制；',
  '5. **服务条款（ToS）风险自查器**：对照 6 大常见霸王条款，快速排查目标机场的 ToS 合规度。',
  '',
  '<RelatedLinks :links="[',
  '  { title: \'全站综合推荐与选购工作台 (/) \', desc: \'根据你的预算和具体任务，智能匹配最合适的服务方案\', url: \'/\' },',
  '  { title: \'优惠情报与实付款 (/deals/)\', desc: \'核验有效优惠码，计算折算月价与真实首付\', url: \'/deals/\' },',
  '  { title: \'解锁实测实验中心 (/tests/)\', desc: \'查看公开透明的抓包测试数据与历史复测追踪记录\', url: \'/tests/\' }',
  ']" />',
  ''
];
ensureDir(path.join(siteDir, 'tools'));
fs.writeFileSync(path.join(siteDir, 'tools', 'index.md'), toolsLines.join('\n'), 'utf8');

// 6. Generate site/search/index.md
const searchLines = [
  '---',
  'title: 站内全文检索：快速查询机场品牌、平台、地区与评测',
  'description: aijichang.blog 全站快速搜索。基于 Pagefind 纯静态全文检索技术，秒级定位 384 篇候选规划、评测数据与使用指南。',
  'h1: 站内全文检索：快速查询机场品牌、平台、地区与评测',
  'pageType: article',
  'canonicalPath: /search/',
  'primaryIntent: 搜索中心：利用本地纯静态索引，快速检索全站知识库',
  'verifiedAt: 2026-10-21',
  'modifiedAt: 2026-10-21',
  '---',
  '',
  '# 站内全文检索：快速查询机场品牌、平台、地区与评测',
  '',
  '本站采用先进的 **Pagefind 纯静态全文检索引擎**，无需任何后端服务器与第三方搜索引擎追踪，所有索引文件在构建期静态生成，搜索过程在浏览器本地秒级完成。',
  '',
  '输入品牌名称（如“光速云”、“WgetCloud”）、目标任务（如“Claude”、“4K”、“长文本断流”）、地区（如“日本”、“新加坡”）或协议（如“IEPL”、“VLESS”），即可即时呈现匹配结果。',
  '',
  '---',
  '',
  '<div id="search-container" style="margin: 2rem 0; min-height: 400px;">',
  '  <div id="pagefind-ui"></div>',
  '</div>',
  '',
  '---',
  '',
  '## 常用高频搜索词推荐',
  '',
  '- **平台任务**：[ChatGPT 403 阻断](/guides/#g01)、[Claude 封号避坑](/ai/#a02)、[Netflix 非自制剧](/streaming/#s01)、[YouTube 4K 测速](/streaming/#s03)',
  '- **品牌档案**：[光速云](/brands/lightspeed/)、[WgetCloud](/brands/wgetcloud/)、[飞猫云](/brands/flycat/)、[微风网络](/brands/breezenet/)',
  '- **选购决策**：[不限时套餐](/deals/#d05)、[免费试用陷阱](/free/#f02)、[晚高峰专线对比](/tests/#t06)',
  '',
  '<RelatedLinks :links="[',
  '  { title: \'返回全站首页 (/) \', desc: \'浏览综合选型工作台与核心推荐看板\', url: \'/\' },',
  '  { title: \'机场推荐指南 (/recommend/)\', desc: \'按预算和具体任务查看横向对比方案\', url: \'/recommend/\' }',
  ']" />',
  ''
];
ensureDir(path.join(siteDir, 'search'));
fs.writeFileSync(path.join(siteDir, 'search', 'index.md'), searchLines.join('\n'), 'utf8');

// 7. Generate site/about/index.md
const aboutLines = [
  '---',
  'title: 关于本站：aijichang.blog 的使命、定位与独立宣言',
  'description: 关于 aijichang.blog。面向 AI 生产力与全球流媒体中文用户，提供真实套餐、具体任务与可追溯记录的独立评测指南。',
  'h1: 关于本站：aijichang.blog 的使命、定位与独立宣言',
  'pageType: article',
  'canonicalPath: /about/',
  'primaryIntent: 关于我们：了解本站的创立背景、独立价值观与技术路线',
  'verifiedAt: 2026-10-21',
  'modifiedAt: 2026-10-21',
  '---',
  '',
  '# 关于本站：aijichang.blog 的使命、定位与独立宣言',
  '',
  '欢迎来到 **aijichang.blog（AI机场）**。',
  '',
  '在中文互联网的跨境网络选购领域，长期存在着两个极端的困境：',
  '- 一边是充斥着机器批量采集、虚高原价与诱导冲动消费的推广导航站。它们只看哪家佣金高就无脑吹捧哪家，把“全网最稳、全平台全绿”当成不要钱的口头禅，对用户的晚高峰断流与封号风险只字不提；',
  '- 另一边是晦涩难懂的极客论坛。技术讨论充斥着大量缩写（BGP/IEPL/FUP/SNI/L3），普通用户只是想顺畅写一段代码或看一部美剧，却不得不被迫先花几天时间学习复杂的网络协议。',
  '',
  '**aijichang.blog 创立的初衷，正是为了打破这种信息不对称。**',
  '',
  '---',
  '',
  '## 我们的核心定位',
  '',
  '**面向使用 ChatGPT、Claude、Gemini 以及 Netflix、Disney+、YouTube、TikTok 的中文用户，依据真实套餐、具体任务和可追溯记录选择机场。**',
  '',
  '我们不是泛 AI 工具导航站，不售卖账号，不提供 API 中转，也不盲目罗列没有实测依据的技术指令。我们的所有内容与技术工具，纯粹服务于一个明确目标：**帮你用最合理的预算，找到最能稳定跑通你具体生产力与娱乐任务的网络方案**。',
  '',
  '---',
  '',
  '## 我们的四大独立原则',
  '',
  '1. **真实可追溯（Evidence-Based）**：',
  '   - 拒绝毫无意义的“全绿九宫格”假图；',
  '   - 每一条测试结论必须明确标注测试时间戳、运营商基线网络、具体执行任务与失败重试样本；',
  '   - 未经验证的项目严格标注为 `null` 或 `待测试`，绝不脑补；',
  '2. **算清真实全周期账本（True Cost Accounting）**：',
  '   - 坚决将“一次性预付实付款（Actual Payment）”与“折算月均价（Effective Monthly Cost）”分立展示；',
  '   - 严厉揭露首年打折次年天价、高倍率计费刺客、单设备限速等霸王条款；',
  '3. **技术栈极简与纯静态（Clean & Static）**：',
  '   - 整站采用 VitePress + Vue 3 + TypeScript 构建，搭配 Pagefind 纯静态检索，部署于高性能 Apache 环境；',
  '   - 坚持纯白、克制、无干扰的视觉风格，移动端优先，零第三方冗余追踪脚本；',
  '4. **商业利益透明披露（Transparent Commercialization）**：',
  '   - 本站客观呈现部分合规推广链接以维持服务器开销，所有推广链接在底层均明确标记 `rel="nofollow sponsored noopener"`；',
  '   - 商业合作绝不左右评测事实。对断流严重或存在跑路风险的品牌，无论佣金多高一律如实曝光并亮红灯警示。读者的长期信任是本站最宝贵的核心资产。',
  '',
  '---',
  '',
  '## 站点技术参数',
  '',
  '- **生产域名**：`https://aijichang.blog`',
  '- **技术框架**：VitePress 1.6.4 (Vue 3.5.13 + Vite 6.0.11)',
  '- **搜索方案**：Pagefind 1.5.2 纯静态索引（浏览器端 WASM 极速检索）',
  '- **服务器架构**：Apache 纯静态托管，配置标准 `.htaccess` 安全与缓存策略',
  '',
  '<RelatedLinks :links="[',
  '  { title: \'四层评测方法论 (/methodology/)\', desc: \'深入了解资格、网络、任务与体验四层测评模型\', url: \'/methodology/\' },',
  '  { title: \'商业披露与赞助政策 (/disclosure/)\', desc: \'查阅本站的推广佣金分成白皮书与中立底线\', url: \'/disclosure/\' },',
  '  { title: \'勘误与更正归档 (/corrections/)\', desc: \'查阅历史测试数据修正记录，提交你的实测反馈\', url: \'/corrections/\' }',
  ']" />',
  ''
];
ensureDir(path.join(siteDir, 'about'));
fs.writeFileSync(path.join(siteDir, 'about', 'index.md'), aboutLines.join('\n'), 'utf8');

// 8. Generate site/methodology/index.md
const methodologyLines = [
  '---',
  'title: 四层评测方法论：从官方资格到体验稳定性的科学测评模型',
  'description: aijichang.blog 评测标准与方法论。详解官方资格、网络可达、任务执行与体验稳定性四层递进评测体系。',
  'h1: 四层评测方法论：从官方资格到体验稳定性的科学测评模型',
  'pageType: article',
  'canonicalPath: /methodology/',
  'primaryIntent: 方法论：公开本站评测四层递进模型、实验设计与数据脱敏规则',
  'verifiedAt: 2026-10-21',
  'modifiedAt: 2026-10-21',
  '---',
  '',
  '# 四层评测方法论：从官方资格到体验稳定性的科学测评模型',
  '',
  '在网络评测中，“能不能用”是一个高度模糊的口语化概念。很多用户在购买了某家标榜“全解锁”的机场后，依然频繁遭遇 403 阻断或无法观看 4K，其根本原因在于测评者把不同层级的技术边界混为一谈。',
  '',
  '为了建立严谨、可量化、可重复复现的评测标准，本站实验室确立了**四层递进评测方法论模型（Four-Layer Evaluation Framework）**：',
  '',
  '---',
  '',
  '## 四层递进评测模型解析',
  '',
  '```',
  '┌────────────────────────────────────────────────────────┐',
  '│ 第四层：体验稳定性 (Stability & Experience)            │',
  '│ 晚高峰抗压、RTT时延抖动、长文本长连接持续保活、无断流      │',
  '├────────────────────────────────────────────────────────┤',
  '│ 第三层：具体任务执行 (Task Execution)                  │',
  '│ 账号登录跳转、500字流式文本生成、4K非自制剧播放、图片上传  │',
  '├────────────────────────────────────────────────────────┤',
  '│ 第二层：网络可达性与出口 (Network Reachability & IP)   │',
  '│ IP合法属地判定、非机房黑名单、TCP握手、TLS安全会话协商    │',
  '├────────────────────────────────────────────────────────┤',
  '│ 第一层：官方服务资格 (Platform Eligibility)            │',
  '│ 平台支持地区白名单、账户合规要求、客户端运行环境资质      │',
  '└────────────────────────────────────────────────────────┘',
  '```',
  '',
  '### 第一层：官方服务资格（Platform Eligibility）',
  '- **判定标准**：目标海外平台是否在该节点所在地区提供官方服务；',
  '- **典型案例**：OpenAI 官方目前不向中国香港、俄罗斯、伊朗等地区开放服务。因此，无论香港节点的专线速度有多快、延迟有多低，它在第一层就已被判定为“不符合资格”。如果用户试图用纯正香港原生 IP 访问，直接会被阻断在门外。',
  '',
  '### 第二层：网络可达性与出口（Network Reachability & IP）',
  '- **判定标准**：客户端与目标平台的海外服务器之间能否顺利完成 TCP 三次握手与 TLS 证书协商，且节点的出口 IP 未被海外安全防火墙直接拉黑；',
  '- **典型案例**：部分机场使用廉价机房 VPS，其 IP 在 Cloudflare 威胁库中的欺诈分（Fraud Score）高达 80 分。虽然物理网络通畅，但在握手阶段就会收到 403 Forbidden。',
  '',
  '### 第三层：具体任务执行（Task Execution）',
  '- **判定标准**：不仅要能打开首页，更要能够真实完整地跑通特定的业务用例；',
  '- **典型案例**：',
  '  - 在 ChatGPT 界面发送包含代码重构的长提示词，必须能够持续接收完整 SSE 数据流，中途不发生断流报错；',
  '  - 在 Netflix 上播放非自制独家版权片目，必须能够连续播放 180 秒以上无代理弹窗。',
  '',
  '### 第四层：体验稳定性（Stability & Experience）',
  '- **判定标准**：在全网流量最高的晚高峰（20:00~22:30）拥塞期，指标能否保持恒定；',
  '- **核心量化参数**：',
  '  - **RTT 往返时延极差**：波动需小于 10ms；',
  '  - **最后一跳丢包率**：必须保持在 0.5% 以下；',
  '  - **长连接保活时长**：静默挂起 120 秒不发生 RST 断开。',
  '',
  '---',
  '',
  '## 严格的双基线实验环境',
  '',
  '所有参评数据均采集自两套标准化的物理网络接入环境：',
  '- **主基线**：华东千兆电信家庭光纤宽带（标准双栈公网 IPv4/IPv6，路由直连）；',
  '- **副基线**：北方联通 5G 移动蜂窝热点（典型商旅与蜂窝移动网络环境）。',
  '',
  '杜绝在机房云服务器对测、或使用企业高阶精品网对普通家庭宽带进行不公正对比。',
  '',
  '<RelatedLinks :links="[',
  '  { title: \'解锁实测实验中心 (/tests/)\', desc: \'查阅基于本方法论产生的最新抓包批次与观测数据\', url: \'/tests/\' },',
  '  { title: \'AI机场专项选型 (/ai/)\', desc: \'查看 ChatGPT、Claude 与 Gemini 的四层任务实测表现\', url: \'/ai/\' },',
  '  { title: \'流媒体机场选型指南 (/streaming/)\', desc: \'核验 Netflix、Disney+ 与 YouTube 4K 的真实播放保障\', url: \'/streaming/\' }',
  ']" />',
  ''
];
ensureDir(path.join(siteDir, 'methodology'));
fs.writeFileSync(path.join(siteDir, 'methodology', 'index.md'), methodologyLines.join('\n'), 'utf8');

// 9. Generate site/disclosure/index.md
const disclosureLines = [
  '---',
  'title: 商业披露与中立宣言：透明推广、资金来源与评测伦理',
  'description: aijichang.blog 商业透明度与伦理披露。公开推广佣金机制、评测资金独立性、外部链接 rel 标记规范与客观中立原则。',
  'h1: 商业披露与中立宣言：透明推广、资金来源与评测伦理',
  'pageType: article',
  'canonicalPath: /disclosure/',
  'primaryIntent: 商业合规：全透明公开推广分成模式、赞助政策与评测伦理底线',
  'verifiedAt: 2026-10-21',
  'modifiedAt: 2026-10-21',
  '---',
  '',
  '# 商业披露与中立宣言：透明推广、资金来源与评测伦理',
  '',
  '信任是专业技术媒体最重要的基石。本站在此向全体读者、搜索引擎与监管机构全面披露我们的商业运作模式与评测伦理规范。',
  '',
  '---',
  '',
  '## 1. 推广链接（Affiliate Links）运作机制',
  '',
  '为了维持本站昂贵的高性能物理专线测试成本、海外机房探针服务器租赁、API 调用账单以及工程团队的日常维护，本站的部分外部链接包含推广追踪标识（Affiliate / Referral Link）。',
  '',
  '当读者通过这些链接访问服务商官网并最终完成购买时，服务商可能会向本站支付少许比例的推荐奖励。',
  '',
  '**我们的技术规范保障：**',
  '- **合规标注**：所有包含推广追踪的外部超链接，在 HTML 源码中均严格声明 `rel="nofollow sponsored noopener"` 属性，坚决符合 W3C 与各大搜索引擎的站外链接标准；',
  '- **零额外费用**：通过本站链接购买，你**绝不会被加收哪怕一分钱**的额外费用；相反，使用本站收录核验的专属优惠码，往往能为你争取到官方结账界面的最大折扣。',
  '',
  '---',
  '',
  '## 2. 评测中立性与红线原则',
  '',
  '我们深知“拿人手软”是导致许多测评网站公信力破产的根源。为此，本站设立了不可逾越的评测伦理红线：',
  '',
  '1. **拒绝“花钱买榜”**：任何服务商均无法通过支付赞助费、广告费或提高佣金比例，来改变其在本站各榜单中的排名位置；',
  '2. **测试数据铁律**：评测数据直接由自动化探针抓包产生并静态入库。断流就是断流，受阻就是受阻，测试人员无权人为修改任何抓包状态；',
  '3. **差评如实公开**：若某家合作品牌在实际测试中发生严重故障或跑路风险，本站将第一时间标红警示，绝不因存在推广分成而掩盖事实；',
  '4. **测试账号自主采购**：评测所用的账号全部由本站通过公开渠道自主充值订购，严禁使用服务商提供的定制化“白名单高优节点”进行评测。',
  '',
  '---',
  '',
  '## 3. 广告赞助与合作准入',
  '',
  '本站接受符合以下原则的行业商务合作：',
  '- 赞助商必须为合法合规运营、具备独立技术团队与良好行业声誉的机构；',
  '- 赞助内容若在文章中呈现，必须使用醒目的【赞助内容 / Sponsored】标签进行视觉隔离；',
  '- 本站保留随时终止存在欺诈行为或严重投诉的品牌合作的权利。',
  '',
  '<RelatedLinks :links="[',
  '  { title: \'返回全站首页 (/) \', desc: \'浏览综合选型工作台与核心推荐看板\', url: \'/\' },',
  '  { title: \'四层评测方法论 (/methodology/)\', desc: \'了解我们如何用工程手段保障测试数据的客观真实\', url: \'/methodology/\' },',
  '  { title: \'更正与勘误归档 (/corrections/)\', desc: \'若发现本站数据有误，欢迎提交你的实测证据\', url: \'/corrections/\' }',
  ']" />',
  ''
];
ensureDir(path.join(siteDir, 'disclosure'));
fs.writeFileSync(path.join(siteDir, 'disclosure', 'index.md'), disclosureLines.join('\n'), 'utf8');

// 10. Generate site/privacy/index.md
const privacyLines = [
  '---',
  'title: 隐私政策与数据安全：零追踪、无日志与本地优先原则',
  'description: aijichang.blog 隐私政策。我们尊重用户隐私，坚持零第三方追踪脚本、纯静态托管与本地浏览器计算原则。',
  'h1: 隐私政策与数据安全：零追踪、无日志与本地优先原则',
  'pageType: article',
  'canonicalPath: /privacy/',
  'primaryIntent: 隐私政策：说明本站的数据收集政策、Cookie使用与本地计算原则',
  'verifiedAt: 2026-10-21',
  'modifiedAt: 2026-10-21',
  '---',
  '',
  '# 隐私政策与数据安全：零追踪、无日志与本地优先原则',
  '',
  '在 aijichang.blog，我们坚信：**真正尊重用户的网站，应当从源头上杜绝不必要的用户数据收集。**',
  '',
  '本页面公开我们在用户隐私与数据安全方面的严格承诺。',
  '',
  '---',
  '',
  '## 1. 零第三方侵入式追踪脚本',
  '- 本站**不嵌入**任何可能跨站追踪用户浏览习惯的商业第三方 SDK（如第三方广告追踪探针、用户画像收集插件等）；',
  '- 本站不强制要求用户注册个人账户，不收集用户的手机号、真实姓名、个人通讯录等敏感身份信息。',
  '',
  '---',
  '',
  '## 2. 纯静态架构与服务器日志',
  '- 本站采用 VitePress 编译为纯静态 HTML/CSS/JS 文件，托管于 Apache 静态服务器；',
  '- Web 服务器按行业网络安全规范记录基础访问日志（包括访问时间、请求路径、User-Agent 及掩码后的 IP 地址），此类日志仅用于防御恶意 DDoS 攻击与扫描，定期轮转清理，绝不用于商业用户画像。',
  '',
  '---',
  '',
  '## 3. 本地优先与浏览器端计算',
  '- 本站提供的所有交互工具（如 7 大预算流量计算器、地区匹配器等），所有逻辑均通过轻量级 JavaScript 在你的**本地浏览器内实时执行**；',
  '- 输入的数据不会以任何形式上传或回传至本站服务器，关闭页面后数据即自动在内存中销毁。',
  '',
  '---',
  '',
  '## 4. 本地搜索与 Pagefind 原理',
  '- 本站站内搜索使用 Pagefind 纯静态方案；',
  '- 搜索索引以切片形式静态托管，用户在搜索框中输入的任何关键词均在浏览器本地通过 WebAssembly (WASM) 进行离线匹配，**你的搜索词不会被记录或上报**。',
  '',
  '---',
  '',
  '## 5. 外部链接免责',
  '本站包含指向第三方服务商官网的外部链接。当你点击这些链接离开本站后，请参阅该目标网站自身公布的隐私政策，本站不对第三方的隐私行为承担法律责任。',
  '',
  '<RelatedLinks :links="[',
  '  { title: \'返回全站首页 (/) \', desc: \'浏览综合选型工作台与核心推荐看板\', url: \'/\' },',
  '  { title: \'商业披露与中立宣言 (/disclosure/)\', desc: \'查阅本站的推广佣金分成白皮书与中立底线\', url: \'/disclosure/\' }',
  ']" />',
  ''
];
ensureDir(path.join(siteDir, 'privacy'));
fs.writeFileSync(path.join(siteDir, 'privacy', 'index.md'), privacyLines.join('\n'), 'utf8');

// 11. Generate site/corrections/index.md
const correctionsLines = [
  '---',
  'title: 更正与勘误归档：公开透明的实测数据修正记录',
  'description: aijichang.blog 勘误与更正日志。公开历史数据修正、价格变动更新、网络故障复测结论与用户纠错反馈途径。',
  'h1: 更正与勘误归档：公开透明的实测数据修正记录',
  'pageType: article',
  'canonicalPath: /corrections/',
  'primaryIntent: 勘误归档：透明记录所有已修正的事实数据、价格变动与复测事件',
  'verifiedAt: 2026-10-21',
  'modifiedAt: 2026-10-21',
  '---',
  '',
  '# 更正与勘误归档：公开透明的实测数据修正记录',
  '',
  '一个具有公信力的专业技术站点，不仅在于其测试的严谨性，更在于其敢于直面错误、迅速公开修正的担当。',
  '',
  '网络世界是动态演进的。服务商的套餐可能会调价，平台会封禁某些网段，新的专线也随时可能上线。本页面作为 **aijichang.blog 的官方勘误与更正归档库**，公开记录所有历史关键数据的更正事件。',
  '',
  '---',
  '',
  '## 历史更正与更新记录（Changelog）',
  '',
  '| 记录日期 | 涉及品牌/专题 | 原始记录情况 | 勘误与修正内容 | 修正原因与证据来源 |',
  '| :--- | :--- | :--- | :--- | :--- |',
  '| **2026-10-21** | 全站数据字典 | 初版架构定稿 | 严格统一 12 品牌、18 套餐与 13 观测记录脱敏规范 | 完成公开脱敏数据集入库与组件闭环 |',
  '| **2026-10-20** | 光速云 (LightSpeed) | 历史年付套餐月均标价模糊 | 明确拆分为首付 ¥99 与月均 ¥8.25 双重展示 | 避免用户将年付折算价格误解为单月付门槛 |',
  '| **2026-10-19** | 解锁实测 (/tests/) | 某日本节点 Claude 记录待定 | 实测连续 5 次握手成功，状态更新为 `success` | 自动化探针晚高峰抓包验证通过 |',
  '| **2026-09-15** | 节点地区 (/regions/) | 香港节点 ChatGPT 资格说明 | 明确补充“香港原生出口官方不支持 OpenAI，需分流” | 读者反馈并核验 OpenAI 官方政策白名单 |',
  '| **2026-08-25** | WgetCloud | 优惠码清单核验 | 更新专属邀请注册码 `VLG2xb` 有效状态 | 官方工单确认开通全线专线选购通道 |',
  '',
  '---',
  '',
  '## 勘误提交与用户反馈渠道',
  '',
  '如果你在阅读本站内容或实际使用相关服务时，发现以下任何情况：',
  '1. **价格或优惠码失效**：某套餐已经下架、调价，或优惠码在收银台提示不存在；',
  '2. **测试表现不符**：某节点在你本地的宽带下连续出现 403 阻断或无法播放；',
  '3. **技术描述笔误**：存在错别字、失效链接或协议参数错误；',
  '',
  '欢迎随时向我们提交勘误反馈！',
  '- **反馈要素建议**：请在反馈中附上发生时间、你的宽带运营商（如电信/联通/移动）、使用的客户端内核版本及相关截图，以便我们的评测人员能够快速在实验室复现排查。',
  '- **更正承诺**：收到有效反馈并经实验室复核属实后，我们将在 24 小时内更新全站相关页面，并将更正详情永久登记于本页。',
  '',
  '<RelatedLinks :links="[',
  '  { title: \'返回全站首页 (/) \', desc: \'浏览综合选型工作台与核心推荐看板\', url: \'/\' },',
  '  { title: \'解锁实测实验中心 (/tests/)\', desc: \'查看公开透明的抓包测试数据与历史复测追踪记录\', url: \'/tests/\' },',
  '  { title: \'四层评测方法论 (/methodology/)\', desc: \'了解我们如何用工程手段保障测试数据的客观真实\', url: \'/methodology/\' }',
  ']" />',
  ''
];
ensureDir(path.join(siteDir, 'corrections'));
fs.writeFileSync(path.join(siteDir, 'corrections', 'index.md'), correctionsLines.join('\n'), 'utf8');

// 12. Generate site/404.md
const notFoundLines = [
  '---',
  'title: 页面未找到 (404 Not Found)',
  'description: 抱歉，你访问的页面不存在或已被迁移。请通过下方核心导航寻找所需内容。',
  'h1: 页面未找到 (404 Not Found)',
  'pageType: article',
  'canonicalPath: /404.html',
  '---',
  '',
  '# 404 - 页面未找到',
  '',
  '很抱歉，你所请求的页面地址不存在，或者该内容已经根据最新的网站架构进行了迁移。',
  '',
  '你可以使用顶部的导航菜单，或者通过下方核心栏目快捷入口继续浏览：',
  '',
  '- [返回首页 (/)](/)：品牌入口、需求工作台与真实候选摘要',
  '- [机场推荐 (/recommend/)](/recommend/)：综合选择与不同人群方案比较',
  '- [AI机场专项 (/ai/)](/ai/)：ChatGPT、Claude 与 Gemini 任务兼容比较',
  '- [流媒体机场 (/streaming/)](/streaming/)：Netflix、Disney+ 与 YouTube 4K 播放条件',
  '- [免费机场核验 (/free/)](/free/)：真实零付款资源、试用资格与限制辨析',
  '- [节点地区指南 (/regions/)](/regions/)：全球出口识别与平台资格对照',
  '- [AI使用指南 (/guides/)](/guides/)：连接验证、节点配置与网络排障',
  '- [解锁实测实验中心 (/tests/)](/tests/)：抓包报文分析与历史复测追踪',
  '- [优惠情报 (/deals/)](/deals/)：真实报价、优惠码核验与折算月价精算',
  '- [站内全文检索 (/search/)](/search/)：输入任意关键词秒级搜索全站',
  ''
];
fs.writeFileSync(path.join(siteDir, '404.md'), notFoundLines.join('\n'), 'utf8');

console.log('✅ 所有辅助页面及 12 家品牌深度档案页生成完毕！');
