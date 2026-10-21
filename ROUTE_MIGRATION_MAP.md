# aijichang.blog｜路由规范与页面映射表（ROUTE_MIGRATION_MAP）

> **技术实现**：VitePress 目录索引模式（`directory/index.md` → `directory/index.html` → `/directory/` 尾斜杠 URL）
> **规范目标**：保障 Apache 纯静态服务器、原生 DirectoryIndex、Pagefind 索引与搜索引擎 Canonical URL 完全统一，杜绝三种不同 URL 形态混杂。

---

## 一、主干路由结构规范

| 逻辑路径 | 实体源文件 | 生成 HTML 目标路径 | 权威规范 URL（Canonical） | 页面类型 |
| :--- | :--- | :--- | :--- | :--- |
| **首页** | `site/index.md` | `dist/index.html` | `https://aijichang.blog/` | 核心品牌 Hub |
| **机场推荐** | `site/recommend/index.md` | `dist/recommend/index.html` | `https://aijichang.blog/recommend/` | 决策 Hub |
| **AI 机场** | `site/ai/index.md` | `dist/ai/index.html` | `https://aijichang.blog/ai/` | 业务 Hub |
| **流媒体机场** | `site/streaming/index.md` | `dist/streaming/index.html` | `https://aijichang.blog/streaming/` | 业务 Hub |
| **免费机场** | `site/free/index.md` | `dist/free/index.html` | `https://aijichang.blog/free/` | 业务 Hub |
| **节点地区** | `site/regions/index.md` | `dist/regions/index.html` | `https://aijichang.blog/regions/` | 业务 Hub |
| **AI 使用指南** | `site/guides/index.md` | `dist/guides/index.html` | `https://aijichang.blog/guides/` | 业务 Hub |
| **解锁实测** | `site/tests/index.md` | `dist/tests/index.html` | `https://aijichang.blog/tests/` | 业务 Hub |
| **优惠情报** | `site/deals/index.md` | `dist/deals/index.html` | `https://aijichang.blog/deals/` | 业务 Hub |

---

## 二、辅助页面与合规专题路由

| 逻辑路径 | 实体源文件 | 生成 HTML 目标路径 | 权威规范 URL | 职责范围 |
| :--- | :--- | :--- | :--- | :--- |
| **品牌总览** | `site/brands/index.md` | `dist/brands/index.html` | `https://aijichang.blog/brands/` | 28+ 品牌档案库 |
| **单品牌详情** | `site/brands/[slug]/index.md` | `dist/brands/[slug]/index.html` | `https://aijichang.blog/brands/[slug]/` | 具体品牌客观档案 |
| **评测精选** | `site/reviews/index.md` | `dist/reviews/index.html` | `https://aijichang.blog/reviews/` | 深度评测集合 |
| **测试报告** | `site/tests/reports/index.md` | `dist/tests/reports/index.html` | `https://aijichang.blog/tests/reports/` | 具体批次测试记录 |
| **交互工具箱** | `site/tools/index.md` | `dist/tools/index.html` | `https://aijichang.blog/tools/` | 7大轻量决策工具 |
| **全文搜索** | `site/search/index.md` | `dist/search/index.html` | `https://aijichang.blog/search/` | Pagefind 中文搜索页 |
| **关于本站** | `site/about/index.md` | `dist/about/index.html` | `https://aijichang.blog/about/` | 团队定位与初衷 |
| **方法论** | `site/methodology/index.md` | `dist/methodology/index.html` | `https://aijichang.blog/methodology/` | 四层评测方法公开 |
| **商业披露** | `site/disclosure/index.md` | `dist/disclosure/index.html` | `https://aijichang.blog/disclosure/` | AFF 透明度与合规 |
| **隐私政策** | `site/privacy/index.md` | `dist/privacy/index.html` | `https://aijichang.blog/privacy/` | 静态无追踪承诺 |
| **更正声明** | `site/corrections/index.md` | `dist/corrections/index.html` | `https://aijichang.blog/corrections/` | 勘误与复测归档 |
| **404 错误页** | `site/404.md` | `dist/404.html` | - | Apache 错误文档承接 |

---

## 三、二级专题与三级集群承接规则

- **承接策略**：
  - 64 个二级专题与 128 个三级集群作为数据结构关系存储于 `CONTENT_MAP.json`。
  - 在当前阶段，9 个主入口页面分别承担各自主题下 8 个二级专题的深度回答与矩阵承接。
  - 单独成篇的重点候选文章（如 `R01-A1`、`A01-A1` 等）按照标准路径：
    `/[channel]/[topicSlug]/[articleSlug]/index.md` 生成对应目录，确保层级语义清晰。
  - 严禁生成 128 个只有纯链接列表的“空目录/骨架页”。
