import type { HeadConfig, PageData } from 'vitepress';

export function generateCanonicalAndSchema(pageData: PageData): HeadConfig[] {
  let relativePath = pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '');
  if (relativePath && !relativePath.endsWith('/')) {
    relativePath += '/';
  }
  
  // Clean special 404
  let canonicalUrl = `https://aijichang.blog/${relativePath}`;
  if (pageData.relativePath === '404.md') {
    canonicalUrl = 'https://aijichang.blog/404.html';
  }

  const title = pageData.title ? `${pageData.title} | AI机场` : 'AI机场｜AI办公与流媒体网络选购指南';
  const description = pageData.description || '面向使用 ChatGPT、Claude、Gemini 以及 Netflix、Disney+、YouTube、TikTok 的中文用户网络选购指南。';
  const logoUrl = 'https://aijichang.blog/logos/galaxy_transparent_square.webp';

  const head: HeadConfig[] = [
    ['link', { rel: 'canonical', href: canonicalUrl }],
    ['meta', { property: 'og:url', content: canonicalUrl }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: logoUrl }],
    ['meta', { name: 'twitter:image', content: logoUrl }],
    ['meta', { name: 'author', content: '林越 (Lin Yue)' }],
    ['meta', { property: 'article:published_time', content: '2026-10-21T08:00:00+08:00' }],
    ['meta', { property: 'article:modified_time', content: '2026-10-21T16:00:00+08:00' }]
  ];

  // 1. BreadcrumbList Schema for all pages
  const segments = relativePath.split('/').filter(Boolean);
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: '首页',
      item: 'https://aijichang.blog/'
    }
  ];

  let currentPath = 'https://aijichang.blog/';
  segments.forEach((seg, idx) => {
    currentPath += `${seg}/`;
    let segName = seg;
    if (seg === 'recommend') segName = '机场推荐';
    else if (seg === 'ai') segName = 'AI机场';
    else if (seg === 'streaming') segName = '流媒体机场';
    else if (seg === 'free') segName = '免费机场';
    else if (seg === 'regions') segName = '节点地区';
    else if (seg === 'guides') segName = 'AI使用指南';
    else if (seg === 'tests') segName = '解锁实测';
    else if (seg === 'deals') segName = '优惠情报';
    else if (seg === 'brands') segName = '机场品牌库';
    else if (seg === 'clients') segName = '客户端下载';
    else if (seg === 'reviews') segName = '单品深度测评';
    else if (seg === 'tools') segName = '交互工具箱';
    else if (seg === 'about') segName = '关于本站';
    else if (seg === 'authors') segName = '作者与评测团队';
    else if (idx === segments.length - 1 && pageData.title) segName = pageData.title;

    breadcrumbItems.push({
      '@type': 'ListItem',
      position: idx + 2,
      name: segName,
      item: currentPath
    });
  });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems
  };

  head.push([
    'script',
    { type: 'application/ld+json' },
    JSON.stringify(breadcrumbSchema)
  ]);

  // 2. WebSite schema for homepage
  if (pageData.relativePath === 'index.md') {
    const webSiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AI机场',
      url: 'https://aijichang.blog/',
      description: description,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://aijichang.blog/search/?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    };
    head.push([
      'script',
      { type: 'application/ld+json' },
      JSON.stringify(webSiteSchema)
    ]);
  }

  // 3. Organization schema for /about/ and homepage
  if (pageData.relativePath === 'index.md' || pageData.relativePath.startsWith('about/')) {
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AI机场 - aijichang.blog',
      url: 'https://aijichang.blog',
      logo: logoUrl,
      description: '专注大语言模型与跨境流媒体网络客观实测的技术媒体'
    };
    head.push([
      'script',
      { type: 'application/ld+json' },
      JSON.stringify(orgSchema)
    ]);
  }

  // 4. CollectionPage schema for 8 core Hubs & secondary Hubs
  const hubPaths = [
    'recommend/index.md',
    'ai/index.md',
    'streaming/index.md',
    'free/index.md',
    'regions/index.md',
    'guides/index.md',
    'tests/index.md',
    'deals/index.md',
    'brands/index.md',
    'clients/index.md',
    'reviews/index.md'
  ];

  if (hubPaths.includes(pageData.relativePath)) {
    const collectionSchema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      headline: pageData.title || title,
      url: canonicalUrl,
      description: description,
      inLanguage: 'zh-CN',
      publisher: {
        '@type': 'Organization',
        name: 'AI机场',
        url: 'https://aijichang.blog'
      }
    };
    head.push([
      'script',
      { type: 'application/ld+json' },
      JSON.stringify(collectionSchema)
    ]);
  }

  // 5. TechArticle / Review schema for brand reviews & deep guides
  if (pageData.relativePath.startsWith('brands/') || pageData.relativePath.startsWith('reviews/') || pageData.relativePath.startsWith('ai/')) {
    const isBrandReview = pageData.relativePath.startsWith('brands/') || pageData.relativePath.startsWith('reviews/');
    
    const articleSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': isBrandReview ? 'Review' : 'TechArticle',
      headline: pageData.title || title,
      description: description,
      url: canonicalUrl,
      datePublished: '2026-10-21T08:00:00+08:00',
      dateModified: '2026-10-21T16:00:00+08:00',
      inLanguage: 'zh-CN',
      author: {
        '@type': 'Person',
        name: '林越 (Lin Yue)',
        jobTitle: '资深网络架构与跨境链路评测工程师',
        url: 'https://aijichang.blog/authors/lin-yue/'
      },
      publisher: {
        '@type': 'Organization',
        name: 'AI机场',
        url: 'https://aijichang.blog',
        logo: {
          '@type': 'ImageObject',
          url: logoUrl
        }
      }
    };

    if (isBrandReview) {
      articleSchema.itemReviewed = {
        '@type': 'Product',
        name: pageData.title?.split(' ')[0] || '网络代理服务',
        description: description
      };
      articleSchema.reviewRating = {
        '@type': 'Rating',
        ratingValue: '4.8',
        bestRating: '5'
      };
    }

    head.push([
      'script',
      { type: 'application/ld+json' },
      JSON.stringify(articleSchema)
    ]);
  }

  return head;
}
