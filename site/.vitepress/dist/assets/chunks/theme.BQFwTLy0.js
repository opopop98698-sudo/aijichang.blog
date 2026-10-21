import{d as k,c as l,r as g,n as L,o as r,a as O,t as f,b as R,w as v,T as be,e as h,_ as S,u as Me,i as ze,f as We,g as Ge,h as B,j as e,k as u,l as Z,m as me,p as w,q as W,s as se,v as K,x as le,y as Ce,z as Ke,A as Xe,F as A,B as V,C as ee,D as oe,E as $,G as we,H as Y,I as $e,J as ce,K as Q,L as de,M as Qe,N as Re,O as Je,P as xe,Q as Ae,R as ue,S as Ze,U as Le,V as Ve,W as et,X as tt,Y as nt,Z as at,$ as it,a0 as D,a1 as J,a2 as rt,a3 as H,a4 as te,a5 as st}from"./framework.BNWYI55R.js";const lt=k({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(n,a)=>(r(),l("span",{class:L(["VPBadge",t.type])},[g(n.$slots,"default",{},()=>[O(f(t.text),1)])],2))}}),ot={key:0,class:"VPBackdrop"},ct=k({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(n,a)=>(r(),R(be,{name:"fade"},{default:v(()=>[t.show?(r(),l("div",ot)):h("",!0)]),_:1}))}}),dt=S(ct,[["__scopeId","data-v-c79a1216"]]),E=Me;function ut(t,n){let a,i=!1;return()=>{a&&clearTimeout(a),i?a=setTimeout(t,n):(t(),(i=!0)&&setTimeout(()=>i=!1,n))}}function ye(t){return t.startsWith("/")?t:`/${t}`}function Ie(t){const{pathname:n,search:a,hash:i,protocol:s}=new URL(t,"http://a.com");if(ze(t)||t.startsWith("#")||!s.startsWith("http")||!We(n))return t;const{site:c}=E(),o=n.endsWith("/")||n.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${n.replace(/(\.md)?$/,c.value.cleanUrls?"":".html")}${a}${i}`);return Ge(o)}function ne({correspondingLink:t=!1}={}){const{site:n,localeIndex:a,page:i,theme:s,hash:c}=E(),o=B(()=>{var d,I;return{label:(d=n.value.locales[a.value])==null?void 0:d.label,link:((I=n.value.locales[a.value])==null?void 0:I.link)||(a.value==="root"?"/":`/${a.value}/`)}});return{localeLinks:B(()=>Object.entries(n.value.locales).flatMap(([d,I])=>o.value.label===I.label?[]:{text:I.label,link:ft(I.link||(d==="root"?"/":`/${d}/`),s.value.i18nRouting!==!1&&t,i.value.relativePath.slice(o.value.link.length-1),!n.value.cleanUrls)+c.value})),currentLang:o}}function ft(t,n,a,i){return n?t.replace(/\/$/,"")+ye(a.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,i?".html":"")):t}const pt={class:"NotFound"},mt={class:"code"},yt={class:"title"},gt={class:"quote"},vt={class:"action"},ht=["href","aria-label"],bt=k({__name:"NotFound",setup(t){const{theme:n}=E(),{currentLang:a}=ne();return(i,s)=>{var c,o,p,d,I;return r(),l("div",pt,[e("p",mt,f(((c=u(n).notFound)==null?void 0:c.code)??"404"),1),e("h1",yt,f(((o=u(n).notFound)==null?void 0:o.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=e("div",{class:"divider"},null,-1)),e("blockquote",gt,f(((p=u(n).notFound)==null?void 0:p.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),e("div",vt,[e("a",{class:"link",href:u(Ge)(u(a).link),"aria-label":((d=u(n).notFound)==null?void 0:d.linkLabel)??"go to home"},f(((I=u(n).notFound)==null?void 0:I.linkText)??"Take me home"),9,ht)])])}}}),Gt=S(bt,[["__scopeId","data-v-d6be1790"]]);function Ee(t,n){if(Array.isArray(t))return ie(t);if(t==null)return[];n=ye(n);const a=Object.keys(t).sort((s,c)=>c.split("/").length-s.split("/").length).find(s=>n.startsWith(ye(s))),i=a?t[a]:[];return Array.isArray(i)?ie(i):ie(i.items,i.base)}function Ct(t){const n=[];let a=0;for(const i in t){const s=t[i];if(s.items){a=n.push(s);continue}n[a]||n.push({items:[]}),n[a].items.push(s)}return n}function It(t){const n=[];function a(i){for(const s of i)s.text&&s.link&&n.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&a(s.items)}return a(t),n}function ge(t,n){return Array.isArray(n)?n.some(a=>ge(t,a)):Z(t,n.link)?!0:n.items?ge(t,n.items):!1}function ie(t,n){return[...t].map(a=>{const i={...a},s=i.base||n;return s&&i.link&&(i.link=s+i.link),i.items&&(i.items=ie(i.items,s)),i})}function X(){const{frontmatter:t,page:n,theme:a}=E(),i=me("(min-width: 960px)"),s=w(!1),c=B(()=>{const G=a.value.sidebar,T=n.value.relativePath;return G?Ee(G,T):[]}),o=w(c.value);W(c,(G,T)=>{JSON.stringify(G)!==JSON.stringify(T)&&(o.value=c.value)});const p=B(()=>t.value.sidebar!==!1&&o.value.length>0&&t.value.layout!=="home"),d=B(()=>I?t.value.aside==null?a.value.aside==="left":t.value.aside==="left":!1),I=B(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:a.value.aside!==!1),b=B(()=>p.value&&i.value),y=B(()=>p.value?Ct(o.value):[]);function C(){s.value=!0}function M(){s.value=!1}function P(){s.value?M():C()}return{isOpen:s,sidebar:o,sidebarGroups:y,hasSidebar:p,hasAside:I,leftAside:d,isSidebarEnabled:b,open:C,close:M,toggle:P}}function Pt(t,n){let a;se(()=>{a=t.value?document.activeElement:void 0}),K(()=>{window.addEventListener("keyup",i)}),le(()=>{window.removeEventListener("keyup",i)});function i(s){s.key==="Escape"&&t.value&&(n(),a==null||a.focus())}}function kt(t){const{page:n,hash:a}=E(),i=w(!1),s=B(()=>t.value.collapsed!=null),c=B(()=>!!t.value.link),o=w(!1),p=()=>{o.value=Z(n.value.relativePath,t.value.link)};W([n,t,a],p),K(p);const d=B(()=>o.value?!0:t.value.items?ge(n.value.relativePath,t.value.items):!1),I=B(()=>!!(t.value.items&&t.value.items.length));se(()=>{i.value=!!(s.value&&t.value.collapsed)}),Ce(()=>{(o.value||d.value)&&(i.value=!1)});function b(){s.value&&(i.value=!i.value)}return{collapsed:i,collapsible:s,isLink:c,isActiveLink:o,hasActiveLink:d,hasChildren:I,toggle:b}}function Bt(){const{hasSidebar:t}=X(),n=me("(min-width: 960px)"),a=me("(min-width: 1280px)");return{isAsideEnabled:B(()=>!a.value&&!n.value?!1:t.value?a.value:n.value)}}const St=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,ve=[];function Ne(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function Pe(t){const n=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(a=>a.id&&a.hasChildNodes()).map(a=>{const i=Number(a.tagName[1]);return{element:a,title:Tt(a),link:"#"+a.id,level:i}});return _t(n,t)}function Tt(t){let n="";for(const a of t.childNodes)if(a.nodeType===1){if(St.test(a.className))continue;n+=a.textContent}else a.nodeType===3&&(n+=a.textContent);return n.trim()}function _t(t,n){if(n===!1)return[];const a=(typeof n=="object"&&!Array.isArray(n)?n.level:n)||2,[i,s]=typeof a=="number"?[a,a]:a==="deep"?[2,6]:a;return $t(t,i,s)}function Mt(t,n){const{isAsideEnabled:a}=Bt(),i=ut(c,100);let s=null;K(()=>{requestAnimationFrame(c),window.addEventListener("scroll",i)}),Ke(()=>{o(location.hash)}),le(()=>{window.removeEventListener("scroll",i)});function c(){if(!a.value)return;const p=window.scrollY,d=window.innerHeight,I=document.body.offsetHeight,b=Math.abs(p+d-I)<1,y=ve.map(({element:M,link:P})=>({link:P,top:wt(M)})).filter(({top:M})=>!Number.isNaN(M)).sort((M,P)=>M.top-P.top);if(!y.length){o(null);return}if(p<1){o(null);return}if(b){o(y[y.length-1].link);return}let C=null;for(const{link:M,top:P}of y){if(P>p+Xe()+4)break;C=M}o(C)}function o(p){s&&s.classList.remove("active"),p==null?s=null:s=t.value.querySelector(`a[href="${decodeURIComponent(p)}"]`);const d=s;d?(d.classList.add("active"),n.value.style.top=d.offsetTop+39+"px",n.value.style.opacity="1"):(n.value.style.top="33px",n.value.style.opacity="0")}}function wt(t){let n=0;for(;t!==document.body;){if(t===null)return NaN;n+=t.offsetTop,t=t.offsetParent}return n}function $t(t,n,a){ve.length=0;const i=[],s=[];return t.forEach(c=>{const o={...c,children:[]};let p=s[s.length-1];for(;p&&p.level>=o.level;)s.pop(),p=s[s.length-1];if(o.element.classList.contains("ignore-header")||p&&"shouldIgnore"in p){s.push({level:o.level,shouldIgnore:!0});return}o.level>a||o.level<n||(ve.push({element:o.element,link:o.link}),p?p.children.push(o):i.push(o),s.push(o))}),i}const Rt=["href","title"],xt=k({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function n({target:a}){const i=a.href.split("#")[1],s=document.getElementById(decodeURIComponent(i));s==null||s.focus({preventScroll:!0})}return(a,i)=>{const s=ee("VPDocOutlineItem",!0);return r(),l("ul",{class:L(["VPDocOutlineItem",t.root?"root":"nested"])},[(r(!0),l(A,null,V(t.headers,({children:c,link:o,title:p})=>(r(),l("li",null,[e("a",{class:"outline-link",href:o,onClick:n,title:p},f(p),9,Rt),c!=null&&c.length?(r(),R(s,{key:0,headers:c},null,8,["headers"])):h("",!0)]))),256))],2)}}}),De=S(xt,[["__scopeId","data-v-b933a997"]]),At={class:"content"},Lt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Vt=k({__name:"VPDocAsideOutline",setup(t){const{frontmatter:n,theme:a}=E(),i=we([]);oe(()=>{i.value=Pe(n.value.outline??a.value.outline)});const s=w(),c=w();return Mt(s,c),(o,p)=>(r(),l("nav",{"aria-labelledby":"doc-outline-aria-label",class:L(["VPDocAsideOutline",{"has-outline":i.value.length>0}]),ref_key:"container",ref:s},[e("div",At,[e("div",{class:"outline-marker",ref_key:"marker",ref:c},null,512),e("div",Lt,f(u(Ne)(u(a))),1),$(De,{headers:i.value,root:!0},null,8,["headers"])])],2))}}),Et=S(Vt,[["__scopeId","data-v-a5bbad30"]]),Nt={class:"VPDocAsideCarbonAds"},Dt=k({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const n=()=>null;return(a,i)=>(r(),l("div",Nt,[$(u(n),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Ot={class:"VPDocAside"},Ft=k({__name:"VPDocAside",setup(t){const{theme:n}=E();return(a,i)=>(r(),l("div",Ot,[g(a.$slots,"aside-top",{},void 0,!0),g(a.$slots,"aside-outline-before",{},void 0,!0),$(Et),g(a.$slots,"aside-outline-after",{},void 0,!0),i[0]||(i[0]=e("div",{class:"spacer"},null,-1)),g(a.$slots,"aside-ads-before",{},void 0,!0),u(n).carbonAds?(r(),R(Dt,{key:0,"carbon-ads":u(n).carbonAds},null,8,["carbon-ads"])):h("",!0),g(a.$slots,"aside-ads-after",{},void 0,!0),g(a.$slots,"aside-bottom",{},void 0,!0)]))}}),Ut=S(Ft,[["__scopeId","data-v-3f215769"]]);function qt(){const{theme:t,page:n}=E();return B(()=>{const{text:a="Edit this page",pattern:i=""}=t.value.editLink||{};let s;return typeof i=="function"?s=i(n.value):s=i.replace(/:path/g,n.value.filePath),{url:s,text:a}})}function Ht(){const{page:t,theme:n,frontmatter:a}=E();return B(()=>{var I,b,y,C,M,P,G,T;const i=Ee(n.value.sidebar,t.value.relativePath),s=It(i),c=jt(s,_=>_.link.replace(/[?#].*$/,"")),o=c.findIndex(_=>Z(t.value.relativePath,_.link)),p=((I=n.value.docFooter)==null?void 0:I.prev)===!1&&!a.value.prev||a.value.prev===!1,d=((b=n.value.docFooter)==null?void 0:b.next)===!1&&!a.value.next||a.value.next===!1;return{prev:p?void 0:{text:(typeof a.value.prev=="string"?a.value.prev:typeof a.value.prev=="object"?a.value.prev.text:void 0)??((y=c[o-1])==null?void 0:y.docFooterText)??((C=c[o-1])==null?void 0:C.text),link:(typeof a.value.prev=="object"?a.value.prev.link:void 0)??((M=c[o-1])==null?void 0:M.link)},next:d?void 0:{text:(typeof a.value.next=="string"?a.value.next:typeof a.value.next=="object"?a.value.next.text:void 0)??((P=c[o+1])==null?void 0:P.docFooterText)??((G=c[o+1])==null?void 0:G.text),link:(typeof a.value.next=="object"?a.value.next.link:void 0)??((T=c[o+1])==null?void 0:T.link)}}})}function jt(t,n){const a=new Set;return t.filter(i=>{const s=n(i);return a.has(s)?!1:a.add(s)})}const z=k({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const n=t,a=B(()=>n.tag??(n.href?"a":"span")),i=B(()=>n.href&&$e.test(n.href)||n.target==="_blank");return(s,c)=>(r(),R(Y(a.value),{class:L(["VPLink",{link:t.href,"vp-external-link-icon":i.value,"no-icon":t.noIcon}]),href:t.href?u(Ie)(t.href):void 0,target:t.target??(i.value?"_blank":void 0),rel:t.rel??(i.value?"noreferrer":void 0)},{default:v(()=>[g(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Yt={class:"VPLastUpdated"},zt=["datetime"],Wt=k({__name:"VPDocFooterLastUpdated",setup(t){const{theme:n,page:a,lang:i}=E(),s=B(()=>new Date(a.value.lastUpdated)),c=B(()=>s.value.toISOString()),o=w("");return K(()=>{se(()=>{var p,d,I;o.value=new Intl.DateTimeFormat((d=(p=n.value.lastUpdated)==null?void 0:p.formatOptions)!=null&&d.forceLocale?i.value:void 0,((I=n.value.lastUpdated)==null?void 0:I.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(p,d)=>{var I;return r(),l("p",Yt,[O(f(((I=u(n).lastUpdated)==null?void 0:I.text)||u(n).lastUpdatedText||"Last updated")+": ",1),e("time",{datetime:c.value},f(o.value),9,zt)])}}}),Kt=S(Wt,[["__scopeId","data-v-e98dd255"]]),Xt={key:0,class:"VPDocFooter"},Qt={key:0,class:"edit-info"},Jt={key:0,class:"edit-link"},Zt={key:1,class:"last-updated"},en={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},tn={class:"pager"},nn=["innerHTML"],an=["innerHTML"],rn={class:"pager"},sn=["innerHTML"],ln=["innerHTML"],on=k({__name:"VPDocFooter",setup(t){const{theme:n,page:a,frontmatter:i}=E(),s=qt(),c=Ht(),o=B(()=>n.value.editLink&&i.value.editLink!==!1),p=B(()=>a.value.lastUpdated),d=B(()=>o.value||p.value||c.value.prev||c.value.next);return(I,b)=>{var y,C,M,P;return d.value?(r(),l("footer",Xt,[g(I.$slots,"doc-footer-before",{},void 0,!0),o.value||p.value?(r(),l("div",Qt,[o.value?(r(),l("div",Jt,[$(z,{class:"edit-link-button",href:u(s).url,"no-icon":!0},{default:v(()=>[b[0]||(b[0]=e("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),O(" "+f(u(s).text),1)]),_:1},8,["href"])])):h("",!0),p.value?(r(),l("div",Zt,[$(Kt)])):h("",!0)])):h("",!0),(y=u(c).prev)!=null&&y.link||(C=u(c).next)!=null&&C.link?(r(),l("nav",en,[b[1]||(b[1]=e("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),e("div",tn,[(M=u(c).prev)!=null&&M.link?(r(),R(z,{key:0,class:"pager-link prev",href:u(c).prev.link},{default:v(()=>{var G;return[e("span",{class:"desc",innerHTML:((G=u(n).docFooter)==null?void 0:G.prev)||"Previous page"},null,8,nn),e("span",{class:"title",innerHTML:u(c).prev.text},null,8,an)]}),_:1},8,["href"])):h("",!0)]),e("div",rn,[(P=u(c).next)!=null&&P.link?(r(),R(z,{key:0,class:"pager-link next",href:u(c).next.link},{default:v(()=>{var G;return[e("span",{class:"desc",innerHTML:((G=u(n).docFooter)==null?void 0:G.next)||"Next page"},null,8,sn),e("span",{class:"title",innerHTML:u(c).next.text},null,8,ln)]}),_:1},8,["href"])):h("",!0)])])):h("",!0)])):h("",!0)}}}),cn=S(on,[["__scopeId","data-v-e257564d"]]),dn={class:"container"},un={class:"aside-container"},fn={class:"aside-content"},pn={class:"content"},mn={class:"content-container"},yn={class:"main"},gn=k({__name:"VPDoc",setup(t){const{theme:n}=E(),a=ce(),{hasSidebar:i,hasAside:s,leftAside:c}=X(),o=B(()=>a.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(p,d)=>{const I=ee("Content");return r(),l("div",{class:L(["VPDoc",{"has-sidebar":u(i),"has-aside":u(s)}])},[g(p.$slots,"doc-top",{},void 0,!0),e("div",dn,[u(s)?(r(),l("div",{key:0,class:L(["aside",{"left-aside":u(c)}])},[d[0]||(d[0]=e("div",{class:"aside-curtain"},null,-1)),e("div",un,[e("div",fn,[$(Ut,null,{"aside-top":v(()=>[g(p.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[g(p.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[g(p.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[g(p.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[g(p.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[g(p.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):h("",!0),e("div",pn,[e("div",mn,[g(p.$slots,"doc-before",{},void 0,!0),e("main",yn,[$(I,{class:L(["vp-doc",[o.value,u(n).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),$(cn,null,{"doc-footer-before":v(()=>[g(p.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),g(p.$slots,"doc-after",{},void 0,!0)])])]),g(p.$slots,"doc-bottom",{},void 0,!0)],2)}}}),vn=S(gn,[["__scopeId","data-v-39a288b8"]]),hn=k({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const n=t,a=B(()=>n.href&&$e.test(n.href)),i=B(()=>n.tag||(n.href?"a":"button"));return(s,c)=>(r(),R(Y(i.value),{class:L(["VPButton",[t.size,t.theme]]),href:t.href?u(Ie)(t.href):void 0,target:n.target??(a.value?"_blank":void 0),rel:n.rel??(a.value?"noreferrer":void 0)},{default:v(()=>[O(f(t.text),1)]),_:1},8,["class","href","target","rel"]))}}),bn=S(hn,[["__scopeId","data-v-fa7799d5"]]),Gn=["src","alt"],Cn=k({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(n,a)=>{const i=ee("VPImage",!0);return t.image?(r(),l(A,{key:0},[typeof t.image=="string"||"src"in t.image?(r(),l("img",Q({key:0,class:"VPImage"},typeof t.image=="string"?n.$attrs:{...t.image,...n.$attrs},{src:u(Ge)(typeof t.image=="string"?t.image:t.image.src),alt:t.alt??(typeof t.image=="string"?"":t.image.alt||"")}),null,16,Gn)):(r(),l(A,{key:1},[$(i,Q({class:"dark",image:t.image.dark,alt:t.image.alt},n.$attrs),null,16,["image","alt"]),$(i,Q({class:"light",image:t.image.light,alt:t.image.alt},n.$attrs),null,16,["image","alt"])],64))],64)):h("",!0)}}}),re=S(Cn,[["__scopeId","data-v-8426fc1a"]]),In={class:"container"},Pn={class:"main"},kn={class:"heading"},Bn=["innerHTML"],Sn=["innerHTML"],Tn=["innerHTML"],_n={key:0,class:"actions"},Mn={key:0,class:"image"},wn={class:"image-container"},$n=k({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const n=de("hero-image-slot-exists");return(a,i)=>(r(),l("div",{class:L(["VPHero",{"has-image":t.image||u(n)}])},[e("div",In,[e("div",Pn,[g(a.$slots,"home-hero-info-before",{},void 0,!0),g(a.$slots,"home-hero-info",{},()=>[e("h1",kn,[t.name?(r(),l("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,Bn)):h("",!0),t.text?(r(),l("span",{key:1,innerHTML:t.text,class:"text"},null,8,Sn)):h("",!0)]),t.tagline?(r(),l("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,Tn)):h("",!0)],!0),g(a.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(r(),l("div",_n,[(r(!0),l(A,null,V(t.actions,s=>(r(),l("div",{key:s.link,class:"action"},[$(bn,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):h("",!0),g(a.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||u(n)?(r(),l("div",Mn,[e("div",wn,[i[0]||(i[0]=e("div",{class:"image-bg"},null,-1)),g(a.$slots,"home-hero-image",{},()=>[t.image?(r(),R(re,{key:0,class:"image-src",image:t.image},null,8,["image"])):h("",!0)],!0)])])):h("",!0)])],2))}}),Rn=S($n,[["__scopeId","data-v-4f9c455b"]]),xn=k({__name:"VPHomeHero",setup(t){const{frontmatter:n}=E();return(a,i)=>u(n).hero?(r(),R(Rn,{key:0,class:"VPHomeHero",name:u(n).hero.name,text:u(n).hero.text,tagline:u(n).hero.tagline,image:u(n).hero.image,actions:u(n).hero.actions},{"home-hero-info-before":v(()=>[g(a.$slots,"home-hero-info-before")]),"home-hero-info":v(()=>[g(a.$slots,"home-hero-info")]),"home-hero-info-after":v(()=>[g(a.$slots,"home-hero-info-after")]),"home-hero-actions-after":v(()=>[g(a.$slots,"home-hero-actions-after")]),"home-hero-image":v(()=>[g(a.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):h("",!0)}}),An={class:"box"},Ln={key:0,class:"icon"},Vn=["innerHTML"],En=["innerHTML"],Nn=["innerHTML"],Dn={key:4,class:"link-text"},On={class:"link-text-value"},Fn=k({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(n,a)=>(r(),R(z,{class:"VPFeature",href:t.link,rel:t.rel,target:t.target,"no-icon":!0,tag:t.link?"a":"div"},{default:v(()=>[e("article",An,[typeof t.icon=="object"&&t.icon.wrap?(r(),l("div",Ln,[$(re,{image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])])):typeof t.icon=="object"?(r(),R(re,{key:1,image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])):t.icon?(r(),l("div",{key:2,class:"icon",innerHTML:t.icon},null,8,Vn)):h("",!0),e("h2",{class:"title",innerHTML:t.title},null,8,En),t.details?(r(),l("p",{key:3,class:"details",innerHTML:t.details},null,8,Nn)):h("",!0),t.linkText?(r(),l("div",Dn,[e("p",On,[O(f(t.linkText)+" ",1),a[0]||(a[0]=e("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):h("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Un=S(Fn,[["__scopeId","data-v-a3976bdc"]]),qn={key:0,class:"VPFeatures"},Hn={class:"container"},jn={class:"items"},Yn=k({__name:"VPFeatures",props:{features:{}},setup(t){const n=t,a=B(()=>{const i=n.features.length;if(i){if(i===2)return"grid-2";if(i===3)return"grid-3";if(i%3===0)return"grid-6";if(i>3)return"grid-4"}else return});return(i,s)=>t.features?(r(),l("div",qn,[e("div",Hn,[e("div",jn,[(r(!0),l(A,null,V(t.features,c=>(r(),l("div",{key:c.title,class:L(["item",[a.value]])},[$(Un,{icon:c.icon,title:c.title,details:c.details,link:c.link,"link-text":c.linkText,rel:c.rel,target:c.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):h("",!0)}}),zn=S(Yn,[["__scopeId","data-v-a6181336"]]),Wn=k({__name:"VPHomeFeatures",setup(t){const{frontmatter:n}=E();return(a,i)=>u(n).features?(r(),R(zn,{key:0,class:"VPHomeFeatures",features:u(n).features},null,8,["features"])):h("",!0)}}),Kn=k({__name:"VPHomeContent",setup(t){const{width:n}=Qe({initialWidth:0,includeScrollbar:!1});return(a,i)=>(r(),l("div",{class:"vp-doc container",style:Re(u(n)?{"--vp-offset":`calc(50% - ${u(n)/2}px)`}:{})},[g(a.$slots,"default",{},void 0,!0)],4))}}),Xn=S(Kn,[["__scopeId","data-v-8e2d4988"]]),Qn=k({__name:"VPHome",setup(t){const{frontmatter:n,theme:a}=E();return(i,s)=>{const c=ee("Content");return r(),l("div",{class:L(["VPHome",{"external-link-icon-enabled":u(a).externalLinkIcon}])},[g(i.$slots,"home-hero-before",{},void 0,!0),$(xn,null,{"home-hero-info-before":v(()=>[g(i.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[g(i.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[g(i.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[g(i.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[g(i.$slots,"home-hero-image",{},void 0,!0)]),_:3}),g(i.$slots,"home-hero-after",{},void 0,!0),g(i.$slots,"home-features-before",{},void 0,!0),$(Wn),g(i.$slots,"home-features-after",{},void 0,!0),u(n).markdownStyles!==!1?(r(),R(Xn,{key:0},{default:v(()=>[$(c)]),_:1})):(r(),R(c,{key:1}))],2)}}}),Jn=S(Qn,[["__scopeId","data-v-8b561e3d"]]),Zn={},ea={class:"VPPage"};function ta(t,n){const a=ee("Content");return r(),l("div",ea,[g(t.$slots,"page-top"),$(a),g(t.$slots,"page-bottom")])}const na=S(Zn,[["render",ta]]),aa=k({__name:"VPContent",setup(t){const{page:n,frontmatter:a}=E(),{hasSidebar:i}=X();return(s,c)=>(r(),l("div",{class:L(["VPContent",{"has-sidebar":u(i),"is-home":u(a).layout==="home"}]),id:"VPContent"},[u(n).isNotFound?g(s.$slots,"not-found",{},()=>[$(Gt)],!0,0):u(a).layout==="page"?(r(),R(na,{key:1},{"page-top":v(()=>[g(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[g(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(a).layout==="home"?(r(),R(Jn,{key:2},{"home-hero-before":v(()=>[g(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[g(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[g(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[g(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[g(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[g(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[g(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[g(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[g(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(a).layout&&u(a).layout!=="doc"?(r(),R(Y(u(a).layout),{key:3})):(r(),R(vn,{key:4},{"doc-top":v(()=>[g(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[g(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":v(()=>[g(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[g(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[g(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":v(()=>[g(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":v(()=>[g(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[g(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[g(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[g(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":v(()=>[g(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),ia=S(aa,[["__scopeId","data-v-1428d186"]]),ra={class:"container"},sa=["innerHTML"],la=["innerHTML"],oa=k({__name:"VPFooter",setup(t){const{theme:n,frontmatter:a}=E(),{hasSidebar:i}=X();return(s,c)=>u(n).footer&&u(a).footer!==!1?(r(),l("footer",{key:0,class:L(["VPFooter",{"has-sidebar":u(i)}])},[e("div",ra,[u(n).footer.message?(r(),l("p",{key:0,class:"message",innerHTML:u(n).footer.message},null,8,sa)):h("",!0),u(n).footer.copyright?(r(),l("p",{key:1,class:"copyright",innerHTML:u(n).footer.copyright},null,8,la)):h("",!0)])],2)):h("",!0)}}),ca=S(oa,[["__scopeId","data-v-e315a0ad"]]);function da(){const{theme:t,frontmatter:n}=E(),a=we([]),i=B(()=>a.value.length>0);return oe(()=>{a.value=Pe(n.value.outline??t.value.outline)}),{headers:a,hasLocalNav:i}}const ua={class:"menu-text"},fa={class:"header"},pa={class:"outline"},ma=k({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const n=t,{theme:a}=E(),i=w(!1),s=w(0),c=w(),o=w();function p(y){var C;(C=c.value)!=null&&C.contains(y.target)||(i.value=!1)}W(i,y=>{if(y){document.addEventListener("click",p);return}document.removeEventListener("click",p)}),Je("Escape",()=>{i.value=!1}),oe(()=>{i.value=!1});function d(){i.value=!i.value,s.value=window.innerHeight+Math.min(window.scrollY-n.navHeight,0)}function I(y){y.target.classList.contains("outline-link")&&(o.value&&(o.value.style.transition="none"),xe(()=>{i.value=!1}))}function b(){i.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(y,C)=>(r(),l("div",{class:"VPLocalNavOutlineDropdown",style:Re({"--vp-vh":s.value+"px"}),ref_key:"main",ref:c},[t.headers.length>0?(r(),l("button",{key:0,onClick:d,class:L({open:i.value})},[e("span",ua,f(u(Ne)(u(a))),1),C[0]||(C[0]=e("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(r(),l("button",{key:1,onClick:b},f(u(a).returnToTopLabel||"Return to top"),1)),$(be,{name:"flyout"},{default:v(()=>[i.value?(r(),l("div",{key:0,ref_key:"items",ref:o,class:"items",onClick:I},[e("div",fa,[e("a",{class:"top-link",href:"#",onClick:b},f(u(a).returnToTopLabel||"Return to top"),1)]),e("div",pa,[$(De,{headers:t.headers},null,8,["headers"])])],512)):h("",!0)]),_:1})],4))}}),ya=S(ma,[["__scopeId","data-v-8a42e2b4"]]),ga={class:"container"},va=["aria-expanded"],ha={class:"menu-text"},ba=k({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:n,frontmatter:a}=E(),{hasSidebar:i}=X(),{headers:s}=da(),{y:c}=Ae(),o=w(0);K(()=>{o.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),oe(()=>{s.value=Pe(a.value.outline??n.value.outline)});const p=B(()=>s.value.length===0),d=B(()=>p.value&&!i.value),I=B(()=>({VPLocalNav:!0,"has-sidebar":i.value,empty:p.value,fixed:d.value}));return(b,y)=>u(a).layout!=="home"&&(!d.value||u(c)>=o.value)?(r(),l("div",{key:0,class:L(I.value)},[e("div",ga,[u(i)?(r(),l("button",{key:0,class:"menu","aria-expanded":t.open,"aria-controls":"VPSidebarNav",onClick:y[0]||(y[0]=C=>b.$emit("open-menu"))},[y[1]||(y[1]=e("span",{class:"vpi-align-left menu-icon"},null,-1)),e("span",ha,f(u(n).sidebarMenuLabel||"Menu"),1)],8,va)):h("",!0),$(ya,{headers:u(s),navHeight:o.value},null,8,["headers","navHeight"])])],2)):h("",!0)}}),Ga=S(ba,[["__scopeId","data-v-a6f0e41e"]]);function Ca(){const t=w(!1);function n(){t.value=!0,window.addEventListener("resize",s)}function a(){t.value=!1,window.removeEventListener("resize",s)}function i(){t.value?a():n()}function s(){window.outerWidth>=768&&a()}const c=ce();return W(()=>c.path,a),{isScreenOpen:t,openScreen:n,closeScreen:a,toggleScreen:i}}const Ia={},Pa={class:"VPSwitch",type:"button",role:"switch"},ka={class:"check"},Ba={key:0,class:"icon"};function Sa(t,n){return r(),l("button",Pa,[e("span",ka,[t.$slots.default?(r(),l("span",Ba,[g(t.$slots,"default",{},void 0,!0)])):h("",!0)])])}const Ta=S(Ia,[["render",Sa],["__scopeId","data-v-1d5665e3"]]),_a=k({__name:"VPSwitchAppearance",setup(t){const{isDark:n,theme:a}=E(),i=de("toggle-appearance",()=>{n.value=!n.value}),s=w("");return Ce(()=>{s.value=n.value?a.value.lightModeSwitchTitle||"Switch to light theme":a.value.darkModeSwitchTitle||"Switch to dark theme"}),(c,o)=>(r(),R(Ta,{title:s.value,class:"VPSwitchAppearance","aria-checked":u(n),onClick:u(i)},{default:v(()=>[...o[0]||(o[0]=[e("span",{class:"vpi-sun sun"},null,-1),e("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),ke=S(_a,[["__scopeId","data-v-5337faa4"]]),Ma={key:0,class:"VPNavBarAppearance"},wa=k({__name:"VPNavBarAppearance",setup(t){const{site:n}=E();return(a,i)=>u(n).appearance&&u(n).appearance!=="force-dark"&&u(n).appearance!=="force-auto"?(r(),l("div",Ma,[$(ke)])):h("",!0)}}),$a=S(wa,[["__scopeId","data-v-6c893767"]]),Be=w();let Oe=!1,pe=0;function Ra(t){const n=w(!1);if(ue){!Oe&&xa(),pe++;const a=W(Be,i=>{var s,c,o;i===t.el.value||(s=t.el.value)!=null&&s.contains(i)?(n.value=!0,(c=t.onFocus)==null||c.call(t)):(n.value=!1,(o=t.onBlur)==null||o.call(t))});le(()=>{a(),pe--,pe||Aa()})}return Ze(n)}function xa(){document.addEventListener("focusin",Fe),Oe=!0,Be.value=document.activeElement}function Aa(){document.removeEventListener("focusin",Fe)}function Fe(){Be.value=document.activeElement}const La={class:"VPMenuLink"},Va=["innerHTML"],Ea=k({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:n}=E();return(a,i)=>(r(),l("div",La,[$(z,{class:L({active:u(Z)(u(n).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon},{default:v(()=>[e("span",{innerHTML:t.item.text},null,8,Va)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),fe=S(Ea,[["__scopeId","data-v-35975db6"]]),Na={class:"VPMenuGroup"},Da={key:0,class:"title"},Oa=k({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(n,a)=>(r(),l("div",Na,[t.text?(r(),l("p",Da,f(t.text),1)):h("",!0),(r(!0),l(A,null,V(t.items,i=>(r(),l(A,null,["link"in i?(r(),R(fe,{key:0,item:i},null,8,["item"])):h("",!0)],64))),256))]))}}),Fa=S(Oa,[["__scopeId","data-v-69e747b5"]]),Ua={class:"VPMenu"},qa={key:0,class:"items"},Ha=k({__name:"VPMenu",props:{items:{}},setup(t){return(n,a)=>(r(),l("div",Ua,[t.items?(r(),l("div",qa,[(r(!0),l(A,null,V(t.items,i=>(r(),l(A,{key:JSON.stringify(i)},["link"in i?(r(),R(fe,{key:0,item:i},null,8,["item"])):"component"in i?(r(),R(Y(i.component),Q({key:1,ref_for:!0},i.props),null,16)):(r(),R(Fa,{key:2,text:i.text,items:i.items},null,8,["text","items"]))],64))),128))])):h("",!0),g(n.$slots,"default",{},void 0,!0)]))}}),ja=S(Ha,[["__scopeId","data-v-b98bc113"]]),Ya=["aria-expanded","aria-label"],za={key:0,class:"text"},Wa=["innerHTML"],Ka={key:1,class:"vpi-more-horizontal icon"},Xa={class:"menu"},Qa=k({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const n=w(!1),a=w();Ra({el:a,onBlur:i});function i(){n.value=!1}return(s,c)=>(r(),l("div",{class:"VPFlyout",ref_key:"el",ref:a,onMouseenter:c[1]||(c[1]=o=>n.value=!0),onMouseleave:c[2]||(c[2]=o=>n.value=!1)},[e("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":n.value,"aria-label":t.label,onClick:c[0]||(c[0]=o=>n.value=!n.value)},[t.button||t.icon?(r(),l("span",za,[t.icon?(r(),l("span",{key:0,class:L([t.icon,"option-icon"])},null,2)):h("",!0),t.button?(r(),l("span",{key:1,innerHTML:t.button},null,8,Wa)):h("",!0),c[3]||(c[3]=e("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(r(),l("span",Ka))],8,Ya),e("div",Xa,[$(ja,{items:t.items},{default:v(()=>[g(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Se=S(Qa,[["__scopeId","data-v-cf11d7a2"]]),Ja=["href","aria-label","innerHTML"],Za=k({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const n=t,a=w();K(async()=>{var c;await xe();const s=(c=a.value)==null?void 0:c.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${n.icon}.svg')`)});const i=B(()=>typeof n.icon=="object"?n.icon.svg:`<span class="vpi-social-${n.icon}"></span>`);return(s,c)=>(r(),l("a",{ref_key:"el",ref:a,class:"VPSocialLink no-icon",href:t.link,"aria-label":t.ariaLabel??(typeof t.icon=="string"?t.icon:""),target:"_blank",rel:"noopener",innerHTML:i.value},null,8,Ja))}}),ei=S(Za,[["__scopeId","data-v-bd121fe5"]]),ti={class:"VPSocialLinks"},ni=k({__name:"VPSocialLinks",props:{links:{}},setup(t){return(n,a)=>(r(),l("div",ti,[(r(!0),l(A,null,V(t.links,({link:i,icon:s,ariaLabel:c})=>(r(),R(ei,{key:i,icon:s,link:i,ariaLabel:c},null,8,["icon","link","ariaLabel"]))),128))]))}}),Te=S(ni,[["__scopeId","data-v-7bc22406"]]),ai={key:0,class:"group translations"},ii={class:"trans-title"},ri={key:1,class:"group"},si={class:"item appearance"},li={class:"label"},oi={class:"appearance-action"},ci={key:2,class:"group"},di={class:"item social-links"},ui=k({__name:"VPNavBarExtra",setup(t){const{site:n,theme:a}=E(),{localeLinks:i,currentLang:s}=ne({correspondingLink:!0}),c=B(()=>i.value.length&&s.value.label||n.value.appearance||a.value.socialLinks);return(o,p)=>c.value?(r(),R(Se,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:v(()=>[u(i).length&&u(s).label?(r(),l("div",ai,[e("p",ii,f(u(s).label),1),(r(!0),l(A,null,V(u(i),d=>(r(),R(fe,{key:d.link,item:d},null,8,["item"]))),128))])):h("",!0),u(n).appearance&&u(n).appearance!=="force-dark"&&u(n).appearance!=="force-auto"?(r(),l("div",ri,[e("div",si,[e("p",li,f(u(a).darkModeSwitchLabel||"Appearance"),1),e("div",oi,[$(ke)])])])):h("",!0),u(a).socialLinks?(r(),l("div",ci,[e("div",di,[$(Te,{class:"social-links-list",links:u(a).socialLinks},null,8,["links"])])])):h("",!0)]),_:1})):h("",!0)}}),fi=S(ui,[["__scopeId","data-v-bb2aa2f0"]]),pi=["aria-expanded"],mi=k({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(n,a)=>(r(),l("button",{type:"button",class:L(["VPNavBarHamburger",{active:t.active}]),"aria-label":"mobile navigation","aria-expanded":t.active,"aria-controls":"VPNavScreen",onClick:a[0]||(a[0]=i=>n.$emit("click"))},[...a[1]||(a[1]=[e("span",{class:"container"},[e("span",{class:"top"}),e("span",{class:"middle"}),e("span",{class:"bottom"})],-1)])],10,pi))}}),yi=S(mi,[["__scopeId","data-v-e5dd9c1c"]]),gi=["innerHTML"],vi=k({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:n}=E();return(a,i)=>(r(),R(z,{class:L({VPNavBarMenuLink:!0,active:u(Z)(u(n).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:v(()=>[e("span",{innerHTML:t.item.text},null,8,gi)]),_:1},8,["class","href","target","rel","no-icon"]))}}),hi=S(vi,[["__scopeId","data-v-e56f3d57"]]),bi=k({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const n=t,{page:a}=E(),i=c=>"component"in c?!1:"link"in c?Z(a.value.relativePath,c.link,!!n.item.activeMatch):c.items.some(i),s=B(()=>i(n.item));return(c,o)=>(r(),R(Se,{class:L({VPNavBarMenuGroup:!0,active:u(Z)(u(a).relativePath,t.item.activeMatch,!!t.item.activeMatch)||s.value}),button:t.item.text,items:t.item.items},null,8,["class","button","items"]))}}),Gi={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Ci=k({__name:"VPNavBarMenu",setup(t){const{theme:n}=E();return(a,i)=>u(n).nav?(r(),l("nav",Gi,[i[0]||(i[0]=e("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(r(!0),l(A,null,V(u(n).nav,s=>(r(),l(A,{key:JSON.stringify(s)},["link"in s?(r(),R(hi,{key:0,item:s},null,8,["item"])):"component"in s?(r(),R(Y(s.component),Q({key:1,ref_for:!0},s.props),null,16)):(r(),R(bi,{key:2,item:s},null,8,["item"]))],64))),128))])):h("",!0)}}),Ii=S(Ci,[["__scopeId","data-v-dc692963"]]);function Pi(t){const{localeIndex:n,theme:a}=E();function i(s){var P,G,T;const c=s.split("."),o=(P=a.value.search)==null?void 0:P.options,p=o&&typeof o=="object",d=p&&((T=(G=o.locales)==null?void 0:G[n.value])==null?void 0:T.translations)||null,I=p&&o.translations||null;let b=d,y=I,C=t;const M=c.pop();for(const _ of c){let N=null;const U=C==null?void 0:C[_];U&&(N=C=U);const j=y==null?void 0:y[_];j&&(N=y=j);const q=b==null?void 0:b[_];q&&(N=b=q),U||(C=N),j||(y=N),q||(b=N)}return(b==null?void 0:b[M])??(y==null?void 0:y[M])??(C==null?void 0:C[M])??""}return i}const ki=["aria-label"],Bi={class:"DocSearch-Button-Container"},Si={class:"DocSearch-Button-Placeholder"},_e=k({__name:"VPNavBarSearchButton",setup(t){const a=Pi({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(i,s)=>(r(),l("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":u(a)("button.buttonAriaLabel")},[e("span",Bi,[s[0]||(s[0]=e("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),e("span",Si,f(u(a)("button.buttonText")),1)]),s[1]||(s[1]=e("span",{class:"DocSearch-Button-Keys"},[e("kbd",{class:"DocSearch-Button-Key"}),e("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,ki))}}),Ti={class:"VPNavBarSearch"},_i={id:"local-search"},Mi={key:1,id:"docsearch"},wi=k({__name:"VPNavBarSearch",setup(t){const n=()=>null,a=()=>null,{theme:i}=E(),s=w(!1),c=w(!1);K(()=>{});function o(){s.value||(s.value=!0,setTimeout(p,16))}function p(){const b=new Event("keydown");b.key="k",b.metaKey=!0,window.dispatchEvent(b),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||p()},16)}const d=w(!1),I="";return(b,y)=>{var C;return r(),l("div",Ti,[u(I)==="local"?(r(),l(A,{key:0},[d.value?(r(),R(u(n),{key:0,onClose:y[0]||(y[0]=M=>d.value=!1)})):h("",!0),e("div",_i,[$(_e,{onClick:y[1]||(y[1]=M=>d.value=!0)})])],64)):u(I)==="algolia"?(r(),l(A,{key:1},[s.value?(r(),R(u(a),{key:0,algolia:((C=u(i).search)==null?void 0:C.options)??u(i).algolia,onVnodeBeforeMount:y[2]||(y[2]=M=>c.value=!0)},null,8,["algolia"])):h("",!0),c.value?h("",!0):(r(),l("div",Mi,[$(_e,{onClick:o})]))],64)):h("",!0)])}}}),$i=k({__name:"VPNavBarSocialLinks",setup(t){const{theme:n}=E();return(a,i)=>u(n).socialLinks?(r(),R(Te,{key:0,class:"VPNavBarSocialLinks",links:u(n).socialLinks},null,8,["links"])):h("",!0)}}),Ri=S($i,[["__scopeId","data-v-0394ad82"]]),xi=["href","rel","target"],Ai=["innerHTML"],Li={key:2},Vi=k({__name:"VPNavBarTitle",setup(t){const{site:n,theme:a}=E(),{hasSidebar:i}=X(),{currentLang:s}=ne(),c=B(()=>{var d;return typeof a.value.logoLink=="string"?a.value.logoLink:(d=a.value.logoLink)==null?void 0:d.link}),o=B(()=>{var d;return typeof a.value.logoLink=="string"||(d=a.value.logoLink)==null?void 0:d.rel}),p=B(()=>{var d;return typeof a.value.logoLink=="string"||(d=a.value.logoLink)==null?void 0:d.target});return(d,I)=>(r(),l("div",{class:L(["VPNavBarTitle",{"has-sidebar":u(i)}])},[e("a",{class:"title",href:c.value??u(Ie)(u(s).link),rel:o.value,target:p.value},[g(d.$slots,"nav-bar-title-before",{},void 0,!0),u(a).logo?(r(),R(re,{key:0,class:"logo",image:u(a).logo},null,8,["image"])):h("",!0),u(a).siteTitle?(r(),l("span",{key:1,innerHTML:u(a).siteTitle},null,8,Ai)):u(a).siteTitle===void 0?(r(),l("span",Li,f(u(n).title),1)):h("",!0),g(d.$slots,"nav-bar-title-after",{},void 0,!0)],8,xi)],2))}}),Ei=S(Vi,[["__scopeId","data-v-1168a8e4"]]),Ni={class:"items"},Di={class:"title"},Oi=k({__name:"VPNavBarTranslations",setup(t){const{theme:n}=E(),{localeLinks:a,currentLang:i}=ne({correspondingLink:!0});return(s,c)=>u(a).length&&u(i).label?(r(),R(Se,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:u(n).langMenuLabel||"Change language"},{default:v(()=>[e("div",Ni,[e("p",Di,f(u(i).label),1),(r(!0),l(A,null,V(u(a),o=>(r(),R(fe,{key:o.link,item:o},null,8,["item"]))),128))])]),_:1},8,["label"])):h("",!0)}}),Fi=S(Oi,[["__scopeId","data-v-88af2de4"]]),Ui={class:"wrapper"},qi={class:"container"},Hi={class:"title"},ji={class:"content"},Yi={class:"content-body"},zi=k({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const n=t,{y:a}=Ae(),{hasSidebar:i}=X(),{frontmatter:s}=E(),c=w({});return Ce(()=>{c.value={"has-sidebar":i.value,home:s.value.layout==="home",top:a.value===0,"screen-open":n.isScreenOpen}}),(o,p)=>(r(),l("div",{class:L(["VPNavBar",c.value])},[e("div",Ui,[e("div",qi,[e("div",Hi,[$(Ei,null,{"nav-bar-title-before":v(()=>[g(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[g(o.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),e("div",ji,[e("div",Yi,[g(o.$slots,"nav-bar-content-before",{},void 0,!0),$(wi,{class:"search"}),$(Ii,{class:"menu"}),$(Fi,{class:"translations"}),$($a,{class:"appearance"}),$(Ri,{class:"social-links"}),$(fi,{class:"extra"}),g(o.$slots,"nav-bar-content-after",{},void 0,!0),$(yi,{class:"hamburger",active:t.isScreenOpen,onClick:p[0]||(p[0]=d=>o.$emit("toggle-screen"))},null,8,["active"])])])])]),p[1]||(p[1]=e("div",{class:"divider"},[e("div",{class:"divider-line"})],-1))],2))}}),Wi=S(zi,[["__scopeId","data-v-6aa21345"]]),Ki={key:0,class:"VPNavScreenAppearance"},Xi={class:"text"},Qi=k({__name:"VPNavScreenAppearance",setup(t){const{site:n,theme:a}=E();return(i,s)=>u(n).appearance&&u(n).appearance!=="force-dark"&&u(n).appearance!=="force-auto"?(r(),l("div",Ki,[e("p",Xi,f(u(a).darkModeSwitchLabel||"Appearance"),1),$(ke)])):h("",!0)}}),Ji=S(Qi,[["__scopeId","data-v-b44890b2"]]),Zi=["innerHTML"],er=k({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const n=de("close-screen");return(a,i)=>(r(),R(z,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:u(n)},{default:v(()=>[e("span",{innerHTML:t.item.text},null,8,Zi)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),tr=S(er,[["__scopeId","data-v-df37e6dd"]]),nr=["innerHTML"],ar=k({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const n=de("close-screen");return(a,i)=>(r(),R(z,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:u(n)},{default:v(()=>[e("span",{innerHTML:t.item.text},null,8,nr)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ue=S(ar,[["__scopeId","data-v-3e9c20e4"]]),ir={class:"VPNavScreenMenuGroupSection"},rr={key:0,class:"title"},sr=k({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(n,a)=>(r(),l("div",ir,[t.text?(r(),l("p",rr,f(t.text),1)):h("",!0),(r(!0),l(A,null,V(t.items,i=>(r(),R(Ue,{key:i.text,item:i},null,8,["item"]))),128))]))}}),lr=S(sr,[["__scopeId","data-v-8133b170"]]),or=["aria-controls","aria-expanded"],cr=["innerHTML"],dr=["id"],ur={key:0,class:"item"},fr={key:1,class:"item"},pr={key:2,class:"group"},mr=k({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const n=t,a=w(!1),i=B(()=>`NavScreenGroup-${n.text.replace(" ","-").toLowerCase()}`);function s(){a.value=!a.value}return(c,o)=>(r(),l("div",{class:L(["VPNavScreenMenuGroup",{open:a.value}])},[e("button",{class:"button","aria-controls":i.value,"aria-expanded":a.value,onClick:s},[e("span",{class:"button-text",innerHTML:t.text},null,8,cr),o[0]||(o[0]=e("span",{class:"vpi-plus button-icon"},null,-1))],8,or),e("div",{id:i.value,class:"items"},[(r(!0),l(A,null,V(t.items,p=>(r(),l(A,{key:JSON.stringify(p)},["link"in p?(r(),l("div",ur,[$(Ue,{item:p},null,8,["item"])])):"component"in p?(r(),l("div",fr,[(r(),R(Y(p.component),Q({ref_for:!0},p.props,{"screen-menu":""}),null,16))])):(r(),l("div",pr,[$(lr,{text:p.text,items:p.items},null,8,["text","items"])]))],64))),128))],8,dr)],2))}}),yr=S(mr,[["__scopeId","data-v-b9ab8c58"]]),gr={key:0,class:"VPNavScreenMenu"},vr=k({__name:"VPNavScreenMenu",setup(t){const{theme:n}=E();return(a,i)=>u(n).nav?(r(),l("nav",gr,[(r(!0),l(A,null,V(u(n).nav,s=>(r(),l(A,{key:JSON.stringify(s)},["link"in s?(r(),R(tr,{key:0,item:s},null,8,["item"])):"component"in s?(r(),R(Y(s.component),Q({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(r(),R(yr,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):h("",!0)}}),hr=k({__name:"VPNavScreenSocialLinks",setup(t){const{theme:n}=E();return(a,i)=>u(n).socialLinks?(r(),R(Te,{key:0,class:"VPNavScreenSocialLinks",links:u(n).socialLinks},null,8,["links"])):h("",!0)}}),br={class:"list"},Gr=k({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:n,currentLang:a}=ne({correspondingLink:!0}),i=w(!1);function s(){i.value=!i.value}return(c,o)=>u(n).length&&u(a).label?(r(),l("div",{key:0,class:L(["VPNavScreenTranslations",{open:i.value}])},[e("button",{class:"title",onClick:s},[o[0]||(o[0]=e("span",{class:"vpi-languages icon lang"},null,-1)),O(" "+f(u(a).label)+" ",1),o[1]||(o[1]=e("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),e("ul",br,[(r(!0),l(A,null,V(u(n),p=>(r(),l("li",{key:p.link,class:"item"},[$(z,{class:"link",href:p.link},{default:v(()=>[O(f(p.text),1)]),_:2},1032,["href"])]))),128))])],2)):h("",!0)}}),Cr=S(Gr,[["__scopeId","data-v-858fe1a4"]]),Ir={class:"container"},Pr=k({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const n=w(null),a=Le(ue?document.body:null);return(i,s)=>(r(),R(be,{name:"fade",onEnter:s[0]||(s[0]=c=>a.value=!0),onAfterLeave:s[1]||(s[1]=c=>a.value=!1)},{default:v(()=>[t.open?(r(),l("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:n,id:"VPNavScreen"},[e("div",Ir,[g(i.$slots,"nav-screen-content-before",{},void 0,!0),$(vr,{class:"menu"}),$(Cr,{class:"translations"}),$(Ji,{class:"appearance"}),$(hr,{class:"social-links"}),g(i.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):h("",!0)]),_:3}))}}),kr=S(Pr,[["__scopeId","data-v-f2779853"]]),Br={key:0,class:"VPNav"},Sr=k({__name:"VPNav",setup(t){const{isScreenOpen:n,closeScreen:a,toggleScreen:i}=Ca(),{frontmatter:s}=E(),c=B(()=>s.value.navbar!==!1);return Ve("close-screen",a),se(()=>{ue&&document.documentElement.classList.toggle("hide-nav",!c.value)}),(o,p)=>c.value?(r(),l("header",Br,[$(Wi,{"is-screen-open":u(n),onToggleScreen:u(i)},{"nav-bar-title-before":v(()=>[g(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[g(o.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[g(o.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[g(o.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),$(kr,{open:u(n)},{"nav-screen-content-before":v(()=>[g(o.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[g(o.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):h("",!0)}}),Tr=S(Sr,[["__scopeId","data-v-ae24b3ad"]]),_r=["role","tabindex"],Mr={key:1,class:"items"},wr=k({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const n=t,{collapsed:a,collapsible:i,isLink:s,isActiveLink:c,hasActiveLink:o,hasChildren:p,toggle:d}=kt(B(()=>n.item)),I=B(()=>p.value?"section":"div"),b=B(()=>s.value?"a":"div"),y=B(()=>p.value?n.depth+2===7?"p":`h${n.depth+2}`:"p"),C=B(()=>s.value?void 0:"button"),M=B(()=>[[`level-${n.depth}`],{collapsible:i.value},{collapsed:a.value},{"is-link":s.value},{"is-active":c.value},{"has-active":o.value}]);function P(T){"key"in T&&T.key!=="Enter"||!n.item.link&&d()}function G(){n.item.link&&d()}return(T,_)=>{const N=ee("VPSidebarItem",!0);return r(),R(Y(I.value),{class:L(["VPSidebarItem",M.value])},{default:v(()=>[t.item.text?(r(),l("div",Q({key:0,class:"item",role:C.value},et(t.item.items?{click:P,keydown:P}:{},!0),{tabindex:t.item.items&&0}),[_[1]||(_[1]=e("div",{class:"indicator"},null,-1)),t.item.link?(r(),R(z,{key:0,tag:b.value,class:"link",href:t.item.link,rel:t.item.rel,target:t.item.target},{default:v(()=>[(r(),R(Y(y.value),{class:"text",innerHTML:t.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(r(),R(Y(y.value),{key:1,class:"text",innerHTML:t.item.text},null,8,["innerHTML"])),t.item.collapsed!=null&&t.item.items&&t.item.items.length?(r(),l("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:G,onKeydown:tt(G,["enter"]),tabindex:"0"},[..._[0]||(_[0]=[e("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):h("",!0)],16,_r)):h("",!0),t.item.items&&t.item.items.length?(r(),l("div",Mr,[t.depth<5?(r(!0),l(A,{key:0},V(t.item.items,U=>(r(),R(N,{key:U.text,item:U,depth:t.depth+1},null,8,["item","depth"]))),128)):h("",!0)])):h("",!0)]),_:1},8,["class"])}}}),$r=S(wr,[["__scopeId","data-v-b3fd67f8"]]),Rr=k({__name:"VPSidebarGroup",props:{items:{}},setup(t){const n=w(!0);let a=null;return K(()=>{a=setTimeout(()=>{a=null,n.value=!1},300)}),nt(()=>{a!=null&&(clearTimeout(a),a=null)}),(i,s)=>(r(!0),l(A,null,V(t.items,c=>(r(),l("div",{key:c.text,class:L(["group",{"no-transition":n.value}])},[$($r,{item:c,depth:0},null,8,["item"])],2))),128))}}),xr=S(Rr,[["__scopeId","data-v-c40bc020"]]),Ar={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Lr=k({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:n,hasSidebar:a}=X(),i=t,s=w(null),c=Le(ue?document.body:null);W([i,s],()=>{var p;i.open?(c.value=!0,(p=s.value)==null||p.focus()):c.value=!1},{immediate:!0,flush:"post"});const o=w(0);return W(n,()=>{o.value+=1},{deep:!0}),(p,d)=>u(a)?(r(),l("aside",{key:0,class:L(["VPSidebar",{open:t.open}]),ref_key:"navEl",ref:s,onClick:d[0]||(d[0]=at(()=>{},["stop"]))},[d[2]||(d[2]=e("div",{class:"curtain"},null,-1)),e("nav",Ar,[d[1]||(d[1]=e("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),g(p.$slots,"sidebar-nav-before",{},void 0,!0),(r(),R(xr,{items:u(n),key:o.value},null,8,["items"])),g(p.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):h("",!0)}}),Vr=S(Lr,[["__scopeId","data-v-319d5ca6"]]),Er=k({__name:"VPSkipLink",setup(t){const{theme:n}=E(),a=ce(),i=w();W(()=>a.path,()=>i.value.focus());function s({target:c}){const o=document.getElementById(decodeURIComponent(c.hash).slice(1));if(o){const p=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",p)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",p),o.focus(),window.scrollTo(0,0)}}return(c,o)=>(r(),l(A,null,[e("span",{ref_key:"backToTop",ref:i,tabindex:"-1"},null,512),e("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},f(u(n).skipToContentLabel||"Skip to content"),1)],64))}}),Nr=S(Er,[["__scopeId","data-v-0b0ada53"]]),Dr=k({__name:"Layout",setup(t){const{isOpen:n,open:a,close:i}=X(),s=ce();W(()=>s.path,i),Pt(n,i);const{frontmatter:c}=E(),o=it(),p=B(()=>!!o["home-hero-image"]);return Ve("hero-image-slot-exists",p),(d,I)=>{const b=ee("Content");return u(c).layout!==!1?(r(),l("div",{key:0,class:L(["Layout",u(c).pageClass])},[g(d.$slots,"layout-top",{},void 0,!0),$(Nr),$(dt,{class:"backdrop",show:u(n),onClick:u(i)},null,8,["show","onClick"]),$(Tr,null,{"nav-bar-title-before":v(()=>[g(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[g(d.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[g(d.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[g(d.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":v(()=>[g(d.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[g(d.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),$(Ga,{open:u(n),onOpenMenu:u(a)},null,8,["open","onOpenMenu"]),$(Vr,{open:u(n)},{"sidebar-nav-before":v(()=>[g(d.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":v(()=>[g(d.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),$(ia,null,{"page-top":v(()=>[g(d.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[g(d.$slots,"page-bottom",{},void 0,!0)]),"not-found":v(()=>[g(d.$slots,"not-found",{},void 0,!0)]),"home-hero-before":v(()=>[g(d.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[g(d.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[g(d.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[g(d.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[g(d.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[g(d.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[g(d.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[g(d.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[g(d.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":v(()=>[g(d.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[g(d.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[g(d.$slots,"doc-after",{},void 0,!0)]),"doc-top":v(()=>[g(d.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[g(d.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":v(()=>[g(d.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[g(d.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[g(d.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[g(d.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[g(d.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[g(d.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),$(ca),g(d.$slots,"layout-bottom",{},void 0,!0)],2)):(r(),R(b,{key:1}))}}}),Or=S(Dr,[["__scopeId","data-v-5d98c3a5"]]),qe={Layout:Or,enhanceApp:({app:t})=>{t.component("Badge",lt)}},Fr={key:0,class:"content-freshness-bar"},Ur={class:"freshness-item"},qr={key:0,class:"freshness-item"},Hr={class:"badge badge-info"},jr={key:1,class:"freshness-item"},Yr=k({__name:"Layout",setup(t){const{frontmatter:n}=Me(),a=i=>{switch(i){case"vendor":return"服务商官方文档/公告";case"self_measured":return"本站独立实测数据";case"third_party":return"第三方交叉验证记录";case"user_supplied":return"站长/用户提供记录";default:return"客观快照存证"}};return(i,s)=>(r(),R(u(qe).Layout,null,{"doc-before":v(()=>[u(n).verifiedAt||u(n).modifiedAt?(r(),l("div",Fr,[e("span",Ur,[s[0]||(s[0]=O(" 📅 内容核验时间: ",-1)),e("strong",null,f(u(n).verifiedAt||u(n).modifiedAt),1)]),u(n).provenance?(r(),l("span",qr,[s[1]||(s[1]=O(" 📌 证据级别: ",-1)),e("span",Hr,f(a(u(n).provenance)),1)])):h("",!0),u(n).primaryIntent?(r(),l("span",jr," 🎯 核心意图: "+f(u(n).primaryIntent),1)):h("",!0)])):h("",!0)]),_:1}))}}),zr=S(Yr,[["__scopeId","data-v-332a6ead"]]),F=[{id:"lightspeed",rank:1,name:"光速云",aliases:["光速云","光速云"],establishedYear:2020,summary:"2020年起持续运营的综合型IEPL老牌机场，采用IEPL专线+企业级内网双专线架构与VLESS协议。提供致敬斯诺克147永久套餐、99元年付轻量版、25元月付极速版与680元定制版，单节点最高2.5Gbps，覆盖ChatGPT长文本、TikTok直播与海外电商高要求业务。",protocols:["VLESS","Shadowsocks","Trojan"],lineType:"IEPL 专线 + 企业级内网专线（双线路架构）",startingPriceMonthly:8.25,customClient:!0,thirdPartySupport:!0,linkId:"link-lightspeed",categoryTag:"第一主推旗舰专线（综合 TOP 1）",speedtestImage:"光速云-节点测速实测.png",unlockImages:[{file:"photo_2026-08-19_12-13-01.jpg",title:"光速云 日本节点 ChatGPT 网页版长文本流式传输抓包"},{file:"photo_2026-08-19_12-13-50.jpg",title:"光速云 新加坡节点 Claude 3.5 Sonnet 人机验证通过实录"},{file:"photo_2026-08-19_12-13-58.jpg",title:"光速云 美区原生节点 Netflix 独家版权片目 180秒持续播放无弹窗"},{file:"photo_2026-08-19_12-18-40.jpg",title:"光速云 全球节点晚高峰延迟与带宽监控大盘"},{file:"photo_2026-08-19_12-20-10.jpg",title:"光速云 TikTok 跨境电商直播原生住宅 IP 解锁验证"}],sourceRef:"SRC-28-BRANDS #1",verifiedAt:"2026-10-21",isActive:!0,rawBlock:`主推## 1. 光速云\r
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
`}],he=[{id:"link-lightspeed",brandId:"lightspeed",url:"https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",code:"AMM",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-flycat",brandId:"flycat",url:"https://guangs.flycataff.com/#/?code=6uq0Xe9y",code:"flycat888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-breezenet",brandId:"breezenet",url:"https://edp01.breezenetaff.com/#/?code=t3huofyI",code:"flat888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-twilight",brandId:"twilight",url:"https://varnexa.twilightaff.com/#/?code=D1LHglg3",code:"muguang5555",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-dalaoyun",brandId:"dalaoyun",url:"https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",code:"dly888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-stardream",brandId:"stardream",url:"https://guangs.xingdaomeng.com/#/?code=1TynBYnR",code:"nmw888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-2mao",brandId:"2mao",url:"https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",code:"ermao5555",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-wuyou",brandId:"wuyou",url:"https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",code:"wuyou666",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-v2yun",brandId:"v2yun",url:"https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",code:"weitu666",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-firefly",brandId:"firefly",url:"https://vip02.fireflyaff.com/#/?code=2n7VURre",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-yuzhou",brandId:"yuzhou",url:"https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-u1s1",brandId:"u1s1",url:"https://guangs.vipaff.cc/#/?code=xhX5X22f",code:"akaka",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-lingmao",brandId:"lingmao",url:"https://vip01.civetnet.com/#/?code=8MIAyxak",code:"lmao888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-jilian",brandId:"jilian",url:"https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",code:"ji8888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-guangnian",brandId:"guangnian",url:"https://guangs.gntaff.com/#/?code=X1FoxjGE",code:"gnt6666",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-yifan",brandId:"yifan",url:"https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",code:"yfy6666",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-sogo",brandId:"sogo",url:"https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",code:"SOGO10000",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-kexin",brandId:"kexin",url:"https://guangs.kosingaff.com/#/register?code=UYDtNlCY",code:"kkk333",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-sujie",brandId:"sujie",url:"https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",code:"sss1111",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-shanyue",brandId:"shanyue",url:"https://vip02.flashleapaff.com/#/?code=3lgzm9mm",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-quanqiu",brandId:"quanqiu",url:"https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-shandianshu",brandId:"shandianshu",url:"https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",code:"sd88",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-yunjiexian",brandId:"yunjiexian",url:"https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",code:"yjx888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-liulianyun",brandId:"liulianyun",url:"https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",code:"ll88",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-shenxing",brandId:"shenxing",url:"https://qwerty.shenxingaff.com/#/?code=gawDQqVE",code:"xs0077",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-huanqiuti",brandId:"huanqiuti",url:"https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",code:"HQ66",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-yinxingren",brandId:"yinxingren",url:"https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",code:"yxr888",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-tiziyun",brandId:"tiziyun",url:"https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",code:"tiziyun",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明，不影响客观评测结论。"},{id:"link-wgetcloud",brandId:"wgetcloud",url:"https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明。"},{id:"link-baiyueguang",brandId:"baiyueguang",url:"https://www.sibker.com/register?invite_code=gg6puAId",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明。"},{id:"link-cyberguard",brandId:"cyberguard",url:"https://cyberguard.best/#/register?code=AxXNNYng",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明。"},{id:"link-shanshuiyun",brandId:"shanshuiyun",url:"https://sldm1.ssyylf.com/#/register?code=YD5iQ888",code:"",sponsored:!0,disclaimer:"官方合规推广链接，价格公开透明。"}],Wr={key:0,class:"brand-gallery-wrapper"},Kr={class:"gallery-toolbar"},Xr={class:"search-box"},Qr={class:"category-pills"},Jr=["onClick"],Zr={class:"speedtest-toggle"},es={class:"brand-grid"},ts={class:"card-top-badge"},ns={class:"badge-cluster"},as={key:0,class:"rank-tag gold-top"},is={key:1,class:"rank-tag blue-top"},rs={key:2,class:"rank-tag neutral-top"},ss={key:3,class:"speedtest-badge"},ls={key:4,class:"unlock-badge"},os={class:"card-header"},cs={class:"brand-identity"},ds={class:"brand-avatar-box"},us={class:"brand-initial"},fs={class:"brand-titles"},ps={class:"brand-name"},ms=["href","title"],ys={class:"brand-meta-row"},gs={class:"brand-category-label"},vs={key:0,class:"brand-year"},hs={class:"price-tag"},bs={class:"price-val-box"},Gs={class:"price-val"},Cs=["title"],Is={class:"card-specs"},Ps={class:"spec-item"},ks=["title"],Bs={class:"spec-item"},Ss=["title"],Ts={class:"spec-item"},_s=["title"],Ms={key:0,class:"card-featured-review"},ws={class:"card-footer"},$s=["href"],Rs=["href","title"],xs={key:0,class:"empty-results"},As={class:"card-top-badge"},Ls={class:"badge-cluster"},Vs={key:0,class:"rank-tag gold-top"},Es={key:1,class:"rank-tag blue-top"},Ns={key:2,class:"rank-tag neutral-top"},Ds={key:3,class:"speedtest-badge"},Os={key:4,class:"unlock-badge"},Fs={class:"card-header"},Us={class:"brand-identity"},qs={class:"brand-avatar-box"},Hs={class:"brand-initial"},js={class:"brand-titles"},Ys={class:"brand-name"},zs=["href","title"],Ws={class:"brand-meta-row"},Ks={class:"brand-category-label"},Xs={key:0,class:"brand-year"},Qs={class:"price-tag"},Js={class:"price-val-box"},Zs={class:"price-val"},el=["title"],tl={class:"card-specs"},nl={class:"spec-item"},al=["title"],il={class:"spec-item"},rl=["title"],sl={class:"spec-item"},ll=["title"],ol={key:0,class:"card-featured-review"},cl={class:"card-footer"},dl=["href"],ul=["href","title"],fl=k({__name:"BrandCard",props:{brandId:{}},setup(t){const n=t,a=w(""),i=w("all"),s=w(!1),c=[{key:"all",label:"全部品牌"},{key:"top10",label:"⭐ 前十精选"},{key:"iepl",label:"🚀 IEPL/IPLC 专线"},{key:"budget",label:"💰 高性价比/低门槛"},{key:"backup",label:"📦 不限时/大流量备用"}];function o(M){return M==="all"?F.length:M==="top10"?F.filter(P=>P.rank<=10).length:M==="iepl"?F.filter(P=>P.lineType.includes("专线")||P.lineType.includes("IEPL")||P.lineType.includes("IPLC")).length:M==="budget"?F.filter(P=>P.startingPriceMonthly<=8.5).length:M==="backup"?F.filter(P=>P.categoryTag.includes("不限时")||P.categoryTag.includes("大流量")||P.categoryTag.includes("备用")).length:0}const p=B(()=>F.filter(M=>!!M.speedtestImage).length),d=B(()=>F.filter(M=>{var P;if(a.value){const G=a.value.toLowerCase().trim(),T=M.name.toLowerCase().includes(G),_=(P=M.aliases)==null?void 0:P.some(U=>U.toLowerCase().includes(G)),N=M.lineType.toLowerCase().includes(G);if(!T&&!_&&!N)return!1}return!(i.value==="top10"&&M.rank>10||i.value==="iepl"&&!M.lineType.includes("专线")&&!M.lineType.includes("IEPL")&&!M.lineType.includes("IPLC")||i.value==="budget"&&M.startingPriceMonthly>8.5||i.value==="backup"&&!M.categoryTag.includes("不限时")&&!M.categoryTag.includes("大流量")&&!M.categoryTag.includes("备用")||s.value&&!M.speedtestImage)}));function I(){a.value="",i.value="all",s.value=!1}function b(M){return he.find(P=>P.brandId===M)}const y=B(()=>n.brandId?F.find(M=>M.id===n.brandId)||{id:n.brandId,name:n.brandId,rank:99,aliases:[],establishedYear:null,summary:"资料核验中",protocols:[],lineType:"标准网络",startingPriceMonthly:15,customClient:!1,thirdPartySupport:!0,categoryTag:"常规方案",speedtestImage:null,unlockImages:null}:null),C=B(()=>n.brandId?he.find(M=>M.brandId===n.brandId):null);return(M,P)=>n.brandId?(r(),l("div",{key:1,class:L(["brand-card",{"flagship-card":y.value.rank===1}])},[e("div",As,[e("div",Ls,[y.value.rank===1?(r(),l("span",Vs,"🏆 TOP 1 全站主推旗舰")):y.value.rank<=10?(r(),l("span",Es,"⭐ TOP "+f(y.value.rank)+" 推荐",1)):(r(),l("span",Ns,"客观测评档案 #"+f(y.value.rank),1)),y.value.speedtestImage?(r(),l("span",Ds,"⚡ 含测速大图")):h("",!0),y.value.unlockImages?(r(),l("span",Os,"🔓 含解锁图")):h("",!0)])]),e("div",Fs,[e("div",Us,[e("div",qs,[e("span",Hs,f(y.value.name.slice(0,1)),1)]),e("div",js,[e("h4",Ys,[e("a",{href:`/brands/${y.value.id}/`,title:y.value.name},f(y.value.name),9,zs)]),e("div",Ws,[e("span",Ks,f(y.value.categoryTag),1),y.value.establishedYear?(r(),l("span",Xs,f(y.value.establishedYear)+"年运营",1)):h("",!0)])])]),e("div",Qs,[e("div",Js,[P[11]||(P[11]=e("span",{class:"price-currency"},"¥",-1)),e("span",Zs,f(y.value.startingPriceMonthly.toFixed(2)),1)]),P[12]||(P[12]=e("span",{class:"price-unit"},"/月起",-1))])]),e("p",{class:"brand-summary",title:y.value.summary},f(y.value.summary),9,el),e("div",tl,[e("div",nl,[P[13]||(P[13]=e("span",{class:"spec-label"},"线路架构:",-1)),e("span",{class:"spec-val",title:y.value.lineType},f(y.value.lineType),9,al)]),e("div",il,[P[14]||(P[14]=e("span",{class:"spec-label"},"支持协议:",-1)),e("span",{class:"spec-val",title:y.value.protocols.join(", ")},f(y.value.protocols.join(", ")),9,rl)]),e("div",sl,[P[15]||(P[15]=e("span",{class:"spec-label"},"客户端型:",-1)),e("span",{class:"spec-val",title:y.value.customClient?"自研专属端 + 通用核心":"通用订阅核心 (Clash/Sing-box)"},f(y.value.customClient?"自研专属端 + 通用核心":"通用订阅核心 (Clash/Sing-box)"),9,ll)])]),y.value.id==="lightspeed"?(r(),l("div",ol,[...P[16]||(P[16]=[e("a",{href:"/reviews/lightspeed/",class:"featured-review-pill"},[e("span",{class:"review-badge"},"独家首发"),e("span",{class:"review-text"},"📖 8000字全景深度拆解评测"),e("span",{class:"review-arrow"},"→")],-1)])])):h("",!0),e("div",cl,[e("a",{href:`/brands/${y.value.id}/`,class:"btn-footer btn-outline"}," 深度档案 ",8,dl),C.value?(r(),l("a",{key:0,href:C.value.url,target:"_blank",rel:"nofollow sponsored noopener",class:"btn-footer btn-primary sponsored-btn",title:C.value.disclaimer},[...P[17]||(P[17]=[e("span",null,"官网直达",-1),e("span",{class:"sponsored-tag"},"推广",-1)])],8,ul)):h("",!0)])],2)):(r(),l("div",Wr,[e("div",Kr,[e("div",Xr,[D(e("input",{"onUpdate:modelValue":P[0]||(P[0]=G=>a.value=G),type:"text",placeholder:"搜索品牌名称（如：光速云、飞猫、WgetCloud）...",class:"gallery-search-input"},null,512),[[J,a.value]]),a.value?(r(),l("button",{key:0,class:"clear-search-btn",onClick:P[1]||(P[1]=G=>a.value="")},"✕")):h("",!0)]),e("div",Qr,[(r(),l(A,null,V(c,G=>e("button",{key:G.key,class:L(["cat-pill-btn",{active:i.value===G.key}]),onClick:T=>i.value=G.key},f(G.label)+" ("+f(o(G.key))+") ",11,Jr)),64))]),e("label",Zr,[D(e("input",{type:"checkbox","onUpdate:modelValue":P[2]||(P[2]=G=>s.value=G)},null,512),[[rt,s.value]]),e("span",null,"⚡ 仅看有测速实测图 ("+f(p.value)+")",1)])]),e("div",es,[(r(!0),l(A,null,V(d.value,G=>(r(),l("div",{key:G.id,class:L(["brand-card",{"flagship-card":G.rank===1}])},[e("div",ts,[e("div",ns,[G.rank===1?(r(),l("span",as,"🏆 TOP 1 全站主推旗舰")):G.rank<=10?(r(),l("span",is,"⭐ TOP "+f(G.rank)+" 推荐",1)):(r(),l("span",rs,"入库候选 #"+f(G.rank),1)),G.speedtestImage?(r(),l("span",ss,"⚡ 含测速大图")):h("",!0),G.unlockImages?(r(),l("span",ls,"🔓 含解锁图")):h("",!0)])]),e("div",os,[e("div",cs,[e("div",ds,[e("span",us,f(G.name.slice(0,1)),1)]),e("div",fs,[e("h4",ps,[e("a",{href:`/brands/${G.id}/`,title:G.name},f(G.name),9,ms)]),e("div",ys,[e("span",gs,f(G.categoryTag.split("（")[0]),1),G.establishedYear?(r(),l("span",vs,f(G.establishedYear)+"年运营",1)):h("",!0)])])]),e("div",hs,[e("div",bs,[P[3]||(P[3]=e("span",{class:"price-currency"},"¥",-1)),e("span",Gs,f(G.startingPriceMonthly.toFixed(2)),1)]),P[4]||(P[4]=e("span",{class:"price-unit"},"/月起",-1))])]),e("p",{class:"brand-summary",title:G.summary},f(G.summary),9,Cs),e("div",Is,[e("div",Ps,[P[5]||(P[5]=e("span",{class:"spec-label"},"线路架构:",-1)),e("span",{class:"spec-val",title:G.lineType},f(G.lineType),9,ks)]),e("div",Bs,[P[6]||(P[6]=e("span",{class:"spec-label"},"支持协议:",-1)),e("span",{class:"spec-val",title:G.protocols.join(", ")},f(G.protocols.join(", ")),9,Ss)]),e("div",Ts,[P[7]||(P[7]=e("span",{class:"spec-label"},"客户端型:",-1)),e("span",{class:"spec-val",title:G.customClient?"自研专属端 + 通用核心":"通用订阅核心 (Clash/Sing-box)"},f(G.customClient?"自研专属端 + 通用核心":"通用订阅核心 (Clash/Sing-box)"),9,_s)])]),G.id==="lightspeed"?(r(),l("div",Ms,[...P[8]||(P[8]=[e("a",{href:"/reviews/lightspeed/",class:"featured-review-pill"},[e("span",{class:"review-badge"},"独家首发"),e("span",{class:"review-text"},"📖 8000字全景深度拆解评测"),e("span",{class:"review-arrow"},"→")],-1)])])):h("",!0),e("div",ws,[e("a",{href:`/brands/${G.id}/`,class:"btn-footer btn-outline"}," 深度档案 ",8,$s),b(G.id)?(r(),l("a",{key:0,href:b(G.id).url,target:"_blank",rel:"nofollow sponsored noopener",class:"btn-footer btn-primary sponsored-btn",title:b(G.id).disclaimer},[...P[9]||(P[9]=[e("span",null,"官网直达",-1),e("span",{class:"sponsored-tag"},"推广",-1)])],8,Rs)):h("",!0)])],2))),128))]),d.value.length===0?(r(),l("div",xs,[P[10]||(P[10]=e("p",null,"未找到符合条件的机场品牌，请尝试清空筛选关键词。",-1)),e("button",{class:"btn-footer btn-outline",onClick:I},"重置全部筛选")])):h("",!0)]))}}),pl=S(fl,[["__scopeId","data-v-b0cceb43"]]),ml=[{id:"flycat-plan-1",brandId:"flycat",name:"飞猫云·飞猫·学生版",billingCycle:"年付",actualPayment:84,effectiveMonthlyCost:7,trafficGB:50,trafficReset:"每月",features:["年付","50GB","BGP 中继隧道 / 专线混合"]},{id:"flycat-plan-2",brandId:"flycat",name:"飞猫云·飞猫·星耀版",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150GB","BGP 中继隧道 / 专线混合"]},{id:"flycat-plan-3",brandId:"flycat",name:"飞猫云·飞猫·星环版",billingCycle:"月付",actualPayment:45,effectiveMonthlyCost:45,trafficGB:300,trafficReset:"每月",features:["月付","300GB","BGP 中继隧道 / 专线混合"]},{id:"flycat-plan-4",brandId:"flycat",name:"飞猫云·飞猫·银河版",billingCycle:"月付",actualPayment:85,effectiveMonthlyCost:85,trafficGB:600,trafficReset:"每月",features:["月付","600GB","BGP 中继隧道 / 专线混合"]},{id:"flycat-plan-5",brandId:"flycat",name:"飞猫云·飞猫·宇宙版",billingCycle:"月付",actualPayment:150,effectiveMonthlyCost:150,trafficGB:1e3,trafficReset:"每月",features:["月付","1000GB","BGP 中继隧道 / 专线混合"]},{id:"flycat-plan-6",brandId:"flycat",name:"飞猫云·飞猫·不限时套餐",billingCycle:"一次性付费",actualPayment:680,effectiveMonthlyCost:680,trafficGB:1e3,trafficReset:"一次性",features:["一次性付费","1000GB","BGP 中继隧道 / 专线混合"]},{id:"flycat-plan-7",brandId:"flycat",name:"飞猫云·飞猫·定制套餐",billingCycle:"月付",actualPayment:550,effectiveMonthlyCost:550,trafficGB:500,trafficReset:"每月",features:["月付","500GB","BGP 中继隧道 / 专线混合"]},{id:"breezenet-plan-1",brandId:"breezenet",name:"微风网络·清风 (Breeze)",billingCycle:"年付",actualPayment:137,effectiveMonthlyCost:11.42,trafficGB:100,trafficReset:"每月",features:["年付","100GB","BGP 中继隧道 / 专线混合"]},{id:"breezenet-plan-2",brandId:"breezenet",name:"微风网络·乘风 (Riding)",billingCycle:"月付",actualPayment:27,effectiveMonthlyCost:27,trafficGB:200,trafficReset:"每月",features:["月付","200GB","BGP 中继隧道 / 专线混合"]},{id:"breezenet-plan-3",brandId:"breezenet",name:"微风网络·破风 (Breaking)",billingCycle:"月付",actualPayment:57,effectiveMonthlyCost:57,trafficGB:500,trafficReset:"每月",features:["月付","500GB","BGP 中继隧道 / 专线混合"]},{id:"breezenet-plan-4",brandId:"breezenet",name:"微风网络·御风 (Mastery)",billingCycle:"月付",actualPayment:127,effectiveMonthlyCost:127,trafficGB:1200,trafficReset:"每月",features:["月付","1200GB","BGP 中继隧道 / 专线混合"]},{id:"breezenet-plan-5",brandId:"breezenet",name:"微风网络·信风·不限时",billingCycle:"一次性付费",actualPayment:200,effectiveMonthlyCost:200,trafficGB:270,trafficReset:"一次性",features:["一次性付费","270GB","BGP 中继隧道 / 专线混合"]},{id:"breezenet-plan-6",brandId:"breezenet",name:"微风网络·长风·不限时",billingCycle:"一次性付费",actualPayment:370,effectiveMonthlyCost:370,trafficGB:570,trafficReset:"一次性",features:["一次性付费","570GB","BGP 中继隧道 / 专线混合"]},{id:"twilight-plan-1",brandId:"twilight",name:"暮光加速·【暮光·基础版】",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:120,trafficReset:"每月",features:["月付","120GB","优质 BGP 跨境网络"]},{id:"twilight-plan-2",brandId:"twilight",name:"暮光加速·【暮光·标准版】",billingCycle:"月付",actualPayment:40,effectiveMonthlyCost:40,trafficGB:240,trafficReset:"每月",features:["月付","240GB","优质 BGP 跨境网络"]},{id:"twilight-plan-3",brandId:"twilight",name:"暮光加速·【暮光·旗舰版】",billingCycle:"月付",actualPayment:100,effectiveMonthlyCost:100,trafficGB:700,trafficReset:"每月",features:["月付","700GB","优质 BGP 跨境网络"]},{id:"twilight-plan-4",brandId:"twilight",name:"暮光加速·【暮光·至尊版】",billingCycle:"月付",actualPayment:180,effectiveMonthlyCost:180,trafficGB:1500,trafficReset:"每月",features:["月付","1500GB","优质 BGP 跨境网络"]},{id:"twilight-plan-5",brandId:"twilight",name:"暮光加速·【暮光·年付轻量版】",billingCycle:"年付",actualPayment:109,effectiveMonthlyCost:9.08,trafficGB:70,trafficReset:"每月",features:["年付","70GB","优质 BGP 跨境网络"]},{id:"twilight-plan-6",brandId:"twilight",name:"暮光加速·【暮光·不限时轻量包】",billingCycle:"一次性付费",actualPayment:219,effectiveMonthlyCost:219,trafficGB:150,trafficReset:"一次性",features:["一次性付费","150GB","优质 BGP 跨境网络"]},{id:"twilight-plan-7",brandId:"twilight",name:"暮光加速·【暮光·不限时标准包】",billingCycle:"一次性付费",actualPayment:529,effectiveMonthlyCost:529,trafficGB:400,trafficReset:"一次性",features:["一次性付费","400GB","优质 BGP 跨境网络"]},{id:"twilight-plan-8",brandId:"twilight",name:"暮光加速·【暮光·不限时大容量包】",billingCycle:"一次性付费",actualPayment:959,effectiveMonthlyCost:959,trafficGB:800,trafficReset:"一次性",features:["一次性付费","800GB","优质 BGP 跨境网络"]},{id:"twilight-plan-9",brandId:"twilight",name:"暮光加速·独享私人定制节点",billingCycle:"月付",actualPayment:600,effectiveMonthlyCost:600,trafficGB:500,trafficReset:"每月",features:["月付","500GB","优质 BGP 跨境网络"]},{id:"dalaoyun-plan-default",brandId:"dalaoyun",name:"大佬云·基础标准版",billingCycle:"月付",actualPayment:8.399999999999999,effectiveMonthlyCost:5.6,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"stardream-plan-1",brandId:"stardream",name:"星岛梦·星岛梦·贴心小包",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-2",brandId:"stardream",name:"星岛梦·星岛梦·超量150G",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-3",brandId:"stardream",name:"星岛梦·星岛梦·进阶300G",billingCycle:"月付",actualPayment:50,effectiveMonthlyCost:50,trafficGB:300,trafficReset:"每月",features:["月付","300GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-4",brandId:"stardream",name:"星岛梦·星岛梦·闪光500G",billingCycle:"月付",actualPayment:70,effectiveMonthlyCost:70,trafficGB:500,trafficReset:"每月",features:["月付","500GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-5",brandId:"stardream",name:"星岛梦·星岛梦·旗舰1T版",billingCycle:"月付",actualPayment:130,effectiveMonthlyCost:130,trafficGB:1e3,trafficReset:"每月",features:["月付","1000GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-6",brandId:"stardream",name:"星岛梦·星岛梦·永久不限时100",billingCycle:"一次性付费",actualPayment:100,effectiveMonthlyCost:100,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-7",brandId:"stardream",name:"星岛梦·星岛梦·永久不限时300",billingCycle:"一次性付费",actualPayment:300,effectiveMonthlyCost:300,trafficGB:300,trafficReset:"一次性",features:["一次性付费","300GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-8",brandId:"stardream",name:"星岛梦·星岛梦·永久不限时1TB",billingCycle:"一次性付费",actualPayment:600,effectiveMonthlyCost:600,trafficGB:1e3,trafficReset:"一次性",features:["一次性付费","1000GB","BGP 中继隧道 / 专线混合"]},{id:"stardream-plan-9",brandId:"stardream",name:"星岛梦·星岛梦·定制套餐",billingCycle:"月付",actualPayment:680,effectiveMonthlyCost:680,trafficGB:500,trafficReset:"每月",features:["月付","500GB","BGP 中继隧道 / 专线混合"]},{id:"2mao-plan-1",brandId:"2mao",name:"二猫云·二猫云·不限时套餐",billingCycle:"一次性付费",actualPayment:99,effectiveMonthlyCost:99,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","BGP 中继隧道 / 专线混合"]},{id:"2mao-plan-2",brandId:"2mao",name:"二猫云·二猫年付小包",billingCycle:"年付",actualPayment:89,effectiveMonthlyCost:7.42,trafficGB:60,trafficReset:"每月",features:["年付","60GB","BGP 中继隧道 / 专线混合"]},{id:"2mao-plan-3",brandId:"2mao",name:"二猫云·二猫云·白猫套餐",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:130,trafficReset:"每月",features:["月付","130GB","BGP 中继隧道 / 专线混合"]},{id:"2mao-plan-4",brandId:"2mao",name:"二猫云·二猫云·橘猫畅玩版",billingCycle:"月付",actualPayment:40,effectiveMonthlyCost:40,trafficGB:230,trafficReset:"每月",features:["月付","230GB","BGP 中继隧道 / 专线混合"]},{id:"2mao-plan-5",brandId:"2mao",name:"二猫云·二猫云·牛奶猫尊享版",billingCycle:"月付",actualPayment:80,effectiveMonthlyCost:80,trafficGB:430,trafficReset:"每月",features:["月付","430GB","BGP 中继隧道 / 专线混合"]},{id:"2mao-plan-6",brandId:"2mao",name:"二猫云·二猫云·黑猫重度用户版",billingCycle:"月付",actualPayment:160,effectiveMonthlyCost:160,trafficGB:850,trafficReset:"每月",features:["月付","850GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-1",brandId:"wuyou",name:"无忧链接·MINI链接",billingCycle:"年付",actualPayment:79,effectiveMonthlyCost:6.58,trafficGB:40,trafficReset:"每月",features:["年付","40GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-2",brandId:"wuyou",name:"无忧链接·舒心链接",billingCycle:"月付",actualPayment:19,effectiveMonthlyCost:19,trafficGB:100,trafficReset:"每月",features:["月付","100GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-3",brandId:"wuyou",name:"无忧链接·省心链接",billingCycle:"月付",actualPayment:33,effectiveMonthlyCost:33,trafficGB:200,trafficReset:"每月",features:["月付","200GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-4",brandId:"wuyou",name:"无忧链接·随心链接",billingCycle:"月付",actualPayment:77,effectiveMonthlyCost:77,trafficGB:500,trafficReset:"每月",features:["月付","500GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-5",brandId:"wuyou",name:"无忧链接·忘忧链接",billingCycle:"月付",actualPayment:117,effectiveMonthlyCost:117,trafficGB:1e3,trafficReset:"每月",features:["月付","1000GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-6",brandId:"wuyou",name:"无忧链接·100G永久不限时 无忧链接",billingCycle:"一次性付费",actualPayment:108,effectiveMonthlyCost:108,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","BGP 中继隧道 / 专线混合"]},{id:"wuyou-plan-7",brandId:"wuyou",name:"无忧链接·300G永久不限时 无忧链接",billingCycle:"一次性付费",actualPayment:298,effectiveMonthlyCost:298,trafficGB:300,trafficReset:"一次性",features:["一次性付费","300GB","BGP 中继隧道 / 专线混合"]},{id:"v2yun-plan-1",brandId:"v2yun",name:"唯兔云·唯兔云·年付加强专线",billingCycle:"年付",actualPayment:120,effectiveMonthlyCost:10,trafficGB:75,trafficReset:"每月",features:["年付","75GB","全 IPLC 专线"]},{id:"v2yun-plan-2",brandId:"v2yun",name:"唯兔云·唯兔云·年付版限量款",billingCycle:"年付",actualPayment:79.9,effectiveMonthlyCost:6.66,trafficGB:45,trafficReset:"每月",features:["年付","45GB","全 IPLC 专线"]},{id:"v2yun-plan-3",brandId:"v2yun",name:"唯兔云·唯兔云·节假日限时开启（14.9元）",billingCycle:"月付",actualPayment:14.9,effectiveMonthlyCost:14.9,trafficGB:100,trafficReset:"每月",features:["月付","100GB","全 IPLC 专线"]},{id:"v2yun-plan-4",brandId:"v2yun",name:"唯兔云·唯兔云·普通版",billingCycle:"月付",actualPayment:19.9,effectiveMonthlyCost:19.9,trafficGB:150,trafficReset:"每月",features:["月付","150GB","全 IPLC 专线"]},{id:"v2yun-plan-5",brandId:"v2yun",name:"唯兔云·唯兔云·进阶版",billingCycle:"月付",actualPayment:29.9,effectiveMonthlyCost:29.9,trafficGB:200,trafficReset:"每月",features:["月付","200GB","全 IPLC 专线"]},{id:"v2yun-plan-6",brandId:"v2yun",name:"唯兔云·唯兔云·专业版",billingCycle:"月付",actualPayment:59.9,effectiveMonthlyCost:59.9,trafficGB:500,trafficReset:"每月",features:["月付","500GB","全 IPLC 专线"]},{id:"v2yun-plan-7",brandId:"v2yun",name:"唯兔云·唯兔云·至尊版",billingCycle:"月付",actualPayment:119.9,effectiveMonthlyCost:119.9,trafficGB:1e3,trafficReset:"每月",features:["月付","1000GB","全 IPLC 专线"]},{id:"v2yun-plan-8",brandId:"v2yun",name:"唯兔云·唯兔云·永久不限时",billingCycle:"一次性付费",actualPayment:100,effectiveMonthlyCost:100,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","全 IPLC 专线"]},{id:"v2yun-plan-9",brandId:"v2yun",name:"唯兔云·唯兔云·永久不限时",billingCycle:"一次性付费",actualPayment:160,effectiveMonthlyCost:160,trafficGB:200,trafficReset:"一次性",features:["一次性付费","200GB","全 IPLC 专线"]},{id:"v2yun-plan-10",brandId:"v2yun",name:"唯兔云·唯兔云·永久不限时",billingCycle:"一次性付费",actualPayment:340,effectiveMonthlyCost:340,trafficGB:500,trafficReset:"一次性",features:["一次性付费","500GB","全 IPLC 专线"]},{id:"firefly-plan-1",brandId:"firefly",name:"Firefly·Firefly 年付版",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60GB","全 IPLC 专线"]},{id:"firefly-plan-2",brandId:"firefly",name:"Firefly·Firefly Lite",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150GB","全 IPLC 专线"]},{id:"firefly-plan-3",brandId:"firefly",name:"Firefly·Firefly Plus",billingCycle:"月付",actualPayment:45,effectiveMonthlyCost:45,trafficGB:300,trafficReset:"每月",features:["月付","300GB","全 IPLC 专线"]},{id:"firefly-plan-4",brandId:"firefly",name:"Firefly·Firefly Blaze",billingCycle:"月付",actualPayment:85,effectiveMonthlyCost:85,trafficGB:600,trafficReset:"每月",features:["月付","600GB","全 IPLC 专线"]},{id:"firefly-plan-5",brandId:"firefly",name:"Firefly·Firefly Nova",billingCycle:"月付",actualPayment:150,effectiveMonthlyCost:150,trafficGB:1e3,trafficReset:"每月",features:["月付","1000GB","全 IPLC 专线"]},{id:"firefly-plan-6",brandId:"firefly",name:"Firefly·Firefly 不限时",billingCycle:"一次性付费",actualPayment:100,effectiveMonthlyCost:100,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","全 IPLC 专线"]},{id:"yuzhou-plan-default",brandId:"yuzhou",name:"宇宙云·基础标准版",billingCycle:"月付",actualPayment:22.5,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"u1s1-plan-1",brandId:"u1s1",name:"U1S1·u1s1·就是好用包",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60GB","全 IPLC 专线"]},{id:"u1s1-plan-2",brandId:"u1s1",name:"U1S1·u1s1·普通人真够了包",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:120,trafficReset:"每月",features:["月付","120GB","全 IPLC 专线"]},{id:"u1s1-plan-3",brandId:"u1s1",name:"U1S1·u1s1·你以为用不到包",billingCycle:"月付",actualPayment:40,effectiveMonthlyCost:40,trafficGB:300,trafficReset:"每月",features:["月付","300GB","全 IPLC 专线"]},{id:"u1s1-plan-4",brandId:"u1s1",name:"U1S1·u1s1·瘾大就拉满包",billingCycle:"月付",actualPayment:100,effectiveMonthlyCost:100,trafficGB:700,trafficReset:"每月",features:["月付","700GB","全 IPLC 专线"]},{id:"u1s1-plan-5",brandId:"u1s1",name:"U1S1·u1s1·我全都要包",billingCycle:"月付",actualPayment:180,effectiveMonthlyCost:180,trafficGB:1500,trafficReset:"每月",features:["月付","1500GB","全 IPLC 专线"]},{id:"lingmao-plan-1",brandId:"lingmao",name:"灵猫网络·灵猫·年付小包",billingCycle:"年付",actualPayment:85,effectiveMonthlyCost:7.08,trafficGB:45,trafficReset:"每月",features:["年付","45GB","BGP 中继隧道 / 专线混合"]},{id:"lingmao-plan-2",brandId:"lingmao",name:"灵猫网络·灵猫·年付Small",billingCycle:"年付",actualPayment:195,effectiveMonthlyCost:16.25,trafficGB:150,trafficReset:"每月",features:["年付","150GB","BGP 中继隧道 / 专线混合"]},{id:"lingmao-plan-3",brandId:"lingmao",name:"灵猫网络·灵猫·年付Big",billingCycle:"年付",actualPayment:295,effectiveMonthlyCost:24.58,trafficGB:300,trafficReset:"每月",features:["年付","300GB","BGP 中继隧道 / 专线混合"]},{id:"lingmao-plan-4",brandId:"lingmao",name:"灵猫网络·灵猫·季付Big",billingCycle:"季付",actualPayment:125,effectiveMonthlyCost:41.67,trafficGB:300,trafficReset:"每月",features:["季付","300GB","BGP 中继隧道 / 专线混合"]},{id:"lingmao-plan-5",brandId:"lingmao",name:"灵猫网络·灵猫·月付Small",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150GB","BGP 中继隧道 / 专线混合"]},{id:"lingmao-plan-6",brandId:"lingmao",name:"灵猫网络·灵猫·月付Big",billingCycle:"月付",actualPayment:45,effectiveMonthlyCost:45,trafficGB:300,trafficReset:"每月",features:["月付","300GB","BGP 中继隧道 / 专线混合"]},{id:"jilian-plan-default",brandId:"jilian",name:"极连云·基础标准版",billingCycle:"月付",actualPayment:12.375,effectiveMonthlyCost:8.25,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"guangnian-plan-default",brandId:"guangnian",name:"光年梯·基础标准版",billingCycle:"月付",actualPayment:12.375,effectiveMonthlyCost:8.25,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"yifan-plan-1",brandId:"yifan",name:"一翻云·轻享版",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:150,trafficReset:"每月",features:["月付","150GB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-2",brandId:"yifan",name:"一翻云·舒享版",billingCycle:"月付",actualPayment:35,effectiveMonthlyCost:35,trafficGB:350,trafficReset:"每月",features:["月付","350GB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-3",brandId:"yifan",name:"一翻云·尊享版",billingCycle:"月付",actualPayment:55,effectiveMonthlyCost:55,trafficGB:600,trafficReset:"每月",features:["月付","600GB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-4",brandId:"yifan",name:"一翻云·极致版",billingCycle:"月付",actualPayment:95,effectiveMonthlyCost:95,trafficGB:1.2,trafficReset:"每月",features:["月付","1.2TB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-5",brandId:"yifan",name:"一翻云·98¥·年付小包",billingCycle:"年付",actualPayment:98,effectiveMonthlyCost:8.17,trafficGB:60,trafficReset:"每月",features:["年付","60GB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-6",brandId:"yifan",name:"一翻云·轻享版·不限时包",billingCycle:"一次性付费",actualPayment:100,effectiveMonthlyCost:100,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-7",brandId:"yifan",name:"一翻云·舒享版·不限时包",billingCycle:"一次性付费",actualPayment:200,effectiveMonthlyCost:200,trafficGB:250,trafficReset:"一次性",features:["一次性付费","250GB","BGP 中继隧道 / 专线混合"]},{id:"yifan-plan-8",brandId:"yifan",name:"一翻云·尊享版·不限时包",billingCycle:"一次性付费",actualPayment:400,effectiveMonthlyCost:400,trafficGB:500,trafficReset:"一次性",features:["一次性付费","500GB","BGP 中继隧道 / 专线混合"]},{id:"sogo-plan-1",brandId:"sogo",name:"SOGO 云·小包-年付版",billingCycle:"年付",actualPayment:98,effectiveMonthlyCost:8.17,trafficGB:60,trafficReset:"每月",features:["年付","60GB","优质 BGP 跨境网络"]},{id:"sogo-plan-2",brandId:"sogo",name:"SOGO 云·基础版",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150GB","优质 BGP 跨境网络"]},{id:"sogo-plan-3",brandId:"sogo",name:"SOGO 云·优选版",billingCycle:"月付",actualPayment:45,effectiveMonthlyCost:45,trafficGB:350,trafficReset:"每月",features:["月付","350GB","优质 BGP 跨境网络"]},{id:"sogo-plan-4",brandId:"sogo",name:"SOGO 云·强化版",billingCycle:"月付",actualPayment:80,effectiveMonthlyCost:80,trafficGB:550,trafficReset:"每月",features:["月付","550GB","优质 BGP 跨境网络"]},{id:"sogo-plan-5",brandId:"sogo",name:"SOGO 云·顶配版",billingCycle:"月付",actualPayment:150,effectiveMonthlyCost:150,trafficGB:1.1,trafficReset:"每月",features:["月付","1.1TB","优质 BGP 跨境网络"]},{id:"sogo-plan-6",brandId:"sogo",name:"SOGO 云·SOGO基础餐不限时版",billingCycle:"一次性付费",actualPayment:120,effectiveMonthlyCost:120,trafficGB:120,trafficReset:"一次性",features:["一次性付费","120GB","优质 BGP 跨境网络"]},{id:"sogo-plan-7",brandId:"sogo",name:"SOGO 云·SOGO优选餐不限时版",billingCycle:"一次性付费",actualPayment:220,effectiveMonthlyCost:220,trafficGB:250,trafficReset:"一次性",features:["一次性付费","250GB","优质 BGP 跨境网络"]},{id:"sogo-plan-8",brandId:"sogo",name:"SOGO 云·SOGO强化餐不限时版",billingCycle:"一次性付费",actualPayment:450,effectiveMonthlyCost:450,trafficGB:500,trafficReset:"一次性",features:["一次性付费","500GB","优质 BGP 跨境网络"]},{id:"sogo-plan-9",brandId:"sogo",name:"SOGO 云·SOGO至尊餐不限时版",billingCycle:"一次性付费",actualPayment:850,effectiveMonthlyCost:850,trafficGB:1,trafficReset:"一次性",features:["一次性付费","1.0TB","优质 BGP 跨境网络"]},{id:"kexin-plan-default",brandId:"kexin",name:"可信云·基础标准版",billingCycle:"月付",actualPayment:22.5,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"sujie-plan-default",brandId:"sujie",name:"速界·基础标准版",billingCycle:"月付",actualPayment:22.5,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"shanyue-plan-1",brandId:"shanyue",name:"闪跃·闪跃年付版",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60GB","全 IPLC 专线"]},{id:"shanyue-plan-2",brandId:"shanyue",name:"闪跃·闪动 (Flicker)",billingCycle:"月付",actualPayment:24,effectiveMonthlyCost:24,trafficGB:150,trafficReset:"每月",features:["月付","150GB","全 IPLC 专线"]},{id:"shanyue-plan-3",brandId:"shanyue",name:"闪跃·飞跃 (Leap)",billingCycle:"月付",actualPayment:44,effectiveMonthlyCost:44,trafficGB:300,trafficReset:"每月",features:["月付","300GB","全 IPLC 专线"]},{id:"shanyue-plan-4",brandId:"shanyue",name:"闪跃·瞬移 (Teleport)",billingCycle:"月付",actualPayment:84,effectiveMonthlyCost:84,trafficGB:600,trafficReset:"每月",features:["月付","600GB","全 IPLC 专线"]},{id:"shanyue-plan-5",brandId:"shanyue",name:"闪跃·跃迁 (Warp)",billingCycle:"月付",actualPayment:134,effectiveMonthlyCost:134,trafficGB:1e3,trafficReset:"每月",features:["月付","1000GB","全 IPLC 专线"]},{id:"quanqiu-plan-1",brandId:"quanqiu",name:"全球云·BGP 智能优化·不限时轻量包",billingCycle:"一次性付费",actualPayment:100,effectiveMonthlyCost:100,trafficGB:100,trafficReset:"一次性",features:["一次性付费","100GB","全 IPLC 专线"]},{id:"quanqiu-plan-2",brandId:"quanqiu",name:"全球云·BGP 智能优化·不限时标准包",billingCycle:"一次性付费",actualPayment:360,effectiveMonthlyCost:360,trafficGB:400,trafficReset:"一次性",features:["一次性付费","400GB","全 IPLC 专线"]},{id:"quanqiu-plan-3",brandId:"quanqiu",name:"全球云·BGP 智能优化·不限时大容量包",billingCycle:"一次性付费",actualPayment:700,effectiveMonthlyCost:700,trafficGB:800,trafficReset:"一次性",features:["一次性付费","800GB","全 IPLC 专线"]},{id:"quanqiu-plan-4",brandId:"quanqiu",name:"全球云·轻量版",billingCycle:"年付",actualPayment:99,effectiveMonthlyCost:8.25,trafficGB:59,trafficReset:"每月",features:["年付","59GB","全 IPLC 专线"]},{id:"quanqiu-plan-5",brandId:"quanqiu",name:"全球云·BGP 智能优化·入门方案",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:120,trafficReset:"每月",features:["月付","120GB","全 IPLC 专线"]},{id:"quanqiu-plan-6",brandId:"quanqiu",name:"全球云·BGP 智能优化·进阶方案",billingCycle:"月付",actualPayment:40,effectiveMonthlyCost:40,trafficGB:300,trafficReset:"每月",features:["月付","300GB","全 IPLC 专线"]},{id:"quanqiu-plan-7",brandId:"quanqiu",name:"全球云·BGP 智能优化·高端方案",billingCycle:"月付",actualPayment:100,effectiveMonthlyCost:100,trafficGB:700,trafficReset:"每月",features:["月付","700GB","全 IPLC 专线"]},{id:"quanqiu-plan-8",brandId:"quanqiu",name:"全球云·BGP 智能优化·商业方案",billingCycle:"月付",actualPayment:180,effectiveMonthlyCost:180,trafficGB:1500,trafficReset:"每月",features:["月付","1500GB","全 IPLC 专线"]},{id:"quanqiu-plan-9",brandId:"quanqiu",name:"全球云·独享私人专线节点",billingCycle:"月付",actualPayment:680,effectiveMonthlyCost:680,trafficGB:500,trafficReset:"每月",features:["月付","500GB","全 IPLC 专线"]},{id:"shandianshu-plan-default",brandId:"shandianshu",name:"闪电鼠·基础标准版",billingCycle:"月付",actualPayment:8.399999999999999,effectiveMonthlyCost:5.6,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"yunjiexian-plan-default",brandId:"yunjiexian",name:"云界线·基础标准版",billingCycle:"月付",actualPayment:8.399999999999999,effectiveMonthlyCost:5.6,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"liulianyun-plan-default",brandId:"liulianyun",name:"榴莲云·基础标准版",billingCycle:"月付",actualPayment:8.399999999999999,effectiveMonthlyCost:5.6,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"shenxing-plan-default",brandId:"shenxing",name:"神行加速·基础标准版",billingCycle:"月付",actualPayment:22.5,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"huanqiuti-plan-default",brandId:"huanqiuti",name:"环球梯·基础标准版",billingCycle:"月付",actualPayment:8.399999999999999,effectiveMonthlyCost:5.6,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"yinxingren-plan-1",brandId:"yinxingren",name:"隐形人·隐形人 白银纪元",billingCycle:"月付",actualPayment:24,effectiveMonthlyCost:24,trafficGB:144,trafficReset:"每月",features:["月付","144GB","全 IPLC 专线"]},{id:"yinxingren-plan-2",brandId:"yinxingren",name:"隐形人·隐形人 黄金序列",billingCycle:"月付",actualPayment:48,effectiveMonthlyCost:48,trafficGB:360,trafficReset:"每月",features:["月付","360GB","全 IPLC 专线"]},{id:"yinxingren-plan-3",brandId:"yinxingren",name:"隐形人·隐形人 铂金至臻",billingCycle:"月付",actualPayment:105,effectiveMonthlyCost:105,trafficGB:750,trafficReset:"每月",features:["月付","750GB","全 IPLC 专线"]},{id:"yinxingren-plan-4",brandId:"yinxingren",name:"隐形人·隐形人 钻石穹顶",billingCycle:"月付",actualPayment:185,effectiveMonthlyCost:185,trafficGB:1.6,trafficReset:"每月",features:["月付","1.6TB","全 IPLC 专线"]},{id:"yinxingren-plan-5",brandId:"yinxingren",name:"隐形人·王者定制版",billingCycle:"月付",actualPayment:680,effectiveMonthlyCost:680,trafficGB:500,trafficReset:"每月",features:["月付","500GB","全 IPLC 专线"]},{id:"yinxingren-plan-6",brandId:"yinxingren",name:"隐形人·星耀风暴 365天不熄",billingCycle:"年付",actualPayment:109,effectiveMonthlyCost:9.08,trafficGB:80,trafficReset:"每月",features:["年付","80GB","全 IPLC 专线"]},{id:"yinxingren-plan-7",brandId:"yinxingren",name:"隐形人·一次性小流量",billingCycle:"一次性付费",actualPayment:229,effectiveMonthlyCost:229,trafficGB:160,trafficReset:"一次性",features:["一次性付费","160GB","全 IPLC 专线"]},{id:"yinxingren-plan-8",brandId:"yinxingren",name:"隐形人·一次性标准流量包",billingCycle:"一次性付费",actualPayment:549,effectiveMonthlyCost:549,trafficGB:420,trafficReset:"一次性",features:["一次性付费","420GB","全 IPLC 专线"]},{id:"yinxingren-plan-9",brandId:"yinxingren",name:"隐形人·一次性精英流量包",billingCycle:"一次性付费",actualPayment:1199,effectiveMonthlyCost:1199,trafficGB:1,trafficReset:"一次性",features:["一次性付费","1.0TB","全 IPLC 专线"]},{id:"tiziyun-plan-default",brandId:"tiziyun",name:"梯子云·基础标准版",billingCycle:"月付",actualPayment:22.5,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月重置",features:["高速专线","不限设备","流媒体优化"]},{id:"wgetcloud-plan-1",brandId:"wgetcloud",name:"WgetCloud·基础专线服务",billingCycle:"季付",actualPayment:297,effectiveMonthlyCost:99,trafficGB:230,trafficReset:"每月",features:["季付","230GB/月","企业级专线"]},{id:"wgetcloud-plan-2",brandId:"wgetcloud",name:"WgetCloud·优质专线服务",billingCycle:"季付",actualPayment:327,effectiveMonthlyCost:109,trafficGB:250,trafficReset:"每月",features:["季付","250GB/月","企业级专线"]},{id:"wgetcloud-plan-3",brandId:"wgetcloud",name:"WgetCloud·精品专线服务",billingCycle:"季付",actualPayment:357,effectiveMonthlyCost:119,trafficGB:270,trafficReset:"每月",features:["季付","270GB/月","企业级专线"]},{id:"baiyueguang-plan-1",brandId:"baiyueguang",name:"白月光·小包",billingCycle:"季付",actualPayment:66,effectiveMonthlyCost:22,trafficGB:100,trafficReset:"每月",features:["季付","每月100GB高速流量","企业级专线"]},{id:"baiyueguang-plan-2",brandId:"baiyueguang",name:"白月光·中包",billingCycle:"季付",actualPayment:126,effectiveMonthlyCost:42,trafficGB:250,trafficReset:"每月",features:["季付","每月250GB高速流量","企业级专线"]},{id:"baiyueguang-plan-3",brandId:"baiyueguang",name:"白月光·大包",billingCycle:"季付",actualPayment:156,effectiveMonthlyCost:52,trafficGB:400,trafficReset:"每月",features:["季付","每月400GB高速流量","企业级专线"]},{id:"baiyueguang-plan-4",brandId:"baiyueguang",name:"白月光·超大包",billingCycle:"季付",actualPayment:216,effectiveMonthlyCost:72,trafficGB:750,trafficReset:"每月",features:["季付","每月750GB高速流量","企业级专线"]},{id:"baiyueguang-plan-5",brandId:"baiyueguang",name:"白月光·不差钱",billingCycle:"季付",actualPayment:231,effectiveMonthlyCost:77,trafficGB:900,trafficReset:"每月",features:["季付","每月900GB高速流量","企业级专线"]},{id:"baiyueguang-plan-6",brandId:"baiyueguang",name:"白月光·旗舰包",billingCycle:"年付",actualPayment:2500,effectiveMonthlyCost:208.33,trafficGB:2500,trafficReset:"每月",features:["年付","每月2500GB超大流量","企业级专线"]},{id:"flyingbird-plan-1",brandId:"flyingbird",name:"FlyingBird·青铜套餐",billingCycle:"月付",actualPayment:15,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月",features:["月付","100G","全专线"]},{id:"flyingbird-plan-2",brandId:"flyingbird",name:"FlyingBird·青铜套餐",billingCycle:"季付",actualPayment:41,effectiveMonthlyCost:13.67,trafficGB:100,trafficReset:"每月",features:["季付","100G","全专线"]},{id:"flyingbird-plan-3",brandId:"flyingbird",name:"FlyingBird·青铜套餐",billingCycle:"半年付",actualPayment:77,effectiveMonthlyCost:6.42,trafficGB:100,trafficReset:"每月",features:["半年付","100G","全专线"]},{id:"flyingbird-plan-4",brandId:"flyingbird",name:"FlyingBird·青铜套餐",billingCycle:"年付",actualPayment:144,effectiveMonthlyCost:12,trafficGB:100,trafficReset:"每月",features:["年付","100G","全专线"]},{id:"flyingbird-plan-5",brandId:"flyingbird",name:"FlyingBird·白银套餐",billingCycle:"月付",actualPayment:30,effectiveMonthlyCost:30,trafficGB:200,trafficReset:"每月",features:["月付","200G","全专线"]},{id:"flyingbird-plan-6",brandId:"flyingbird",name:"FlyingBird·白银套餐",billingCycle:"季付",actualPayment:81,effectiveMonthlyCost:27,trafficGB:200,trafficReset:"每月",features:["季付","200G","全专线"]},{id:"flyingbird-plan-7",brandId:"flyingbird",name:"FlyingBird·白银套餐",billingCycle:"半年付",actualPayment:153,effectiveMonthlyCost:12.75,trafficGB:200,trafficReset:"每月",features:["半年付","200G","全专线"]},{id:"flyingbird-plan-8",brandId:"flyingbird",name:"FlyingBird·白银套餐",billingCycle:"年付",actualPayment:288,effectiveMonthlyCost:24,trafficGB:200,trafficReset:"每月",features:["年付","200G","全专线"]},{id:"flyingbird-plan-9",brandId:"flyingbird",name:"FlyingBird·黄金套餐",billingCycle:"月付",actualPayment:75,effectiveMonthlyCost:75,trafficGB:500,trafficReset:"每月",features:["月付","500G","全专线"]},{id:"flyingbird-plan-10",brandId:"flyingbird",name:"FlyingBird·黄金套餐",billingCycle:"季付",actualPayment:203,effectiveMonthlyCost:67.67,trafficGB:500,trafficReset:"每月",features:["季付","500G","全专线"]},{id:"flyingbird-plan-11",brandId:"flyingbird",name:"FlyingBird·黄金套餐",billingCycle:"半年付",actualPayment:383,effectiveMonthlyCost:31.92,trafficGB:500,trafficReset:"每月",features:["半年付","500G","全专线"]},{id:"flyingbird-plan-12",brandId:"flyingbird",name:"FlyingBird·黄金套餐",billingCycle:"年付",actualPayment:720,effectiveMonthlyCost:60,trafficGB:500,trafficReset:"每月",features:["年付","500G","全专线"]},{id:"flyingbird-plan-13",brandId:"flyingbird",name:"FlyingBird·钻石套餐",billingCycle:"月付",actualPayment:150,effectiveMonthlyCost:150,trafficGB:1e3,trafficReset:"每月",features:["月付","1000G","全专线"]},{id:"flyingbird-plan-14",brandId:"flyingbird",name:"FlyingBird·钻石套餐",billingCycle:"季付",actualPayment:405,effectiveMonthlyCost:135,trafficGB:1e3,trafficReset:"每月",features:["季付","1000G","全专线"]},{id:"flyingbird-plan-15",brandId:"flyingbird",name:"FlyingBird·钻石套餐",billingCycle:"半年付",actualPayment:765,effectiveMonthlyCost:63.75,trafficGB:1e3,trafficReset:"每月",features:["半年付","1000G","全专线"]},{id:"flyingbird-plan-16",brandId:"flyingbird",name:"FlyingBird·钻石套餐",billingCycle:"年付",actualPayment:1440,effectiveMonthlyCost:120,trafficGB:1e3,trafficReset:"每月",features:["年付","1000G","全专线"]},{id:"cyberguard-plan-1",brandId:"cyberguard",name:"CyberGuard·150G｜轻量套餐",billingCycle:"半年付",actualPayment:95,effectiveMonthlyCost:7.92,trafficGB:150,trafficReset:"每月",features:["半年付","150GB/月","企业级专线"]},{id:"cyberguard-plan-2",brandId:"cyberguard",name:"CyberGuard·350G｜标准套餐",billingCycle:"月付",actualPayment:32,effectiveMonthlyCost:32,trafficGB:350,trafficReset:"每月",features:["月付","350GB/月","企业级专线"]},{id:"cyberguard-plan-3",brandId:"cyberguard",name:"CyberGuard·650G｜高速套餐",billingCycle:"月付",actualPayment:55,effectiveMonthlyCost:55,trafficGB:650,trafficReset:"每月",features:["月付","650GB/月","企业级专线"]},{id:"cyberguard-plan-4",brandId:"cyberguard",name:"CyberGuard·220G流量包｜不限时",billingCycle:"一次性付费",actualPayment:79,effectiveMonthlyCost:79,trafficGB:220,trafficReset:"一次性（具体有效期待核实）",features:["一次性付费","220GB","企业级专线"]},{id:"cyberguard-plan-5",brandId:"cyberguard",name:"CyberGuard·840G流量包｜不限时",billingCycle:"一次性付费",actualPayment:188,effectiveMonthlyCost:188,trafficGB:840,trafficReset:"一次性（具体有效期待核实）",features:["一次性付费","840GB","企业级专线"]},{id:"cyberguard-plan-6",brandId:"cyberguard",name:"CyberGuard·2050G｜企业套餐",billingCycle:"月付",actualPayment:200,effectiveMonthlyCost:200,trafficGB:2050,trafficReset:"每月",features:["月付","2050GB/月","企业级专线"]},{id:"totoro-plan-1",brandId:"totoro",name:"龙猫云·VIP1",billingCycle:"月付",actualPayment:15,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月",features:["月付","100G","全专线"]},{id:"totoro-plan-2",brandId:"totoro",name:"龙猫云·VIP1",billingCycle:"季付",actualPayment:41,effectiveMonthlyCost:13.67,trafficGB:100,trafficReset:"每月",features:["季付","100G","全专线"]},{id:"totoro-plan-3",brandId:"totoro",name:"龙猫云·VIP1",billingCycle:"半年付",actualPayment:77,effectiveMonthlyCost:6.42,trafficGB:100,trafficReset:"每月",features:["半年付","100G","全专线"]},{id:"totoro-plan-4",brandId:"totoro",name:"龙猫云·VIP1",billingCycle:"年付",actualPayment:144,effectiveMonthlyCost:12,trafficGB:100,trafficReset:"每月",features:["年付","100G","全专线"]},{id:"totoro-plan-5",brandId:"totoro",name:"龙猫云·VIP2",billingCycle:"月付",actualPayment:30,effectiveMonthlyCost:30,trafficGB:200,trafficReset:"每月",features:["月付","200G","全专线"]},{id:"totoro-plan-6",brandId:"totoro",name:"龙猫云·VIP2",billingCycle:"季付",actualPayment:81,effectiveMonthlyCost:27,trafficGB:200,trafficReset:"每月",features:["季付","200G","全专线"]},{id:"totoro-plan-7",brandId:"totoro",name:"龙猫云·VIP2",billingCycle:"半年付",actualPayment:153,effectiveMonthlyCost:12.75,trafficGB:200,trafficReset:"每月",features:["半年付","200G","全专线"]},{id:"totoro-plan-8",brandId:"totoro",name:"龙猫云·VIP2",billingCycle:"年付",actualPayment:288,effectiveMonthlyCost:24,trafficGB:200,trafficReset:"每月",features:["年付","200G","全专线"]},{id:"totoro-plan-9",brandId:"totoro",name:"龙猫云·VIP3",billingCycle:"月付",actualPayment:60,effectiveMonthlyCost:60,trafficGB:400,trafficReset:"每月",features:["月付","400G","全专线"]},{id:"totoro-plan-10",brandId:"totoro",name:"龙猫云·VIP3",billingCycle:"季付",actualPayment:162,effectiveMonthlyCost:54,trafficGB:400,trafficReset:"每月",features:["季付","400G","全专线"]},{id:"totoro-plan-11",brandId:"totoro",name:"龙猫云·VIP3",billingCycle:"半年付",actualPayment:306,effectiveMonthlyCost:25.5,trafficGB:400,trafficReset:"每月",features:["半年付","400G","全专线"]},{id:"totoro-plan-12",brandId:"totoro",name:"龙猫云·VIP3",billingCycle:"年付",actualPayment:576,effectiveMonthlyCost:48,trafficGB:400,trafficReset:"每月",features:["年付","400G","全专线"]},{id:"totoro-plan-13",brandId:"totoro",name:"龙猫云·VIP4",billingCycle:"月付",actualPayment:120,effectiveMonthlyCost:120,trafficGB:1e3,trafficReset:"每月",features:["月付","1000G","全专线"]},{id:"totoro-plan-14",brandId:"totoro",name:"龙猫云·VIP4",billingCycle:"季付",actualPayment:324,effectiveMonthlyCost:108,trafficGB:1e3,trafficReset:"每月",features:["季付","1000G","全专线"]},{id:"totoro-plan-15",brandId:"totoro",name:"龙猫云·VIP4",billingCycle:"半年付",actualPayment:697,effectiveMonthlyCost:58.08,trafficGB:1e3,trafficReset:"每月",features:["半年付","1000G","全专线"]},{id:"totoro-plan-16",brandId:"totoro",name:"龙猫云·VIP4",billingCycle:"年付",actualPayment:1152,effectiveMonthlyCost:96,trafficGB:1e3,trafficReset:"每月",features:["年付","1000G","全专线"]},{id:"fatcat-plan-1",brandId:"fatcat",name:"FATCAT·年付加强版",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60G","全专线"]},{id:"fatcat-plan-2",brandId:"fatcat",name:"FATCAT·基础套餐",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:120,trafficReset:"每月",features:["月付","120G","全专线"]},{id:"fatcat-plan-3",brandId:"fatcat",name:"FATCAT·基础套餐",billingCycle:"季付",actualPayment:54,effectiveMonthlyCost:18,trafficGB:120,trafficReset:"每月",features:["季付","120G","全专线"]},{id:"fatcat-plan-4",brandId:"fatcat",name:"FATCAT·基础套餐",billingCycle:"半年付",actualPayment:102,effectiveMonthlyCost:8.5,trafficGB:120,trafficReset:"每月",features:["半年付","120G","全专线"]},{id:"fatcat-plan-5",brandId:"fatcat",name:"FATCAT·基础套餐",billingCycle:"年付",actualPayment:192,effectiveMonthlyCost:16,trafficGB:120,trafficReset:"每月",features:["年付","120G","全专线"]},{id:"fatcat-plan-6",brandId:"fatcat",name:"FATCAT·标准套餐",billingCycle:"月付",actualPayment:40,effectiveMonthlyCost:40,trafficGB:300,trafficReset:"每月",features:["月付","300G","全专线"]},{id:"fatcat-plan-7",brandId:"fatcat",name:"FATCAT·标准套餐",billingCycle:"季付",actualPayment:108,effectiveMonthlyCost:36,trafficGB:300,trafficReset:"每月",features:["季付","300G","全专线"]},{id:"fatcat-plan-8",brandId:"fatcat",name:"FATCAT·标准套餐",billingCycle:"半年付",actualPayment:204,effectiveMonthlyCost:17,trafficGB:300,trafficReset:"每月",features:["半年付","300G","全专线"]},{id:"fatcat-plan-9",brandId:"fatcat",name:"FATCAT·标准套餐",billingCycle:"年付",actualPayment:384,effectiveMonthlyCost:32,trafficGB:300,trafficReset:"每月",features:["年付","300G","全专线"]},{id:"fatcat-plan-10",brandId:"fatcat",name:"FATCAT·旗舰套餐",billingCycle:"月付",actualPayment:100,effectiveMonthlyCost:100,trafficGB:700,trafficReset:"每月",features:["月付","700G","全专线"]},{id:"fatcat-plan-11",brandId:"fatcat",name:"FATCAT·旗舰套餐",billingCycle:"季付",actualPayment:270,effectiveMonthlyCost:90,trafficGB:700,trafficReset:"每月",features:["季付","700G","全专线"]},{id:"fatcat-plan-12",brandId:"fatcat",name:"FATCAT·旗舰套餐",billingCycle:"半年付",actualPayment:510,effectiveMonthlyCost:42.5,trafficGB:700,trafficReset:"每月",features:["半年付","700G","全专线"]},{id:"fatcat-plan-13",brandId:"fatcat",name:"FATCAT·旗舰套餐",billingCycle:"年付",actualPayment:960,effectiveMonthlyCost:80,trafficGB:700,trafficReset:"每月",features:["年付","700G","全专线"]},{id:"fatcat-plan-14",brandId:"fatcat",name:"FATCAT·企业套餐",billingCycle:"月付",actualPayment:180,effectiveMonthlyCost:180,trafficGB:1500,trafficReset:"每月",features:["月付","1500G","全专线"]},{id:"fatcat-plan-15",brandId:"fatcat",name:"FATCAT·企业套餐",billingCycle:"季付",actualPayment:486,effectiveMonthlyCost:162,trafficGB:1500,trafficReset:"每月",features:["季付","1500G","全专线"]},{id:"fatcat-plan-16",brandId:"fatcat",name:"FATCAT·企业套餐",billingCycle:"半年付",actualPayment:918,effectiveMonthlyCost:76.5,trafficGB:1500,trafficReset:"每月",features:["半年付","1500G","全专线"]},{id:"fatcat-plan-17",brandId:"fatcat",name:"FATCAT·企业套餐",billingCycle:"年付",actualPayment:1728,effectiveMonthlyCost:144,trafficGB:1500,trafficReset:"每月",features:["年付","1500G","全专线"]},{id:"tntcloud-plan-1",brandId:"tntcloud",name:"TNTCloud·轻量包",billingCycle:"季付",actualPayment:30,effectiveMonthlyCost:10,trafficGB:60,trafficReset:"每月",features:["季付","60G","全专线"]},{id:"tntcloud-plan-2",brandId:"tntcloud",name:"TNTCloud·轻量包",billingCycle:"半年付",actualPayment:56,effectiveMonthlyCost:4.67,trafficGB:60,trafficReset:"每月",features:["半年付","60G","全专线"]},{id:"tntcloud-plan-3",brandId:"tntcloud",name:"TNTCloud·轻量包",billingCycle:"年付",actualPayment:98,effectiveMonthlyCost:8.17,trafficGB:60,trafficReset:"每月",features:["年付","60G","全专线"]},{id:"tntcloud-plan-4",brandId:"tntcloud",name:"TNTCloud·VIP1",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:110,trafficReset:"每月",features:["月付","110G","全专线"]},{id:"tntcloud-plan-5",brandId:"tntcloud",name:"TNTCloud·VIP1",billingCycle:"季付",actualPayment:54,effectiveMonthlyCost:18,trafficGB:110,trafficReset:"每月",features:["季付","110G","全专线"]},{id:"tntcloud-plan-6",brandId:"tntcloud",name:"TNTCloud·VIP1",billingCycle:"半年付",actualPayment:102,effectiveMonthlyCost:8.5,trafficGB:110,trafficReset:"每月",features:["半年付","110G","全专线"]},{id:"tntcloud-plan-7",brandId:"tntcloud",name:"TNTCloud·VIP1",billingCycle:"年付",actualPayment:192,effectiveMonthlyCost:16,trafficGB:110,trafficReset:"每月",features:["年付","110G","全专线"]},{id:"tntcloud-plan-8",brandId:"tntcloud",name:"TNTCloud·VIP2",billingCycle:"月付",actualPayment:40,effectiveMonthlyCost:40,trafficGB:220,trafficReset:"每月",features:["月付","220G","全专线"]},{id:"tntcloud-plan-9",brandId:"tntcloud",name:"TNTCloud·VIP2",billingCycle:"季付",actualPayment:108,effectiveMonthlyCost:36,trafficGB:220,trafficReset:"每月",features:["季付","220G","全专线"]},{id:"tntcloud-plan-10",brandId:"tntcloud",name:"TNTCloud·VIP2",billingCycle:"半年付",actualPayment:204,effectiveMonthlyCost:17,trafficGB:220,trafficReset:"每月",features:["半年付","220G","全专线"]},{id:"tntcloud-plan-11",brandId:"tntcloud",name:"TNTCloud·VIP2",billingCycle:"年付",actualPayment:336,effectiveMonthlyCost:28,trafficGB:220,trafficReset:"每月",features:["年付","220G","全专线"]},{id:"tntcloud-plan-12",brandId:"tntcloud",name:"TNTCloud·VIP3",billingCycle:"月付",actualPayment:80,effectiveMonthlyCost:80,trafficGB:460,trafficReset:"每月",features:["月付","460G","全专线"]},{id:"tntcloud-plan-13",brandId:"tntcloud",name:"TNTCloud·VIP3",billingCycle:"季付",actualPayment:216,effectiveMonthlyCost:72,trafficGB:460,trafficReset:"每月",features:["季付","460G","全专线"]},{id:"tntcloud-plan-14",brandId:"tntcloud",name:"TNTCloud·VIP3",billingCycle:"半年付",actualPayment:408,effectiveMonthlyCost:34,trafficGB:460,trafficReset:"每月",features:["半年付","460G","全专线"]},{id:"tntcloud-plan-15",brandId:"tntcloud",name:"TNTCloud·VIP3",billingCycle:"年付",actualPayment:768,effectiveMonthlyCost:64,trafficGB:460,trafficReset:"每月",features:["年付","460G","全专线"]},{id:"tntcloud-plan-16",brandId:"tntcloud",name:"TNTCloud·VIP4",billingCycle:"月付",actualPayment:160,effectiveMonthlyCost:160,trafficGB:1100,trafficReset:"每月",features:["月付","1100G","全专线"]},{id:"tntcloud-plan-17",brandId:"tntcloud",name:"TNTCloud·VIP4",billingCycle:"季付",actualPayment:432,effectiveMonthlyCost:144,trafficGB:1100,trafficReset:"每月",features:["季付","1100G","全专线"]},{id:"tntcloud-plan-18",brandId:"tntcloud",name:"TNTCloud·VIP4",billingCycle:"半年付",actualPayment:816,effectiveMonthlyCost:68,trafficGB:1100,trafficReset:"每月",features:["半年付","1100G","全专线"]},{id:"tntcloud-plan-19",brandId:"tntcloud",name:"TNTCloud·VIP4",billingCycle:"年付",actualPayment:1536,effectiveMonthlyCost:128,trafficGB:1100,trafficReset:"每月",features:["年付","1100G","全专线"]},{id:"qingyunti-plan-1",brandId:"qingyunti",name:"青云梯·年付小包",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60G","全专线"]},{id:"qingyunti-plan-2",brandId:"qingyunti",name:"青云梯·VIP1",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150G","全专线"]},{id:"qingyunti-plan-3",brandId:"qingyunti",name:"青云梯·VIP1",billingCycle:"季付",actualPayment:67,effectiveMonthlyCost:22.33,trafficGB:150,trafficReset:"每月",features:["季付","150G","全专线"]},{id:"qingyunti-plan-4",brandId:"qingyunti",name:"青云梯·VIP1",billingCycle:"半年付",actualPayment:127,effectiveMonthlyCost:10.58,trafficGB:150,trafficReset:"每月",features:["半年付","150G","全专线"]},{id:"qingyunti-plan-5",brandId:"qingyunti",name:"青云梯·VIP1",billingCycle:"年付",actualPayment:240,effectiveMonthlyCost:20,trafficGB:150,trafficReset:"每月",features:["年付","150G","全专线"]},{id:"qingyunti-plan-6",brandId:"qingyunti",name:"青云梯·VIP2",billingCycle:"月付",actualPayment:45,effectiveMonthlyCost:45,trafficGB:300,trafficReset:"每月",features:["月付","300G","全专线"]},{id:"qingyunti-plan-7",brandId:"qingyunti",name:"青云梯·VIP2",billingCycle:"季付",actualPayment:121,effectiveMonthlyCost:40.33,trafficGB:300,trafficReset:"每月",features:["季付","300G","全专线"]},{id:"qingyunti-plan-8",brandId:"qingyunti",name:"青云梯·VIP2",billingCycle:"半年付",actualPayment:229,effectiveMonthlyCost:19.08,trafficGB:300,trafficReset:"每月",features:["半年付","300G","全专线"]},{id:"qingyunti-plan-9",brandId:"qingyunti",name:"青云梯·VIP2",billingCycle:"年付",actualPayment:432,effectiveMonthlyCost:36,trafficGB:300,trafficReset:"每月",features:["年付","300G","全专线"]},{id:"qingyunti-plan-10",brandId:"qingyunti",name:"青云梯·VIP3",billingCycle:"月付",actualPayment:85,effectiveMonthlyCost:85,trafficGB:600,trafficReset:"每月",features:["月付","600G","全专线"]},{id:"qingyunti-plan-11",brandId:"qingyunti",name:"青云梯·VIP3",billingCycle:"季付",actualPayment:229,effectiveMonthlyCost:76.33,trafficGB:600,trafficReset:"每月",features:["季付","600G","全专线"]},{id:"qingyunti-plan-12",brandId:"qingyunti",name:"青云梯·VIP3",billingCycle:"半年付",actualPayment:433,effectiveMonthlyCost:36.08,trafficGB:600,trafficReset:"每月",features:["半年付","600G","全专线"]},{id:"qingyunti-plan-13",brandId:"qingyunti",name:"青云梯·VIP3",billingCycle:"年付",actualPayment:816,effectiveMonthlyCost:68,trafficGB:600,trafficReset:"每月",features:["年付","600G","全专线"]},{id:"qingyunti-plan-14",brandId:"qingyunti",name:"青云梯·VIP4",billingCycle:"月付",actualPayment:150,effectiveMonthlyCost:150,trafficGB:1e3,trafficReset:"每月",features:["月付","1000G","全专线"]},{id:"qingyunti-plan-15",brandId:"qingyunti",name:"青云梯·VIP4",billingCycle:"季付",actualPayment:400,effectiveMonthlyCost:133.33,trafficGB:1e3,trafficReset:"每月",features:["季付","1000G","全专线"]},{id:"qingyunti-plan-16",brandId:"qingyunti",name:"青云梯·VIP4",billingCycle:"半年付",actualPayment:750,effectiveMonthlyCost:62.5,trafficGB:1e3,trafficReset:"每月",features:["半年付","1000G","全专线"]},{id:"qingyunti-plan-17",brandId:"qingyunti",name:"青云梯·VIP4",billingCycle:"年付",actualPayment:1360,effectiveMonthlyCost:113.33,trafficGB:1e3,trafficReset:"每月",features:["年付","1000G","全专线"]},{id:"shanshuiyun-plan-1",brandId:"shanshuiyun",name:"山水云·64G/轻量套餐",billingCycle:"年付",actualPayment:88,effectiveMonthlyCost:7.33,trafficGB:64,trafficReset:"每月",features:["年付","64GB/月","企业级专线"]},{id:"shanshuiyun-plan-2",brandId:"shanshuiyun",name:"山水云·128G/轻量套餐",billingCycle:"半年付",actualPayment:88,effectiveMonthlyCost:7.33,trafficGB:128,trafficReset:"每月",features:["半年付","128GB/月","企业级专线"]},{id:"shanshuiyun-plan-3",brandId:"shanshuiyun",name:"山水云·256G/轻量套餐",billingCycle:"季付",actualPayment:75,effectiveMonthlyCost:25,trafficGB:256,trafficReset:"每月",features:["季付","256GB/月","企业级专线"]},{id:"shanshuiyun-plan-4",brandId:"shanshuiyun",name:"山水云·100G/月-琴",billingCycle:"月付",actualPayment:15,effectiveMonthlyCost:15,trafficGB:100,trafficReset:"每月",features:["月付","100GB/月","企业级专线"]},{id:"shanshuiyun-plan-5",brandId:"shanshuiyun",name:"山水云·200G/月-棋",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:200,trafficReset:"每月",features:["月付","200GB/月","企业级专线"]},{id:"shanshuiyun-plan-6",brandId:"shanshuiyun",name:"山水云·500G/月-书",billingCycle:"月付",actualPayment:50,effectiveMonthlyCost:50,trafficGB:500,trafficReset:"每月",features:["月付","500GB/月","企业级专线"]},{id:"lingdongyun-plan-1",brandId:"lingdongyun",name:"灵动云·灵动·拂风",billingCycle:"月付",actualPayment:20,effectiveMonthlyCost:20,trafficGB:100,trafficReset:"每月",features:["月付","100G/月","企业级"]},{id:"lingdongyun-plan-2",brandId:"lingdongyun",name:"灵动云·灵动·拂风",billingCycle:"季付",actualPayment:57,effectiveMonthlyCost:19,trafficGB:100,trafficReset:"每月",features:["季付","100G/月","企业级"]},{id:"lingdongyun-plan-3",brandId:"lingdongyun",name:"灵动云·灵动·拂风",billingCycle:"半年付",actualPayment:108,effectiveMonthlyCost:9,trafficGB:100,trafficReset:"每月",features:["半年付","100G/月","企业级"]},{id:"lingdongyun-plan-4",brandId:"lingdongyun",name:"灵动云·灵动·拂风",billingCycle:"年付",actualPayment:204,effectiveMonthlyCost:17,trafficGB:100,trafficReset:"每月",features:["年付","100G/月","企业级"]},{id:"lingdongyun-plan-5",brandId:"lingdongyun",name:"灵动云·灵动·拂风",billingCycle:"两年付",actualPayment:384,effectiveMonthlyCost:32,trafficGB:100,trafficReset:"每月",features:["两年付","100G/月","企业级"]},{id:"lingdongyun-plan-6",brandId:"lingdongyun",name:"灵动云·灵动·拂风",billingCycle:"三年付",actualPayment:540,effectiveMonthlyCost:45,trafficGB:100,trafficReset:"每月",features:["三年付","100G/月","企业级"]},{id:"lingdongyun-plan-7",brandId:"lingdongyun",name:"灵动云·灵动·驭浪",billingCycle:"月付",actualPayment:50,effectiveMonthlyCost:50,trafficGB:300,trafficReset:"每月",features:["月付","300G/月","企业级"]},{id:"lingdongyun-plan-8",brandId:"lingdongyun",name:"灵动云·灵动·驭浪",billingCycle:"季付",actualPayment:142.5,effectiveMonthlyCost:47.5,trafficGB:300,trafficReset:"每月",features:["季付","300G/月","企业级"]},{id:"lingdongyun-plan-9",brandId:"lingdongyun",name:"灵动云·灵动·驭浪",billingCycle:"半年付",actualPayment:270,effectiveMonthlyCost:22.5,trafficGB:300,trafficReset:"每月",features:["半年付","300G/月","企业级"]},{id:"lingdongyun-plan-10",brandId:"lingdongyun",name:"灵动云·灵动·驭浪",billingCycle:"年付",actualPayment:510,effectiveMonthlyCost:42.5,trafficGB:300,trafficReset:"每月",features:["年付","300G/月","企业级"]},{id:"lingdongyun-plan-11",brandId:"lingdongyun",name:"灵动云·灵动·驭浪",billingCycle:"两年付",actualPayment:960,effectiveMonthlyCost:80,trafficGB:300,trafficReset:"每月",features:["两年付","300G/月","企业级"]},{id:"lingdongyun-plan-12",brandId:"lingdongyun",name:"灵动云·灵动·驭浪",billingCycle:"三年付",actualPayment:1350,effectiveMonthlyCost:112.5,trafficGB:300,trafficReset:"每月",features:["三年付","300G/月","企业级"]},{id:"lingdongyun-plan-13",brandId:"lingdongyun",name:"灵动云·灵动·破晓",billingCycle:"月付",actualPayment:100,effectiveMonthlyCost:100,trafficGB:700,trafficReset:"每月",features:["月付","700G/月","企业级"]},{id:"lingdongyun-plan-14",brandId:"lingdongyun",name:"灵动云·灵动·破晓",billingCycle:"季付",actualPayment:285,effectiveMonthlyCost:95,trafficGB:700,trafficReset:"每月",features:["季付","700G/月","企业级"]},{id:"lingdongyun-plan-15",brandId:"lingdongyun",name:"灵动云·灵动·破晓",billingCycle:"半年付",actualPayment:540,effectiveMonthlyCost:45,trafficGB:700,trafficReset:"每月",features:["半年付","700G/月","企业级"]},{id:"lingdongyun-plan-16",brandId:"lingdongyun",name:"灵动云·灵动·破晓",billingCycle:"年付",actualPayment:1020,effectiveMonthlyCost:85,trafficGB:700,trafficReset:"每月",features:["年付","700G/月","企业级"]},{id:"lingdongyun-plan-17",brandId:"lingdongyun",name:"灵动云·灵动·破晓",billingCycle:"两年付",actualPayment:1920,effectiveMonthlyCost:160,trafficGB:700,trafficReset:"每月",features:["两年付","700G/月","企业级"]},{id:"lingdongyun-plan-18",brandId:"lingdongyun",name:"灵动云·灵动·破晓",billingCycle:"三年付",actualPayment:2700,effectiveMonthlyCost:225,trafficGB:700,trafficReset:"每月",features:["三年付","700G/月","企业级"]},{id:"lingdongyun-plan-19",brandId:"lingdongyun",name:"灵动云·灵动·凌霄",billingCycle:"月付",actualPayment:180,effectiveMonthlyCost:180,trafficGB:1.5,trafficReset:"每月",features:["月付","1.5T/月","企业级"]},{id:"lingdongyun-plan-20",brandId:"lingdongyun",name:"灵动云·灵动·凌霄",billingCycle:"季付",actualPayment:513,effectiveMonthlyCost:171,trafficGB:1.5,trafficReset:"每月",features:["季付","1.5T/月","企业级"]},{id:"lingdongyun-plan-21",brandId:"lingdongyun",name:"灵动云·灵动·凌霄",billingCycle:"半年付",actualPayment:972,effectiveMonthlyCost:81,trafficGB:1.5,trafficReset:"每月",features:["半年付","1.5T/月","企业级"]},{id:"lingdongyun-plan-22",brandId:"lingdongyun",name:"灵动云·灵动·凌霄",billingCycle:"年付",actualPayment:1836,effectiveMonthlyCost:153,trafficGB:1.5,trafficReset:"每月",features:["年付","1.5T/月","企业级"]},{id:"lingdongyun-plan-23",brandId:"lingdongyun",name:"灵动云·灵动·凌霄",billingCycle:"两年付",actualPayment:3456,effectiveMonthlyCost:288,trafficGB:1.5,trafficReset:"每月",features:["两年付","1.5T/月","企业级"]},{id:"lingdongyun-plan-24",brandId:"lingdongyun",name:"灵动云·灵动·凌霄",billingCycle:"三年付",actualPayment:4860,effectiveMonthlyCost:405,trafficGB:1.5,trafficReset:"每月",features:["三年付","1.5T/月","企业级"]},{id:"lingdongyun-plan-25",brandId:"lingdongyun",name:"灵动云·灵动·穿云",billingCycle:"年付",actualPayment:99,effectiveMonthlyCost:8.25,trafficGB:70,trafficReset:"每月",features:["年付","70G/月","企业级"]},{id:"lingdongyun-plan-26",brandId:"lingdongyun",name:"灵动云·灵动·闲云（小流量包）",billingCycle:"一次性付费",actualPayment:199,effectiveMonthlyCost:199,trafficGB:150,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","150G","企业级"]},{id:"lingdongyun-plan-27",brandId:"lingdongyun",name:"灵动云·灵动·惊云（标准流量包）",billingCycle:"一次性付费",actualPayment:499,effectiveMonthlyCost:499,trafficGB:400,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","400G","企业级"]},{id:"lingdongyun-plan-28",brandId:"lingdongyun",name:"灵动云·灵动·飞云（精英流量包）",billingCycle:"一次性付费",actualPayment:899,effectiveMonthlyCost:899,trafficGB:800,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","800G","企业级"]},{id:"lingdongyun-plan-29",brandId:"lingdongyun",name:"灵动云·灵动云·至尊私人定制",billingCycle:"月付",actualPayment:620,effectiveMonthlyCost:620,trafficGB:100,trafficReset:"每月",features:["月付","截图遮挡","企业级"]},{id:"langwang-plan-1",brandId:"langwang",name:"浪网·浪网 高端",billingCycle:"月付",actualPayment:120,effectiveMonthlyCost:120,trafficGB:800,trafficReset:"每月",features:["月付","800G","企业级"]},{id:"langwang-plan-2",brandId:"langwang",name:"浪网·浪网 高端",billingCycle:"季付",actualPayment:342,effectiveMonthlyCost:114,trafficGB:800,trafficReset:"每月",features:["季付","800G","企业级"]},{id:"langwang-plan-3",brandId:"langwang",name:"浪网·浪网 高端",billingCycle:"半年付",actualPayment:648,effectiveMonthlyCost:54,trafficGB:800,trafficReset:"每月",features:["半年付","800G","企业级"]},{id:"langwang-plan-4",brandId:"langwang",name:"浪网·浪网 高端",billingCycle:"年付",actualPayment:1224,effectiveMonthlyCost:102,trafficGB:800,trafficReset:"每月",features:["年付","800G","企业级"]},{id:"langwang-plan-5",brandId:"langwang",name:"浪网·浪网 高端",billingCycle:"两年付",actualPayment:2304,effectiveMonthlyCost:192,trafficGB:800,trafficReset:"每月",features:["两年付","800G","企业级"]},{id:"langwang-plan-6",brandId:"langwang",name:"浪网·浪网 高端",billingCycle:"三年付",actualPayment:3240,effectiveMonthlyCost:270,trafficGB:800,trafficReset:"每月",features:["三年付","800G","企业级"]},{id:"langwang-plan-7",brandId:"langwang",name:"浪网·浪网 商业",billingCycle:"月付",actualPayment:200,effectiveMonthlyCost:200,trafficGB:2e3,trafficReset:"每月",features:["月付","2000G","企业级"]},{id:"langwang-plan-8",brandId:"langwang",name:"浪网·浪网 商业",billingCycle:"季付",actualPayment:570,effectiveMonthlyCost:190,trafficGB:2e3,trafficReset:"每月",features:["季付","2000G","企业级"]},{id:"langwang-plan-9",brandId:"langwang",name:"浪网·浪网 商业",billingCycle:"半年付",actualPayment:1080,effectiveMonthlyCost:90,trafficGB:2e3,trafficReset:"每月",features:["半年付","2000G","企业级"]},{id:"langwang-plan-10",brandId:"langwang",name:"浪网·浪网 商业",billingCycle:"年付",actualPayment:2040,effectiveMonthlyCost:170,trafficGB:2e3,trafficReset:"每月",features:["年付","2000G","企业级"]},{id:"langwang-plan-11",brandId:"langwang",name:"浪网·浪网 商业",billingCycle:"两年付",actualPayment:3840,effectiveMonthlyCost:320,trafficGB:2e3,trafficReset:"每月",features:["两年付","2000G","企业级"]},{id:"langwang-plan-12",brandId:"langwang",name:"浪网·浪网 商业",billingCycle:"三年付",actualPayment:5400,effectiveMonthlyCost:450,trafficGB:2e3,trafficReset:"每月",features:["三年付","2000G","企业级"]},{id:"langwang-plan-13",brandId:"langwang",name:"浪网·浪网 年付标准",billingCycle:"年付",actualPayment:119,effectiveMonthlyCost:9.92,trafficGB:80,trafficReset:"每月",features:["年付","80G","企业级"]},{id:"langwang-plan-14",brandId:"langwang",name:"浪网·浪网 小流量包",billingCycle:"一次性付费",actualPayment:239,effectiveMonthlyCost:239,trafficGB:180,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","180G","企业级"]},{id:"langwang-plan-15",brandId:"langwang",name:"浪网·浪网 标准流量包",billingCycle:"一次性付费",actualPayment:569,effectiveMonthlyCost:569,trafficGB:450,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","450G","企业级"]},{id:"langwang-plan-16",brandId:"langwang",name:"浪网·浪网 定制线路包",billingCycle:"月付",actualPayment:640,effectiveMonthlyCost:640,trafficGB:500,trafficReset:"每月",features:["月付","500G","企业级"]},{id:"langwang-plan-17",brandId:"langwang",name:"浪网·浪网 精英流量包",billingCycle:"一次性付费",actualPayment:1099,effectiveMonthlyCost:1099,trafficGB:900,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","900G","企业级"]},{id:"langwang-plan-18",brandId:"langwang",name:"浪网·浪网 进阶",billingCycle:"月付",actualPayment:70,effectiveMonthlyCost:70,trafficGB:450,trafficReset:"每月",features:["月付","450G","企业级"]},{id:"langwang-plan-19",brandId:"langwang",name:"浪网·浪网 进阶",billingCycle:"季付",actualPayment:199.5,effectiveMonthlyCost:66.5,trafficGB:450,trafficReset:"每月",features:["季付","450G","企业级"]},{id:"langwang-plan-20",brandId:"langwang",name:"浪网·浪网 进阶",billingCycle:"半年付",actualPayment:378,effectiveMonthlyCost:31.5,trafficGB:450,trafficReset:"每月",features:["半年付","450G","企业级"]},{id:"langwang-plan-21",brandId:"langwang",name:"浪网·浪网 进阶",billingCycle:"年付",actualPayment:714,effectiveMonthlyCost:59.5,trafficGB:450,trafficReset:"每月",features:["年付","450G","企业级"]},{id:"langwang-plan-22",brandId:"langwang",name:"浪网·浪网 进阶",billingCycle:"两年付",actualPayment:1344,effectiveMonthlyCost:112,trafficGB:450,trafficReset:"每月",features:["两年付","450G","企业级"]},{id:"langwang-plan-23",brandId:"langwang",name:"浪网·浪网 进阶",billingCycle:"三年付",actualPayment:1890,effectiveMonthlyCost:157.5,trafficGB:450,trafficReset:"每月",features:["三年付","450G","企业级"]},{id:"langwang-plan-24",brandId:"langwang",name:"浪网·浪网 入门",billingCycle:"月付",actualPayment:30,effectiveMonthlyCost:30,trafficGB:150,trafficReset:"每月",features:["月付","截150G","企业级"]},{id:"langwang-plan-25",brandId:"langwang",name:"浪网·浪网 入门",billingCycle:"季付",actualPayment:85.5,effectiveMonthlyCost:28.5,trafficGB:150,trafficReset:"每月",features:["季付","截150G","企业级"]},{id:"langwang-plan-26",brandId:"langwang",name:"浪网·浪网 入门",billingCycle:"半年付",actualPayment:162,effectiveMonthlyCost:13.5,trafficGB:150,trafficReset:"每月",features:["半年付","截150G","企业级"]},{id:"langwang-plan-27",brandId:"langwang",name:"浪网·浪网 入门",billingCycle:"年付",actualPayment:306,effectiveMonthlyCost:25.5,trafficGB:150,trafficReset:"每月",features:["年付","截150G","企业级"]},{id:"langwang-plan-28",brandId:"langwang",name:"浪网·浪网 入门",billingCycle:"两年付",actualPayment:576,effectiveMonthlyCost:48,trafficGB:150,trafficReset:"每月",features:["两年付","截150G","企业级"]},{id:"langwang-plan-29",brandId:"langwang",name:"浪网·浪网 入门",billingCycle:"三年付",actualPayment:810,effectiveMonthlyCost:67.5,trafficGB:150,trafficReset:"每月",features:["三年付","截150G","企业级"]},{id:"edgenova-plan-1",brandId:"edgenova",name:"EdgeNova·限时月付",billingCycle:"月付",actualPayment:15,effectiveMonthlyCost:15,trafficGB:72,trafficReset:"每月",features:["月付","72G","全专线"]},{id:"edgenova-plan-2",brandId:"edgenova",name:"EdgeNova·限时年付",billingCycle:"年付",actualPayment:108,effectiveMonthlyCost:9,trafficGB:45,trafficReset:"每月",features:["年付","45G","全专线"]},{id:"edgenova-plan-3",brandId:"edgenova",name:"EdgeNova·极界·标准",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:120,trafficReset:"每月",features:["月付","120G","全专线"]},{id:"edgenova-plan-4",brandId:"edgenova",name:"EdgeNova·极界·标准",billingCycle:"季付",actualPayment:70,effectiveMonthlyCost:23.33,trafficGB:120,trafficReset:"每月",features:["季付","120G","全专线"]},{id:"edgenova-plan-5",brandId:"edgenova",name:"EdgeNova·极界·标准",billingCycle:"半年付",actualPayment:130,effectiveMonthlyCost:10.83,trafficGB:120,trafficReset:"每月",features:["半年付","120G","全专线"]},{id:"edgenova-plan-6",brandId:"edgenova",name:"EdgeNova·极界·标准",billingCycle:"年付",actualPayment:270,effectiveMonthlyCost:22.5,trafficGB:120,trafficReset:"每月",features:["年付","120G","全专线"]},{id:"edgenova-plan-7",brandId:"edgenova",name:"EdgeNova·极界·进阶",billingCycle:"月付",actualPayment:50,effectiveMonthlyCost:50,trafficGB:250,trafficReset:"每月",features:["月付","250G","全专线"]},{id:"edgenova-plan-8",brandId:"edgenova",name:"EdgeNova·极界·进阶",billingCycle:"季付",actualPayment:145,effectiveMonthlyCost:48.33,trafficGB:250,trafficReset:"每月",features:["季付","250G","全专线"]},{id:"edgenova-plan-9",brandId:"edgenova",name:"EdgeNova·极界·进阶",billingCycle:"半年付",actualPayment:280,effectiveMonthlyCost:23.33,trafficGB:250,trafficReset:"每月",features:["半年付","250G","全专线"]},{id:"edgenova-plan-10",brandId:"edgenova",name:"EdgeNova·极界·进阶",billingCycle:"年付",actualPayment:570,effectiveMonthlyCost:47.5,trafficGB:250,trafficReset:"每月",features:["年付","250G","全专线"]},{id:"edgenova-plan-11",brandId:"edgenova",name:"EdgeNova·极界·高级",billingCycle:"月付",actualPayment:100,effectiveMonthlyCost:100,trafficGB:500,trafficReset:"每月",features:["月付","500G","全专线"]},{id:"edgenova-plan-12",brandId:"edgenova",name:"EdgeNova·极界·高级",billingCycle:"季付",actualPayment:290,effectiveMonthlyCost:96.67,trafficGB:500,trafficReset:"每月",features:["季付","500G","全专线"]},{id:"edgenova-plan-13",brandId:"edgenova",name:"EdgeNova·极界·高级",billingCycle:"半年付",actualPayment:580,effectiveMonthlyCost:48.33,trafficGB:500,trafficReset:"每月",features:["半年付","500G","全专线"]},{id:"edgenova-plan-14",brandId:"edgenova",name:"EdgeNova·极界·高级",billingCycle:"年付",actualPayment:1100,effectiveMonthlyCost:91.67,trafficGB:500,trafficReset:"每月",features:["年付","500G","全专线"]},{id:"edgenova-plan-15",brandId:"edgenova",name:"EdgeNova·极界·极限",billingCycle:"月付",actualPayment:200,effectiveMonthlyCost:200,trafficGB:1e3,trafficReset:"每月",features:["月付","1000G","全专线"]},{id:"edgenova-plan-16",brandId:"edgenova",name:"EdgeNova·极界·极限",billingCycle:"季付",actualPayment:580,effectiveMonthlyCost:193.33,trafficGB:1e3,trafficReset:"每月",features:["季付","1000G","全专线"]},{id:"edgenova-plan-17",brandId:"edgenova",name:"EdgeNova·极界·极限",billingCycle:"半年付",actualPayment:1150,effectiveMonthlyCost:95.83,trafficGB:1e3,trafficReset:"每月",features:["半年付","1000G","全专线"]},{id:"edgenova-plan-18",brandId:"edgenova",name:"EdgeNova·极界·极限",billingCycle:"年付",actualPayment:2300,effectiveMonthlyCost:191.67,trafficGB:1e3,trafficReset:"每月",features:["年付","1000G","全专线"]},{id:"firefly-plan-1",brandId:"firefly",name:"萤火虫·Firefly年付版",billingCycle:"年付",actualPayment:96,effectiveMonthlyCost:8,trafficGB:60,trafficReset:"每月",features:["年付","60G/月","全专线"]},{id:"firefly-plan-2",brandId:"firefly",name:"萤火虫·Firefly Lite",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:150,trafficReset:"每月",features:["月付","150G/月","全专线"]},{id:"firefly-plan-3",brandId:"firefly",name:"萤火虫·Firefly Lite",billingCycle:"季付",actualPayment:67,effectiveMonthlyCost:22.33,trafficGB:150,trafficReset:"每月",features:["季付","150G/月","全专线"]},{id:"firefly-plan-4",brandId:"firefly",name:"萤火虫·Firefly Lite",billingCycle:"半年付",actualPayment:127,effectiveMonthlyCost:10.58,trafficGB:150,trafficReset:"每月",features:["半年付","150G/月","全专线"]},{id:"firefly-plan-5",brandId:"firefly",name:"萤火虫·Firefly Lite",billingCycle:"年付",actualPayment:240,effectiveMonthlyCost:20,trafficGB:150,trafficReset:"每月",features:["年付","150G/月","全专线"]},{id:"firefly-plan-6",brandId:"firefly",name:"萤火虫·Firefly Lite",billingCycle:"两年付",actualPayment:420,effectiveMonthlyCost:35,trafficGB:150,trafficReset:"每月",features:["两年付","150G/月","全专线"]},{id:"firefly-plan-7",brandId:"firefly",name:"萤火虫·Firefly Lite",billingCycle:"三年付",actualPayment:540,effectiveMonthlyCost:45,trafficGB:150,trafficReset:"每月",features:["三年付","150G/月","全专线"]},{id:"firefly-plan-8",brandId:"firefly",name:"萤火虫·Firefly Plus",billingCycle:"月付",actualPayment:45,effectiveMonthlyCost:45,trafficGB:300,trafficReset:"每月",features:["月付","300G/月","全专线"]},{id:"firefly-plan-9",brandId:"firefly",name:"萤火虫·Firefly Plus",billingCycle:"季付",actualPayment:121,effectiveMonthlyCost:40.33,trafficGB:300,trafficReset:"每月",features:["季付","300G/月","全专线"]},{id:"firefly-plan-10",brandId:"firefly",name:"萤火虫·Firefly Plus",billingCycle:"半年付",actualPayment:229,effectiveMonthlyCost:19.08,trafficGB:300,trafficReset:"每月",features:["半年付","300G/月","全专线"]},{id:"firefly-plan-11",brandId:"firefly",name:"萤火虫·Firefly Plus",billingCycle:"年付",actualPayment:432,effectiveMonthlyCost:36,trafficGB:300,trafficReset:"每月",features:["年付","300G/月","全专线"]},{id:"firefly-plan-12",brandId:"firefly",name:"萤火虫·Firefly Plus",billingCycle:"两年付",actualPayment:756,effectiveMonthlyCost:63,trafficGB:300,trafficReset:"每月",features:["两年付","300G/月","全专线"]},{id:"firefly-plan-13",brandId:"firefly",name:"萤火虫·Firefly Plus",billingCycle:"三年付",actualPayment:972,effectiveMonthlyCost:81,trafficGB:300,trafficReset:"每月",features:["三年付","300G/月","全专线"]},{id:"firefly-plan-14",brandId:"firefly",name:"萤火虫·Firefly Blaze",billingCycle:"月付",actualPayment:85,effectiveMonthlyCost:85,trafficGB:600,trafficReset:"每月",features:["月付","600G/月","全专线"]},{id:"firefly-plan-15",brandId:"firefly",name:"萤火虫·Firefly Blaze",billingCycle:"季付",actualPayment:229,effectiveMonthlyCost:76.33,trafficGB:600,trafficReset:"每月",features:["季付","600G/月","全专线"]},{id:"firefly-plan-16",brandId:"firefly",name:"萤火虫·Firefly Blaze",billingCycle:"半年付",actualPayment:433,effectiveMonthlyCost:36.08,trafficGB:600,trafficReset:"每月",features:["半年付","600G/月","全专线"]},{id:"firefly-plan-17",brandId:"firefly",name:"萤火虫·Firefly Blaze",billingCycle:"年付",actualPayment:816,effectiveMonthlyCost:68,trafficGB:600,trafficReset:"每月",features:["年付","600G/月","全专线"]},{id:"firefly-plan-18",brandId:"firefly",name:"萤火虫·Firefly Blaze",billingCycle:"两年付",actualPayment:1428,effectiveMonthlyCost:119,trafficGB:600,trafficReset:"每月",features:["两年付","600G/月","全专线"]},{id:"firefly-plan-19",brandId:"firefly",name:"萤火虫·Firefly Blaze",billingCycle:"三年付",actualPayment:1836,effectiveMonthlyCost:153,trafficGB:600,trafficReset:"每月",features:["三年付","600G/月","全专线"]},{id:"firefly-plan-20",brandId:"firefly",name:"萤火虫·Firefly Nova",billingCycle:"月付",actualPayment:150,effectiveMonthlyCost:150,trafficGB:1e3,trafficReset:"每月",features:["月付","1000G/月","全专线"]},{id:"firefly-plan-21",brandId:"firefly",name:"萤火虫·Firefly Nova",billingCycle:"季付",actualPayment:400,effectiveMonthlyCost:133.33,trafficGB:1e3,trafficReset:"每月",features:["季付","1000G/月","全专线"]},{id:"firefly-plan-22",brandId:"firefly",name:"萤火虫·Firefly Nova",billingCycle:"半年付",actualPayment:750,effectiveMonthlyCost:62.5,trafficGB:1e3,trafficReset:"每月",features:["半年付","1000G/月","全专线"]},{id:"firefly-plan-23",brandId:"firefly",name:"萤火虫·Firefly Nova",billingCycle:"年付",actualPayment:1360,effectiveMonthlyCost:113.33,trafficGB:1e3,trafficReset:"每月",features:["年付","1000G/月","全专线"]},{id:"firefly-plan-24",brandId:"firefly",name:"萤火虫·Firefly Nova",billingCycle:"两年付",actualPayment:2399,effectiveMonthlyCost:199.92,trafficGB:1e3,trafficReset:"每月",features:["两年付","1000G/月","全专线"]},{id:"firefly-plan-25",brandId:"firefly",name:"萤火虫·Firefly Nova",billingCycle:"三年付",actualPayment:3119,effectiveMonthlyCost:259.92,trafficGB:1e3,trafficReset:"每月",features:["三年付","1000G/月","全专线"]},{id:"firefly-plan-26",brandId:"firefly",name:"萤火虫·Firefly不限时",billingCycle:"一次性付费",actualPayment:100,effectiveMonthlyCost:100,trafficGB:100,trafficReset:"一次性（套餐内流量总额）",features:["一次性付费","100G","全专线"]},{id:"sslar-plan-1",brandId:"sslar",name:"sslar·Basic",billingCycle:"月付",actualPayment:17,effectiveMonthlyCost:17,trafficGB:100,trafficReset:"每月",features:["月付","100G","企业级"]},{id:"sslar-plan-2",brandId:"sslar",name:"sslar·Basic",billingCycle:"季付",actualPayment:46,effectiveMonthlyCost:15.33,trafficGB:100,trafficReset:"每月",features:["季付","100G","企业级"]},{id:"sslar-plan-3",brandId:"sslar",name:"sslar·Basic",billingCycle:"半年付",actualPayment:87,effectiveMonthlyCost:7.25,trafficGB:100,trafficReset:"每月",features:["半年付","100G","企业级"]},{id:"sslar-plan-4",brandId:"sslar",name:"sslar·Basic",billingCycle:"年付",actualPayment:163,effectiveMonthlyCost:13.58,trafficGB:100,trafficReset:"每月",features:["年付","100G","企业级"]},{id:"sslar-plan-5",brandId:"sslar",name:"sslar·Standard",billingCycle:"月付",actualPayment:28,effectiveMonthlyCost:28,trafficGB:200,trafficReset:"每月",features:["月付","200G","企业级"]},{id:"sslar-plan-6",brandId:"sslar",name:"sslar·Standard",billingCycle:"季付",actualPayment:76,effectiveMonthlyCost:25.33,trafficGB:200,trafficReset:"每月",features:["季付","200G","企业级"]},{id:"sslar-plan-7",brandId:"sslar",name:"sslar·Standard",billingCycle:"半年付",actualPayment:143,effectiveMonthlyCost:11.92,trafficGB:200,trafficReset:"每月",features:["半年付","200G","企业级"]},{id:"sslar-plan-8",brandId:"sslar",name:"sslar·Standard",billingCycle:"年付",actualPayment:268,effectiveMonthlyCost:22.33,trafficGB:200,trafficReset:"每月",features:["年付","200G","企业级"]},{id:"sslar-plan-9",brandId:"sslar",name:"sslar·Premium",billingCycle:"月付",actualPayment:36,effectiveMonthlyCost:36,trafficGB:300,trafficReset:"每月",features:["月付","300G","企业级"]},{id:"sslar-plan-10",brandId:"sslar",name:"sslar·Premium",billingCycle:"季付",actualPayment:97,effectiveMonthlyCost:32.33,trafficGB:300,trafficReset:"每月",features:["季付","300G","企业级"]},{id:"sslar-plan-11",brandId:"sslar",name:"sslar·Premium",billingCycle:"半年付",actualPayment:183,effectiveMonthlyCost:15.25,trafficGB:300,trafficReset:"每月",features:["半年付","300G","企业级"]},{id:"sslar-plan-12",brandId:"sslar",name:"sslar·Premium",billingCycle:"年付",actualPayment:345,effectiveMonthlyCost:28.75,trafficGB:300,trafficReset:"每月",features:["年付","300G","企业级"]},{id:"lightspeed-snooker-147",brandId:"lightspeed",name:"光速云·致敬斯诺克147永久套餐",billingCycle:"一次性付费 (永久有效)",actualPayment:147,effectiveMonthlyCost:12.25,trafficGB:247,trafficReset:"一次性永久有效无忧过期",features:["247GB永久版","单节点最高2.5Gbps","不限设备","全平台AI与TikTok解锁","双专线架构"]},{id:"lightspeed-lite-99",brandId:"lightspeed",name:"光速云·轻量版 (年付特惠)",billingCycle:"年付",actualPayment:99,effectiveMonthlyCost:8.25,trafficGB:69,trafficReset:"每月重置",features:["优惠码 AMM 折后 ¥8.25/月","每月69GB","原生稳定节点","不限设备","AI与流媒体全支持"]},{id:"lightspeed-speed-25",brandId:"lightspeed",name:"光速云·极速版 (单月付主力)",billingCycle:"月付",actualPayment:25,effectiveMonthlyCost:25,trafficGB:168,trafficReset:"每月重置",features:["全节点 1.0x 无套路","全球 IPLC 专线","每月168GB","最高2.5Gbps速率","7×24小时运维"]},{id:"lightspeed-custom-680",brandId:"lightspeed",name:"光速云·企业定制版",billingCycle:"月付",actualPayment:680,effectiveMonthlyCost:680,trafficGB:500,trafficReset:"每月重置",features:["独享专属原生IP","独立物理带宽","全IPLC专线","按需定制出口","跨境电商与直播企业首选"]}],yl={class:"plan-table-wrapper"},gl={key:0,class:"table-controls"},vl={class:"filter-group"},hl={class:"table-responsive"},bl={class:"plan-table"},Gl={class:"brand-cell"},Cl={class:"plan-subname"},Il={class:"payment-cell"},Pl={class:"actual-price"},kl={class:"cost-cell"},Bl={class:"monthly-cost"},Sl={class:"traffic-cell"},Tl={class:"rate-note"},_l={class:"tags-list"},Ml={class:"verify-cell"},wl=k({__name:"PlanTable",props:{brandId:{},showFilter:{type:Boolean,default:!0}},setup(t){const n=t,a=w("all"),i=o=>{switch(o){case"monthly":return"月付";case"quarterly":return"季付";case"yearly":return"年付";case"once":return"不限时/一次性";default:return o}},s=o=>{const p=F.find(d=>d.id===o);return p?p.name:o},c=B(()=>ml.filter(o=>!(n.brandId&&o.brandId!==n.brandId||a.value!=="all"&&o.billingCycle!==a.value)));return(o,p)=>(r(),l("div",yl,[t.showFilter?(r(),l("div",gl,[e("div",vl,[p[2]||(p[2]=e("label",null,"按计费周期筛选：",-1)),D(e("select",{"onUpdate:modelValue":p[0]||(p[0]=d=>a.value=d)},[...p[1]||(p[1]=[te('<option value="all" data-v-7c086a7f>全部周期</option><option value="monthly" data-v-7c086a7f>真单月付</option><option value="quarterly" data-v-7c086a7f>季付</option><option value="yearly" data-v-7c086a7f>年付折算</option><option value="once" data-v-7c086a7f>不限时一次性</option>',5)])],512),[[H,a.value]])])])):h("",!0),e("div",hl,[e("table",bl,[p[3]||(p[3]=e("thead",null,[e("tr",null,[e("th",null,"品牌 / 套餐名称"),e("th",null,"计费周期"),e("th",null,"首次实付 (元)"),e("th",null,"折算月价 (元/月)"),e("th",null,"月度流量"),e("th",null,"流量机制 / 倍率"),e("th",null,"核心特性与适用人群"),e("th",null,"最后核验")])],-1)),e("tbody",null,[(r(!0),l(A,null,V(c.value,d=>(r(),l("tr",{key:d.id},[e("td",Gl,[e("strong",null,f(s(d.brandId)),1),e("div",Cl,f(d.name),1)]),e("td",null,[e("span",{class:L(["cycle-badge",`cycle-${d.billingCycle}`])},f(i(d.billingCycle)),3)]),e("td",Il,[e("span",Pl,"¥"+f(d.actualPayment),1)]),e("td",kl,[e("span",Bl,"¥"+f(d.effectiveMonthlyCost.toFixed(2)),1)]),e("td",Sl,[e("strong",null,f(d.trafficGB)+" GB",1)]),e("td",null,[e("div",null,f(d.trafficReset),1),e("div",Tl,f(d.rateMultiplier),1)]),e("td",null,[e("div",_l,[(r(!0),l(A,null,V(d.features,(I,b)=>(r(),l("span",{key:b,class:"feature-tag"},f(I),1))),128))])]),e("td",Ml,[e("small",null,f(d.verifiedAt),1)])]))),128))])])]),p[4]||(p[4]=e("div",{class:"table-foot-note"}," * 价格说明：实付款为首次结算时需向服务商支付的实际金额。年付与季付折算月价仅作为长期成本参考，绝不可当作单月付选购。所有套餐数据来自客观资料快照，未含任何未经确认的促销假扣减。 ",-1))]))}}),$l=S(wl,[["__scopeId","data-v-7c086a7f"]]),Rl=["title"],xl={class:"badge-text"},Al=k({__name:"EvidenceBadge",props:{result:{default:"unknown"},text:{}},setup(t){const n=t,a=B(()=>{switch(n.result){case"success":return"success";case"partial":return"warning";case"failure":return"danger";case"not_tested":case"not_applicable":case"unknown":default:return"neutral"}}),i=B(()=>{if(n.text)return n.text;switch(n.result){case"success":return"实测可用";case"partial":return"部分可用/受限";case"failure":return"实测阻断/不可用";case"not_tested":return"未测试";case"not_applicable":return"不适用";case"unknown":default:return"状态未知(未测)"}}),s=B(()=>{switch(n.result){case"success":return"在指定测试环境中验证达成目标任务";case"partial":return"网页或基础任务通过，但部分高级功能/出口受限";case"failure":return"在当期测试网络下出现 403 / 阻断 / 无法使用";case"not_tested":case"unknown":return"当前暂无独立复核记录，不代表必然支持或不支持";default:return""}});return(c,o)=>(r(),l("span",{class:L(["evidence-badge",`badge-${a.value}`]),title:s.value},[e("span",{class:L(["badge-dot",`dot-${a.value}`])},null,2),e("span",xl,f(i.value),1)],10,Rl))}}),He=S(Al,[["__scopeId","data-v-6ba80048"]]),je=[{id:"obs-speedtest-sogo",brandId:"sogo",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-SOGO云-节点测速实测.png",imageFile:"/speedtests/SOGO云-节点测速实测.png"},{id:"obs-speedtest-u1s1",brandId:"u1s1",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-U1S1-节点测速实测.png",imageFile:"/speedtests/U1S1-节点测速实测.png"},{id:"obs-speedtest-2mao",brandId:"2mao",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-二猫云-节点测速实测.png",imageFile:"/speedtests/二猫云-节点测速实测.png"},{id:"obs-speedtest-flycat",brandId:"flycat",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-飞猫云-节点测速实测.png",imageFile:"/speedtests/飞猫云-节点测速实测.png"},{id:"obs-speedtest-guangnian",brandId:"guangnian",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-光年梯-节点测速实测.png",imageFile:"/speedtests/光年梯-节点测速实测.png"},{id:"obs-speedtest-lightspeed",brandId:"lightspeed",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-光速云-节点测速实测.png",imageFile:"/speedtests/光速云-节点测速实测.png"},{id:"obs-speedtest-jilian",brandId:"jilian",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-极连云-节点测速实测.png",imageFile:"/speedtests/极连云-节点测速实测.png"},{id:"obs-speedtest-kexin",brandId:"kexin",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-可信云-节点测速实测.png",imageFile:"/speedtests/可信云-节点测速实测.png"},{id:"obs-speedtest-lingmao",brandId:"lingmao",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-灵猫网络-节点测速实测.png",imageFile:"/speedtests/灵猫网络-节点测速实测.png"},{id:"obs-speedtest-quanqiu",brandId:"quanqiu",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-全球云-节点测速实测.png",imageFile:"/speedtests/全球云-节点测速实测.png"},{id:"obs-speedtest-sujie",brandId:"sujie",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-速界-节点测速实测.png",imageFile:"/speedtests/速界-节点测速实测.png"},{id:"obs-speedtest-v2yun",brandId:"v2yun",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-唯兔云-节点测速实测.png",imageFile:"/speedtests/唯兔云-节点测速实测.png"},{id:"obs-speedtest-stardream",brandId:"stardream",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-星岛梦-节点测速实测.png",imageFile:"/speedtests/星岛梦-节点测速实测.png"},{id:"obs-speedtest-yifan",brandId:"yifan",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 Shadowsocks，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-一翻云-节点测速实测.png",imageFile:"/speedtests/一翻云-节点测速实测.png"},{id:"obs-speedtest-yuzhou",brandId:"yuzhou",platformId:"speedtest",productId:"speedtest-tool",taskId:"task-node-speedtest",regionId:"all",nodeTag:"亚太全节点测速",observedExitRegion:"香港/日本/新加坡/美国",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-11",rttMs:38,notes:"2026-08-11 MAI-TEST-BOT 节点测速实测：协议 VLESS，平均延迟低且全节点联通。",sourceRef:"SRC-SPEEDTEST-宇宙云-节点测速实测.png",imageFile:"/speedtests/宇宙云-节点测速实测.png"},{id:"obs-ls-ai",brandId:"lightspeed",platformId:"openai",productId:"chatgpt-web",taskId:"task-stream-chat",regionId:"jp",nodeTag:"日本 01 [IEPL专线]",observedExitRegion:"日本（东京）",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-19",rttMs:35,notes:"2026-08-19 实测验证：网页长文本流式输出完成率 100%，未触发人机验证拦截。"},{id:"obs-ls-streaming",brandId:"lightspeed",platformId:"netflix",productId:"netflix-4k",taskId:"task-4k-play",regionId:"us",nodeTag:"美国 01 [专线]",observedExitRegion:"美国（洛杉矶）",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-19",rttMs:142,notes:"2026-08-19 实测验证：美区 Netflix 原生片目持续播放 180 秒无弹窗阻断，YouTube 4K 连接带宽超 55,000 Kbps。"},{id:"obs-wc-ai",brandId:"wgetcloud",platformId:"anthropic",productId:"claude-web",taskId:"task-auth",regionId:"sg",nodeTag:"新加坡 01 [华为云专线]",observedExitRegion:"新加坡",result:"success",provenance:"measured",verification:"verified",observedAt:"2026-08-24",rttMs:48,notes:"2026-08-24 测速：59个节点全量可用，平均下载超 50MB/s，Claude 登录正常。"}],Ll=[{id:"openai",name:"OpenAI / ChatGPT",officialDocUrl:"https://help.openai.com/en/articles/7947663-chatgpt-supported-countries",description:"全球领先的大语言模型平台，涵盖网页对话、移动客户端及开发者 API。"},{id:"anthropic",name:"Anthropic / Claude",officialDocUrl:"https://support.claude.com/en/articles/8461763-where-can-i-access-claude",description:"主打高智能与长上下文的大语言模型，对出口网络机房属性与地区合规风控极其严苛。"},{id:"google",name:"Google / Gemini",officialDocUrl:"https://ai.google.dev/gemini-api/docs/available-regions",description:"深度整合 Google 生态的 AI 工具，涵盖 Web 应用、AI Studio 工作台及多模态 API。"},{id:"netflix",name:"Netflix",officialDocUrl:"https://help.netflix.com/en/node/114701",description:"全球流媒体巨头，按国家划分独占版权片库，严格拦截数据中心代理 IP。"},{id:"disney",name:"Disney+",officialDocUrl:"https://help.disneyplus.com/article/disneyplus-error-73",description:"包含迪士尼、漫威、星战等 IP 的流媒体平台，严控地区认证与 Error 73 报错。"},{id:"youtube",name:"YouTube",officialDocUrl:"https://www.youtube.com",description:"全球最大视频点播与直播平台，支持 4K/60fps HDR 及高码率点播。"},{id:"tiktok",name:"TikTok",officialDocUrl:"https://support.tiktok.com/",description:"全球短视频与跨境电商社交平台，对 SIM 卡与住宅原生出口网络要求极高。"},{id:"speedtest",name:"全节点测速与延迟基准 (Speedtest)",officialDocUrl:"https://github.com",description:"基于 MAI-TEST-BOT 标准化探针的全节点延迟 (TLS RTT) 与下载吞吐带宽基准压测。"}],Vl=[{id:"chatgpt-web",platformId:"openai",name:"ChatGPT 网页版",entryUrl:"https://chatgpt.com"},{id:"chatgpt-mobile",platformId:"openai",name:"ChatGPT 移动官方应用",entryUrl:"https://chatgpt.com"},{id:"openai-api",platformId:"openai",name:"OpenAI 官方 API",entryUrl:"https://api.openai.com"},{id:"claude-web",platformId:"anthropic",name:"Claude 网页版",entryUrl:"https://claude.ai"},{id:"claude-code",platformId:"anthropic",name:"Claude Code 终端编程工具",entryUrl:"https://claude.ai/code"},{id:"claude-api",platformId:"anthropic",name:"Anthropic 官方 API",entryUrl:"https://api.anthropic.com"},{id:"gemini-app",platformId:"google",name:"Gemini Web / 移动应用",entryUrl:"https://gemini.google.com"},{id:"google-ai-studio",platformId:"google",name:"Google AI Studio",entryUrl:"https://aistudio.google.com"},{id:"gemini-api",platformId:"google",name:"Gemini Developer API",entryUrl:"https://generativelanguage.googleapis.com"},{id:"netflix-playback",platformId:"netflix",name:"Netflix 实际版权片目播放",entryUrl:"https://netflix.com"},{id:"disney-playback",platformId:"disney",name:"Disney+ 实际播放",entryUrl:"https://disneyplus.com"},{id:"youtube-4k",platformId:"youtube",name:"YouTube 4K 点播与直播",entryUrl:"https://youtube.com"},{id:"tiktok-flow",platformId:"tiktok",name:"TikTok 视频信息流与发布",entryUrl:"https://tiktok.com"}],El=[{id:"task-auth",name:"账号认证与安全登录",tier:3,successCondition:"成功通过登录验证且不出现 Access Denied / 验证码死循环"},{id:"task-stream-chat",name:"长文本流式对话生成",tier:3,successCondition:"输入 500 字以上复杂 Prompt，持续稳定生成，无 Network Error 中断"},{id:"task-file-upload",name:"多模态附件/图片上传",tier:3,successCondition:"成功上传 10MB 以上文档或多张图片并完成内容解析"},{id:"task-api-ttft",name:"API 首字耗时与流式响应",tier:3,successCondition:"HTTP 200 返回，首字时延（TTFT）处于可控区间且数据完整"},{id:"task-video-playback",name:"版权片目播放防代理阻断",tier:3,successCondition:"连续播放非自制独家片目 3 分钟以上无代理报错"},{id:"task-4k-buffer",name:"高码率持续缓冲抗丢帧",tier:4,successCondition:"YouTube 4K/60fps 播放，Connection Speed > 35Mbps，无掉帧"},{id:"task-tiktok-publish",name:"短视频正常发布与地区识别",tier:3,successCondition:"视频成功发布且在目标区域正常展现"}],Nl={class:"matrix-container"},Dl={class:"matrix-filter-bar"},Ol={class:"filter-item"},Fl={class:"filter-item"},Ul={class:"filter-item"},ql={class:"table-responsive"},Hl={class:"matrix-table"},jl={class:"brand-col"},Yl={class:"node-tag-txt"},zl={class:"platform-tag"},Wl={class:"product-txt"},Kl={class:"task-txt"},Xl={class:"exit-txt"},Ql={key:0,class:"rtt-val"},Jl={key:1,class:"text-muted"},Zl={class:"provenance-tag"},eo={class:"date-txt"},to={class:"notes-txt"},no={key:0},ao=k({__name:"PlatformTaskMatrix",setup(t){const n=w("all"),a=w("all"),i=w("all"),s=b=>{const y=F.find(C=>C.id===b);return y?y.name:b},c=b=>{const y=Ll.find(C=>C.id===b);return y?y.name:b},o=b=>{const y=Vl.find(C=>C.id===b);return y?y.name:b},p=b=>{const y=El.find(C=>C.id===b);return y?y.name:b},d=(b,y)=>y==="openai"||y==="anthropic"||y==="google"?b!=="hk":!0,I=B(()=>je.filter(b=>!(n.value!=="all"&&b.platformId!==n.value||a.value!=="all"&&b.regionId!==a.value||i.value!=="all"&&b.result!==i.value)));return(b,y)=>(r(),l("div",Nl,[e("div",Dl,[e("div",Ol,[y[4]||(y[4]=e("label",null,"目标平台：",-1)),D(e("select",{"onUpdate:modelValue":y[0]||(y[0]=C=>n.value=C)},[...y[3]||(y[3]=[te('<option value="all" data-v-4bd37d97>全部平台</option><option value="openai" data-v-4bd37d97>OpenAI / ChatGPT</option><option value="anthropic" data-v-4bd37d97>Anthropic / Claude</option><option value="google" data-v-4bd37d97>Google / Gemini</option><option value="netflix" data-v-4bd37d97>Netflix</option><option value="disney" data-v-4bd37d97>Disney+</option><option value="youtube" data-v-4bd37d97>YouTube</option>',7)])],512),[[H,n.value]])]),e("div",Fl,[y[6]||(y[6]=e("label",null,"节点出口地区：",-1)),D(e("select",{"onUpdate:modelValue":y[1]||(y[1]=C=>a.value=C)},[...y[5]||(y[5]=[te('<option value="all" data-v-4bd37d97>全部地区</option><option value="hk" data-v-4bd37d97>香港 [HK]</option><option value="jp" data-v-4bd37d97>日本 [JP]</option><option value="sg" data-v-4bd37d97>新加坡 [SG]</option><option value="us" data-v-4bd37d97>美国 [US]</option>',5)])],512),[[H,a.value]])]),e("div",Ul,[y[8]||(y[8]=e("label",null,"实测结果：",-1)),D(e("select",{"onUpdate:modelValue":y[2]||(y[2]=C=>i.value=C)},[...y[7]||(y[7]=[e("option",{value:"all"},"全部结果",-1),e("option",{value:"success"},"实测可用",-1),e("option",{value:"partial"},"部分受限",-1),e("option",{value:"failure"},"阻断/失败",-1)])],512),[[H,i.value]])])]),e("div",ql,[e("table",Hl,[y[10]||(y[10]=e("thead",null,[e("tr",null,[e("th",null,"品牌 / 节点标签"),e("th",null,"平台与具体产品"),e("th",null,"实测执行任务"),e("th",null,"官方资格状态"),e("th",null,"出口识别地区"),e("th",null,"实测结论"),e("th",null,"TLS 延迟"),e("th",null,"证据来源 / 记录日期"),e("th",null,"局限与备注说明")])],-1)),e("tbody",null,[(r(!0),l(A,null,V(I.value,C=>(r(),l("tr",{key:C.id},[e("td",jl,[e("strong",null,f(s(C.brandId)),1),e("div",Yl,f(C.nodeTag),1)]),e("td",null,[e("span",zl,f(c(C.platformId)),1),e("div",Wl,f(o(C.productId)),1)]),e("td",null,[e("span",Kl,f(p(C.taskId)),1)]),e("td",null,[e("span",{class:L(["official-check",d(C.regionId,C.platformId)?"eligible":"ineligible"])},f(d(C.regionId,C.platformId)?"官方白名单支持":"官方不支持(需分流)"),3)]),e("td",null,[e("span",Xl,f(C.observedExitRegion),1)]),e("td",null,[$(He,{result:C.result},null,8,["result"])]),e("td",null,[C.rttMs?(r(),l("span",Ql,f(C.rttMs)+" ms",1)):(r(),l("span",Jl,"-"))]),e("td",null,[e("div",Zl,"来源: "+f(C.provenance),1),e("small",eo,f(C.observedAt),1)]),e("td",null,[e("div",to,f(C.notes),1)])]))),128)),I.value.length===0?(r(),l("tr",no,[...y[9]||(y[9]=[e("td",{colspan:"9",class:"empty-cell"}," 当前筛选条件下暂无已归档测试记录（本站严格按真实测试呈现，绝不自动填补假绿色） ",-1)])])):h("",!0)])])]),y[11]||(y[11]=e("div",{class:"matrix-guideline"},[e("strong",null,"四层评估准则声明："),e("span",null," ① “实测可用”仅代表在指定测试窗口和网络环境下成功达成任务； ② 官方白名单依据平台官网技术文档（2026-10 状态）； ③ 严禁将单节点测速直接推论为全品牌全天候可用； ④ 任何未测试项一律显示为未知或留空，坚决拒绝伪造“全绿九宫格”。 ")],-1))]))}}),Ye=S(ao,[["__scopeId","data-v-4bd37d97"]]),io=[{id:"hk",name:"香港（Hong Kong）",latencyRange:"15 - 35 ms",physicalProximity:"近端直连 / 极低延迟",officialAiStatus:"官方不支持（部分工具需分流绕行）",officialStreamingStatus:"支持 Netflix、Disney+ 繁体中文库",recommendScenario:"流媒体点播、低延迟游戏与常规网页浏览"},{id:"jp",name:"日本（Japan）",latencyRange:"45 - 80 ms",physicalProximity:"亚太近端 / 专线高速",officialAiStatus:"官方全支持（ChatGPT / Claude / Gemini）",officialStreamingStatus:"日区专属片库 / 动画独播丰富",recommendScenario:"AI 办公主力、流媒体综合主力"},{id:"sg",name:"新加坡（Singapore）",latencyRange:"40 - 70 ms",physicalProximity:"东南亚核心骨干汇聚",officialAiStatus:"官方全支持（ChatGPT / Claude / Gemini）",officialStreamingStatus:"中英双语字幕支持优良",recommendScenario:"跨国协作、AI 与开发调用双重主力"},{id:"us",name:"美国（United States）",latencyRange:"130 - 190 ms",physicalProximity:"远端大洋路由",officialAiStatus:"所有 AI 工具的第一首发和最完整功能支持区",officialStreamingStatus:"美区最全片库，但对机房 IP 审查最严",recommendScenario:"AI 新功能测试、API 开发、原生内容挖掘"},{id:"tw",name:"台湾（Taiwan）",latencyRange:"35 - 55 ms",physicalProximity:"近端海缆",officialAiStatus:"官方全支持（ChatGPT / Claude / Gemini）",officialStreamingStatus:"最适合中文观看的 Netflix/Disney+ 字幕库",recommendScenario:"追剧、繁体中文 AI 交互与流媒体"},{id:"eu",name:"欧洲（Europe - 英法德）",latencyRange:"160 - 220 ms",physicalProximity:"欧亚大陆路由",officialAiStatus:"受 GDPR 影响，部分 AI 新实验功能稍慢",officialStreamingStatus:"欧洲本地独家影音内容",recommendScenario:"特定跨国业务、备份节点"}],ro={class:"region-selector-wrapper"},so={class:"region-nav-pills"},lo=["onClick"],oo={key:0,class:"region-detail-card"},co={class:"detail-header"},uo={class:"latency-badge"},fo={class:"detail-grid"},po={class:"detail-item"},mo={class:"value"},yo={class:"detail-item"},go={class:"value font-medium"},vo={class:"detail-item"},ho={class:"value"},bo={class:"detail-item"},Go={class:"value highlight"},Co=k({__name:"RegionSelector",setup(t){var s;const n=io,a=w(((s=n[0])==null?void 0:s.id)||"hk"),i=B(()=>n.find(c=>c.id===a.value));return(c,o)=>(r(),l("div",ro,[e("div",so,[(r(!0),l(A,null,V(u(n),p=>(r(),l("button",{key:p.id,class:L(["region-pill",{active:a.value===p.id}]),onClick:d=>a.value=p.id},f(p.name),11,lo))),128))]),i.value?(r(),l("div",oo,[e("div",co,[e("h4",null,f(i.value.name),1),e("span",uo,"典型往返时延: "+f(i.value.latencyRange),1)]),e("div",fo,[e("div",po,[o[0]||(o[0]=e("span",{class:"label"},"物理路由与机房：",-1)),e("span",mo,f(i.value.physicalProximity),1)]),e("div",yo,[o[1]||(o[1]=e("span",{class:"label"},"AI 官方资格支持：",-1)),e("span",go,f(i.value.officialAiStatus),1)]),e("div",vo,[o[2]||(o[2]=e("span",{class:"label"},"流媒体内容库：",-1)),e("span",ho,f(i.value.officialStreamingStatus),1)]),e("div",bo,[o[3]||(o[3]=e("span",{class:"label"},"推荐核心场景：",-1)),e("span",Go,f(i.value.recommendScenario),1)])])])):h("",!0)]))}}),Io=S(Co,[["__scopeId","data-v-f7258a34"]]),Po={class:"test-report-card"},ko={class:"report-header"},Bo={class:"report-title"},So={class:"report-date"},To={class:"report-env"},_o={class:"env-item"},Mo={class:"env-v"},wo={class:"env-item"},$o={class:"env-v"},Ro={class:"env-item"},xo={class:"env-v"},Ao={class:"report-content"},Lo=k({__name:"TestReport",props:{report:{}},setup(t){return(n,a)=>(r(),l("div",Po,[e("div",ko,[e("div",Bo,[a[0]||(a[0]=e("span",{class:"report-badge"},"实测记录",-1)),e("h4",null,f(t.report.title),1)]),e("div",So,f(t.report.date),1)]),e("div",To,[e("div",_o,[a[1]||(a[1]=e("span",{class:"env-k"},"测试基准网络:",-1)),e("span",Mo,f(t.report.networkBaseline||"家庭千兆宽带 (三网抽样)"),1)]),e("div",wo,[a[2]||(a[2]=e("span",{class:"env-k"},"客户端核心:",-1)),e("span",$o,f(t.report.clientCore||"Clash Meta (mihomo) / Sing-box"),1)]),e("div",Ro,[a[3]||(a[3]=e("span",{class:"env-k"},"测试时段:",-1)),e("span",xo,f(t.report.timeWindow||"晚高峰 20:00 - 22:30 & 白天闲时"),1)])]),e("div",Ao,[g(n.$slots,"default",{},void 0,!0)]),a[4]||(a[4]=e("div",{class:"report-footer"},[e("div",{class:"method-ver"},"评测方法版本: v2.4 (四层递进核查模型)"),e("div",{class:"disclaimer"},"注：本记录反映特定时间与网络节点表现，网络环境具备动态性，请结合最新复测考量。")],-1))]))}}),Vo=S(Lo,[["__scopeId","data-v-d94e0339"]]),Eo={class:"source-note-box"},No={class:"note-content"},Do={key:0,class:"note-desc"},Oo={key:1,class:"note-meta"},Fo=k({__name:"SourceNote",props:{refCode:{},desc:{},date:{}},setup(t){return(n,a)=>(r(),l("div",Eo,[a[1]||(a[1]=e("span",{class:"note-icon"},"📌",-1)),e("div",No,[a[0]||(a[0]=e("span",{class:"note-label"},"事实溯源编号：",-1)),e("code",null,f(t.refCode),1),t.desc?(r(),l("span",Do," — "+f(t.desc),1)):h("",!0),t.date?(r(),l("span",Oo," (核查记录日期: "+f(t.date)+")",1)):h("",!0)])]))}}),Uo=S(Fo,[["__scopeId","data-v-db74281a"]]),qo=[{id:"offer-lightspeed-amm",brandId:"lightspeed",couponCode:"AMM",discountDescription:"官方优惠码 AMM，结账时输入立享专属折扣",actualPaymentAfterDiscount:99,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-flycat-flycat888",brandId:"flycat",couponCode:"flycat888",discountDescription:"官方优惠码 flycat888，结账时输入立享专属折扣",actualPaymentAfterDiscount:84,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-breezenet-flat888",brandId:"breezenet",couponCode:"flat888",discountDescription:"官方优惠码 flat888，结账时输入立享专属折扣",actualPaymentAfterDiscount:137,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-twilight-muguang5555",brandId:"twilight",couponCode:"muguang5555",discountDescription:"官方优惠码 muguang5555，结账时输入立享专属折扣",actualPaymentAfterDiscount:20,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-dalaoyun-dly888",brandId:"dalaoyun",couponCode:"dly888",discountDescription:"官方优惠码 dly888，结账时输入立享专属折扣",actualPaymentAfterDiscount:8.399999999999999,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-stardream-nmw888",brandId:"stardream",couponCode:"nmw888",discountDescription:"官方优惠码 nmw888，结账时输入立享专属折扣",actualPaymentAfterDiscount:96,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-2mao-ermao5555",brandId:"2mao",couponCode:"ermao5555",discountDescription:"官方优惠码 ermao5555，结账时输入立享专属折扣",actualPaymentAfterDiscount:99,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-wuyou-wuyou666",brandId:"wuyou",couponCode:"wuyou666",discountDescription:"官方优惠码 wuyou666，结账时输入立享专属折扣",actualPaymentAfterDiscount:79,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-v2yun-weitu666",brandId:"v2yun",couponCode:"weitu666",discountDescription:"官方优惠码 weitu666，结账时输入立享专属折扣",actualPaymentAfterDiscount:120,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-u1s1-akaka",brandId:"u1s1",couponCode:"akaka",discountDescription:"官方优惠码 akaka，结账时输入立享专属折扣",actualPaymentAfterDiscount:96,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-lingmao-lmao888",brandId:"lingmao",couponCode:"lmao888",discountDescription:"官方优惠码 lmao888，结账时输入立享专属折扣",actualPaymentAfterDiscount:85,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-jilian-ji8888",brandId:"jilian",couponCode:"ji8888",discountDescription:"官方优惠码 ji8888，结账时输入立享专属折扣",actualPaymentAfterDiscount:12.375,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-guangnian-gnt6666",brandId:"guangnian",couponCode:"gnt6666",discountDescription:"官方优惠码 gnt6666，结账时输入立享专属折扣",actualPaymentAfterDiscount:12.375,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-yifan-yfy6666",brandId:"yifan",couponCode:"yfy6666",discountDescription:"官方优惠码 yfy6666，结账时输入立享专属折扣",actualPaymentAfterDiscount:20,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-sogo-sogo10000",brandId:"sogo",couponCode:"SOGO10000",discountDescription:"官方优惠码 SOGO10000，结账时输入立享专属折扣",actualPaymentAfterDiscount:98,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-kexin-kkk333",brandId:"kexin",couponCode:"kkk333",discountDescription:"官方优惠码 kkk333，结账时输入立享专属折扣",actualPaymentAfterDiscount:22.5,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-sujie-sss1111",brandId:"sujie",couponCode:"sss1111",discountDescription:"官方优惠码 sss1111，结账时输入立享专属折扣",actualPaymentAfterDiscount:22.5,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-shandianshu-sd88",brandId:"shandianshu",couponCode:"sd88",discountDescription:"官方优惠码 sd88，结账时输入立享专属折扣",actualPaymentAfterDiscount:8.399999999999999,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-yunjiexian-yjx888",brandId:"yunjiexian",couponCode:"yjx888",discountDescription:"官方优惠码 yjx888，结账时输入立享专属折扣",actualPaymentAfterDiscount:8.399999999999999,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-liulianyun-ll88",brandId:"liulianyun",couponCode:"ll88",discountDescription:"官方优惠码 ll88，结账时输入立享专属折扣",actualPaymentAfterDiscount:8.399999999999999,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-shenxing-xs0077",brandId:"shenxing",couponCode:"xs0077",discountDescription:"官方优惠码 xs0077，结账时输入立享专属折扣",actualPaymentAfterDiscount:22.5,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-huanqiuti-hq66",brandId:"huanqiuti",couponCode:"HQ66",discountDescription:"官方优惠码 HQ66，结账时输入立享专属折扣",actualPaymentAfterDiscount:8.399999999999999,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-yinxingren-yxr888",brandId:"yinxingren",couponCode:"yxr888",discountDescription:"官方优惠码 yxr888，结账时输入立享专属折扣",actualPaymentAfterDiscount:24,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1},{id:"offer-tiziyun-tiziyun",brandId:"tiziyun",couponCode:"tiziyun",discountDescription:"官方优惠码 tiziyun，结账时输入立享专属折扣",actualPaymentAfterDiscount:22.5,applicableScope:"指定周期套餐",validUntil:null,isExpired:!1}],Ho={class:"offer-header"},jo={class:"offer-brand-name"},Yo={class:"offer-status"},zo={key:0,class:"badge badge-neutral"},Wo={key:1,class:"badge badge-success"},Ko={class:"offer-body"},Xo={class:"discount-desc"},Qo={key:0,class:"coupon-box"},Jo={class:"coupon-code"},Zo={class:"offer-specs"},ec={class:"spec-row"},tc={class:"val"},nc={class:"spec-row"},ac={class:"val"},ic={key:0,class:"spec-row"},rc={class:"val text-muted"},sc={class:"offer-footer"},lc={class:"source-ref"},oc=["href"],cc=k({__name:"OfferCard",props:{offerId:{}},setup(t){const n=t,a=w(!1),i=B(()=>qo.find(p=>p.id===n.offerId)||{id:n.offerId,brandId:"unknown",couponCode:"",discountDescription:"优惠活动整理中",actualPaymentAfterDiscount:0,applicableScope:"全套餐",validUntil:null,sourceRef:"未知",isExpired:!1}),s=p=>{const d=F.find(I=>I.id===p);return d?d.name:p},c=B(()=>he.find(p=>p.brandId===i.value.brandId)),o=p=>{navigator.clipboard&&navigator.clipboard.writeText(p).then(()=>{a.value=!0,setTimeout(()=>a.value=!1,2e3)})};return(p,d)=>(r(),l("div",{class:L(["offer-card",{expired:i.value.isExpired}])},[e("div",Ho,[e("div",jo,f(s(i.value.brandId)),1),e("div",Yo,[i.value.isExpired?(r(),l("span",zo,"已下架/失效")):(r(),l("span",Wo,"官方优惠生效中"))])]),e("div",Ko,[e("div",Xo,f(i.value.discountDescription),1),i.value.couponCode?(r(),l("div",Qo,[d[1]||(d[1]=e("span",{class:"coupon-label"},"优惠码:",-1)),e("code",Jo,f(i.value.couponCode),1),e("button",{class:"copy-btn",onClick:d[0]||(d[0]=I=>o(i.value.couponCode))},f(a.value?"已复制":"复制"),1)])):h("",!0),e("div",Zo,[e("div",ec,[d[2]||(d[2]=e("span",{class:"label"},"适用范围:",-1)),e("span",tc,f(i.value.applicableScope),1)]),e("div",nc,[d[3]||(d[3]=e("span",{class:"label"},"有效期截止:",-1)),e("span",ac,f(i.value.validUntil||"长期官方活动 (以结算页为准)"),1)]),i.value.historyNote?(r(),l("div",ic,[d[4]||(d[4]=e("span",{class:"label"},"历史变更:",-1)),e("span",rc,f(i.value.historyNote),1)])):h("",!0)])]),e("div",sc,[e("div",lc,"核验来源: "+f(i.value.sourceRef),1),c.value&&!i.value.isExpired?(r(),l("a",{key:0,href:c.value.url,target:"_blank",rel:"nofollow sponsored noopener",class:"btn-primary btn-sm"}," 去官网兑换 ",8,oc)):h("",!0)])],2))}}),dc=S(cc,[["__scopeId","data-v-fbec33a7"]]),uc={class:"decision-tree-card"},fc={class:"tree-interactive"},pc={class:"step-buttons"},mc=["onClick"],yc={key:0,class:"branch-detail"},gc={class:"flow-steps"},vc={class:"step-num"},hc={class:"step-txt"},bc={class:"flow-action"},Gc=["href"],Cc=k({__name:"DecisionTree",setup(t){const n=w("ai"),a=[{id:"ai",title:"🤖 AI 工作与开发",steps:["第一步：确认具体产品入口（ChatGPT 网页版、移动端、Claude Code 或 OpenAI API）","第二步：核查官方服务资格（如香港出口不支持 OpenAI 网页登录，需日本/新加坡节点）","第三步：查阅分平台任务矩阵，寻找有长文本流式与多模态实测证据的机场"],targetUrl:"/ai/",targetText:"进入 AI机场推荐看板"},{id:"streaming",title:"🎬 视频追剧与 TikTok",steps:["第一步：明确平台与片目需求（如 Netflix 日区动画、美区独家剧、Disney+ 或 YouTube 4K）","第二步：确认播放设备与客户端（电视机 AppleTV / 软路由 / 手机）","第三步：核验节点高峰期抗拥塞能力与版权片目实际播放记录，避免仅看首页"],targetUrl:"/streaming/",targetText:"进入 流媒体机场选型指南"},{id:"free",title:"🎁 零预算与试用",steps:["第一步：了解零付款资源的生命周期与限速限额风险","第二步：核查试用资格是否需绑定支付方式或安装未知根证书（严防安全隐患）","第三步：若免费无法满足工作，对比低至 ¥7~10/月 的正规小额月付方案"],targetUrl:"/free/",targetText:"查看 免费机场与试用核查"},{id:"troubleshoot",title:"🛠️ 已有故障排查",steps:["第一步：区分是平台风控（429/403/Access Denied）还是网络底层断连","第二步：检查客户端 DNS 解析与分流规则（TUN模式与系统代理差异）","第三步：依据症状决策树逐步回退验证，定位原因前不盲目频繁换节点"],targetUrl:"/guides/",targetText:"进入 AI使用与网络排障指南"}],i=B(()=>a.find(s=>s.id===n.value));return(s,c)=>(r(),l("div",uc,[c[1]||(c[1]=e("div",{class:"tree-header"},[e("span",{class:"tree-badge"},"选型决策树"),e("h4",null,"你主要用网络做什么？点击分支直接获取行动路径")],-1)),e("div",fc,[e("div",pc,[(r(),l(A,null,V(a,o=>e("button",{key:o.id,class:L(["branch-btn",{active:n.value===o.id}]),onClick:p=>n.value=o.id},f(o.title),11,mc)),64))]),i.value?(r(),l("div",yc,[e("div",gc,[(r(!0),l(A,null,V(i.value.steps,(o,p)=>(r(),l("div",{key:p,class:"flow-step-item"},[e("div",vc,f(p+1),1),e("div",hc,f(o),1)]))),128))]),e("div",bc,[c[0]||(c[0]=e("span",{class:"action-hint"},"推荐主承接入口：",-1)),e("a",{href:i.value.targetUrl,class:"btn-primary btn-sm"},f(i.value.targetText)+" → ",9,Gc)])])):h("",!0)]),c[2]||(c[2]=e("details",{class:"ascii-fallback"},[e("summary",null,"查看完整 ASCII 决策树文本图谱"),e("pre",{class:"ascii-pre"},[e("code",null,`你主要做什么？
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
最终收敛：核对真实实付、支持客户端、协议倍率和设备数后自主决策。`)])],-1))]))}}),Ic=S(Cc,[["__scopeId","data-v-25e8735d"]]),Pc={class:"faq-container"},kc=["onClick"],Bc={class:"q-text"},Sc={class:"q-arrow"},Tc={class:"faq-answer"},_c=["innerHTML"],Mc=k({__name:"FAQBlock",props:{items:{}},setup(t){const n=w(0),a=i=>{n.value=n.value===i?null:i};return(i,s)=>(r(),l("div",Pc,[(r(!0),l(A,null,V(t.items,(c,o)=>(r(),l("div",{key:o,class:L(["faq-item",{open:n.value===o}])},[e("div",{class:"faq-question",onClick:p=>a(o)},[s[0]||(s[0]=e("span",{class:"q-icon"},"Q",-1)),e("span",Bc,f(c.q),1),e("span",Sc,f(n.value===o?"−":"+"),1)],8,kc),D(e("div",Tc,[e("div",{class:"a-content",innerHTML:c.a},null,8,_c)],512),[[st,n.value===o]])],2))),128))]))}}),wc=S(Mc,[["__scopeId","data-v-0ba3a2df"]]),$c={class:"related-links-box"},Rc={class:"links-grid"},xc=["href"],Ac={class:"link-label"},Lc={class:"link-desc"},Vc=k({__name:"RelatedLinks",props:{links:{}},setup(t){return(n,a)=>(r(),l("div",$c,[a[0]||(a[0]=e("div",{class:"box-title"},[e("span",{class:"box-icon"},"🧭"),e("span",null,"下一步推荐探索路径")],-1)),e("div",Rc,[(r(!0),l(A,null,V(t.links,(i,s)=>(r(),l("a",{key:s,href:i.url,class:"related-link-card"},[e("div",Ac,f(i.title),1),e("div",Lc,f(i.desc),1)],8,xc))),128))])]))}}),Ec=S(Vc,[["__scopeId","data-v-d60d6b61"]]),Nc={class:"interactive-tools-wrapper"},Dc={class:"tool-tabs-bar"},Oc=["onClick"],Fc={key:0,class:"tool-pane"},Uc={class:"finder-inputs"},qc={class:"input-block"},Hc={class:"finder-results"},jc={class:"res-head"},Yc={class:"res-price"},zc={class:"res-summary"},Wc={class:"res-meta"},Kc={class:"res-action"},Xc=["href"],Qc={key:0,class:"empty-res"},Jc={key:1,class:"tool-pane"},Zc={class:"region-checker-box"},ed={class:"checker-row"},td={class:"region-status-table"},nd={key:2,class:"tool-pane"},ad={class:"compare-selectors"},id={class:"sel-box"},rd=["value"],sd={class:"sel-box"},ld=["value"],od={key:0,class:"compare-table-box"},cd={class:"highlight"},dd={class:"highlight"},ud={key:3,class:"tool-pane"},fd={class:"calc-grid"},pd={class:"calc-input-group"},md={class:"calc-input-group"},yd={class:"calc-input-group"},gd={class:"calc-input-group"},vd={class:"calc-result-box"},hd={class:"result-num"},bd={class:"result-advice"},Gd={key:0},Cd={key:1},Id={key:2},Pd={key:4,class:"tool-pane"},kd={class:"cost-calc-form"},Bd={class:"form-row"},Sd={class:"form-row"},Td={class:"cost-calc-summary"},_d={class:"summary-card"},Md={class:"v"},wd={class:"summary-card highlight"},$d={class:"v"},Rd={key:0,class:"cost-warning"},xd={key:5,class:"tool-pane"},Ad={key:6,class:"tool-pane"},Ld={class:"trouble-selector"},Vd={key:0,class:"trouble-advice-card"},Ed={class:"tr-cause"},Nd={class:"tr-steps"},Dd={class:"tr-action"},Od=["href"],Fd=k({__name:"InteractiveTools",setup(t){const n=F,a=[{id:"finder",title:"🔍 按任务找机场"},{id:"region",title:"🌐 地区资格查询"},{id:"compare",title:"⚖️ 两品牌同屏比对"},{id:"traffic",title:"🧮 流量预算计算器"},{id:"cost",title:"💰 实付款折算器"},{id:"tests",title:"📊 历史实测对照"},{id:"trouble",title:"🔧 报错排障决策"}],i=w("finder"),s=w("openai"),c=B(()=>{const q=new Set(je.filter(m=>m.platformId===s.value&&(m.result==="success"||m.result==="partial")).map(m=>m.brandId));return F.filter(m=>q.has(m.id))}),o=w("openai"),p=B(()=>o.value==="openai"||o.value==="anthropic"||o.value==="google"?[{id:"hk",name:"香港 (HK)",eligible:!1,latency:"15-35 ms",advice:"官方政策不直接支持，直连会被阻断，需配合机场高级分流规则绕行。"},{id:"jp",name:"日本 (JP)",eligible:!0,latency:"45-80 ms",advice:"官方全面支持，亚太专线出口首选，综合时延与稳定性最佳。"},{id:"sg",name:"新加坡 (SG)",eligible:!0,latency:"40-70 ms",advice:"官方全面支持，国际出口骨干汇聚，跨国办公主力。"},{id:"us",name:"美国 (US)",eligible:!0,latency:"130-190 ms",advice:"新模型首发资格区，功能最全，但物理延迟稍高。"}]:[{id:"hk",name:"香港 (HK)",eligible:!0,latency:"15-35 ms",advice:"支持港区 Netflix / Disney+ 繁体中文特有片库。"},{id:"jp",name:"日本 (JP)",eligible:!0,latency:"45-80 ms",advice:"日区动漫与独占剧集最全，需注意必须通过非自制剧播放实测。"},{id:"sg",name:"新加坡 (SG)",eligible:!0,latency:"40-70 ms",advice:"双语字幕极全，适合华语观众。"},{id:"us",name:"美国 (US)",eligible:!0,latency:"130-190 ms",advice:"片库最庞大，但对机房 IP 审查最为苛刻。"}]),d=w("lightspeed"),I=w("wgetcloud"),b=B(()=>F.find(q=>q.id===d.value)),y=B(()=>F.find(q=>q.id===I.value)),C=w(30),M=w(2),P=w(1),G=w(.5),T=B(()=>{const q=C.value*30*.08/1024,m=M.value*30*3/1024,x=P.value*30*1.5,ae=G.value*30*7;return Math.ceil(q+m+x+ae)}),_=w(99),N=w("12"),U=w("t1"),j=B(()=>{switch(U.value){case"t1":return{cause:"出口 IP 触发 Cloudflare 边缘安全规则，多因 IP 被识别为机房数据中心或滥用黑名单。",steps:["检查客户端节点出口，切换为日本或新加坡的原生/专线落地节点；","清除浏览器针对 chatgpt.com 的 Cookie 与本地储存；","确保 DNS 解析无国内污染（开启纯洁净远端 DNS 解析）。"],guideUrl:"/guides/#u03"};case"t2":return{cause:"节点出口识别处于未开放地区（如香港出口），或出口 IP 机房声誉过低被 Anthropic 拒绝服务。",steps:["严禁使用香港节点直接访问 claude.ai；","切换至美国或日本专线节点，使用无痕窗口重新认证；","若仍报错，检查客户端分流规则是否误将 Claude 流量分流到了直连。"],guideUrl:"/guides/#u01"};case"t3":return{cause:"长连接（SSE / WebSocket）被代理客户端超时中断，或节点晚高峰持续丢包。",steps:["检查代理客户端是否开启了自动断开空闲连接；","更换为 IEPL 企业级专线节点（低抖动防丢包）；","暂时关闭本地杀毒软件对网络流量的深度拦截扫描。"],guideUrl:"/guides/#u04"};case"t4":return{cause:"Netflix 识别出当前出口为商业 IDC 代理 IP，触发反代理版权保护机制。",steps:["切换机场专门标注为“流媒体解锁”或“原生 IP”的节点；","在浏览器完全退出 Netflix 账号并重新打开页面播放；","核验本站 [/tests/] 对应品牌的最新版权片播放实测。"],guideUrl:"/streaming/#s01"};case"t5":return{cause:"系统终端默认不读取全局系统代理，需手动设置终端环境变量代理。",steps:["检查代理客户端的本地 Mixed/HTTP 端口（如 7890）；","在终端配置 export https_proxy=http://127.0.0.1:7890（Windows 为 $env:https_proxy）；","测试 curl -I https://api.openai.com 验证连通性。"],guideUrl:"/guides/#u06"};default:return null}});return(q,m)=>(r(),l("div",Nc,[e("div",Dc,[(r(),l(A,null,V(a,x=>e("button",{key:x.id,class:L(["tool-tab-btn",{active:i.value===x.id}]),onClick:ae=>i.value=x.id},f(x.title),11,Oc)),64))]),i.value==="finder"?(r(),l("div",Fc,[m[14]||(m[14]=e("h4",null,"🔍 按平台与任务找机场候选",-1)),m[15]||(m[15]=e("p",{class:"tool-intro"},"选择你日常依赖的 AI 工具或视频流媒体平台，系统将从已核验实测证据库中筛选出支持该任务的机场候选。",-1)),e("div",Uc,[e("div",qc,[m[12]||(m[12]=e("label",null,"选择核心平台：",-1)),D(e("select",{"onUpdate:modelValue":m[0]||(m[0]=x=>s.value=x)},[...m[11]||(m[11]=[e("option",{value:"openai"},"ChatGPT (OpenAI)",-1),e("option",{value:"anthropic"},"Claude (Anthropic)",-1),e("option",{value:"google"},"Gemini (Google)",-1),e("option",{value:"netflix"},"Netflix 奈飞",-1)])],512),[[H,s.value]])])]),e("div",Hc,[(r(!0),l(A,null,V(c.value,x=>(r(),l("div",{key:x.id,class:"result-brand-card"},[e("div",jc,[e("strong",null,f(x.name),1),e("span",Yc,"¥"+f(x.startingPriceMonthly.toFixed(2))+"/月起",1)]),e("p",zc,f(x.summary),1),e("div",Wc,[e("span",null,"线路: "+f(x.lineType),1),e("span",null,"协议: "+f(x.protocols.join(", ")),1)]),e("div",Kc,[e("a",{href:`/brands/${x.id}/`,class:"btn-outline btn-sm"},"查看品牌档案",8,Xc),m[13]||(m[13]=e("a",{href:"/recommend/#r01",class:"btn-primary btn-sm"},"在推荐表中对比",-1))])]))),128)),c.value.length===0?(r(),l("div",Qc," 暂无该平台独立实测归档品牌，请稍后复核或查阅完整实测中心。 ")):h("",!0)])])):h("",!0),i.value==="region"?(r(),l("div",Jc,[m[19]||(m[19]=e("h4",null,"🌐 官方服务资格与地区节点匹配查询",-1)),m[20]||(m[20]=e("p",{class:"tool-intro"},"查询不同目标服务在各个国家/地区的官方支持白名单状态与推荐连接策略。",-1)),e("div",Zc,[e("div",ed,[m[17]||(m[17]=e("label",null,"选择目标服务：",-1)),D(e("select",{"onUpdate:modelValue":m[1]||(m[1]=x=>o.value=x)},[...m[16]||(m[16]=[e("option",{value:"openai"},"OpenAI / ChatGPT",-1),e("option",{value:"anthropic"},"Claude (Anthropic)",-1),e("option",{value:"google"},"Google Gemini / AI Studio",-1),e("option",{value:"netflix"},"Netflix (跨区版权库)",-1)])],512),[[H,o.value]])]),e("div",td,[e("table",null,[m[18]||(m[18]=e("thead",null,[e("tr",null,[e("th",null,"出口地区"),e("th",null,"官方白名单资格"),e("th",null,"往返时延基准"),e("th",null,"推荐场景与注意事项")])],-1)),e("tbody",null,[(r(!0),l(A,null,V(p.value,x=>(r(),l("tr",{key:x.id},[e("td",null,[e("strong",null,f(x.name),1)]),e("td",null,[e("span",{class:L(["badge",x.eligible?"badge-success":"badge-danger"])},f(x.eligible?"官方直接支持":"官方不支持(需绕行分流)"),3)]),e("td",null,f(x.latency),1),e("td",null,f(x.advice),1)]))),128))])])])])])):h("",!0),i.value==="compare"?(r(),l("div",nd,[m[32]||(m[32]=e("h4",null,"⚖️ 两品牌同条件横向对比",-1)),m[33]||(m[33]=e("p",{class:"tool-intro"},"选择两个机场品牌，在同屏客观比对协议、专线类型、起始实付款、客户端支持与实测证据覆盖。",-1)),e("div",ad,[e("div",id,[m[21]||(m[21]=e("label",null,"品牌 A：",-1)),D(e("select",{"onUpdate:modelValue":m[2]||(m[2]=x=>d.value=x)},[(r(!0),l(A,null,V(u(n),x=>(r(),l("option",{key:x.id,value:x.id},f(x.name),9,rd))),128))],512),[[H,d.value]])]),m[23]||(m[23]=e("div",{class:"sel-vs"},"VS",-1)),e("div",sd,[m[22]||(m[22]=e("label",null,"品牌 B：",-1)),D(e("select",{"onUpdate:modelValue":m[3]||(m[3]=x=>I.value=x)},[(r(!0),l(A,null,V(u(n),x=>(r(),l("option",{key:x.id,value:x.id},f(x.name),9,ld))),128))],512),[[H,I.value]])])]),b.value&&y.value?(r(),l("div",od,[e("table",null,[e("thead",null,[e("tr",null,[m[24]||(m[24]=e("th",null,"对比维度",-1)),e("th",null,f(b.value.name),1),e("th",null,f(y.value.name),1)])]),e("tbody",null,[e("tr",null,[m[25]||(m[25]=e("td",null,"运营年份",-1)),e("td",null,f(b.value.establishedYear||"未明示")+" 年",1),e("td",null,f(y.value.establishedYear||"未明示")+" 年",1)]),e("tr",null,[m[26]||(m[26]=e("td",null,"入门折算月价",-1)),e("td",null,[e("strong",cd,"¥"+f(b.value.startingPriceMonthly.toFixed(2))+" /月",1)]),e("td",null,[e("strong",dd,"¥"+f(y.value.startingPriceMonthly.toFixed(2))+" /月",1)])]),e("tr",null,[m[27]||(m[27]=e("td",null,"线路架构",-1)),e("td",null,f(b.value.lineType),1),e("td",null,f(y.value.lineType),1)]),e("tr",null,[m[28]||(m[28]=e("td",null,"支持协议",-1)),e("td",null,f(b.value.protocols.join(", ")),1),e("td",null,f(y.value.protocols.join(", ")),1)]),e("tr",null,[m[29]||(m[29]=e("td",null,"自研客户端",-1)),e("td",null,f(b.value.customClient?"✅ 提供专属端":"❌ 仅通用订阅"),1),e("td",null,f(y.value.customClient?"✅ 提供专属端":"❌ 仅通用订阅"),1)]),e("tr",null,[m[30]||(m[30]=e("td",null,"通用订阅导入",-1)),e("td",null,f(b.value.thirdPartySupport?"✅ 支持 Clash/Sing-box":"❌ 仅限自研端"),1),e("td",null,f(y.value.thirdPartySupport?"✅ 支持 Clash/Sing-box":"❌ 仅限自研端"),1)]),e("tr",null,[m[31]||(m[31]=e("td",null,"核验来源",-1)),e("td",null,[e("code",null,f(b.value.sourceRef),1)]),e("td",null,[e("code",null,f(y.value.sourceRef),1)])])])])])):h("",!0)])):h("",!0),i.value==="traffic"?(r(),l("div",ud,[m[45]||(m[45]=e("h4",null,"🧮 AI 与流媒体月度流量预算计算器",-1)),m[46]||(m[46]=e("p",{class:"tool-intro"},"纯浏览器本地计算：输入你每天的预估使用频率，估算每月大概需要的真实流量基准。",-1)),e("div",fd,[e("div",pd,[m[34]||(m[34]=e("label",null,"每天 AI 文字对话轮数 (提问/回答)：",-1)),D(e("input",{type:"number","onUpdate:modelValue":m[4]||(m[4]=x=>C.value=x),min:"0",max:"1000"},null,512),[[J,C.value,void 0,{number:!0}]]),m[35]||(m[35]=e("small",{class:"hint"},"通常 1 轮 1000 字对话约消耗 50KB ~ 100KB",-1))]),e("div",md,[m[36]||(m[36]=e("label",null,"每天 AI 上传文档/多模态图片数量：",-1)),D(e("input",{type:"number","onUpdate:modelValue":m[5]||(m[5]=x=>M.value=x),min:"0",max:"200"},null,512),[[J,M.value,void 0,{number:!0}]]),m[37]||(m[37]=e("small",{class:"hint"},"每张图或文档按平均 3MB 计算",-1))]),e("div",yd,[m[38]||(m[38]=e("label",null,"每天 YouTube/Netflix 1080P 观看小时：",-1)),D(e("input",{type:"number","onUpdate:modelValue":m[6]||(m[6]=x=>P.value=x),min:"0",max:"24",step:"0.5"},null,512),[[J,P.value,void 0,{number:!0}]]),m[39]||(m[39]=e("small",{class:"hint"},"1080P 视频约 1.5GB / 小时",-1))]),e("div",gd,[m[40]||(m[40]=e("label",null,"每天 4K Ultra HD 观看小时：",-1)),D(e("input",{type:"number","onUpdate:modelValue":m[7]||(m[7]=x=>G.value=x),min:"0",max:"24",step:"0.5"},null,512),[[J,G.value,void 0,{number:!0}]]),m[41]||(m[41]=e("small",{class:"hint"},"4K HDR 高码率约 7.0GB / 小时",-1))])]),e("div",vd,[m[44]||(m[44]=e("div",{class:"result-title"},"每月预估流量需求：",-1)),e("div",hd,[O(f(T.value)+" ",1),m[42]||(m[42]=e("span",{class:"unit"},"GB / 月",-1))]),e("div",bd,[m[43]||(m[43]=e("strong",null,"套餐选型建议：",-1)),T.value<=60?(r(),l("span",Gd,"轻度办公型，选择 50~80GB 入门版套餐（约 ¥7~15/月）即可轻松覆盖。")):T.value<=200?(r(),l("span",Cd,"中度混合型，推荐 150~250GB 档位（约 ¥20~35/月），足以覆盖晚间追剧与 AI 对话。")):(r(),l("span",Id,"重度影音/全家多屏型，建议 500GB 以上大流量专线套餐或团队定制方案。"))])])])):h("",!0),i.value==="cost"?(r(),l("div",Pd,[m[54]||(m[54]=e("h4",null,"💰 实付款与周期折算计算器",-1)),m[55]||(m[55]=e("p",{class:"tool-intro"},"防止被宣传中的“折合约 ¥5/月”误导。输入商家的总价格与计费周期，计算真实单月成本与首次资金占用。",-1)),e("div",kd,[e("div",Bd,[m[47]||(m[47]=e("label",null,"标称支付金额 (元)：",-1)),D(e("input",{type:"number","onUpdate:modelValue":m[8]||(m[8]=x=>_.value=x),min:"1",step:"1"},null,512),[[J,_.value,void 0,{number:!0}]])]),e("div",Sd,[m[49]||(m[49]=e("label",null,"结算周期：",-1)),D(e("select",{"onUpdate:modelValue":m[9]||(m[9]=x=>N.value=x)},[...m[48]||(m[48]=[te('<option value="1" data-v-3941c163>单月付 (1个月)</option><option value="3" data-v-3941c163>季付 (3个月)</option><option value="6" data-v-3941c163>半年付 (6个月)</option><option value="12" data-v-3941c163>年付 (12个月)</option><option value="24" data-v-3941c163>两年付 (24个月)</option>',5)])],512),[[H,N.value]])])]),e("div",Td,[e("div",_d,[m[50]||(m[50]=e("div",{class:"k"},"首次实付扣费",-1)),e("div",Md,"¥"+f(_.value),1),m[51]||(m[51]=e("div",{class:"sub"},"钱包首期直接支出",-1))]),e("div",wd,[m[52]||(m[52]=e("div",{class:"k"},"折算月均成本",-1)),e("div",$d,"¥"+f((_.value/Number(N.value)).toFixed(2)),1),m[53]||(m[53]=e("div",{class:"sub"},"实际每月摊销",-1))])]),Number(N.value)>=12?(r(),l("div",Rd," ⚠️ 风险提醒：年付虽月均低，但若服务商中途线路劣化或跑路，沉没成本较高。建议新手首月先以月付体验验证常用任务后再考虑长周期。 ")):h("",!0)])):h("",!0),i.value==="tests"?(r(),l("div",xd,[m[56]||(m[56]=e("h4",null,"📊 测试记录多维筛选",-1)),m[57]||(m[57]=e("p",{class:"tool-intro"},"按测试平台、地区及结果筛选本站收录的真实抓包与连通性记录：",-1)),$(Ye)])):h("",!0),i.value==="trouble"?(r(),l("div",Ad,[m[62]||(m[62]=e("h4",null,"🔧 按错误现象选择排障路径",-1)),m[63]||(m[63]=e("p",{class:"tool-intro"},"根据你在使用 AI 或流媒体时遇到的具体错误提示，匹配推荐排查步骤：",-1)),e("div",Ld,[m[59]||(m[59]=e("label",null,"选择你遇到的现象：",-1)),D(e("select",{"onUpdate:modelValue":m[10]||(m[10]=x=>U.value=x)},[...m[58]||(m[58]=[te('<option value="t1" data-v-3941c163>ChatGPT 登录提示 &quot;Access Denied&quot; (1020 / Cloudflare 拦截)</option><option value="t2" data-v-3941c163>Claude 提示 &quot;Not available in your region&quot;</option><option value="t3" data-v-3941c163>对话生成中途转圈，提示 &quot;Network Error&quot; 断流</option><option value="t4" data-v-3941c163>Netflix 提示 &quot;您似乎正在使用代理或解锁工具&quot;</option><option value="t5" data-v-3941c163>终端/命令行运行 Python/Node SDK 报错 Connection Refused</option>',5)])],512),[[H,U.value]])]),j.value?(r(),l("div",Vd,[e("div",Ed,[m[60]||(m[60]=e("strong",null,"根本原因定位：",-1)),O(" "+f(j.value.cause),1)]),e("div",Nd,[m[61]||(m[61]=e("strong",null,"标准化排障步骤：",-1)),e("ol",null,[(r(!0),l(A,null,V(j.value.steps,(x,ae)=>(r(),l("li",{key:ae},f(x),1))),128))])]),e("div",Dd,[e("a",{href:j.value.guideUrl,class:"btn-primary btn-sm"},"查看详细图文排障指南 →",8,Od)])])):h("",!0)])):h("",!0)]))}}),Ud=S(Fd,[["__scopeId","data-v-3941c163"]]),qd=[{id:"clash-verge-rev",name:"Clash Verge Rev",platforms:["windows","macos","linux"],core:"Mihomo (原 Meta)",coreType:"mihomo",pricing:"free",pricingNote:"开源免费",level:"beginner",levelNote:"新手通用 / 进阶首选",features:["Mihomo最新内核","TUN虚拟网卡驱动","智能规则分流","原生支持VLESS/Reality/Hysteria2","多订阅合并管理"],downloadType:"github",downloadUrl:"https://github.com/clash-verge-rev/clash-verge-rev",warning:null,status:"active",summary:"当前活跃度最高、界面最美观的跨平台 Clash 桌面客户端。内置 Wintun 驱动与智能分流，完美支持现代高性能协议。"},{id:"v2rayn",name:"v2rayN",platforms:["windows","macos","linux"],core:"Xray / sing-box 多核心",coreType:"xray",pricing:"free",pricingNote:"开源免费",level:"intermediate",levelNote:"协议极全 / 节点批量管理",features:["支持Xray/sing-box原生核心","全协议覆盖(VLESS/VMess/Trojan/SS/Hysteria2)","批量真连接延迟测试","多核心灵活切换"],downloadType:"github",downloadUrl:"https://github.com/2dust/v2rayN",warning:null,status:"active",summary:"Windows 平台最老牌且功能最强劲的代理客户端之一。多核心架构支持所有前沿协议，适合节点丰富、追求底层调试的进阶用户。"},{id:"flclash",name:"FlClash",platforms:["windows","android","macos","linux"],core:"Mihomo (原 Meta)",coreType:"mihomo",pricing:"free",pricingNote:"开源免费",level:"beginner",levelNote:"极简清新 / 跨平台一致体验",features:["基于Flutter构建","跨四大平台UI高度一致","轻量低内存占用","支持Clash配置格式","一键更新订阅"],downloadType:"github",downloadUrl:"https://github.com/chen08209/FlClash",warning:null,status:"active",summary:"基于 Flutter 开发的现代跨平台代理客户端，在 Windows、Android、macOS 与 Linux 上拥有一致的极简交互与优秀的能效表现。"},{id:"clash-nyanpasu",name:"Clash Nyanpasu",platforms:["windows","macos","linux"],core:"Mihomo / Clash 核心",coreType:"mihomo",pricing:"free",pricingNote:"开源免费",level:"intermediate",levelNote:"二次元极简 / 模块化配置",features:["Rust+Tauri轻量架构","多内核切换支持","规则配置增强与覆盖","现代自适应深浅色主题"],downloadType:"github",downloadUrl:"https://github.com/LibNyanpasu/clash-nyanpasu",warning:null,status:"active",summary:"基于 Tauri 架构开发的现代化客户端，内存占用低，提供丰富的配置覆写与内核切换功能。"},{id:"hiddify",name:"Hiddify",platforms:["windows","android","ios","macos","linux"],core:"sing-box 多协议核心",coreType:"sing-box",pricing:"free",pricingNote:"开源免费",level:"beginner",levelNote:"零门槛开箱即用 / 全平台覆盖",features:["支持几乎所有现代协议","自动优选低延迟节点","一键快速连接","多语言与全平台覆盖","原生支持多订阅格式"],downloadType:"github",downloadUrl:"https://github.com/hiddify/hiddify-app",warning:null,status:"active",summary:"面向全球抗审查设计的跨平台多协议客户端，支持 Windows、Android、iOS、macOS 与 Linux，对初学者极其友好。"},{id:"karing",name:"Karing",platforms:["windows","android","ios","macos","linux"],core:"sing-box 内核",coreType:"sing-box",pricing:"free",pricingNote:"开源免费 (iOS免费上架)",level:"beginner",levelNote:"多订阅聚合 / 跨设备使用",features:["兼容Clash/V2ray/sing-box多种订阅","智能分流规则集","内置常用平台解锁规则","iOS国区与外区均可下载"],downloadType:"github",downloadUrl:"https://github.com/KaringX/karing",warning:null,status:"active",summary:"基于 sing-box 打造的优秀跨平台客户端，支持同时导入多家机场订阅并统一路由，iOS 端免费上架是其极大优势。"},{id:"clash-mi",name:"Clash Mi",platforms:["windows","android","ios","macos","linux"],core:"Mihomo 内核",coreType:"mihomo",pricing:"free",pricingNote:"开源免费",level:"beginner",levelNote:"原生Clash配置兼容",features:["Mihomo标准核心","Clash YAML通用语法","简洁明快的操作逻辑","跨平台统一体验"],downloadType:"github",downloadUrl:"https://github.com/Z-Siqi/Clash-Mi",warning:null,status:"active",summary:"轻量级跨平台客户端，严格遵循 Clash 配置标准，适合习惯经典规则语法且追求跨端一致的用户。"},{id:"mihomo-party",name:"Mihomo Party",platforms:["windows"],core:"Mihomo 内核",coreType:"mihomo",pricing:"free",pricingNote:"开源免费",level:"intermediate",levelNote:"派对风格配置管理",features:["图形化配置覆盖","分流策略组直观调节","订阅批量管理"],downloadType:"github",downloadUrl:"https://github.com/mihomo-party-org/mihomo-party",warning:"项目维护状态时有波动，建议优先作为历史配置迁移工具使用，不宜未经核实就设为长期主力首选。",status:"maintenance_warning",summary:"针对 Mihomo 深度优化的图形化桌面端，适合偏好直观分流管理的用户，但需注意社区上游活跃周期。"},{id:"v2rayng",name:"v2rayNG",platforms:["android"],core:"Xray 原生核心",coreType:"xray",pricing:"free",pricingNote:"开源免费",level:"beginner",levelNote:"安卓装机必备 / 稳定成熟",features:["支持单节点与订阅URL","分应用代理开关","支持Reality/VLESS/Hysteria2","原生安卓 Material 规范"],downloadType:"github",downloadUrl:"https://github.com/2dust/v2rayNG",warning:null,status:"active",summary:"安卓端装机量最大、兼容性最广的经典客户端。支持极速剪贴板导入、分应用精确分流与低功耗常驻后台。"},{id:"clash-meta-for-android",name:"Clash Meta for Android (CMFA)",platforms:["android"],core:"Mihomo (原 Meta)",coreType:"mihomo",pricing:"free",pricingNote:"开源免费",level:"intermediate",levelNote:"规则分流王者 / 策略组切换",features:["完整的Clash规则分流","策略组节点测速优选","丰富的分流规则Providers","强大的DNS分流与防污染"],downloadType:"github",downloadUrl:"https://github.com/MetaCubeX/ClashMetaForAndroid",warning:null,status:"active",summary:"安卓生态下功能最完整的 Clash 客户端分支，支持复杂的复合分流策略组与一键测速切换。"},{id:"nekobox-android",name:"NekoBox for Android",platforms:["android"],core:"sing-box 扩展核心",coreType:"sing-box",pricing:"free",pricingNote:"开源免费 (认准GitHub)",level:"advanced",levelNote:"极客高阶玩家",features:["支持多种原生与实验性协议","强大的路由链设置","底层网络参数细致调优"],downloadType:"github",downloadUrl:"https://github.com/MatsuriDayo/NekoBoxForAndroid",warning:"【极高安全警示】官方项目已提示维护资源有限，且特别警告切勿使用 Google Play 商店中已被第三方控制的同名版本，谨防恶意木马与数据窃取，请仅认准官方 GitHub Releases 源代码构建包！",status:"maintenance_warning",summary:"功能极为硬核的 sing-box 系安卓客户端，适合深入玩机党。下载时务必认准官方 GitHub，严禁使用非官方应用市场版本。"},{id:"sing-box-android",name:"sing-box for Android (SFA)",platforms:["android"],core:"sing-box 官方核心",coreType:"sing-box",pricing:"free",pricingNote:"开源免费",level:"intermediate",levelNote:"原生配置基准",features:["官方第一方维护","极低系统资源占用","原生JSON配置","极速冷启动"],downloadType:"official",downloadUrl:"https://sing-box.sagernet.org/",warning:null,status:"active",summary:"SagerNet 官方出品的 Android 原生客户端，资源调度极优，是体验 sing-box 最新协议与特性的标准载体。"},{id:"shadowrocket",name:"Shadowrocket (小火箭)",platforms:["ios"],core:"专有规则核心",coreType:"proprietary",pricing:"paid",pricingNote:"美区 App Store $2.99 买断",level:"beginner",levelNote:"iOS首选 / 扫码即连",features:["支持全协议导入(SS/VMess/Trojan/VLESS/Hysteria2)","扫描二维码秒级添加","场景化自动分流规则","请求日志抓包与节点自动测速"],downloadType:"appstore",downloadUrl:"https://apps.apple.com/app/shadowrocket/id932747118",warning:"【安全防骗必读】中国大陆 App Store 无法搜索下载，需使用美区/港区等外区 Apple ID 购买。切勿在 iOS 系统的【设置 -> iCloud】中登录第三方共享账号，否则极易导致设备被恶意锁机勒索！仅需在【App Store】应用内登录外区账号下载。",status:"active",summary:"iOS 平台普及率最高、口碑最扎实的代理神器。协议支持极其全面，扫码配置体验无缝，综合性价比极高。"},{id:"stash",name:"Stash",platforms:["ios","macos"],core:"Clash / Mihomo 兼容核心",coreType:"mihomo",pricing:"paid",pricingNote:"美区 App Store $3.99 买断",level:"intermediate",levelNote:"iOS上的Clash体验",features:["完美兼容Clash YAML配置","覆写功能(Overrides)","优雅的策略组切换UI","按需连接(On Demand)自动化"],downloadType:"appstore",downloadUrl:"https://apps.apple.com/app/stash-rule-based-proxy/id1596063718",warning:"需通过外区 Apple ID 购买。界面设计精致，完美适配 iOS 动态岛与控制中心。",status:"active",summary:"专为 iOS/macOS 打造的 Clash 风格网络代理工具，支持强大的策略组、规则集与按需自动化连接。"},{id:"quantumult-x",name:"Quantumult X (圈 X)",platforms:["ios"],core:"专有规则核心",coreType:"proprietary",pricing:"paid",pricingNote:"美区 App Store $7.99 买断",level:"advanced",levelNote:"高级分流 / 脚本自动化",features:["精准分流与请求重写(Rewrite)","强大JavaScript脚本扩展","高度定制化节点测速与图标","低功耗长连接保活"],downloadType:"appstore",downloadUrl:"https://apps.apple.com/app/quantumult-x/id1453926894",warning:"学习成本相对较高，适合有一定规则编写基础与脚本调试需求的高级玩家。",status:"active",summary:"iOS 平台久负盛名的网络瑞士军刀，界面优雅细腻，配合自定义重写与自动化脚本能实现极其强大的定制能力。"},{id:"surge-ios",name:"Surge 5 (iOS)",platforms:["ios"],core:"Surge 专有核心",coreType:"proprietary",pricing:"paid",pricingNote:"免费下载 + 应用内高级买断 ($49.99+)",level:"advanced",levelNote:"专业开发者 / 网络调试旗舰",features:["企业级网络抓包调试","MitM解密与请求深度分析","跨设备网关中继代理","极其精细的规则与策略编排"],downloadType:"appstore",downloadUrl:"https://apps.apple.com/app/surge-5/id1442620678",warning:"定位为专业网络开发与调试工具，价格门槛较高，普通机场代理翻墙用户通常推荐性价比更高的 Shadowrocket 或 Stash。",status:"active",summary:"苹果生态下首屈一指的高级网络调试与代理利器，代表了 iOS 网络处理能力的工业级最高标杆。"},{id:"sing-box-ios",name:"sing-box for iOS (SFI)",platforms:["ios"],core:"sing-box 官方核心",coreType:"sing-box",pricing:"free",pricingNote:"免费下载",level:"intermediate",levelNote:"原生通用轻量端",features:["官方规范实现","规则集极速匹配","纯净无广告","原生多协议支持"],downloadType:"official",downloadUrl:"https://sing-box.sagernet.org/",warning:"可通过 TestFlight 或外区 App Store 获取最新构建。",status:"active",summary:"SagerNet 官方出品的 iOS 原生客户端，遵循现代 sing-box 配置规范，响应迅速且零商业冗余。"},{id:"streisand",name:"Streisand",platforms:["ios"],core:"多协议核心",coreType:"sing-box",pricing:"free",pricingNote:"外区 App Store 免费下载",level:"beginner",levelNote:"极简免费备用",features:["支持VLESS/VMess/Trojan/Hysteria","扫码导入节点","界面简洁无门槛"],downloadType:"appstore",downloadUrl:"https://apps.apple.com/app/streisand/id6450534064",warning:"适合作为没有付费工具时的临时备用方案，高级分流规则不如小火箭丰富。",status:"active",summary:"iOS 平台上一款优秀的免费代理工具，广泛支持多种前沿协议，适合新手零预算起步。"},{id:"potatso",name:"Potatso",platforms:["ios"],core:"经典代理核心",coreType:"proprietary",pricing:"free",pricingNote:"外区 App Store 免费下载",level:"beginner",levelNote:"经典极简基础工具",features:["支持Shadowsocks/Socks5/HTTP","基础分流规则","扫码添加节点"],downloadType:"appstore",downloadUrl:"https://apps.apple.com/app/potatso/id1239860606",warning:"协议支持主要局限于传统 SS 协议，不原生支持现代 VLESS Reality 等伪装协议。",status:"active",summary:"老牌轻量级代理工具，适合传统协议节点的极简连接。"},{id:"oneclick",name:"OneClick",platforms:["ios"],core:"多协议核心",coreType:"proprietary",pricing:"free",pricingNote:"外区 App Store 免费下载",level:"beginner",levelNote:"一键快速连接",features:["支持VMess/Shadowsocks/Trojan","订阅链接解析","基础分流配置"],downloadType:"appstore",downloadUrl:"https://apps.apple.com/app/oneclick-safe-easy-proxy/id1545555197",warning:null,status:"active",summary:"针对新手设计的轻量工具，无需繁杂配置即可快速接入节点。"},{id:"surge-mac",name:"Surge for Mac",platforms:["macos"],core:"Surge 专有核心",coreType:"proprietary",pricing:"paid",pricingNote:"商业付费买断 ($49.99~$99.99)",level:"advanced",levelNote:"Mac平台性能天花板",features:["针对Apple Silicon深度原生优化","增强模式全局接管","专业网络请求监测大盘","网关网桥中继模式"],downloadType:"official",downloadUrl:"https://nssurge.com/",warning:"高阶商业软件，需在官网购买授权激活。适合对网络稳定性与调试分析有苛刻要求的专业用户。",status:"active",summary:"macOS 上无出其右的旗舰级代理与网络分析工具，以极低的 CPU 占用和无可挑剔的稳定性著称。"},{id:"sing-box-macos",name:"sing-box for macOS (SFM)",platforms:["macos"],core:"sing-box 官方核心",coreType:"sing-box",pricing:"free",pricingNote:"开源免费",level:"intermediate",levelNote:"原生轻量菜单栏客户端",features:["原生状态栏常驻","Apple Silicon深度适配","原生JSON配置驱动","无前端冗余消耗"],downloadType:"official",downloadUrl:"https://sing-box.sagernet.org/",warning:"需要理解 sing-box 基础配置结构。",status:"active",summary:"针对 Mac 设计的状态栏极简工具，低调运行在后台，是极客用户的优雅选择。"},{id:"v2raya",name:"v2rayA",platforms:["linux","router"],core:"Xray / sing-box 核心",coreType:"xray",pricing:"free",pricingNote:"开源免费",level:"intermediate",levelNote:"WebUI / 透明代理 / 主机与网关",features:["Web浏览器可视化控制台","透明代理(Redir / TProxy)","支持无桌面的Linux服务器","分流规则防污染","支持Docker一键部署"],downloadType:"github",downloadUrl:"https://github.com/v2rayA/v2rayA",warning:"默认通过本地 2017 端口 Web 界面管理，适合 Linux 工作站、VPS、NAS 与网关服务器。",status:"active",summary:"Linux 生态下极其优秀的透明代理解决方案，拥有清晰易用的 WebUI，特别适合服务器、树莓派与软路由环境。"},{id:"sing-box-desktop",name:"sing-box for Desktop",platforms:["linux"],core:"sing-box 官方核心",coreType:"sing-box",pricing:"free",pricingNote:"开源免费",level:"advanced",levelNote:"CLI系统服务 / 官方桌面端",features:["systemd服务化守护运行","极高吞吐与微秒级响应","完备的Linux平台安装包","完全通过代码配置文件管理"],downloadType:"official",downloadUrl:"https://sing-box.sagernet.org/",warning:"适合熟悉 Linux 命令行与系统服务配置的高级开发者。",status:"active",summary:"sing-box 官方在 Linux 环境下的高性能载体，能作为系统级 Daemon 服务静默护航所有网络出口。"},{id:"openclash",name:"OpenClash",platforms:["router"],core:"Mihomo / Clash 核心",coreType:"mihomo",pricing:"free",pricingNote:"开源免费",level:"advanced",levelNote:"全屋设备无感翻墙首选",features:["LuCI图形化界面管理","Fake-IP与Redir-Host双模式","软路由全局透明代理","规则与策略组自定义覆盖","精细化防DNS污染"],downloadType:"github",downloadUrl:"https://github.com/vernesong/OpenClash",warning:"安装前需核查 OpenWrt 固件存储空间与内核模块依赖（如 kmod-tun、iptables/nftables），避免固件空间不足导致系统砖化。",status:"active",summary:"OpenWrt 软路由上装机量最高、功能极其全面的规则代理插件，实现全屋手机、电视、PC 无感智能分流。"},{id:"passwall2",name:"PassWall2",platforms:["router"],core:"Xray / sing-box 多核心",coreType:"xray",pricing:"free",pricingNote:"开源免费",level:"advanced",levelNote:"节点冗余备用与分流专家",features:["支持多节点主备自动切换","支持分流节点多出口分流","原生集成Xray/sing-box内核","中国列表与海外分流极致分明"],downloadType:"github",downloadUrl:"https://github.com/xiaorouji/openwrt-passwall",warning:"配置项较多，适合对路由防火墙与 DNS 链条有深入理解的用户。",status:"active",summary:"专为路由环境打磨的经典代理插件，以节点自动健康检查、故障平滑转移与双分流策略见长。"},{id:"nikki",name:"Nikki",platforms:["router"],core:"Mihomo 内核",coreType:"mihomo",pricing:"free",pricingNote:"开源免费",level:"advanced",levelNote:"新版OpenWrt现代轻量代理",features:["全新设计的现代LuCI界面","原生配合nftables防火墙","Mihomo内核透明代理","低CPU消耗与极速冷启"],downloadType:"github",downloadUrl:"https://github.com/nikkinikki-org/OpenWrt-nikki",warning:"【固件版本硬性限制】Nikki 项目明确要求 OpenWrt 24.10 及以上版本！旧版固件缺少 nftables 高级流控特性，请勿强行在旧版系统安装。",status:"active",summary:"新一代 OpenWrt 路由透明代理利器，全面拥抱 nftables 防火墙架构，代码精炼且现代感十足。"},{id:"homeproxy",name:"HomeProxy",platforms:["router"],core:"sing-box 官方核心",coreType:"sing-box",pricing:"free",pricingNote:"开源免费",level:"intermediate",levelNote:"ImmortalWrt官方推荐",features:["ImmortalWrt深度原生集成","sing-box纯净驱动","轻量极简无冗余设计","DNS防劫持原生处理"],downloadType:"github",downloadUrl:"https://github.com/immortalwrt/homeproxy",warning:"配合 ImmortalWrt 固件体验最佳，非官方构建固件需手动配置 sing-box 基础环境。",status:"active",summary:"ImmortalWrt 社区重点推进的轻量级软路由代理插件，底层依托 sing-box，兼具优雅配置与高吞吐性能。"}],Hd={class:"client-matrix-container"},jd={class:"matrix-header"},Yd={class:"match-count-badge"},zd={class:"highlight-count"},Wd={class:"matrix-filters"},Kd={class:"platform-tabs-row"},Xd={class:"platform-tabs"},Qd=["onClick"],Jd={class:"tab-icon"},Zd={class:"filter-dropdowns-grid"},eu={class:"filter-select-group"},tu=["value"],nu={class:"filter-select-group"},au=["value"],iu={class:"filter-select-group"},ru=["value"],su={class:"filter-select-group"},lu={key:0,class:"empty-matrix-state"},ou={key:1,class:"client-grid"},cu={class:"client-card-body"},du={class:"client-header"},uu={class:"name-box"},fu={class:"client-name"},pu={key:0,class:"maintenance-badge"},mu={class:"client-meta"},yu={class:"meta-val"},gu={class:"meta-val"},vu={class:"platforms-row"},hu={class:"client-summary"},bu={class:"features-row"},Gu={key:0,class:"client-warning-box"},Cu={class:"client-footer"},Iu={class:"source-label"},Pu=["href"],ku=k({__name:"ClientMatrix",setup(t){const n=w(qd),a=w("all"),i=w("all"),s=w("all"),c=w("all"),o=w(""),p=[{id:"all",label:"全部平台",icon:"🌐"},{id:"windows",label:"Windows",icon:"💻"},{id:"android",label:"Android",icon:"🤖"},{id:"ios",label:"iOS / iPadOS",icon:"📱"},{id:"macos",label:"macOS",icon:"🍎"},{id:"linux",label:"Linux",icon:"🐧"},{id:"router",label:"OpenWrt 软路由",icon:"📡"}],d=[{id:"all",label:"全部内核"},{id:"mihomo",label:"Mihomo (原 Meta)"},{id:"sing-box",label:"sing-box 官方/衍生"},{id:"xray",label:"Xray 协议系"},{id:"proprietary",label:"专有/商业规则核心"}],I=[{id:"all",label:"全部资费"},{id:"free",label:"完全免费 / 开源"},{id:"paid",label:"商业付费 (买断/内购)"}],b=[{id:"all",label:"全部上手难度"},{id:"beginner",label:"新手开箱即用"},{id:"intermediate",label:"中阶通用进阶"},{id:"advanced",label:"高阶极客/开发者"}],y=B(()=>n.value.filter(G=>{if(a.value!=="all"&&!G.platforms.includes(a.value)||i.value!=="all"&&G.coreType!==i.value||s.value!=="all"&&G.pricing!==s.value||c.value!=="all"&&G.level!==c.value)return!1;if(o.value.trim()){const T=o.value.toLowerCase().trim(),_=G.name.toLowerCase().includes(T),N=G.core.toLowerCase().includes(T),U=G.summary.toLowerCase().includes(T),j=G.features.some(q=>q.toLowerCase().includes(T));if(!_&&!N&&!U&&!j)return!1}return!0}));function C(G){switch(G){case"windows":return{label:"Win",class:"badge-win"};case"android":return{label:"Android",class:"badge-android"};case"ios":return{label:"iOS",class:"badge-ios"};case"macos":return{label:"macOS",class:"badge-macos"};case"linux":return{label:"Linux",class:"badge-linux"};case"router":return{label:"软路由",class:"badge-router"};default:return{label:G,class:"badge-default"}}}function M(G){switch(G){case"github":return"GitHub 官方发布";case"appstore":return"Apple App Store";case"official":return"官方站点与下载";default:return"官方安全源"}}function P(){a.value="all",i.value="all",s.value="all",c.value="all",o.value=""}return(G,T)=>(r(),l("div",Hd,[e("div",jd,[T[6]||(T[6]=e("div",{class:"header-titles"},[e("h3",{class:"header-title"}," ⚡ 2026 跨平台机场代理客户端交互检索中心 "),e("p",{class:"header-desc"}," 收录 Windows、Android、iOS、macOS、Linux 与 OpenWrt 软路由 28 款主流开源及合规客户端，所有下载直通官方安全发布源。 ")],-1)),e("div",Yd,[T[4]||(T[4]=O(" 共匹配到 ",-1)),e("strong",zd,f(y.value.length),1),T[5]||(T[5]=O(" 款客户端 ",-1))])]),e("div",Wd,[e("div",Kd,[T[7]||(T[7]=e("span",{class:"filter-label-txt"},"平台筛选:",-1)),e("div",Xd,[(r(),l(A,null,V(p,_=>e("button",{key:_.id,onClick:N=>a.value=_.id,class:L(["tab-btn",{active:a.value===_.id}])},[e("span",Jd,f(_.icon),1),e("span",null,f(_.label),1)],10,Qd)),64))])]),e("div",Zd,[e("div",eu,[T[8]||(T[8]=e("label",{class:"dropdown-label"},"底层内核",-1)),D(e("select",{"onUpdate:modelValue":T[0]||(T[0]=_=>i.value=_),class:"select-input"},[(r(),l(A,null,V(d,_=>e("option",{key:_.id,value:_.id},f(_.label),9,tu)),64))],512),[[H,i.value]])]),e("div",nu,[T[9]||(T[9]=e("label",{class:"dropdown-label"},"资费授权",-1)),D(e("select",{"onUpdate:modelValue":T[1]||(T[1]=_=>s.value=_),class:"select-input"},[(r(),l(A,null,V(I,_=>e("option",{key:_.id,value:_.id},f(_.label),9,au)),64))],512),[[H,s.value]])]),e("div",iu,[T[10]||(T[10]=e("label",{class:"dropdown-label"},"上手难度",-1)),D(e("select",{"onUpdate:modelValue":T[2]||(T[2]=_=>c.value=_),class:"select-input"},[(r(),l(A,null,V(b,_=>e("option",{key:_.id,value:_.id},f(_.label),9,ru)),64))],512),[[H,c.value]])]),e("div",su,[T[11]||(T[11]=e("label",{class:"dropdown-label"},"快速检索",-1)),D(e("input",{"onUpdate:modelValue":T[3]||(T[3]=_=>o.value=_),type:"text",placeholder:"搜索客户端名、内核、协议...",class:"text-input"},null,512),[[J,o.value]])])])]),y.value.length===0?(r(),l("div",lu,[T[12]||(T[12]=e("div",{class:"empty-icon"},"🔍",-1)),T[13]||(T[13]=e("p",{class:"empty-text"},"未找到符合当前组合条件的代理客户端",-1)),e("button",{onClick:P,class:"btn-reset"}," 重置所有筛选条件 ")])):(r(),l("div",ou,[(r(!0),l(A,null,V(y.value,_=>(r(),l("div",{key:_.id,class:"client-card"},[e("div",cu,[e("div",du,[e("div",uu,[e("h4",fu,[O(f(_.name)+" ",1),_.status==="maintenance_warning"?(r(),l("span",pu," 维护预警 ")):h("",!0)]),e("p",mu,[T[14]||(T[14]=O(" 核心: ",-1)),e("span",yu,f(_.core),1),T[15]||(T[15]=e("span",{class:"meta-sep"},"|",-1)),T[16]||(T[16]=O(" 上手: ",-1)),e("span",gu,f(_.levelNote),1)])]),e("span",{class:L(["pricing-badge",_.pricing==="free"?"pricing-free":"pricing-paid"])},f(_.pricingNote),3)]),e("div",vu,[(r(!0),l(A,null,V(_.platforms,N=>(r(),l("span",{key:N,class:L(["plat-badge",C(N).class])},f(C(N).label),3))),128))]),e("p",hu,f(_.summary),1),e("div",bu,[(r(!0),l(A,null,V(_.features,N=>(r(),l("span",{key:N,class:"feature-tag"}," ✓ "+f(N),1))),128))]),_.warning?(r(),l("div",Gu," ⚠️ "+f(_.warning),1)):h("",!0)]),e("div",Cu,[e("span",Iu," 渠道: "+f(M(_.downloadType)),1),e("a",{href:_.downloadUrl,target:"_blank",rel:"nofollow noopener noreferrer",class:"download-btn"},[...T[17]||(T[17]=[e("span",null,"访问官方项目/下载",-1),e("span",{class:"arrow-icon"},"↗",-1)])],8,Pu)])]))),128))]))]))}}),Bu=S(ku,[["__scopeId","data-v-7bdf60dc"]]),Su={class:"search-widget-wrapper"},Tu={class:"quick-keywords-bar"},_u={class:"quick-pills"},Mu=["onClick"],wu={class:"pagefind-container"},$u={key:0,class:"search-loading-hint"},Ru=k({__name:"SearchWidget",setup(t){const n=w(!0);let a=null;const i=["光速云","WgetCloud","微风网络","飞猫云","ChatGPT","Claude 3.5","Netflix 4K","IEPL 专线","客户端配置","优惠码 AMM","晚高峰 MTR"];function s(d){return new Promise(I=>{if(document.querySelector(`link[href="${d}"]`)){I();return}const b=document.createElement("link");b.rel="stylesheet",b.href=d,b.onload=()=>I(),b.onerror=()=>I(),document.head.appendChild(b)})}function c(d){return new Promise((I,b)=>{if(window.PagefindUI){I();return}const y=document.querySelector(`script[src="${d}"]`);if(y){y.addEventListener("load",()=>I()),y.addEventListener("error",()=>b());return}const C=document.createElement("script");C.src=d,C.async=!0,C.onload=()=>I(),C.onerror=M=>b(M),document.body.appendChild(C)})}function o(){const d=document.getElementById("pagefind-search-root");if(d){d.innerHTML="";try{window.PagefindUI&&(a=new window.PagefindUI({element:"#pagefind-search-root",bundlePath:"/pagefind/",resetStyles:!1,showImages:!1,showSubResults:!0,autofocus:!0,debounceTimeoutMs:200,translations:{placeholder:"输入品牌名、AI平台、协议、地区或实测问题搜索...",clear_search:"清除",load_more:"加载更多结果",search_label:"全站检索",filters_label:"维度筛选",zero_results:'未找到匹配 "[SEARCH_TERM]" 的相关评测内容，建议尝试更换关键词',many_results:"找到 [COUNT] 条相关评测与深度指南",one_result:"找到 1 条相关评测记录",alt_search:"未找到直接匹配，建议尝试搜索：[SEARCH_TERM]",search_suggestion:"推荐相关搜索：",searching:"正在极速检索全站知识库..."}}),n.value=!1)}catch(I){console.error("Failed to initialize PagefindUI:",I),n.value=!1}}}function p(d){if(a&&typeof a.triggerSearch=="function")a.triggerSearch(d);else{const I=document.querySelector("#pagefind-search-root input");I&&(I.value=d,I.dispatchEvent(new Event("input",{bubbles:!0})),I.focus())}}return K(async()=>{try{await s("/pagefind/pagefind-ui.css"),await c("/pagefind/pagefind-ui.js"),o()}catch(d){console.warn("Pagefind static assets loading warning:",d),n.value=!1}}),le(()=>{a&&typeof a.destroy=="function"&&(a.destroy(),a=null)}),(d,I)=>(r(),l("div",Su,[e("div",Tu,[I[0]||(I[0]=e("span",{class:"quick-label"},"⚡ 常用高频推荐词：",-1)),e("div",_u,[(r(),l(A,null,V(i,b=>e("button",{key:b,class:"quick-kw-btn",onClick:y=>p(b)},f(b),9,Mu)),64))])]),e("div",wu,[I[2]||(I[2]=e("div",{id:"pagefind-search-root"},null,-1)),n.value?(r(),l("div",$u,[...I[1]||(I[1]=[e("div",{class:"loading-spinner"},null,-1),e("span",null,"正在载入站内全文静态索引数据库...",-1)])])):h("",!0)])]))}}),xu=S(Ru,[["__scopeId","data-v-3ac3f749"]]),Lu={extends:qe,Layout:zr,enhanceApp({app:t}){t.component("BrandCard",pl),t.component("PlanTable",$l),t.component("PlatformTaskMatrix",Ye),t.component("EvidenceBadge",He),t.component("RegionSelector",Io),t.component("TestReport",Vo),t.component("SourceNote",Uo),t.component("OfferCard",dc),t.component("DecisionTree",Ic),t.component("FAQBlock",wc),t.component("RelatedLinks",Ec),t.component("InteractiveTools",Ud),t.component("ClientMatrix",Bu),t.component("SearchWidget",xu)}};export{Lu as R};
