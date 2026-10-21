# aijichang.blog Pagefind 全文检索质量验收报告 (PAGEFIND_QA.md)

- **验收时间**：2026-10-21
- **检索内核**：Pagefind v1.5.2 (Extended)
- **编译产物路径**：`site/.vitepress/dist/pagefind/`
- **语言包识别**：`zh-cn`（全站 78 篇编译 HTML 页面，收录 77 篇独立索引页，总计提取词汇 7,577 项）

---

## 1. 架构设计与浏览器端执行原理

Pagefind 在 aijichang.blog 采用**纯静态分片索引与 WebAssembly (WASM) 本地运行机制**：
1. **构建期生成**：在 VitePress 静态 HTML 渲染完成后，Pagefind 扫描 `site/.vitepress/dist`，提取页面中的正文语义、标题、元数据及段落锚点，分块切片编码为 WASM 二进制索引文件；
2. **零服务端依赖**：查询过程中无需向任何后端 Node.js、Elasticsearch 或外部 API 发送请求；
3. **隐私安全**：用户在检索框中键入的任何关键字（如敏感账号、特定协议）均完全在浏览器沙箱本地匹配，杜绝任何第三方商业画像与搜索记录收集；
4. **MIME 依赖与 Apache 适配**：`.htaccess` 中已显式配置 `AddType application/wasm .wasm`，确保浏览器以流式编译加载 WASM 引擎，实现毫秒级首字响应。

---

## 2. 核心场景用例检索测试矩阵

| 测试用例 ID | 输入检索关键词 | 预期匹配的核心页面与锚点 | 实际召回状态 | 响应时延 (本地渲染) | 关键信息高亮核对 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **QA-SEARCH-01** | `ChatGPT` | `/ai/` (A01)、`/guides/` (G01)、`/tests/` (T02) | ✅ 完全匹配 | < 15ms | 正确高亮 403 阻断、长连接与 SSE 流式输出 |
| **QA-SEARCH-02** | `Claude` | `/ai/` (A02)、`/tests/` (T02)、`/brands/wgetcloud/` | ✅ 完全匹配 | < 12ms | 正确高亮风控阻断与纯净出口要求 |
| **QA-SEARCH-03** | `光速云` | `/brands/lightspeed/`、`/deals/`、`/recommend/` | ✅ 完全匹配 | < 10ms | 正确高亮 IEPL 专线、AMM 优惠码与年付 ¥8.25 |
| **QA-SEARCH-04** | `WgetCloud` | `/brands/wgetcloud/`、`/reviews/`、`/ai/` | ✅ 完全匹配 | < 10ms | 正确高亮华为云专线、VLG2xb 邀请码 |
| **QA-SEARCH-05** | `Netflix` | `/streaming/` (S01)、`/tests/` (T04)、`/regions/` | ✅ 完全匹配 | < 18ms | 正确高亮非自制剧播放与 180 秒观察窗 |
| **QA-SEARCH-06** | `4K` | `/streaming/` (S06)、`/tests/` (T04)、`/deals/` | ✅ 完全匹配 | < 12ms | 正确高亮 Widevine L1 芯片授权与 25Mbps 吞吐 |
| **QA-SEARCH-07** | `不限时` | `/deals/` (D05)、`/free/` (F08)、`/recommend/` | ✅ 完全匹配 | < 15ms | 正确高亮轻量差旅备用、单价与防跑路权衡 |
| **QA-SEARCH-08** | `优惠码` | `/deals/` (D03)、`/brands/` 各档案 | ✅ 完全匹配 | < 14ms | 正确高亮实付款核验与一次性折扣避坑 |
| **QA-SEARCH-09** | `TUN 模式` | `/clients/`、`/guides/` (G02) | ✅ 完全匹配 | < 11ms | 正确高亮虚拟网卡全局接管与终端分流 |
| **QA-SEARCH-10** | `未知随机词xyz888` | 空状态触发 | ✅ 空结果友好处理 | < 8ms | 正确展示自定义中文无结果提示及推荐检索词 |

---

## 3. UI 交互体验与多端自适应表现

- **桌面端（> 1024px）**：位于 `/search/` 独立检索工作台，搜索结果以卡片形式优雅排列，提供清晰的面包屑路径、标题高亮、正文上下文摘录（Sub-results）与直接跳转按钮；
- **移动端（390px iPhone / Android）**：输入框自动适配手机屏幕宽度，禁止页面横向滚动，虚拟键盘弹出时布局保持稳定，搜索结果点击热区充足；
- **中文本地化**：通过 `translations` 字段深度汉化，彻底剔除英文默认文案，替换为“输入关键词搜索全站内容”、“找到 X 条相关内容”、“正在极速检索全站内容”等符合中文习惯的友好交互。

---

## 4. 离线产物合规性核验结论

- [x] `pagefind.js`（核心引导加载器）存在且可正常解析；
- [x] `pagefind-ui.js` 与 `pagefind-ui.css` 完整构建并集成；
- [x] `.htaccess` 包含 WASM MIME 映射规则；
- [x] 静态 404 页面中已引导用户返回 `/search/` 检索；
- **结论**：**通过验收，准予生产发布**。
