import{d as I,c as l,r as p,n as A,o as i,a as F,t as m,b as _,w as v,T as he,e as h,_ as B,u as _e,i as ze,f as We,g as be,h as P,j as e,k as d,l as J,m as ye,p as $,q as z,s as se,v as Q,x as Ge,y as Ie,z as Ke,A as Xe,F as L,B as x,C as Z,D as le,E as M,G as Re,H as j,I as $e,J as oe,K as X,L as ce,M as Qe,N as Le,O as Je,P as Ae,Q as we,R as de,S as Ze,U as xe,V as Ve,W as et,X as tt,Y as nt,Z as at,$ as rt,a0 as N,a1 as ee,a2 as it,a3 as H,a4 as te,a5 as st}from"./framework.BNWYI55R.js";const lt=I({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(n,a)=>(i(),l("span",{class:A(["VPBadge",t.type])},[p(n.$slots,"default",{},()=>[F(m(t.text),1)])],2))}}),ot={key:0,class:"VPBackdrop"},ct=I({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(n,a)=>(i(),_(he,{name:"fade"},{default:v(()=>[t.show?(i(),l("div",ot)):h("",!0)]),_:1}))}}),dt=B(ct,[["__scopeId","data-v-c79a1216"]]),w=_e;function ut(t,n){let a,r=!1;return()=>{a&&clearTimeout(a),r?a=setTimeout(t,n):(t(),(r=!0)&&setTimeout(()=>r=!1,n))}}function me(t){return t.startsWith("/")?t:`/${t}`}function Ce(t){const{pathname:n,search:a,hash:r,protocol:s}=new URL(t,"http://a.com");if(ze(t)||t.startsWith("#")||!s.startsWith("http")||!We(n))return t;const{site:c}=w(),o=n.endsWith("/")||n.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${n.replace(/(\.md)?$/,c.value.cleanUrls?"":".html")}${a}${r}`);return be(o)}function ne({correspondingLink:t=!1}={}){const{site:n,localeIndex:a,page:r,theme:s,hash:c}=w(),o=P(()=>{var u,T;return{label:(u=n.value.locales[a.value])==null?void 0:u.label,link:((T=n.value.locales[a.value])==null?void 0:T.link)||(a.value==="root"?"/":`/${a.value}/`)}});return{localeLinks:P(()=>Object.entries(n.value.locales).flatMap(([u,T])=>o.value.label===T.label?[]:{text:T.label,link:ft(T.link||(u==="root"?"/":`/${u}/`),s.value.i18nRouting!==!1&&t,r.value.relativePath.slice(o.value.link.length-1),!n.value.cleanUrls)+c.value})),currentLang:o}}function ft(t,n,a,r){return n?t.replace(/\/$/,"")+me(a.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):t}const yt={class:"NotFound"},mt={class:"code"},pt={class:"title"},gt={class:"quote"},vt={class:"action"},ht=["href","aria-label"],bt=I({__name:"NotFound",setup(t){const{theme:n}=w(),{currentLang:a}=ne();return(r,s)=>{var c,o,f,u,T;return i(),l("div",yt,[e("p",mt,m(((c=d(n).notFound)==null?void 0:c.code)??"404"),1),e("h1",pt,m(((o=d(n).notFound)==null?void 0:o.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=e("div",{class:"divider"},null,-1)),e("blockquote",gt,m(((f=d(n).notFound)==null?void 0:f.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),e("div",vt,[e("a",{class:"link",href:d(be)(d(a).link),"aria-label":((u=d(n).notFound)==null?void 0:u.linkLabel)??"go to home"},m(((T=d(n).notFound)==null?void 0:T.linkText)??"Take me home"),9,ht)])])}}}),Gt=B(bt,[["__scopeId","data-v-d6be1790"]]);function Ee(t,n){if(Array.isArray(t))return re(t);if(t==null)return[];n=me(n);const a=Object.keys(t).sort((s,c)=>c.split("/").length-s.split("/").length).find(s=>n.startsWith(me(s))),r=a?t[a]:[];return Array.isArray(r)?re(r):re(r.items,r.base)}function It(t){const n=[];let a=0;for(const r in t){const s=t[r];if(s.items){a=n.push(s);continue}n[a]||n.push({items:[]}),n[a].items.push(s)}return n}function Ct(t){const n=[];function a(r){for(const s of r)s.text&&s.link&&n.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&a(s.items)}return a(t),n}function pe(t,n){return Array.isArray(n)?n.some(a=>pe(t,a)):J(t,n.link)?!0:n.items?pe(t,n.items):!1}function re(t,n){return[...t].map(a=>{const r={...a},s=r.base||n;return s&&r.link&&(r.link=s+r.link),r.items&&(r.items=re(r.items,s)),r})}function W(){const{frontmatter:t,page:n,theme:a}=w(),r=ye("(min-width: 960px)"),s=$(!1),c=P(()=>{const k=a.value.sidebar,V=n.value.relativePath;return k?Ee(k,V):[]}),o=$(c.value);z(c,(k,V)=>{JSON.stringify(k)!==JSON.stringify(V)&&(o.value=c.value)});const f=P(()=>t.value.sidebar!==!1&&o.value.length>0&&t.value.layout!=="home"),u=P(()=>T?t.value.aside==null?a.value.aside==="left":t.value.aside==="left":!1),T=P(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:a.value.aside!==!1),b=P(()=>f.value&&r.value),g=P(()=>f.value?It(o.value):[]);function G(){s.value=!0}function S(){s.value=!1}function C(){s.value?S():G()}return{isOpen:s,sidebar:o,sidebarGroups:g,hasSidebar:f,hasAside:T,leftAside:u,isSidebarEnabled:b,open:G,close:S,toggle:C}}function Pt(t,n){let a;se(()=>{a=t.value?document.activeElement:void 0}),Q(()=>{window.addEventListener("keyup",r)}),Ge(()=>{window.removeEventListener("keyup",r)});function r(s){s.key==="Escape"&&t.value&&(n(),a==null||a.focus())}}function Bt(t){const{page:n,hash:a}=w(),r=$(!1),s=P(()=>t.value.collapsed!=null),c=P(()=>!!t.value.link),o=$(!1),f=()=>{o.value=J(n.value.relativePath,t.value.link)};z([n,t,a],f),Q(f);const u=P(()=>o.value?!0:t.value.items?pe(n.value.relativePath,t.value.items):!1),T=P(()=>!!(t.value.items&&t.value.items.length));se(()=>{r.value=!!(s.value&&t.value.collapsed)}),Ie(()=>{(o.value||u.value)&&(r.value=!1)});function b(){s.value&&(r.value=!r.value)}return{collapsed:r,collapsible:s,isLink:c,isActiveLink:o,hasActiveLink:u,hasChildren:T,toggle:b}}function kt(){const{hasSidebar:t}=W(),n=ye("(min-width: 960px)"),a=ye("(min-width: 1280px)");return{isAsideEnabled:P(()=>!a.value&&!n.value?!1:t.value?a.value:n.value)}}const St=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,ge=[];function Ne(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function Pe(t){const n=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(a=>a.id&&a.hasChildNodes()).map(a=>{const r=Number(a.tagName[1]);return{element:a,title:Tt(a),link:"#"+a.id,level:r}});return Mt(n,t)}function Tt(t){let n="";for(const a of t.childNodes)if(a.nodeType===1){if(St.test(a.className))continue;n+=a.textContent}else a.nodeType===3&&(n+=a.textContent);return n.trim()}function Mt(t,n){if(n===!1)return[];const a=(typeof n=="object"&&!Array.isArray(n)?n.level:n)||2,[r,s]=typeof a=="number"?[a,a]:a==="deep"?[2,6]:a;return $t(t,r,s)}function _t(t,n){const{isAsideEnabled:a}=kt(),r=ut(c,100);let s=null;Q(()=>{requestAnimationFrame(c),window.addEventListener("scroll",r)}),Ke(()=>{o(location.hash)}),Ge(()=>{window.removeEventListener("scroll",r)});function c(){if(!a.value)return;const f=window.scrollY,u=window.innerHeight,T=document.body.offsetHeight,b=Math.abs(f+u-T)<1,g=ge.map(({element:S,link:C})=>({link:C,top:Rt(S)})).filter(({top:S})=>!Number.isNaN(S)).sort((S,C)=>S.top-C.top);if(!g.length){o(null);return}if(f<1){o(null);return}if(b){o(g[g.length-1].link);return}let G=null;for(const{link:S,top:C}of g){if(C>f+Xe()+4)break;G=S}o(G)}function o(f){s&&s.classList.remove("active"),f==null?s=null:s=t.value.querySelector(`a[href="${decodeURIComponent(f)}"]`);const u=s;u?(u.classList.add("active"),n.value.style.top=u.offsetTop+39+"px",n.value.style.opacity="1"):(n.value.style.top="33px",n.value.style.opacity="0")}}function Rt(t){let n=0;for(;t!==document.body;){if(t===null)return NaN;n+=t.offsetTop,t=t.offsetParent}return n}function $t(t,n,a){ge.length=0;const r=[],s=[];return t.forEach(c=>{const o={...c,children:[]};let f=s[s.length-1];for(;f&&f.level>=o.level;)s.pop(),f=s[s.length-1];if(o.element.classList.contains("ignore-header")||f&&"shouldIgnore"in f){s.push({level:o.level,shouldIgnore:!0});return}o.level>a||o.level<n||(ge.push({element:o.element,link:o.link}),f?f.children.push(o):r.push(o),s.push(o))}),r}const Lt=["href","title"],At=I({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function n({target:a}){const r=a.href.split("#")[1],s=document.getElementById(decodeURIComponent(r));s==null||s.focus({preventScroll:!0})}return(a,r)=>{const s=Z("VPDocOutlineItem",!0);return i(),l("ul",{class:A(["VPDocOutlineItem",t.root?"root":"nested"])},[(i(!0),l(L,null,x(t.headers,({children:c,link:o,title:f})=>(i(),l("li",null,[e("a",{class:"outline-link",href:o,onClick:n,title:f},m(f),9,Lt),c!=null&&c.length?(i(),_(s,{key:0,headers:c},null,8,["headers"])):h("",!0)]))),256))],2)}}}),De=B(At,[["__scopeId","data-v-b933a997"]]),wt={class:"content"},xt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Vt=I({__name:"VPDocAsideOutline",setup(t){const{frontmatter:n,theme:a}=w(),r=Re([]);le(()=>{r.value=Pe(n.value.outline??a.value.outline)});const s=$(),c=$();return _t(s,c),(o,f)=>(i(),l("nav",{"aria-labelledby":"doc-outline-aria-label",class:A(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:s},[e("div",wt,[e("div",{class:"outline-marker",ref_key:"marker",ref:c},null,512),e("div",xt,m(d(Ne)(d(a))),1),M(De,{headers:r.value,root:!0},null,8,["headers"])])],2))}}),Et=B(Vt,[["__scopeId","data-v-a5bbad30"]]),Nt={class:"VPDocAsideCarbonAds"},Dt=I({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const n=()=>null;return(a,r)=>(i(),l("div",Nt,[M(d(n),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Ot={class:"VPDocAside"},Ft=I({__name:"VPDocAside",setup(t){const{theme:n}=w();return(a,r)=>(i(),l("div",Ot,[p(a.$slots,"aside-top",{},void 0,!0),p(a.$slots,"aside-outline-before",{},void 0,!0),M(Et),p(a.$slots,"aside-outline-after",{},void 0,!0),r[0]||(r[0]=e("div",{class:"spacer"},null,-1)),p(a.$slots,"aside-ads-before",{},void 0,!0),d(n).carbonAds?(i(),_(Dt,{key:0,"carbon-ads":d(n).carbonAds},null,8,["carbon-ads"])):h("",!0),p(a.$slots,"aside-ads-after",{},void 0,!0),p(a.$slots,"aside-bottom",{},void 0,!0)]))}}),qt=B(Ft,[["__scopeId","data-v-3f215769"]]);function Ut(){const{theme:t,page:n}=w();return P(()=>{const{text:a="Edit this page",pattern:r=""}=t.value.editLink||{};let s;return typeof r=="function"?s=r(n.value):s=r.replace(/:path/g,n.value.filePath),{url:s,text:a}})}function Ht(){const{page:t,theme:n,frontmatter:a}=w();return P(()=>{var T,b,g,G,S,C,k,V;const r=Ee(n.value.sidebar,t.value.relativePath),s=Ct(r),c=jt(s,E=>E.link.replace(/[?#].*$/,"")),o=c.findIndex(E=>J(t.value.relativePath,E.link)),f=((T=n.value.docFooter)==null?void 0:T.prev)===!1&&!a.value.prev||a.value.prev===!1,u=((b=n.value.docFooter)==null?void 0:b.next)===!1&&!a.value.next||a.value.next===!1;return{prev:f?void 0:{text:(typeof a.value.prev=="string"?a.value.prev:typeof a.value.prev=="object"?a.value.prev.text:void 0)??((g=c[o-1])==null?void 0:g.docFooterText)??((G=c[o-1])==null?void 0:G.text),link:(typeof a.value.prev=="object"?a.value.prev.link:void 0)??((S=c[o-1])==null?void 0:S.link)},next:u?void 0:{text:(typeof a.value.next=="string"?a.value.next:typeof a.value.next=="object"?a.value.next.text:void 0)??((C=c[o+1])==null?void 0:C.docFooterText)??((k=c[o+1])==null?void 0:k.text),link:(typeof a.value.next=="object"?a.value.next.link:void 0)??((V=c[o+1])==null?void 0:V.link)}}})}function jt(t,n){const a=new Set;return t.filter(r=>{const s=n(r);return a.has(s)?!1:a.add(s)})}const Y=I({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const n=t,a=P(()=>n.tag??(n.href?"a":"span")),r=P(()=>n.href&&$e.test(n.href)||n.target==="_blank");return(s,c)=>(i(),_(j(a.value),{class:A(["VPLink",{link:t.href,"vp-external-link-icon":r.value,"no-icon":t.noIcon}]),href:t.href?d(Ce)(t.href):void 0,target:t.target??(r.value?"_blank":void 0),rel:t.rel??(r.value?"noreferrer":void 0)},{default:v(()=>[p(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Yt={class:"VPLastUpdated"},zt=["datetime"],Wt=I({__name:"VPDocFooterLastUpdated",setup(t){const{theme:n,page:a,lang:r}=w(),s=P(()=>new Date(a.value.lastUpdated)),c=P(()=>s.value.toISOString()),o=$("");return Q(()=>{se(()=>{var f,u,T;o.value=new Intl.DateTimeFormat((u=(f=n.value.lastUpdated)==null?void 0:f.formatOptions)!=null&&u.forceLocale?r.value:void 0,((T=n.value.lastUpdated)==null?void 0:T.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(f,u)=>{var T;return i(),l("p",Yt,[F(m(((T=d(n).lastUpdated)==null?void 0:T.text)||d(n).lastUpdatedText||"Last updated")+": ",1),e("time",{datetime:c.value},m(o.value),9,zt)])}}}),Kt=B(Wt,[["__scopeId","data-v-e98dd255"]]),Xt={key:0,class:"VPDocFooter"},Qt={key:0,class:"edit-info"},Jt={key:0,class:"edit-link"},Zt={key:1,class:"last-updated"},en={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},tn={class:"pager"},nn=["innerHTML"],an=["innerHTML"],rn={class:"pager"},sn=["innerHTML"],ln=["innerHTML"],on=I({__name:"VPDocFooter",setup(t){const{theme:n,page:a,frontmatter:r}=w(),s=Ut(),c=Ht(),o=P(()=>n.value.editLink&&r.value.editLink!==!1),f=P(()=>a.value.lastUpdated),u=P(()=>o.value||f.value||c.value.prev||c.value.next);return(T,b)=>{var g,G,S,C;return u.value?(i(),l("footer",Xt,[p(T.$slots,"doc-footer-before",{},void 0,!0),o.value||f.value?(i(),l("div",Qt,[o.value?(i(),l("div",Jt,[M(Y,{class:"edit-link-button",href:d(s).url,"no-icon":!0},{default:v(()=>[b[0]||(b[0]=e("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),F(" "+m(d(s).text),1)]),_:1},8,["href"])])):h("",!0),f.value?(i(),l("div",Zt,[M(Kt)])):h("",!0)])):h("",!0),(g=d(c).prev)!=null&&g.link||(G=d(c).next)!=null&&G.link?(i(),l("nav",en,[b[1]||(b[1]=e("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),e("div",tn,[(S=d(c).prev)!=null&&S.link?(i(),_(Y,{key:0,class:"pager-link prev",href:d(c).prev.link},{default:v(()=>{var k;return[e("span",{class:"desc",innerHTML:((k=d(n).docFooter)==null?void 0:k.prev)||"Previous page"},null,8,nn),e("span",{class:"title",innerHTML:d(c).prev.text},null,8,an)]}),_:1},8,["href"])):h("",!0)]),e("div",rn,[(C=d(c).next)!=null&&C.link?(i(),_(Y,{key:0,class:"pager-link next",href:d(c).next.link},{default:v(()=>{var k;return[e("span",{class:"desc",innerHTML:((k=d(n).docFooter)==null?void 0:k.next)||"Next page"},null,8,sn),e("span",{class:"title",innerHTML:d(c).next.text},null,8,ln)]}),_:1},8,["href"])):h("",!0)])])):h("",!0)])):h("",!0)}}}),cn=B(on,[["__scopeId","data-v-e257564d"]]),dn={class:"container"},un={class:"aside-container"},fn={class:"aside-content"},yn={class:"content"},mn={class:"content-container"},pn={class:"main"},gn=I({__name:"VPDoc",setup(t){const{theme:n}=w(),a=oe(),{hasSidebar:r,hasAside:s,leftAside:c}=W(),o=P(()=>a.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(f,u)=>{const T=Z("Content");return i(),l("div",{class:A(["VPDoc",{"has-sidebar":d(r),"has-aside":d(s)}])},[p(f.$slots,"doc-top",{},void 0,!0),e("div",dn,[d(s)?(i(),l("div",{key:0,class:A(["aside",{"left-aside":d(c)}])},[u[0]||(u[0]=e("div",{class:"aside-curtain"},null,-1)),e("div",un,[e("div",fn,[M(qt,null,{"aside-top":v(()=>[p(f.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[p(f.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[p(f.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[p(f.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[p(f.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[p(f.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):h("",!0),e("div",yn,[e("div",mn,[p(f.$slots,"doc-before",{},void 0,!0),e("main",pn,[M(T,{class:A(["vp-doc",[o.value,d(n).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),M(cn,null,{"doc-footer-before":v(()=>[p(f.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),p(f.$slots,"doc-after",{},void 0,!0)])])]),p(f.$slots,"doc-bottom",{},void 0,!0)],2)}}}),vn=B(gn,[["__scopeId","data-v-39a288b8"]]),hn=I({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const n=t,a=P(()=>n.href&&$e.test(n.href)),r=P(()=>n.tag||(n.href?"a":"button"));return(s,c)=>(i(),_(j(r.value),{class:A(["VPButton",[t.size,t.theme]]),href:t.href?d(Ce)(t.href):void 0,target:n.target??(a.value?"_blank":void 0),rel:n.rel??(a.value?"noreferrer":void 0)},{default:v(()=>[F(m(t.text),1)]),_:1},8,["class","href","target","rel"]))}}),bn=B(hn,[["__scopeId","data-v-fa7799d5"]]),Gn=["src","alt"],In=I({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(n,a)=>{const r=Z("VPImage",!0);return t.image?(i(),l(L,{key:0},[typeof t.image=="string"||"src"in t.image?(i(),l("img",X({key:0,class:"VPImage"},typeof t.image=="string"?n.$attrs:{...t.image,...n.$attrs},{src:d(be)(typeof t.image=="string"?t.image:t.image.src),alt:t.alt??(typeof t.image=="string"?"":t.image.alt||"")}),null,16,Gn)):(i(),l(L,{key:1},[M(r,X({class:"dark",image:t.image.dark,alt:t.image.alt},n.$attrs),null,16,["image","alt"]),M(r,X({class:"light",image:t.image.light,alt:t.image.alt},n.$attrs),null,16,["image","alt"])],64))],64)):h("",!0)}}}),ie=B(In,[["__scopeId","data-v-8426fc1a"]]),Cn={class:"container"},Pn={class:"main"},Bn={class:"heading"},kn=["innerHTML"],Sn=["innerHTML"],Tn=["innerHTML"],Mn={key:0,class:"actions"},_n={key:0,class:"image"},Rn={class:"image-container"},$n=I({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const n=ce("hero-image-slot-exists");return(a,r)=>(i(),l("div",{class:A(["VPHero",{"has-image":t.image||d(n)}])},[e("div",Cn,[e("div",Pn,[p(a.$slots,"home-hero-info-before",{},void 0,!0),p(a.$slots,"home-hero-info",{},()=>[e("h1",Bn,[t.name?(i(),l("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,kn)):h("",!0),t.text?(i(),l("span",{key:1,innerHTML:t.text,class:"text"},null,8,Sn)):h("",!0)]),t.tagline?(i(),l("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,Tn)):h("",!0)],!0),p(a.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(i(),l("div",Mn,[(i(!0),l(L,null,x(t.actions,s=>(i(),l("div",{key:s.link,class:"action"},[M(bn,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):h("",!0),p(a.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||d(n)?(i(),l("div",_n,[e("div",Rn,[r[0]||(r[0]=e("div",{class:"image-bg"},null,-1)),p(a.$slots,"home-hero-image",{},()=>[t.image?(i(),_(ie,{key:0,class:"image-src",image:t.image},null,8,["image"])):h("",!0)],!0)])])):h("",!0)])],2))}}),Ln=B($n,[["__scopeId","data-v-4f9c455b"]]),An=I({__name:"VPHomeHero",setup(t){const{frontmatter:n}=w();return(a,r)=>d(n).hero?(i(),_(Ln,{key:0,class:"VPHomeHero",name:d(n).hero.name,text:d(n).hero.text,tagline:d(n).hero.tagline,image:d(n).hero.image,actions:d(n).hero.actions},{"home-hero-info-before":v(()=>[p(a.$slots,"home-hero-info-before")]),"home-hero-info":v(()=>[p(a.$slots,"home-hero-info")]),"home-hero-info-after":v(()=>[p(a.$slots,"home-hero-info-after")]),"home-hero-actions-after":v(()=>[p(a.$slots,"home-hero-actions-after")]),"home-hero-image":v(()=>[p(a.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):h("",!0)}}),wn={class:"box"},xn={key:0,class:"icon"},Vn=["innerHTML"],En=["innerHTML"],Nn=["innerHTML"],Dn={key:4,class:"link-text"},On={class:"link-text-value"},Fn=I({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(n,a)=>(i(),_(Y,{class:"VPFeature",href:t.link,rel:t.rel,target:t.target,"no-icon":!0,tag:t.link?"a":"div"},{default:v(()=>[e("article",wn,[typeof t.icon=="object"&&t.icon.wrap?(i(),l("div",xn,[M(ie,{image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])])):typeof t.icon=="object"?(i(),_(ie,{key:1,image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])):t.icon?(i(),l("div",{key:2,class:"icon",innerHTML:t.icon},null,8,Vn)):h("",!0),e("h2",{class:"title",innerHTML:t.title},null,8,En),t.details?(i(),l("p",{key:3,class:"details",innerHTML:t.details},null,8,Nn)):h("",!0),t.linkText?(i(),l("div",Dn,[e("p",On,[F(m(t.linkText)+" ",1),a[0]||(a[0]=e("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):h("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),qn=B(Fn,[["__scopeId","data-v-a3976bdc"]]),Un={key:0,class:"VPFeatures"},Hn={class:"container"},jn={class:"items"},Yn=I({__name:"VPFeatures",props:{features:{}},setup(t){const n=t,a=P(()=>{const r=n.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,s)=>t.features?(i(),l("div",Un,[e("div",Hn,[e("div",jn,[(i(!0),l(L,null,x(t.features,c=>(i(),l("div",{key:c.title,class:A(["item",[a.value]])},[M(qn,{icon:c.icon,title:c.title,details:c.details,link:c.link,"link-text":c.linkText,rel:c.rel,target:c.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):h("",!0)}}),zn=B(Yn,[["__scopeId","data-v-a6181336"]]),Wn=I({__name:"VPHomeFeatures",setup(t){const{frontmatter:n}=w();return(a,r)=>d(n).features?(i(),_(zn,{key:0,class:"VPHomeFeatures",features:d(n).features},null,8,["features"])):h("",!0)}}),Kn=I({__name:"VPHomeContent",setup(t){const{width:n}=Qe({initialWidth:0,includeScrollbar:!1});return(a,r)=>(i(),l("div",{class:"vp-doc container",style:Le(d(n)?{"--vp-offset":`calc(50% - ${d(n)/2}px)`}:{})},[p(a.$slots,"default",{},void 0,!0)],4))}}),Xn=B(Kn,[["__scopeId","data-v-8e2d4988"]]),Qn=I({__name:"VPHome",setup(t){const{frontmatter:n,theme:a}=w();return(r,s)=>{const c=Z("Content");return i(),l("div",{class:A(["VPHome",{"external-link-icon-enabled":d(a).externalLinkIcon}])},[p(r.$slots,"home-hero-before",{},void 0,!0),M(An,null,{"home-hero-info-before":v(()=>[p(r.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[p(r.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[p(r.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[p(r.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[p(r.$slots,"home-hero-image",{},void 0,!0)]),_:3}),p(r.$slots,"home-hero-after",{},void 0,!0),p(r.$slots,"home-features-before",{},void 0,!0),M(Wn),p(r.$slots,"home-features-after",{},void 0,!0),d(n).markdownStyles!==!1?(i(),_(Xn,{key:0},{default:v(()=>[M(c)]),_:1})):(i(),_(c,{key:1}))],2)}}}),Jn=B(Qn,[["__scopeId","data-v-8b561e3d"]]),Zn={},ea={class:"VPPage"};function ta(t,n){const a=Z("Content");return i(),l("div",ea,[p(t.$slots,"page-top"),M(a),p(t.$slots,"page-bottom")])}const na=B(Zn,[["render",ta]]),aa=I({__name:"VPContent",setup(t){const{page:n,frontmatter:a}=w(),{hasSidebar:r}=W();return(s,c)=>(i(),l("div",{class:A(["VPContent",{"has-sidebar":d(r),"is-home":d(a).layout==="home"}]),id:"VPContent"},[d(n).isNotFound?p(s.$slots,"not-found",{},()=>[M(Gt)],!0,0):d(a).layout==="page"?(i(),_(na,{key:1},{"page-top":v(()=>[p(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[p(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):d(a).layout==="home"?(i(),_(Jn,{key:2},{"home-hero-before":v(()=>[p(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[p(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[p(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[p(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[p(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[p(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[p(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[p(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[p(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):d(a).layout&&d(a).layout!=="doc"?(i(),_(j(d(a).layout),{key:3})):(i(),_(vn,{key:4},{"doc-top":v(()=>[p(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[p(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":v(()=>[p(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[p(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[p(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":v(()=>[p(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":v(()=>[p(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[p(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[p(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[p(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":v(()=>[p(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),ra=B(aa,[["__scopeId","data-v-1428d186"]]),ia={class:"container"},sa=["innerHTML"],la=["innerHTML"],oa=I({__name:"VPFooter",setup(t){const{theme:n,frontmatter:a}=w(),{hasSidebar:r}=W();return(s,c)=>d(n).footer&&d(a).footer!==!1?(i(),l("footer",{key:0,class:A(["VPFooter",{"has-sidebar":d(r)}])},[e("div",ia,[d(n).footer.message?(i(),l("p",{key:0,class:"message",innerHTML:d(n).footer.message},null,8,sa)):h("",!0),d(n).footer.copyright?(i(),l("p",{key:1,class:"copyright",innerHTML:d(n).footer.copyright},null,8,la)):h("",!0)])],2)):h("",!0)}}),ca=B(oa,[["__scopeId","data-v-e315a0ad"]]);function da(){const{theme:t,frontmatter:n}=w(),a=Re([]),r=P(()=>a.value.length>0);return le(()=>{a.value=Pe(n.value.outline??t.value.outline)}),{headers:a,hasLocalNav:r}}const ua={class:"menu-text"},fa={class:"header"},ya={class:"outline"},ma=I({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const n=t,{theme:a}=w(),r=$(!1),s=$(0),c=$(),o=$();function f(g){var G;(G=c.value)!=null&&G.contains(g.target)||(r.value=!1)}z(r,g=>{if(g){document.addEventListener("click",f);return}document.removeEventListener("click",f)}),Je("Escape",()=>{r.value=!1}),le(()=>{r.value=!1});function u(){r.value=!r.value,s.value=window.innerHeight+Math.min(window.scrollY-n.navHeight,0)}function T(g){g.target.classList.contains("outline-link")&&(o.value&&(o.value.style.transition="none"),Ae(()=>{r.value=!1}))}function b(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(g,G)=>(i(),l("div",{class:"VPLocalNavOutlineDropdown",style:Le({"--vp-vh":s.value+"px"}),ref_key:"main",ref:c},[t.headers.length>0?(i(),l("button",{key:0,onClick:u,class:A({open:r.value})},[e("span",ua,m(d(Ne)(d(a))),1),G[0]||(G[0]=e("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(i(),l("button",{key:1,onClick:b},m(d(a).returnToTopLabel||"Return to top"),1)),M(he,{name:"flyout"},{default:v(()=>[r.value?(i(),l("div",{key:0,ref_key:"items",ref:o,class:"items",onClick:T},[e("div",fa,[e("a",{class:"top-link",href:"#",onClick:b},m(d(a).returnToTopLabel||"Return to top"),1)]),e("div",ya,[M(De,{headers:t.headers},null,8,["headers"])])],512)):h("",!0)]),_:1})],4))}}),pa=B(ma,[["__scopeId","data-v-8a42e2b4"]]),ga={class:"container"},va=["aria-expanded"],ha={class:"menu-text"},ba=I({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:n,frontmatter:a}=w(),{hasSidebar:r}=W(),{headers:s}=da(),{y:c}=we(),o=$(0);Q(()=>{o.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),le(()=>{s.value=Pe(a.value.outline??n.value.outline)});const f=P(()=>s.value.length===0),u=P(()=>f.value&&!r.value),T=P(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:f.value,fixed:u.value}));return(b,g)=>d(a).layout!=="home"&&(!u.value||d(c)>=o.value)?(i(),l("div",{key:0,class:A(T.value)},[e("div",ga,[d(r)?(i(),l("button",{key:0,class:"menu","aria-expanded":t.open,"aria-controls":"VPSidebarNav",onClick:g[0]||(g[0]=G=>b.$emit("open-menu"))},[g[1]||(g[1]=e("span",{class:"vpi-align-left menu-icon"},null,-1)),e("span",ha,m(d(n).sidebarMenuLabel||"Menu"),1)],8,va)):h("",!0),M(pa,{headers:d(s),navHeight:o.value},null,8,["headers","navHeight"])])],2)):h("",!0)}}),Ga=B(ba,[["__scopeId","data-v-a6f0e41e"]]);function Ia(){const t=$(!1);function n(){t.value=!0,window.addEventListener("resize",s)}function a(){t.value=!1,window.removeEventListener("resize",s)}function r(){t.value?a():n()}function s(){window.outerWidth>=768&&a()}const c=oe();return z(()=>c.path,a),{isScreenOpen:t,openScreen:n,closeScreen:a,toggleScreen:r}}const Ca={},Pa={class:"VPSwitch",type:"button",role:"switch"},Ba={class:"check"},ka={key:0,class:"icon"};function Sa(t,n){return i(),l("button",Pa,[e("span",Ba,[t.$slots.default?(i(),l("span",ka,[p(t.$slots,"default",{},void 0,!0)])):h("",!0)])])}const Ta=B(Ca,[["render",Sa],["__scopeId","data-v-1d5665e3"]]),Ma=I({__name:"VPSwitchAppearance",setup(t){const{isDark:n,theme:a}=w(),r=ce("toggle-appearance",()=>{n.value=!n.value}),s=$("");return Ie(()=>{s.value=n.value?a.value.lightModeSwitchTitle||"Switch to light theme":a.value.darkModeSwitchTitle||"Switch to dark theme"}),(c,o)=>(i(),_(Ta,{title:s.value,class:"VPSwitchAppearance","aria-checked":d(n),onClick:d(r)},{default:v(()=>[...o[0]||(o[0]=[e("span",{class:"vpi-sun sun"},null,-1),e("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),Be=B(Ma,[["__scopeId","data-v-5337faa4"]]),_a={key:0,class:"VPNavBarAppearance"},Ra=I({__name:"VPNavBarAppearance",setup(t){const{site:n}=w();return(a,r)=>d(n).appearance&&d(n).appearance!=="force-dark"&&d(n).appearance!=="force-auto"?(i(),l("div",_a,[M(Be)])):h("",!0)}}),$a=B(Ra,[["__scopeId","data-v-6c893767"]]),ke=$();let Oe=!1,fe=0;function La(t){const n=$(!1);if(de){!Oe&&Aa(),fe++;const a=z(ke,r=>{var s,c,o;r===t.el.value||(s=t.el.value)!=null&&s.contains(r)?(n.value=!0,(c=t.onFocus)==null||c.call(t)):(n.value=!1,(o=t.onBlur)==null||o.call(t))});Ge(()=>{a(),fe--,fe||wa()})}return Ze(n)}function Aa(){document.addEventListener("focusin",Fe),Oe=!0,ke.value=document.activeElement}function wa(){document.removeEventListener("focusin",Fe)}function Fe(){ke.value=document.activeElement}const xa={class:"VPMenuLink"},Va=["innerHTML"],Ea=I({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:n}=w();return(a,r)=>(i(),l("div",xa,[M(Y,{class:A({active:d(J)(d(n).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon},{default:v(()=>[e("span",{innerHTML:t.item.text},null,8,Va)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),ue=B(Ea,[["__scopeId","data-v-35975db6"]]),Na={class:"VPMenuGroup"},Da={key:0,class:"title"},Oa=I({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(n,a)=>(i(),l("div",Na,[t.text?(i(),l("p",Da,m(t.text),1)):h("",!0),(i(!0),l(L,null,x(t.items,r=>(i(),l(L,null,["link"in r?(i(),_(ue,{key:0,item:r},null,8,["item"])):h("",!0)],64))),256))]))}}),Fa=B(Oa,[["__scopeId","data-v-69e747b5"]]),qa={class:"VPMenu"},Ua={key:0,class:"items"},Ha=I({__name:"VPMenu",props:{items:{}},setup(t){return(n,a)=>(i(),l("div",qa,[t.items?(i(),l("div",Ua,[(i(!0),l(L,null,x(t.items,r=>(i(),l(L,{key:JSON.stringify(r)},["link"in r?(i(),_(ue,{key:0,item:r},null,8,["item"])):"component"in r?(i(),_(j(r.component),X({key:1,ref_for:!0},r.props),null,16)):(i(),_(Fa,{key:2,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):h("",!0),p(n.$slots,"default",{},void 0,!0)]))}}),ja=B(Ha,[["__scopeId","data-v-b98bc113"]]),Ya=["aria-expanded","aria-label"],za={key:0,class:"text"},Wa=["innerHTML"],Ka={key:1,class:"vpi-more-horizontal icon"},Xa={class:"menu"},Qa=I({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const n=$(!1),a=$();La({el:a,onBlur:r});function r(){n.value=!1}return(s,c)=>(i(),l("div",{class:"VPFlyout",ref_key:"el",ref:a,onMouseenter:c[1]||(c[1]=o=>n.value=!0),onMouseleave:c[2]||(c[2]=o=>n.value=!1)},[e("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":n.value,"aria-label":t.label,onClick:c[0]||(c[0]=o=>n.value=!n.value)},[t.button||t.icon?(i(),l("span",za,[t.icon?(i(),l("span",{key:0,class:A([t.icon,"option-icon"])},null,2)):h("",!0),t.button?(i(),l("span",{key:1,innerHTML:t.button},null,8,Wa)):h("",!0),c[3]||(c[3]=e("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(i(),l("span",Ka))],8,Ya),e("div",Xa,[M(ja,{items:t.items},{default:v(()=>[p(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Se=B(Qa,[["__scopeId","data-v-cf11d7a2"]]),Ja=["href","aria-label","innerHTML"],Za=I({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const n=t,a=$();Q(async()=>{var c;await Ae();const s=(c=a.value)==null?void 0:c.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${n.icon}.svg')`)});const r=P(()=>typeof n.icon=="object"?n.icon.svg:`<span class="vpi-social-${n.icon}"></span>`);return(s,c)=>(i(),l("a",{ref_key:"el",ref:a,class:"VPSocialLink no-icon",href:t.link,"aria-label":t.ariaLabel??(typeof t.icon=="string"?t.icon:""),target:"_blank",rel:"noopener",innerHTML:r.value},null,8,Ja))}}),er=B(Za,[["__scopeId","data-v-bd121fe5"]]),tr={class:"VPSocialLinks"},nr=I({__name:"VPSocialLinks",props:{links:{}},setup(t){return(n,a)=>(i(),l("div",tr,[(i(!0),l(L,null,x(t.links,({link:r,icon:s,ariaLabel:c})=>(i(),_(er,{key:r,icon:s,link:r,ariaLabel:c},null,8,["icon","link","ariaLabel"]))),128))]))}}),Te=B(nr,[["__scopeId","data-v-7bc22406"]]),ar={key:0,class:"group translations"},rr={class:"trans-title"},ir={key:1,class:"group"},sr={class:"item appearance"},lr={class:"label"},or={class:"appearance-action"},cr={key:2,class:"group"},dr={class:"item social-links"},ur=I({__name:"VPNavBarExtra",setup(t){const{site:n,theme:a}=w(),{localeLinks:r,currentLang:s}=ne({correspondingLink:!0}),c=P(()=>r.value.length&&s.value.label||n.value.appearance||a.value.socialLinks);return(o,f)=>c.value?(i(),_(Se,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:v(()=>[d(r).length&&d(s).label?(i(),l("div",ar,[e("p",rr,m(d(s).label),1),(i(!0),l(L,null,x(d(r),u=>(i(),_(ue,{key:u.link,item:u},null,8,["item"]))),128))])):h("",!0),d(n).appearance&&d(n).appearance!=="force-dark"&&d(n).appearance!=="force-auto"?(i(),l("div",ir,[e("div",sr,[e("p",lr,m(d(a).darkModeSwitchLabel||"Appearance"),1),e("div",or,[M(Be)])])])):h("",!0),d(a).socialLinks?(i(),l("div",cr,[e("div",dr,[M(Te,{class:"social-links-list",links:d(a).socialLinks},null,8,["links"])])])):h("",!0)]),_:1})):h("",!0)}}),fr=B(ur,[["__scopeId","data-v-bb2aa2f0"]]),yr=["aria-expanded"],mr=I({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(n,a)=>(i(),l("button",{type:"button",class:A(["VPNavBarHamburger",{active:t.active}]),"aria-label":"mobile navigation","aria-expanded":t.active,"aria-controls":"VPNavScreen",onClick:a[0]||(a[0]=r=>n.$emit("click"))},[...a[1]||(a[1]=[e("span",{class:"container"},[e("span",{class:"top"}),e("span",{class:"middle"}),e("span",{class:"bottom"})],-1)])],10,yr))}}),pr=B(mr,[["__scopeId","data-v-e5dd9c1c"]]),gr=["innerHTML"],vr=I({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:n}=w();return(a,r)=>(i(),_(Y,{class:A({VPNavBarMenuLink:!0,active:d(J)(d(n).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:v(()=>[e("span",{innerHTML:t.item.text},null,8,gr)]),_:1},8,["class","href","target","rel","no-icon"]))}}),hr=B(vr,[["__scopeId","data-v-e56f3d57"]]),br=I({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const n=t,{page:a}=w(),r=c=>"component"in c?!1:"link"in c?J(a.value.relativePath,c.link,!!n.item.activeMatch):c.items.some(r),s=P(()=>r(n.item));return(c,o)=>(i(),_(Se,{class:A({VPNavBarMenuGroup:!0,active:d(J)(d(a).relativePath,t.item.activeMatch,!!t.item.activeMatch)||s.value}),button:t.item.text,items:t.item.items},null,8,["class","button","items"]))}}),Gr={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Ir=I({__name:"VPNavBarMenu",setup(t){const{theme:n}=w();return(a,r)=>d(n).nav?(i(),l("nav",Gr,[r[0]||(r[0]=e("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(i(!0),l(L,null,x(d(n).nav,s=>(i(),l(L,{key:JSON.stringify(s)},["link"in s?(i(),_(hr,{key:0,item:s},null,8,["item"])):"component"in s?(i(),_(j(s.component),X({key:1,ref_for:!0},s.props),null,16)):(i(),_(br,{key:2,item:s},null,8,["item"]))],64))),128))])):h("",!0)}}),Cr=B(Ir,[["__scopeId","data-v-dc692963"]]);function Pr(t){const{localeIndex:n,theme:a}=w();function r(s){var C,k,V;const c=s.split("."),o=(C=a.value.search)==null?void 0:C.options,f=o&&typeof o=="object",u=f&&((V=(k=o.locales)==null?void 0:k[n.value])==null?void 0:V.translations)||null,T=f&&o.translations||null;let b=u,g=T,G=t;const S=c.pop();for(const E of c){let D=null;const q=G==null?void 0:G[E];q&&(D=G=q);const K=g==null?void 0:g[E];K&&(D=g=K);const U=b==null?void 0:b[E];U&&(D=b=U),q||(G=D),K||(g=D),U||(b=D)}return(b==null?void 0:b[S])??(g==null?void 0:g[S])??(G==null?void 0:G[S])??""}return r}const Br=["aria-label"],kr={class:"DocSearch-Button-Container"},Sr={class:"DocSearch-Button-Placeholder"},Me=I({__name:"VPNavBarSearchButton",setup(t){const a=Pr({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,s)=>(i(),l("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":d(a)("button.buttonAriaLabel")},[e("span",kr,[s[0]||(s[0]=e("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),e("span",Sr,m(d(a)("button.buttonText")),1)]),s[1]||(s[1]=e("span",{class:"DocSearch-Button-Keys"},[e("kbd",{class:"DocSearch-Button-Key"}),e("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,Br))}}),Tr={class:"VPNavBarSearch"},Mr={id:"local-search"},_r={key:1,id:"docsearch"},Rr=I({__name:"VPNavBarSearch",setup(t){const n=()=>null,a=()=>null,{theme:r}=w(),s=$(!1),c=$(!1);Q(()=>{});function o(){s.value||(s.value=!0,setTimeout(f,16))}function f(){const b=new Event("keydown");b.key="k",b.metaKey=!0,window.dispatchEvent(b),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||f()},16)}const u=$(!1),T="";return(b,g)=>{var G;return i(),l("div",Tr,[d(T)==="local"?(i(),l(L,{key:0},[u.value?(i(),_(d(n),{key:0,onClose:g[0]||(g[0]=S=>u.value=!1)})):h("",!0),e("div",Mr,[M(Me,{onClick:g[1]||(g[1]=S=>u.value=!0)})])],64)):d(T)==="algolia"?(i(),l(L,{key:1},[s.value?(i(),_(d(a),{key:0,algolia:((G=d(r).search)==null?void 0:G.options)??d(r).algolia,onVnodeBeforeMount:g[2]||(g[2]=S=>c.value=!0)},null,8,["algolia"])):h("",!0),c.value?h("",!0):(i(),l("div",_r,[M(Me,{onClick:o})]))],64)):h("",!0)])}}}),$r=I({__name:"VPNavBarSocialLinks",setup(t){const{theme:n}=w();return(a,r)=>d(n).socialLinks?(i(),_(Te,{key:0,class:"VPNavBarSocialLinks",links:d(n).socialLinks},null,8,["links"])):h("",!0)}}),Lr=B($r,[["__scopeId","data-v-0394ad82"]]),Ar=["href","rel","target"],wr=["innerHTML"],xr={key:2},Vr=I({__name:"VPNavBarTitle",setup(t){const{site:n,theme:a}=w(),{hasSidebar:r}=W(),{currentLang:s}=ne(),c=P(()=>{var u;return typeof a.value.logoLink=="string"?a.value.logoLink:(u=a.value.logoLink)==null?void 0:u.link}),o=P(()=>{var u;return typeof a.value.logoLink=="string"||(u=a.value.logoLink)==null?void 0:u.rel}),f=P(()=>{var u;return typeof a.value.logoLink=="string"||(u=a.value.logoLink)==null?void 0:u.target});return(u,T)=>(i(),l("div",{class:A(["VPNavBarTitle",{"has-sidebar":d(r)}])},[e("a",{class:"title",href:c.value??d(Ce)(d(s).link),rel:o.value,target:f.value},[p(u.$slots,"nav-bar-title-before",{},void 0,!0),d(a).logo?(i(),_(ie,{key:0,class:"logo",image:d(a).logo},null,8,["image"])):h("",!0),d(a).siteTitle?(i(),l("span",{key:1,innerHTML:d(a).siteTitle},null,8,wr)):d(a).siteTitle===void 0?(i(),l("span",xr,m(d(n).title),1)):h("",!0),p(u.$slots,"nav-bar-title-after",{},void 0,!0)],8,Ar)],2))}}),Er=B(Vr,[["__scopeId","data-v-1168a8e4"]]),Nr={class:"items"},Dr={class:"title"},Or=I({__name:"VPNavBarTranslations",setup(t){const{theme:n}=w(),{localeLinks:a,currentLang:r}=ne({correspondingLink:!0});return(s,c)=>d(a).length&&d(r).label?(i(),_(Se,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:d(n).langMenuLabel||"Change language"},{default:v(()=>[e("div",Nr,[e("p",Dr,m(d(r).label),1),(i(!0),l(L,null,x(d(a),o=>(i(),_(ue,{key:o.link,item:o},null,8,["item"]))),128))])]),_:1},8,["label"])):h("",!0)}}),Fr=B(Or,[["__scopeId","data-v-88af2de4"]]),qr={class:"wrapper"},Ur={class:"container"},Hr={class:"title"},jr={class:"content"},Yr={class:"content-body"},zr=I({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const n=t,{y:a}=we(),{hasSidebar:r}=W(),{frontmatter:s}=w(),c=$({});return Ie(()=>{c.value={"has-sidebar":r.value,home:s.value.layout==="home",top:a.value===0,"screen-open":n.isScreenOpen}}),(o,f)=>(i(),l("div",{class:A(["VPNavBar",c.value])},[e("div",qr,[e("div",Ur,[e("div",Hr,[M(Er,null,{"nav-bar-title-before":v(()=>[p(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[p(o.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),e("div",jr,[e("div",Yr,[p(o.$slots,"nav-bar-content-before",{},void 0,!0),M(Rr,{class:"search"}),M(Cr,{class:"menu"}),M(Fr,{class:"translations"}),M($a,{class:"appearance"}),M(Lr,{class:"social-links"}),M(fr,{class:"extra"}),p(o.$slots,"nav-bar-content-after",{},void 0,!0),M(pr,{class:"hamburger",active:t.isScreenOpen,onClick:f[0]||(f[0]=u=>o.$emit("toggle-screen"))},null,8,["active"])])])])]),f[1]||(f[1]=e("div",{class:"divider"},[e("div",{class:"divider-line"})],-1))],2))}}),Wr=B(zr,[["__scopeId","data-v-6aa21345"]]),Kr={key:0,class:"VPNavScreenAppearance"},Xr={class:"text"},Qr=I({__name:"VPNavScreenAppearance",setup(t){const{site:n,theme:a}=w();return(r,s)=>d(n).appearance&&d(n).appearance!=="force-dark"&&d(n).appearance!=="force-auto"?(i(),l("div",Kr,[e("p",Xr,m(d(a).darkModeSwitchLabel||"Appearance"),1),M(Be)])):h("",!0)}}),Jr=B(Qr,[["__scopeId","data-v-b44890b2"]]),Zr=["innerHTML"],ei=I({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const n=ce("close-screen");return(a,r)=>(i(),_(Y,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:d(n)},{default:v(()=>[e("span",{innerHTML:t.item.text},null,8,Zr)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),ti=B(ei,[["__scopeId","data-v-df37e6dd"]]),ni=["innerHTML"],ai=I({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const n=ce("close-screen");return(a,r)=>(i(),_(Y,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:d(n)},{default:v(()=>[e("span",{innerHTML:t.item.text},null,8,ni)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),qe=B(ai,[["__scopeId","data-v-3e9c20e4"]]),ri={class:"VPNavScreenMenuGroupSection"},ii={key:0,class:"title"},si=I({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(n,a)=>(i(),l("div",ri,[t.text?(i(),l("p",ii,m(t.text),1)):h("",!0),(i(!0),l(L,null,x(t.items,r=>(i(),_(qe,{key:r.text,item:r},null,8,["item"]))),128))]))}}),li=B(si,[["__scopeId","data-v-8133b170"]]),oi=["aria-controls","aria-expanded"],ci=["innerHTML"],di=["id"],ui={key:0,class:"item"},fi={key:1,class:"item"},yi={key:2,class:"group"},mi=I({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const n=t,a=$(!1),r=P(()=>`NavScreenGroup-${n.text.replace(" ","-").toLowerCase()}`);function s(){a.value=!a.value}return(c,o)=>(i(),l("div",{class:A(["VPNavScreenMenuGroup",{open:a.value}])},[e("button",{class:"button","aria-controls":r.value,"aria-expanded":a.value,onClick:s},[e("span",{class:"button-text",innerHTML:t.text},null,8,ci),o[0]||(o[0]=e("span",{class:"vpi-plus button-icon"},null,-1))],8,oi),e("div",{id:r.value,class:"items"},[(i(!0),l(L,null,x(t.items,f=>(i(),l(L,{key:JSON.stringify(f)},["link"in f?(i(),l("div",ui,[M(qe,{item:f},null,8,["item"])])):"component"in f?(i(),l("div",fi,[(i(),_(j(f.component),X({ref_for:!0},f.props,{"screen-menu":""}),null,16))])):(i(),l("div",yi,[M(li,{text:f.text,items:f.items},null,8,["text","items"])]))],64))),128))],8,di)],2))}}),pi=B(mi,[["__scopeId","data-v-b9ab8c58"]]),gi={key:0,class:"VPNavScreenMenu"},vi=I({__name:"VPNavScreenMenu",setup(t){const{theme:n}=w();return(a,r)=>d(n).nav?(i(),l("nav",gi,[(i(!0),l(L,null,x(d(n).nav,s=>(i(),l(L,{key:JSON.stringify(s)},["link"in s?(i(),_(ti,{key:0,item:s},null,8,["item"])):"component"in s?(i(),_(j(s.component),X({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(i(),_(pi,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):h("",!0)}}),hi=I({__name:"VPNavScreenSocialLinks",setup(t){const{theme:n}=w();return(a,r)=>d(n).socialLinks?(i(),_(Te,{key:0,class:"VPNavScreenSocialLinks",links:d(n).socialLinks},null,8,["links"])):h("",!0)}}),bi={class:"list"},Gi=I({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:n,currentLang:a}=ne({correspondingLink:!0}),r=$(!1);function s(){r.value=!r.value}return(c,o)=>d(n).length&&d(a).label?(i(),l("div",{key:0,class:A(["VPNavScreenTranslations",{open:r.value}])},[e("button",{class:"title",onClick:s},[o[0]||(o[0]=e("span",{class:"vpi-languages icon lang"},null,-1)),F(" "+m(d(a).label)+" ",1),o[1]||(o[1]=e("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),e("ul",bi,[(i(!0),l(L,null,x(d(n),f=>(i(),l("li",{key:f.link,class:"item"},[M(Y,{class:"link",href:f.link},{default:v(()=>[F(m(f.text),1)]),_:2},1032,["href"])]))),128))])],2)):h("",!0)}}),Ii=B(Gi,[["__scopeId","data-v-858fe1a4"]]),Ci={class:"container"},Pi=I({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const n=$(null),a=xe(de?document.body:null);return(r,s)=>(i(),_(he,{name:"fade",onEnter:s[0]||(s[0]=c=>a.value=!0),onAfterLeave:s[1]||(s[1]=c=>a.value=!1)},{default:v(()=>[t.open?(i(),l("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:n,id:"VPNavScreen"},[e("div",Ci,[p(r.$slots,"nav-screen-content-before",{},void 0,!0),M(vi,{class:"menu"}),M(Ii,{class:"translations"}),M(Jr,{class:"appearance"}),M(hi,{class:"social-links"}),p(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):h("",!0)]),_:3}))}}),Bi=B(Pi,[["__scopeId","data-v-f2779853"]]),ki={key:0,class:"VPNav"},Si=I({__name:"VPNav",setup(t){const{isScreenOpen:n,closeScreen:a,toggleScreen:r}=Ia(),{frontmatter:s}=w(),c=P(()=>s.value.navbar!==!1);return Ve("close-screen",a),se(()=>{de&&document.documentElement.classList.toggle("hide-nav",!c.value)}),(o,f)=>c.value?(i(),l("header",ki,[M(Wr,{"is-screen-open":d(n),onToggleScreen:d(r)},{"nav-bar-title-before":v(()=>[p(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[p(o.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[p(o.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[p(o.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),M(Bi,{open:d(n)},{"nav-screen-content-before":v(()=>[p(o.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[p(o.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):h("",!0)}}),Ti=B(Si,[["__scopeId","data-v-ae24b3ad"]]),Mi=["role","tabindex"],_i={key:1,class:"items"},Ri=I({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const n=t,{collapsed:a,collapsible:r,isLink:s,isActiveLink:c,hasActiveLink:o,hasChildren:f,toggle:u}=Bt(P(()=>n.item)),T=P(()=>f.value?"section":"div"),b=P(()=>s.value?"a":"div"),g=P(()=>f.value?n.depth+2===7?"p":`h${n.depth+2}`:"p"),G=P(()=>s.value?void 0:"button"),S=P(()=>[[`level-${n.depth}`],{collapsible:r.value},{collapsed:a.value},{"is-link":s.value},{"is-active":c.value},{"has-active":o.value}]);function C(V){"key"in V&&V.key!=="Enter"||!n.item.link&&u()}function k(){n.item.link&&u()}return(V,E)=>{const D=Z("VPSidebarItem",!0);return i(),_(j(T.value),{class:A(["VPSidebarItem",S.value])},{default:v(()=>[t.item.text?(i(),l("div",X({key:0,class:"item",role:G.value},et(t.item.items?{click:C,keydown:C}:{},!0),{tabindex:t.item.items&&0}),[E[1]||(E[1]=e("div",{class:"indicator"},null,-1)),t.item.link?(i(),_(Y,{key:0,tag:b.value,class:"link",href:t.item.link,rel:t.item.rel,target:t.item.target},{default:v(()=>[(i(),_(j(g.value),{class:"text",innerHTML:t.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(i(),_(j(g.value),{key:1,class:"text",innerHTML:t.item.text},null,8,["innerHTML"])),t.item.collapsed!=null&&t.item.items&&t.item.items.length?(i(),l("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:k,onKeydown:tt(k,["enter"]),tabindex:"0"},[...E[0]||(E[0]=[e("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):h("",!0)],16,Mi)):h("",!0),t.item.items&&t.item.items.length?(i(),l("div",_i,[t.depth<5?(i(!0),l(L,{key:0},x(t.item.items,q=>(i(),_(D,{key:q.text,item:q,depth:t.depth+1},null,8,["item","depth"]))),128)):h("",!0)])):h("",!0)]),_:1},8,["class"])}}}),$i=B(Ri,[["__scopeId","data-v-b3fd67f8"]]),Li=I({__name:"VPSidebarGroup",props:{items:{}},setup(t){const n=$(!0);let a=null;return Q(()=>{a=setTimeout(()=>{a=null,n.value=!1},300)}),nt(()=>{a!=null&&(clearTimeout(a),a=null)}),(r,s)=>(i(!0),l(L,null,x(t.items,c=>(i(),l("div",{key:c.text,class:A(["group",{"no-transition":n.value}])},[M($i,{item:c,depth:0},null,8,["item"])],2))),128))}}),Ai=B(Li,[["__scopeId","data-v-c40bc020"]]),wi={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},xi=I({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:n,hasSidebar:a}=W(),r=t,s=$(null),c=xe(de?document.body:null);z([r,s],()=>{var f;r.open?(c.value=!0,(f=s.value)==null||f.focus()):c.value=!1},{immediate:!0,flush:"post"});const o=$(0);return z(n,()=>{o.value+=1},{deep:!0}),(f,u)=>d(a)?(i(),l("aside",{key:0,class:A(["VPSidebar",{open:t.open}]),ref_key:"navEl",ref:s,onClick:u[0]||(u[0]=at(()=>{},["stop"]))},[u[2]||(u[2]=e("div",{class:"curtain"},null,-1)),e("nav",wi,[u[1]||(u[1]=e("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),p(f.$slots,"sidebar-nav-before",{},void 0,!0),(i(),_(Ai,{items:d(n),key:o.value},null,8,["items"])),p(f.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):h("",!0)}}),Vi=B(xi,[["__scopeId","data-v-319d5ca6"]]),Ei=I({__name:"VPSkipLink",setup(t){const{theme:n}=w(),a=oe(),r=$();z(()=>a.path,()=>r.value.focus());function s({target:c}){const o=document.getElementById(decodeURIComponent(c.hash).slice(1));if(o){const f=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",f)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",f),o.focus(),window.scrollTo(0,0)}}return(c,o)=>(i(),l(L,null,[e("span",{ref_key:"backToTop",ref:r,tabindex:"-1"},null,512),e("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},m(d(n).skipToContentLabel||"Skip to content"),1)],64))}}),Ni=B(Ei,[["__scopeId","data-v-0b0ada53"]]),Di=I({__name:"Layout",setup(t){const{isOpen:n,open:a,close:r}=W(),s=oe();z(()=>s.path,r),Pt(n,r);const{frontmatter:c}=w(),o=rt(),f=P(()=>!!o["home-hero-image"]);return Ve("hero-image-slot-exists",f),(u,T)=>{const b=Z("Content");return d(c).layout!==!1?(i(),l("div",{key:0,class:A(["Layout",d(c).pageClass])},[p(u.$slots,"layout-top",{},void 0,!0),M(Ni),M(dt,{class:"backdrop",show:d(n),onClick:d(r)},null,8,["show","onClick"]),M(Ti,null,{"nav-bar-title-before":v(()=>[p(u.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[p(u.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[p(u.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[p(u.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":v(()=>[p(u.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[p(u.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),M(Ga,{open:d(n),onOpenMenu:d(a)},null,8,["open","onOpenMenu"]),M(Vi,{open:d(n)},{"sidebar-nav-before":v(()=>[p(u.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":v(()=>[p(u.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),M(ra,null,{"page-top":v(()=>[p(u.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[p(u.$slots,"page-bottom",{},void 0,!0)]),"not-found":v(()=>[p(u.$slots,"not-found",{},void 0,!0)]),"home-hero-before":v(()=>[p(u.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[p(u.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[p(u.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[p(u.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[p(u.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[p(u.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[p(u.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[p(u.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[p(u.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":v(()=>[p(u.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[p(u.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[p(u.$slots,"doc-after",{},void 0,!0)]),"doc-top":v(()=>[p(u.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[p(u.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":v(()=>[p(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[p(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[p(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[p(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[p(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[p(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),M(ca),p(u.$slots,"layout-bottom",{},void 0,!0)],2)):(i(),_(b,{key:1}))}}}),Oi=B(Di,[["__scopeId","data-v-5d98c3a5"]]),Ue={Layout:Oi,enhanceApp:({app:t})=>{t.component("Badge",lt)}},Fi={key:0,class:"content-freshness-bar"},qi={class:"freshness-item"},Ui={key:0,class:"freshness-item"},Hi={class:"badge badge-info"},ji={key:1,class:"freshness-item"},Yi=I({__name:"Layout",setup(t){const{frontmatter:n}=_e(),a=r=>{switch(r){case"vendor":return"服务商官方文档/公告";case"self_measured":return"本站独立实测数据";case"third_party":return"第三方交叉验证记录";case"user_supplied":return"站长/用户提供记录";default:return"客观快照存证"}};return(r,s)=>(i(),_(d(Ue).Layout,null,{"doc-before":v(()=>[d(n).verifiedAt||d(n).modifiedAt?(i(),l("div",Fi,[e("span",qi,[s[0]||(s[0]=F(" 📅 内容核验时间: ",-1)),e("strong",null,m(d(n).verifiedAt||d(n).modifiedAt),1)]),d(n).provenance?(i(),l("span",Ui,[s[1]||(s[1]=F(" 📌 证据级别: ",-1)),e("span",Hi,m(a(d(n).provenance)),1)])):h("",!0),d(n).primaryIntent?(i(),l("span",ji," 🎯 核心意图: "+m(d(n).primaryIntent),1)):h("",!0)])):h("",!0)]),_:1}))}}),zi=B(Yi,[["__scopeId","data-v-332a6ead"]]),O=[{id:"lightspeed",rank:1,name:"光速云",aliases:["光速云","光速云"],establishedYear:2020,summary:"2020年起持续运营的综合型IEPL老牌机场，采用IEPL专线+企业级内网双专线架构与VLESS协议。提供致敬斯诺克147永久套餐、99元年付轻量版、25元月付极速版与680元定制版，单节点最高2.5Gbps，覆盖ChatGPT长文本、TikTok直播与海外电商高要求业务。",protocols:["VLESS","Shadowsocks","Trojan"],lineType:"IEPL 专线 + 企业级内网专线（双线路架构）",startingPriceMonthly:8.25,customClient:!0,thirdPartySupport:!0,linkId:"link-lightspeed",categoryTag:"第一主推旗舰专线（综合 TOP 1）",speedtestImage:"光速云-节点测速实测.png",unlockImages:[{file:"photo_2026-08-19_12-13-01.jpg",title:"光速云 日本节点 ChatGPT 网页版长文本流式传输抓包"},{file:"photo_2026-08-19_12-13-50.jpg",title:"光速云 新加坡节点 Claude 3.5 Sonnet 人机验证通过实录"},{file:"photo_2026-08-19_12-13-58.jpg",title:"光速云 美区原生节点 Netflix 独家版权片目 180秒持续播放无弹窗"},{file:"photo_2026-08-19_12-18-40.jpg",title:"光速云 全球节点晚高峰延迟与带宽监控大盘"},{file:"photo_2026-08-19_12-20-10.jpg",title:"光速云 TikTok 跨境电商直播原生住宅 IP 解锁验证"}],sourceRef:"SRC-28-BRANDS #1",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`主推## 1. 光速云\r
\r
**注册链接**：\`https://sahude.gsyvipaff.com/#/?code=keqgvT5Y\`\r
\r
**基础数据**：2020年运营、致敬斯诺克147永久套餐247GB | 轻量版99元/年 69GB/月 | 极速版25元/月 168GB/月 | 定制版680元/月 500GB/月 | 优惠码 \`AMM\` 最低入门价格约8元一个月、\r
\r
**品牌资料明确说了的**：\r
- IEPL专线 + 企业级内网专线（双线路架构）\r
- VLESS 协议- IEPL专线\r
- 自研客户端 + 支持第三方订阅导入（Clash、Shadowrocket）\r
- 节点覆盖：节点覆盖：香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、英国、法国、德国、土耳其、泰国、巴西等\r
- 4个价格档，从99元/年到680元/月跨度极大\r
\r
*套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
光速云·轻量版	年付	¥99	69GB	每月\r
光速云·极速版	月付	¥25	168GB	每月\r
光速云·流光版	月付	¥34	238GB	每月\r
光速云·量子版	月付	¥68	500GB	每月\r
光速云·无界版	月付	¥138	900GB	每月\r
光速云·致敬斯诺克147永久套餐	一次性付费	¥147	247GB不过期\r
光速云·定制套餐	月付	¥680	500GB	每月\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	22ms	529Mbps\r
台湾	41ms	114Mbps\r
新加坡	46ms	387Mbps\r
日本	57ms	135Mbps\r
美国	143ms	18Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 视节点而定：ChatGPT、Gemini\r
- 支持：Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
介绍说明：光速云在便宜机场推荐里属于价格有优势的一类，99 元/年左右的最低套餐，换算下来每月成本不高，在高性价比机场推荐里比较有竞争力。它把 IPLC 专线和隧道中转结合着用，第三方测试显示香港、日本节点速度表现还不错，也支持 Netflix、Disney+、YouTube 等主流流媒体。不过要注意，ChatGPT、Gemini 这类 AI 工具并不是所有节点都稳定支持，实际用的时候可能需要手动切换节点，这点官方也承认。套餐里特殊商品不支持退款，所以更建议先买月付或者小额套餐，实测晚高峰速度和稳定性之后，再考虑要不要长期用。\r
\r
\r
---\r
\r`},{id:"flycat",rank:2,name:"飞猫云",aliases:["飞猫云（feimao）","飞猫云"],establishedYear:2023,summary:"飞猫云更适合放进新手机场推荐这个分类——它的重点不是极致速度或专线，而是省事：走的是专属客户端模式，下载 App、登录就能用，不用找订阅链接、不用配 Clash，第一次用机场的人也能快速上手。7 元/月起的价格也不算贵，节点覆盖亚太和欧美常见地区，日常看视频、用 AI 工具都能应付，作为轻量日常使用足够。它不是那种主打顶级专线体验的机场，如果你要的是极致稳定，可能得看看更偏专线机场推荐的选项，但作为日常主力或备用机场，飞猫云的易用性是个明显加分项。",protocols:["Shadowsocks","VLESS"],lineType:"BGP 中继隧道 / 专线混合",startingPriceMonthly:7,customClient:!0,thirdPartySupport:!0,linkId:"link-flycat",categoryTag:"主力高稳专线推荐",speedtestImage:"飞猫云-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #2",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 2. 飞猫云（feimao）\r
\r
**注册链接**：\`https://guangs.flycataff.com/#/?code=6uq0Xe9y\`\r
\r
**基础数据**：2023年运营 | 年付约7元/月 50GB/月 | 优惠码 \`flycat888\`\r
\r
核心特色\r
- 主打轻快连接、简单配置和灵活节点切换\r
- 专属客户端下载登录即用，不用配订阅\r
- 不用自己挑客户端、导订阅，新手容易快速上手\r
- 节点覆盖亚太、欧美等热门地区\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
飞猫·学生版	年付	¥84	50GB	每月\r
飞猫·星耀版	月付	¥25	150GB	每月\r
飞猫·星环版	月付	¥45	300GB	每月\r
飞猫·银河版	月付	¥85	600GB	每月\r
飞猫·宇宙版	月付	¥150	1000GB	每月\r
飞猫·不限时套餐	一次性付费	¥680	1000GB	一次性\r
飞猫·定制套餐	月付	¥550	500GB	每月\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	21ms	526Mbps\r
台湾	41ms	116Mbps\r
新加坡	45ms	413Mbps\r
日本	54ms	138Mbps\r
美国	178ms	14Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
- 视节点而定：Gemini\r
介绍说明：飞猫云更适合放进新手机场推荐这个分类——它的重点不是极致速度或专线，而是省事：走的是专属客户端模式，下载 App、登录就能用，不用找订阅链接、不用配 Clash，第一次用机场的人也能快速上手。7 元/月起的价格也不算贵，节点覆盖亚太和欧美常见地区，日常看视频、用 AI 工具都能应付，作为轻量日常使用足够。它不是那种主打顶级专线体验的机场，如果你要的是极致稳定，可能得看看更偏专线机场推荐的选项，但作为日常主力或备用机场，飞猫云的易用性是个明显加分项。\r
\r
---\r
\r`},{id:"breezenet",rank:3,name:"微风网络",aliases:["微风网络（weifeng）","微风网络"],establishedYear:2023,summary:"微风网络在便宜机场推荐里经常被提到，价格是它最直接的优势——11 元/月起，比不少同类 IEPL 机场推荐都要低，对学生党和轻度用户比较友好。走的是 IEPL 专线而不是纯中转，所以稳定性比一些更便宜的中转机场要好一点，日常刷网页、看视频、用 ChatGPT 基本没问题，节点也覆盖了香港、新加坡、日本、美国这几个热门地区。客服口碑在这个价位段里算是不错的，第一次用机场遇到问题至少有地方问，这对刚接触机场的新手来说挺重要。不过 100GB 的流量对重度用户可能不太够，属于入门够用但称不上顶配的类型，如果每天长时间在线，可能需要额外留意用量。",protocols:["Shadowsocks","VLESS"],lineType:"BGP 中继隧道 / 专线混合",startingPriceMonthly:11.42,customClient:!1,thirdPartySupport:!0,linkId:"link-breezenet",categoryTag:"主力高稳专线推荐",speedtestImage:"微风-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #3",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 3. 微风网络（weifeng）\r
\r
**注册链接**：\`https://edp01.breezenetaff.com/#/?code=t3huofyI\`\r
\r
**基础数据**：2023年运营 | 年付约7元/月 50GB/月 | 优惠码 \`flat888\`\r
\r
核心特色\r
- IEPL 专线 + VLESS 协议，定位入门级高性价比机场\r
- 覆盖香港、新加坡、日本、美国等多地原生 IP 节点\r
- 可解锁 Netflix、Disney+ 等主流流媒体及 ChatGPT、Claude 等 AI 工具\r
- 客服 7×24 小时在线，夜间由 AI 客服值守，适合新手和轻度用户\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
清风 (Breeze)	年付	¥137	100GB	每月\r
乘风 (Riding)	月付	¥27	200GB	每月\r
破风 (Breaking)	月付	¥57	500GB	每月\r
御风 (Mastery)	月付	¥127	1200GB	每月\r
信风·不限时	一次性付费	¥200	270GB	一次性\r
长风·不限时	一次性付费	¥370	570GB	一次性\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	25ms	546Mbps\r
台湾	40ms	115Mbps\r
新加坡	43ms	384Mbps\r
日本	54ms	131Mbps\r
美国	167ms	17Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
- 视节点而定：Gemini\r
介绍说明：微风网络在便宜机场推荐里经常被提到，价格是它最直接的优势——11 元/月起，比不少同类 IEPL 机场推荐都要低，对学生党和轻度用户比较友好。走的是 IEPL 专线而不是纯中转，所以稳定性比一些更便宜的中转机场要好一点，日常刷网页、看视频、用 ChatGPT 基本没问题，节点也覆盖了香港、新加坡、日本、美国这几个热门地区。客服口碑在这个价位段里算是不错的，第一次用机场遇到问题至少有地方问，这对刚接触机场的新手来说挺重要。不过 100GB 的流量对重度用户可能不太够，属于入门够用但称不上顶配的类型，如果每天长时间在线，可能需要额外留意用量。\r
\r
---\r`},{id:"twilight",rank:4,name:"暮光加速",aliases:["暮光加速（muguang）","暮光加速"],establishedYear:2023,summary:"暮光加速面向的是个人和团队跨平台使用场景，主打 BGP 智能调度和专线级出口，覆盖 Windows、macOS、iOS、Android、Linux 全平台，多设备同时在线是它的核心卖点，比较适合放进多设备机场推荐这个分类。9 元/月起的价格在专线机场推荐里不算高，120GB–1500GB 的流量档位选择也比较多，能满足不同用量需求。官方称支持 7×24 小时真人客服，对经常需要跨境办公、远程协作的团队用户会有一定吸引力，也支持 Netflix、Disney+、HBO、Hulu 等流媒体。目前没有查到公开的优惠码信息，如果预算敏感，建议直接联系客服问问当前是否有活动。",protocols:["Shadowsocks","VLESS"],lineType:"优质 BGP 跨境网络",startingPriceMonthly:9.08,customClient:!1,thirdPartySupport:!0,linkId:"link-twilight",categoryTag:"热门综合高分推荐",speedtestImage:"幕光加速-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #4",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 4. 暮光加速（muguang）\r
\r
**注册链接**：\`https://varnexa.twilightaff.com/#/?code=D1LHglg3\`\r
\r
**基础数据**：2023年运营 | 20元/月 120GB/月 | 优惠码 \`muguang5555\`\r
\r
核心特色\r
- BGP 智能调度，专线级出口，主打稳定低延迟\r
- 覆盖 Windows、macOS、iOS、Android、Linux 全平台\r
- 支持多设备同时在线，套餐 120GB–1500GB 流量可选\r
- 官方宣称提供 7×24 小时真人客服\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
【暮光·基础版】	月付	¥20	120GB	每月\r
【暮光·标准版】	月付	¥40	240GB	每月\r
【暮光·旗舰版】	月付	¥100	700GB	每月\r
【暮光·至尊版】	月付	¥180	1500GB	每月\r
【暮光·年付轻量版】	年付	¥109	70GB	每月\r
【暮光·不限时轻量包】	一次性付费	¥219	150GB	一次性\r
【暮光·不限时标准包】	一次性付费	¥529	400GB	一次性\r
【暮光·不限时大容量包】	一次性付费	¥959	800GB	一次性\r
独享私人定制节点	月付	¥600	500GB	每月\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	26ms	509Mbps\r
台湾	40ms	107Mbps\r
新加坡	43ms	419Mbps\r
日本	53ms	150Mbps\r
美国	160ms	19Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
- 视节点而定：Gemini\r
介绍说明：暮光加速面向的是个人和团队跨平台使用场景，主打 BGP 智能调度和专线级出口，覆盖 Windows、macOS、iOS、Android、Linux 全平台，多设备同时在线是它的核心卖点，比较适合放进多设备机场推荐这个分类。9 元/月起的价格在专线机场推荐里不算高，120GB–1500GB 的流量档位选择也比较多，能满足不同用量需求。官方称支持 7×24 小时真人客服，对经常需要跨境办公、远程协作的团队用户会有一定吸引力，也支持 Netflix、Disney+、HBO、Hulu 等流媒体。目前没有查到公开的优惠码信息，如果预算敏感，建议直接联系客服问问当前是否有活动。\r
\r`},{id:"dalaoyun",rank:5,name:"大佬云",aliases:["大佬云（dalaoyun）","大佬云"],establishedYear:2024,summary:"大佬云 是一家运营成熟的跨境网络服务商，提供 IEPL 专线 + 企业级内网专线 架构与稳定出口支持。",protocols:["Shadowsocks","VLESS"],lineType:"IEPL 专线 + 企业级内网专线",startingPriceMonthly:5.6,customClient:!0,thirdPartySupport:!0,linkId:"link-dalaoyun",categoryTag:"热门综合高分推荐",speedtestImage:null,unlockImages:null,sourceRef:"SRC-28-BRANDS #5",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 5. 大佬云（dalaoyun）\r
\r
**注册链接**：\`https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN\`\r
\r
**基础数据**：2024年运营 | 年付约5.6元/月 60GB/月 | 优惠码 \`dly888\`\r
\r
**品牌资料明确说了的**：\r
- IEPL专线\r
- VLESS 协议\r
- 年付约5.6元/月 60GB\r
- 自研客户端 + 第三方订阅导入\r
- 季付及以上 7 折\r
\r
**与同类差异**：\r
- 和闪电鼠、云界线、榴莲云、环球梯规格几乎相同\r
- 品牌资料没有提供差异化的独有卖点\r
\r
**文末引导**：\r
> 大佬云是 5.6 元档的标准方案（IEPL + VLESS + 60GB）。同样价位有闪电鼠、云界线、榴莲云、环球梯，规格相似，建议以实际测试为准。\r
\r
\r`},{id:"stardream",rank:6,name:"星岛梦",aliases:["星岛梦（xingdaomeng）","星岛梦"],establishedYear:2020,summary:"星岛梦走的是 IEPL 专线，Trojan 协议，1 倍流量不限设备，节点覆盖香港、台湾、日本、美国、新加坡，还延伸到韩国和东南亚等地区，在 IEPL 机场推荐里节点覆盖算是比较广的一个。适合多设备家庭或者小团队一起用，日常流媒体解锁（Netflix、Disney+、YouTube Premium）和 ChatGPT、Gemini 等 AI 工具访问都在支持范围内，TikTok 跨区使用也有涉及。8 元/月起的价格放在稳定机场推荐里不算贵，配合海外技术团队和多人客服，属于综合体验还不错的选项。具体线路表现建议结合自己的地区先测一轮，再决定要不要长期订阅。",protocols:["Shadowsocks","VLESS","Trojan"],lineType:"BGP 中继隧道 / 专线混合",startingPriceMonthly:8,customClient:!1,thirdPartySupport:!0,linkId:"link-stardream",categoryTag:"热门综合高分推荐",speedtestImage:"星岛梦-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #6",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 6. 星岛梦（xingdaomeng）\r
\r
**注册链接**：\`https://guangs.xingdaomeng.com/#/?code=1TynBYnR\`\r
\r
**基础数据**：2020年运营 | 年付约8元/月 60GB/月 | 优惠码 \`nmw888\`\r
\r
核心特色\r
- IEPL 专线，1 倍流量且不限设备使用\r
- 节点覆盖香港、台湾、日本、美国、新加坡及韩国、东南亚等地区\r
- 支持 Netflix、Disney+、YouTube Premium 等主流流媒体\r
- 兼容 ChatGPT、Gemini 等 AI 工具及 TikTok 跨区使用\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
星岛梦·贴心小包	年付	¥96	60GB	每月\r
星岛梦·超量150G	月付	¥25	150GB	每月\r
星岛梦·进阶300G	月付	¥50	300GB	每月\r
星岛梦·闪光500G	月付	¥70	500GB	每月\r
星岛梦·旗舰1T版	月付	¥130	1000GB	每月\r
星岛梦·永久不限时100	一次性付费	¥100	100GB	一次性\r
星岛梦·永久不限时300	一次性付费	¥300	300GB	一次性\r
星岛梦·永久不限时1TB	一次性付费	¥600	1000GB	一次性\r
星岛梦·定制套餐	月付	¥680	500GB	每月\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	27ms	504Mbps\r
台湾	41ms	103Mbps\r
新加坡	44ms	411Mbps\r
日本	57ms	136Mbps\r
美国	177ms	18Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
- 视节点而定：Gemini\r
介绍说明：星岛梦走的是 IEPL 专线，Trojan 协议，1 倍流量不限设备，节点覆盖香港、台湾、日本、美国、新加坡，还延伸到韩国和东南亚等地区，在 IEPL 机场推荐里节点覆盖算是比较广的一个。适合多设备家庭或者小团队一起用，日常流媒体解锁（Netflix、Disney+、YouTube Premium）和 ChatGPT、Gemini 等 AI 工具访问都在支持范围内，TikTok 跨区使用也有涉及。8 元/月起的价格放在稳定机场推荐里不算贵，配合海外技术团队和多人客服，属于综合体验还不错的选项。具体线路表现建议结合自己的地区先测一轮，再决定要不要长期订阅。\r
\r
---\r`},{id:"2mao",rank:7,name:"二猫云",aliases:["二猫云（ermao）","二猫云"],establishedYear:2023,summary:"二猫云走 IEPL 专线，VLESS 协议，20 元/月起，130GB 流量。官方强调自己不做低价跑路盘那一套，主打长期稳定，还配了一套独家定制客户端。账号不限设备连接数，Netflix、YouTube、ChatGPT 这些日常场景基本能覆盖，但 Claude 和 Gemini 官方没给出确定说法，能不能用建议自己先测一下。节点覆盖香港、日本、美国，比不少同类机场少了新加坡这一站。套餐从月付到三年付都有，摆明是想留长期用户，价格在这个价位的专线机场里不算便宜，预算有限或者只是短期用用，可以先看看其他更便宜的选项。",protocols:["Shadowsocks","VLESS"],lineType:"BGP 中继隧道 / 专线混合",startingPriceMonthly:7.42,customClient:!1,thirdPartySupport:!0,linkId:"link-2mao",categoryTag:"热门综合高分推荐",speedtestImage:"二猫云-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #7",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 7. 二猫云（ermao）\r
\r
**注册链接**：\`https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW\`\r
\r
**基础数据**：2023年运营 | 20元/月 130GB/月 | 优惠码 \`ermao5555\`\r
\r
核心特色\r
- 全线 IEPL 专线，主打长期稳定而非低价走量\r
- 账号不限设备连接数，多端同时在线无压力\r
- 海外技术团队主理，配备独家定制客户端\r
- 解锁 Netflix、YouTube 等流媒体及 ChatGPT 等 AI 工具\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
二猫云·不限时套餐	一次性付费	¥99	100GB	一次性\r
二猫年付小包	年付	¥89	60GB	每月\r
二猫云·白猫套餐	月付	¥20	130GB	每月\r
二猫云·橘猫畅玩版	月付	¥40	230GB	每月\r
二猫云·牛奶猫尊享版	月付	¥80	430GB	每月\r
二猫云·黑猫重度用户版	月付	¥160	850GB	每月\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	22ms	481Mbps\r
台湾	41ms	118Mbps\r
新加坡	46ms	407Mbps\r
日本	53ms	143Mbps\r
美国	134ms	17Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
- 视节点而定：Claude、Gemini\r
介绍说明：二猫云走 IEPL 专线，VLESS 协议，20 元/月起，130GB 流量。官方强调自己不做低价跑路盘那一套，主打长期稳定，还配了一套独家定制客户端。账号不限设备连接数，Netflix、YouTube、ChatGPT 这些日常场景基本能覆盖，但 Claude 和 Gemini 官方没给出确定说法，能不能用建议自己先测一下。节点覆盖香港、日本、美国，比不少同类机场少了新加坡这一站。套餐从月付到三年付都有，摆明是想留长期用户，价格在这个价位的专线机场里不算便宜，预算有限或者只是短期用用，可以先看看其他更便宜的选项。\r
\r
\r
\r`},{id:"wuyou",rank:7,name:"无忧链接",aliases:["无忧链接（wuyou）","无忧链接"],establishedYear:2025,summary:"如果你要找便宜机场推荐里价格最低的那一档，无忧链接大概率会出现——6.5 元/月起，是这份榜单里门槛最低的机场之一，主打的是跨境电商和轻度用户场景，TikTok 跨区直连和直播支持是它比较突出的点。2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用折腾订阅和复杂配置，对新手比较友好。同时也能解锁 Netflix、Disney+ 和 YouTube 等主流流媒体，日常刷视频基本够用。不过流量只有 40GB，节点覆盖也偏基础，如果你的使用场景是重度办公或者多设备同时在线，这个价位的套餐大概率撑不了太久，更适合当作低成本的备用机场或者电商运营的辅助工具。",protocols:["Shadowsocks","VLESS"],lineType:"BGP 中继隧道 / 专线混合",startingPriceMonthly:6.58,customClient:!0,thirdPartySupport:!0,linkId:"link-wuyou",categoryTag:"热门综合高分推荐",speedtestImage:null,unlockImages:null,sourceRef:"SRC-28-BRANDS #7",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 7. 无忧链接（wuyou）\r
\r
**注册链接**：\`https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL\`\r
\r
**基础数据**：2025年运营 | 19元/月 100GB/月 | 优惠码 \`wuyou666\`\r
\r
核心特色\r
- 面向轻度用户和跨境电商的超高性价比套餐\r
- 全线节点无倍率、不限速、不限设备数量\r
- 专属客户端下载登录即用，新手不用折腾订阅配置\r
- 香港、新加坡、日本、美国均有节点，支持 TikTok 跨区直连\r
- 客服 7×24 小时在线，夜间由 AI 客服值守\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
MINI链接	年付	¥79	40GB	每月\r
舒心链接	月付	¥19	100GB	每月\r
省心链接	月付	¥33	200GB	每月\r
随心链接	月付	¥77	500GB	每月\r
忘忧链接	月付	¥117	1000GB	每月\r
100G永久不限时 无忧链接	一次性付费	¥108	100GB	一次性\r
300G永久不限时 无忧链接	一次性付费	¥298	300GB	一次性\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	23ms	531Mbps\r
台湾	41ms	107Mbps\r
新加坡	42ms	418Mbps\r
日本	55ms	147Mbps\r
美国	145ms	17Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
- 视节点而定：Gemini\r
介绍说明：如果你要找便宜机场推荐里价格最低的那一档，无忧链接大概率会出现——6.5 元/月起，是这份榜单里门槛最低的机场之一，主打的是跨境电商和轻度用户场景，TikTok 跨区直连和直播支持是它比较突出的点。2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用折腾订阅和复杂配置，对新手比较友好。同时也能解锁 Netflix、Disney+ 和 YouTube 等主流流媒体，日常刷视频基本够用。不过流量只有 40GB，节点覆盖也偏基础，如果你的使用场景是重度办公或者多设备同时在线，这个价位的套餐大概率撑不了太久，更适合当作低成本的备用机场或者电商运营的辅助工具。\r
------\r
\r`},{id:"v2yun",rank:7,name:"唯兔云",aliases:["唯兔云（weitu）","唯兔云"],establishedYear:2023,summary:"唯兔云走 IPLC 专线，Trojan 协议，主打 1 倍流量、不限速、不限设备连接，比较适合个人、家庭甚至小团队一起用，属于 IPLC 机场推荐里综合能力不错的选项。它同时支持 ChatGPT、Gemini、Claude 等 AI 工具和 Netflix、Disney+、YouTube Premium、TikTok 等流媒体解锁，覆盖的使用场景比较全，日常娱乐和 AI 办公都能兼顾。价格在 15 元/月左右，比一些入门中转机场贵，但比顶级专线机场便宜，算是中间档位的选择。海外技术团队加多人客服是它宣传的增值服务，具体套餐细节和优惠力度建议下单前以官网当前显示为准，价格可能随时调整。",protocols:["Shadowsocks","VLESS","Trojan"],lineType:"全 IPLC 专线",startingPriceMonthly:6.66,customClient:!1,thirdPartySupport:!0,linkId:"link-v2yun",categoryTag:"热门综合高分推荐",speedtestImage:"唯兔云-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #7",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 7. 唯兔云（weitu）\r
\r
**注册链接**：\`https://guangs.v2yunvipaff.com/#/?code=xIutqOBA\`\r
\r
**基础数据**：2023年运营 | 14.9元/月 100GB/月 | 优惠码 \`weitu666\`\r
\r
核心特色\r
- IPLC 专线，1 倍流量、不限速及不限设备连接\r
- 支持 ChatGPT、Gemini、Claude 等主流 AI 工具\r
- 支持 Netflix、Disney+、YouTube Premium 及 TikTok 等解锁\r
- 提供海外技术团队与多人客服支持\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
唯兔云·年付加强专线	年付	¥120	75GB	每月\r
唯兔云·年付版限量款	年付	¥79.90	45GB	每月\r
唯兔云·节假日限时开启（14.9元）	月付	¥14.9	100GB	每月\r
唯兔云·普通版	月付	¥19.90	150GB	每月\r
唯兔云·进阶版	月付	¥29.90	200GB	每月\r
唯兔云·专业版	月付	¥59.90	500GB	每月\r
唯兔云·至尊版	月付	¥119.90	1000GB	每月\r
唯兔云·永久不限时	一次性付费	¥100	100GB	一次性\r
唯兔云·永久不限时	一次性付费	¥160	200GB	一次性\r
唯兔云·永久不限时	一次性付费	¥340	500GB	一次性\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	27ms	500Mbps\r
台湾	37ms	100Mbps\r
新加坡	44ms	414Mbps\r
日本	56ms	147Mbps\r
美国	179ms	17Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
- 视节点而定：Gemini\r
介绍说明：唯兔云走 IPLC 专线，Trojan 协议，主打 1 倍流量、不限速、不限设备连接，比较适合个人、家庭甚至小团队一起用，属于 IPLC 机场推荐里综合能力不错的选项。它同时支持 ChatGPT、Gemini、Claude 等 AI 工具和 Netflix、Disney+、YouTube Premium、TikTok 等流媒体解锁，覆盖的使用场景比较全，日常娱乐和 AI 办公都能兼顾。价格在 15 元/月左右，比一些入门中转机场贵，但比顶级专线机场便宜，算是中间档位的选择。海外技术团队加多人客服是它宣传的增值服务，具体套餐细节和优惠力度建议下单前以官网当前显示为准，价格可能随时调整。\r
\r
---\r
\r`},{id:"firefly",rank:8,name:"Firefly",aliases:["Firefly（firefly）","Firefly"],establishedYear:2023,summary:"如果你在找 2026 年靠谱的 IPLC 机场推荐，Firefly 算是专线机场推荐里性价比不错的一个选择。8 元/月起的价格，比很多同样走 IPLC 专线的机场便宜一些，晚高峰稳定性是它的核心卖点，对每天要用 ChatGPT 办公、或者经常在深夜追剧的人来说，这一点比单纯堆节点数量更实际。节点覆盖香港、新加坡、日本、美国这几个常见地区，原生 IP 让 Netflix、Disney+ 这类流媒体解锁相对稳定，2026 年 10 月起直接用官方专属客户端，下载登录就能连，不用再配订阅链接，使用门槛更低。不限设备数量也算是个加分项，家里几台设备一起用不会受限制。当然，专线机场的价格门槛终归比中转线路高，如果只是偶尔上网、预算有限，没必要非选它不可。",protocols:["Shadowsocks","VLESS"],lineType:"全 IPLC 专线",startingPriceMonthly:8,customClient:!0,thirdPartySupport:!0,linkId:"link-firefly",categoryTag:"热门综合高分推荐",speedtestImage:null,unlockImages:null,sourceRef:"SRC-28-BRANDS #8",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 8. Firefly（firefly）\r
\r
**注册链接**：\`https://vip02.fireflyaff.com/#/?code=2n7VURre\`\r
\r
基础信息\r
- 协议：VLESS\r
- 起步价：¥8/月起\r
- 优惠码：firefly；**折扣：**8折；限制：（年付版不适用）。\r
- 使用方式：专属客户端，下载登录即用（不提供订阅链接）\r
核心特色\r
- IPLC 专线接入，主打低延迟与高稳定性\r
- 全节点不限速，不限客户端及设备数量\r
- 原生 IP 节点，覆盖香港、新加坡、日本、美国\r
- 海外技术团队维护线路，客服 7×24 小时在线，夜间由 AI 客服值守\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
Firefly 年付版	年付	¥96	60GB	每月\r
Firefly Lite	月付	¥25	150GB	每月\r
Firefly Plus	月付	¥45	300GB	每月\r
Firefly Blaze	月付	¥85	600GB	每月\r
Firefly Nova	月付	¥150	1000GB	每月\r
Firefly 不限时	一次性付费	¥100	100GB	一次性\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	27ms	547Mbps\r
台湾	39ms	135Mbps\r
新加坡	42ms	445Mbps\r
日本	57ms	147Mbps\r
美国	143ms	30Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
- 视节点而定：Gemini\r
介绍说明：如果你在找 2026 年靠谱的 IPLC 机场推荐，Firefly 算是专线机场推荐里性价比不错的一个选择。8 元/月起的价格，比很多同样走 IPLC 专线的机场便宜一些，晚高峰稳定性是它的核心卖点，对每天要用 ChatGPT 办公、或者经常在深夜追剧的人来说，这一点比单纯堆节点数量更实际。节点覆盖香港、新加坡、日本、美国这几个常见地区，原生 IP 让 Netflix、Disney+ 这类流媒体解锁相对稳定，2026 年 10 月起直接用官方专属客户端，下载登录就能连，不用再配订阅链接，使用门槛更低。不限设备数量也算是个加分项，家里几台设备一起用不会受限制。当然，专线机场的价格门槛终归比中转线路高，如果只是偶尔上网、预算有限，没必要非选它不可。\r
\r
------\r
\r`},{id:"yuzhou",rank:10,name:"宇宙云",aliases:["宇宙云（yuzhou）","宇宙云"],establishedYear:2023,summary:"宇宙云 是一家运营成熟的跨境网络服务商，提供 BGP 中继隧道 / 专线混合 架构与稳定出口支持。",protocols:["Shadowsocks","VLESS"],lineType:"BGP 中继隧道 / 专线混合",startingPriceMonthly:15,customClient:!0,thirdPartySupport:!0,linkId:"link-yuzhou",categoryTag:"热门综合高分推荐",speedtestImage:"宇宙云-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #10",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 10. 宇宙云（yuzhou）\r
\r
**注册链接**：\`https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1\`\r
基础信息\r
- 协议：VLESS（较早期资料）\r
- 起步价：¥96/年，月流量未能从当前资料确定\r
- 优惠码：YUZHOU553（历史资料称新用户8折）\r
- 使用方式：待核实（不默认“专属客户端”或“提供订阅链接”）\r
核心特色\r
- 60+ 节点；三网优化；智能负载均衡（历史品牌资料）\r
- 完整资料、节点覆盖、支持设备与客服信息有待补充\r
套餐价格\r
套餐名	计费方式	价格	流量	流量周期\r
待补充	待核实	—	—	—\r
\r
\r
现有资料不足以列出该品牌全部套餐；上述历史起价不得直接充当当前完整套餐表。\r
\r
测速（2026-10-19）\r
节点	延迟	下载\r
暂无可核实实测数据	—	—\r
\r
\r
流媒体 & AI 解锁\r
- 支持：待核实\r
- 视节点而定：待核实\r
资料说明：需要补充当期官方套餐截图或完整套餐文本，才可按与光速云相同的详细程度整理。\r
---\r
\r`},{id:"u1s1",rank:11,name:"U1S1",aliases:["U1S1（u1s1）","U1S1"],establishedYear:2025,summary:"U1S1 是 2025 年才上线的新机场，走 IPLC 专线，官方宣传 2000Mbps 高速带宽和晚高峰不限速，在高速机场推荐里算是敢喊出具体带宽数字的一个，实测反馈显示流媒体解锁和 ChatGPT 访问表现还可以。20 元 120GB 的套餐之外还有 1000GB 的一次性大流量包，适合短期内用量大、需要弹性补充流量的场景。因为运营时间还比较短，长期稳定性和售后表现还需要更长周期观察，这也是新机场普遍会遇到的问题，官方公开的优惠信息也比较有限。如果你愿意尝鲜，建议先用小额套餐测试，别一上来就冲大额年付。",protocols:["Shadowsocks","VLESS"],lineType:"全 IPLC 专线",startingPriceMonthly:8,customClient:!1,thirdPartySupport:!0,linkId:"link-u1s1",categoryTag:"不限时与大流量备用",speedtestImage:"U1S1-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #11",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 11. U1S1（u1s1）\r
\r
**注册链接**：\`https://guangs.vipaff.cc/#/?code=xhX5X22f\`\r
\r
**基础数据**：2025年运营 | 20元/月 120GB/月 | 优惠码 \`akaka\`\r
\r
核心特色\r
- 2025 年起运营的 IPLC 专线机场\r
- 官方宣称 2000Mbps 高速带宽，晚高峰不限速\r
- 不限设备同时连接\r
- 支持 Netflix、TikTok 等流媒体及 ChatGPT 等 AI 工具\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
u1s1·就是好用包	年付	¥96	60GB	每月\r
u1s1·普通人真够了包	月付	¥20	120GB	每月\r
u1s1·你以为用不到包	月付	¥40	300GB	每月\r
u1s1·瘾大就拉满包	月付	¥100	700GB	每月\r
u1s1·我全都要包	月付	¥180	1500GB	每月\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	24ms	538Mbps\r
台湾	39ms	107Mbps\r
新加坡	46ms	414Mbps\r
日本	57ms	133Mbps\r
美国	134ms	20Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
- 视节点而定：Gemini\r
介绍说明：U1S1 是 2025 年才上线的新机场，走 IPLC 专线，官方宣传 2000Mbps 高速带宽和晚高峰不限速，在高速机场推荐里算是敢喊出具体带宽数字的一个，实测反馈显示流媒体解锁和 ChatGPT 访问表现还可以。20 元 120GB 的套餐之外还有 1000GB 的一次性大流量包，适合短期内用量大、需要弹性补充流量的场景。因为运营时间还比较短，长期稳定性和售后表现还需要更长周期观察，这也是新机场普遍会遇到的问题，官方公开的优惠信息也比较有限。如果你愿意尝鲜，建议先用小额套餐测试，别一上来就冲大额年付。\r
---\r
\r`},{id:"lingmao",rank:12,name:"灵猫网络",aliases:["灵猫网络（lingmao）","灵猫网络"],establishedYear:2025,summary:"灵猫走的是中转优化线路，7.1 元/月起，主打 1 倍流量、不限速、不限设备，这一点对家里多台设备同时用的人比较实用。节点覆盖了香港、新加坡、日本、美国这几个常见地区，2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用自己配置，属于比较适合放进不限设备机场推荐的选项。官方也提到可以解锁 Netflix、Disney+ 等流媒体，以及 ChatGPT、TikTok 之类的应用，覆盖场景算是比较全面。不过具体解锁效果和线路参数会因账号和时段有差异，建议先用月付套餐测一测晚高峰体验，而不是直接冲年付套餐。",protocols:["Shadowsocks","VLESS"],lineType:"BGP 中继隧道 / 专线混合",startingPriceMonthly:7.08,customClient:!0,thirdPartySupport:!0,linkId:"link-lingmao",categoryTag:"高性价比实用方案",speedtestImage:"灵猫网络-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #12",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 12. 灵猫网络（lingmao）\r
\r
**注册链接**：\`https://vip01.civetnet.com/#/?code=8MIAyxak\`\r
\r
**基础数据**：2025年运营 | 19元/月 150GB/月 | 优惠码 \`lmao888\`\r
基础信息\r
- 协议：原文未标注\r
- 起步价：¥7.1/月起\r
- 优惠码：lingmao；**折扣：**8折；限制：（年付小包不适用）。\r
- 使用方式：专属客户端，下载登录即用（不提供订阅链接）\r
核心特色\r
- 1 倍流量，不限速及不限设备使用\r
- 覆盖香港、台湾、日本、美国、新加坡等亚洲及欧美节点\r
- 支持 Netflix、Disney+、YouTube 等流媒体及 ChatGPT、TikTok 等平台\r
- 专属客户端下载登录即用，不用导入订阅\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
灵猫·年付小包	年付	¥85	45GB	每月\r
灵猫·年付Small	年付	¥195	150GB	每月\r
灵猫·年付Big	年付	¥295	300GB	每月\r
灵猫·季付Big	季付	¥125	300GB	每月\r
灵猫·月付Small	月付	¥25	150GB	每月\r
灵猫·月付Big	月付	¥45	300GB	每月\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	22ms	492Mbps\r
台湾	40ms	109Mbps\r
新加坡	46ms	409Mbps\r
日本	57ms	147Mbps\r
美国	164ms	19Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
- 视节点而定：Gemini\r
介绍说明：灵猫走的是中转优化线路，7.1 元/月起，主打 1 倍流量、不限速、不限设备，这一点对家里多台设备同时用的人比较实用。节点覆盖了香港、新加坡、日本、美国这几个常见地区，2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用自己配置，属于比较适合放进不限设备机场推荐的选项。官方也提到可以解锁 Netflix、Disney+ 等流媒体，以及 ChatGPT、TikTok 之类的应用，覆盖场景算是比较全面。不过具体解锁效果和线路参数会因账号和时段有差异，建议先用月付套餐测一测晚高峰体验，而不是直接冲年付套餐。\r
\r
---\r
\r`},{id:"jilian",rank:13,name:"极连云",aliases:["极连云（jilian）","极连云"],establishedYear:2024,summary:"极连云 是一家运营成熟的跨境网络服务商，提供 IEPL 专线 + 企业级内网专线 架构与稳定出口支持。",protocols:["Shadowsocks","VLESS"],lineType:"IEPL 专线 + 企业级内网专线",startingPriceMonthly:8.25,customClient:!0,thirdPartySupport:!0,linkId:"link-jilian",categoryTag:"高性价比实用方案",speedtestImage:"极连云-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #13",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 13. 极连云（jilian）\r
\r
**注册链接**：\`https://guangs.jlyvipaff.com/#/?code=VM1rKGUu\`\r
\r
**基础数据**：2024年运营 | 18元/月 100GB/月 | 优惠码 \`ji8888\`\r
\r
**品牌资料明确说了的**：\r
- IEPL专线\r
- 18元/月 100GB\r
- 自研客户端 + 支持第三方客户端\r
- 品牌资料明确说"覆盖常见 AI 工具使用场景"\r
\r
**与同类差异**：\r
- 18 元档中有 IEPL + 自研客户端\r
- 和光年梯同为 18 元档，但极连云是 100GB，光年梯是 110GB\r
\r
**文末引导**：\r
> 极连云是 18 元/100GB 的 IEPL 方案，品牌资料明确提到"覆盖常见 AI 工具使用场景"。如果你主要是用 AI 工具 + 日常网页访问，它值得考虑。\r
\r
---\r
\r`},{id:"guangnian",rank:14,name:"光年梯",aliases:["光年梯（guangnian）","光年梯"],establishedYear:2025,summary:"光年梯 是一家运营成熟的跨境网络服务商，提供 IEPL 专线 + 企业级内网专线 架构与稳定出口支持。",protocols:["Shadowsocks","VLESS"],lineType:"IEPL 专线 + 企业级内网专线",startingPriceMonthly:8.25,customClient:!0,thirdPartySupport:!0,linkId:"link-guangnian",categoryTag:"高性价比实用方案",speedtestImage:"光年梯-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #14",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 14. 光年梯（guangnian）\r
\r
**注册链接**：\`https://guangs.gntaff.com/#/?code=X1FoxjGE\`\r
\r
**基础数据**：2025年运营 | 18元/月 110GB/月 | 优惠码 \`gnt6666\`\r
\r
**品牌资料明确说了的**：\r
- IEPL专线\r
- VLESS 协议\r
- 18元/月 110GB\r
- 自研客户端 + 第三方订阅导入\r
- 品牌资料明确说"支持常见 AI 工具使用场景"和"支持主流流媒体使用场景"\r
\r
**与同类差异**：\r
- 18 元档中流量 110GB（比极连云多 10GB）\r
- 定位"介于低价套餐和综合型专线套餐之间"\r
\r
**文末引导**：\r
> 光年梯和极连云同为 18 元档的 IEPL 方案，光年梯多 10GB（110 vs 100）。作为 2025 年成立的新品牌，它的长期稳定性需要观察。\r
\r
---\r
\r`},{id:"yifan",rank:15,name:"一翻云",aliases:["一翻云（yifan）","一翻云"],establishedYear:2025,summary:"一翻云全节点走 IEPL 物理专线，搭配原生住宅 IP，官方称晚高峰 0 丢包、单节点 2Gbps 带宽。协议给了 Hysteria 2、VLESS-Reality 和 Shadowsocks 三种，客户端选择比较宽松。节点覆盖香港、日本、美国、新加坡、台湾五地，比不少同价位机场多了台湾这一站。不限速也不限设备数量，另外提供永久不过期的一次性流量包，适合用量不固定、不想按月续费的人。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；想要更多流量可以看月付档，轻享版 20 元给到 150GB。优惠码 1FLYYUN 可以再打 9 折。官方没有提供试用，想先验证线路没有零成本的办法。",protocols:["Shadowsocks","VLESS","Hysteria 2"],lineType:"BGP 中继隧道 / 专线混合",startingPriceMonthly:8.17,customClient:!1,thirdPartySupport:!0,linkId:"link-yifan",categoryTag:"不限时与大流量备用",speedtestImage:"一翻云-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #15",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 15. 一翻云（yifan）\r
\r
**注册链接**：\`https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r\`\r
\r
**基础数据**：2025年运营 | 20元/月 150GB/月 | 优惠码 \`yfy6666\`\r
\r
核心特色\r
- 全节点 IEPL 物理专线，搭配原生住宅 IP\r
- 官方称晚高峰 0 丢包，单节点 2Gbps 大带宽\r
- 提供永久不过期的不限时流量包，用量不固定也不会浪费\r
- 不限速、不限设备数量，Hysteria 2 / VLESS-Reality / Shadowsocks 三协议可选\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
轻享版	月付	¥20	150GB	每月\r
舒享版	月付	¥35	350GB	每月\r
尊享版	月付	¥55	600GB	每月\r
极致版	月付	¥95	1.2TB	每月\r
98¥·年付小包	年付	¥98	60GB	每月\r
轻享版·不限时包	一次性付费	¥100	100GB	一次性\r
舒享版·不限时包	一次性付费	¥200	250GB	一次性\r
尊享版·不限时包	一次性付费	¥400	500GB	一次性\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	23ms	477Mbps\r
台湾	40ms	117Mbps\r
新加坡	42ms	390Mbps\r
日本	53ms	136Mbps\r
美国	180ms	20Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
- 视节点而定：Gemini\r
介绍说明：一翻云全节点走 IEPL 物理专线，搭配原生住宅 IP，官方称晚高峰 0 丢包、单节点 2Gbps 带宽。协议给了 Hysteria 2、VLESS-Reality 和 Shadowsocks 三种，客户端选择比较宽松。节点覆盖香港、日本、美国、新加坡、台湾五地，比不少同价位机场多了台湾这一站。不限速也不限设备数量，另外提供永久不过期的一次性流量包，适合用量不固定、不想按月续费的人。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；想要更多流量可以看月付档，轻享版 20 元给到 150GB。优惠码 1FLYYUN 可以再打 9 折。官方没有提供试用，想先验证线路没有零成本的办法。\r
\r
---\r
\r`},{id:"sogo",rank:16,name:"SOGO 云",aliases:["SOGO 云（sogo）","SOGO 云"],establishedYear:2023,summary:"Sogo 云由海外团队运营，全线 IEPL 专线接入并做了三网 BGP 优化，协议用 VLESS，不限速也不限设备数量。节点覆盖香港、台湾、日本、新加坡、美国、韩国等 15 个国家和地区，是本站收录里覆盖面最广的一家。需要留意的是它不提供订阅链接，只能通过自研客户端使用，Clash、Shadowrocket 这类第三方客户端用不了。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；月付从 25 元 150GB 起。优惠码 SOGO10000 可打 9 折。官方没有提供试用。",protocols:["Shadowsocks","VLESS"],lineType:"优质 BGP 跨境网络",startingPriceMonthly:8.17,customClient:!0,thirdPartySupport:!0,linkId:"link-sogo",categoryTag:"不限时与大流量备用",speedtestImage:"SOGO云-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #16",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 16. SOGO 云（sogo）\r
\r
**注册链接**：\`https://guangs.sogoyunaff.cc/#/?code=327Vs0w7\`\r
\r
基础信息\r
- 协议：VLESS\r
- 起步价：¥8.17/月起\r
- 优惠码：SOGO10000；**折扣：**9折；**限制：**未标注。\r
- 使用方式：专属客户端，下载登录即用（不提供订阅链接）\r
\r
核心特色\r
- 全线 IEPL 专线接入，三网 BGP 优化\r
- 节点覆盖 15 个国家和地区，本站收录里覆盖面最广\r
- 不限速、不限设备数量，VLESS 协议\r
- 自研客户端，支持 Windows、macOS、iOS、Android 与主流软路由\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
小包-年付版	年付	¥98	60GB	每月\r
基础版	月付	¥25	150GB	每月\r
优选版	月付	¥45	350GB	每月\r
强化版	月付	¥80	550GB	每月\r
顶配版	月付	¥150	1.1TB	每月\r
SOGO基础餐不限时版	一次性付费	¥120	120GB	一次性\r
SOGO优选餐不限时版	一次性付费	¥220	250GB	一次性\r
SOGO强化餐不限时版	一次性付费	¥450	500GB	一次性\r
SOGO至尊餐不限时版	一次性付费	¥850	1.0TB	一次性\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	26ms	488Mbps\r
台湾	39ms	118Mbps\r
新加坡	43ms	401Mbps\r
日本	57ms	137Mbps\r
美国	140ms	17Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Netflix、Disney+、YouTube、TikTok\r
- 视节点而定：Claude、Gemini、HBO Max、Spotify\r
介绍说明：Sogo 云由海外团队运营，全线 IEPL 专线接入并做了三网 BGP 优化，协议用 VLESS，不限速也不限设备数量。节点覆盖香港、台湾、日本、新加坡、美国、韩国等 15 个国家和地区，是本站收录里覆盖面最广的一家。需要留意的是它不提供订阅链接，只能通过自研客户端使用，Clash、Shadowrocket 这类第三方客户端用不了。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；月付从 25 元 150GB 起。优惠码 SOGO10000 可打 9 折。官方没有提供试用。\r
\r
---\r
\r`},{id:"kexin",rank:17,name:"可信云",aliases:["可信云（kexin）","可信云"],establishedYear:2024,summary:"可信云 是一家运营成熟的跨境网络服务商，提供 IEPL 专线 + 企业级内网专线 架构与稳定出口支持。",protocols:["Shadowsocks","VLESS"],lineType:"IEPL 专线 + 企业级内网专线",startingPriceMonthly:15,customClient:!1,thirdPartySupport:!0,linkId:"link-kexin",categoryTag:"高性价比实用方案",speedtestImage:"可信云-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #17",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 17. 可信云（kexin）\r
\r
**注册链接**：\`https://guangs.kosingaff.com/#/register?code=UYDtNlCY\`\r
\r
**基础数据**：2024年运营 | 25元/月 150GB/月 | 优惠码 \`kkk333\`\r
\r
**品牌资料明确说了的**：\r
- IEPL专线\r
- VLESS 协议\r
- 25元/月 150GB\r
- 支持第三方客户端\r
- 品牌资料明确说"AI 与流媒体目前缺乏统一实测数据"\r
\r
**与同类差异**：\r
- 规格和 SOGO 云、速界几乎相同\r
- 品牌资料明确说"AI 与流媒体目前缺乏统一实测数据，应保持中性描述"——透明度高\r
\r
**文末引导**：\r
> 可信云在品牌资料中明确说明"AI 与流媒体缺乏统一实测数据"，这种透明度在 25 元档品牌中并不多见。如果你看重品牌方的诚实度，它值得考虑。\r
\r
---\r
\r`},{id:"sujie",rank:18,name:"速界",aliases:["速界（sujie）","速界"],establishedYear:2024,summary:"速界 是一家运营成熟的跨境网络服务商，提供 IEPL 专线 + 企业级内网专线 架构与稳定出口支持。",protocols:["Shadowsocks","VLESS"],lineType:"IEPL 专线 + 企业级内网专线",startingPriceMonthly:15,customClient:!0,thirdPartySupport:!0,linkId:"link-sujie",categoryTag:"高性价比实用方案",speedtestImage:"速界-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #18",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 18. 速界（sujie）\r
\r
**注册链接**：\`https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB\`\r
\r
**基础数据**：2024年运营 | 25元/月 150GB/月 | 优惠码 \`sss1111\`\r
\r
**品牌资料明确说了的**：\r
- IEPL专线\r
- VLESS 协议\r
- 自研客户端 + 第三方订阅导入\r
- 25元/月 150GB\r
- **品牌资料明确强调 ChatGPT、Claude、Gemini 等 AI 使用场景**\r
- 品牌资料明确说"AI 可用性受 IP、地区和平台规则影响，不应承诺永久稳定支持所有 AI 平台"\r
\r
**与同类差异**：\r
- 25 元档唯一明确强调 AI 工具的品牌\r
- 品牌资料明确说"更突出 AI 工具访问场景"\r
\r
**文末引导**：\r
> 速界是 25 元档唯一明确主打 AI 工具的品牌，品牌资料强调 ChatGPT、Claude、Gemini 使用场景。如果你主要用途是 AI 工具，它是这个价位的针对型选择。\r
\r
---\r
\r`},{id:"shanyue",rank:19,name:"闪跃",aliases:["闪跃（shanyue）","闪跃"],establishedYear:2023,summary:"闪跃在专线机场推荐里定位偏高端，走的是纯 IPLC 专线，晚高峰不掉速是它反复强调的卖点，官方说法是依托强大骨干网接入实现的。对经常用 ChatGPT、Claude、Gemini 这类 AI 工具办公，或者追剧追到深夜的人来说，这种稳定性确实比便宜机场更有意义，节点也覆盖香港、日本、美国等热门地区，原生 IP 解锁 Netflix、Disney+、HBO 等流媒体的体验相对可靠。8 元/月的起步价放在 IPLC 机场推荐里不算贵，但比中转线路的机场肯定要高一些。如果你只是想偶尔上网查资料，这个价位没必要，适合的是长期高频、对稳定性有明确要求的用户。",protocols:["Shadowsocks","VLESS"],lineType:"全 IPLC 专线",startingPriceMonthly:8,customClient:!0,thirdPartySupport:!0,linkId:"link-shanyue",categoryTag:"高性价比实用方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-28-BRANDS #19",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 19. 闪跃（shanyue）\r
\r
**注册链接**：\`https://vip02.flashleapaff.com/#/?code=3lgzm9mm\`\r
\r
基础信息\r
- 协议：原文未标注\r
- 起步价：¥8/月起\r
- 优惠码：shanyue；**折扣：**8折；限制：（仅限闪动 / 飞跃 / 瞬移 / 跃迁，年付版不适用）。\r
- 使用方式：专属客户端，下载登录即用（不提供订阅链接）\r
核心特色\r
- 顶级 IPLC 纯专线，主打极致低延迟\r
- 骨干网接入，晚高峰仍能保持连接稳定\r
- 原生 IP 全解锁 Netflix、Disney+、HBO 等流媒体\r
- 支持 ChatGPT、Claude、Gemini 等 AI 工具访问\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
闪跃年付版	年付	¥96	60GB	每月\r
闪动 (Flicker)	月付	¥24	150GB	每月\r
飞跃 (Leap)	月付	¥44	300GB	每月\r
瞬移 (Teleport)	月付	¥84	600GB	每月\r
跃迁 (Warp)	月付	¥134	1000GB	每月\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	23ms	548Mbps\r
台湾	38ms	110Mbps\r
新加坡	44ms	383Mbps\r
日本	53ms	144Mbps\r
美国	143ms	18Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
- 视节点而定：Gemini\r
介绍说明：闪跃在专线机场推荐里定位偏高端，走的是纯 IPLC 专线，晚高峰不掉速是它反复强调的卖点，官方说法是依托强大骨干网接入实现的。对经常用 ChatGPT、Claude、Gemini 这类 AI 工具办公，或者追剧追到深夜的人来说，这种稳定性确实比便宜机场更有意义，节点也覆盖香港、日本、美国等热门地区，原生 IP 解锁 Netflix、Disney+、HBO 等流媒体的体验相对可靠。8 元/月的起步价放在 IPLC 机场推荐里不算贵，但比中转线路的机场肯定要高一些。如果你只是想偶尔上网查资料，这个价位没必要，适合的是长期高频、对稳定性有明确要求的用户。\r
\r
---\r
\r`},{id:"quanqiu",rank:20,name:"全球云",aliases:["全球云（quanqiu）","全球云"],establishedYear:2023,summary:"全球云号称覆盖全球 60 多个节点，采用 Trojan 和 Shadowsocks 双协议，专线中转搭配 2Gbps+ 带宽资源，是这份榜单里节点规模比较大的一个，走的是专属客户端模式，下载 App 登录就能用，具体覆盖哪些平台以官网说明为准。20 元/月起的价格在专线机场推荐里属于中等偏上，胜在多地区节点和流媒体解锁能力比较全面，Netflix、Disney+、TikTok 等常见需求都能兼顾。如果你更看重节点数量和地区覆盖，而不是单纯追求最低价格，全球云值得放进对比名单，但具体节点速度还是建议实际测过再判断，官方数据仅供参考。",protocols:["Shadowsocks","VLESS","Trojan"],lineType:"全 IPLC 专线",startingPriceMonthly:8.25,customClient:!0,thirdPartySupport:!0,linkId:"link-quanqiu",categoryTag:"不限时与大流量备用",speedtestImage:"全球云-节点测速实测.png",unlockImages:null,sourceRef:"SRC-28-BRANDS #20",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 20. 全球云（quanqiu）\r
\r
**注册链接**：\`https://guangs.gcvipaff.com/#/?code=Ov2nvU9C\`\r
\r
基础信息\r
- 协议：Trojan / Shadowsocks\r
- 起步价：¥20/月起\r
- 优惠码：qq88；**折扣：**8折；**限制：**未标注。\r
- 使用方式：专属客户端，下载登录即用（不提供订阅链接）\r
核心特色\r
- IPLC/IEPL 专线中转，覆盖全球 60+ 节点\r
- 采用 Trojan 和 Shadowsocks 协议，提供 2Gbps+ 带宽资源\r
- 支持 Netflix、Disney+、TikTok 等主流流媒体及 ChatGPT\r
- 专属客户端下载登录即用，不用配订阅\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
BGP 智能优化·不限时轻量包	一次性付费	¥100	100GB	一次性\r
BGP 智能优化·不限时标准包	一次性付费	¥360	400GB	一次性\r
BGP 智能优化·不限时大容量包	一次性付费	¥700	800GB	一次性\r
轻量版	年付	¥99	59GB	每月\r
BGP 智能优化·入门方案	月付	¥20	120GB	每月\r
BGP 智能优化·进阶方案	月付	¥40	300GB	每月\r
BGP 智能优化·高端方案	月付	¥100	700GB	每月\r
BGP 智能优化·商业方案	月付	¥180	1500GB	每月\r
独享私人专线节点	月付	¥680	500GB	每月\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	25ms	489Mbps\r
台湾	37ms	117Mbps\r
新加坡	45ms	430Mbps\r
日本	55ms	133Mbps\r
美国	138ms	18Mbps\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify\r
- 视节点而定：Gemini\r
介绍说明：全球云号称覆盖全球 60 多个节点，采用 Trojan 和 Shadowsocks 双协议，专线中转搭配 2Gbps+ 带宽资源，是这份榜单里节点规模比较大的一个，走的是专属客户端模式，下载 App 登录就能用，具体覆盖哪些平台以官网说明为准。20 元/月起的价格在专线机场推荐里属于中等偏上，胜在多地区节点和流媒体解锁能力比较全面，Netflix、Disney+、TikTok 等常见需求都能兼顾。如果你更看重节点数量和地区覆盖，而不是单纯追求最低价格，全球云值得放进对比名单，但具体节点速度还是建议实际测过再判断，官方数据仅供参考。\r
\r
---\r
\r`},{id:"shandianshu",rank:21,name:"闪电鼠",aliases:["闪电鼠（shandianshu）","闪电鼠"],establishedYear:2024,summary:"闪电鼠 是一家运营成熟的跨境网络服务商，提供 IEPL 专线 + 企业级内网专线 架构与稳定出口支持。",protocols:["Shadowsocks","VLESS"],lineType:"IEPL 专线 + 企业级内网专线",startingPriceMonthly:5.6,customClient:!0,thirdPartySupport:!0,linkId:"link-shandianshu",categoryTag:"高性价比实用方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-28-BRANDS #21",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 21. 闪电鼠（shandianshu）\r
\r
**注册链接**：\`https://qwerty.shandianshuaff.com/#/?code=rUE75iYh\`\r
\r
**基础数据**：2024年运营 | 年付约5.6元/月 60GB/月 | 优惠码 \`sd88\`\r
\r
**品牌资料明确说了的**：\r
- IEPL专线\r
- VLESS 协议\r
- 年付约5.6元/月 60GB\r
- 自研客户端 + 第三方订阅导入\r
- **季付及以上 7 折**\r
\r
**与同类差异**：\r
- 5.6 元档是资料中最低价格区间\r
- 与大佬云、云界线、榴莲云、环球梯并列为"极限平价"\r
\r
**文末引导**：\r
> 闪电鼠是 5.6 元/月的极限平价档，提供 IEPL + VLESS + 60GB。如果你预算极其有限，它是 28 个品牌中门槛最低的之一。\r
\r
---\r
\r`},{id:"yunjiexian",rank:23,name:"云界线",aliases:["云界线（yunjiexian）","云界线"],establishedYear:2024,summary:"云界线 是一家运营成熟的跨境网络服务商，提供 IEPL 专线 + 企业级内网专线 架构与稳定出口支持。",protocols:["Shadowsocks","VLESS"],lineType:"IEPL 专线 + 企业级内网专线",startingPriceMonthly:5.6,customClient:!0,thirdPartySupport:!0,linkId:"link-yunjiexian",categoryTag:"高性价比实用方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-28-BRANDS #23",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 23. 云界线（yunjiexian）\r
\r
**注册链接**：\`https://qwerty.yunjiexianaff.com/?code=HBaZ91c6\`\r
\r
**基础数据**：2024年运营 | 年付约5.6元/月 60GB/月 | 优惠码 \`yjx888\`\r
\r
**品牌资料明确说了的**：\r
- IEPL专线\r
- VLESS 协议\r
- 年付约5.6元/月 60GB\r
- 自研客户端 + 第三方订阅导入\r
- 季付及以上 7 折\r
\r
**与同类差异**：\r
- 与闪电鼠、大佬云、榴莲云、环球梯规格几乎相同\r
- **联盟链接格式与其他品牌不同**（缺少 \`#\`）\r
\r
**文末引导**：\r
> 云界线是 5.6 元档的 IEPL + VLESS 方案。注意它的推广链接格式与其他品牌略有不同，注册前建议先确认链接是否正常。\r
\r
---\r
\r`},{id:"liulianyun",rank:24,name:"榴莲云",aliases:["榴莲云（liulianyun）","榴莲云"],establishedYear:2024,summary:"榴莲云 是一家运营成熟的跨境网络服务商，提供 IEPL 专线 + 企业级内网专线 架构与稳定出口支持。",protocols:["Shadowsocks","VLESS"],lineType:"IEPL 专线 + 企业级内网专线",startingPriceMonthly:5.6,customClient:!0,thirdPartySupport:!0,linkId:"link-liulianyun",categoryTag:"高性价比实用方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-28-BRANDS #24",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 24. 榴莲云（liulianyun）\r
\r
**注册链接**：\`https://qwerty.liulianyunaff.com#/?code=hS5pvbfE\`\r
\r
**基础数据**：2024年运营 | 年付约5.6元/月 60GB/月 | 优惠码 \`ll88\`\r
\r
**品牌资料明确说了的**：\r
- IEPL专线\r
- 年付约5.6元/月 60GB\r
- 自研客户端 + 第三方订阅导入\r
- 季付及以上 7 折\r
- **协议类型品牌资料未统一提供**\r
\r
**与同类差异**：\r
- 5.6 元档中**协议类型未明确**的品牌\r
- 与闪电鼠、大佬云、云界线、环球梯规格几乎相同\r
\r
**文末引导**：\r
> 榴莲云是 5.6 元档中唯一未明确标注协议类型的品牌。如果你只需要最低预算且不在意协议细节，可以用；如果你需要明确的 VLESS 协议，建议选闪电鼠或大佬云。\r
\r
---\r
\r`},{id:"shenxing",rank:25,name:"神行加速",aliases:["神行加速（shenxing）","神行加速"],establishedYear:2024,summary:"神行加速 是一家运营成熟的跨境网络服务商，提供 IEPL 专线 + 企业级内网专线 架构与稳定出口支持。",protocols:["Shadowsocks","VLESS"],lineType:"IEPL 专线 + 企业级内网专线",startingPriceMonthly:15,customClient:!0,thirdPartySupport:!0,linkId:"link-shenxing",categoryTag:"高性价比实用方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-28-BRANDS #25",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 25. 神行加速（shenxing）\r
\r
**注册链接**：\`https://qwerty.shenxingaff.com/#/?code=gawDQqVE\`\r
\r
**基础数据**：2024年运营 | 年付约14元/月 120GB/月 | 优惠码 \`xs0077\`\r
\r
**品牌资料明确说了的**：\r
- IEPL专线\r
- VLESS 协议\r
- 年付约14元/月 120GB\r
- 自研客户端 + 第三方订阅导入\r
- **新用户 7 折**\r
\r
**与同类差异**：\r
- 14 元档是"比 5.6 元多一档，比 20 元少一档"的中间选择\r
- 提供 120GB，是 5.6 元档（60GB）的两倍\r
\r
**文末引导**：\r
> 神行加速是 14 元档的方案，提供 120GB（是 5.6 元档 60GB 的两倍），适合年付且流量需求中等的用户。\r
\r
---\r
\r`},{id:"huanqiuti",rank:26,name:"环球梯",aliases:["环球梯（huanqiuti）","环球梯"],establishedYear:2024,summary:"环球梯 是一家运营成熟的跨境网络服务商，提供 IEPL 专线 + 企业级内网专线 架构与稳定出口支持。",protocols:["Shadowsocks","VLESS"],lineType:"IEPL 专线 + 企业级内网专线",startingPriceMonthly:5.6,customClient:!0,thirdPartySupport:!0,linkId:"link-huanqiuti",categoryTag:"高性价比实用方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-28-BRANDS #26",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 26. 环球梯（huanqiuti）\r
\r
**注册链接**：\`https://qwerty.huanqiutiaff.com/?code=9I4KRNPH\`\r
\r
**基础数据**：2024年运营 | 年付约5.6元/月 60GB/月 | 优惠码 \`HQ66\`\r
\r
**品牌资料明确说了的**：\r
- IEPL专线\r
- VLESS 协议\r
- 年付约5.6元/月 60GB\r
- 自研客户端 + 第三方订阅导入\r
- 季付及以上 7 折\r
- **联盟链接格式与其他品牌不同**（缺少 \`#\`）\r
\r
**与同类差异**：\r
- 与闪电鼠、大佬云、云界线、榴莲云规格几乎相同\r
- 链接格式异常\r
\r
**文末引导**：\r
> 环球梯是 5.6 元档的 IEPL + VLESS 方案。和云界线一样，它的推广链接格式与其他品牌略有不同，注册前建议确认链接可正常打开。\r
\r
---\r
\r`},{id:"yinxingren",rank:27,name:"隐形人",aliases:["隐形人（yinxingren）","隐形人"],establishedYear:2024,summary:"隐形人走企业级 IPLC 专线直连，官方称晚高峰零卡顿、秒开 4K/8K 流媒体。节点覆盖香港、日本、美国、新加坡、台湾，官方标注 Netflix、Disney+、YouTube、HBO Max、Spotify 和 ChatGPT 可用，TikTok 和 Claude 没有明确说法，Gemini 视节点而定。不限速，设备数量以套餐而定。它不提供订阅链接，只能用自带客户端，Clash、Shadowrocket 等第三方客户端用不了。年付小包 109 元一年、每月 80GB，折合每月约 9 元；月付档从 24 元 144GB 起，在本站收录里属于偏高的一档。优惠码 moon80 可打 8 折。官方没有提供试用。",protocols:["Shadowsocks","VLESS"],lineType:"全 IPLC 专线",startingPriceMonthly:9.08,customClient:!0,thirdPartySupport:!0,linkId:"link-yinxingren",categoryTag:"不限时与大流量备用",speedtestImage:null,unlockImages:null,sourceRef:"SRC-28-BRANDS #27",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`## 27. 隐形人（yinxingren）\r
\r
**注册链接**：\`https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT\`\r
\r
**基础数据**：2024年运营 | 24元/月 100GB/月 | 优惠码 \`yxr888\`\r
\r
基础信息\r
- 协议：未标注\r
- 起步价：¥9.08/月起\r
- 优惠码：moon80；**折扣：**8折；**限制：**未标注。\r
- 使用方式：专属客户端，下载登录即用（不提供订阅链接）\r
核心特色\r
- 企业级 IPLC 专线直连，官方称晚高峰零卡顿\r
- 官方标注可解锁 Netflix、HBO Max 等流媒体及 ChatGPT\r
- 全平台一键配置，多设备同时在线\r
- 自带客户端，不提供订阅链接\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
隐形人 白银纪元	月付	¥24	144GB	每月\r
隐形人 黄金序列	月付	¥48	360GB	每月\r
隐形人 铂金至臻	月付	¥105	750GB	每月\r
隐形人 钻石穹顶	月付	¥185	1.6TB	每月\r
王者定制版	月付	¥680	500GB	每月\r
星耀风暴 365天不熄	年付	¥109	80GB	每月\r
一次性小流量	一次性付费	¥229	160GB	一次性\r
一次性标准流量包	一次性付费	¥549	420GB	一次性\r
一次性精英流量包	一次性付费	¥1199	1.0TB	一次性\r
\r
\r
测速（2026-10-19 原文标注，非晚高峰）\r
节点	延迟	下载\r
香港	—	—\r
日本	—	—\r
美国	—	—\r
新加坡	—	—\r
台湾	—	—\r
\r
\r
流媒体 & AI 解锁\r
- 支持：ChatGPT、Netflix、Disney+、YouTube、HBO Max、Spotify\r
- 视节点而定：Claude、Gemini、TikTok\r
介绍说明：隐形人走企业级 IPLC 专线直连，官方称晚高峰零卡顿、秒开 4K/8K 流媒体。节点覆盖香港、日本、美国、新加坡、台湾，官方标注 Netflix、Disney+、YouTube、HBO Max、Spotify 和 ChatGPT 可用，TikTok 和 Claude 没有明确说法，Gemini 视节点而定。不限速，设备数量以套餐而定。它不提供订阅链接，只能用自带客户端，Clash、Shadowrocket 等第三方客户端用不了。年付小包 109 元一年、每月 80GB，折合每月约 9 元；月付档从 24 元 144GB 起，在本站收录里属于偏高的一档。优惠码 moon80 可打 8 折。官方没有提供试用。\r
---\r
\r`},{id:"tiziyun",rank:28,name:"梯子云",aliases:["梯子云（tiziyun）","梯子云"],establishedYear:2025,summary:"梯子云 是一家运营成熟的跨境网络服务商，提供 IEPL 专线 + 企业级内网专线 架构与稳定出口支持。",protocols:["Shadowsocks","VLESS"],lineType:"IEPL 专线 + 企业级内网专线",startingPriceMonthly:15,customClient:!0,thirdPartySupport:!0,linkId:"link-tiziyun",categoryTag:"不限时与大流量备用",speedtestImage:null,unlockImages:null,sourceRef:"SRC-28-BRANDS #28",verifiedAt:"2026-10-21",isActive:!0,rawBlock:'## 28. 梯子云（tiziyun）\r\n\r\n**注册链接**：`https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0`\r\n\r\n**基础数据**：2025年运营 | 年付约7.4元/月 60GB/月 | 优惠码 `tiziyun`\r\n\r\n**品牌资料明确说了的**：\r\n- IEPL专线\r\n- VLESS 协议\r\n- **自研全平台客户端**（品牌资料强调"小白用户一键登录即可连接，零门槛上手"）\r\n- **支持通用订阅**\r\n- **60+ 节点**\r\n- **2Gbps+ 独立带宽**（含 500Mbps 级高峰冗余）\r\n- **覆盖香港、日本、新加坡、美国、台湾等核心枢纽**\r\n- **海外专业技术团队常驻维护**\r\n- **提供快速响应的在线客服与工单支持**\r\n- 品牌资料说"完美解锁 Netflix、Disney+、TikTok 及 ChatGPT / Claude 等高频 AI 生产力工具"\r\n\r\n**与同类差异**：\r\n- **唯一强调"小白一键登录零门槛"**的品牌（自研全平台客户端）\r\n- **同时提供自研客户端和通用订阅**（比隐形人更灵活）\r\n- 60+ 节点 + 2Gbps+ 独立带宽 + 500Mbps 高峰冗余\r\n\r\n**文末引导**：\r\n> 梯子云的最大特色是"自研全平台客户端 + 通用订阅双支持"，适合不想折腾客户端配置的新手。它同时具备 60+ 节点、2Gbps+ 独立带宽、500Mbps 高峰冗余，规格和隐形人接近，但隐形人不支持第三方订阅。\r\n\r\n---\r\n\r\n## 完整数据表（可直接复制）\r\n\r\n| # | 品牌 | 注册链接 | 优惠码 | 独有卖点 |\r\n|---|------|---------|--------|---------|\r\n| 1 | 光速云 | `https://sahude.gsyvipaff.com/#/?code=keqgvT5Y` | `AMM` | IEPL+企业内网双线路、3档套餐、11地区节点 |\r\n| 2 | 飞猫云 | `https://guangs.flycataff.com/#/?code=6uq0Xe9y` | `flycat888` | 7元档 + 8折 |\r\n| 3 | 微风网络 | `https://edp01.breezenetaff.com/#/?code=t3huofyI` | `flat888` | 7元档 + 9折 |\r\n| 4 | 星岛梦 | `https://guangs.xingdaomeng.com/#/?code=1TynBYnR` | `nmw888` | 2020年运营 + 不限时套餐 |\r\n| 5 | 无忧链接 | `https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL` | `wuyou666` | 订阅无需转换 + 6元轻量套餐 |\r\n| 6 | 二猫云 | `https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW` | `ermao5555` | 20元130GB |\r\n| 7 | 唯兔云 | `https://guangs.v2yunvipaff.com/#/?code=xIutqOBA` | `weitu666` | 60+节点 + 三网优化 + 智能负载均衡 |\r\n| 8 | Firefly | `https://vip02.fireflyaff.com/#/?code=2n7VURre` | `firefly` | IPLC + 6档套餐 + 免翻墙访问官网 |\r\n| 9 | 暮光加速 | `https://varnexa.twilightaff.com/#/?code=D1LHglg3` | `muguang5555` | 无明确独有卖点 |\r\n| 10 | 宇宙云 | `https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1` | `YUZHOU553` | IEPL+VLESS+自研客户端 |\r\n| 11 | U1S1 | `https://guangs.vipaff.cc/#/?code=xhX5X22f` | `akaka` | 20元120GB 标准方案 |\r\n| 12 | 灵猫网络 | `https://vip01.civetnet.com/#/?code=8MIAyxak` | `lmao888` | 19元150GB + 不限时套餐 |\r\n| 13 | 极连云 | `https://guangs.jlyvipaff.com/#/?code=VM1rKGUu` | `ji8888` | 18元100GB + 品牌资料说覆盖AI |\r\n| 14 | 光年梯 | `https://guangs.gntaff.com/#/?code=X1FoxjGE` | `gnt6666` | 18元110GB |\r\n| 15 | 一翻云 | `https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r` | `yfy6666` | 20元150GB |\r\n| 16 | SOGO云 | `https://guangs.sogoyunaff.cc/#/?code=327Vs0w7` | `sss777` | 2026年新品牌 |\r\n| 17 | 可信云 | `https://guangs.kosingaff.com/#/register?code=UYDtNlCY` | `kkk333` | 品牌资料诚实标注数据缺口 |\r\n| 18 | 速界 | `https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB` | `sss1111` | 品牌资料强调AI工具 |\r\n| 19 | 闪跃 | `https://vip02.flashleapaff.com/#/?code=3lgzm9mm` | `shanyue` | 24元150GB |\r\n| 20 | 全球云 | `https://guangs.gcvipaff.com/#/?code=Ov2nvU9C` | `qqy7777` | 2026年新品牌 |\r\n| 21 | 闪电鼠 | `https://qwerty.shandianshuaff.com/#/?code=rUE75iYh` | `sd88` | 5.6元/月 + 60GB |\r\n| 22 | 大佬云 | `https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN` | `dly888` | 5.6元/月 + 60GB |\r\n| 23 | 云界线 | `https://qwerty.yunjiexianaff.com/?code=HBaZ91c6` | `yjx888` | 5.6元/月 + 60GB（链接格式异常） |\r\n| 24 | 榴莲云 | `https://qwerty.liulianyunaff.com#/?code=hS5pvbfE` | `ll88` | 5.6元/月 + 60GB（协议未明） |\r\n| 25 | 神行加速 | `https://qwerty.shenxingaff.com/#/?code=gawDQqVE` | `xs0077` | 14元/月 + 120GB |\r\n| 26 | 环球梯 | `https://qwerty.huanqiutiaff.com/?code=9I4KRNPH` | `HQ66` | 5.6元/月 + 60GB（链接格式异常） |\r\n| 27 | 隐形人 | `https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT` | `yxr888` | 60+节点详细清单 + 1小时修复承诺 + 不提供第三方订阅 |\r\n| 28 | 梯子云 | `https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0` | `tiziyun` | 自研全平台客户端 + 一键登录 + 支持通用订阅 |\r\n\r\n---\r\n\r\n## 合规提醒\r\n\r\n**所有注册链接必须**：\r\n1. 统一使用 `target="_blank" rel="nofollow sponsored noopener"`\r\n2. 在链接附近标注「含推广链接，通过链接注册可能为本站带来佣金，不影响用户支付价格」\r\n3. 不得硬编码在 Markdown 中，必须从 `links.ts` 或 `brands.json` 统一读取\r\n4. 部署前用脚本扫描全站，确认无遗漏\r\n\r\n**品牌方说的内容必须标注**：\r\n- 如隐形人的「1小时修复承诺」「完美解锁」、梯子云的「完美解锁」、Firefly 的「不限速」等，必须加「品牌资料显示」前缀 + `dataStatus: vendor`\r\n\r\n---\r\n\r\n需要我把这份材料整理成 `brands.json` 的完整数据文件格式吗？'},{id:"wgetcloud",rank:100,name:"WgetCloud",aliases:["WgetCloud","WgetCloud"],establishedYear:2021,summary:"WgetCloud 具备高带宽与低延迟特性，覆盖主流跨国办公与影音需求。",protocols:["Trojan","Shadowsocks"],lineType:"企业级专线 / 华为云 BGP 跨境骨干",startingPriceMonthly:99,customClient:!1,thirdPartySupport:!0,linkId:"link-wgetcloud",categoryTag:"华为云高端专线旗舰",speedtestImage:null,unlockImages:null,sourceRef:"SRC-14-BRANDS #1",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`WgetCloud\r
基础信息\r
- 资料更新时间：2026-08-24（历史项目记录）\r
- 协议记录：trojan\r
- 最低报价：未有可直接月付的明确报价\r
- 保存的入口或推广链接：https://invite.wgetcloud.ltd/auth/register?code=VLG2xb\r
- 节点涉及地区：香港、台湾、新加坡、日本、美国、韩国、马来西亚、泰国、菲律宾、印尼、印度、澳大利亚、加拿大、巴西、英国（节选，非实时可用性确认）\r
核心特色\r
- 2026-05-02 的这一次测速覆盖 59 个节点，全部取得非零下载速度。\r
- 五个多节点地区的平均下载都在 50 MB/s 以上：日本 57.75 MB/s、美国 55.00 MB/s、香港 53.90 MB/s、新加坡 52.87 MB/s、台湾 50.96 MB/s。\r
- 香港平均 TLS RTT 25.9 ms、台湾 41.3 ms、新加坡 55.6 ms，亚洲近端延迟较低。\r
- 美国 9 个节点即使在 170.2 ms 的平均 TLS RTT 下仍跑出 55.00 MB/s 平均下载。\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
基础专线服务	季付	¥297	230GB/月	每月\r
优质专线服务	季付	¥327	250GB/月	每月\r
精品专线服务	季付	¥357	270GB/月	每月\r
\r
套餐日期以旧数据为准；请在官网重新核对，未应用折扣。\r
\r
测速（历史记录）\r
节点地区	统计延迟	统计下载	测试日期\r
日本	69.4ms	462.04Mbps	2026-05-02\r
美国	170.2ms	440.04Mbps	2026-05-02\r
香港	25.9ms	431.24Mbps	2026-05-02\r
新加坡	55.6ms	422.97Mbps	2026-05-02\r
台湾	41.3ms	407.66Mbps	2026-05-02\r
印度	95ms	341.92Mbps	2026-05-02\r
印尼	88ms	318.64Mbps	2026-05-02\r
\r
\r
这些是旧资料保存的地区统计值，不是单节点测速、不是 2026-10-19 新测，不代表实时速度。\r
\r
流媒体 & AI 解锁\r
- AI：OpenAI / ChatGPT：部分节点可用（2026-05-02）；Gemini：部分节点可用（2026-05-02）\r
- 流媒体：Disney+：部分节点可用（2026-05-02）；Netflix：部分节点可用（2026-05-02）；YouTube：部分节点可用（2026-05-02）\r
只反映当次历史测试结果，不保证现时可用。\r
\r
介绍说明\r
\r
WgetCloud是一项网络代理服务。当前资料整理了 3 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-05-02 的实测资料；测试结果只代表当次环境，不等于长期在线率。\r
\r
待核实信息\r
- 当前运营、套餐价格、购买周期及优惠码。\r
- 历史测速的网络环境与实时体验不可直接比较。\r
\r
\r`},{id:"baiyueguang",rank:101,name:"白月光",aliases:["白月光","白月光"],establishedYear:2021,summary:"白月光是一项网络代理服务。当前资料整理了 6 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-07-17 的实测资料；测试结果只代表当次环境，不等于长期在线率。",protocols:["Shadowsocks","Trojan","VLESS"],lineType:"企业级专线 / 华为云 BGP 跨境骨干",startingPriceMonthly:22,customClient:!1,thirdPartySupport:!0,linkId:"link-baiyueguang",categoryTag:"大流量平价多档方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-14-BRANDS #2",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`白月光\r
基础信息\r
- 资料更新时间：2026-08-24（历史项目记录）\r
- 协议记录：shadowsocks\r
- 最低报价：未有可直接月付的明确报价\r
- 保存的入口或推广链接：https://www.sibker.com/register?invite_code=gg6puAId\r
- 节点涉及地区：香港、美国、日本、台湾、新加坡、加拿大、韩国、越南、柬埔寨、马来西亚、泰国、印度、孟加拉、尼泊尔、菲律宾（节选，非实时可用性确认）\r
核心特色\r
- 季付入门档 66 元含每月 100GB，一次性支出门槛相对不高。\r
- 2026-07-17 的这一次测速覆盖 108 个节点，节点名称涉及 79 个地区，地区名目非常多。\r
- 香港 10 个节点全部取得非零速度，平均下载 14.37 MB/s、平均 TLS RTT 160.7 ms，是本次五个多节点地区里最好的一组。\r
- 马来西亚（16.18 MB/s）、泰国（15.50 MB/s）、日本（最高 14.17 MB/s）等亚洲近端节点本次速度较高。\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
小包	季付	¥66	每月100GB高速流量	每月\r
中包	季付	¥126	每月250GB高速流量	每月\r
大包	季付	¥156	每月400GB高速流量	每月\r
超大包	季付	¥216	每月750GB高速流量	每月\r
不差钱	季付	¥231	每月900GB高速流量	每月\r
旗舰包	年付	¥2500	每月2500GB超大流量	每月\r
\r
套餐日期以旧数据为准；请在官网重新核对，未应用折扣。\r
\r
测速（历史记录）\r
节点地区	统计延迟	统计下载	测试日期\r
香港	160.7ms	114.94Mbps	2026-07-17\r
美国	302.6ms	70.53Mbps	2026-07-17\r
日本	202.4ms	77.65Mbps	2026-07-17\r
台湾	—	0.03Mbps	2026-07-17\r
新加坡	186.8ms	85.22Mbps	2026-07-17\r
加拿大	344ms	62Mbps	2026-07-17\r
韩国	358ms	31.28Mbps	2026-07-17\r
\r
这些是旧资料保存的地区统计值，不是单节点测速、不是 2026-10-19 新测，不代表实时速度。\r
\r
流媒体 & AI 解锁\r
- AI：ChatGPT / OpenAI：部分节点可用（2026-07-17）\r
- 流媒体：Netflix：部分节点可用（2026-07-17）；YouTube：部分节点可用（2026-07-17）；Bilibili：部分节点可用（2026-07-17）；HBO Max：部分节点可用（2026-07-17）；Disney+：部分节点可用（2026-07-17）；TVBAnywhere：部分节点可用（2026-07-17）；TikTok：部分节点可用（2026-07-17）；Spotify：该次测试失败（2026-07-17）\r
只反映当次历史测试结果，不保证现时可用。\r
\r
介绍说明\r
白月光是一项网络代理服务。当前资料整理了 6 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-07-17 的实测资料；测试结果只代表当次环境，不等于长期在线率。\r
\r
待核实信息\r
- 当前运营、套餐价格、购买周期及优惠码。\r
- 历史测速的网络环境与实时体验不可直接比较。\r
\r
\r
\r`},{id:"flyingbird",rank:102,name:"FlyingBird",aliases:["FlyingBird","FlyingBird"],establishedYear:2021,summary:"FlyingBird 具备高带宽与低延迟特性，覆盖主流跨国办公与影音需求。",protocols:["Shadowsocks","Trojan","VLESS"],lineType:"全专线 IPLC 骨干网",startingPriceMonthly:6.42,customClient:!1,thirdPartySupport:!0,linkId:null,categoryTag:"老牌全专线无倍率方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-14-BRANDS #3",verifiedAt:"2026-10-21",isActive:!0,rawBlock:` FlyingBird\r
基础信息\r
- 来源资料（历史）：2026-08-09 的品牌库记录。\r
- 品牌入口（保存的入口或推广地址，不保证当前有效）：未提供独立品牌入口。\r
- 定位／线路：多个老牌机场融合衍生；全专线 IPLC；SS 机场；无倍率不限速；「买多少给多少」活动\r
- 优惠码：theo（9 折，每用户一次）/ year85（年付 85 折，可用 5 次）；季 9 / 半 85 / 年 8 折，最高约 64 折\r
- 支付方式（历史资料）：支付宝 / USDT（无微信）\r
核心特色\r
- 全专线 IPLC 与无倍率定位\r
- 套餐档位和周期选择完整\r
- 支持支付宝与 USDT。\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
青铜套餐	月付	¥15	100G	每月\r
青铜套餐	季付	¥41	100G	每月\r
青铜套餐	半年付	¥77	100G	每月\r
青铜套餐	年付	¥144	100G	每月\r
白银套餐	月付	¥30	200G	每月\r
白银套餐	季付	¥81	200G	每月\r
白银套餐	半年付	¥153	200G	每月\r
白银套餐	年付	¥288	200G	每月\r
黄金套餐	月付	¥75	500G	每月\r
黄金套餐	季付	¥203	500G	每月\r
黄金套餐	半年付	¥383	500G	每月\r
黄金套餐	年付	¥720	500G	每月\r
钻石套餐	月付	¥150	1000G	每月\r
钻石套餐	季付	¥405	1000G	每月\r
钻石套餐	半年付	¥765	1000G	每月\r
钻石套餐	年付	¥1440	1000G	每月\r
\r
此表展开了历史资料已列出的各种付费周期；计费价格以当时记录为准，并非实时优惠价。\r
\r
测速\r
\r
未提供可比的逐地区测速数据。\r
\r
流媒体 & AI 解锁\r
- 未提供具体 AI / 流媒体的独立逐项测试结果；不能推断支持。\r
介绍说明\r
\r
飞鸟机场以 Shadowsocks、全专线 IPLC、无倍率和不限速为主要卖点，套餐覆盖多档长期订阅。资料显示它是一云梯/飞鸟同源站群的核心品牌之一。\r
\r
待核实信息\r
- 当前官网套餐与付款周期；优惠码和独立品牌入口是否仍有效。\r
- 当前协议、线路、AI 和流媒体解锁与近 30 日测速。\r`},{id:"cyberguard",rank:103,name:"CyberGuard",aliases:["29. CyberGuard","CyberGuard"],establishedYear:2021,summary:"CyberGuard 具备高带宽与低延迟特性，覆盖主流跨国办公与影音需求。",protocols:["Trojan","Shadowsocks"],lineType:"企业级专线 / 华为云 BGP 跨境骨干",startingPriceMonthly:7.92,customClient:!1,thirdPartySupport:!0,linkId:"link-cyberguard",categoryTag:"专线高稳企业方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-14-BRANDS #4",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`29. CyberGuard\r
基础信息\r
- 资料更新时间：2026-08-23（历史项目记录）\r
- 协议记录：trojan/vless\r
- 最低报价：¥32/月（旧资料口径）\r
- 保存的入口或推广链接：https://cyberguard.best/#/register?code=AxXNNYng\r
- 节点涉及地区：日本、美国、澳大利亚、韩国、德国、法国、阿联酋、英国、印度、台湾、香港、新加坡（节选，非实时可用性确认）\r
核心特色\r
- 月付 32 元即可获得 350GB 基础流量，价格门槛较低。\r
- 半年付轻量套餐 95 元折合约 15.83 元/月，付款周期可选月付、半年、一年等多档。\r
- 另有两档一次性不限时流量包（220GB / 840GB），适合不想按月续订的用户。\r
- 2025-06-21 的历史测速覆盖 12 个地区、29 个节点，地区范围较丰富。\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
150G｜轻量套餐	半年付	¥95	150GB/月	每月\r
350G｜标准套餐	月付	¥32	350GB/月	每月\r
650G｜高速套餐	月付	¥55	650GB/月	每月\r
220G流量包｜不限时	一次性付费	¥79	220GB	一次性（具体有效期待核实）\r
840G流量包｜不限时	一次性付费	¥188	840GB	一次性（具体有效期待核实）\r
2050G｜企业套餐	月付	¥200	2050GB/月	每月\r
\r
套餐日期以旧数据为准；请在官网重新核对，未应用折扣。\r
\r
测速（历史记录）\r
节点地区	统计延迟	统计下载	测试日期\r
日本	123.8ms	488.83Mbps	2025-06-21\r
美国	614ms	245.6Mbps	2025-06-21\r
澳大利亚	277ms	279.64Mbps	2025-06-21\r
韩国	6000ms	552.8Mbps	2025-06-21\r
德国	390.5ms	159.96Mbps	2025-06-21\r
法国	384ms	204.08Mbps	2025-06-21\r
阿联酋	345ms	342.76Mbps	2025-06-21\r
\r
这些是旧资料保存的地区统计值，不是单节点测速、不是 2026-10-19 新测，不代表实时速度。\r
\r
流媒体 & AI 解锁\r
- AI：ChatGPT：可用（该次测试）（2025-06-21）；Claude：可用（该次测试）（2025-06-21）；Gemini：可用（该次测试）（2025-06-21）\r
- 流媒体：Netflix：可用（该次测试）（2025-06-21）；Disney+：可用（该次测试）（2025-06-21）；Max / HBO：可用（该次测试）（2025-06-21）；TikTok：可用（该次测试）（2025-06-21）\r
只反映当次历史测试结果，不保证现时可用。\r
\r
介绍说明\r
\r
CyberGuard是一项网络代理服务。当前资料整理了 6 档套餐，最低真实月付价为 ¥32。本站保留了 2025-06-21 的实测资料；测试结果只代表当次环境，不等于长期在线率。\r
\r
待核实信息\r
- 当前运营、套餐价格、购买周期及优惠码。\r
- 历史测速的网络环境与实时体验不可直接比较\r
\r
\r
\r`},{id:"totoro",rank:104,name:"龙猫云",aliases:["龙猫云","龙猫云"],establishedYear:2021,summary:"龙猫云 具备高带宽与低延迟特性，覆盖主流跨国办公与影音需求。",protocols:["Shadowsocks","Trojan","VLESS"],lineType:"全专线 IPLC 骨干网",startingPriceMonthly:6.42,customClient:!1,thirdPartySupport:!0,linkId:null,categoryTag:"轻量灵活备用方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-14-BRANDS #5",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`龙猫云\r
基础信息\r
- 来源资料（历史）：2026-08-09 的品牌库记录。\r
- 品牌入口（保存的入口或推广地址，不保证当前有效）：未提供独立品牌入口。\r
- 定位／线路：SS + IPLC 全专线；最高 2000Mbps；现有资料记录（未独立实测）机场主技术背景已移民海外；教程完善\r
- 优惠码：无；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折\r
- 支付方式（历史资料）：支付宝 / 微信 / USDT\r
核心特色\r
- SS + IPLC 全专线定位\r
- 套餐和教程资料较完整\r
- 覆盖常规订阅与长期使用场景。\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
VIP1	月付	¥15	100G	每月\r
VIP1	季付	¥41	100G	每月\r
VIP1	半年付	¥77	100G	每月\r
VIP1	年付	¥144	100G	每月\r
VIP2	月付	¥30	200G	每月\r
VIP2	季付	¥81	200G	每月\r
VIP2	半年付	¥153	200G	每月\r
VIP2	年付	¥288	200G	每月\r
VIP3	月付	¥60	400G	每月\r
VIP3	季付	¥162	400G	每月\r
VIP3	半年付	¥306	400G	每月\r
VIP3	年付	¥576	400G	每月\r
VIP4	月付	¥120	1000G	每月\r
VIP4	季付	¥324	1000G	每月\r
VIP4	半年付	¥697	1000G	每月\r
VIP4	年付	¥1152	1000G	每月\r
\r
此表展开了历史资料已列出的各种付费周期；计费价格以当时记录为准，并非实时优惠价。\r
\r
测速\r
\r
未提供可比的逐地区测速数据。\r
\r
流媒体 & AI 解锁\r
- 未提供具体 AI / 流媒体的独立逐项测试结果；不能推断支持。\r
介绍说明\r
\r
龙猫云以 Shadowsocks 和 IPLC 全专线为主要定位，原资料记载最高 2000Mbps，并提供较完整的使用教程。它已被站长核实为一云梯/飞鸟同源站群成员。\r
\r
待核实信息\r
- 当前官网套餐与付款周期；优惠码和独立品牌入口是否仍有效。\r
- 当前协议、线路、AI 和流媒体解锁与近 30 日测速。\r
\r
\r
\r`},{id:"fatcat",rank:105,name:"FATCAT",aliases:["FATCAT","FATCAT"],establishedYear:2021,summary:"FATCAT 具备高带宽与低延迟特性，覆盖主流跨国办公与影音需求。",protocols:["Shadowsocks","Trojan","VLESS"],lineType:"全专线 IPLC 骨干网",startingPriceMonthly:8,customClient:!1,thirdPartySupport:!0,linkId:null,categoryTag:"专线高稳企业方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-14-BRANDS #6",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`FATCAT\r
基础信息\r
- 来源资料（历史）：2026-08-09 的品牌库记录。\r
- 品牌入口（保存的入口或推广地址，不保证当前有效）：未提供独立品牌入口。\r
- 定位／线路：企业级 IEPL / IPLC 内网专线，抗干扰抗封锁\r
- 优惠码：无；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折\r
- 支付方式（历史资料）：支付宝 / 微信 / USDT\r
核心特色\r
- IEPL/IPLC 内网专线定位\r
- 年付和多流量档位可选\r
- 支持支付宝、微信与 USDT。\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
年付加强版	年付	¥96	60G	每月\r
基础套餐	月付	¥20	120G	每月\r
基础套餐	季付	¥54	120G	每月\r
基础套餐	半年付	¥102	120G	每月\r
基础套餐	年付	¥192	120G	每月\r
标准套餐	月付	¥40	300G	每月\r
标准套餐	季付	¥108	300G	每月\r
标准套餐	半年付	¥204	300G	每月\r
标准套餐	年付	¥384	300G	每月\r
旗舰套餐	月付	¥100	700G	每月\r
旗舰套餐	季付	¥270	700G	每月\r
旗舰套餐	半年付	¥510	700G	每月\r
旗舰套餐	年付	¥960	700G	每月\r
企业套餐	月付	¥180	1500G	每月\r
企业套餐	季付	¥486	1500G	每月\r
企业套餐	半年付	¥918	1500G	每月\r
企业套餐	年付	¥1728	1500G	每月\r
\r
此表展开了历史资料已列出的各种付费周期；计费价格以当时记录为准，并非实时优惠价。\r
\r
测速\r
\r
未提供可比的逐地区测速数据。\r
\r
流媒体 & AI 解锁\r
- 未提供具体 AI / 流媒体的独立逐项测试结果；不能推断支持。\r
介绍说明\r
\r
肥猫云以企业级 IEPL/IPLC 内网专线为主要定位，强调抗干扰和抗封锁，套餐包含年付加强版及多档流量。\r
\r
待核实信息\r
- 当前官网套餐与付款周期；优惠码和独立品牌入口是否仍有效。\r
- 当前协议、线路、AI 和流媒体解锁与近 30 日测速。\r
\r
\r
\r
\r`},{id:"tntcloud",rank:106,name:"TNTCloud",aliases:["TNTCloud","TNTCloud"],establishedYear:2021,summary:"TNTCloud 具备高带宽与低延迟特性，覆盖主流跨国办公与影音需求。",protocols:["Shadowsocks","Trojan","VLESS"],lineType:"全专线 IPLC 骨干网",startingPriceMonthly:4.67,customClient:!1,thirdPartySupport:!0,linkId:null,categoryTag:"专线高稳企业方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-14-BRANDS #7",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`TNTCloud\r
基础信息\r
- 来源资料（历史）：2026-08-09 的品牌库记录。\r
- 品牌入口（保存的入口或推广地址，不保证当前有效）：未提供独立品牌入口。\r
- 定位／线路：IPLC 内网专线（曾用名 3A 加速器 / AAA Speed）；老牌分站团队；2000Mbps；特色季付限量包；跨境电商/TikTok 直播定制\r
- 优惠码：TNT85（85 折，限量包不支持）；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折\r
- 支付方式（历史资料）：支付宝 / 微信 / USDT\r
核心特色\r
- IPLC 内网专线定位\r
- 季付限量包与常规套餐\r
- 支持跨境电商和直播定制。\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
轻量包	季付	¥30	60G	每月\r
轻量包	半年付	¥56	60G	每月\r
轻量包	年付	¥98	60G	每月\r
VIP1	月付	¥20	110G	每月\r
VIP1	季付	¥54	110G	每月\r
VIP1	半年付	¥102	110G	每月\r
VIP1	年付	¥192	110G	每月\r
VIP2	月付	¥40	220G	每月\r
VIP2	季付	¥108	220G	每月\r
VIP2	半年付	¥204	220G	每月\r
VIP2	年付	¥336	220G	每月\r
VIP3	月付	¥80	460G	每月\r
VIP3	季付	¥216	460G	每月\r
VIP3	半年付	¥408	460G	每月\r
VIP3	年付	¥768	460G	每月\r
VIP4	月付	¥160	1100G	每月\r
VIP4	季付	¥432	1100G	每月\r
VIP4	半年付	¥816	1100G	每月\r
VIP4	年付	¥1536	1100G	每月\r
\r
此表展开了历史资料已列出的各种付费周期；计费价格以当时记录为准，并非实时优惠价。\r
\r
测速\r
\r
未提供可比的逐地区测速数据。\r
\r
流媒体 & AI 解锁\r
- 未提供具体 AI / 流媒体的独立逐项测试结果；不能推断支持。\r
介绍说明\r
\r
TNT Cloud 以 IPLC 内网专线为主要定位，曾用名 3A 加速器/AAA Speed，资料记载 2000Mbps，并提供季付限量包及跨境电商、TikTok 直播定制。\r
\r
待核实信息\r
- 当前官网套餐与付款周期；优惠码和独立品牌入口是否仍有效。\r
- 当前协议、线路、AI 和流媒体解锁与近 30 日测速。\r
\r
\r
\r
\r`},{id:"qingyunti",rank:107,name:"青云梯",aliases:["青云梯","青云梯"],establishedYear:2021,summary:"青云梯 具备高带宽与低延迟特性，覆盖主流跨国办公与影音需求。",protocols:["Shadowsocks","Trojan","VLESS"],lineType:"全专线 IPLC 骨干网",startingPriceMonthly:8,customClient:!1,thirdPartySupport:!0,linkId:null,categoryTag:"专线高稳企业方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-14-BRANDS #8",verifiedAt:"2026-10-21",isActive:!0,rawBlock:` 青云梯\r
基础信息\r
- 来源资料（历史）：2026-08-09 的品牌库记录。\r
- 品牌入口（保存的入口或推广地址，不保证当前有效）：未提供独立品牌入口。\r
- 定位／线路：运营 6 年以上老牌（曾用名 V4Speed）；SS + 企业级 IPLC；三网优化 + 智能负载均衡；现有资料记录（未独立实测）最高 6Gbps、10+ 地区 80+ 节点；支持企业定制\r
- 优惠码：qyt85（85 折）/ qyt80（8 折），年付小包不支持；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折\r
- 支付方式（历史资料）：支付宝 / 微信 / USDT\r
核心特色\r
- 运营时间和基础资料相对完整\r
- 企业级 IPLC、三网优化与多节点覆盖\r
- 常规套餐、长期折扣和企业定制齐全。\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
年付小包	年付	¥96	60G	每月\r
VIP1	月付	¥25	150G	每月\r
VIP1	季付	¥67	150G	每月\r
VIP1	半年付	¥127	150G	每月\r
VIP1	年付	¥240	150G	每月\r
VIP2	月付	¥45	300G	每月\r
VIP2	季付	¥121	300G	每月\r
VIP2	半年付	¥229	300G	每月\r
VIP2	年付	¥432	300G	每月\r
VIP3	月付	¥85	600G	每月\r
VIP3	季付	¥229	600G	每月\r
VIP3	半年付	¥433	600G	每月\r
VIP3	年付	¥816	600G	每月\r
VIP4	月付	¥150	1000G	每月\r
VIP4	季付	¥400	1000G	每月\r
VIP4	半年付	¥750	1000G	每月\r
VIP4	年付	¥1360	1000G	每月\r
\r
\r
此表展开了历史资料已列出的各种付费周期；计费价格以当时记录为准，并非实时优惠价。\r
\r
测速\r
\r
未提供可比的逐地区测速数据。\r
\r
流媒体 & AI 解锁\r
- 未提供具体 AI / 流媒体的独立逐项测试结果；不能推断支持。\r
介绍说明\r
\r
青云梯是运营六年以上的成熟品牌，原资料显示采用 SS 与企业级 IPLC、三网优化和智能负载均衡，并支持企业定制。现有资料记录（未独立实测）覆盖 10 多个地区、80 多个节点。\r
\r
待核实信息\r
- 当前官网套餐与付款周期；优惠码和独立品牌入口是否仍有效。\r
- 当前协议、线路、AI 和流媒体解锁与近 30 日测速。\r
\r
\r
\r
\r`},{id:"shanshuiyun",rank:108,name:"山水云",aliases:["山水云","山水云"],establishedYear:2021,summary:"山水云 具备高带宽与低延迟特性，覆盖主流跨国办公与影音需求。",protocols:["Shadowsocks","Trojan","VLESS"],lineType:"企业级专线 / 华为云 BGP 跨境骨干",startingPriceMonthly:7.33,customClient:!1,thirdPartySupport:!0,linkId:"link-shanshuiyun",categoryTag:"专线高稳企业方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-14-BRANDS #9",verifiedAt:"2026-10-21",isActive:!0,rawBlock:` 山水云\r
基础信息\r
- 资料更新时间：2026-08-24（历史项目记录）\r
- 协议记录：尚未核实\r
- 最低报价：¥15/月（旧资料口径）\r
- 保存的入口或推广链接：https://sldm1.ssyylf.com/#/register?code=YD5iQ888\r
- 节点涉及地区：香港、日本、新加坡、美国、台湾、越南、泰国、英国、印度尼西亚、法国、德国、加拿大（节选，非实时可用性确认）\r
核心特色\r
- 月付入门档 15 元含每月 100GB，价格门槛较低，且三档月付流量梯度清楚（100GB / 200GB / 500GB）。\r
- 64G 轻量套餐一年只要 88 元，折合每月约 7.33 元，长周期单价较低。\r
- 2026-06-29 的这一次测速覆盖 27 个节点、12 个地区，其中 22 个取得非零下载速度。\r
- 美国 3 个节点平均下载 22.54 MB/s，是本次 12 个地区里最高的一组。\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
64G/轻量套餐	年付	¥88	64GB/月	每月\r
128G/轻量套餐	半年付	¥88	128GB/月	每月\r
256G/轻量套餐	季付	¥75	256GB/月	每月\r
100G/月-琴	月付	¥15	100GB/月	每月\r
200G/月-棋	月付	¥25	200GB/月	每月\r
500G/月-书	月付	¥50	500GB/月	每月\r
\r
套餐日期以旧数据为准；请在官网重新核对，未应用折扣。\r
\r
测速（历史记录）\r
节点地区	统计延迟	统计下载	测试日期\r
美国	349.3ms	180.29Mbps	2026-06-29\r
日本	229.8ms	160.51Mbps	2026-06-29\r
香港	151.4ms	152.86Mbps	2026-06-29\r
新加坡	179.8ms	142.98Mbps	2026-06-29\r
越南	232ms	87.68Mbps	2026-06-29\r
泰国	217ms	82Mbps	2026-06-29\r
英国	328ms	65.2Mbps	2026-06-29\r
\r
\r
这些是旧资料保存的地区统计值，不是单节点测速、不是 2026-10-19 新测，不代表实时速度。\r
\r
流媒体 & AI 解锁\r
- AI：ChatGPT：可用（该次测试）（2026-06-29）；Claude：可用（该次测试）（2026-06-29）；Gemini：可用（该次测试）（2026-06-29）\r
- 流媒体：Netflix：可用（该次测试）（2026-06-29）；Disney+：可用（该次测试）（2026-06-29）；Max/HBO：可用（该次测试）（2026-06-29）；TikTok：可用（该次测试）（2026-06-29）\r
只反映当次历史测试结果，不保证现时可用。\r
\r
介绍说明\r
\r
山水云是一项网络代理服务。当前资料整理了 6 档套餐，最低真实月付价为 ¥15。本站保留了 2026-06-29 的实测资料；测试结果只代表当次环境，不等于长期在线率。\r
\r
待核实信息\r
- 当前运营、套餐价格、购买周期及优惠码。\r
- 历史测速的网络环境与实时体验不可直接比较。\r
\r
\r
\r
\r`},{id:"lingdongyun",rank:109,name:"灵动云",aliases:["灵动云","灵动云"],establishedYear:2021,summary:"灵动云 具备高带宽与低延迟特性，覆盖主流跨国办公与影音需求。",protocols:["Trojan","Shadowsocks","VLESS"],lineType:"企业级 IEPL 专线",startingPriceMonthly:8.25,customClient:!1,thirdPartySupport:!0,linkId:null,categoryTag:"专线高稳企业方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-14-BRANDS #10",verifiedAt:"2026-10-21",isActive:!0,rawBlock:` 灵动云\r
基础信息\r
- 来源资料（历史）：2026-08-09 的品牌库记录。\r
- 品牌入口（保存的入口或推广地址，不保证当前有效）：https://varnexa.lingdongaff.com/#/?code=wZvEhEoI\r
- 定位／线路：2025 年开业专线机场；VLESS（实测；站点页面文案 VLESS/trojan 混提）；不限速不限设备\r
- 优惠码：优惠码尚未核实\r
- 支付方式（历史资料）：支付宝 / USDT（微信需客服）\r
核心特色\r
- IEPL/VLESS 与大流量套餐\r
- 单次流量包和私人定制齐全\r
- 现有实测中主流 AI 解锁表现较好。\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
灵动·拂风	月付	¥20	100G/月	每月\r
灵动·拂风	季付	¥57	100G/月	每月\r
灵动·拂风	半年付	¥108	100G/月	每月\r
灵动·拂风	年付	¥204	100G/月	每月\r
灵动·拂风	两年付	¥384	100G/月	每月\r
灵动·拂风	三年付	¥540	100G/月	每月\r
灵动·驭浪	月付	¥50	300G/月	每月\r
灵动·驭浪	季付	¥142.5	300G/月	每月\r
灵动·驭浪	半年付	¥270	300G/月	每月\r
灵动·驭浪	年付	¥510	300G/月	每月\r
灵动·驭浪	两年付	¥960	300G/月	每月\r
灵动·驭浪	三年付	¥1350	300G/月	每月\r
灵动·破晓	月付	¥100	700G/月	每月\r
灵动·破晓	季付	¥285	700G/月	每月\r
灵动·破晓	半年付	¥540	700G/月	每月\r
灵动·破晓	年付	¥1020	700G/月	每月\r
灵动·破晓	两年付	¥1920	700G/月	每月\r
灵动·破晓	三年付	¥2700	700G/月	每月\r
灵动·凌霄	月付	¥180	1.5T/月	每月\r
灵动·凌霄	季付	¥513	1.5T/月	每月\r
灵动·凌霄	半年付	¥972	1.5T/月	每月\r
灵动·凌霄	年付	¥1836	1.5T/月	每月\r
灵动·凌霄	两年付	¥3456	1.5T/月	每月\r
灵动·凌霄	三年付	¥4860	1.5T/月	每月\r
灵动·穿云	年付	¥99	70G/月	每月\r
灵动·闲云（小流量包）	一次性付费	¥199	150G	一次性（套餐内流量总额）\r
灵动·惊云（标准流量包）	一次性付费	¥499	400G	一次性（套餐内流量总额）\r
灵动·飞云（精英流量包）	一次性付费	¥899	800G	一次性（套餐内流量总额）\r
灵动云·至尊私人定制	月付	¥620	截图遮挡	每月\r
\r
\r
此表展开了历史资料已列出的各种付费周期；计费价格以当时记录为准，并非实时优惠价。\r
\r
测速\r
\r
（2026-07-20/21，珠海联通 9Gbps，60 测速 / 60 解锁）：速度够用级（20–80MB/s）、HTTPS 延迟偏高；OpenAI 各地区基本全解锁（亮点）；TikTok 多失败、新/台 YT 送中、美国01 整节点失败；台湾落地识别偏欧（NF/D+ 识别 ES）。\r
\r
流媒体 & AI 解锁\r
- 资料介绍：灵动云是 2025 年开业的 VLESS 专线机场，截图标注 IEPL，套餐覆盖 70G 年付、100G–1.5T 周期流量、单次流量包和私人定制。已有站长速度与解锁实测。\r
- 主要特点：IEPL/VLESS 与大流量套餐；单次流量包和私人定制齐全；现有实测中主流 AI 解锁表现较好。\r
- 测试摘要：（2026-07-20/21，珠海联通 9Gbps，60 测速 / 60 解锁）：速度够用级（20–80MB/s）、HTTPS 延迟偏高；OpenAI 各地区基本全解锁（亮点）；TikTok 多失败、新/台 YT 送中、美国01 整节点失败；台湾落地识别偏欧（NF/D+ 识别 ES）。\r
介绍说明\r
\r
灵动云是 2025 年开业的 VLESS 专线机场，截图标注 IEPL，套餐覆盖 70G 年付、100G–1.5T 周期流量、单次流量包和私人定制。已有站长速度与解锁实测。\r
\r
待核实信息\r
- 当前官网套餐与付款周期；优惠码和独立品牌入口是否仍有效。\r
- 当前协议、线路、AI 和流媒体解锁与近 30 日测速。\r
\r
\r
\r
\r`},{id:"langwang",rank:110,name:"浪网",aliases:["浪网","浪网"],establishedYear:2021,summary:"浪网 具备高带宽与低延迟特性，覆盖主流跨国办公与影音需求。",protocols:["Shadowsocks","Trojan","VLESS"],lineType:"企业级 IEPL 专线",startingPriceMonthly:9.92,customClient:!1,thirdPartySupport:!0,linkId:null,categoryTag:"专线高稳企业方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-14-BRANDS #11",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`浪网\r
基础信息\r
- 来源资料（历史）：2026-08-09 的品牌库记录。\r
- 品牌入口（保存的入口或推广地址，不保证当前有效）：https://varnexa.wavenetaff.com/#/?code=xwAM4tTd\r
- 定位／线路：IEPL 专线。\r
- 优惠码：优惠码尚未核实\r
核心特色\r
- IEPL 专线定位\r
- 入门到商业多价格层级\r
- 流量包和定制线路补充非标准需求。\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
浪网 高端	月付	¥120	800G	每月\r
浪网 高端	季付	¥342	800G	每月\r
浪网 高端	半年付	¥648	800G	每月\r
浪网 高端	年付	¥1224	800G	每月\r
浪网 高端	两年付	¥2304	800G	每月\r
浪网 高端	三年付	¥3240	800G	每月\r
浪网 商业	月付	¥200	2000G	每月\r
浪网 商业	季付	¥570	2000G	每月\r
浪网 商业	半年付	¥1080	2000G	每月\r
浪网 商业	年付	¥2040	2000G	每月\r
浪网 商业	两年付	¥3840	2000G	每月\r
浪网 商业	三年付	¥5400	2000G	每月\r
浪网 年付标准	年付	¥119	80G	每月\r
浪网 小流量包	一次性付费	¥239	180G	一次性（套餐内流量总额）\r
浪网 标准流量包	一次性付费	¥569	450G	一次性（套餐内流量总额）\r
浪网 定制线路包	月付	¥640	500G	每月\r
浪网 精英流量包	一次性付费	¥1099	900G	一次性（套餐内流量总额）\r
浪网 进阶	月付	¥70	450G	每月\r
浪网 进阶	季付	¥199.5	450G	每月\r
浪网 进阶	半年付	¥378	450G	每月\r
浪网 进阶	年付	¥714	450G	每月\r
浪网 进阶	两年付	¥1344	450G	每月\r
浪网 进阶	三年付	¥1890	450G	每月\r
浪网 入门	月付	¥30	截150G	每月\r
浪网 入门	季付	¥85.5	截150G	每月\r
浪网 入门	半年付	¥162	截150G	每月\r
浪网 入门	年付	¥306	截150G	每月\r
浪网 入门	两年付	¥576	截150G	每月\r
浪网 入门	三年付	¥810	截150G	每月\r
\r
此表展开了历史资料已列出的各种付费周期；计费价格以当时记录为准，并非实时优惠价。\r
\r
测速\r
\r
原资料标注未实测，无法给出按地区的速度、延迟或晚高峰结果。\r
\r
流媒体 & AI 解锁\r
- 尚缺字段：各档套餐流量、设备限制、节点地区、具体协议、支付方式、客户端、试用/退款规则、速度与解锁实测。\r
介绍说明\r
\r
浪网在截图中标注 IEPL 专线，提供入门、进阶、高端、商业周期档，以及年付标准、流量包和定制线路。套餐流量与设备限制被遮挡。\r
\r
待核实信息\r
- 当前官网套餐与付款周期；优惠码和独立品牌入口是否仍有效。\r
- 当前协议、线路、AI 和流媒体解锁与近 30 日测速。\r
\r
\r
\r
\r`},{id:"edgenova",rank:111,name:"EdgeNova",aliases:["EdgeNova","EdgeNova"],establishedYear:2021,summary:"EdgeNova 具备高带宽与低延迟特性，覆盖主流跨国办公与影音需求。",protocols:["Shadowsocks","Trojan","VLESS"],lineType:"全专线 IPLC 骨干网",startingPriceMonthly:9,customClient:!1,thirdPartySupport:!0,linkId:null,categoryTag:"专线高稳企业方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-14-BRANDS #12",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`EdgeNova\r
基础信息\r
- 来源资料（历史）：2026-08-09 的品牌库记录。\r
- 品牌入口（保存的入口或推广地址，不保证当前有效）：https://work.edgenovaaff.cc/#/register?code=cl3iB5YG\r
- 定位／线路：高速直连 / IPLC；多线路自动分配\r
- 优惠码：TH888（8 折）\r
- 支付方式（历史资料）：支付宝 / 微信 / USDT\r
核心特色\r
- 多线路自动分配定位\r
- 年付小包和多档流量可选\r
- 提供新用户优惠码。\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
限时月付	月付	¥15	72G	每月\r
限时年付	年付	¥108	45G	每月\r
极界·标准	月付	¥25	120G	每月\r
极界·标准	季付	¥70	120G	每月\r
极界·标准	半年付	¥130	120G	每月\r
极界·标准	年付	¥270	120G	每月\r
极界·进阶	月付	¥50	250G	每月\r
极界·进阶	季付	¥145	250G	每月\r
极界·进阶	半年付	¥280	250G	每月\r
极界·进阶	年付	¥570	250G	每月\r
极界·高级	月付	¥100	500G	每月\r
极界·高级	季付	¥290	500G	每月\r
极界·高级	半年付	¥580	500G	每月\r
极界·高级	年付	¥1100	500G	每月\r
极界·极限	月付	¥200	1000G	每月\r
极界·极限	季付	¥580	1000G	每月\r
极界·极限	半年付	¥1150	1000G	每月\r
极界·极限	年付	¥2300	1000G	每月\r
\r
\r
此表展开了历史资料已列出的各种付费周期；计费价格以当时记录为准，并非实时优惠价。\r
\r
测速\r
\r
未提供可比的逐地区测速数据。\r
\r
流媒体 & AI 解锁\r
- 未提供具体 AI / 流媒体的独立逐项测试结果；不能推断支持。\r
介绍说明\r
\r
边缘节点 EdgeNova 以高速直连、IPLC 和多线路自动分配为主要定位，套餐覆盖年付小包及多档常规流量，并支持主流国内支付与 USDT。\r
\r
待核实信息\r
- 当前官网套餐与付款周期；优惠码和独立品牌入口是否仍有效。\r
- 当前协议、线路、AI 和流媒体解锁与近 30 日测速。\r
\r
\r
\r
\r`},{id:"sslar",rank:113,name:"sslar",aliases:["sslar","sslar"],establishedYear:2021,summary:"sslar 具备高带宽与低延迟特性，覆盖主流跨国办公与影音需求。",protocols:["Shadowsocks","Trojan","VLESS","VLESS"],lineType:"企业级 IEPL 专线",startingPriceMonthly:7.25,customClient:!0,thirdPartySupport:!0,linkId:null,categoryTag:"专线高稳企业方案",speedtestImage:null,unlockImages:null,sourceRef:"SRC-14-BRANDS #14",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`sslar\r
基础信息\r
- 来源资料（历史）：2026-08-09 的品牌库记录。\r
- 品牌入口（保存的入口或推广地址，不保证当前有效）：未提供独立品牌入口。\r
- 定位／线路：企业级 IEPL + 多线 BGP；SS/VLESS 协议自适应；现有资料记录（未独立实测） Eons/Akari/DigitalOcean 机房；自研客户端（Win/mac/安卓）；支持远程桌面协助\r
- 优惠码：ko3eTt0w（8 折）；季 9 / 半 85 / 年 8 折，最高约 64 折\r
- 支付方式（历史资料）：支付宝 / 微信（现有资料未列 USDT）\r
核心特色\r
- 企业级 IEPL + 多线 BGP\r
- 自研多平台客户端并兼容多协议\r
- 支持远程桌面协助，适合商务用户。\r
套餐价格\r
套餐名称	计费方式	价格	流量	流量周期\r
Basic	月付	¥17	100G	每月\r
Basic	季付	¥46	100G	每月\r
Basic	半年付	¥87	100G	每月\r
Basic	年付	¥163	100G	每月\r
Standard	月付	¥28	200G	每月\r
Standard	季付	¥76	200G	每月\r
Standard	半年付	¥143	200G	每月\r
Standard	年付	¥268	200G	每月\r
Premium	月付	¥36	300G	每月\r
Premium	季付	¥97	300G	每月\r
Premium	半年付	¥183	300G	每月\r
Premium	年付	¥345	300G	每月\r
\r
此表展开了历史资料已列出的各种付费周期；计费价格以当时记录为准，并非实时优惠价。\r
\r
测速\r
\r
未提供可比的逐地区测速数据。\r
\r
流媒体 & AI 解锁\r
- 未提供具体 AI / 流媒体的独立逐项测试结果；不能推断支持。\r
介绍说明\r
\r
SSLAR 定位企业级 IEPL 与多线 BGP，支持 SS/VLESS 自适应，并提供 Windows、macOS、Android 自研客户端和远程协助。\r
\r
待核实信息\r
- 当前官网套餐与付款周期；优惠码和独立品牌入口是否仍有效。\r
- 当前协议、线路、AI 和流媒体解锁与近 30 日测速。\r
\r
\r
\r
`}],ve=[{id:"link-lightspeed",brandId:"lightspeed",url:"https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",code:"AMM",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-flycat",brandId:"flycat",url:"https://guangs.flycataff.com/#/?code=6uq0Xe9y",code:"flycat888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-breezenet",brandId:"breezenet",url:"https://edp01.breezenetaff.com/#/?code=t3huofyI",code:"flat888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-twilight",brandId:"twilight",url:"https://varnexa.twilightaff.com/#/?code=D1LHglg3",code:"muguang5555",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-dalaoyun",brandId:"dalaoyun",url:"https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",code:"dly888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-stardream",brandId:"stardream",url:"https://guangs.xingdaomeng.com/#/?code=1TynBYnR",code:"nmw888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-2mao",brandId:"2mao",url:"https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",code:"ermao5555",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-wuyou",brandId:"wuyou",url:"https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",code:"wuyou666",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-v2yun",brandId:"v2yun",url:"https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",code:"weitu666",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-firefly",brandId:"firefly",url:"https://vip02.fireflyaff.com/#/?code=2n7VURre",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-yuzhou",brandId:"yuzhou",url:"https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-u1s1",brandId:"u1s1",url:"https://guangs.vipaff.cc/#/?code=xhX5X22f",code:"akaka",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-lingmao",brandId:"lingmao",url:"https://vip01.civetnet.com/#/?code=8MIAyxak",code:"lmao888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-jilian",brandId:"jilian",url:"https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",code:"ji8888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-guangnian",brandId:"guangnian",url:"https://guangs.gntaff.com/#/?code=X1FoxjGE",code:"gnt6666",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-yifan",brandId:"yifan",url:"https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",code:"yfy6666",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-sogo",brandId:"sogo",url:"https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",code:"SOGO10000",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-kexin",brandId:"kexin",url:"https://guangs.kosingaff.com/#/register?code=UYDtNlCY",code:"kkk333",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-sujie",brandId:"sujie",url:"https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",code:"sss1111",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-shanyue",brandId:"shanyue",url:"https://vip02.flashleapaff.com/#/?code=3lgzm9mm",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-quanqiu",brandId:"quanqiu",url:"https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-shandianshu",brandId:"shandianshu",url:"https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",code:"sd88",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-yunjiexian",brandId:"yunjiexian",url:"https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",code:"yjx888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-liulianyun",brandId:"liulianyun",url:"https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",code:"ll88",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-shenxing",brandId:"shenxing",url:"https://qwerty.shenxingaff.com/#/?code=gawDQqVE",code:"xs0077",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-huanqiuti",brandId:"huanqiuti",url:"https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",code:"HQ66",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-yinxingren",brandId:"yinxingren",url:"https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",code:"yxr888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-tiziyun",brandId:"tiziyun",url:"https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",code:"tiziyun",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-wgetcloud",brandId:"wgetcloud",url:"https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明。"},{id:"link-baiyueguang",brandId:"baiyueguang",url:"https://www.sibker.com/register?invite_code=gg6puAId",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明。"},{id:"link-cyberguard",brandId:"cyberguard",url:"https://cyberguard.best/#/register?code=AxXNNYng",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明。"},{id:"link-shanshuiyun",brandId:"shanshuiyun",url:"https://sldm1.ssyylf.com/#/register?code=YD5iQ888",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明。"}],Wi={key:0,class:"brand-gallery-wrapper"},Ki={class:"gallery-toolbar"},Xi={class:"search-box"},Qi={class:"category-pills"},Ji=["onClick"],Zi={class:"speedtest-toggle"},es={class:"brand-grid"},ts={key:0,class:"card-top-badge"},ns={key:0,class:"speedtest-badge"},as={key:1,class:"unlock-badge"},rs={class:"card-header"},is={class:"brand-identity"},ss={class:"brand-avatar-box"},ls={class:"brand-initial"},os={class:"brand-titles"},cs={class:"brand-name"},ds=["href"],us={key:0,class:"brand-year"},fs={class:"brand-category-label"},ys={class:"price-tag"},ms={class:"price-val"},ps={class:"brand-summary"},gs={class:"card-specs"},vs={class:"spec-item"},hs={class:"spec-val"},bs={class:"spec-item"},Gs={class:"spec-val"},Is={class:"spec-item"},Cs={class:"spec-val"},Ps={class:"card-footer"},Bs={class:"footer-links"},ks=["href"],Ss={key:0,href:"/reviews/lightspeed/",class:"btn-review-special btn-sm"},Ts={class:"action-row"},Ms=["href","title"],_s={key:0,class:"empty-results"},Rs={key:1,class:"brand-card"},$s={key:0,class:"card-top-badge"},Ls={key:0,class:"speedtest-badge"},As={key:1,class:"unlock-badge"},ws={class:"card-header"},xs={class:"brand-identity"},Vs={class:"brand-avatar-box"},Es={class:"brand-initial"},Ns={class:"brand-titles"},Ds={class:"brand-name"},Os=["href"],Fs={key:0,class:"brand-year"},qs={class:"brand-category-label"},Us={class:"price-tag"},Hs={class:"price-val"},js={class:"brand-summary"},Ys={class:"card-specs"},zs={class:"spec-item"},Ws={class:"spec-val"},Ks={class:"spec-item"},Xs={class:"spec-val"},Qs={class:"card-footer"},Js=["href"],Zs=["href"],el=I({__name:"BrandCard",props:{brandId:{}},setup(t){const n=t,a=$(""),r=$("all"),s=$(!1),c=[{key:"all",label:"全部品牌"},{key:"top10",label:"⭐ 前十精选"},{key:"iepl",label:"🚀 IEPL/IPLC 专线"},{key:"budget",label:"💰 高性价比/低门槛"},{key:"backup",label:"📦 不限时/大流量备用"}];function o(S){return S==="all"?O.length:S==="top10"?O.filter(C=>C.rank<=10).length:S==="iepl"?O.filter(C=>C.lineType.includes("专线")||C.lineType.includes("IEPL")||C.lineType.includes("IPLC")).length:S==="budget"?O.filter(C=>C.startingPriceMonthly<=8.5).length:S==="backup"?O.filter(C=>C.categoryTag.includes("不限时")||C.categoryTag.includes("大流量")||C.categoryTag.includes("备用")).length:0}const f=P(()=>O.filter(S=>!!S.speedtestImage).length),u=P(()=>O.filter(S=>{var C;if(a.value){const k=a.value.toLowerCase().trim(),V=S.name.toLowerCase().includes(k),E=(C=S.aliases)==null?void 0:C.some(q=>q.toLowerCase().includes(k)),D=S.lineType.toLowerCase().includes(k);if(!V&&!E&&!D)return!1}return!(r.value==="top10"&&S.rank>10||r.value==="iepl"&&!S.lineType.includes("专线")&&!S.lineType.includes("IEPL")&&!S.lineType.includes("IPLC")||r.value==="budget"&&S.startingPriceMonthly>8.5||r.value==="backup"&&!S.categoryTag.includes("不限时")&&!S.categoryTag.includes("大流量")&&!S.categoryTag.includes("备用")||s.value&&!S.speedtestImage)}));function T(){a.value="",r.value="all",s.value=!1}function b(S){return ve.find(C=>C.brandId===S)}const g=P(()=>n.brandId?O.find(S=>S.id===n.brandId)||{id:n.brandId,name:n.brandId,rank:99,aliases:[],establishedYear:null,summary:"资料核验中",protocols:[],lineType:"标准网络",startingPriceMonthly:15,customClient:!1,thirdPartySupport:!0,categoryTag:"常规方案",speedtestImage:null,unlockImages:null}:null),G=P(()=>n.brandId?ve.find(S=>S.brandId===n.brandId):null);return(S,C)=>n.brandId?(i(),l("div",Rs,[g.value.rank<=10?(i(),l("div",$s,[e("span",{class:A(["rank-tag",g.value.rank===1?"gold-top":"blue-top"])},m(g.value.rank===1?"🏆 全站第一主推旗舰":`TOP ${g.value.rank} 推荐`),3),g.value.speedtestImage?(i(),l("span",Ls,"⚡ 含测速大图")):h("",!0),g.value.unlockImages?(i(),l("span",As,"🔓 含解锁图")):h("",!0)])):h("",!0),e("div",ws,[e("div",xs,[e("div",Vs,[e("span",Es,m(g.value.name.slice(0,1)),1)]),e("div",Ns,[e("h4",Ds,[e("a",{href:`/brands/${g.value.id}/`},m(g.value.name),9,Os),g.value.establishedYear?(i(),l("span",Fs,m(g.value.establishedYear)+"年运营",1)):h("",!0)]),e("div",qs,m(g.value.categoryTag),1)])]),e("div",Us,[e("span",Hs,"¥"+m(g.value.startingPriceMonthly.toFixed(2)),1),C[9]||(C[9]=e("span",{class:"price-unit"},"/月起",-1))])]),e("p",js,m(g.value.summary),1),e("div",Ys,[e("div",zs,[C[10]||(C[10]=e("span",{class:"spec-label"},"线路架构:",-1)),e("span",Ws,m(g.value.lineType),1)]),e("div",Ks,[C[11]||(C[11]=e("span",{class:"spec-label"},"支持协议:",-1)),e("span",Xs,m(g.value.protocols.join(", ")),1)])]),e("div",Qs,[e("a",{href:`/brands/${g.value.id}/`,class:"btn-outline btn-sm"},"查看完整档案与套餐",8,Js),G.value?(i(),l("a",{key:0,href:G.value.url,target:"_blank",rel:"nofollow sponsored noopener",class:"btn-primary btn-sm sponsored-btn"},[...C[12]||(C[12]=[F(" 官网直达 ",-1),e("span",{class:"sponsored-tag"},"推广",-1)])],8,Zs)):h("",!0)])])):(i(),l("div",Wi,[e("div",Ki,[e("div",Xi,[N(e("input",{"onUpdate:modelValue":C[0]||(C[0]=k=>a.value=k),type:"text",placeholder:"搜索品牌名称（如：光速云、飞猫、WgetCloud）...",class:"gallery-search-input"},null,512),[[ee,a.value]]),a.value?(i(),l("button",{key:0,class:"clear-search-btn",onClick:C[1]||(C[1]=k=>a.value="")},"✕")):h("",!0)]),e("div",Qi,[(i(),l(L,null,x(c,k=>e("button",{key:k.key,class:A(["cat-pill-btn",{active:r.value===k.key}]),onClick:V=>r.value=k.key},m(k.label)+" ("+m(o(k.key))+") ",11,Ji)),64))]),e("label",Zi,[N(e("input",{type:"checkbox","onUpdate:modelValue":C[2]||(C[2]=k=>s.value=k)},null,512),[[it,s.value]]),e("span",null,"⚡ 仅看有测速实测图 ("+m(f.value)+")",1)])]),e("div",es,[(i(!0),l(L,null,x(u.value,k=>(i(),l("div",{key:k.id,class:"brand-card"},[k.rank<=10?(i(),l("div",ts,[e("span",{class:A(["rank-tag",k.rank===1?"gold-top":"blue-top"])},m(k.rank===1?"🏆 全站第一主推旗舰":`TOP ${k.rank} 推荐`),3),k.speedtestImage?(i(),l("span",ns,"⚡ 含测速大图")):h("",!0),k.unlockImages?(i(),l("span",as,"🔓 含解锁图")):h("",!0)])):h("",!0),e("div",rs,[e("div",is,[e("div",ss,[e("span",ls,m(k.name.slice(0,1)),1)]),e("div",os,[e("h4",cs,[e("a",{href:`/brands/${k.id}/`},m(k.name),9,ds),k.establishedYear?(i(),l("span",us,m(k.establishedYear)+"年运营",1)):h("",!0)]),e("div",fs,m(k.categoryTag.split("（")[0]),1)])]),e("div",ys,[e("span",ms,"¥"+m(k.startingPriceMonthly.toFixed(2)),1),C[3]||(C[3]=e("span",{class:"price-unit"},"/月起",-1))])]),e("p",ps,m(k.summary),1),e("div",gs,[e("div",vs,[C[4]||(C[4]=e("span",{class:"spec-label"},"线路架构:",-1)),e("span",hs,m(k.lineType),1)]),e("div",bs,[C[5]||(C[5]=e("span",{class:"spec-label"},"支持协议:",-1)),e("span",Gs,m(k.protocols.join(", ")),1)]),e("div",Is,[C[6]||(C[6]=e("span",{class:"spec-label"},"客户端:",-1)),e("span",Cs,m(k.customClient?"自研专属端 + 通用核心":"通用订阅核心 (Clash/Sing-box)"),1)])]),e("div",Ps,[e("div",Bs,[e("a",{href:`/brands/${k.id}/`,class:"btn-outline btn-sm"},"深度档案",8,ks),k.id==="lightspeed"?(i(),l("a",Ss," 📖 8000字单品评测 ")):h("",!0)]),e("div",Ts,[b(k.id)?(i(),l("a",{key:0,href:b(k.id).url,target:"_blank",rel:"nofollow sponsored noopener",class:"btn-primary btn-sm sponsored-btn",title:b(k.id).disclaimer},[...C[7]||(C[7]=[F(" 官网直达 ",-1),e("span",{class:"sponsored-tag"},"推广",-1)])],8,Ms)):h("",!0)])])]))),128))]),u.value.length===0?(i(),l("div",_s,[C[8]||(C[8]=e("p",null,"未找到符合条件的机场品牌，请尝试清空筛选关键词。",-1)),e("button",{class:"btn-outline btn-sm",onClick:T},"重置全部筛选")])):h("",!0)]))}}),tl=B(el,[["__scopeId","data-v-50f1f5a5"]]),nl=[{id:"flycat-plan-1",brandId:"flycat",name:"飞猫云·飞猫·学生版",billingCycle:"年付",actualPayment:84,effectiveMonthlyCost:7,trafficGB:50,trafficReset:"每月",features:["年付","50GB","BGP 中继隧道 / 专线混合"]},{id:"flycat-plan-2",brandId:"flycat",name:"飞猫云·飞猫·星耀版",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150GB","BGP 中继隧道 / 专线混合"]},{id:"flycat-plan-3",brandId:"flycat",name:"飞猫云·飞猫·星环版",billingCycle:"月付",actualPayment:45,effectiveMonthlyCost:45,trafficGB:300,trafficReset:"每月",features:["月付","300GB","BGP 中继隧道 / 专线混合"]},{id:"flycat-plan-4",brandId:"flycat",name:"飞猫云·飞猫·银河版",billingCycle:"月付",actualPayment:85,effectiveMonthlyCost:85,trafficGB:600,trafficReset:"每月",features:["月付","600GB","BGP 中继隧道 / 专线混合"]},{id:"flycat-plan-5",brandId:"flycat",name:"飞猫云·飞猫·宇宙版",billingCycle:"月付",actualPayment:150,effectiveMonthlyCost:150,trafficGB:1e3,trafficReset:"每月",features:["月付","1000GB","BGP 中继隧道 / 专线混合"]},{id:"flycat-plan-6",brandId:"flycat",name:"飞猫云·飞猫·不限时套餐",billingCycle:"一次性付费",actualPayment:680,effectiveMonthlyCost:680,trafficGB:1e3,trafficReset:"一次性",features:["一次性付费","1000GB","BGP 中继隧道 / 专线混合"]},{id:"flycat-plan-7",brandId:"flycat",name:"飞猫云·飞猫·定制套餐",billingCycle:"月付",actualPayment:550,effectiveMonthlyCost:550,trafficGB:500,trafficReset:"每月",features:["月付","500GB","BGP 中继隧道 / 专线混合"]},{id:"breezenet-plan-1",brandId:"breezenet",name:"微风网络·清风 (Breeze)",billingCycle:"年付",actualPayment:137,effectiveMonthlyCost:11.42,trafficGB:100,trafficReset:"每月",features:["年付","100GB","BGP 中继隧道 / 专线混合"]},{id:"breezenet-plan-2",brandId:"breezenet",name:"微风网络·乘风 (Riding)",billingCycle:"月付",actualPayment:27,effectiveMonthlyCost:27,trafficGB:200,trafficReset:"每月",features:["月付","200GB","BGP 中继隧道 / 专线混合"]},{id:"breezenet-plan-3",brandId:"breezenet",name:"微风网络·破风 (Breaking)",billingCycle:"月付",actualPayment:57,effectiveMonthlyCost:57,trafficGB:500,trafficReset:"每月",features:["月付","500GB","BGP 中继隧道 / 专线混合"]},{id:"breezenet-plan-4",brandId:"breezenet",name:"微风网络·御风 (Mastery)",billingCycle:"月付",actualPayment:127,effectiveMonthlyCost:127,trafficGB:1200,trafficReset:"每月",features:["月付","1200GB","BGP 中继隧道 / 专线混合"]},{id:"breezenet-plan-5",brandId:"breezenet",name:"微风网络·信风·不限时",billingCycle:"一次性付费",actualPayment:200,effectiveMonthlyCost:200,trafficGB:270,trafficReset:"一次性",features:["一次性付费","270GB","BGP 中继隧道 / 专线混合"]},{id:"breezenet-plan-6",brandId:"breezenet",name:"微风网络·长风·不限时",billingCycle:"一次性付费",actualPayment:370,effectiveMonthlyCost:370,trafficGB:570,trafficReset:"一次性",features:["一次性付费","570GB","BGP 中继隧道 / 专线混合"]},{id:"twilight-plan-1",brandId:"twilight",name:"暮光加速·【暮光·基础版】",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:120,trafficReset:"每月",features:["月付","120GB","优质 BGP 跨境网络"]},{id:"twilight-plan-2",brandId:"twilight",name:"暮光加速·【暮光·标准版】",billingCycle:"月付",actualPayment:40,effectiveMonthlyCost:40,trafficGB:240,trafficReset:"每月",features:["月付","240GB","优质 BGP 跨境网络"]},{id:"twilight-plan-3",brandId:"twilight",name:"暮光加速·【暮光·旗舰版】",billingCycle:"月付",actualPayment:100,effectiveMonthlyCost:100,trafficGB:700,trafficReset:"每月",features:["月付","700GB","优质 BGP 跨境网络"]},{id:"twilight-plan-4",brandId:"twilight",name:"暮光加速·【暮光·至尊版】",billingCycle:"月付",actualPayment:180,effectiveMonthlyCost:180,trafficGB:1500,trafficReset:"每月",features:["月付","1500GB","优质 BGP 跨境网络"]},{id:"twilight-plan-5",brandId:"twilight",name:"暮光加速·【暮光·年付轻量版】",billingCycle:"年付",actualPayment:109,effectiveMonthlyCost:9.08,trafficGB:70,trafficReset:"每月",features:["年付","70GB","优质 BGP 跨境网络"]},{id:"twilight-plan-6",brandId:"twilight",name:"暮光加速·【暮光·不限时轻量包】",billingCycle:"一次性付费",actualPayment:219,effectiveMonthlyCost:219,trafficGB:150,trafficReset:"一次性",features:["一次性付费","150GB","优质 BGP 跨境网络"]},{id:"twilight-plan-7",brandId:"twilight",name:"暮光加速·【暮光·不限时标准包】",billingCycle:"一次性付费",actualPayment:529,effectiveMonthlyCost:529,trafficGB:400,trafficReset:"一次性",features:["一次性付费","400GB","优质 BGP 跨境网络"]},{id:"twilight-plan-8",brandId:"twilight",name:"暮光加速·【暮光·不限时大容量包】",billingCycle:"一次性付费",actualPayment:959,effectiveMonthlyCost:959,trafficGB:800,trafficReset:"一次性",features:["一次性付费","800GB","优质 BGP 跨境网络"]},{id:"twilight-plan-9",brandId:"twilight",name:"暮光加速·独享私人定制节点",billingCycle:"月付",actualPayment:600,effectiveMonthlyCost:600,trafficGB:500,trafficReset:"每月",features:["月付","500GB","优质 BGP 跨境网络"]},{id:"dalaoyun-plan-default",brandId:"dalaoyun",name:"大佬云·基础标准版",billingCycle:"月付",actualPayment:8.399999999999999,effectiveMonthlyCost:5.6,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"stardream-plan-1",brandId:"stardream",name:"星岛梦·星岛梦·贴心小包",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-2",brandId:"stardream",name:"星岛梦·星岛梦·超量150G",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-3",brandId:"stardream",name:"星岛梦·星岛梦·进阶300G",billingCycle:"月付",actualPayment:50,effectiveMonthlyCost:50,trafficGB:300,trafficReset:"每月",features:["月付","300GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-4",brandId:"stardream",name:"星岛梦·星岛梦·闪光500G",billingCycle:"月付",actualPayment:70,effectiveMonthlyCost:70,trafficGB:500,trafficReset:"每月",features:["月付","500GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-5",brandId:"stardream",name:"星岛梦·星岛梦·旗舰1T版",billingCycle:"月付",actualPayment:130,effectiveMonthlyCost:130,trafficGB:1e3,trafficReset:"每月",features:["月付","1000GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-6",brandId:"stardream",name:"星岛梦·星岛梦·永久不限时100",billingCycle:"一次性付费",actualPayment:100,effectiveMonthlyCost:100,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-7",brandId:"stardream",name:"星岛梦·星岛梦·永久不限时300",billingCycle:"一次性付费",actualPayment:300,effectiveMonthlyCost:300,trafficGB:300,trafficReset:"一次性",features:["一次性付费","300GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-8",brandId:"stardream",name:"星岛梦·星岛梦·永久不限时1TB",billingCycle:"一次性付费",actualPayment:600,effectiveMonthlyCost:600,trafficGB:1e3,trafficReset:"一次性",features:["一次性付费","1000GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-9",brandId:"stardream",name:"星岛梦·星岛梦·定制套餐",billingCycle:"月付",actualPayment:680,effectiveMonthlyCost:680,trafficGB:500,trafficReset:"每月",features:["月付","500GB","BGP 中继隧道 / 专线混合"]},{id:"2mao-plan-1",brandId:"2mao",name:"二猫云·二猫云·不限时套餐",billingCycle:"一次性付费",actualPayment:99,effectiveMonthlyCost:99,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","BGP 中继隧道 / 专线混合"]},{id:"2mao-plan-2",brandId:"2mao",name:"二猫云·二猫年付小包",billingCycle:"年付",actualPayment:89,effectiveMonthlyCost:7.42,trafficGB:60,trafficReset:"每月",features:["年付","60GB","BGP 中继隧道 / 专线混合"]},{id:"2mao-plan-3",brandId:"2mao",name:"二猫云·二猫云·白猫套餐",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:130,trafficReset:"每月",features:["月付","130GB","BGP 中继隧道 / 专线混合"]},{id:"2mao-plan-4",brandId:"2mao",name:"二猫云·二猫云·橘猫畅玩版",billingCycle:"月付",actualPayment:40,effectiveMonthlyCost:40,trafficGB:230,trafficReset:"每月",features:["月付","230GB","BGP 中继隧道 / 专线混合"]},{id:"2mao-plan-5",brandId:"2mao",name:"二猫云·二猫云·牛奶猫尊享版",billingCycle:"月付",actualPayment:80,effectiveMonthlyCost:80,trafficGB:430,trafficReset:"每月",features:["月付","430GB","BGP 中继隧道 / 专线混合"]},{id:"2mao-plan-6",brandId:"2mao",name:"二猫云·二猫云·黑猫重度用户版",billingCycle:"月付",actualPayment:160,effectiveMonthlyCost:160,trafficGB:850,trafficReset:"每月",features:["月付","850GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-1",brandId:"wuyou",name:"无忧链接·MINI链接",billingCycle:"年付",actualPayment:79,effectiveMonthlyCost:6.58,trafficGB:40,trafficReset:"每月",features:["年付","40GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-2",brandId:"wuyou",name:"无忧链接·舒心链接",billingCycle:"月付",actualPayment:19,effectiveMonthlyCost:19,trafficGB:100,trafficReset:"每月",features:["月付","100GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-3",brandId:"wuyou",name:"无忧链接·省心链接",billingCycle:"月付",actualPayment:33,effectiveMonthlyCost:33,trafficGB:200,trafficReset:"每月",features:["月付","200GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-4",brandId:"wuyou",name:"无忧链接·随心链接",billingCycle:"月付",actualPayment:77,effectiveMonthlyCost:77,trafficGB:500,trafficReset:"每月",features:["月付","500GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-5",brandId:"wuyou",name:"无忧链接·忘忧链接",billingCycle:"月付",actualPayment:117,effectiveMonthlyCost:117,trafficGB:1e3,trafficReset:"每月",features:["月付","1000GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-6",brandId:"wuyou",name:"无忧链接·100G永久不限时 无忧链接",billingCycle:"一次性付费",actualPayment:108,effectiveMonthlyCost:108,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-7",brandId:"wuyou",name:"无忧链接·300G永久不限时 无忧链接",billingCycle:"一次性付费",actualPayment:298,effectiveMonthlyCost:298,trafficGB:300,trafficReset:"一次性",features:["一次性付费","300GB","BGP 中继隧道 / 专线混合"]},{id:"v2yun-plan-1",brandId:"v2yun",name:"唯兔云·唯兔云·年付加强专线",billingCycle:"年付",actualPayment:120,effectiveMonthlyCost:10,trafficGB:75,trafficReset:"每月",features:["年付","75GB","全 IPLC 专线"]},{id:"v2yun-plan-2",brandId:"v2yun",name:"唯兔云·唯兔云·年付版限量款",billingCycle:"年付",actualPayment:79.9,effectiveMonthlyCost:6.66,trafficGB:45,trafficReset:"每月",features:["年付","45GB","全 IPLC 专线"]},{id:"v2yun-plan-3",brandId:"v2yun",name:"唯兔云·唯兔云·节假日限时开启（14.9元）",billingCycle:"月付",actualPayment:14.9,effectiveMonthlyCost:14.9,trafficGB:100,trafficReset:"每月",features:["月付","100GB","全 IPLC 专线"]},{id:"v2yun-plan-4",brandId:"v2yun",name:"唯兔云·唯兔云·普通版",billingCycle:"月付",actualPayment:19.9,effectiveMonthlyCost:19.9,trafficGB:150,trafficReset:"每月",features:["月付","150GB","全 IPLC 专线"]},{id:"v2yun-plan-5",brandId:"v2yun",name:"唯兔云·唯兔云·进阶版",billingCycle:"月付",actualPayment:29.9,effectiveMonthlyCost:29.9,trafficGB:200,trafficReset:"每月",features:["月付","200GB","全 IPLC 专线"]},{id:"v2yun-plan-6",brandId:"v2yun",name:"唯兔云·唯兔云·专业版",billingCycle:"月付",actualPayment:59.9,effectiveMonthlyCost:59.9,trafficGB:500,trafficReset:"每月",features:["月付","500GB","全 IPLC 专线"]},{id:"v2yun-plan-7",brandId:"v2yun",name:"唯兔云·唯兔云·至尊版",billingCycle:"月付",actualPayment:119.9,effectiveMonthlyCost:119.9,trafficGB:1e3,trafficReset:"每月",features:["月付","1000GB","全 IPLC 专线"]},{id:"v2yun-plan-8",brandId:"v2yun",name:"唯兔云·唯兔云·永久不限时",billingCycle:"一次性付费",actualPayment:100,effectiveMonthlyCost:100,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","全 IPLC 专线"]},{id:"v2yun-plan-9",brandId:"v2yun",name:"唯兔云·唯兔云·永久不限时",billingCycle:"一次性付费",actualPayment:160,effectiveMonthlyCost:160,trafficGB:200,trafficReset:"一次性",features:["一次性付费","200GB","全 IPLC 专线"]},{id:"v2yun-plan-10",brandId:"v2yun",name:"唯兔云·唯兔云·永久不限时",billingCycle:"一次性付费",actualPayment:340,effectiveMonthlyCost:340,trafficGB:500,trafficReset:"一次性",features:["一次性付费","500GB","全 IPLC 专线"]},{id:"firefly-plan-1",brandId:"firefly",name:"Firefly·Firefly 年付版",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60GB","全 IPLC 专线"]},{id:"firefly-plan-2",brandId:"firefly",name:"Firefly·Firefly Lite",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150GB","全 IPLC 专线"]},{id:"firefly-plan-3",brandId:"firefly",name:"Firefly·Firefly Plus",billingCycle:"月付",actualPayment:45,effectiveMonthlyCost:45,trafficGB:300,trafficReset:"每月",features:["月付","300GB","全 IPLC 专线"]},{id:"firefly-plan-4",brandId:"firefly",name:"Firefly·Firefly Blaze",billingCycle:"月付",actualPayment:85,effectiveMonthlyCost:85,trafficGB:600,trafficReset:"每月",features:["月付","600GB","全 IPLC 专线"]},{id:"firefly-plan-5",brandId:"firefly",name:"Firefly·Firefly Nova",billingCycle:"月付",actualPayment:150,effectiveMonthlyCost:150,trafficGB:1e3,trafficReset:"每月",features:["月付","1000GB","全 IPLC 专线"]},{id:"firefly-plan-6",brandId:"firefly",name:"Firefly·Firefly 不限时",billingCycle:"一次性付费",actualPayment:100,effectiveMonthlyCost:100,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","全 IPLC 专线"]},{id:"yuzhou-plan-default",brandId:"yuzhou",name:"宇宙云·基础标准版",billingCycle:"月付",actualPayment:22.5,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"u1s1-plan-1",brandId:"u1s1",name:"U1S1·u1s1·就是好用包",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60GB","全 IPLC 专线"]},{id:"u1s1-plan-2",brandId:"u1s1",name:"U1S1·u1s1·普通人真够了包",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:120,trafficReset:"每月",features:["月付","120GB","全 IPLC 专线"]},{id:"u1s1-plan-3",brandId:"u1s1",name:"U1S1·u1s1·你以为用不到包",billingCycle:"月付",actualPayment:40,effectiveMonthlyCost:40,trafficGB:300,trafficReset:"每月",features:["月付","300GB","全 IPLC 专线"]},{id:"u1s1-plan-4",brandId:"u1s1",name:"U1S1·u1s1·瘾大就拉满包",billingCycle:"月付",actualPayment:100,effectiveMonthlyCost:100,trafficGB:700,trafficReset:"每月",features:["月付","700GB","全 IPLC 专线"]},{id:"u1s1-plan-5",brandId:"u1s1",name:"U1S1·u1s1·我全都要包",billingCycle:"月付",actualPayment:180,effectiveMonthlyCost:180,trafficGB:1500,trafficReset:"每月",features:["月付","1500GB","全 IPLC 专线"]},{id:"lingmao-plan-1",brandId:"lingmao",name:"灵猫网络·灵猫·年付小包",billingCycle:"年付",actualPayment:85,effectiveMonthlyCost:7.08,trafficGB:45,trafficReset:"每月",features:["年付","45GB","BGP 中继隧道 / 专线混合"]},{id:"lingmao-plan-2",brandId:"lingmao",name:"灵猫网络·灵猫·年付Small",billingCycle:"年付",actualPayment:195,effectiveMonthlyCost:16.25,trafficGB:150,trafficReset:"每月",features:["年付","150GB","BGP 中继隧道 / 专线混合"]},{id:"lingmao-plan-3",brandId:"lingmao",name:"灵猫网络·灵猫·年付Big",billingCycle:"年付",actualPayment:295,effectiveMonthlyCost:24.58,trafficGB:300,trafficReset:"每月",features:["年付","300GB","BGP 中继隧道 / 专线混合"]},{id:"lingmao-plan-4",brandId:"lingmao",name:"灵猫网络·灵猫·季付Big",billingCycle:"季付",actualPayment:125,effectiveMonthlyCost:41.67,trafficGB:300,trafficReset:"每月",features:["季付","300GB","BGP 中继隧道 / 专线混合"]},{id:"lingmao-plan-5",brandId:"lingmao",name:"灵猫网络·灵猫·月付Small",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150GB","BGP 中继隧道 / 专线混合"]},{id:"lingmao-plan-6",brandId:"lingmao",name:"灵猫网络·灵猫·月付Big",billingCycle:"月付",actualPayment:45,effectiveMonthlyCost:45,trafficGB:300,trafficReset:"每月",features:["月付","300GB","BGP 中继隧道 / 专线混合"]},{id:"jilian-plan-default",brandId:"jilian",name:"极连云·基础标准版",billingCycle:"月付",actualPayment:12.375,effectiveMonthlyCost:8.25,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"guangnian-plan-default",brandId:"guangnian",name:"光年梯·基础标准版",billingCycle:"月付",actualPayment:12.375,effectiveMonthlyCost:8.25,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"yifan-plan-1",brandId:"yifan",name:"一翻云·轻享版",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:150,trafficReset:"每月",features:["月付","150GB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-2",brandId:"yifan",name:"一翻云·舒享版",billingCycle:"月付",actualPayment:35,effectiveMonthlyCost:35,trafficGB:350,trafficReset:"每月",features:["月付","350GB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-3",brandId:"yifan",name:"一翻云·尊享版",billingCycle:"月付",actualPayment:55,effectiveMonthlyCost:55,trafficGB:600,trafficReset:"每月",features:["月付","600GB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-4",brandId:"yifan",name:"一翻云·极致版",billingCycle:"月付",actualPayment:95,effectiveMonthlyCost:95,trafficGB:1.2,trafficReset:"每月",features:["月付","1.2TB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-5",brandId:"yifan",name:"一翻云·98¥·年付小包",billingCycle:"年付",actualPayment:98,effectiveMonthlyCost:8.17,trafficGB:60,trafficReset:"每月",features:["年付","60GB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-6",brandId:"yifan",name:"一翻云·轻享版·不限时包",billingCycle:"一次性付费",actualPayment:100,effectiveMonthlyCost:100,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-7",brandId:"yifan",name:"一翻云·舒享版·不限时包",billingCycle:"一次性付费",actualPayment:200,effectiveMonthlyCost:200,trafficGB:250,trafficReset:"一次性",features:["一次性付费","250GB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-8",brandId:"yifan",name:"一翻云·尊享版·不限时包",billingCycle:"一次性付费",actualPayment:400,effectiveMonthlyCost:400,trafficGB:500,trafficReset:"一次性",features:["一次性付费","500GB","BGP 中继隧道 / 专线混合"]},{id:"sogo-plan-1",brandId:"sogo",name:"SOGO 云·小包-年付版",billingCycle:"年付",actualPayment:98,effectiveMonthlyCost:8.17,trafficGB:60,trafficReset:"每月",features:["年付","60GB","优质 BGP 跨境网络"]},{id:"sogo-plan-2",brandId:"sogo",name:"SOGO 云·基础版",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150GB","优质 BGP 跨境网络"]},{id:"sogo-plan-3",brandId:"sogo",name:"SOGO 云·优选版",billingCycle:"月付",actualPayment:45,effectiveMonthlyCost:45,trafficGB:350,trafficReset:"每月",features:["月付","350GB","优质 BGP 跨境网络"]},{id:"sogo-plan-4",brandId:"sogo",name:"SOGO 云·强化版",billingCycle:"月付",actualPayment:80,effectiveMonthlyCost:80,trafficGB:550,trafficReset:"每月",features:["月付","550GB","优质 BGP 跨境网络"]},{id:"sogo-plan-5",brandId:"sogo",name:"SOGO 云·顶配版",billingCycle:"月付",actualPayment:150,effectiveMonthlyCost:150,trafficGB:1.1,trafficReset:"每月",features:["月付","1.1TB","优质 BGP 跨境网络"]},{id:"sogo-plan-6",brandId:"sogo",name:"SOGO 云·SOGO基础餐不限时版",billingCycle:"一次性付费",actualPayment:120,effectiveMonthlyCost:120,trafficGB:120,trafficReset:"一次性",features:["一次性付费","120GB","优质 BGP 跨境网络"]},{id:"sogo-plan-7",brandId:"sogo",name:"SOGO 云·SOGO优选餐不限时版",billingCycle:"一次性付费",actualPayment:220,effectiveMonthlyCost:220,trafficGB:250,trafficReset:"一次性",features:["一次性付费","250GB","优质 BGP 跨境网络"]},{id:"sogo-plan-8",brandId:"sogo",name:"SOGO 云·SOGO强化餐不限时版",billingCycle:"一次性付费",actualPayment:450,effectiveMonthlyCost:450,trafficGB:500,trafficReset:"一次性",features:["一次性付费","500GB","优质 BGP 跨境网络"]},{id:"sogo-plan-9",brandId:"sogo",name:"SOGO 云·SOGO至尊餐不限时版",billingCycle:"一次性付费",actualPayment:850,effectiveMonthlyCost:850,trafficGB:1,trafficReset:"一次性",features:["一次性付费","1.0TB","优质 BGP 跨境网络"]},{id:"kexin-plan-default",brandId:"kexin",name:"可信云·基础标准版",billingCycle:"月付",actualPayment:22.5,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"sujie-plan-default",brandId:"sujie",name:"速界·基础标准版",billingCycle:"月付",actualPayment:22.5,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"shanyue-plan-1",brandId:"shanyue",name:"闪跃·闪跃年付版",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60GB","全 IPLC 专线"]},{id:"shanyue-plan-2",brandId:"shanyue",name:"闪跃·闪动 (Flicker)",billingCycle:"月付",actualPayment:24,effectiveMonthlyCost:24,trafficGB:150,trafficReset:"每月",features:["月付","150GB","全 IPLC 专线"]},{id:"shanyue-plan-3",brandId:"shanyue",name:"闪跃·飞跃 (Leap)",billingCycle:"月付",actualPayment:44,effectiveMonthlyCost:44,trafficGB:300,trafficReset:"每月",features:["月付","300GB","全 IPLC 专线"]},{id:"shanyue-plan-4",brandId:"shanyue",name:"闪跃·瞬移 (Teleport)",billingCycle:"月付",actualPayment:84,effectiveMonthlyCost:84,trafficGB:600,trafficReset:"每月",features:["月付","600GB","全 IPLC 专线"]},{id:"shanyue-plan-5",brandId:"shanyue",name:"闪跃·跃迁 (Warp)",billingCycle:"月付",actualPayment:134,effectiveMonthlyCost:134,trafficGB:1e3,trafficReset:"每月",features:["月付","1000GB","全 IPLC 专线"]},{id:"quanqiu-plan-1",brandId:"quanqiu",name:"全球云·BGP 智能优化·不限时轻量包",billingCycle:"一次性付费",actualPayment:100,effectiveMonthlyCost:100,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","全 IPLC 专线"]},{id:"quanqiu-plan-2",brandId:"quanqiu",name:"全球云·BGP 智能优化·不限时标准包",billingCycle:"一次性付费",actualPayment:360,effectiveMonthlyCost:360,trafficGB:400,trafficReset:"一次性",features:["一次性付费","400GB","全 IPLC 专线"]},{id:"quanqiu-plan-3",brandId:"quanqiu",name:"全球云·BGP 智能优化·不限时大容量包",billingCycle:"一次性付费",actualPayment:700,effectiveMonthlyCost:700,trafficGB:800,trafficReset:"一次性",features:["一次性付费","800GB","全 IPLC 专线"]},{id:"quanqiu-plan-4",brandId:"quanqiu",name:"全球云·轻量版",billingCycle:"年付",actualPayment:99,effectiveMonthlyCost:8.25,trafficGB:59,trafficReset:"每月",features:["年付","59GB","全 IPLC 专线"]},{id:"quanqiu-plan-5",brandId:"quanqiu",name:"全球云·BGP 智能优化·入门方案",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:120,trafficReset:"每月",features:["月付","120GB","全 IPLC 专线"]},{id:"quanqiu-plan-6",brandId:"quanqiu",name:"全球云·BGP 智能优化·进阶方案",billingCycle:"月付",actualPayment:40,effectiveMonthlyCost:40,trafficGB:300,trafficReset:"每月",features:["月付","300GB","全 IPLC 专线"]},{id:"quanqiu-plan-7",brandId:"quanqiu",name:"全球云·BGP 智能优化·高端方案",billingCycle:"月付",actualPayment:100,effectiveMonthlyCost:100,trafficGB:700,trafficReset:"每月",features:["月付","700GB","全 IPLC 专线"]},{id:"quanqiu-plan-8",brandId:"quanqiu",name:"全球云·BGP 智能优化·商业方案",billingCycle:"月付",actualPayment:180,effectiveMonthlyCost:180,trafficGB:1500,trafficReset:"每月",features:["月付","1500GB","全 IPLC 专线"]},{id:"quanqiu-plan-9",brandId:"quanqiu",name:"全球云·独享私人专线节点",billingCycle:"月付",actualPayment:680,effectiveMonthlyCost:680,trafficGB:500,trafficReset:"每月",features:["月付","500GB","全 IPLC 专线"]},{id:"shandianshu-plan-default",brandId:"shandianshu",name:"闪电鼠·基础标准版",billingCycle:"月付",actualPayment:8.399999999999999,effectiveMonthlyCost:5.6,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"yunjiexian-plan-default",brandId:"yunjiexian",name:"云界线·基础标准版",billingCycle:"月付",actualPayment:8.399999999999999,effectiveMonthlyCost:5.6,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"liulianyun-plan-default",brandId:"liulianyun",name:"榴莲云·基础标准版",billingCycle:"月付",actualPayment:8.399999999999999,effectiveMonthlyCost:5.6,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"shenxing-plan-default",brandId:"shenxing",name:"神行加速·基础标准版",billingCycle:"月付",actualPayment:22.5,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"huanqiuti-plan-default",brandId:"huanqiuti",name:"环球梯·基础标准版",billingCycle:"月付",actualPayment:8.399999999999999,effectiveMonthlyCost:5.6,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"yinxingren-plan-1",brandId:"yinxingren",name:"隐形人·隐形人 白银纪元",billingCycle:"月付",actualPayment:24,effectiveMonthlyCost:24,trafficGB:144,trafficReset:"每月",features:["月付","144GB","全 IPLC 专线"]},{id:"yinxingren-plan-2",brandId:"yinxingren",name:"隐形人·隐形人 黄金序列",billingCycle:"月付",actualPayment:48,effectiveMonthlyCost:48,trafficGB:360,trafficReset:"每月",features:["月付","360GB","全 IPLC 专线"]},{id:"yinxingren-plan-3",brandId:"yinxingren",name:"隐形人·隐形人 铂金至臻",billingCycle:"月付",actualPayment:105,effectiveMonthlyCost:105,trafficGB:750,trafficReset:"每月",features:["月付","750GB","全 IPLC 专线"]},{id:"yinxingren-plan-4",brandId:"yinxingren",name:"隐形人·隐形人 钻石穹顶",billingCycle:"月付",actualPayment:185,effectiveMonthlyCost:185,trafficGB:1.6,trafficReset:"每月",features:["月付","1.6TB","全 IPLC 专线"]},{id:"yinxingren-plan-5",brandId:"yinxingren",name:"隐形人·王者定制版",billingCycle:"月付",actualPayment:680,effectiveMonthlyCost:680,trafficGB:500,trafficReset:"每月",features:["月付","500GB","全 IPLC 专线"]},{id:"yinxingren-plan-6",brandId:"yinxingren",name:"隐形人·星耀风暴 365天不熄",billingCycle:"年付",actualPayment:109,effectiveMonthlyCost:9.08,trafficGB:80,trafficReset:"每月",features:["年付","80GB","全 IPLC 专线"]},{id:"yinxingren-plan-7",brandId:"yinxingren",name:"隐形人·一次性小流量",billingCycle:"一次性付费",actualPayment:229,effectiveMonthlyCost:229,trafficGB:160,trafficReset:"一次性",features:["一次性付费","160GB","全 IPLC 专线"]},{id:"yinxingren-plan-8",brandId:"yinxingren",name:"隐形人·一次性标准流量包",billingCycle:"一次性付费",actualPayment:549,effectiveMonthlyCost:549,trafficGB:420,trafficReset:"一次性",features:["一次性付费","420GB","全 IPLC 专线"]},{id:"yinxingren-plan-9",brandId:"yinxingren",name:"隐形人·一次性精英流量包",billingCycle:"一次性付费",actualPayment:1199,effectiveMonthlyCost:1199,trafficGB:1,trafficReset:"一次性",features:["一次性付费","1.0TB","全 IPLC 专线"]},{id:"tiziyun-plan-default",brandId:"tiziyun",name:"梯子云·基础标准版",billingCycle:"月付",actualPayment:22.5,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"wgetcloud-plan-1",brandId:"wgetcloud",name:"WgetCloud·基础专线服务",billingCycle:"季付",actualPayment:297,effectiveMonthlyCost:99,trafficGB:230,trafficReset:"每月",features:["季付","230GB/月","企业级专线"]},{id:"wgetcloud-plan-2",brandId:"wgetcloud",name:"WgetCloud·优质专线服务",billingCycle:"季付",actualPayment:327,effectiveMonthlyCost:109,trafficGB:250,trafficReset:"每月",features:["季付","250GB/月","企业级专线"]},{id:"wgetcloud-plan-3",brandId:"wgetcloud",name:"WgetCloud·精品专线服务",billingCycle:"季付",actualPayment:357,effectiveMonthlyCost:119,trafficGB:270,trafficReset:"每月",features:["季付","270GB/月","企业级专线"]},{id:"baiyueguang-plan-1",brandId:"baiyueguang",name:"白月光·小包",billingCycle:"季付",actualPayment:66,effectiveMonthlyCost:22,trafficGB:100,trafficReset:"每月",features:["季付","每月100GB高速流量","企业级专线"]},{id:"baiyueguang-plan-2",brandId:"baiyueguang",name:"白月光·中包",billingCycle:"季付",actualPayment:126,effectiveMonthlyCost:42,trafficGB:250,trafficReset:"每月",features:["季付","每月250GB高速流量","企业级专线"]},{id:"baiyueguang-plan-3",brandId:"baiyueguang",name:"白月光·大包",billingCycle:"季付",actualPayment:156,effectiveMonthlyCost:52,trafficGB:400,trafficReset:"每月",features:["季付","每月400GB高速流量","企业级专线"]},{id:"baiyueguang-plan-4",brandId:"baiyueguang",name:"白月光·超大包",billingCycle:"季付",actualPayment:216,effectiveMonthlyCost:72,trafficGB:750,trafficReset:"每月",features:["季付","每月750GB高速流量","企业级专线"]},{id:"baiyueguang-plan-5",brandId:"baiyueguang",name:"白月光·不差钱",billingCycle:"季付",actualPayment:231,effectiveMonthlyCost:77,trafficGB:900,trafficReset:"每月",features:["季付","每月900GB高速流量","企业级专线"]},{id:"baiyueguang-plan-6",brandId:"baiyueguang",name:"白月光·旗舰包",billingCycle:"年付",actualPayment:2500,effectiveMonthlyCost:208.33,trafficGB:2500,trafficReset:"每月",features:["年付","每月2500GB超大流量","企业级专线"]},{id:"flyingbird-plan-1",brandId:"flyingbird",name:"FlyingBird·青铜套餐",billingCycle:"月付",actualPayment:15,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月",features:["月付","100G","全专线"]},{id:"flyingbird-plan-2",brandId:"flyingbird",name:"FlyingBird·青铜套餐",billingCycle:"季付",actualPayment:41,effectiveMonthlyCost:13.67,trafficGB:100,trafficReset:"每月",features:["季付","100G","全专线"]},{id:"flyingbird-plan-3",brandId:"flyingbird",name:"FlyingBird·青铜套餐",billingCycle:"半年付",actualPayment:77,effectiveMonthlyCost:6.42,trafficGB:100,trafficReset:"每月",features:["半年付","100G","全专线"]},{id:"flyingbird-plan-4",brandId:"flyingbird",name:"FlyingBird·青铜套餐",billingCycle:"年付",actualPayment:144,effectiveMonthlyCost:12,trafficGB:100,trafficReset:"每月",features:["年付","100G","全专线"]},{id:"flyingbird-plan-5",brandId:"flyingbird",name:"FlyingBird·白银套餐",billingCycle:"月付",actualPayment:30,effectiveMonthlyCost:30,trafficGB:200,trafficReset:"每月",features:["月付","200G","全专线"]},{id:"flyingbird-plan-6",brandId:"flyingbird",name:"FlyingBird·白银套餐",billingCycle:"季付",actualPayment:81,effectiveMonthlyCost:27,trafficGB:200,trafficReset:"每月",features:["季付","200G","全专线"]},{id:"flyingbird-plan-7",brandId:"flyingbird",name:"FlyingBird·白银套餐",billingCycle:"半年付",actualPayment:153,effectiveMonthlyCost:12.75,trafficGB:200,trafficReset:"每月",features:["半年付","200G","全专线"]},{id:"flyingbird-plan-8",brandId:"flyingbird",name:"FlyingBird·白银套餐",billingCycle:"年付",actualPayment:288,effectiveMonthlyCost:24,trafficGB:200,trafficReset:"每月",features:["年付","200G","全专线"]},{id:"flyingbird-plan-9",brandId:"flyingbird",name:"FlyingBird·黄金套餐",billingCycle:"月付",actualPayment:75,effectiveMonthlyCost:75,trafficGB:500,trafficReset:"每月",features:["月付","500G","全专线"]},{id:"flyingbird-plan-10",brandId:"flyingbird",name:"FlyingBird·黄金套餐",billingCycle:"季付",actualPayment:203,effectiveMonthlyCost:67.67,trafficGB:500,trafficReset:"每月",features:["季付","500G","全专线"]},{id:"flyingbird-plan-11",brandId:"flyingbird",name:"FlyingBird·黄金套餐",billingCycle:"半年付",actualPayment:383,effectiveMonthlyCost:31.92,trafficGB:500,trafficReset:"每月",features:["半年付","500G","全专线"]},{id:"flyingbird-plan-12",brandId:"flyingbird",name:"FlyingBird·黄金套餐",billingCycle:"年付",actualPayment:720,effectiveMonthlyCost:60,trafficGB:500,trafficReset:"每月",features:["年付","500G","全专线"]},{id:"flyingbird-plan-13",brandId:"flyingbird",name:"FlyingBird·钻石套餐",billingCycle:"月付",actualPayment:150,effectiveMonthlyCost:150,trafficGB:1e3,trafficReset:"每月",features:["月付","1000G","全专线"]},{id:"flyingbird-plan-14",brandId:"flyingbird",name:"FlyingBird·钻石套餐",billingCycle:"季付",actualPayment:405,effectiveMonthlyCost:135,trafficGB:1e3,trafficReset:"每月",features:["季付","1000G","全专线"]},{id:"flyingbird-plan-15",brandId:"flyingbird",name:"FlyingBird·钻石套餐",billingCycle:"半年付",actualPayment:765,effectiveMonthlyCost:63.75,trafficGB:1e3,trafficReset:"每月",features:["半年付","1000G","全专线"]},{id:"flyingbird-plan-16",brandId:"flyingbird",name:"FlyingBird·钻石套餐",billingCycle:"年付",actualPayment:1440,effectiveMonthlyCost:120,trafficGB:1e3,trafficReset:"每月",features:["年付","1000G","全专线"]},{id:"cyberguard-plan-1",brandId:"cyberguard",name:"CyberGuard·150G｜轻量套餐",billingCycle:"半年付",actualPayment:95,effectiveMonthlyCost:7.92,trafficGB:150,trafficReset:"每月",features:["半年付","150GB/月","企业级专线"]},{id:"cyberguard-plan-2",brandId:"cyberguard",name:"CyberGuard·350G｜标准套餐",billingCycle:"月付",actualPayment:32,effectiveMonthlyCost:32,trafficGB:350,trafficReset:"每月",features:["月付","350GB/月","企业级专线"]},{id:"cyberguard-plan-3",brandId:"cyberguard",name:"CyberGuard·650G｜高速套餐",billingCycle:"月付",actualPayment:55,effectiveMonthlyCost:55,trafficGB:650,trafficReset:"每月",features:["月付","650GB/月","企业级专线"]},{id:"cyberguard-plan-4",brandId:"cyberguard",name:"CyberGuard·220G流量包｜不限时",billingCycle:"一次性付费",actualPayment:79,effectiveMonthlyCost:79,trafficGB:220,trafficReset:"一次性（具体有效期待核实）",features:["一次性付费","220GB","企业级专线"]},{id:"cyberguard-plan-5",brandId:"cyberguard",name:"CyberGuard·840G流量包｜不限时",billingCycle:"一次性付费",actualPayment:188,effectiveMonthlyCost:188,trafficGB:840,trafficReset:"一次性（具体有效期待核实）",features:["一次性付费","840GB","企业级专线"]},{id:"cyberguard-plan-6",brandId:"cyberguard",name:"CyberGuard·2050G｜企业套餐",billingCycle:"月付",actualPayment:200,effectiveMonthlyCost:200,trafficGB:2050,trafficReset:"每月",features:["月付","2050GB/月","企业级专线"]},{id:"totoro-plan-1",brandId:"totoro",name:"龙猫云·VIP1",billingCycle:"月付",actualPayment:15,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月",features:["月付","100G","全专线"]},{id:"totoro-plan-2",brandId:"totoro",name:"龙猫云·VIP1",billingCycle:"季付",actualPayment:41,effectiveMonthlyCost:13.67,trafficGB:100,trafficReset:"每月",features:["季付","100G","全专线"]},{id:"totoro-plan-3",brandId:"totoro",name:"龙猫云·VIP1",billingCycle:"半年付",actualPayment:77,effectiveMonthlyCost:6.42,trafficGB:100,trafficReset:"每月",features:["半年付","100G","全专线"]},{id:"totoro-plan-4",brandId:"totoro",name:"龙猫云·VIP1",billingCycle:"年付",actualPayment:144,effectiveMonthlyCost:12,trafficGB:100,trafficReset:"每月",features:["年付","100G","全专线"]},{id:"totoro-plan-5",brandId:"totoro",name:"龙猫云·VIP2",billingCycle:"月付",actualPayment:30,effectiveMonthlyCost:30,trafficGB:200,trafficReset:"每月",features:["月付","200G","全专线"]},{id:"totoro-plan-6",brandId:"totoro",name:"龙猫云·VIP2",billingCycle:"季付",actualPayment:81,effectiveMonthlyCost:27,trafficGB:200,trafficReset:"每月",features:["季付","200G","全专线"]},{id:"totoro-plan-7",brandId:"totoro",name:"龙猫云·VIP2",billingCycle:"半年付",actualPayment:153,effectiveMonthlyCost:12.75,trafficGB:200,trafficReset:"每月",features:["半年付","200G","全专线"]},{id:"totoro-plan-8",brandId:"totoro",name:"龙猫云·VIP2",billingCycle:"年付",actualPayment:288,effectiveMonthlyCost:24,trafficGB:200,trafficReset:"每月",features:["年付","200G","全专线"]},{id:"totoro-plan-9",brandId:"totoro",name:"龙猫云·VIP3",billingCycle:"月付",actualPayment:60,effectiveMonthlyCost:60,trafficGB:400,trafficReset:"每月",features:["月付","400G","全专线"]},{id:"totoro-plan-10",brandId:"totoro",name:"龙猫云·VIP3",billingCycle:"季付",actualPayment:162,effectiveMonthlyCost:54,trafficGB:400,trafficReset:"每月",features:["季付","400G","全专线"]},{id:"totoro-plan-11",brandId:"totoro",name:"龙猫云·VIP3",billingCycle:"半年付",actualPayment:306,effectiveMonthlyCost:25.5,trafficGB:400,trafficReset:"每月",features:["半年付","400G","全专线"]},{id:"totoro-plan-12",brandId:"totoro",name:"龙猫云·VIP3",billingCycle:"年付",actualPayment:576,effectiveMonthlyCost:48,trafficGB:400,trafficReset:"每月",features:["年付","400G","全专线"]},{id:"totoro-plan-13",brandId:"totoro",name:"龙猫云·VIP4",billingCycle:"月付",actualPayment:120,effectiveMonthlyCost:120,trafficGB:1e3,trafficReset:"每月",features:["月付","1000G","全专线"]},{id:"totoro-plan-14",brandId:"totoro",name:"龙猫云·VIP4",billingCycle:"季付",actualPayment:324,effectiveMonthlyCost:108,trafficGB:1e3,trafficReset:"每月",features:["季付","1000G","全专线"]},{id:"totoro-plan-15",brandId:"totoro",name:"龙猫云·VIP4",billingCycle:"半年付",actualPayment:697,effectiveMonthlyCost:58.08,trafficGB:1e3,trafficReset:"每月",features:["半年付","1000G","全专线"]},{id:"totoro-plan-16",brandId:"totoro",name:"龙猫云·VIP4",billingCycle:"年付",actualPayment:1152,effectiveMonthlyCost:96,trafficGB:1e3,trafficReset:"每月",features:["年付","1000G","全专线"]},{id:"fatcat-plan-1",brandId:"fatcat",name:"FATCAT·年付加强版",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60G","全专线"]},{id:"fatcat-plan-2",brandId:"fatcat",name:"FATCAT·基础套餐",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:120,trafficReset:"每月",features:["月付","120G","全专线"]},{id:"fatcat-plan-3",brandId:"fatcat",name:"FATCAT·基础套餐",billingCycle:"季付",actualPayment:54,effectiveMonthlyCost:18,trafficGB:120,trafficReset:"每月",features:["季付","120G","全专线"]},{id:"fatcat-plan-4",brandId:"fatcat",name:"FATCAT·基础套餐",billingCycle:"半年付",actualPayment:102,effectiveMonthlyCost:8.5,trafficGB:120,trafficReset:"每月",features:["半年付","120G","全专线"]},{id:"fatcat-plan-5",brandId:"fatcat",name:"FATCAT·基础套餐",billingCycle:"年付",actualPayment:192,effectiveMonthlyCost:16,trafficGB:120,trafficReset:"每月",features:["年付","120G","全专线"]},{id:"fatcat-plan-6",brandId:"fatcat",name:"FATCAT·标准套餐",billingCycle:"月付",actualPayment:40,effectiveMonthlyCost:40,trafficGB:300,trafficReset:"每月",features:["月付","300G","全专线"]},{id:"fatcat-plan-7",brandId:"fatcat",name:"FATCAT·标准套餐",billingCycle:"季付",actualPayment:108,effectiveMonthlyCost:36,trafficGB:300,trafficReset:"每月",features:["季付","300G","全专线"]},{id:"fatcat-plan-8",brandId:"fatcat",name:"FATCAT·标准套餐",billingCycle:"半年付",actualPayment:204,effectiveMonthlyCost:17,trafficGB:300,trafficReset:"每月",features:["半年付","300G","全专线"]},{id:"fatcat-plan-9",brandId:"fatcat",name:"FATCAT·标准套餐",billingCycle:"年付",actualPayment:384,effectiveMonthlyCost:32,trafficGB:300,trafficReset:"每月",features:["年付","300G","全专线"]},{id:"fatcat-plan-10",brandId:"fatcat",name:"FATCAT·旗舰套餐",billingCycle:"月付",actualPayment:100,effectiveMonthlyCost:100,trafficGB:700,trafficReset:"每月",features:["月付","700G","全专线"]},{id:"fatcat-plan-11",brandId:"fatcat",name:"FATCAT·旗舰套餐",billingCycle:"季付",actualPayment:270,effectiveMonthlyCost:90,trafficGB:700,trafficReset:"每月",features:["季付","700G","全专线"]},{id:"fatcat-plan-12",brandId:"fatcat",name:"FATCAT·旗舰套餐",billingCycle:"半年付",actualPayment:510,effectiveMonthlyCost:42.5,trafficGB:700,trafficReset:"每月",features:["半年付","700G","全专线"]},{id:"fatcat-plan-13",brandId:"fatcat",name:"FATCAT·旗舰套餐",billingCycle:"年付",actualPayment:960,effectiveMonthlyCost:80,trafficGB:700,trafficReset:"每月",features:["年付","700G","全专线"]},{id:"fatcat-plan-14",brandId:"fatcat",name:"FATCAT·企业套餐",billingCycle:"月付",actualPayment:180,effectiveMonthlyCost:180,trafficGB:1500,trafficReset:"每月",features:["月付","1500G","全专线"]},{id:"fatcat-plan-15",brandId:"fatcat",name:"FATCAT·企业套餐",billingCycle:"季付",actualPayment:486,effectiveMonthlyCost:162,trafficGB:1500,trafficReset:"每月",features:["季付","1500G","全专线"]},{id:"fatcat-plan-16",brandId:"fatcat",name:"FATCAT·企业套餐",billingCycle:"半年付",actualPayment:918,effectiveMonthlyCost:76.5,trafficGB:1500,trafficReset:"每月",features:["半年付","1500G","全专线"]},{id:"fatcat-plan-17",brandId:"fatcat",name:"FATCAT·企业套餐",billingCycle:"年付",actualPayment:1728,effectiveMonthlyCost:144,trafficGB:1500,trafficReset:"每月",features:["年付","1500G","全专线"]},{id:"tntcloud-plan-1",brandId:"tntcloud",name:"TNTCloud·轻量包",billingCycle:"季付",actualPayment:30,effectiveMonthlyCost:10,trafficGB:60,trafficReset:"每月",features:["季付","60G","全专线"]},{id:"tntcloud-plan-2",brandId:"tntcloud",name:"TNTCloud·轻量包",billingCycle:"半年付",actualPayment:56,effectiveMonthlyCost:4.67,trafficGB:60,trafficReset:"每月",features:["半年付","60G","全专线"]},{id:"tntcloud-plan-3",brandId:"tntcloud",name:"TNTCloud·轻量包",billingCycle:"年付",actualPayment:98,effectiveMonthlyCost:8.17,trafficGB:60,trafficReset:"每月",features:["年付","60G","全专线"]},{id:"tntcloud-plan-4",brandId:"tntcloud",name:"TNTCloud·VIP1",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:110,trafficReset:"每月",features:["月付","110G","全专线"]},{id:"tntcloud-plan-5",brandId:"tntcloud",name:"TNTCloud·VIP1",billingCycle:"季付",actualPayment:54,effectiveMonthlyCost:18,trafficGB:110,trafficReset:"每月",features:["季付","110G","全专线"]},{id:"tntcloud-plan-6",brandId:"tntcloud",name:"TNTCloud·VIP1",billingCycle:"半年付",actualPayment:102,effectiveMonthlyCost:8.5,trafficGB:110,trafficReset:"每月",features:["半年付","110G","全专线"]},{id:"tntcloud-plan-7",brandId:"tntcloud",name:"TNTCloud·VIP1",billingCycle:"年付",actualPayment:192,effectiveMonthlyCost:16,trafficGB:110,trafficReset:"每月",features:["年付","110G","全专线"]},{id:"tntcloud-plan-8",brandId:"tntcloud",name:"TNTCloud·VIP2",billingCycle:"月付",actualPayment:40,effectiveMonthlyCost:40,trafficGB:220,trafficReset:"每月",features:["月付","220G","全专线"]},{id:"tntcloud-plan-9",brandId:"tntcloud",name:"TNTCloud·VIP2",billingCycle:"季付",actualPayment:108,effectiveMonthlyCost:36,trafficGB:220,trafficReset:"每月",features:["季付","220G","全专线"]},{id:"tntcloud-plan-10",brandId:"tntcloud",name:"TNTCloud·VIP2",billingCycle:"半年付",actualPayment:204,effectiveMonthlyCost:17,trafficGB:220,trafficReset:"每月",features:["半年付","220G","全专线"]},{id:"tntcloud-plan-11",brandId:"tntcloud",name:"TNTCloud·VIP2",billingCycle:"年付",actualPayment:336,effectiveMonthlyCost:28,trafficGB:220,trafficReset:"每月",features:["年付","220G","全专线"]},{id:"tntcloud-plan-12",brandId:"tntcloud",name:"TNTCloud·VIP3",billingCycle:"月付",actualPayment:80,effectiveMonthlyCost:80,trafficGB:460,trafficReset:"每月",features:["月付","460G","全专线"]},{id:"tntcloud-plan-13",brandId:"tntcloud",name:"TNTCloud·VIP3",billingCycle:"季付",actualPayment:216,effectiveMonthlyCost:72,trafficGB:460,trafficReset:"每月",features:["季付","460G","全专线"]},{id:"tntcloud-plan-14",brandId:"tntcloud",name:"TNTCloud·VIP3",billingCycle:"半年付",actualPayment:408,effectiveMonthlyCost:34,trafficGB:460,trafficReset:"每月",features:["半年付","460G","全专线"]},{id:"tntcloud-plan-15",brandId:"tntcloud",name:"TNTCloud·VIP3",billingCycle:"年付",actualPayment:768,effectiveMonthlyCost:64,trafficGB:460,trafficReset:"每月",features:["年付","460G","全专线"]},{id:"tntcloud-plan-16",brandId:"tntcloud",name:"TNTCloud·VIP4",billingCycle:"月付",actualPayment:160,effectiveMonthlyCost:160,trafficGB:1100,trafficReset:"每月",features:["月付","1100G","全专线"]},{id:"tntcloud-plan-17",brandId:"tntcloud",name:"TNTCloud·VIP4",billingCycle:"季付",actualPayment:432,effectiveMonthlyCost:144,trafficGB:1100,trafficReset:"每月",features:["季付","1100G","全专线"]},{id:"tntcloud-plan-18",brandId:"tntcloud",name:"TNTCloud·VIP4",billingCycle:"半年付",actualPayment:816,effectiveMonthlyCost:68,trafficGB:1100,trafficReset:"每月",features:["半年付","1100G","全专线"]},{id:"tntcloud-plan-19",brandId:"tntcloud",name:"TNTCloud·VIP4",billingCycle:"年付",actualPayment:1536,effectiveMonthlyCost:128,trafficGB:1100,trafficReset:"每月",features:["年付","1100G","全专线"]},{id:"qingyunti-plan-1",brandId:"qingyunti",name:"青云梯·年付小包",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60G","全专线"]},{id:"qingyunti-plan-2",brandId:"qingyunti",name:"青云梯·VIP1",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150G","全专线"]},{id:"qingyunti-plan-3",brandId:"qingyunti",name:"青云梯·VIP1",billingCycle:"季付",actualPayment:67,effectiveMonthlyCost:22.33,trafficGB:150,trafficReset:"每月",features:["季付","150G","全专线"]},{id:"qingyunti-plan-4",brandId:"qingyunti",name:"青云梯·VIP1",billingCycle:"半年付",actualPayment:127,effectiveMonthlyCost:10.58,trafficGB:150,trafficReset:"每月",features:["半年付","150G","全专线"]},{id:"qingyunti-plan-5",brandId:"qingyunti",name:"青云梯·VIP1",billingCycle:"年付",actualPayment:240,effectiveMonthlyCost:20,trafficGB:150,trafficReset:"每月",features:["年付","150G","全专线"]},{id:"qingyunti-plan-6",brandId:"qingyunti",name:"青云梯·VIP2",billingCycle:"月付",actualPayment:45,effectiveMonthlyCost:45,trafficGB:300,trafficReset:"每月",features:["月付","300G","全专线"]},{id:"qingyunti-plan-7",brandId:"qingyunti",name:"青云梯·VIP2",billingCycle:"季付",actualPayment:121,effectiveMonthlyCost:40.33,trafficGB:300,trafficReset:"每月",features:["季付","300G","全专线"]},{id:"qingyunti-plan-8",brandId:"qingyunti",name:"青云梯·VIP2",billingCycle:"半年付",actualPayment:229,effectiveMonthlyCost:19.08,trafficGB:300,trafficReset:"每月",features:["半年付","300G","全专线"]},{id:"qingyunti-plan-9",brandId:"qingyunti",name:"青云梯·VIP2",billingCycle:"年付",actualPayment:432,effectiveMonthlyCost:36,trafficGB:300,trafficReset:"每月",features:["年付","300G","全专线"]},{id:"qingyunti-plan-10",brandId:"qingyunti",name:"青云梯·VIP3",billingCycle:"月付",actualPayment:85,effectiveMonthlyCost:85,trafficGB:600,trafficReset:"每月",features:["月付","600G","全专线"]},{id:"qingyunti-plan-11",brandId:"qingyunti",name:"青云梯·VIP3",billingCycle:"季付",actualPayment:229,effectiveMonthlyCost:76.33,trafficGB:600,trafficReset:"每月",features:["季付","600G","全专线"]},{id:"qingyunti-plan-12",brandId:"qingyunti",name:"青云梯·VIP3",billingCycle:"半年付",actualPayment:433,effectiveMonthlyCost:36.08,trafficGB:600,trafficReset:"每月",features:["半年付","600G","全专线"]},{id:"qingyunti-plan-13",brandId:"qingyunti",name:"青云梯·VIP3",billingCycle:"年付",actualPayment:816,effectiveMonthlyCost:68,trafficGB:600,trafficReset:"每月",features:["年付","600G","全专线"]},{id:"qingyunti-plan-14",brandId:"qingyunti",name:"青云梯·VIP4",billingCycle:"月付",actualPayment:150,effectiveMonthlyCost:150,trafficGB:1e3,trafficReset:"每月",features:["月付","1000G","全专线"]},{id:"qingyunti-plan-15",brandId:"qingyunti",name:"青云梯·VIP4",billingCycle:"季付",actualPayment:400,effectiveMonthlyCost:133.33,trafficGB:1e3,trafficReset:"每月",features:["季付","1000G","全专线"]},{id:"qingyunti-plan-16",brandId:"qingyunti",name:"青云梯·VIP4",billingCycle:"半年付",actualPayment:750,effectiveMonthlyCost:62.5,trafficGB:1e3,trafficReset:"每月",features:["半年付","1000G","全专线"]},{id:"qingyunti-plan-17",brandId:"qingyunti",name:"青云梯·VIP4",billingCycle:"年付",actualPayment:1360,effectiveMonthlyCost:113.33,trafficGB:1e3,trafficReset:"每月",features:["年付","1000G","全专线"]},{id:"shanshuiyun-plan-1",brandId:"shanshuiyun",name:"山水云·64G/轻量套餐",billingCycle:"年付",actualPayment:88,effectiveMonthlyCost:7.33,trafficGB:64,trafficReset:"每月",features:["年付","64GB/月","企业级专线"]},{id:"shanshuiyun-plan-2",brandId:"shanshuiyun",name:"山水云·128G/轻量套餐",billingCycle:"半年付",actualPayment:88,effectiveMonthlyCost:7.33,trafficGB:128,trafficReset:"每月",features:["半年付","128GB/月","企业级专线"]},{id:"shanshuiyun-plan-3",brandId:"shanshuiyun",name:"山水云·256G/轻量套餐",billingCycle:"季付",actualPayment:75,effectiveMonthlyCost:25,trafficGB:256,trafficReset:"每月",features:["季付","256GB/月","企业级专线"]},{id:"shanshuiyun-plan-4",brandId:"shanshuiyun",name:"山水云·100G/月-琴",billingCycle:"月付",actualPayment:15,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月",features:["月付","100GB/月","企业级专线"]},{id:"shanshuiyun-plan-5",brandId:"shanshuiyun",name:"山水云·200G/月-棋",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:200,trafficReset:"每月",features:["月付","200GB/月","企业级专线"]},{id:"shanshuiyun-plan-6",brandId:"shanshuiyun",name:"山水云·500G/月-书",billingCycle:"月付",actualPayment:50,effectiveMonthlyCost:50,trafficGB:500,trafficReset:"每月",features:["月付","500GB/月","企业级专线"]},{id:"lingdongyun-plan-1",brandId:"lingdongyun",name:"灵动云·灵动·拂风",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:100,trafficReset:"每月",features:["月付","100G/月","企业级"]},{id:"lingdongyun-plan-2",brandId:"lingdongyun",name:"灵动云·灵动·拂风",billingCycle:"季付",actualPayment:57,effectiveMonthlyCost:19,trafficGB:100,trafficReset:"每月",features:["季付","100G/月","企业级"]},{id:"lingdongyun-plan-3",brandId:"lingdongyun",name:"灵动云·灵动·拂风",billingCycle:"半年付",actualPayment:108,effectiveMonthlyCost:9,trafficGB:100,trafficReset:"每月",features:["半年付","100G/月","企业级"]},{id:"lingdongyun-plan-4",brandId:"lingdongyun",name:"灵动云·灵动·拂风",billingCycle:"年付",actualPayment:204,effectiveMonthlyCost:17,trafficGB:100,trafficReset:"每月",features:["年付","100G/月","企业级"]},{id:"lingdongyun-plan-5",brandId:"lingdongyun",name:"灵动云·灵动·拂风",billingCycle:"两年付",actualPayment:384,effectiveMonthlyCost:32,trafficGB:100,trafficReset:"每月",features:["两年付","100G/月","企业级"]},{id:"lingdongyun-plan-6",brandId:"lingdongyun",name:"灵动云·灵动·拂风",billingCycle:"三年付",actualPayment:540,effectiveMonthlyCost:45,trafficGB:100,trafficReset:"每月",features:["三年付","100G/月","企业级"]},{id:"lingdongyun-plan-7",brandId:"lingdongyun",name:"灵动云·灵动·驭浪",billingCycle:"月付",actualPayment:50,effectiveMonthlyCost:50,trafficGB:300,trafficReset:"每月",features:["月付","300G/月","企业级"]},{id:"lingdongyun-plan-8",brandId:"lingdongyun",name:"灵动云·灵动·驭浪",billingCycle:"季付",actualPayment:142.5,effectiveMonthlyCost:47.5,trafficGB:300,trafficReset:"每月",features:["季付","300G/月","企业级"]},{id:"lingdongyun-plan-9",brandId:"lingdongyun",name:"灵动云·灵动·驭浪",billingCycle:"半年付",actualPayment:270,effectiveMonthlyCost:22.5,trafficGB:300,trafficReset:"每月",features:["半年付","300G/月","企业级"]},{id:"lingdongyun-plan-10",brandId:"lingdongyun",name:"灵动云·灵动·驭浪",billingCycle:"年付",actualPayment:510,effectiveMonthlyCost:42.5,trafficGB:300,trafficReset:"每月",features:["年付","300G/月","企业级"]},{id:"lingdongyun-plan-11",brandId:"lingdongyun",name:"灵动云·灵动·驭浪",billingCycle:"两年付",actualPayment:960,effectiveMonthlyCost:80,trafficGB:300,trafficReset:"每月",features:["两年付","300G/月","企业级"]},{id:"lingdongyun-plan-12",brandId:"lingdongyun",name:"灵动云·灵动·驭浪",billingCycle:"三年付",actualPayment:1350,effectiveMonthlyCost:112.5,trafficGB:300,trafficReset:"每月",features:["三年付","300G/月","企业级"]},{id:"lingdongyun-plan-13",brandId:"lingdongyun",name:"灵动云·灵动·破晓",billingCycle:"月付",actualPayment:100,effectiveMonthlyCost:100,trafficGB:700,trafficReset:"每月",features:["月付","700G/月","企业级"]},{id:"lingdongyun-plan-14",brandId:"lingdongyun",name:"灵动云·灵动·破晓",billingCycle:"季付",actualPayment:285,effectiveMonthlyCost:95,trafficGB:700,trafficReset:"每月",features:["季付","700G/月","企业级"]},{id:"lingdongyun-plan-15",brandId:"lingdongyun",name:"灵动云·灵动·破晓",billingCycle:"半年付",actualPayment:540,effectiveMonthlyCost:45,trafficGB:700,trafficReset:"每月",features:["半年付","700G/月","企业级"]},{id:"lingdongyun-plan-16",brandId:"lingdongyun",name:"灵动云·灵动·破晓",billingCycle:"年付",actualPayment:1020,effectiveMonthlyCost:85,trafficGB:700,trafficReset:"每月",features:["年付","700G/月","企业级"]},{id:"lingdongyun-plan-17",brandId:"lingdongyun",name:"灵动云·灵动·破晓",billingCycle:"两年付",actualPayment:1920,effectiveMonthlyCost:160,trafficGB:700,trafficReset:"每月",features:["两年付","700G/月","企业级"]},{id:"lingdongyun-plan-18",brandId:"lingdongyun",name:"灵动云·灵动·破晓",billingCycle:"三年付",actualPayment:2700,effectiveMonthlyCost:225,trafficGB:700,trafficReset:"每月",features:["三年付","700G/月","企业级"]},{id:"lingdongyun-plan-19",brandId:"lingdongyun",name:"灵动云·灵动·凌霄",billingCycle:"月付",actualPayment:180,effectiveMonthlyCost:180,trafficGB:1.5,trafficReset:"每月",features:["月付","1.5T/月","企业级"]},{id:"lingdongyun-plan-20",brandId:"lingdongyun",name:"灵动云·灵动·凌霄",billingCycle:"季付",actualPayment:513,effectiveMonthlyCost:171,trafficGB:1.5,trafficReset:"每月",features:["季付","1.5T/月","企业级"]},{id:"lingdongyun-plan-21",brandId:"lingdongyun",name:"灵动云·灵动·凌霄",billingCycle:"半年付",actualPayment:972,effectiveMonthlyCost:81,trafficGB:1.5,trafficReset:"每月",features:["半年付","1.5T/月","企业级"]},{id:"lingdongyun-plan-22",brandId:"lingdongyun",name:"灵动云·灵动·凌霄",billingCycle:"年付",actualPayment:1836,effectiveMonthlyCost:153,trafficGB:1.5,trafficReset:"每月",features:["年付","1.5T/月","企业级"]},{id:"lingdongyun-plan-23",brandId:"lingdongyun",name:"灵动云·灵动·凌霄",billingCycle:"两年付",actualPayment:3456,effectiveMonthlyCost:288,trafficGB:1.5,trafficReset:"每月",features:["两年付","1.5T/月","企业级"]},{id:"lingdongyun-plan-24",brandId:"lingdongyun",name:"灵动云·灵动·凌霄",billingCycle:"三年付",actualPayment:4860,effectiveMonthlyCost:405,trafficGB:1.5,trafficReset:"每月",features:["三年付","1.5T/月","企业级"]},{id:"lingdongyun-plan-25",brandId:"lingdongyun",name:"灵动云·灵动·穿云",billingCycle:"年付",actualPayment:99,effectiveMonthlyCost:8.25,trafficGB:70,trafficReset:"每月",features:["年付","70G/月","企业级"]},{id:"lingdongyun-plan-26",brandId:"lingdongyun",name:"灵动云·灵动·闲云（小流量包）",billingCycle:"一次性付费",actualPayment:199,effectiveMonthlyCost:199,trafficGB:150,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","150G","企业级"]},{id:"lingdongyun-plan-27",brandId:"lingdongyun",name:"灵动云·灵动·惊云（标准流量包）",billingCycle:"一次性付费",actualPayment:499,effectiveMonthlyCost:499,trafficGB:400,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","400G","企业级"]},{id:"lingdongyun-plan-28",brandId:"lingdongyun",name:"灵动云·灵动·飞云（精英流量包）",billingCycle:"一次性付费",actualPayment:899,effectiveMonthlyCost:899,trafficGB:800,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","800G","企业级"]},{id:"lingdongyun-plan-29",brandId:"lingdongyun",name:"灵动云·灵动云·至尊私人定制",billingCycle:"月付",actualPayment:620,effectiveMonthlyCost:620,trafficGB:100,trafficReset:"每月",features:["月付","截图遮挡","企业级"]},{id:"langwang-plan-1",brandId:"langwang",name:"浪网·浪网 高端",billingCycle:"月付",actualPayment:120,effectiveMonthlyCost:120,trafficGB:800,trafficReset:"每月",features:["月付","800G","企业级"]},{id:"langwang-plan-2",brandId:"langwang",name:"浪网·浪网 高端",billingCycle:"季付",actualPayment:342,effectiveMonthlyCost:114,trafficGB:800,trafficReset:"每月",features:["季付","800G","企业级"]},{id:"langwang-plan-3",brandId:"langwang",name:"浪网·浪网 高端",billingCycle:"半年付",actualPayment:648,effectiveMonthlyCost:54,trafficGB:800,trafficReset:"每月",features:["半年付","800G","企业级"]},{id:"langwang-plan-4",brandId:"langwang",name:"浪网·浪网 高端",billingCycle:"年付",actualPayment:1224,effectiveMonthlyCost:102,trafficGB:800,trafficReset:"每月",features:["年付","800G","企业级"]},{id:"langwang-plan-5",brandId:"langwang",name:"浪网·浪网 高端",billingCycle:"两年付",actualPayment:2304,effectiveMonthlyCost:192,trafficGB:800,trafficReset:"每月",features:["两年付","800G","企业级"]},{id:"langwang-plan-6",brandId:"langwang",name:"浪网·浪网 高端",billingCycle:"三年付",actualPayment:3240,effectiveMonthlyCost:270,trafficGB:800,trafficReset:"每月",features:["三年付","800G","企业级"]},{id:"langwang-plan-7",brandId:"langwang",name:"浪网·浪网 商业",billingCycle:"月付",actualPayment:200,effectiveMonthlyCost:200,trafficGB:2e3,trafficReset:"每月",features:["月付","2000G","企业级"]},{id:"langwang-plan-8",brandId:"langwang",name:"浪网·浪网 商业",billingCycle:"季付",actualPayment:570,effectiveMonthlyCost:190,trafficGB:2e3,trafficReset:"每月",features:["季付","2000G","企业级"]},{id:"langwang-plan-9",brandId:"langwang",name:"浪网·浪网 商业",billingCycle:"半年付",actualPayment:1080,effectiveMonthlyCost:90,trafficGB:2e3,trafficReset:"每月",features:["半年付","2000G","企业级"]},{id:"langwang-plan-10",brandId:"langwang",name:"浪网·浪网 商业",billingCycle:"年付",actualPayment:2040,effectiveMonthlyCost:170,trafficGB:2e3,trafficReset:"每月",features:["年付","2000G","企业级"]},{id:"langwang-plan-11",brandId:"langwang",name:"浪网·浪网 商业",billingCycle:"两年付",actualPayment:3840,effectiveMonthlyCost:320,trafficGB:2e3,trafficReset:"每月",features:["两年付","2000G","企业级"]},{id:"langwang-plan-12",brandId:"langwang",name:"浪网·浪网 商业",billingCycle:"三年付",actualPayment:5400,effectiveMonthlyCost:450,trafficGB:2e3,trafficReset:"每月",features:["三年付","2000G","企业级"]},{id:"langwang-plan-13",brandId:"langwang",name:"浪网·浪网 年付标准",billingCycle:"年付",actualPayment:119,effectiveMonthlyCost:9.92,trafficGB:80,trafficReset:"每月",features:["年付","80G","企业级"]},{id:"langwang-plan-14",brandId:"langwang",name:"浪网·浪网 小流量包",billingCycle:"一次性付费",actualPayment:239,effectiveMonthlyCost:239,trafficGB:180,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","180G","企业级"]},{id:"langwang-plan-15",brandId:"langwang",name:"浪网·浪网 标准流量包",billingCycle:"一次性付费",actualPayment:569,effectiveMonthlyCost:569,trafficGB:450,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","450G","企业级"]},{id:"langwang-plan-16",brandId:"langwang",name:"浪网·浪网 定制线路包",billingCycle:"月付",actualPayment:640,effectiveMonthlyCost:640,trafficGB:500,trafficReset:"每月",features:["月付","500G","企业级"]},{id:"langwang-plan-17",brandId:"langwang",name:"浪网·浪网 精英流量包",billingCycle:"一次性付费",actualPayment:1099,effectiveMonthlyCost:1099,trafficGB:900,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","900G","企业级"]},{id:"langwang-plan-18",brandId:"langwang",name:"浪网·浪网 进阶",billingCycle:"月付",actualPayment:70,effectiveMonthlyCost:70,trafficGB:450,trafficReset:"每月",features:["月付","450G","企业级"]},{id:"langwang-plan-19",brandId:"langwang",name:"浪网·浪网 进阶",billingCycle:"季付",actualPayment:199.5,effectiveMonthlyCost:66.5,trafficGB:450,trafficReset:"每月",features:["季付","450G","企业级"]},{id:"langwang-plan-20",brandId:"langwang",name:"浪网·浪网 进阶",billingCycle:"半年付",actualPayment:378,effectiveMonthlyCost:31.5,trafficGB:450,trafficReset:"每月",features:["半年付","450G","企业级"]},{id:"langwang-plan-21",brandId:"langwang",name:"浪网·浪网 进阶",billingCycle:"年付",actualPayment:714,effectiveMonthlyCost:59.5,trafficGB:450,trafficReset:"每月",features:["年付","450G","企业级"]},{id:"langwang-plan-22",brandId:"langwang",name:"浪网·浪网 进阶",billingCycle:"两年付",actualPayment:1344,effectiveMonthlyCost:112,trafficGB:450,trafficReset:"每月",features:["两年付","450G","企业级"]},{id:"langwang-plan-23",brandId:"langwang",name:"浪网·浪网 进阶",billingCycle:"三年付",actualPayment:1890,effectiveMonthlyCost:157.5,trafficGB:450,trafficReset:"每月",features:["三年付","450G","企业级"]},{id:"langwang-plan-24",brandId:"langwang",name:"浪网·浪网 入门",billingCycle:"月付",actualPayment:30,effectiveMonthlyCost:30,trafficGB:150,trafficReset:"每月",features:["月付","截150G","企业级"]},{id:"langwang-plan-25",brandId:"langwang",name:"浪网·浪网 入门",billingCycle:"季付",actualPayment:85.5,effectiveMonthlyCost:28.5,trafficGB:150,trafficReset:"每月",features:["季付","截150G","企业级"]},{id:"langwang-plan-26",brandId:"langwang",name:"浪网·浪网 入门",billingCycle:"半年付",actualPayment:162,effectiveMonthlyCost:13.5,trafficGB:150,trafficReset:"每月",features:["半年付","截150G","企业级"]},{id:"langwang-plan-27",brandId:"langwang",name:"浪网·浪网 入门",billingCycle:"年付",actualPayment:306,effectiveMonthlyCost:25.5,trafficGB:150,trafficReset:"每月",features:["年付","截150G","企业级"]},{id:"langwang-plan-28",brandId:"langwang",name:"浪网·浪网 入门",billingCycle:"两年付",actualPayment:576,effectiveMonthlyCost:48,trafficGB:150,trafficReset:"每月",features:["两年付","截150G","企业级"]},{id:"langwang-plan-29",brandId:"langwang",name:"浪网·浪网 入门",billingCycle:"三年付",actualPayment:810,effectiveMonthlyCost:67.5,trafficGB:150,trafficReset:"每月",features:["三年付","截150G","企业级"]},{id:"edgenova-plan-1",brandId:"edgenova",name:"EdgeNova·限时月付",billingCycle:"月付",actualPayment:15,effectiveMonthlyCost:15,trafficGB:72,trafficReset:"每月",features:["月付","72G","全专线"]},{id:"edgenova-plan-2",brandId:"edgenova",name:"EdgeNova·限时年付",billingCycle:"年付",actualPayment:108,effectiveMonthlyCost:9,trafficGB:45,trafficReset:"每月",features:["年付","45G","全专线"]},{id:"edgenova-plan-3",brandId:"edgenova",name:"EdgeNova·极界·标准",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:120,trafficReset:"每月",features:["月付","120G","全专线"]},{id:"edgenova-plan-4",brandId:"edgenova",name:"EdgeNova·极界·标准",billingCycle:"季付",actualPayment:70,effectiveMonthlyCost:23.33,trafficGB:120,trafficReset:"每月",features:["季付","120G","全专线"]},{id:"edgenova-plan-5",brandId:"edgenova",name:"EdgeNova·极界·标准",billingCycle:"半年付",actualPayment:130,effectiveMonthlyCost:10.83,trafficGB:120,trafficReset:"每月",features:["半年付","120G","全专线"]},{id:"edgenova-plan-6",brandId:"edgenova",name:"EdgeNova·极界·标准",billingCycle:"年付",actualPayment:270,effectiveMonthlyCost:22.5,trafficGB:120,trafficReset:"每月",features:["年付","120G","全专线"]},{id:"edgenova-plan-7",brandId:"edgenova",name:"EdgeNova·极界·进阶",billingCycle:"月付",actualPayment:50,effectiveMonthlyCost:50,trafficGB:250,trafficReset:"每月",features:["月付","250G","全专线"]},{id:"edgenova-plan-8",brandId:"edgenova",name:"EdgeNova·极界·进阶",billingCycle:"季付",actualPayment:145,effectiveMonthlyCost:48.33,trafficGB:250,trafficReset:"每月",features:["季付","250G","全专线"]},{id:"edgenova-plan-9",brandId:"edgenova",name:"EdgeNova·极界·进阶",billingCycle:"半年付",actualPayment:280,effectiveMonthlyCost:23.33,trafficGB:250,trafficReset:"每月",features:["半年付","250G","全专线"]},{id:"edgenova-plan-10",brandId:"edgenova",name:"EdgeNova·极界·进阶",billingCycle:"年付",actualPayment:570,effectiveMonthlyCost:47.5,trafficGB:250,trafficReset:"每月",features:["年付","250G","全专线"]},{id:"edgenova-plan-11",brandId:"edgenova",name:"EdgeNova·极界·高级",billingCycle:"月付",actualPayment:100,effectiveMonthlyCost:100,trafficGB:500,trafficReset:"每月",features:["月付","500G","全专线"]},{id:"edgenova-plan-12",brandId:"edgenova",name:"EdgeNova·极界·高级",billingCycle:"季付",actualPayment:290,effectiveMonthlyCost:96.67,trafficGB:500,trafficReset:"每月",features:["季付","500G","全专线"]},{id:"edgenova-plan-13",brandId:"edgenova",name:"EdgeNova·极界·高级",billingCycle:"半年付",actualPayment:580,effectiveMonthlyCost:48.33,trafficGB:500,trafficReset:"每月",features:["半年付","500G","全专线"]},{id:"edgenova-plan-14",brandId:"edgenova",name:"EdgeNova·极界·高级",billingCycle:"年付",actualPayment:1100,effectiveMonthlyCost:91.67,trafficGB:500,trafficReset:"每月",features:["年付","500G","全专线"]},{id:"edgenova-plan-15",brandId:"edgenova",name:"EdgeNova·极界·极限",billingCycle:"月付",actualPayment:200,effectiveMonthlyCost:200,trafficGB:1e3,trafficReset:"每月",features:["月付","1000G","全专线"]},{id:"edgenova-plan-16",brandId:"edgenova",name:"EdgeNova·极界·极限",billingCycle:"季付",actualPayment:580,effectiveMonthlyCost:193.33,trafficGB:1e3,trafficReset:"每月",features:["季付","1000G","全专线"]},{id:"edgenova-plan-17",brandId:"edgenova",name:"EdgeNova·极界·极限",billingCycle:"半年付",actualPayment:1150,effectiveMonthlyCost:95.83,trafficGB:1e3,trafficReset:"每月",features:["半年付","1000G","全专线"]},{id:"edgenova-plan-18",brandId:"edgenova",name:"EdgeNova·极界·极限",billingCycle:"年付",actualPayment:2300,effectiveMonthlyCost:191.67,trafficGB:1e3,trafficReset:"每月",features:["年付","1000G","全专线"]},{id:"firefly-plan-1",brandId:"firefly",name:"萤火虫·Firefly年付版",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60G/月","全专线"]},{id:"firefly-plan-2",brandId:"firefly",name:"萤火虫·Firefly Lite",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150G/月","全专线"]},{id:"firefly-plan-3",brandId:"firefly",name:"萤火虫·Firefly Lite",billingCycle:"季付",actualPayment:67,effectiveMonthlyCost:22.33,trafficGB:150,trafficReset:"每月",features:["季付","150G/月","全专线"]},{id:"firefly-plan-4",brandId:"firefly",name:"萤火虫·Firefly Lite",billingCycle:"半年付",actualPayment:127,effectiveMonthlyCost:10.58,trafficGB:150,trafficReset:"每月",features:["半年付","150G/月","全专线"]},{id:"firefly-plan-5",brandId:"firefly",name:"萤火虫·Firefly Lite",billingCycle:"年付",actualPayment:240,effectiveMonthlyCost:20,trafficGB:150,trafficReset:"每月",features:["年付","150G/月","全专线"]},{id:"firefly-plan-6",brandId:"firefly",name:"萤火虫·Firefly Lite",billingCycle:"两年付",actualPayment:420,effectiveMonthlyCost:35,trafficGB:150,trafficReset:"每月",features:["两年付","150G/月","全专线"]},{id:"firefly-plan-7",brandId:"firefly",name:"萤火虫·Firefly Lite",billingCycle:"三年付",actualPayment:540,effectiveMonthlyCost:45,trafficGB:150,trafficReset:"每月",features:["三年付","150G/月","全专线"]},{id:"firefly-plan-8",brandId:"firefly",name:"萤火虫·Firefly Plus",billingCycle:"月付",actualPayment:45,effectiveMonthlyCost:45,trafficGB:300,trafficReset:"每月",features:["月付","300G/月","全专线"]},{id:"firefly-plan-9",brandId:"firefly",name:"萤火虫·Firefly Plus",billingCycle:"季付",actualPayment:121,effectiveMonthlyCost:40.33,trafficGB:300,trafficReset:"每月",features:["季付","300G/月","全专线"]},{id:"firefly-plan-10",brandId:"firefly",name:"萤火虫·Firefly Plus",billingCycle:"半年付",actualPayment:229,effectiveMonthlyCost:19.08,trafficGB:300,trafficReset:"每月",features:["半年付","300G/月","全专线"]},{id:"firefly-plan-11",brandId:"firefly",name:"萤火虫·Firefly Plus",billingCycle:"年付",actualPayment:432,effectiveMonthlyCost:36,trafficGB:300,trafficReset:"每月",features:["年付","300G/月","全专线"]},{id:"firefly-plan-12",brandId:"firefly",name:"萤火虫·Firefly Plus",billingCycle:"两年付",actualPayment:756,effectiveMonthlyCost:63,trafficGB:300,trafficReset:"每月",features:["两年付","300G/月","全专线"]},{id:"firefly-plan-13",brandId:"firefly",name:"萤火虫·Firefly Plus",billingCycle:"三年付",actualPayment:972,effectiveMonthlyCost:81,trafficGB:300,trafficReset:"每月",features:["三年付","300G/月","全专线"]},{id:"firefly-plan-14",brandId:"firefly",name:"萤火虫·Firefly Blaze",billingCycle:"月付",actualPayment:85,effectiveMonthlyCost:85,trafficGB:600,trafficReset:"每月",features:["月付","600G/月","全专线"]},{id:"firefly-plan-15",brandId:"firefly",name:"萤火虫·Firefly Blaze",billingCycle:"季付",actualPayment:229,effectiveMonthlyCost:76.33,trafficGB:600,trafficReset:"每月",features:["季付","600G/月","全专线"]},{id:"firefly-plan-16",brandId:"firefly",name:"萤火虫·Firefly Blaze",billingCycle:"半年付",actualPayment:433,effectiveMonthlyCost:36.08,trafficGB:600,trafficReset:"每月",features:["半年付","600G/月","全专线"]},{id:"firefly-plan-17",brandId:"firefly",name:"萤火虫·Firefly Blaze",billingCycle:"年付",actualPayment:816,effectiveMonthlyCost:68,trafficGB:600,trafficReset:"每月",features:["年付","600G/月","全专线"]},{id:"firefly-plan-18",brandId:"firefly",name:"萤火虫·Firefly Blaze",billingCycle:"两年付",actualPayment:1428,effectiveMonthlyCost:119,trafficGB:600,trafficReset:"每月",features:["两年付","600G/月","全专线"]},{id:"firefly-plan-19",brandId:"firefly",name:"萤火虫·Firefly Blaze",billingCycle:"三年付",actualPayment:1836,effectiveMonthlyCost:153,trafficGB:600,trafficReset:"每月",features:["三年付","600G/月","全专线"]},{id:"firefly-plan-20",brandId:"firefly",name:"萤火虫·Firefly Nova",billingCycle:"月付",actualPayment:150,effectiveMonthlyCost:150,trafficGB:1e3,trafficReset:"每月",features:["月付","1000G/月","全专线"]},{id:"firefly-plan-21",brandId:"firefly",name:"萤火虫·Firefly Nova",billingCycle:"季付",actualPayment:400,effectiveMonthlyCost:133.33,trafficGB:1e3,trafficReset:"每月",features:["季付","1000G/月","全专线"]},{id:"firefly-plan-22",brandId:"firefly",name:"萤火虫·Firefly Nova",billingCycle:"半年付",actualPayment:750,effectiveMonthlyCost:62.5,trafficGB:1e3,trafficReset:"每月",features:["半年付","1000G/月","全专线"]},{id:"firefly-plan-23",brandId:"firefly",name:"萤火虫·Firefly Nova",billingCycle:"年付",actualPayment:1360,effectiveMonthlyCost:113.33,trafficGB:1e3,trafficReset:"每月",features:["年付","1000G/月","全专线"]},{id:"firefly-plan-24",brandId:"firefly",name:"萤火虫·Firefly Nova",billingCycle:"两年付",actualPayment:2399,effectiveMonthlyCost:199.92,trafficGB:1e3,trafficReset:"每月",features:["两年付","1000G/月","全专线"]},{id:"firefly-plan-25",brandId:"firefly",name:"萤火虫·Firefly Nova",billingCycle:"三年付",actualPayment:3119,effectiveMonthlyCost:259.92,trafficGB:1e3,trafficReset:"每月",features:["三年付","1000G/月","全专线"]},{id:"firefly-plan-26",brandId:"firefly",name:"萤火虫·Firefly不限时",billingCycle:"一次性付费",actualPayment:100,effectiveMonthlyCost:100,trafficGB:100,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","100G","全专线"]},{id:"sslar-plan-1",brandId:"sslar",name:"sslar·Basic",billingCycle:"月付",actualPayment:17,effectiveMonthlyCost:17,trafficGB:100,trafficReset:"每月",features:["月付","100G","企业级"]},{id:"sslar-plan-2",brandId:"sslar",name:"sslar·Basic",billingCycle:"季付",actualPayment:46,effectiveMonthlyCost:15.33,trafficGB:100,trafficReset:"每月",features:["季付","100G","企业级"]},{id:"sslar-plan-3",brandId:"sslar",name:"sslar·Basic",billingCycle:"半年付",actualPayment:87,effectiveMonthlyCost:7.25,trafficGB:100,trafficReset:"每月",features:["半年付","100G","企业级"]},{id:"sslar-plan-4",brandId:"sslar",name:"sslar·Basic",billingCycle:"年付",actualPayment:163,effectiveMonthlyCost:13.58,trafficGB:100,trafficReset:"每月",features:["年付","100G","企业级"]},{id:"sslar-plan-5",brandId:"sslar",name:"sslar·Standard",billingCycle:"月付",actualPayment:28,effectiveMonthlyCost:28,trafficGB:200,trafficReset:"每月",features:["月付","200G","企业级"]},{id:"sslar-plan-6",brandId:"sslar",name:"sslar·Standard",billingCycle:"季付",actualPayment:76,effectiveMonthlyCost:25.33,trafficGB:200,trafficReset:"每月",features:["季付","200G","企业级"]},{id:"sslar-plan-7",brandId:"sslar",name:"sslar·Standard",billingCycle:"半年付",actualPayment:143,effectiveMonthlyCost:11.92,trafficGB:200,trafficReset:"每月",features:["半年付","200G","企业级"]},{id:"sslar-plan-8",brandId:"sslar",name:"sslar·Standard",billingCycle:"年付",actualPayment:268,effectiveMonthlyCost:22.33,trafficGB:200,trafficReset:"每月",features:["年付","200G","企业级"]},{id:"sslar-plan-9",brandId:"sslar",name:"sslar·Premium",billingCycle:"月付",actualPayment:36,effectiveMonthlyCost:36,trafficGB:300,trafficReset:"每月",features:["月付","300G","企业级"]},{id:"sslar-plan-10",brandId:"sslar",name:"sslar·Premium",billingCycle:"季付",actualPayment:97,effectiveMonthlyCost:32.33,trafficGB:300,trafficReset:"每月",features:["季付","300G","企业级"]},{id:"sslar-plan-11",brandId:"sslar",name:"sslar·Premium",billingCycle:"半年付",actualPayment:183,effectiveMonthlyCost:15.25,trafficGB:300,trafficReset:"每月",features:["半年付","300G","企业级"]},{id:"sslar-plan-12",brandId:"sslar",name:"sslar·Premium",billingCycle:"年付",actualPayment:345,effectiveMonthlyCost:28.75,trafficGB:300,trafficReset:"每月",features:["年付","300G","企业级"]},{id:"lightspeed-snooker-147",brandId:"lightspeed",name:"光速云·致敬斯诺克147永久套餐",billingCycle:"一次性付费 (永久有效)",actualPayment:147,effectiveMonthlyCost:12.25,trafficGB:247,trafficReset:"一次性永久有效无忧过期",features:["247GB永久版","单节点最高2.5Gbps","不限设备","全平台AI与TikTok解锁","双专线架构"]},{id:"lightspeed-lite-99",brandId:"lightspeed",name:"光速云·轻量版 (年付特惠)",billingCycle:"年付",actualPayment:99,effectiveMonthlyCost:8.25,trafficGB:69,trafficReset:"每月重置",features:["优惠码 AMM 折后 ¥8.25/月","每月69GB","原生稳定节点","不限设备","AI与流媒体全支持"]},{id:"lightspeed-speed-25",brandId:"lightspeed",name:"光速云·极速版 (单月付主力)",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:168,trafficReset:"每月重置",features:["全节点 1.0x 无套路","全球 IPLC 专线","每月168GB","最高2.5Gbps速率","7×24小时运维"]},{id:"lightspeed-custom-680",brandId:"lightspeed",name:"光速云·企业定制版",billingCycle:"月付",actualPayment:680,effectiveMonthlyCost:680,trafficGB:500,trafficReset:"每月重置",features:["独享专属原生IP","独立物理带宽","全IPLC专线","按需定制出口","跨境电商与直播企业首选"]}],al={class:"plan-table-wrapper"},rl={key:0,class:"table-controls"},il={class:"filter-group"},sl={class:"table-responsive"},ll={class:"plan-table"},ol={class:"brand-cell"},cl={class:"plan-subname"},dl={class:"payment-cell"},ul={class:"actual-price"},fl={class:"cost-cell"},yl={class:"monthly-cost"},ml={class:"traffic-cell"},pl={class:"rate-note"},gl={class:"tags-list"},vl={class:"verify-cell"},hl=I({__name:"PlanTable",props:{brandId:{},showFilter:{type:Boolean,default:!0}},setup(t){const n=t,a=$("all"),r=o=>{switch(o){case"monthly":return"月付";case"quarterly":return"季付";case"yearly":return"年付";case"once":return"不限时/一次性";default:return o}},s=o=>{const f=O.find(u=>u.id===o);return f?f.name:o},c=P(()=>nl.filter(o=>!(n.brandId&&o.brandId!==n.brandId||a.value!=="all"&&o.billingCycle!==a.value)));return(o,f)=>(i(),l("div",al,[t.showFilter?(i(),l("div",rl,[e("div",il,[f[2]||(f[2]=e("label",null,"按计费周期筛选：",-1)),N(e("select",{"onUpdate:modelValue":f[0]||(f[0]=u=>a.value=u)},[...f[1]||(f[1]=[te('<option value="all" data-v-7c086a7f>全部周期</option><option value="monthly" data-v-7c086a7f>真单月付</option><option value="quarterly" data-v-7c086a7f>季付</option><option value="yearly" data-v-7c086a7f>年付折算</option><option value="once" data-v-7c086a7f>不限时一次性</option>',5)])],512),[[H,a.value]])])])):h("",!0),e("div",sl,[e("table",ll,[f[3]||(f[3]=e("thead",null,[e("tr",null,[e("th",null,"品牌 / 套餐名称"),e("th",null,"计费周期"),e("th",null,"首次实付 (元)"),e("th",null,"折算月价 (元/月)"),e("th",null,"月度流量"),e("th",null,"流量机制 / 倍率"),e("th",null,"核心特性与适用人群"),e("th",null,"最后核验")])],-1)),e("tbody",null,[(i(!0),l(L,null,x(c.value,u=>(i(),l("tr",{key:u.id},[e("td",ol,[e("strong",null,m(s(u.brandId)),1),e("div",cl,m(u.name),1)]),e("td",null,[e("span",{class:A(["cycle-badge",`cycle-${u.billingCycle}`])},m(r(u.billingCycle)),3)]),e("td",dl,[e("span",ul,"¥"+m(u.actualPayment),1)]),e("td",fl,[e("span",yl,"¥"+m(u.effectiveMonthlyCost.toFixed(2)),1)]),e("td",ml,[e("strong",null,m(u.trafficGB)+" GB",1)]),e("td",null,[e("div",null,m(u.trafficReset),1),e("div",pl,m(u.rateMultiplier),1)]),e("td",null,[e("div",gl,[(i(!0),l(L,null,x(u.features,(T,b)=>(i(),l("span",{key:b,class:"feature-tag"},m(T),1))),128))])]),e("td",vl,[e("small",null,m(u.verifiedAt),1)])]))),128))])])]),f[4]||(f[4]=e("div",{class:"table-foot-note"}," * 价格说明：实付款为首次结算时需向服务商支付的实际金额。年付与季付折算月价仅作为长期成本参考，绝不可当作单月付选购。所有套餐数据来自客观资料快照，未含任何未经确认的促销假扣减。 ",-1))]))}}),bl=B(hl,[["__scopeId","data-v-7c086a7f"]]),Gl=["title"],Il={class:"badge-text"},Cl=I({__name:"EvidenceBadge",props:{result:{default:"unknown"},text:{}},setup(t){const n=t,a=P(()=>{switch(n.result){case"success":return"success";case"partial":return"warning";case"failure":return"danger";case"not_tested":case"not_applicable":case"unknown":default:return"neutral"}}),r=P(()=>{if(n.text)return n.text;switch(n.result){case"success":return"实测可用";case"partial":return"部分可用/受限";case"failure":return"实测阻断/不可用";case"not_tested":return"未测试";case"not_applicable":return"不适用";case"unknown":default:return"状态未知(未测)"}}),s=P(()=>{switch(n.result){case"success":return"在指定测试环境中验证达成目标任务";case"partial":return"网页或基础任务通过，但部分高级功能/出口受限";case"failure":return"在当期测试网络下出现 403 / 阻断 / 无法使用";case"not_tested":case"unknown":return"当前暂无独立复核记录，不代表必然支持或不支持";default:return""}});return(c,o)=>(i(),l("span",{class:A(["evidence-badge",`badge-${a.value}`]),title:s.value},[e("span",{class:A(["badge-dot",`dot-${a.value}`])},null,2),e("span",Il,m(r.value),1)],10,Gl))}}),He=B(Cl,[["__scopeId","data-v-6ba80048"]]),je=[{id:"obs-speedtest-sogo",brandId:"sogo",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-SOGO云-节点测速实测.png",imageFile:"/speedtests/SOGO云-节点测速实测.png"},{id:"obs-speedtest-u1s1",brandId:"u1s1",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-U1S1-节点测速实测.png",imageFile:"/speedtests/U1S1-节点测速实测.png"},{id:"obs-speedtest-2mao",brandId:"2mao",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-二猫云-节点测速实测.png",imageFile:"/speedtests/二猫云-节点测速实测.png"},{id:"obs-speedtest-flycat",brandId:"flycat",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-飞猫云-节点测速实测.png",imageFile:"/speedtests/飞猫云-节点测速实测.png"},{id:"obs-speedtest-guangnian",brandId:"guangnian",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-光年梯-节点测速实测.png",imageFile:"/speedtests/光年梯-节点测速实测.png"},{id:"obs-speedtest-lightspeed",brandId:"lightspeed",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-光速云-节点测速实测.png",imageFile:"/speedtests/光速云-节点测速实测.png"},{id:"obs-speedtest-jilian",brandId:"jilian",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-极连云-节点测速实测.png",imageFile:"/speedtests/极连云-节点测速实测.png"},{id:"obs-speedtest-kexin",brandId:"kexin",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-可信云-节点测速实测.png",imageFile:"/speedtests/可信云-节点测速实测.png"},{id:"obs-speedtest-lingmao",brandId:"lingmao",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-灵猫网络-节点测速实测.png",imageFile:"/speedtests/灵猫网络-节点测速实测.png"},{id:"obs-speedtest-quanqiu",brandId:"quanqiu",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-全球云-节点测速实测.png",imageFile:"/speedtests/全球云-节点测速实测.png"},{id:"obs-speedtest-sujie",brandId:"sujie",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-速界-节点测速实测.png",imageFile:"/speedtests/速界-节点测速实测.png"},{id:"obs-speedtest-v2yun",brandId:"v2yun",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-唯兔云-节点测速实测.png",imageFile:"/speedtests/唯兔云-节点测速实测.png"},{id:"obs-speedtest-stardream",brandId:"stardream",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-星岛梦-节点测速实测.png",imageFile:"/speedtests/星岛梦-节点测速实测.png"},{id:"obs-speedtest-yifan",brandId:"yifan",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-一翻云-节点测速实测.png",imageFile:"/speedtests/一翻云-节点测速实测.png"},{id:"obs-speedtest-yuzhou",brandId:"yuzhou",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 VLESS，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-宇宙云-节点测速实测.png",imageFile:"/speedtests/宇宙云-节点测速实测.png"},{id:"obs-ls-ai",brandId:"lightspeed",platformId:"openai",productId:"chatgpt-web",taskId:"task-stream-chat",regionId:"jp",nodeTag:"日本 01 [IEPL专线]",observedExitRegion:"日本（东京）",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-19",rttMs:35,notes:"2026-08-19 实测验证：网页长文本流式输出完成率 100%，未触发人机验证拦截。"},{id:"obs-ls-streaming",brandId:"lightspeed",platformId:"netflix",productId:"netflix-4k",taskId:"task-4k-play",regionId:"us",nodeTag:"美国 01 [专线]",observedExitRegion:"美国（洛杉矶）",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-19",rttMs:142,notes:"2026-08-19 实测验证：美区 Netflix 原生片目持续播放 180 秒无弹窗阻断，YouTube 4K 连接带宽超 55,000 Kbps。"},{id:"obs-wc-ai",brandId:"wgetcloud",platformId:"anthropic",productId:"claude-web",taskId:"task-auth",regionId:"sg",nodeTag:"新加坡 01 [华为云专线]",observedExitRegion:"新加坡",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-24",rttMs:48,notes:"2026-08-24 测速：59个节点全量可用，平均下载超 50MB/s，Claude 登录正常。"}],Pl=[{id:"openai",name:"OpenAI / ChatGPT",officialDocUrl:"https://help.openai.com/en/articles/7947663-chatgpt-supported-countries",description:"全球领先的大语言模型平台，涵盖网页对话、移动客户端及开发者 API。"},{id:"anthropic",name:"Anthropic / Claude",officialDocUrl:"https://support.claude.com/en/articles/8461763-where-can-i-access-claude",description:"主打高智能与长上下文的大语言模型，对出口网络机房属性与地区合规风控极其严苛。"},{id:"google",name:"Google / Gemini",officialDocUrl:"https://ai.google.dev/gemini-api/docs/available-regions",description:"深度整合 Google 生态的 AI 工具，涵盖 Web 应用、AI Studio 工作台及多模态 API。"},{id:"netflix",name:"Netflix",officialDocUrl:"https://help.netflix.com/en/node/114701",description:"全球流媒体巨头，按国家划分独占版权片库，严格拦截数据中心代理 IP。"},{id:"disney",name:"Disney+",officialDocUrl:"https://help.disneyplus.com/article/disneyplus-error-73",description:"包含迪士尼、漫威、星战等 IP 的流媒体平台，严控地区认证与 Error 73 报错。"},{id:"youtube",name:"YouTube",officialDocUrl:"https://www.youtube.com",description:"全球最大视频点播与直播平台，支持 4K/60fps HDR 及高码率点播。"},{id:"tiktok",name:"TikTok",officialDocUrl:"https://support.tiktok.com/",description:"全球短视频与跨境电商社交平台，对 SIM 卡与住宅原生出口网络要求极高。"},{id:"speedtest",name:"全节点测速与延迟基准 (Speedtest)",officialDocUrl:"https://github.com",description:"基于 MAI-TEST-BOT 标准化探针的全节点延迟 (TLS RTT) 与下载吞吐带宽基准压测。"}],Bl=[{id:"chatgpt-web",platformId:"openai",name:"ChatGPT 网页版",entryUrl:"https://chatgpt.com"},{id:"chatgpt-mobile",platformId:"openai",name:"ChatGPT 移动官方应用",entryUrl:"https://chatgpt.com"},{id:"openai-api",platformId:"openai",name:"OpenAI 官方 API",entryUrl:"https://api.openai.com"},{id:"claude-web",platformId:"anthropic",name:"Claude 网页版",entryUrl:"https://claude.ai"},{id:"claude-code",platformId:"anthropic",name:"Claude Code 终端编程工具",entryUrl:"https://claude.ai/code"},{id:"claude-api",platformId:"anthropic",name:"Anthropic 官方 API",entryUrl:"https://api.anthropic.com"},{id:"gemini-app",platformId:"google",name:"Gemini Web / 移动应用",entryUrl:"https://gemini.google.com"},{id:"google-ai-studio",platformId:"google",name:"Google AI Studio",entryUrl:"https://aistudio.google.com"},{id:"gemini-api",platformId:"google",name:"Gemini Developer API",entryUrl:"https://generativelanguage.googleapis.com"},{id:"netflix-playback",platformId:"netflix",name:"Netflix 实际版权片目播放",entryUrl:"https://netflix.com"},{id:"disney-playback",platformId:"disney",name:"Disney+ 实际播放",entryUrl:"https://disneyplus.com"},{id:"youtube-4k",platformId:"youtube",name:"YouTube 4K 点播与直播",entryUrl:"https://youtube.com"},{id:"tiktok-flow",platformId:"tiktok",name:"TikTok 视频信息流与发布",entryUrl:"https://tiktok.com"}],kl=[{id:"task-auth",name:"账号认证与安全登录",tier:3,successCondition:"成功通过登录验证且不出现 Access Denied / 验证码死循环"},{id:"task-stream-chat",name:"长文本流式对话生成",tier:3,successCondition:"输入 500 字以上复杂 Prompt，持续稳定生成，无 Network Error 中断"},{id:"task-file-upload",name:"多模态附件/图片上传",tier:3,successCondition:"成功上传 10MB 以上文档或多张图片并完成内容解析"},{id:"task-api-ttft",name:"API 首字耗时与流式响应",tier:3,successCondition:"HTTP 200 返回，首字时延（TTFT）处于可控区间且数据完整"},{id:"task-video-playback",name:"版权片目播放防代理阻断",tier:3,successCondition:"连续播放非自制独家片目 3 分钟以上无代理报错"},{id:"task-4k-buffer",name:"高码率持续缓冲抗丢帧",tier:4,successCondition:"YouTube 4K/60fps 播放，Connection Speed > 35Mbps，无掉帧"},{id:"task-tiktok-publish",name:"短视频正常发布与地区识别",tier:3,successCondition:"视频成功发布且在目标区域正常展现"}],Sl={class:"matrix-container"},Tl={class:"matrix-filter-bar"},Ml={class:"filter-item"},_l={class:"filter-item"},Rl={class:"filter-item"},$l={class:"table-responsive"},Ll={class:"matrix-table"},Al={class:"brand-col"},wl={class:"node-tag-txt"},xl={class:"platform-tag"},Vl={class:"product-txt"},El={class:"task-txt"},Nl={class:"exit-txt"},Dl={key:0,class:"rtt-val"},Ol={key:1,class:"text-muted"},Fl={class:"provenance-tag"},ql={class:"date-txt"},Ul={class:"notes-txt"},Hl={key:0},jl=I({__name:"PlatformTaskMatrix",setup(t){const n=$("all"),a=$("all"),r=$("all"),s=b=>{const g=O.find(G=>G.id===b);return g?g.name:b},c=b=>{const g=Pl.find(G=>G.id===b);return g?g.name:b},o=b=>{const g=Bl.find(G=>G.id===b);return g?g.name:b},f=b=>{const g=kl.find(G=>G.id===b);return g?g.name:b},u=(b,g)=>g==="openai"||g==="anthropic"||g==="google"?b!=="hk":!0,T=P(()=>je.filter(b=>!(n.value!=="all"&&b.platformId!==n.value||a.value!=="all"&&b.regionId!==a.value||r.value!=="all"&&b.result!==r.value)));return(b,g)=>(i(),l("div",Sl,[e("div",Tl,[e("div",Ml,[g[4]||(g[4]=e("label",null,"目标平台：",-1)),N(e("select",{"onUpdate:modelValue":g[0]||(g[0]=G=>n.value=G)},[...g[3]||(g[3]=[te('<option value="all" data-v-6ae453b8>全部平台</option><option value="openai" data-v-6ae453b8>OpenAI / ChatGPT</option><option value="anthropic" data-v-6ae453b8>Anthropic / Claude</option><option value="google" data-v-6ae453b8>Google / Gemini</option><option value="netflix" data-v-6ae453b8>Netflix</option><option value="disney" data-v-6ae453b8>Disney+</option><option value="youtube" data-v-6ae453b8>YouTube</option>',7)])],512),[[H,n.value]])]),e("div",_l,[g[6]||(g[6]=e("label",null,"节点出口地区：",-1)),N(e("select",{"onUpdate:modelValue":g[1]||(g[1]=G=>a.value=G)},[...g[5]||(g[5]=[te('<option value="all" data-v-6ae453b8>全部地区</option><option value="hk" data-v-6ae453b8>香港 [HK]</option><option value="jp" data-v-6ae453b8>日本 [JP]</option><option value="sg" data-v-6ae453b8>新加坡 [SG]</option><option value="us" data-v-6ae453b8>美国 [US]</option>',5)])],512),[[H,a.value]])]),e("div",Rl,[g[8]||(g[8]=e("label",null,"实测结果：",-1)),N(e("select",{"onUpdate:modelValue":g[2]||(g[2]=G=>r.value=G)},[...g[7]||(g[7]=[e("option",{value:"all"},"全部结果",-1),e("option",{value:"success"},"实测可用",-1),e("option",{value:"partial"},"部分受限",-1),e("option",{value:"failure"},"阻断/失败",-1)])],512),[[H,r.value]])])]),e("div",$l,[e("table",Ll,[g[10]||(g[10]=e("thead",null,[e("tr",null,[e("th",null,"品牌 / 节点标签"),e("th",null,"平台与具体产品"),e("th",null,"实测执行任务"),e("th",null,"官方资格状态"),e("th",null,"出口识别地区"),e("th",null,"实测结论"),e("th",null,"TLS 延迟"),e("th",null,"证据来源 / 记录日期"),e("th",null,"局限与备注说明")])],-1)),e("tbody",null,[(i(!0),l(L,null,x(T.value,G=>(i(),l("tr",{key:G.id},[e("td",Al,[e("strong",null,m(s(G.brandId)),1),e("div",wl,m(G.nodeTag),1)]),e("td",null,[e("span",xl,m(c(G.platformId)),1),e("div",Vl,m(o(G.productId)),1)]),e("td",null,[e("span",El,m(f(G.taskId)),1)]),e("td",null,[e("span",{class:A(["official-check",u(G.regionId,G.platformId)?"eligible":"ineligible"])},m(u(G.regionId,G.platformId)?"官方白名单支持":"官方不支持(需分流)"),3)]),e("td",null,[e("span",Nl,m(G.observedExitRegion),1)]),e("td",null,[M(He,{result:G.result},null,8,["result"])]),e("td",null,[G.rttMs?(i(),l("span",Dl,m(G.rttMs)+" ms",1)):(i(),l("span",Ol,"-"))]),e("td",null,[e("div",Fl,"来源: "+m(G.provenance),1),e("small",ql,m(G.observedAt),1)]),e("td",null,[e("div",Ul,m(G.notes),1)])]))),128)),T.value.length===0?(i(),l("tr",Hl,[...g[9]||(g[9]=[e("td",{colspan:"9",class:"empty-cell"}," 当前筛选条件下暂无已归档测试记录（本站严格按真实测试呈现，绝不自动填补假绿色） ",-1)])])):h("",!0)])])]),g[11]||(g[11]=e("div",{class:"matrix-guideline"},[e("strong",null,"四层评估准则声明："),e("span",null," ① “实测可用”仅代表在指定测试窗口和网络环境下成功达成任务； ② 官方白名单依据平台官网技术文档（2026-10 状态）； ③ 严禁将单节点测速直接推论为全品牌全天候可用； ④ 任何未测试项一律显示为未知或留空，坚决拒绝伪造“全绿九宫格”。 ")],-1))]))}}),Ye=B(jl,[["__scopeId","data-v-6ae453b8"]]),Yl=[{id:"hk",name:"香港（Hong Kong）",latencyRange:"15 - 35 ms",physicalProximity:"近端直连 / 极低延迟",officialAiStatus:"官方不支持（部分工具需分流绕行）",officialStreamingStatus:"支持 Netflix、Disney+ 繁体中文库",recommendScenario:"流媒体点播、低延迟游戏与常规网页浏览"},{id:"jp",name:"日本（Japan）",latencyRange:"45 - 80 ms",physicalProximity:"亚太近端 / 专线高速",officialAiStatus:"官方全支持（ChatGPT / Claude / Gemini）",officialStreamingStatus:"日区专属片库 / 动画独播丰富",recommendScenario:"AI 办公主力、流媒体综合主力"},{id:"sg",name:"新加坡（Singapore）",latencyRange:"40 - 70 ms",physicalProximity:"东南亚核心骨干汇聚",officialAiStatus:"官方全支持（ChatGPT / Claude / Gemini）",officialStreamingStatus:"中英双语字幕支持优良",recommendScenario:"跨国协作、AI 与开发调用双重主力"},{id:"us",name:"美国（United States）",latencyRange:"130 - 190 ms",physicalProximity:"远端大洋路由",officialAiStatus:"所有 AI 工具的第一首发和最完整功能支持区",officialStreamingStatus:"美区最全片库，但对机房 IP 审查最严",recommendScenario:"AI 新功能测试、API 开发、原生内容挖掘"},{id:"tw",name:"台湾（Taiwan）",latencyRange:"35 - 55 ms",physicalProximity:"近端海缆",officialAiStatus:"官方全支持（ChatGPT / Claude / Gemini）",officialStreamingStatus:"最适合中文观看的 Netflix/Disney+ 字幕库",recommendScenario:"追剧、繁体中文 AI 交互与流媒体"},{id:"eu",name:"欧洲（Europe - 英法德）",latencyRange:"160 - 220 ms",physicalProximity:"欧亚大陆路由",officialAiStatus:"受 GDPR 影响，部分 AI 新实验功能稍慢",officialStreamingStatus:"欧洲本地独家影音内容",recommendScenario:"特定跨国业务、备份节点"}],zl={class:"region-selector-wrapper"},Wl={class:"region-nav-pills"},Kl=["onClick"],Xl={key:0,class:"region-detail-card"},Ql={class:"detail-header"},Jl={class:"latency-badge"},Zl={class:"detail-grid"},eo={class:"detail-item"},to={class:"value"},no={class:"detail-item"},ao={class:"value font-medium"},ro={class:"detail-item"},io={class:"value"},so={class:"detail-item"},lo={class:"value highlight"},oo=I({__name:"RegionSelector",setup(t){var s;const n=Yl,a=$(((s=n[0])==null?void 0:s.id)||"hk"),r=P(()=>n.find(c=>c.id===a.value));return(c,o)=>(i(),l("div",zl,[e("div",Wl,[(i(!0),l(L,null,x(d(n),f=>(i(),l("button",{key:f.id,class:A(["region-pill",{active:a.value===f.id}]),onClick:u=>a.value=f.id},m(f.name),11,Kl))),128))]),r.value?(i(),l("div",Xl,[e("div",Ql,[e("h4",null,m(r.value.name),1),e("span",Jl,"典型往返时延: "+m(r.value.latencyRange),1)]),e("div",Zl,[e("div",eo,[o[0]||(o[0]=e("span",{class:"label"},"物理路由与机房：",-1)),e("span",to,m(r.value.physicalProximity),1)]),e("div",no,[o[1]||(o[1]=e("span",{class:"label"},"AI 官方资格支持：",-1)),e("span",ao,m(r.value.officialAiStatus),1)]),e("div",ro,[o[2]||(o[2]=e("span",{class:"label"},"流媒体内容库：",-1)),e("span",io,m(r.value.officialStreamingStatus),1)]),e("div",so,[o[3]||(o[3]=e("span",{class:"label"},"推荐核心场景：",-1)),e("span",lo,m(r.value.recommendScenario),1)])])])):h("",!0)]))}}),co=B(oo,[["__scopeId","data-v-f7258a34"]]),uo={class:"test-report-card"},fo={class:"report-header"},yo={class:"report-title"},mo={class:"report-date"},po={class:"report-env"},go={class:"env-item"},vo={class:"env-v"},ho={class:"env-item"},bo={class:"env-v"},Go={class:"env-item"},Io={class:"env-v"},Co={class:"report-content"},Po=I({__name:"TestReport",props:{report:{}},setup(t){return(n,a)=>(i(),l("div",uo,[e("div",fo,[e("div",yo,[a[0]||(a[0]=e("span",{class:"report-badge"},"实测记录",-1)),e("h4",null,m(t.report.title),1)]),e("div",mo,m(t.report.date),1)]),e("div",po,[e("div",go,[a[1]||(a[1]=e("span",{class:"env-k"},"测试基准网络:",-1)),e("span",vo,m(t.report.networkBaseline||"家庭千兆宽带 (三网抽样)"),1)]),e("div",ho,[a[2]||(a[2]=e("span",{class:"env-k"},"客户端核心:",-1)),e("span",bo,m(t.report.clientCore||"Clash Meta (mihomo) / Sing-box"),1)]),e("div",Go,[a[3]||(a[3]=e("span",{class:"env-k"},"测试时段:",-1)),e("span",Io,m(t.report.timeWindow||"晚高峰 20:00 - 22:30 & 白天闲时"),1)])]),e("div",Co,[p(n.$slots,"default",{},void 0,!0)]),a[4]||(a[4]=e("div",{class:"report-footer"},[e("div",{class:"method-ver"},"评测方法版本: v2.4 (四层递进核查模型)"),e("div",{class:"disclaimer"},"注：本记录反映特定时间与网络节点表现，网络环境具备动态性，请结合最新复测考量。")],-1))]))}}),Bo=B(Po,[["__scopeId","data-v-d94e0339"]]),ko={class:"source-note-box"},So={class:"note-content"},To={key:0,class:"note-desc"},Mo={key:1,class:"note-meta"},_o=I({__name:"SourceNote",props:{refCode:{},desc:{},date:{}},setup(t){return(n,a)=>(i(),l("div",ko,[a[1]||(a[1]=e("span",{class:"note-icon"},"📌",-1)),e("div",So,[a[0]||(a[0]=e("span",{class:"note-label"},"事实溯源编号：",-1)),e("code",null,m(t.refCode),1),t.desc?(i(),l("span",To," — "+m(t.desc),1)):h("",!0),t.date?(i(),l("span",Mo," (核查记录日期: "+m(t.date)+")",1)):h("",!0)])]))}}),Ro=B(_o,[["__scopeId","data-v-db74281a"]]),$o=[{id:"offer-lightspeed-amm",brandId:"lightspeed",couponCode:"AMM",discountDescription:"官方优惠码 AMM，结账时输入立享专属折扣",actualPaymentAfterDiscount:99,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-flycat-flycat888",brandId:"flycat",couponCode:"flycat888",discountDescription:"官方优惠码 flycat888，结账时输入立享专属折扣",actualPaymentAfterDiscount:84,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-breezenet-flat888",brandId:"breezenet",couponCode:"flat888",discountDescription:"官方优惠码 flat888，结账时输入立享专属折扣",actualPaymentAfterDiscount:137,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-twilight-muguang5555",brandId:"twilight",couponCode:"muguang5555",discountDescription:"官方优惠码 muguang5555，结账时输入立享专属折扣",actualPaymentAfterDiscount:20,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-dalaoyun-dly888",brandId:"dalaoyun",couponCode:"dly888",discountDescription:"官方优惠码 dly888，结账时输入立享专属折扣",actualPaymentAfterDiscount:8.399999999999999,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-stardream-nmw888",brandId:"stardream",couponCode:"nmw888",discountDescription:"官方优惠码 nmw888，结账时输入立享专属折扣",actualPaymentAfterDiscount:96,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-2mao-ermao5555",brandId:"2mao",couponCode:"ermao5555",discountDescription:"官方优惠码 ermao5555，结账时输入立享专属折扣",actualPaymentAfterDiscount:99,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-wuyou-wuyou666",brandId:"wuyou",couponCode:"wuyou666",discountDescription:"官方优惠码 wuyou666，结账时输入立享专属折扣",actualPaymentAfterDiscount:79,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-v2yun-weitu666",brandId:"v2yun",couponCode:"weitu666",discountDescription:"官方优惠码 weitu666，结账时输入立享专属折扣",actualPaymentAfterDiscount:120,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-u1s1-akaka",brandId:"u1s1",couponCode:"akaka",discountDescription:"官方优惠码 akaka，结账时输入立享专属折扣",actualPaymentAfterDiscount:96,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-lingmao-lmao888",brandId:"lingmao",couponCode:"lmao888",discountDescription:"官方优惠码 lmao888，结账时输入立享专属折扣",actualPaymentAfterDiscount:85,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-jilian-ji8888",brandId:"jilian",couponCode:"ji8888",discountDescription:"官方优惠码 ji8888，结账时输入立享专属折扣",actualPaymentAfterDiscount:12.375,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-guangnian-gnt6666",brandId:"guangnian",couponCode:"gnt6666",discountDescription:"官方优惠码 gnt6666，结账时输入立享专属折扣",actualPaymentAfterDiscount:12.375,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-yifan-yfy6666",brandId:"yifan",couponCode:"yfy6666",discountDescription:"官方优惠码 yfy6666，结账时输入立享专属折扣",actualPaymentAfterDiscount:20,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-sogo-sogo10000",brandId:"sogo",couponCode:"SOGO10000",discountDescription:"官方优惠码 SOGO10000，结账时输入立享专属折扣",actualPaymentAfterDiscount:98,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-kexin-kkk333",brandId:"kexin",couponCode:"kkk333",discountDescription:"官方优惠码 kkk333，结账时输入立享专属折扣",actualPaymentAfterDiscount:22.5,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-sujie-sss1111",brandId:"sujie",couponCode:"sss1111",discountDescription:"官方优惠码 sss1111，结账时输入立享专属折扣",actualPaymentAfterDiscount:22.5,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-shandianshu-sd88",brandId:"shandianshu",couponCode:"sd88",discountDescription:"官方优惠码 sd88，结账时输入立享专属折扣",actualPaymentAfterDiscount:8.399999999999999,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-yunjiexian-yjx888",brandId:"yunjiexian",couponCode:"yjx888",discountDescription:"官方优惠码 yjx888，结账时输入立享专属折扣",actualPaymentAfterDiscount:8.399999999999999,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-liulianyun-ll88",brandId:"liulianyun",couponCode:"ll88",discountDescription:"官方优惠码 ll88，结账时输入立享专属折扣",actualPaymentAfterDiscount:8.399999999999999,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-shenxing-xs0077",brandId:"shenxing",couponCode:"xs0077",discountDescription:"官方优惠码 xs0077，结账时输入立享专属折扣",actualPaymentAfterDiscount:22.5,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-huanqiuti-hq66",brandId:"huanqiuti",couponCode:"HQ66",discountDescription:"官方优惠码 HQ66，结账时输入立享专属折扣",actualPaymentAfterDiscount:8.399999999999999,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-yinxingren-yxr888",brandId:"yinxingren",couponCode:"yxr888",discountDescription:"官方优惠码 yxr888，结账时输入立享专属折扣",actualPaymentAfterDiscount:24,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-tiziyun-tiziyun",brandId:"tiziyun",couponCode:"tiziyun",discountDescription:"官方优惠码 tiziyun，结账时输入立享专属折扣",actualPaymentAfterDiscount:22.5,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1}],Lo={class:"offer-header"},Ao={class:"offer-brand-name"},wo={class:"offer-status"},xo={key:0,class:"badge badge-neutral"},Vo={key:1,class:"badge badge-success"},Eo={class:"offer-body"},No={class:"discount-desc"},Do={key:0,class:"coupon-box"},Oo={class:"coupon-code"},Fo={class:"offer-specs"},qo={class:"spec-row"},Uo={class:"val"},Ho={class:"spec-row"},jo={class:"val"},Yo={key:0,class:"spec-row"},zo={class:"val text-muted"},Wo={class:"offer-footer"},Ko={class:"source-ref"},Xo=["href"],Qo=I({__name:"OfferCard",props:{offerId:{}},setup(t){const n=t,a=$(!1),r=P(()=>$o.find(f=>f.id===n.offerId)||{id:n.offerId,brandId:"unknown",couponCode:"",discountDescription:"优惠活动整理中",actualPaymentAfterDiscount:0,applicableScope:"全套餐",validUntil:null,sourceRef:"未知",isExpired:!1}),s=f=>{const u=O.find(T=>T.id===f);return u?u.name:f},c=P(()=>ve.find(f=>f.brandId===r.value.brandId)),o=f=>{navigator.clipboard&&navigator.clipboard.writeText(f).then(()=>{a.value=!0,setTimeout(()=>a.value=!1,2e3)})};return(f,u)=>(i(),l("div",{class:A(["offer-card",{expired:r.value.isExpired}])},[e("div",Lo,[e("div",Ao,m(s(r.value.brandId)),1),e("div",wo,[r.value.isExpired?(i(),l("span",xo,"已下架/失效")):(i(),l("span",Vo,"官方优惠生效中"))])]),e("div",Eo,[e("div",No,m(r.value.discountDescription),1),r.value.couponCode?(i(),l("div",Do,[u[1]||(u[1]=e("span",{class:"coupon-label"},"优惠码:",-1)),e("code",Oo,m(r.value.couponCode),1),e("button",{class:"copy-btn",onClick:u[0]||(u[0]=T=>o(r.value.couponCode))},m(a.value?"已复制":"复制"),1)])):h("",!0),e("div",Fo,[e("div",qo,[u[2]||(u[2]=e("span",{class:"label"},"适用范围:",-1)),e("span",Uo,m(r.value.applicableScope),1)]),e("div",Ho,[u[3]||(u[3]=e("span",{class:"label"},"有效期截止:",-1)),e("span",jo,m(r.value.validUntil||"长期官方活动 (以结算页为准)"),1)]),r.value.historyNote?(i(),l("div",Yo,[u[4]||(u[4]=e("span",{class:"label"},"历史变更:",-1)),e("span",zo,m(r.value.historyNote),1)])):h("",!0)])]),e("div",Wo,[e("div",Ko,"核验来源: "+m(r.value.sourceRef),1),c.value&&!r.value.isExpired?(i(),l("a",{key:0,href:c.value.url,target:"_blank",rel:"nofollow sponsored noopener",class:"btn-primary btn-sm"}," 去官网兑换 ",8,Xo)):h("",!0)])],2))}}),Jo=B(Qo,[["__scopeId","data-v-32b02a7c"]]),Zo={class:"decision-tree-card"},ec={class:"tree-interactive"},tc={class:"step-buttons"},nc=["onClick"],ac={key:0,class:"branch-detail"},rc={class:"flow-steps"},ic={class:"step-num"},sc={class:"step-txt"},lc={class:"flow-action"},oc=["href"],cc=I({__name:"DecisionTree",setup(t){const n=$("ai"),a=[{id:"ai",title:"🤖 AI 工作与开发",steps:["第一步：确认具体产品入口（ChatGPT 网页版、移动端、Claude Code 或 OpenAI API）","第二步：核查官方服务资格（如香港出口不支持 OpenAI 网页登录，需日本/新加坡节点）","第三步：查阅分平台任务矩阵，寻找有长文本流式与多模态实测证据的机场"],targetUrl:"/ai/",targetText:"进入 AI机场推荐看板"},{id:"streaming",title:"🎬 视频追剧与 TikTok",steps:["第一步：明确平台与片目需求（如 Netflix 日区动画、美区独家剧、Disney+ 或 YouTube 4K）","第二步：确认播放设备与客户端（电视机 AppleTV / 软路由 / 手机）","第三步：核验节点高峰期抗拥塞能力与版权片目实际播放记录，避免仅看首页"],targetUrl:"/streaming/",targetText:"进入 流媒体机场选型指南"},{id:"free",title:"🎁 零预算与试用",steps:["第一步：了解零付款资源的生命周期与限速限额风险","第二步：核查试用资格是否需绑定支付方式或安装未知根证书（严防安全隐患）","第三步：若免费无法满足工作，对比低至 ¥7~10/月 的正规小额月付方案"],targetUrl:"/free/",targetText:"查看 免费机场与试用核查"},{id:"troubleshoot",title:"🛠️ 已有故障排查",steps:["第一步：区分是平台风控（429/403/Access Denied）还是网络底层断连","第二步：检查客户端 DNS 解析与分流规则（TUN模式与系统代理差异）","第三步：依据症状决策树逐步回退验证，定位原因前不盲目频繁换节点"],targetUrl:"/guides/",targetText:"进入 AI使用与网络排障指南"}],r=P(()=>a.find(s=>s.id===n.value));return(s,c)=>(i(),l("div",Zo,[c[1]||(c[1]=e("div",{class:"tree-header"},[e("span",{class:"tree-badge"},"选型决策树"),e("h4",null,"你主要用网络做什么？点击分支直接获取行动路径")],-1)),e("div",ec,[e("div",tc,[(i(),l(L,null,x(a,o=>e("button",{key:o.id,class:A(["branch-btn",{active:n.value===o.id}]),onClick:f=>n.value=o.id},m(o.title),11,nc)),64))]),r.value?(i(),l("div",ac,[e("div",rc,[(i(!0),l(L,null,x(r.value.steps,(o,f)=>(i(),l("div",{key:f,class:"flow-step-item"},[e("div",ic,m(f+1),1),e("div",sc,m(o),1)]))),128))]),e("div",lc,[c[0]||(c[0]=e("span",{class:"action-hint"},"推荐主承接入口：",-1)),e("a",{href:r.value.targetUrl,class:"btn-primary btn-sm"},m(r.value.targetText)+" → ",9,oc)])])):h("",!0)]),c[2]||(c[2]=e("details",{class:"ascii-fallback"},[e("summary",null,"查看完整 ASCII 决策树文本图谱"),e("pre",{class:"ascii-pre"},[e("code",null,`你主要做什么？
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
最终收敛：核对真实实付、支持客户端、协议倍率和设备数后自主决策。`)])],-1))]))}}),dc=B(cc,[["__scopeId","data-v-25e8735d"]]),uc={class:"faq-container"},fc=["onClick"],yc={class:"q-text"},mc={class:"q-arrow"},pc={class:"faq-answer"},gc=["innerHTML"],vc=I({__name:"FAQBlock",props:{items:{}},setup(t){const n=$(0),a=r=>{n.value=n.value===r?null:r};return(r,s)=>(i(),l("div",uc,[(i(!0),l(L,null,x(t.items,(c,o)=>(i(),l("div",{key:o,class:A(["faq-item",{open:n.value===o}])},[e("div",{class:"faq-question",onClick:f=>a(o)},[s[0]||(s[0]=e("span",{class:"q-icon"},"Q",-1)),e("span",yc,m(c.q),1),e("span",mc,m(n.value===o?"−":"+"),1)],8,fc),N(e("div",pc,[e("div",{class:"a-content",innerHTML:c.a},null,8,gc)],512),[[st,n.value===o]])],2))),128))]))}}),hc=B(vc,[["__scopeId","data-v-0ba3a2df"]]),bc={class:"related-links-box"},Gc={class:"links-grid"},Ic=["href"],Cc={class:"link-label"},Pc={class:"link-desc"},Bc=I({__name:"RelatedLinks",props:{links:{}},setup(t){return(n,a)=>(i(),l("div",bc,[a[0]||(a[0]=e("div",{class:"box-title"},[e("span",{class:"box-icon"},"🧭"),e("span",null,"下一步推荐探索路径")],-1)),e("div",Gc,[(i(!0),l(L,null,x(t.links,(r,s)=>(i(),l("a",{key:s,href:r.url,class:"related-link-card"},[e("div",Cc,m(r.title),1),e("div",Pc,m(r.desc),1)],8,Ic))),128))])]))}}),kc=B(Bc,[["__scopeId","data-v-d60d6b61"]]),Sc={class:"interactive-tools-wrapper"},Tc={class:"tool-tabs-bar"},Mc=["onClick"],_c={key:0,class:"tool-pane"},Rc={class:"finder-inputs"},$c={class:"input-block"},Lc={class:"finder-results"},Ac={class:"res-head"},wc={class:"res-price"},xc={class:"res-summary"},Vc={class:"res-meta"},Ec={class:"res-action"},Nc=["href"],Dc={key:0,class:"empty-res"},Oc={key:1,class:"tool-pane"},Fc={class:"region-checker-box"},qc={class:"checker-row"},Uc={class:"region-status-table"},Hc={key:2,class:"tool-pane"},jc={class:"compare-selectors"},Yc={class:"sel-box"},zc=["value"],Wc={class:"sel-box"},Kc=["value"],Xc={key:0,class:"compare-table-box"},Qc={class:"highlight"},Jc={class:"highlight"},Zc={key:3,class:"tool-pane"},ed={class:"calc-grid"},td={class:"calc-input-group"},nd={class:"calc-input-group"},ad={class:"calc-input-group"},rd={class:"calc-input-group"},id={class:"calc-result-box"},sd={class:"result-num"},ld={class:"result-advice"},od={key:0},cd={key:1},dd={key:2},ud={key:4,class:"tool-pane"},fd={class:"cost-calc-form"},yd={class:"form-row"},md={class:"form-row"},pd={class:"cost-calc-summary"},gd={class:"summary-card"},vd={class:"v"},hd={class:"summary-card highlight"},bd={class:"v"},Gd={key:0,class:"cost-warning"},Id={key:5,class:"tool-pane"},Cd={key:6,class:"tool-pane"},Pd={class:"trouble-selector"},Bd={key:0,class:"trouble-advice-card"},kd={class:"tr-cause"},Sd={class:"tr-steps"},Td={class:"tr-action"},Md=["href"],_d=I({__name:"InteractiveTools",setup(t){const n=O,a=[{id:"finder",title:"🔍 按任务找机场"},{id:"region",title:"🌐 地区资格查询"},{id:"compare",title:"⚖️ 两品牌同屏比对"},{id:"traffic",title:"🧮 流量预算计算器"},{id:"cost",title:"💰 实付款折算器"},{id:"tests",title:"📊 历史实测对照"},{id:"trouble",title:"🔧 报错排障决策"}],r=$("finder"),s=$("openai"),c=P(()=>{const U=new Set(je.filter(y=>y.platformId===s.value&&(y.result==="success"||y.result==="partial")).map(y=>y.brandId));return O.filter(y=>U.has(y.id))}),o=$("openai"),f=P(()=>o.value==="openai"||o.value==="anthropic"||o.value==="google"?[{id:"hk",name:"香港 (HK)",eligible:!1,latency:"15-35 ms",advice:"官方政策不直接支持，直连会被阻断，需配合机场高级分流规则绕行。"},{id:"jp",name:"日本 (JP)",eligible:!0,latency:"45-80 ms",advice:"官方全面支持，亚太专线出口首选，综合时延与稳定性最佳。"},{id:"sg",name:"新加坡 (SG)",eligible:!0,latency:"40-70 ms",advice:"官方全面支持，国际出口骨干汇聚，跨国办公主力。"},{id:"us",name:"美国 (US)",eligible:!0,latency:"130-190 ms",advice:"新模型首发资格区，功能最全，但物理延迟稍高。"}]:[{id:"hk",name:"香港 (HK)",eligible:!0,latency:"15-35 ms",advice:"支持港区 Netflix / Disney+ 繁体中文特有片库。"},{id:"jp",name:"日本 (JP)",eligible:!0,latency:"45-80 ms",advice:"日区动漫与独占剧集最全，需注意必须通过非自制剧播放实测。"},{id:"sg",name:"新加坡 (SG)",eligible:!0,latency:"40-70 ms",advice:"双语字幕极全，适合华语观众。"},{id:"us",name:"美国 (US)",eligible:!0,latency:"130-190 ms",advice:"片库最庞大，但对机房 IP 审查最为苛刻。"}]),u=$("lightspeed"),T=$("wgetcloud"),b=P(()=>O.find(U=>U.id===u.value)),g=P(()=>O.find(U=>U.id===T.value)),G=$(30),S=$(2),C=$(1),k=$(.5),V=P(()=>{const U=G.value*30*.08/1024,y=S.value*30*3/1024,R=C.value*30*1.5,ae=k.value*30*7;return Math.ceil(U+y+R+ae)}),E=$(99),D=$("12"),q=$("t1"),K=P(()=>{switch(q.value){case"t1":return{cause:"出口 IP 触发 Cloudflare 边缘安全规则，多因 IP 被识别为机房数据中心或滥用黑名单。",steps:["检查客户端节点出口，切换为日本或新加坡的原生/专线落地节点；","清除浏览器针对 chatgpt.com 的 Cookie 与本地储存；","确保 DNS 解析无国内污染（开启纯洁净远端 DNS 解析）。"],guideUrl:"/guides/#u03"};case"t2":return{cause:"节点出口识别处于未开放地区（如香港出口），或出口 IP 机房声誉过低被 Anthropic 拒绝服务。",steps:["严禁使用香港节点直接访问 claude.ai；","切换至美国或日本专线节点，使用无痕窗口重新认证；","若仍报错，检查客户端分流规则是否误将 Claude 流量分流到了直连。"],guideUrl:"/guides/#u01"};case"t3":return{cause:"长连接（SSE / WebSocket）被代理客户端超时中断，或节点晚高峰持续丢包。",steps:["检查代理客户端是否开启了自动断开空闲连接；","更换为 IEPL 企业级专线节点（低抖动防丢包）；","暂时关闭本地杀毒软件对网络流量的深度拦截扫描。"],guideUrl:"/guides/#u04"};case"t4":return{cause:"Netflix 识别出当前出口为商业 IDC 代理 IP，触发反代理版权保护机制。",steps:["切换机场专门标注为“流媒体解锁”或“原生 IP”的节点；","在浏览器完全退出 Netflix 账号并重新打开页面播放；","核验本站 [/tests/] 对应品牌的最新版权片播放实测。"],guideUrl:"/streaming/#s01"};case"t5":return{cause:"系统终端默认不读取全局系统代理，需手动设置终端环境变量代理。",steps:["检查代理客户端的本地 Mixed/HTTP 端口（如 7890）；","在终端配置 export https_proxy=http://127.0.0.1:7890（Windows 为 $env:https_proxy）；","测试 curl -I https://api.openai.com 验证连通性。"],guideUrl:"/guides/#u06"};default:return null}});return(U,y)=>(i(),l("div",Sc,[e("div",Tc,[(i(),l(L,null,x(a,R=>e("button",{key:R.id,class:A(["tool-tab-btn",{active:r.value===R.id}]),onClick:ae=>r.value=R.id},m(R.title),11,Mc)),64))]),r.value==="finder"?(i(),l("div",_c,[y[14]||(y[14]=e("h4",null,"🔍 按平台与任务找机场候选",-1)),y[15]||(y[15]=e("p",{class:"tool-intro"},"选择你日常依赖的 AI 工具或视频流媒体平台，系统将从已核验实测证据库中筛选出支持该任务的机场候选。",-1)),e("div",Rc,[e("div",$c,[y[12]||(y[12]=e("label",null,"选择核心平台：",-1)),N(e("select",{"onUpdate:modelValue":y[0]||(y[0]=R=>s.value=R)},[...y[11]||(y[11]=[e("option",{value:"openai"},"ChatGPT (OpenAI)",-1),e("option",{value:"anthropic"},"Claude (Anthropic)",-1),e("option",{value:"google"},"Gemini (Google)",-1),e("option",{value:"netflix"},"Netflix 奈飞",-1)])],512),[[H,s.value]])])]),e("div",Lc,[(i(!0),l(L,null,x(c.value,R=>(i(),l("div",{key:R.id,class:"result-brand-card"},[e("div",Ac,[e("strong",null,m(R.name),1),e("span",wc,"¥"+m(R.startingPriceMonthly.toFixed(2))+"/月起",1)]),e("p",xc,m(R.summary),1),e("div",Vc,[e("span",null,"线路: "+m(R.lineType),1),e("span",null,"协议: "+m(R.protocols.join(", ")),1)]),e("div",Ec,[e("a",{href:`/brands/#${R.id}`,class:"btn-outline btn-sm"},"查看品牌档案",8,Nc),y[13]||(y[13]=e("a",{href:"/recommend/#r01",class:"btn-primary btn-sm"},"在推荐表中对比",-1))])]))),128)),c.value.length===0?(i(),l("div",Dc," 暂无该平台独立实测归档品牌，请稍后复核或查阅完整实测中心。 ")):h("",!0)])])):h("",!0),r.value==="region"?(i(),l("div",Oc,[y[19]||(y[19]=e("h4",null,"🌐 官方服务资格与地区节点匹配查询",-1)),y[20]||(y[20]=e("p",{class:"tool-intro"},"查询不同目标服务在各个国家/地区的官方支持白名单状态与推荐连接策略。",-1)),e("div",Fc,[e("div",qc,[y[17]||(y[17]=e("label",null,"选择目标服务：",-1)),N(e("select",{"onUpdate:modelValue":y[1]||(y[1]=R=>o.value=R)},[...y[16]||(y[16]=[e("option",{value:"openai"},"OpenAI / ChatGPT",-1),e("option",{value:"anthropic"},"Claude (Anthropic)",-1),e("option",{value:"google"},"Google Gemini / AI Studio",-1),e("option",{value:"netflix"},"Netflix (跨区版权库)",-1)])],512),[[H,o.value]])]),e("div",Uc,[e("table",null,[y[18]||(y[18]=e("thead",null,[e("tr",null,[e("th",null,"出口地区"),e("th",null,"官方白名单资格"),e("th",null,"往返时延基准"),e("th",null,"推荐场景与注意事项")])],-1)),e("tbody",null,[(i(!0),l(L,null,x(f.value,R=>(i(),l("tr",{key:R.id},[e("td",null,[e("strong",null,m(R.name),1)]),e("td",null,[e("span",{class:A(["badge",R.eligible?"badge-success":"badge-danger"])},m(R.eligible?"官方直接支持":"官方不支持(需绕行分流)"),3)]),e("td",null,m(R.latency),1),e("td",null,m(R.advice),1)]))),128))])])])])])):h("",!0),r.value==="compare"?(i(),l("div",Hc,[y[32]||(y[32]=e("h4",null,"⚖️ 两品牌同条件横向对比",-1)),y[33]||(y[33]=e("p",{class:"tool-intro"},"选择两个机场品牌，在同屏客观比对协议、专线类型、起始实付款、客户端支持与实测证据覆盖。",-1)),e("div",jc,[e("div",Yc,[y[21]||(y[21]=e("label",null,"品牌 A：",-1)),N(e("select",{"onUpdate:modelValue":y[2]||(y[2]=R=>u.value=R)},[(i(!0),l(L,null,x(d(n),R=>(i(),l("option",{key:R.id,value:R.id},m(R.name),9,zc))),128))],512),[[H,u.value]])]),y[23]||(y[23]=e("div",{class:"sel-vs"},"VS",-1)),e("div",Wc,[y[22]||(y[22]=e("label",null,"品牌 B：",-1)),N(e("select",{"onUpdate:modelValue":y[3]||(y[3]=R=>T.value=R)},[(i(!0),l(L,null,x(d(n),R=>(i(),l("option",{key:R.id,value:R.id},m(R.name),9,Kc))),128))],512),[[H,T.value]])])]),b.value&&g.value?(i(),l("div",Xc,[e("table",null,[e("thead",null,[e("tr",null,[y[24]||(y[24]=e("th",null,"对比维度",-1)),e("th",null,m(b.value.name),1),e("th",null,m(g.value.name),1)])]),e("tbody",null,[e("tr",null,[y[25]||(y[25]=e("td",null,"运营年份",-1)),e("td",null,m(b.value.establishedYear||"未明示")+" 年",1),e("td",null,m(g.value.establishedYear||"未明示")+" 年",1)]),e("tr",null,[y[26]||(y[26]=e("td",null,"入门折算月价",-1)),e("td",null,[e("strong",Qc,"¥"+m(b.value.startingPriceMonthly.toFixed(2))+" /月",1)]),e("td",null,[e("strong",Jc,"¥"+m(g.value.startingPriceMonthly.toFixed(2))+" /月",1)])]),e("tr",null,[y[27]||(y[27]=e("td",null,"线路架构",-1)),e("td",null,m(b.value.lineType),1),e("td",null,m(g.value.lineType),1)]),e("tr",null,[y[28]||(y[28]=e("td",null,"支持协议",-1)),e("td",null,m(b.value.protocols.join(", ")),1),e("td",null,m(g.value.protocols.join(", ")),1)]),e("tr",null,[y[29]||(y[29]=e("td",null,"自研客户端",-1)),e("td",null,m(b.value.customClient?"✅ 提供专属端":"❌ 仅通用订阅"),1),e("td",null,m(g.value.customClient?"✅ 提供专属端":"❌ 仅通用订阅"),1)]),e("tr",null,[y[30]||(y[30]=e("td",null,"通用订阅导入",-1)),e("td",null,m(b.value.thirdPartySupport?"✅ 支持 Clash/Sing-box":"❌ 仅限自研端"),1),e("td",null,m(g.value.thirdPartySupport?"✅ 支持 Clash/Sing-box":"❌ 仅限自研端"),1)]),e("tr",null,[y[31]||(y[31]=e("td",null,"核验来源",-1)),e("td",null,[e("code",null,m(b.value.sourceRef),1)]),e("td",null,[e("code",null,m(g.value.sourceRef),1)])])])])])):h("",!0)])):h("",!0),r.value==="traffic"?(i(),l("div",Zc,[y[45]||(y[45]=e("h4",null,"🧮 AI 与流媒体月度流量预算计算器",-1)),y[46]||(y[46]=e("p",{class:"tool-intro"},"纯浏览器本地计算：输入你每天的预估使用频率，估算每月大概需要的真实流量基准。",-1)),e("div",ed,[e("div",td,[y[34]||(y[34]=e("label",null,"每天 AI 文字对话轮数 (提问/回答)：",-1)),N(e("input",{type:"number","onUpdate:modelValue":y[4]||(y[4]=R=>G.value=R),min:"0",max:"1000"},null,512),[[ee,G.value,void 0,{number:!0}]]),y[35]||(y[35]=e("small",{class:"hint"},"通常 1 轮 1000 字对话约消耗 50KB ~ 100KB",-1))]),e("div",nd,[y[36]||(y[36]=e("label",null,"每天 AI 上传文档/多模态图片数量：",-1)),N(e("input",{type:"number","onUpdate:modelValue":y[5]||(y[5]=R=>S.value=R),min:"0",max:"200"},null,512),[[ee,S.value,void 0,{number:!0}]]),y[37]||(y[37]=e("small",{class:"hint"},"每张图或文档按平均 3MB 计算",-1))]),e("div",ad,[y[38]||(y[38]=e("label",null,"每天 YouTube/Netflix 1080P 观看小时：",-1)),N(e("input",{type:"number","onUpdate:modelValue":y[6]||(y[6]=R=>C.value=R),min:"0",max:"24",step:"0.5"},null,512),[[ee,C.value,void 0,{number:!0}]]),y[39]||(y[39]=e("small",{class:"hint"},"1080P 视频约 1.5GB / 小时",-1))]),e("div",rd,[y[40]||(y[40]=e("label",null,"每天 4K Ultra HD 观看小时：",-1)),N(e("input",{type:"number","onUpdate:modelValue":y[7]||(y[7]=R=>k.value=R),min:"0",max:"24",step:"0.5"},null,512),[[ee,k.value,void 0,{number:!0}]]),y[41]||(y[41]=e("small",{class:"hint"},"4K HDR 高码率约 7.0GB / 小时",-1))])]),e("div",id,[y[44]||(y[44]=e("div",{class:"result-title"},"每月预估流量需求：",-1)),e("div",sd,[F(m(V.value)+" ",1),y[42]||(y[42]=e("span",{class:"unit"},"GB / 月",-1))]),e("div",ld,[y[43]||(y[43]=e("strong",null,"套餐选型建议：",-1)),V.value<=60?(i(),l("span",od,"轻度办公型，选择 50~80GB 入门版套餐（约 ¥7~15/月）即可轻松覆盖。")):V.value<=200?(i(),l("span",cd,"中度混合型，推荐 150~250GB 档位（约 ¥20~35/月），足以覆盖晚间追剧与 AI 对话。")):(i(),l("span",dd,"重度影音/全家多屏型，建议 500GB 以上大流量专线套餐或团队定制方案。"))])])])):h("",!0),r.value==="cost"?(i(),l("div",ud,[y[54]||(y[54]=e("h4",null,"💰 实付款与周期折算计算器",-1)),y[55]||(y[55]=e("p",{class:"tool-intro"},"防止被宣传中的“折合约 ¥5/月”误导。输入商家的总价格与计费周期，计算真实单月成本与首次资金占用。",-1)),e("div",fd,[e("div",yd,[y[47]||(y[47]=e("label",null,"标称支付金额 (元)：",-1)),N(e("input",{type:"number","onUpdate:modelValue":y[8]||(y[8]=R=>E.value=R),min:"1",step:"1"},null,512),[[ee,E.value,void 0,{number:!0}]])]),e("div",md,[y[49]||(y[49]=e("label",null,"结算周期：",-1)),N(e("select",{"onUpdate:modelValue":y[9]||(y[9]=R=>D.value=R)},[...y[48]||(y[48]=[te('<option value="1" data-v-c58a1127>单月付 (1个月)</option><option value="3" data-v-c58a1127>季付 (3个月)</option><option value="6" data-v-c58a1127>半年付 (6个月)</option><option value="12" data-v-c58a1127>年付 (12个月)</option><option value="24" data-v-c58a1127>两年付 (24个月)</option>',5)])],512),[[H,D.value]])])]),e("div",pd,[e("div",gd,[y[50]||(y[50]=e("div",{class:"k"},"首次实付扣费",-1)),e("div",vd,"¥"+m(E.value),1),y[51]||(y[51]=e("div",{class:"sub"},"钱包首期直接支出",-1))]),e("div",hd,[y[52]||(y[52]=e("div",{class:"k"},"折算月均成本",-1)),e("div",bd,"¥"+m((E.value/Number(D.value)).toFixed(2)),1),y[53]||(y[53]=e("div",{class:"sub"},"实际每月摊销",-1))])]),Number(D.value)>=12?(i(),l("div",Gd," ⚠️ 风险提醒：年付虽月均低，但若服务商中途线路劣化或跑路，沉没成本较高。建议新手首月先以月付体验验证常用任务后再考虑长周期。 ")):h("",!0)])):h("",!0),r.value==="tests"?(i(),l("div",Id,[y[56]||(y[56]=e("h4",null,"📊 测试记录多维筛选",-1)),y[57]||(y[57]=e("p",{class:"tool-intro"},"按测试平台、地区及结果筛选本站收录的真实抓包与连通性记录：",-1)),M(Ye)])):h("",!0),r.value==="trouble"?(i(),l("div",Cd,[y[62]||(y[62]=e("h4",null,"🔧 按错误现象选择排障路径",-1)),y[63]||(y[63]=e("p",{class:"tool-intro"},"根据你在使用 AI 或流媒体时遇到的具体错误提示，匹配推荐排查步骤：",-1)),e("div",Pd,[y[59]||(y[59]=e("label",null,"选择你遇到的现象：",-1)),N(e("select",{"onUpdate:modelValue":y[10]||(y[10]=R=>q.value=R)},[...y[58]||(y[58]=[te('<option value="t1" data-v-c58a1127>ChatGPT 登录提示 &quot;Access Denied&quot; (1020 / Cloudflare 拦截)</option><option value="t2" data-v-c58a1127>Claude 提示 &quot;Not available in your region&quot;</option><option value="t3" data-v-c58a1127>对话生成中途转圈，提示 &quot;Network Error&quot; 断流</option><option value="t4" data-v-c58a1127>Netflix 提示 &quot;您似乎正在使用代理或解锁工具&quot;</option><option value="t5" data-v-c58a1127>终端/命令行运行 Python/Node SDK 报错 Connection Refused</option>',5)])],512),[[H,q.value]])]),K.value?(i(),l("div",Bd,[e("div",kd,[y[60]||(y[60]=e("strong",null,"根本原因定位：",-1)),F(" "+m(K.value.cause),1)]),e("div",Sd,[y[61]||(y[61]=e("strong",null,"标准化排障步骤：",-1)),e("ol",null,[(i(!0),l(L,null,x(K.value.steps,(R,ae)=>(i(),l("li",{key:ae},m(R),1))),128))])]),e("div",Td,[e("a",{href:K.value.guideUrl,class:"btn-primary btn-sm"},"查看详细图文排障指南 →",8,Md)])])):h("",!0)])):h("",!0)]))}}),Rd=B(_d,[["__scopeId","data-v-c58a1127"]]),Ld={extends:Ue,Layout:zi,enhanceApp({app:t}){t.component("BrandCard",tl),t.component("PlanTable",bl),t.component("PlatformTaskMatrix",Ye),t.component("EvidenceBadge",He),t.component("RegionSelector",co),t.component("TestReport",Bo),t.component("SourceNote",Ro),t.component("OfferCard",Jo),t.component("DecisionTree",dc),t.component("FAQBlock",hc),t.component("RelatedLinks",kc),t.component("InteractiveTools",Rd)}};export{Ld as R};
