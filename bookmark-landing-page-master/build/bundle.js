var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function l(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t){e.appendChild(t)}function o(e,t,n){e.insertBefore(t,n||null)}function r(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function u(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function d(e){return document.createTextNode(e)}function h(){return d(" ")}function f(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function g(e,t){e.value=null==t?"":t}let p;function _(e){p=e}const w=[],y=[],b=[],L=[],C=Promise.resolve();let k=!1;function $(e){b.push(e)}let x=!1;const M=new Set;function z(){if(!x){x=!0;do{for(let e=0;e<w.length;e+=1){const t=w[e];_(t),F(t.$$)}for(w.length=0;y.length;)y.pop()();for(let e=0;e<b.length;e+=1){const t=b[e];M.has(t)||(M.add(t),t())}b.length=0}while(w.length);for(;L.length;)L.pop()();k=!1,x=!1,M.clear()}}function F(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}const q=new Set;let H;function A(e,t){e&&e.i&&(q.delete(e),e.i(t))}function S(e,t,n,s){if(e&&e.o){if(q.has(e))return;q.add(e),H.c.push(()=>{q.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function E(e,t){e.d(1),t.delete(e.key)}function Z(e,t,n,s,l,i,a,o,r,c,u,d){let h=e.length,f=i.length,m=h;const v={};for(;m--;)v[e[m].key]=m;const g=[],p=new Map,_=new Map;for(m=f;m--;){const e=d(l,i,m),o=n(e);let r=a.get(o);r?s&&r.p(e,t):(r=c(o,e),r.c()),p.set(o,g[m]=r),o in v&&_.set(o,Math.abs(m-v[o]))}const w=new Set,y=new Set;function b(e){A(e,1),e.m(o,u),a.set(e.key,e),u=e.first,f--}for(;h&&f;){const t=g[f-1],n=e[h-1],s=t.key,l=n.key;t===n?(u=t.first,h--,f--):p.has(l)?!a.has(s)||w.has(s)?b(t):y.has(l)?h--:_.get(s)>_.get(l)?(y.add(s),b(t)):(w.add(l),h--):(r(n,a),h--)}for(;h--;){const t=e[h];p.has(t.key)||r(t,a)}for(;f;)b(g[f-1]);return g}function T(e){e&&e.c()}function V(e,n,i){const{fragment:a,on_mount:o,on_destroy:r,after_update:c}=e.$$;a&&a.m(n,i),$(()=>{const n=o.map(t).filter(l);r?r.push(...n):s(n),e.$$.on_mount=[]}),c.forEach($)}function B(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function O(e,t){-1===e.$$.dirty[0]&&(w.push(e),k||(k=!0,C.then(z)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function j(t,l,i,a,o,c,u=[-1]){const d=p;_(t);const h=l.props||{},f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:o,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u};let m=!1;if(f.ctx=i?i(t,h,(e,n,...s)=>{const l=s.length?s[0]:n;return f.ctx&&o(f.ctx[e],f.ctx[e]=l)&&(f.bound[e]&&f.bound[e](l),m&&O(t,e)),n}):[],f.update(),m=!0,s(f.before_update),f.fragment=!!a&&a(f.ctx),l.target){if(l.hydrate){const e=function(e){return Array.from(e.childNodes)}(l.target);f.fragment&&f.fragment.l(e),e.forEach(r)}else f.fragment&&f.fragment.c();l.intro&&A(t.$$.fragment),V(t,l.target,l.anchor),z()}_(d)}class I{$destroy(){B(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function N(t){let n;return{c(){n=c("ul"),n.innerHTML='<li class="social svelte-18q31dx"><a href="https://www.facebook.com/" class="social__icon svelte-18q31dx"><span class="sr-only">Facebook</span> \n      <svg class="social__icon__svg svelte-18q31dx" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#FFF" fill-rule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" class="svelte-18q31dx"></path></svg></a></li> \n  <li class="social svelte-18q31dx"><a href="https://twitter.com/" class="social__icon svelte-18q31dx"><span class="sr-only">Twitter</span> \n      <svg class="social__icon__svg svelte-18q31dx" xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill="#FFF" fill-rule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z" class="svelte-18q31dx"></path></svg></a></li>',m(n,"class","socials svelte-18q31dx")},m(e,t){o(e,n,t)},p:e,i:e,o:e,d(e){e&&r(n)}}}class P extends I{constructor(e){super(),j(this,e,null,N,i,{})}}function D(t){let n,s,l,i,u,d,v,g,p,_,w,y,b,L,C;return y=new P({}),{c(){n=c("div"),s=c("div"),l=c("a"),l.innerHTML='<span class="sr-only">site logo in mobile menu</span> \n          <svg width="148px" height="25px" viewBox="0 0 148 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="---High-Fidelity" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Hifi---Mobile---Navigation" transform="translate(-32.000000, -40.000000)" fill="#FFFFFF"><g id="Group-9" transform="translate(32.000000, 40.000000)"><g id="BOOKMARK-3" transform="translate(37.000000, 6.000000)" fill-rule="nonzero"><path d="M0,0.298666667 L5.22666667,0.298666667 C5.97333707,0.298666667 6.66088575,0.454220667 7.28933333,0.765333333 C7.91778092,1.076446 8.41244264,1.49955288 8.77333333,2.03466667 C9.13422403,2.56978045 9.31466667,3.15466349 9.31466667,3.78933333 C9.31466667,4.46133669 9.14977943,5.04310865 8.82,5.53466667 C8.49022057,6.02622468 8.05778045,6.40266536 7.52266667,6.664 L7.52266667,6.81333333 C8.21955904,7.06222347 8.77333128,7.45733063 9.184,7.99866667 C9.59466872,8.54000271 9.8,9.19021843 9.8,9.94933333 C9.8,10.6835592 9.60400196,11.3337749 9.212,11.9 C8.81999804,12.4662251 8.29111444,12.9017763 7.62533333,13.2066667 C6.95955223,13.5115571 6.22222627,13.664 5.41333333,13.664 L0,13.664 L0,0.298666667 Z M5.04,5.74933333 C5.58755829,5.74933333 6.02622057,5.59689041 6.356,5.292 C6.68577943,4.98710959 6.85066667,4.60444675 6.85066667,4.144 C6.85066667,3.69599776 6.69200159,3.31955708 6.37466667,3.01466667 C6.05733175,2.70977625 5.63733595,2.55733333 5.11466667,2.55733333 L2.52,2.55733333 L2.52,5.74933333 L5.04,5.74933333 Z M5.32,11.368 C5.92978083,11.368 6.40577607,11.2093349 6.748,10.892 C7.09022393,10.5746651 7.26133333,10.1608914 7.26133333,9.65066667 C7.26133333,9.14044189 7.08711285,8.72355717 6.73866667,8.4 C6.39022048,8.07644283 5.89244768,7.91466667 5.24533333,7.91466667 L2.52,7.91466667 L2.52,11.368 L5.32,11.368 Z M18.2466667,13.9626667 C16.9399935,13.9626667 15.754672,13.6546697 14.6906667,13.0386667 C13.6266613,12.4226636 12.7897808,11.5795609 12.18,10.5093333 C11.5702192,9.43910576 11.2653333,8.26311752 11.2653333,6.98133333 C11.2653333,5.69954915 11.5702192,4.52356091 12.18,3.45333333 C12.7897808,2.38310576 13.6266613,1.54000308 14.6906667,0.924 C15.754672,0.30799692 16.9399935,-1.77635684e-15 18.2466667,-1.77635684e-15 C19.5533399,-1.77635684e-15 20.7386613,0.30799692 21.8026667,0.924 C22.866672,1.54000308 23.7035525,2.38310576 24.3133333,3.45333333 C24.9231142,4.52356091 25.228,5.69954915 25.228,6.98133333 C25.228,8.26311752 24.9231142,9.43910576 24.3133333,10.5093333 C23.7035525,11.5795609 22.866672,12.4226636 21.8026667,13.0386667 C20.7386613,13.6546697 19.5533399,13.9626667 18.2466667,13.9626667 Z M18.2466667,11.5733333 C19.0680041,11.5733333 19.8208855,11.3804464 20.5053333,10.9946667 C21.1897812,10.608887 21.727998,10.067559 22.12,9.37066667 C22.512002,8.67377429 22.708,7.87733781 22.708,6.98133333 C22.708,6.08532885 22.512002,5.28889237 22.12,4.592 C21.727998,3.89510763 21.1897812,3.35377971 20.5053333,2.968 C19.8208855,2.58222029 19.0680041,2.38933333 18.2466667,2.38933333 C17.4253292,2.38933333 16.6755589,2.58222029 15.9973333,2.968 C15.3191077,3.35377971 14.784002,3.89510763 14.392,4.592 C13.999998,5.28889237 13.804,6.08532885 13.804,6.98133333 C13.804,7.87733781 13.999998,8.67377429 14.392,9.37066667 C14.784002,10.067559 15.3191077,10.608887 15.9973333,10.9946667 C16.6755589,11.3804464 17.4253292,11.5733333 18.2466667,11.5733333 Z M33.6,13.9626667 C32.2933268,13.9626667 31.1080053,13.6546697 30.044,13.0386667 C28.9799947,12.4226636 28.1431141,11.5795609 27.5333333,10.5093333 C26.9235525,9.43910576 26.6186667,8.26311752 26.6186667,6.98133333 C26.6186667,5.69954915 26.9235525,4.52356091 27.5333333,3.45333333 C28.1431141,2.38310576 28.9799947,1.54000308 30.044,0.924 C31.1080053,0.30799692 32.2933268,-1.77635684e-15 33.6,-1.77635684e-15 C34.9066732,-1.77635684e-15 36.0919947,0.30799692 37.156,0.924 C38.2200053,1.54000308 39.0568858,2.38310576 39.6666667,3.45333333 C40.2764475,4.52356091 40.5813333,5.69954915 40.5813333,6.98133333 C40.5813333,8.26311752 40.2764475,9.43910576 39.6666667,10.5093333 C39.0568858,11.5795609 38.2200053,12.4226636 37.156,13.0386667 C36.0919947,13.6546697 34.9066732,13.9626667 33.6,13.9626667 Z M33.6,11.5733333 C34.4213374,11.5733333 35.1742188,11.3804464 35.8586667,10.9946667 C36.5431145,10.608887 37.0813314,10.067559 37.4733333,9.37066667 C37.8653353,8.67377429 38.0613333,7.87733781 38.0613333,6.98133333 C38.0613333,6.08532885 37.8653353,5.28889237 37.4733333,4.592 C37.0813314,3.89510763 36.5431145,3.35377971 35.8586667,2.968 C35.1742188,2.58222029 34.4213374,2.38933333 33.6,2.38933333 C32.7786625,2.38933333 32.0288923,2.58222029 31.3506667,2.968 C30.672441,3.35377971 30.1373353,3.89510763 29.7453333,4.592 C29.3533314,5.28889237 29.1573333,6.08532885 29.1573333,6.98133333 C29.1573333,7.87733781 29.3533314,8.67377429 29.7453333,9.37066667 C30.1373353,10.067559 30.672441,10.608887 31.3506667,10.9946667 C32.0288923,11.3804464 32.7786625,11.5733333 33.6,11.5733333 Z M42.8306666,0.298666667 L45.3506666,0.298666667 L45.3506666,6.02933333 L45.5,6.02933333 L50.3906666,0.298666667 L53.4333333,0.298666667 L53.4333333,0.448 L48.5986666,5.97333333 L53.9373333,13.5146667 L53.9373333,13.664 L50.8573333,13.664 L46.8626666,7.97066667 L45.3506666,9.744 L45.3506666,13.664 L42.8306666,13.664 L42.8306666,0.298666667 Z M56.7777778,3.55271368e-15 L60.0257778,3.55271368e-15 L63.5724444,9.38933333 L63.7217778,9.38933333 L67.2684444,3.55271368e-15 L70.5351111,3.55271368e-15 L70.5351111,13.3653333 L68.0337778,13.3653333 L68.0337778,6.776 L68.1831111,4.55466667 L68.0337778,4.55466667 L64.6364444,13.3653333 L62.6764444,13.3653333 L59.2604444,4.55466667 L59.1111111,4.55466667 L59.2604444,6.776 L59.2604444,13.3653333 L56.7777778,13.3653333 L56.7777778,3.55271368e-15 Z M77.5786667,3.55271368e-15 L80.472,3.55271368e-15 L85.4933333,13.3653333 L82.712,13.3653333 L81.592,10.1733333 L76.4773333,10.1733333 L75.3573333,13.3653333 L72.576,13.3653333 L77.5786667,3.55271368e-15 Z M80.7706667,7.85866667 L79.5946667,4.49866667 L79.1093333,2.89333333 L78.96,2.89333333 L78.4746667,4.49866667 L77.28,7.85866667 L80.7706667,7.85866667 Z M87.5528889,3.55271368e-15 L92.4248889,3.55271368e-15 C93.2960044,3.55271368e-15 94.0706633,0.18044264 94.7488889,0.541333333 C95.4271145,0.902224027 95.952887,1.40310791 96.3262222,2.044 C96.6995574,2.68489209 96.8862222,3.40977373 96.8862222,4.21866667 C96.8862222,5.07733763 96.6155583,5.83955223 96.0742222,6.50533333 C95.5328862,7.17111444 94.8515597,7.65333184 94.0302222,7.952 L94.0115556,8.08266667 L97.5955556,13.216 L97.5955556,13.3653333 L94.7022222,13.3653333 L91.2488889,8.344 L90.0728889,8.344 L90.0728889,13.3653333 L87.5528889,13.3653333 L87.5528889,3.55271368e-15 Z M92.4062222,6.02933333 C92.9786695,6.02933333 93.4453315,5.85511285 93.8062222,5.50666667 C94.1671129,5.15822048 94.3475556,4.71644712 94.3475556,4.18133333 C94.3475556,3.67110856 94.1764462,3.23555736 93.8342222,2.87466667 C93.4919983,2.51377597 93.0284474,2.33333333 92.4435556,2.33333333 L90.0728889,2.33333333 L90.0728889,6.02933333 L92.4062222,6.02933333 Z M99.6364444,3.55271368e-15 L102.156444,3.55271368e-15 L102.156444,5.73066667 L102.305778,5.73066667 L107.196444,3.55271368e-15 L110.239111,3.55271368e-15 L110.239111,0.149333333 L105.404444,5.67466667 L110.743111,13.216 L110.743111,13.3653333 L107.663111,13.3653333 L103.668444,7.672 L102.156444,9.44533333 L102.156444,13.3653333 L99.6364444,13.3653333 L99.6364444,3.55271368e-15 Z" id="BOOKMARK"></path></g><g id="Group-8"><path d="M12.5,0 C19.4035594,0 25,5.59644063 25,12.5 C25,19.4035594 19.4035594,25 12.5,25 C5.59644063,25 0,19.4035594 0,12.5 C0,5.59644063 5.59644063,0 12.5,0 Z M14.0789166,7 L11,7 C9.8954305,7 9,7.8954305 9,9 L9,19 L12.5394583,15.560885 L16.0789166,19 L16.0789166,9 C16.0789166,7.8954305 15.1834861,7 14.0789166,7 Z" id="Combined-Shape"></path></g></g></g></g></svg>',i=h(),u=c("button"),u.innerHTML='<span class="sr-only">burger button close</span> \n          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"></path></svg>',d=h(),v=c("ul"),v.innerHTML='<li class="mobile-menu__item svelte-k1f72n"><a class="t-mobile-menu__item" href="./index.html">Features</a></li> \n        <li class="mobile-menu__item svelte-k1f72n"><a class="t-mobile-menu__item" href="./index.html">Pricing</a></li> \n        <li class="mobile-menu__item svelte-k1f72n"><a class="t-mobile-menu__item" href="./index.html">Contact</a></li>',g=h(),p=c("a"),p.textContent="Login",_=h(),w=c("div"),T(y.$$.fragment),m(l,"href","./index.html"),m(l,"class","branding svelte-k1f72n"),m(u,"class","button"),m(s,"class","mobile-menu__heading svelte-k1f72n"),m(v,"class","mobile-menu svelte-k1f72n"),m(p,"class","button button--login-mobile mobile-menu__button svelte-k1f72n"),m(p,"href","./index.html"),m(w,"class","socials-container svelte-k1f72n"),m(n,"class","mobile-menu-container svelte-k1f72n")},m(e,r){o(e,n,r),a(n,s),a(s,l),a(s,i),a(s,u),a(n,d),a(n,v),a(n,g),a(n,p),a(n,_),a(n,w),V(y,w,null),b=!0,L||(C=f(u,"click",t[1]),L=!0)},p:e,i(e){b||(A(y.$$.fragment,e),b=!0)},o(e){S(y.$$.fragment,e),b=!1},d(e){e&&r(n),B(y),L=!1,C()}}}function Q(e){let t,n,l,i,u,d,v,g,p,_,w,y=e[0]&&D(e);return{c(){t=c("header"),n=c("div"),l=c("a"),l.innerHTML='<span class="sr-only">site logo</span> \n      <svg width="148" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z" fill="#242A45" fill-rule="nonzero"></path><g><circle fill="#5267DF" cx="12.5" cy="12.5" r="12.5"></circle><path d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" fill="#FFF"></path></g></g></svg>',i=h(),u=c("button"),u.innerHTML='<span class="sr-only">burger button burger</span> \n      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"></path></svg>',d=h(),v=c("ul"),v.innerHTML='<li class="desktop-menu__item"><a class="t-desktop-menu__item" href="./">Features</a></li> \n      <li class="desktop-menu__item"><a class="t-desktop-menu__item" href="./">Pricing</a></li> \n      <li class="desktop-menu__item"><a class="t-desktop-menu__item" href="./">Contact</a></li> \n      <li class="desktop-menu__item"><a class="button button--login-desktop" href="./">Login</a></li>',g=h(),y&&y.c(),m(l,"href","./index.html"),m(l,"class","branding svelte-k1f72n"),m(u,"class","button header__mobile-burger svelte-k1f72n"),m(v,"class","desktop-menu svelte-k1f72n"),m(n,"class","container svelte-k1f72n"),m(t,"class","header svelte-k1f72n")},m(s,r){o(s,t,r),a(t,n),a(n,l),a(n,i),a(n,u),a(n,d),a(n,v),a(t,g),y&&y.m(t,null),p=!0,_||(w=f(u,"click",e[1]),_=!0)},p(e,[n]){e[0]?y?(y.p(e,n),1&n&&A(y,1)):(y=D(e),y.c(),A(y,1),y.m(t,null)):y&&(H={r:0,c:[],p:H},S(y,1,1,()=>{y=null}),H.r||s(H.c),H=H.p)},i(e){p||(A(y),p=!0)},o(e){S(y),p=!1},d(e){e&&r(t),y&&y.d(),_=!1,w()}}}function G(e,t,n){let s=!1;return[s,function(){n(0,s=!s)}]}class K extends I{constructor(e){super(),j(this,e,G,Q,i,{})}}function W(t){let n,s,l,i,u,d,f,v;return f=new P({}),{c(){n=c("footer"),s=c("div"),l=c("a"),l.innerHTML='<span class="sr-only">footer logo</span> \n      <img src="./images/logo-bookmark-footer.svg" alt="footer logo">',i=h(),u=c("ul"),u.innerHTML='<li class="footer-menu__item svelte-1kldy6c"><a class="t-footer-menu__item" href="./">Features</a></li> \n      <li class="footer-menu__item svelte-1kldy6c"><a class="t-footer-menu__item" href="./">Pricing</a></li> \n      <li class="footer-menu__item svelte-1kldy6c"><a class="t-footer-menu__item" href="./">Contact</a></li>',d=h(),T(f.$$.fragment),m(l,"href","./index.html"),m(l,"class","branding"),m(u,"class","footer-menu svelte-1kldy6c"),m(s,"class","container svelte-1kldy6c"),m(n,"class","footer svelte-1kldy6c")},m(e,t){o(e,n,t),a(n,s),a(s,l),a(s,i),a(s,u),a(s,d),V(f,s,null),v=!0},p:e,i(e){v||(A(f.$$.fragment,e),v=!0)},o(e){S(f.$$.fragment,e),v=!1},d(e){e&&r(n),B(f)}}}class R extends I{constructor(e){super(),j(this,e,null,W,i,{})}}function U(t){let n;return{c(){n=c("section"),n.innerHTML='<div class="intro__image svelte-28wm4r"><img src="./images/illustration-hero.svg" alt="intro" class="svelte-28wm4r"></div> \n  <div class="container svelte-28wm4r"><div class="intro__content svelte-28wm4r"><h1 class="t-h1">A Simple Bookmark Manager</h1> \n      <p class="t-body1 intro__content__body svelte-28wm4r">A clean and simple interface to organize your favourite websites. Open a new \n      browser tab and see your sites load instantly. Try it for free.</p> \n      <div class="getin-buttons svelte-28wm4r"><button class="button button--chrome">Get it on Chrome</button> \n        <button class="button button--firefox">Get it on Firefox</button></div></div></div>',m(n,"class","intro svelte-28wm4r")},m(e,t){o(e,n,t)},p:e,i:e,o:e,d(e){e&&r(n)}}}class Y extends I{constructor(e){super(),j(this,e,null,U,i,{})}}function J(e,t,n){const s=e.slice();return s[7]=t[n],s}function X(e,t){let n,s,l,i,u,h,g=t[7].name+"";return{key:e,first:null,c(){n=c("li"),s=d(g),m(n,"class",l="features__list__item"+t[7].highlighted+" svelte-ypc1yg"),n.value=i=t[7].id,this.first=n},m(e,l){o(e,n,l),a(n,s),u||(h=f(n,"click",t[4]),u=!0)},p(e,t){4&t&&g!==(g=e[7].name+"")&&v(s,g),4&t&&l!==(l="features__list__item"+e[7].highlighted+" svelte-ypc1yg")&&m(n,"class",l),4&t&&i!==(i=e[7].id)&&(n.value=i)},d(e){e&&r(n),u=!1,h()}}}function ee(t){let n,s,l,i,u,g,p,_,w,y,b,L,C,k,$,x,M,z,F,q,H,A,S,T=[],V=new Map,B=t[3][t[0]].heading+"",O=t[3][t[0]].body+"",j=t[2];const I=e=>e[7].id;for(let e=0;e<j.length;e+=1){let n=J(t,j,e),s=I(n);V.set(s,T[e]=X(s,n))}return{c(){n=c("section"),s=c("div"),l=c("div"),l.innerHTML='<h2 class="t-h2">Features</h2> \n      <p class="features__intro__body t-body1 svelte-ypc1yg">Our aim is to make it quick and easy for you to access your favourite websites. \n      Your bookmarks sync between your devices so you can access them on the go.</p>',i=h(),u=c("div"),g=c("ul");for(let e=0;e<T.length;e+=1)T[e].c();p=h(),_=c("div"),w=c("div"),y=c("img"),L=h(),C=c("div"),k=c("h2"),$=d(B),x=h(),M=c("p"),z=d(O),F=h(),q=c("a"),q.textContent="More Info",m(l,"class","features__intro svelte-ypc1yg"),m(g,"class","features__list svelte-ypc1yg"),m(u,"class","features__tab svelte-ypc1yg"),y.src!==(b=t[3][t[0]].image)&&m(y,"src",b),m(y,"alt","feature"),m(y,"class","svelte-ypc1yg"),m(w,"class","feature__content__image svelte-ypc1yg"),m(k,"class","feature__content__heading t-h2"),m(M,"class","t-body1 feature__content__body svelte-ypc1yg"),m(q,"href","./"),m(q,"class","button button--info feature__content__button svelte-ypc1yg"),m(C,"class","feature__content__text svelte-ypc1yg"),m(_,"class",H="feature__content "+t[1]+" svelte-ypc1yg"),m(s,"class","container svelte-ypc1yg"),m(n,"class","features svelte-ypc1yg")},m(e,r){o(e,n,r),a(n,s),a(s,l),a(s,i),a(s,u),a(u,g);for(let e=0;e<T.length;e+=1)T[e].m(g,null);a(s,p),a(s,_),a(_,w),a(w,y),a(_,L),a(_,C),a(C,k),a(k,$),a(C,x),a(C,M),a(M,z),a(C,F),a(C,q),A||(S=f(_,"animationend",t[5]),A=!0)},p(e,[t]){if(20&t){const n=e[2];T=Z(T,t,I,1,e,n,V,g,E,X,null,J)}1&t&&y.src!==(b=e[3][e[0]].image)&&m(y,"src",b),1&t&&B!==(B=e[3][e[0]].heading+"")&&v($,B),1&t&&O!==(O=e[3][e[0]].body+"")&&v(z,O),2&t&&H!==(H="feature__content "+e[1]+" svelte-ypc1yg")&&m(_,"class",H)},i:e,o:e,d(e){e&&r(n);for(let e=0;e<T.length;e+=1)T[e].d();A=!1,S()}}}function te(e,t,n){let s=0,l=0,i="",a=[{id:0,name:"Simple Bookmarking",highlighted:" highlighted"},{id:1,name:"Speedy Searching",highlighted:""},{id:2,name:"Easy Sharing",highlighted:""}];return[s,i,a,[{id:0,heading:"Bookmark in one click",body:"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",image:"./images/illustration-features-tab-1.svg",link:"./"},{id:1,heading:"Intelligent search",body:"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",image:"./images/illustration-features-tab-2.svg",link:"./"},{id:2,heading:"Share your bookmarks",body:"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",image:"./images/illustration-features-tab-3.svg",link:"./"}],function(e){n(1,i="fadeout"),l=e.target.value,a.forEach(e=>{e.id!=l?e.highlighted="":e.highlighted=" highlighted"}),n(2,a)},function(){n(1,i=""),n(0,s=l)}]}class ne extends I{constructor(e){super(),j(this,e,te,ee,i,{})}}function se(t){let n;return{c(){n=c("section"),n.innerHTML='<div class="container svelte-1gn1vv4"><div class="download__intro svelte-1gn1vv4"><h2 class="t-h2">Download the extension</h2> \n      <p class="t-body1 download__intro__body svelte-1gn1vv4">We’ve got more browsers in the pipeline. Please do let us know if you’ve \n      got a favourite you’d like us to prioritize.</p></div> \n    <div class="download__cards svelte-1gn1vv4"><div class="download__card svelte-1gn1vv4"><div class="download__card__icon svelte-1gn1vv4"><svg xmlns="http://www.w3.org/2000/svg" width="102" height="100"><g fill="none"><path fill="#E16B5A" d="M50.768.01s30.01-1.325 45.916 28.249H48.217s-9.154-.296-16.957 10.594c-2.25 4.561-4.65 9.27-1.95 18.538-3.9-6.472-20.708-35.164-20.708-35.164S20.457 1.186 50.768.009z"></path><path fill="#FFD464" d="M95.122 75.095S81.284 101.238 47.21 99.952C51.414 92.82 71.45 58.8 71.45 58.8s4.837-7.626-.875-19.696c-2.903-4.192-11.7-8.586-21.237-10.928 7.67-.075 47.25.005 47.25.005s12.653 20.59-1.466 46.915z"></path><path fill="#74B340" d="M6.628 75.294s-16.17-24.825 2.004-53.116l24.225 41.163s4.314 7.92 17.832 9.104c5.153-.368 10.514-.682 17.351-7.607C64.27 71.387 47.327 100 47.327 100s-24.51.448-40.7-24.706z"></path><ellipse cx="50.646" cy="50.406" fill="#FFF" rx="23.064" ry="22.656"></ellipse><ellipse cx="50.638" cy="50.406" fill="#2995CC" rx="18.292" ry="17.969"></ellipse><path fill="#268CBF" d="M50.643 32.441c-.364 0-.724.014-1.082.034 9.598.55 17.209 8.369 17.209 17.934 0 9.568-7.611 17.386-17.21 17.937.36.02.72.034 1.083.034 10.101 0 18.292-8.046 18.292-17.97 0-9.923-8.19-17.969-18.292-17.969z"></path></g></svg></div> \n        <h3 class="t-h3">Add to Chrome</h3> \n        <p class="t-body2 download__card__version svelte-1gn1vv4">Minimum version 62</p> \n        <a href="./" class="button button--add">Add &amp; Install Extension</a></div> \n      <div class="download__card svelte-1gn1vv4"><div class="download__card__icon svelte-1gn1vv4"><svg xmlns="http://www.w3.org/2000/svg" width="105" height="100"><path fill="#FF9800" d="M105 50c0 28.862-23.513 50-52.5 50S0 76.588 0 47.726c0-9.043 2.33-17.59 6.392-25a.995.995 0 0 1 .23-.366C4.338 18.956 3.334 10.318 9.128 4.541c0 2.411 1.464 6.548 3.104 9.638 1.326 2.457 2.737 4.228 3.741 4 2.284-.543 10.27-.543 11.412 0 1.877-2.405 6.445-9.09 13.703-9.09-4.062 4.045-15.704 18.185 4.567 18.185h4.568L36.52 36.363s1.556 3 0 4.548c-1.732-1.732-9.128 1.862-9.128 6.815s5.296 11.363 15.98 11.363c10.683 0 7.986-4.548 13.696-4.548 5.709 0 6.844 4.548 6.844 4.548-7.855 0-13.558 9.09-22.824 9.09 4.567 3.364 7.58 4.547 13.696 4.547 15.113 0 27.392-12.225 27.392-27.274 0-6.09-2.008-11.683-5.388-16.224a27.414 27.414 0 0 1 10.96 19.498 40.554 40.554 0 0 0 1.279-10.089c0-13.683-5.84-31.776-15.98-38.637C87.655 4.358 105 18.466 105 45.452V50z"></path></svg></div> \n        <h3 class="t-h3">Add to Firefox</h3> \n        <p class="t-body2 download__card__version svelte-1gn1vv4">Minimum version 55</p> \n        <a href="./" class="button button--add">Add &amp; Install Extension</a></div> \n      <div class="download__card svelte-1gn1vv4"><div class="download__card__icon svelte-1gn1vv4"><svg xmlns="http://www.w3.org/2000/svg" width="96" height="100"><path fill="#EB6060" fill-rule="evenodd" d="M48 100C21.49 100 0 77.614 0 50S21.49 0 48 0s48 22.386 48 50-21.49 50-48 50zm0-10c13.807 0 25-17.909 25-40S61.807 10 48 10 23 27.909 23 50s11.193 40 25 40z"></path></svg></div> \n        <h3 class="t-h3">Add to Opera</h3> \n        <p class="t-body2 download__card__version svelte-1gn1vv4">Minimum version 46</p> \n        <a href="./" class="button button--add">Add &amp; Install Extension</a></div></div></div>',m(n,"class","download svelte-1gn1vv4")},m(e,t){o(e,n,t)},p:e,i:e,o:e,d(e){e&&r(n)}}}class le extends I{constructor(e){super(),j(this,e,null,se,i,{})}}function ie(e,t,n){const s=e.slice();return s[1]=t[n],s}function ae(t,n){let s,l,i,v,g,p,_,w,y,b,L,C,k,$,x=n[1].question+"",M=n[1].answer+"";return{key:t,first:null,c(){s=c("div"),l=c("div"),i=c("p"),v=d(x),g=h(),p=u("svg"),_=u("path"),w=h(),y=c("div"),b=c("p"),L=d(M),C=h(),m(i,"class","question t-question svelte-l3z6v9"),m(_,"fill","none"),m(_,"stroke","#5267DF"),m(_,"stroke-width","3"),m(_,"d","M1 1l8 8 8-8"),m(_,"class","svelte-l3z6v9"),m(p,"class","arrow svelte-l3z6v9"),m(p,"xmlns","http://www.w3.org/2000/svg"),m(p,"width","18"),m(p,"height","12"),m(l,"class","question-tab svelte-l3z6v9"),m(b,"class","t-answer answer-tab__content svelte-l3z6v9"),m(y,"class","answer-tab svelte-l3z6v9"),m(s,"class","accordion svelte-l3z6v9"),this.first=s},m(e,t){o(e,s,t),a(s,l),a(l,i),a(i,v),a(l,g),a(l,p),a(p,_),a(s,w),a(s,y),a(y,b),a(b,L),a(s,C),k||($=f(l,"click",re),k=!0)},p:e,d(e){e&&r(s),k=!1,$()}}}function oe(t){let n,s,l,i,u,d,f,v,g,p=[],_=new Map,w=t[0];const y=e=>e[1].id;for(let e=0;e<w.length;e+=1){let n=ie(t,w,e),s=y(n);_.set(s,p[e]=ae(s,n))}return{c(){n=c("section"),s=c("div"),l=c("h2"),l.textContent="Frequently Asked Questions",i=h(),u=c("p"),u.textContent="Here are some of our FAQs. If you have any other questions you’d like \n    answered please feel free to email us.",d=h(),f=c("div");for(let e=0;e<p.length;e+=1)p[e].c();v=h(),g=c("a"),g.textContent="More Info",m(l,"class","t-h2 FAQ__intro__heading svelte-l3z6v9"),m(u,"class","t-body1 FAQ__intro__body svelte-l3z6v9"),m(f,"class","accordions svelte-l3z6v9"),m(g,"href","./"),m(g,"class","button button--info"),m(s,"class","container svelte-l3z6v9"),m(n,"class","FAQ svelte-l3z6v9")},m(e,t){o(e,n,t),a(n,s),a(s,l),a(s,i),a(s,u),a(s,d),a(s,f);for(let e=0;e<p.length;e+=1)p[e].m(f,null);a(s,v),a(s,g)},p(e,[t]){if(1&t){const n=e[0];p=Z(p,t,y,1,e,n,_,f,E,ae,null,ie)}},i:e,o:e,d(e){e&&r(n);for(let e=0;e<p.length;e+=1)p[e].d()}}}function re(e){const t=e.currentTarget;t.classList.toggle("active");const n=t.nextElementSibling;n.style.maxHeight?n.style.maxHeight=null:n.style.maxHeight=n.scrollHeight+"px"}function ce(e){return[[{id:1,question:"What is Bookmark?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."},{id:2,question:"How can I request a new browser?",answer:"Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."},{id:3,question:"Is there a mobile app?",answer:"Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."},{id:4,question:"What about other Chromium browsers?",answer:"Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."}]]}class ue extends I{constructor(e){super(),j(this,e,ce,oe,i,{})}}function de(t){let n,l,i,u,d,v,p,_,w,y,b,L,C,k,$,x;return{c(){n=c("section"),l=c("div"),i=c("p"),i.textContent="35,000+ already joined",u=h(),d=c("h2"),d.textContent="Stay up-to-date with what we’re doing",v=h(),p=c("form"),_=c("div"),w=c("label"),w.textContent="Email",y=h(),b=c("input"),C=h(),k=c("input"),m(i,"class","t-cta-promo"),m(d,"class","t-h2 t-h2--white cta__heading svelte-1ijwls0"),m(w,"for","email"),m(w,"class","sr-only"),m(b,"class","contact-form__input-field svelte-1ijwls0"),m(b,"type","text"),m(b,"name","email"),m(b,"id","email"),m(b,"placeholder","Enter your email address"),m(_,"class",L="contact-form__input-group"+t[0]+" svelte-1ijwls0"),m(k,"class","button button--contact"),m(k,"type","submit"),k.value="Contact Us",m(p,"class","contact-form svelte-1ijwls0"),m(l,"class","container svelte-1ijwls0"),m(n,"class","cta svelte-1ijwls0")},m(e,s){var r;o(e,n,s),a(n,l),a(l,i),a(l,u),a(l,d),a(l,v),a(l,p),a(p,_),a(_,w),a(_,y),a(_,b),g(b,t[1]),a(p,C),a(p,k),$||(x=[f(b,"focus",t[2]),f(b,"input",t[4]),f(p,"submit",(r=t[3],function(e){return e.preventDefault(),r.call(this,e)}))],$=!0)},p(e,[t]){2&t&&b.value!==e[1]&&g(b,e[1]),1&t&&L!==(L="contact-form__input-group"+e[0]+" svelte-1ijwls0")&&m(_,"class",L)},i:e,o:e,d(e){e&&r(n),$=!1,s(x)}}}function he(e,t,n){let s,l="";return[l,s,()=>n(0,l=""),function(e){e.target.childNodes,!function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(s)?n(0,l=" error"):n(1,s="")},function(){s=this.value,n(1,s)}]}class fe extends I{constructor(e){super(),j(this,e,he,de,i,{})}}function me(t){let n,s,l,i,u,d,f,v,g,p,_,w,y,b,L;return n=new K({}),i=new Y({}),d=new ne({}),v=new le({}),p=new ue({}),w=new fe({}),b=new R({}),{c(){T(n.$$.fragment),s=h(),l=c("main"),T(i.$$.fragment),u=h(),T(d.$$.fragment),f=h(),T(v.$$.fragment),g=h(),T(p.$$.fragment),_=h(),T(w.$$.fragment),y=h(),T(b.$$.fragment),m(l,"class","main")},m(e,t){V(n,e,t),o(e,s,t),o(e,l,t),V(i,l,null),a(l,u),V(d,l,null),a(l,f),V(v,l,null),a(l,g),V(p,l,null),a(l,_),V(w,l,null),o(e,y,t),V(b,e,t),L=!0},p:e,i(e){L||(A(n.$$.fragment,e),A(i.$$.fragment,e),A(d.$$.fragment,e),A(v.$$.fragment,e),A(p.$$.fragment,e),A(w.$$.fragment,e),A(b.$$.fragment,e),L=!0)},o(e){S(n.$$.fragment,e),S(i.$$.fragment,e),S(d.$$.fragment,e),S(v.$$.fragment,e),S(p.$$.fragment,e),S(w.$$.fragment,e),S(b.$$.fragment,e),L=!1},d(e){B(n,e),e&&r(s),e&&r(l),B(i),B(d),B(v),B(p),B(w),e&&r(y),B(b,e)}}}return new class extends I{constructor(e){super(),j(this,e,null,me,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
