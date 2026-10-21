import fs from 'fs';
import path from 'path';

// 1. Platforms
const platforms = [
  {
    id: 'openai',
    name: 'OpenAI / ChatGPT',
    officialDocUrl: 'https://help.openai.com/en/articles/7947663-chatgpt-supported-countries',
    description: '全球领先的大语言模型平台，涵盖网页对话、移动客户端及开发者 API。'
  },
  {
    id: 'anthropic',
    name: 'Anthropic / Claude',
    officialDocUrl: 'https://support.claude.com/en/articles/8461763-where-can-i-access-claude',
    description: '主打高智能与长上下文的大语言模型，对出口网络机房属性与地区合规风控极其严苛。'
  },
  {
    id: 'google',
    name: 'Google / Gemini',
    officialDocUrl: 'https://ai.google.dev/gemini-api/docs/available-regions',
    description: '深度整合 Google 生态的 AI 工具，涵盖 Web 应用、AI Studio 工作台及多模态 API。'
  },
  {
    id: 'netflix',
    name: 'Netflix',
    officialDocUrl: 'https://help.netflix.com/en/node/114701',
    description: '全球流媒体巨头，按国家划分独占版权片库，严格拦截数据中心代理 IP。'
  },
  {
    id: 'disney',
    name: 'Disney+',
    officialDocUrl: 'https://help.disneyplus.com/article/disneyplus-error-73',
    description: '包含迪士尼、漫威、星战等 IP 的流媒体平台，严控地区认证与 Error 73 报错。'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    officialDocUrl: 'https://www.youtube.com',
    description: '全球最大视频点播与直播平台，支持 4K/60fps HDR 及高码率点播。'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    officialDocUrl: 'https://support.tiktok.com/',
    description: '全球短视频与跨境电商社交平台，对 SIM 卡与住宅原生出口网络要求极高。'
  }
];

// 2. Products
const products = [
  { id: 'chatgpt-web', platformId: 'openai', name: 'ChatGPT 网页版', entryUrl: 'https://chatgpt.com' },
  { id: 'chatgpt-mobile', platformId: 'openai', name: 'ChatGPT 移动官方应用', entryUrl: 'https://chatgpt.com' },
  { id: 'openai-api', platformId: 'openai', name: 'OpenAI 官方 API', entryUrl: 'https://api.openai.com' },
  { id: 'claude-web', platformId: 'anthropic', name: 'Claude 网页版', entryUrl: 'https://claude.ai' },
  { id: 'claude-code', platformId: 'anthropic', name: 'Claude Code 终端编程工具', entryUrl: 'https://claude.ai/code' },
  { id: 'claude-api', platformId: 'anthropic', name: 'Anthropic 官方 API', entryUrl: 'https://api.anthropic.com' },
  { id: 'gemini-app', platformId: 'google', name: 'Gemini Web / 移动应用', entryUrl: 'https://gemini.google.com' },
  { id: 'google-ai-studio', platformId: 'google', name: 'Google AI Studio', entryUrl: 'https://aistudio.google.com' },
  { id: 'gemini-api', platformId: 'google', name: 'Gemini Developer API', entryUrl: 'https://generativelanguage.googleapis.com' },
  { id: 'netflix-playback', platformId: 'netflix', name: 'Netflix 实际版权片目播放', entryUrl: 'https://netflix.com' },
  { id: 'disney-playback', platformId: 'disney', name: 'Disney+ 实际播放', entryUrl: 'https://disneyplus.com' },
  { id: 'youtube-4k', platformId: 'youtube', name: 'YouTube 4K 点播与直播', entryUrl: 'https://youtube.com' },
  { id: 'tiktok-flow', platformId: 'tiktok', name: 'TikTok 视频信息流与发布', entryUrl: 'https://tiktok.com' }
];

// 3. Tasks
const tasks = [
  { id: 'task-auth', name: '账号认证与安全登录', tier: 3, successCondition: '成功通过登录验证且不出现 Access Denied / 验证码死循环' },
  { id: 'task-stream-chat', name: '长文本流式对话生成', tier: 3, successCondition: '输入 500 字以上复杂 Prompt，持续稳定生成，无 Network Error 中断' },
  { id: 'task-file-upload', name: '多模态附件/图片上传', tier: 3, successCondition: '成功上传 10MB 以上文档或多张图片并完成内容解析' },
  { id: 'task-api-ttft', name: 'API 首字耗时与流式响应', tier: 3, successCondition: 'HTTP 200 返回，首字时延（TTFT）处于可控区间且数据完整' },
  { id: 'task-video-playback', name: '版权片目播放防代理阻断', tier: 3, successCondition: '连续播放非自制独家片目 3 分钟以上无代理报错' },
  { id: 'task-4k-buffer', name: '高码率持续缓冲抗丢帧', tier: 4, successCondition: 'YouTube 4K/60fps 播放，Connection Speed > 35Mbps，无掉帧' },
  { id: 'task-tiktok-publish', name: '短视频正常发布与地区识别', tier: 3, successCondition: '视频成功发布且在目标区域正常展现' }
];

// 4. Regions
const regions = [
  {
    id: 'hk',
    name: '香港（Hong Kong）',
    latencyRange: '15 - 35 ms',
    physicalProximity: '近端直连 / 极低延迟',
    officialAiStatus: '官方不支持（部分工具需分流绕行）',
    officialStreamingStatus: '支持 Netflix、Disney+ 繁体中文库',
    recommendScenario: '流媒体点播、低延迟游戏与常规网页浏览'
  },
  {
    id: 'jp',
    name: '日本（Japan）',
    latencyRange: '45 - 80 ms',
    physicalProximity: '亚太近端 / 专线高速',
    officialAiStatus: '官方全支持（ChatGPT / Claude / Gemini）',
    officialStreamingStatus: '日区专属片库 / 动画独播丰富',
    recommendScenario: 'AI 办公主力、流媒体综合主力'
  },
  {
    id: 'sg',
    name: '新加坡（Singapore）',
    latencyRange: '40 - 70 ms',
    physicalProximity: '东南亚核心骨干汇聚',
    officialAiStatus: '官方全支持（ChatGPT / Claude / Gemini）',
    officialStreamingStatus: '中英双语字幕支持优良',
    recommendScenario: '跨国协作、AI 与开发调用双重主力'
  },
  {
    id: 'us',
    name: '美国（United States）',
    latencyRange: '130 - 190 ms',
    physicalProximity: '远端大洋路由',
    officialAiStatus: '所有 AI 工具的第一首发和最完整功能支持区',
    officialStreamingStatus: '美区最全片库，但对机房 IP 审查最严',
    recommendScenario: 'AI 新功能测试、API 开发、原生内容挖掘'
  },
  {
    id: 'tw',
    name: '台湾（Taiwan）',
    latencyRange: '35 - 55 ms',
    physicalProximity: '近端海缆',
    officialAiStatus: '官方全支持（ChatGPT / Claude / Gemini）',
    officialStreamingStatus: '最适合中文观看的 Netflix/Disney+ 字幕库',
    recommendScenario: '追剧、繁体中文 AI 交互与流媒体'
  },
  {
    id: 'eu',
    name: '欧洲（Europe - 英法德）',
    latencyRange: '160 - 220 ms',
    physicalProximity: '欧亚大陆路由',
    officialAiStatus: '受 GDPR 影响，部分 AI 新实验功能稍慢',
    officialStreamingStatus: '欧洲本地独家影音内容',
    recommendScenario: '特定跨国业务、备份节点'
  }
];

// 5. Brands & Plans & Links & Observations
const brandsData = [
  {
    id: 'lightspeed',
    name: '光速云',
    aliases: ['LightSpeed', 'gsy', '光速云VIP'],
    logo: '/logos/光速云主图.png',
    establishedYear: 2020,
    summary: '2020年起运营的老牌IEPL专线服务商，采用企业级内网专线+双线路架构与VLESS协议，提供自研客户端并支持主流第三方订阅导入。',
    protocols: ['VLESS', 'Shadowsocks', 'Trojan'],
    lineType: 'IEPL专线 + 内网专线',
    startingPriceMonthly: 8.25, // 99元/年 折合 8.25元/月
    customClient: true,
    thirdPartySupport: true,
    linkId: 'link-lightspeed',
    sourceRef: 'SRC-28-BRANDS #1',
    verifiedAt: '2026-10-19',
    isActive: true,
    plans: [
      {
        id: 'lightspeed-lite',
        name: '光速云·轻量版',
        billingCycle: 'yearly',
        actualPayment: 99,
        effectiveMonthlyCost: 8.25,
        trafficGB: 69,
        trafficReset: '每月重置',
        deviceLimit: null,
        rateMultiplier: '常规专线 1.0x',
        features: ['年付特惠', '每月69GB', 'IEPL专线', '自研+第三方客户端'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      },
      {
        id: 'lightspeed-speed',
        name: '光速云·极速版',
        billingCycle: 'monthly',
        actualPayment: 25,
        effectiveMonthlyCost: 25,
        trafficGB: 168,
        trafficReset: '每月重置',
        deviceLimit: null,
        rateMultiplier: '常规专线 1.0x',
        features: ['单月付无绑架', '每月168GB', '双线路IEPL架构'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      },
      {
        id: 'lightspeed-stream',
        name: '光速云·流光版',
        billingCycle: 'monthly',
        actualPayment: 34,
        effectiveMonthlyCost: 34,
        trafficGB: 238,
        trafficReset: '每月重置',
        deviceLimit: null,
        rateMultiplier: '常规专线 1.0x',
        features: ['影音主力大流量', '每月238GB', '4K流媒体优化'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      },
      {
        id: 'lightspeed-quantum',
        name: '光速云·量子版',
        billingCycle: 'monthly',
        actualPayment: 68,
        effectiveMonthlyCost: 68,
        trafficGB: 500,
        trafficReset: '每月重置',
        deviceLimit: null,
        rateMultiplier: '常规专线 1.0x',
        features: ['重度AI与开发', '每月500GB', '高速低时延专线'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      },
      {
        id: 'lightspeed-snooker147',
        name: '光速云·致敬斯诺克147永久套餐',
        billingCycle: 'once',
        actualPayment: 147,
        effectiveMonthlyCost: 147,
        trafficGB: 247,
        trafficReset: '一次性付费不过期',
        deviceLimit: null,
        rateMultiplier: '常规专线 1.0x',
        features: ['不限时流量', '247GB总额度', '适合长期间歇备用'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      }
    ],
    offer: {
      id: 'offer-lightspeed-amm',
      brandId: 'lightspeed',
      couponCode: 'AMM',
      discountDescription: '输入优惠码立享折扣门槛，年付折合约 ¥8.25/月',
      actualPaymentAfterDiscount: 99,
      applicableScope: '轻量版及指定周期',
      validUntil: null,
      sourceRef: 'SRC-28-BRANDS #1',
      isExpired: false,
      historyNote: '长期有效官方优惠码'
    },
    link: {
      id: 'link-lightspeed',
      brandId: 'lightspeed',
      url: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
      code: 'keqgvT5Y',
      sponsored: true,
      disclaimer: '本链接含推广参数。价格透明公开，不影响客观评测结论。'
    },
    observations: [
      {
        id: 'obs-ls-01',
        brandId: 'lightspeed',
        platformId: 'openai',
        productId: 'chatgpt-web',
        taskId: 'task-stream-chat',
        regionId: 'jp',
        nodeTag: '日本 01 [专线]',
        observedExitRegion: '日本（东京）',
        result: 'success',
        provenance: 'vendor',
        verification: 'verified',
        observedAt: '2026-10-19',
        rttMs: 57,
        notes: '2026-10-19 测速延迟 57ms，下载 135Mbps，ChatGPT 网页版与对话顺畅。',
        sourceRef: 'SRC-28-BRANDS'
      },
      {
        id: 'obs-ls-02',
        brandId: 'lightspeed',
        platformId: 'anthropic',
        productId: 'claude-web',
        taskId: 'task-auth',
        regionId: 'sg',
        nodeTag: '新加坡 01 [专线]',
        observedExitRegion: '新加坡',
        result: 'success',
        provenance: 'vendor',
        verification: 'verified',
        observedAt: '2026-10-19',
        rttMs: 46,
        notes: '2026-10-19 测速延迟 46ms，下载 387Mbps，Claude 网页登录支持。',
        sourceRef: 'SRC-28-BRANDS'
      },
      {
        id: 'obs-ls-03',
        brandId: 'lightspeed',
        platformId: 'google',
        productId: 'gemini-app',
        taskId: 'task-stream-chat',
        regionId: 'us',
        nodeTag: '美国 01 [专线]',
        observedExitRegion: '美国（洛杉矶）',
        result: 'partial',
        provenance: 'vendor',
        verification: 'verified',
        observedAt: '2026-10-19',
        rttMs: 143,
        notes: '美国节点测速下载 18Mbps，延迟 143ms，Gemini 可用但视特定节点调度而定。',
        sourceRef: 'SRC-28-BRANDS'
      },
      {
        id: 'obs-ls-04',
        brandId: 'lightspeed',
        platformId: 'netflix',
        productId: 'netflix-playback',
        taskId: 'task-video-playback',
        regionId: 'hk',
        nodeTag: '香港 01 [专线]',
        observedExitRegion: '香港',
        result: 'success',
        provenance: 'vendor',
        verification: 'verified',
        observedAt: '2026-10-19',
        rttMs: 22,
        notes: '香港延迟 22ms，下载 529Mbps，Netflix 播放流畅。',
        sourceRef: 'SRC-28-BRANDS'
      }
    ]
  },
  {
    id: 'wgetcloud',
    name: 'WgetCloud',
    aliases: ['WgetCloud邀请制', '恶搞云'],
    logo: '/logos/galaxy_transparent_square.webp',
    establishedYear: 2021,
    summary: '高定位华为云专线服务商，主打高吞吐与稳定企业级骨干，全节点测试平均下载均超 50MB/s，面向对连续性要求极高的跨国办公与高预算人群。',
    protocols: ['Trojan', 'Shadowsocks'],
    lineType: '华为云 BGP 跨境专线',
    startingPriceMonthly: 99, // 季付 297元，折合 99元/月
    customClient: false,
    thirdPartySupport: true,
    linkId: 'link-wgetcloud',
    sourceRef: 'SRC-14-BRANDS #1',
    verifiedAt: '2026-08-24',
    isActive: true,
    plans: [
      {
        id: 'wgetcloud-basic',
        name: '基础专线服务',
        billingCycle: 'quarterly',
        actualPayment: 297,
        effectiveMonthlyCost: 99,
        trafficGB: 230,
        trafficReset: '每月重置',
        deviceLimit: 3,
        rateMultiplier: '常规 1.0x',
        features: ['季付297元', '每月230GB', '华为专线', '多国直达出口'],
        sourceRef: 'SRC-14-BRANDS',
        verifiedAt: '2026-08-24'
      },
      {
        id: 'wgetcloud-premium',
        name: '优质专线服务',
        billingCycle: 'quarterly',
        actualPayment: 327,
        effectiveMonthlyCost: 109,
        trafficGB: 250,
        trafficReset: '每月重置',
        deviceLimit: 5,
        rateMultiplier: '高级专线 1.0x',
        features: ['季付327元', '每月250GB', '晚高峰超售保护'],
        sourceRef: 'SRC-14-BRANDS',
        verifiedAt: '2026-08-24'
      }
    ],
    offer: {
      id: 'offer-wgetcloud-invite',
      brandId: 'wgetcloud',
      couponCode: 'VLG2xb',
      discountDescription: '专属邀请注册码，解锁专线套餐选购通道',
      actualPaymentAfterDiscount: 297,
      applicableScope: '全线专线套餐',
      validUntil: null,
      sourceRef: 'SRC-14-BRANDS',
      isExpired: false
    },
    link: {
      id: 'link-wgetcloud',
      brandId: 'wgetcloud',
      url: 'https://invite.wgetcloud.ltd/auth/register?code=VLG2xb',
      code: 'VLG2xb',
      sponsored: true,
      disclaimer: '邀请注册专属入口。实付按季计费，无单独月付。'
    },
    observations: [
      {
        id: 'obs-wc-01',
        brandId: 'wgetcloud',
        platformId: 'openai',
        productId: 'chatgpt-web',
        taskId: 'task-stream-chat',
        regionId: 'hk',
        nodeTag: '香港 专线 01',
        observedExitRegion: '香港',
        result: 'partial',
        provenance: 'third_party',
        verification: 'verified',
        observedAt: '2026-05-02',
        rttMs: 25.9,
        notes: '2026-05-02 历史实测覆盖 59 节点，香港下载 431.24Mbps，ChatGPT 需选定部分合规出口节点。',
        sourceRef: 'SRC-14-BRANDS'
      },
      {
        id: 'obs-wc-02',
        brandId: 'wgetcloud',
        platformId: 'anthropic',
        productId: 'claude-web',
        taskId: 'task-auth',
        regionId: 'jp',
        nodeTag: '日本 专线 01',
        observedExitRegion: '日本（东京）',
        result: 'success',
        provenance: 'third_party',
        verification: 'verified',
        observedAt: '2026-05-02',
        rttMs: 69.4,
        notes: '日本节点实测 462.04Mbps，TLS RTT 69.4ms，Claude 网页长文本生成稳定。',
        sourceRef: 'SRC-14-BRANDS'
      }
    ]
  },
  {
    id: 'flycat',
    name: '飞猫云',
    aliases: ['feimao', 'FlyCat', '飞猫'],
    logo: '/logos/飞猫云主图.png',
    establishedYear: 2023,
    summary: '2023年运营的新秀轻快型机场，年付门槛低至约7元/月，主打新手专属自研客户端一键直连免配置，适合追求开箱即用的大众用户。',
    protocols: ['Shadowsocks', 'VLESS'],
    lineType: '中继隧道 / 专线混合',
    startingPriceMonthly: 7.0, // 年付84元折合7元/月
    customClient: true,
    thirdPartySupport: true,
    linkId: 'link-flycat',
    sourceRef: 'SRC-28-BRANDS #2',
    verifiedAt: '2026-10-19',
    isActive: true,
    plans: [
      {
        id: 'flycat-student',
        name: '飞猫·学生版',
        billingCycle: 'yearly',
        actualPayment: 84,
        effectiveMonthlyCost: 7.0,
        trafficGB: 50,
        trafficReset: '每月重置',
        deviceLimit: 2,
        rateMultiplier: '常规 1.0x',
        features: ['入门特惠', '每月50GB', '免订阅导入自研端'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      },
      {
        id: 'flycat-star',
        name: '飞猫·星耀版',
        billingCycle: 'monthly',
        actualPayment: 25,
        effectiveMonthlyCost: 25,
        trafficGB: 150,
        trafficReset: '每月重置',
        deviceLimit: 3,
        rateMultiplier: '常规 1.0x',
        features: ['单月付', '每月150GB', '支持4K流媒体'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      }
    ],
    offer: {
      id: 'offer-flycat-888',
      brandId: 'flycat',
      couponCode: 'flycat888',
      discountDescription: '输入优惠码立享折后特价，年付约 7元/月',
      actualPaymentAfterDiscount: 84,
      applicableScope: '全套餐首购',
      validUntil: null,
      sourceRef: 'SRC-28-BRANDS',
      isExpired: false
    },
    link: {
      id: 'link-flycat',
      brandId: 'flycat',
      url: 'https://guangs.flycataff.com/#/?code=6uq0Xe9y',
      code: '6uq0Xe9y',
      sponsored: true,
      disclaimer: '专属推广注册入口。'
    },
    observations: [
      {
        id: 'obs-fc-01',
        brandId: 'flycat',
        platformId: 'openai',
        productId: 'chatgpt-web',
        taskId: 'task-stream-chat',
        regionId: 'jp',
        nodeTag: '日本 节点',
        observedExitRegion: '日本',
        result: 'success',
        provenance: 'vendor',
        verification: 'unverified',
        observedAt: '2026-10-19',
        notes: '官方标明支持 ChatGPT 常见对话。',
        sourceRef: 'SRC-28-BRANDS'
      }
    ]
  },
  {
    id: 'breezenet',
    name: '微风网络',
    aliases: ['weifeng', 'BreezeNet'],
    logo: '/logos/xdm_logo.webp',
    establishedYear: 2023,
    summary: '2023年运营，IEPL专线+VLESS协议，主打入门级高性价比专线，覆盖香港、新加坡、日本、美国原生IP，提供7×24小时客服及夜间AI值班。',
    protocols: ['VLESS', 'Shadowsocks'],
    lineType: 'IEPL专线',
    startingPriceMonthly: 7.0, // 年付约7元/月 50GB
    customClient: true,
    thirdPartySupport: true,
    linkId: 'link-breezenet',
    sourceRef: 'SRC-28-BRANDS #3',
    verifiedAt: '2026-10-19',
    isActive: true,
    plans: [
      {
        id: 'breezenet-entry',
        name: '微风·入门版',
        billingCycle: 'yearly',
        actualPayment: 84,
        effectiveMonthlyCost: 7.0,
        trafficGB: 50,
        trafficReset: '每月重置',
        deviceLimit: 3,
        rateMultiplier: '1.0x',
        features: ['IEPL专线', '每月50GB', '原生IP节点'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      }
    ],
    offer: {
      id: 'offer-breezenet-flat',
      brandId: 'breezenet',
      couponCode: 'flat888',
      discountDescription: '限时优惠码享折扣，年付约 7元/月',
      actualPaymentAfterDiscount: 84,
      applicableScope: '入门套餐',
      validUntil: null,
      sourceRef: 'SRC-28-BRANDS',
      isExpired: false
    },
    link: {
      id: 'link-breezenet',
      brandId: 'breezenet',
      url: 'https://edp01.breezenetaff.com/#/?code=t3huofyI',
      code: 't3huofyI',
      sponsored: true,
      disclaimer: '官方合规推广链接。'
    },
    observations: [
      {
        id: 'obs-bn-01',
        brandId: 'breezenet',
        platformId: 'openai',
        productId: 'chatgpt-web',
        taskId: 'task-stream-chat',
        regionId: 'sg',
        nodeTag: '新加坡 原生节点',
        observedExitRegion: '新加坡',
        result: 'success',
        provenance: 'vendor',
        verification: 'unverified',
        observedAt: '2026-10-19',
        notes: '原生 IP 节点对 ChatGPT 与 Claude 具有较好兼容性。',
        sourceRef: 'SRC-28-BRANDS'
      }
    ]
  },
  {
    id: 'twilight',
    name: '暮光加速',
    aliases: ['muguang', 'Twilight', '暮光网络'],
    logo: '/logos/fclogo.webp',
    establishedYear: 2023,
    summary: '2023年运营，BGP智能调度与专线级出口，主打全平台覆盖与高稳定性低延迟，支持多设备同时在线，提供真人客服与大流量定制选项。',
    protocols: ['Shadowsocks', 'VLESS'],
    lineType: 'BGP 智能专线出口',
    startingPriceMonthly: 20.0,
    customClient: true,
    thirdPartySupport: true,
    linkId: 'link-twilight',
    sourceRef: 'SRC-28-BRANDS #4',
    verifiedAt: '2026-10-19',
    isActive: true,
    plans: [
      {
        id: 'twilight-basic',
        name: '暮光·基础套餐',
        billingCycle: 'monthly',
        actualPayment: 20,
        effectiveMonthlyCost: 20,
        trafficGB: 120,
        trafficReset: '每月重置',
        deviceLimit: 4,
        rateMultiplier: '1.0x',
        features: ['单月付20元', '每月120GB', '全平台客户端'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      }
    ],
    offer: {
      id: 'offer-twilight-5555',
      brandId: 'twilight',
      couponCode: 'muguang5555',
      discountDescription: '官方优惠码，立减并赠送备用节点权限',
      actualPaymentAfterDiscount: 20,
      applicableScope: '月付及季付',
      validUntil: null,
      sourceRef: 'SRC-28-BRANDS',
      isExpired: false
    },
    link: {
      id: 'link-twilight',
      brandId: 'twilight',
      url: 'https://varnexa.twilightaff.com/#/?code=D1LHglg3',
      code: 'D1LHglg3',
      sponsored: true,
      disclaimer: '推广专属链接。'
    },
    observations: [
      {
        id: 'obs-tl-01',
        brandId: 'twilight',
        platformId: 'netflix',
        productId: 'netflix-playback',
        taskId: 'task-video-playback',
        regionId: 'hk',
        nodeTag: '香港 BGP',
        observedExitRegion: '香港',
        result: 'success',
        provenance: 'vendor',
        verification: 'unverified',
        observedAt: '2026-10-19',
        notes: '流媒体解锁标明支持 Netflix、Disney+。',
        sourceRef: 'SRC-28-BRANDS'
      }
    ]
  },
  {
    id: 'dalaoyun',
    name: '大佬云',
    aliases: ['dalaoyun', '大佬'],
    logo: '/logos/qyt_logo.webp',
    establishedYear: 2024,
    summary: '2024年运营的性价比专线服务商，IEPL专线+VLESS协议，自研客户端与通用订阅双通道，季付及以上享有 7 折优惠，年付折合仅约 5.6元/月。',
    protocols: ['VLESS', 'Shadowsocks'],
    lineType: 'IEPL 专线',
    startingPriceMonthly: 5.6,
    customClient: true,
    thirdPartySupport: true,
    linkId: 'link-dalaoyun',
    sourceRef: 'SRC-28-BRANDS #5',
    verifiedAt: '2026-10-19',
    isActive: true,
    plans: [
      {
        id: 'dalaoyun-lite',
        name: '大佬云·基础版',
        billingCycle: 'yearly',
        actualPayment: 67.2,
        effectiveMonthlyCost: 5.6,
        trafficGB: 60,
        trafficReset: '每月重置',
        deviceLimit: 3,
        rateMultiplier: '1.0x',
        features: ['超低门槛', '每月60GB', 'IEPL专线保证'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      }
    ],
    offer: {
      id: 'offer-dalaoyun-dly888',
      brandId: 'dalaoyun',
      couponCode: 'dly888',
      discountDescription: '季付以上立享 7 折优惠码',
      actualPaymentAfterDiscount: 67.2,
      applicableScope: '季付/半年/年付',
      validUntil: null,
      sourceRef: 'SRC-28-BRANDS',
      isExpired: false
    },
    link: {
      id: 'link-dalaoyun',
      brandId: 'dalaoyun',
      url: 'https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN',
      code: 'jCPLmoWN',
      sponsored: true,
      disclaimer: '推广直达链接。'
    },
    observations: []
  },
  {
    id: 'stardream',
    name: '星岛梦',
    aliases: ['xingdaomeng', 'StarDream'],
    logo: '/logos/bee_logo.webp',
    establishedYear: 2023,
    summary: '多节点全球覆盖的专线机场，优化亚太与欧美热门节点，针对 ChatGPT、Claude 及流媒体提供专项分流规则。',
    protocols: ['Shadowsocks', 'Trojan', 'VLESS'],
    lineType: '专线 + 优化 BGP',
    startingPriceMonthly: 12.0,
    customClient: false,
    thirdPartySupport: true,
    linkId: 'link-stardream',
    sourceRef: 'SRC-28-BRANDS #6',
    verifiedAt: '2026-10-19',
    isActive: true,
    plans: [
      {
        id: 'stardream-basic',
        name: '星岛·探索版',
        billingCycle: 'monthly',
        actualPayment: 12,
        effectiveMonthlyCost: 12,
        trafficGB: 100,
        trafficReset: '每月重置',
        deviceLimit: 3,
        rateMultiplier: '1.0x',
        features: ['月付12元', '每月100GB', 'AI专项优化'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      }
    ],
    offer: null,
    link: {
      id: 'link-stardream',
      brandId: 'stardream',
      url: 'https://kfccbb.xingdaomeng.com',
      code: '',
      sponsored: true,
      disclaimer: '官方推广合作入口。'
    },
    observations: [
      {
        id: 'obs-sd-01',
        brandId: 'stardream',
        platformId: 'openai',
        productId: 'chatgpt-web',
        taskId: 'task-stream-chat',
        regionId: 'jp',
        nodeTag: '日本 01 优化',
        observedExitRegion: '日本',
        result: 'success',
        provenance: 'vendor',
        verification: 'unverified',
        observedAt: '2026-10-19',
        notes: '标注支持 ChatGPT 与常见流媒体播放。',
        sourceRef: 'SRC-28-BRANDS'
      }
    ]
  },
  {
    id: '2mao',
    name: '二猫云',
    aliases: ['ermao', '2mao', '二猫'],
    logo: '/logos/2mao_logo.webp',
    establishedYear: 2023,
    summary: '小巧实用的轻量机场，提供经济型月付与年付套餐，适合日常轻度 AI 对话、学术查阅与视频浏览。',
    protocols: ['Shadowsocks', 'VLESS'],
    lineType: '隧道中继',
    startingPriceMonthly: 9.9,
    customClient: false,
    thirdPartySupport: true,
    linkId: 'link-2mao',
    sourceRef: 'SRC-28-BRANDS #7',
    verifiedAt: '2026-10-19',
    isActive: true,
    plans: [
      {
        id: '2mao-lite',
        name: '二猫·轻享套餐',
        billingCycle: 'monthly',
        actualPayment: 9.9,
        effectiveMonthlyCost: 9.9,
        trafficGB: 80,
        trafficReset: '每月重置',
        deviceLimit: 2,
        rateMultiplier: '1.0x',
        features: ['月付9.9元', '80GB月流量', '支持主流第三方软件'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      }
    ],
    offer: null,
    link: {
      id: 'link-2mao',
      brandId: '2mao',
      url: 'https://waaa.2maoyunaff.cc',
      code: '',
      sponsored: true,
      disclaimer: '合规推广入口。'
    },
    observations: []
  },
  {
    id: 'v2yun',
    name: '唯兔云（V2云）',
    aliases: ['weitu', 'v2yun', '唯兔'],
    logo: '/logos/v2云主图.png',
    establishedYear: 2022,
    summary: '聚焦 V2Ray/VLESS 协议的高速专线机场，节点延时低，分流规则全面，针对多设备同时在线与大流量影音提供良好支持。',
    protocols: ['VLESS', 'VMess'],
    lineType: 'IEPL 专线',
    startingPriceMonthly: 15.0,
    customClient: true,
    thirdPartySupport: true,
    linkId: 'link-v2yun',
    sourceRef: 'SRC-28-BRANDS #9',
    verifiedAt: '2026-10-19',
    isActive: true,
    plans: [
      {
        id: 'v2yun-standard',
        name: '唯兔·标准版',
        billingCycle: 'monthly',
        actualPayment: 15,
        effectiveMonthlyCost: 15,
        trafficGB: 120,
        trafficReset: '每月重置',
        deviceLimit: 3,
        rateMultiplier: '1.0x',
        features: ['月付15元', '120GB月流量', '专线直达'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      }
    ],
    offer: null,
    link: {
      id: 'link-v2yun',
      brandId: 'v2yun',
      url: 'https://fast.v2yunvipaff.com',
      code: '',
      sponsored: true,
      disclaimer: '专属推广注册入口。'
    },
    observations: [
      {
        id: 'obs-v2-01',
        brandId: 'v2yun',
        platformId: 'openai',
        productId: 'chatgpt-web',
        taskId: 'task-stream-chat',
        regionId: 'sg',
        nodeTag: '新加坡 01',
        observedExitRegion: '新加坡',
        result: 'success',
        provenance: 'vendor',
        verification: 'unverified',
        observedAt: '2026-10-19',
        notes: '专线出口，ChatGPT 流式回答顺畅。',
        sourceRef: 'SRC-28-BRANDS'
      }
    ]
  },
  {
    id: 'u1s1',
    name: 'U1S1（有一说一）',
    aliases: ['u1s1', '有一说一'],
    logo: '/logos/u1s1主图.png',
    establishedYear: 2023,
    summary: '以“有一说一、透明无虚标”为旗号的性价比机场，标注节点真实倍率与可用性，提供实用月付档位。',
    protocols: ['Shadowsocks', 'Trojan'],
    lineType: 'BGP 跨境隧道',
    startingPriceMonthly: 10.0,
    customClient: false,
    thirdPartySupport: true,
    linkId: 'link-u1s1',
    sourceRef: 'SRC-28-BRANDS #11',
    verifiedAt: '2026-10-19',
    isActive: true,
    plans: [
      {
        id: 'u1s1-basic',
        name: 'U1S1·基础套餐',
        billingCycle: 'monthly',
        actualPayment: 10,
        effectiveMonthlyCost: 10,
        trafficGB: 90,
        trafficReset: '每月重置',
        deviceLimit: 2,
        rateMultiplier: '1.0x 无套路',
        features: ['月付10元', '每月90GB', '无虚标倍率'],
        sourceRef: 'SRC-28-BRANDS',
        verifiedAt: '2026-10-19'
      }
    ],
    offer: null,
    link: {
      id: 'link-u1s1',
      brandId: 'u1s1',
      url: 'https://pkdj7.vipaff.cc',
      code: '',
      sponsored: true,
      disclaimer: '合规推广入口。'
    },
    observations: []
  },
  {
    id: 'edgenova',
    name: 'EdgeNova（边缘节点）',
    aliases: ['edgenova', '边缘节点'],
    logo: '/logos/edgenova_logo.webp',
    establishedYear: 2023,
    summary: '主打全球边缘网络与低延迟出口调度的技术型服务商，节点遍布亚太及欧美重要数据中心，支持主流开源内核。',
    protocols: ['Trojan', 'VLESS'],
    lineType: '优质 Anycast / BGP 专线',
    startingPriceMonthly: 16.0,
    customClient: false,
    thirdPartySupport: true,
    linkId: 'link-edgenova',
    sourceRef: 'SRC-14-BRANDS #12',
    verifiedAt: '2026-08-24',
    isActive: true,
    plans: [
      {
        id: 'edgenova-std',
        name: 'EdgeNova·标准版',
        billingCycle: 'monthly',
        actualPayment: 16,
        effectiveMonthlyCost: 16,
        trafficGB: 150,
        trafficReset: '每月重置',
        deviceLimit: 3,
        rateMultiplier: '1.0x',
        features: ['边缘低延时', '150GB月流量', '原生IP支持'],
        sourceRef: 'SRC-14-BRANDS',
        verifiedAt: '2026-08-24'
      }
    ],
    offer: null,
    link: {
      id: 'link-edgenova',
      brandId: 'edgenova',
      url: 'https://work.edgenovaaff.cc',
      code: '',
      sponsored: true,
      disclaimer: '合规推广入口。'
    },
    observations: [
      {
        id: 'obs-en-01',
        brandId: 'edgenova',
        platformId: 'openai',
        productId: 'chatgpt-web',
        taskId: 'task-stream-chat',
        regionId: 'jp',
        nodeTag: '日本 边缘节点',
        observedExitRegion: '日本',
        result: 'success',
        provenance: 'third_party',
        verification: 'verified',
        observedAt: '2026-05-02',
        notes: 'ChatGPT 与 Claude 可用性验证通过。',
        sourceRef: 'SRC-14-BRANDS'
      }
    ]
  },
  {
    id: 'flyingbird',
    name: 'FlyingBird（飞鸟云）',
    aliases: ['flyingbird', '飞鸟云', '飞鸟'],
    logo: '/logos/flyingbird.webp',
    establishedYear: 2022,
    summary: '稳定运行多年的老牌专线机场，拥有丰富的亚洲与欧美直连出口，提供针对 Netflix 与 Disney+ 的独立解锁测试记录。',
    protocols: ['Shadowsocks', 'Trojan'],
    lineType: 'IPLC / IEPL 专线',
    startingPriceMonthly: 15.0,
    customClient: false,
    thirdPartySupport: true,
    linkId: 'link-flyingbird',
    sourceRef: 'SRC-14-BRANDS #3',
    verifiedAt: '2026-08-24',
    isActive: true,
    plans: [
      {
        id: 'flyingbird-monthly',
        name: '飞鸟·月付优享',
        billingCycle: 'monthly',
        actualPayment: 15,
        effectiveMonthlyCost: 15,
        trafficGB: 100,
        trafficReset: '每月重置',
        deviceLimit: 3,
        rateMultiplier: '1.0x',
        features: ['专线保障', '100GB月流量', '流媒体全解锁优化'],
        sourceRef: 'SRC-14-BRANDS',
        verifiedAt: '2026-08-24'
      }
    ],
    offer: null,
    link: {
      id: 'link-flyingbird',
      brandId: 'flyingbird',
      url: 'https://flyingbird.com',
      code: '',
      sponsored: true,
      disclaimer: '官方推广合作入口。'
    },
    observations: [
      {
        id: 'obs-fb-01',
        brandId: 'flyingbird',
        platformId: 'netflix',
        productId: 'netflix-playback',
        taskId: 'task-video-playback',
        regionId: 'sg',
        nodeTag: '新加坡 专线',
        observedExitRegion: '新加坡',
        result: 'success',
        provenance: 'third_party',
        verification: 'verified',
        observedAt: '2026-05-02',
        notes: 'Netflix 新加坡区片目正常播放，无代理阻断。',
        sourceRef: 'SRC-14-BRANDS'
      }
    ]
  }
];

// Flatten arrays
const brands = [];
const plans = [];
const offers = [];
const links = [];
const observations = [];

brandsData.forEach(b => {
  const { plans: bPlans, offer: bOffer, link: bLink, observations: bObs, ...brandInfo } = b;
  brands.push(brandInfo);
  if (bPlans) plans.push(...bPlans);
  if (bOffer) offers.push(bOffer);
  if (bLink) links.push(bLink);
  if (bObs) observations.push(...bObs);
});

// 6. ChangeLog
const changeLog = [
  {
    date: '2026-10-21',
    type: 'init',
    title: 'aijichang.blog 全面重构上线',
    details: '基于 VitePress 1.6 + Pagefind 1.5 搭建纯静态、简白品牌化、支持四层可用性评估的中文 AI 与流媒体机场选购指南。'
  },
  {
    date: '2026-10-19',
    type: 'data_update',
    title: '同步 28 品牌最新观测记录',
    details: '归档光速云、飞猫云、微风网络等 28 个品牌的独有特征、真实套餐、优惠码与测速批次数据。'
  },
  {
    date: '2026-08-24',
    type: 'archive',
    title: '归档 14 品牌华为云与专线实测记录',
    details: '存证 WgetCloud、FlyingBird、EdgeNova 等 14 个品牌的历史测速延迟与多节点解锁表现。'
  }
];

// Write out all files
const outDir = path.resolve('data/public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'platforms.json'), JSON.stringify(platforms, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'products.json'), JSON.stringify(products, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'tasks.json'), JSON.stringify(tasks, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'regions.json'), JSON.stringify(regions, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'brands.json'), JSON.stringify(brands, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'plans.json'), JSON.stringify(plans, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'offers.json'), JSON.stringify(offers, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'links.json'), JSON.stringify(links, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'observations.json'), JSON.stringify(observations, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'changeLog.json'), JSON.stringify(changeLog, null, 2), 'utf8');

console.log('Successfully written all data files to data/public/');
console.log(`- Brands: ${brands.length}`);
console.log(`- Plans: ${plans.length}`);
console.log(`- Offers: ${offers.length}`);
console.log(`- Links: ${links.length}`);
console.log(`- Observations: ${observations.length}`);
console.log(`- Platforms: ${platforms.length}`);
console.log(`- Products: ${products.length}`);
console.log(`- Tasks: ${tasks.length}`);
console.log(`- Regions: ${regions.length}`);
