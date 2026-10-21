# aijichang.blog｜统一数据字典与模式规范（DATA_DICTIONARY）

> **版本**：v1.0.0
> **类型定义目录**：`site/.vitepress/theme/types/data.d.ts` 与 `data/public/*.json`
> **安全边界原则**：公开构建数据严格脱敏，严禁包含任何密钥、密码、Cookie、私有真实订阅地址及敏感客户信息。

---

## 一、枚举类型定义（Enumerations）

```typescript
// 数据来源归属
export type Provenance = 
  | 'vendor'         // 机场官方宣称/官网标注
  | 'user_supplied'   // 用户/站长明确提供
  | 'third_party'    // 第三方公开独立观测
  | 'self_measured'   // 本站亲自复测核查
  | 'example';       // 方法演示/基准样本

// 核验状态
export type VerificationStatus = 
  | 'verified'       // 已复核且有证据支撑
  | 'unverified'     // 尚未独立验证（仅记录来源）
  | 'conflicting'    // 多个来源存在冲突
  | 'incomplete';    // 字段不完整/缺少关键上下文

// 任务测试结果（严禁单一布尔值）
export type TaskResult = 
  | 'success'        // 完全达成测试目标
  | 'failure'        // 明确报错/不可用/阻断
  | 'partial'        // 部分成功（如网页可用但无法流式/仅限特定子功能）
  | 'unknown'        // 未测试（前端不可显示为 0 或报错）
  | 'not_tested'     // 明确未纳入当期测试
  | 'not_applicable'; // 不适用（例如无此功能）

// 计费周期
export type BillingCycle = 
  | 'monthly'        // 真实单月付
  | 'quarterly'      // 季付
  | 'semi_annual'    // 半年付
  | 'yearly'         // 年付
  | 'two_year'       // 两年付
  | 'once';          // 一次性/不限时流量包
```

---

## 二、核心实体模式（Entities）

### 1. 品牌定义（Brand）
```typescript
export interface Brand {
  id: string;               // 唯一slug，如 "lightspeed", "wgetcloud"
  name: string;             // 中文品牌名，如 "光速云"
  aliases: string[];        // 别名库，如 ["LightSpeed", "gsy"]
  logo: string;             // 相对路径，如 "/logos/光速云主图.png"
  establishedYear?: number; // 运营年份，如 2020
  summary: string;          // 简明客观特征摘要（50-100字）
  protocols: string[];      // 协议记录，如 ["Shadowsocks", "VLESS", "Trojan"]
  lineType: string;         // 线路类型，如 "IEPL专线 / BGP中继"
  startingPriceMonthly: number; // 真实最低月付门槛（元）
  customClient: boolean;    // 是否提供自研专属客户端
  thirdPartySupport: boolean; // 是否支持通用订阅导入（Clash/Sing-box等）
  linkId: string;           // 关联推广链接 ID
  sourceRef: string;        // 原始资料引用编号
  verifiedAt: string;       // 最后核验日期 (YYYY-MM-DD)
  isActive: boolean;
}
```

### 2. 套餐方案（Plan）
```typescript
export interface Plan {
  id: string;               // 如 "lightspeed-lite"
  brandId: string;          // 关联 Brand.id
  name: string;             // 套餐名称，如 "轻量版"
  billingCycle: BillingCycle;
  actualPayment: number;    // 首次精确实付金额（元）
  effectiveMonthlyCost: number; // 折算月均成本（元/月）
  trafficGB: number;        // 套餐流量额度
  trafficReset: string;     // 流量重置机制，如 "每月重置" / "一次性不限时"
  deviceLimit: number | null; // 设备数量限制（null表示未明示或宣称不限）
  rateMultiplier: string;   // 流量倍率说明，如 "常规节点 1.0x，高级专线 1.5x"
  features: string[];       // 核心特性标签
  sourceRef: string;
  verifiedAt: string;
}
```

### 3. 平台、产品与任务定义（Platform & Task）
```typescript
export interface Platform {
  id: string;               // 如 "openai", "anthropic", "google", "netflix"
  name: string;             // 如 "OpenAI / ChatGPT"
  officialDocUrl: string;   // 官方服务地区及规则页面
}

export interface Product {
  id: string;               // 如 "chatgpt-web", "claude-web", "gemini-app"
  platformId: string;       // 对应 Platform.id
  name: string;             // 如 "ChatGPT 网页版"
  entryUrl: string;         // 官方访问入口
}

export interface Task {
  id: string;               // 如 "login", "conversation-stream", "file-upload"
  productId: string;        // 对应 Product.id
  name: string;             // 如 "流式对话输出"
  tier: 1 | 2 | 3 | 4;      // 1:官方资格, 2:网络可达, 3:产品任务, 4:长期体验
  successCondition: string; // 判定成功的客观标准
}
```

### 4. 观测记录（Observation）
```typescript
export interface Observation {
  id: string;               // 观测记录唯一标识
  brandId: string;
  planId?: string;
  platformId: string;
  productId: string;
  taskId: string;
  regionId: string;         // 如 "hk", "jp", "sg", "us"
  nodeTag: string;          // 节点标签名称
  observedExitRegion: string; // 实际出口 IP 识别地区
  result: TaskResult;
  provenance: Provenance;
  verification: VerificationStatus;
  observedAt: string;       // 记录时间戳 (YYYY-MM-DD)
  operatorBaseline?: string; // 测试运营商环境（电信/联通/移动）
  rttMs?: number;           // TLS 往返时延（若有）
  notes: string;            // 观测备注与局限说明
  sourceRef: string;
}
```

### 5. 优惠情报（Offer）
```typescript
export interface Offer {
  id: string;
  brandId: string;
  planId?: string;
  couponCode?: string;      // 优惠码（如 "AMM"）
  discountDescription: string; // 折扣描述，如 "月付9折 / 年付立减"
  actualPaymentAfterDiscount: number; // 折后实付
  applicableScope: string;  // 适用范围与周期限制
  validUntil: string | null; // 有效期截止（null表示长期或未公布截止）
  sourceRef: string;
  isExpired: boolean;
  historyNote?: string;     // 历史价格变更记录
}
```

### 6. 合规推广链接（Link）
```typescript
export interface Link {
  id: string;
  brandId: string;
  url: string;              // 推广目标 URL
  code: string;             // 推广代码（如有）
  sponsored: boolean;       // 固定 true，明确商业赞助
  disclaimer: string;       // 提示文案："可能包含推荐返佣，不影响客观评测"
}
```
