const t="guest-details-comp";let e=false;let n=false;const s=(t,e="")=>{{return()=>{}}};const l=(t,e)=>{{return()=>{}}};const o="{visibility:hidden}.hydrated{visibility:inherit}";const c={};const i=t=>{t=typeof t;return t==="object"||t==="function"};function f(t){var e,n,s;return(s=(n=(e=t.head)===null||e===void 0?void 0:e.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const r=(t,e,...n)=>{let s=null;let l=null;let o=false;let c=false;const f=[];const r=e=>{for(let n=0;n<e.length;n++){s=e[n];if(Array.isArray(s)){r(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!i(s)){s=String(s)}if(o&&c){f[f.length-1].t+=s}else{f.push(o?u(null,s):s)}c=o}}};r(n);if(e){if(e.key){l=e.key}{const t=e.className||e.class;if(t){e.class=typeof t!=="object"?t:Object.keys(t).filter((e=>t[e])).join(" ")}}}const a=u(t,null);a.l=e;if(f.length>0){a.o=f}{a.i=l}return a};const u=(t,e)=>{const n={u:0,p:t,t:e,h:null,o:null};{n.l=null}{n.i=null}return n};const a={};const d=t=>t&&t.p===a;const y=(t,e)=>{if(t!=null&&!i(t)){if(e&4){return t==="false"?false:t===""||!!t}return t}return t};const p=t=>et(t).m;const h=(t,e,n)=>{const s=p(t);return{emit:t=>m(s,e,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:t})}};const m=(t,e,n)=>{const s=at.ce(e,n);t.dispatchEvent(s);return s};const $=new WeakMap;const b=(t,e,n)=>{let s=ft.get(t);if(yt&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=e}else{s.replaceSync(e)}}else{s=e}ft.set(t,s)};const v=(t,e,n)=>{var s;const l=S(e);const o=ft.get(l);t=t.nodeType===11?t:ut;if(o){if(typeof o==="string"){t=t.head||t;let e=$.get(t);let n;if(!e){$.set(t,e=new Set)}if(!e.has(l)){{n=ut.createElement("style");n.innerHTML=o;const e=(s=at.$)!==null&&s!==void 0?s:f(ut);if(e!=null){n.setAttribute("nonce",e)}t.insertBefore(n,t.querySelector("link"))}if(e){e.add(l)}}}else if(!t.adoptedStyleSheets.includes(o)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,o]}}return l};const w=t=>{const e=t.v;const n=t.m;const l=s("attachStyles",e.S);v(n.getRootNode(),e);l()};const S=(t,e)=>"sc-"+t.S;const g=(t,e,n,s,l,o)=>{if(n!==s){let c=lt(t,e);let f=e.toLowerCase();if(e==="class"){const e=t.classList;const l=k(n);const o=k(s);e.remove(...l.filter((t=>t&&!o.includes(t))));e.add(...o.filter((t=>t&&!l.includes(t))))}else if(e==="key");else if(!c&&e[0]==="o"&&e[1]==="n"){if(e[2]==="-"){e=e.slice(3)}else if(lt(rt,f)){e=f.slice(2)}else{e=f[2]+e.slice(3)}if(n){at.rel(t,e,n,false)}if(s){at.ael(t,e,s,false)}}else{const f=i(s);if((c||f&&s!==null)&&!l){try{if(!t.tagName.includes("-")){const l=s==null?"":s;if(e==="list"){c=false}else if(n==null||t[e]!=l){t[e]=l}}else{t[e]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(e)===""){{t.removeAttribute(e)}}}else if((!c||o&4||l)&&!f){s=s===true?"":s;{t.setAttribute(e,s)}}}}};const j=/\s/;const k=t=>!t?[]:t.split(j);const M=(t,e,n,s)=>{const l=e.h.nodeType===11&&e.h.host?e.h.host:e.h;const o=t&&t.l||c;const i=e.l||c;{for(s in o){if(!(s in i)){g(l,s,o[s],undefined,n,e.u)}}}for(s in i){g(l,s,o[s],i[s],n,e.u)}};const C=(t,n,s,l)=>{const o=n.o[s];let c=0;let i;let f;if(o.t!==null){i=o.h=ut.createTextNode(o.t)}else{i=o.h=ut.createElement(o.p);{M(null,o,e)}if(o.o){for(c=0;c<o.o.length;++c){f=C(t,o,c);if(f){i.appendChild(f)}}}}return i};const O=(t,e,n,s,l,o)=>{let c=t;let i;for(;l<=o;++l){if(s[l]){i=C(null,n,l);if(i){s[l].h=i;c.insertBefore(i,e)}}}};const P=(t,e,n)=>{for(let s=e;s<=n;++s){const e=t[s];if(e){const t=e.h;if(t){t.remove()}}}};const U=(t,e,n,s)=>{let l=0;let o=0;let c=0;let i=0;let f=e.length-1;let r=e[0];let u=e[f];let a=s.length-1;let d=s[0];let y=s[a];let p;let h;while(l<=f&&o<=a){if(r==null){r=e[++l]}else if(u==null){u=e[--f]}else if(d==null){d=s[++o]}else if(y==null){y=s[--a]}else if(x(r,d)){E(r,d);r=e[++l];d=s[++o]}else if(x(u,y)){E(u,y);u=e[--f];y=s[--a]}else if(x(r,y)){E(r,y);t.insertBefore(r.h,u.h.nextSibling);r=e[++l];y=s[--a]}else if(x(u,d)){E(u,d);t.insertBefore(u.h,r.h);u=e[--f];d=s[++o]}else{c=-1;{for(i=l;i<=f;++i){if(e[i]&&e[i].i!==null&&e[i].i===d.i){c=i;break}}}if(c>=0){h=e[c];if(h.p!==d.p){p=C(e&&e[o],n,c)}else{E(h,d);e[c]=undefined;p=h.h}d=s[++o]}else{p=C(e&&e[o],n,o);d=s[++o]}if(p){{r.h.parentNode.insertBefore(p,r.h)}}}}if(l>f){O(t,s[a+1]==null?null:s[a+1].h,n,s,o,a)}else if(o>a){P(e,l,f)}};const x=(t,e)=>{if(t.p===e.p){{return t.i===e.i}}return false};const E=(t,n)=>{const s=n.h=t.h;const l=t.o;const o=n.o;const c=n.t;if(c===null){{{M(t,n,e)}}if(l!==null&&o!==null){U(s,l,n,o)}else if(o!==null){if(t.t!==null){s.textContent=""}O(s,null,n,o,0,o.length-1)}else if(l!==null){P(l,0,l.length-1)}}else if(t.t!==c){s.data=c}};const L=(t,e,n=false)=>{const s=t.m;const l=t.v;const o=t.g||u(null,null);const c=d(e)?e:r(null,null,e);if(l.j){c.l=c.l||{};l.j.map((([t,e])=>c.l[e]=s[t]))}if(n&&c.l){for(const t of Object.keys(c.l)){if(s.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){c.l[t]=s[t]}}}c.p=null;c.u|=4;t.g=c;c.h=o.h=s;E(o,c)};const N=(t,e)=>{if(e&&!t.k&&e["s-p"]){e["s-p"].push(new Promise((e=>t.k=e)))}};const T=(t,e)=>{{t.u|=16}if(t.u&4){t.u|=512;return}N(t,t.M);const n=()=>A(t,e);return wt(n)};const A=(t,e)=>{const n=s("scheduleUpdate",t.v.S);const l=t.C;let o;n();return R(o,(()=>q(t,l,e)))};const R=(t,e)=>W(t)?t.then(e):e();const W=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const q=async(t,e,n)=>{var l;const o=t.m;const c=s("update",t.v.S);const i=o["s-rc"];if(n){w(t)}const f=s("render",t.v.S);{D(t,e,o,n)}if(i){i.map((t=>t()));o["s-rc"]=undefined}f();c();{const e=(l=o["s-p"])!==null&&l!==void 0?l:[];const n=()=>F(t);if(e.length===0){n()}else{Promise.all(e).then(n);t.u|=4;e.length=0}}};const D=(t,e,n,s)=>{try{e=e.render();{t.u&=~16}{t.u|=2}{{{L(t,e,s)}}}}catch(e){ot(e,t.m)}return null};const F=t=>{const e=t.v.S;const n=t.m;const l=s("postUpdate",e);const o=t.C;const c=t.M;if(!(t.u&64)){t.u|=64;{V(n)}{I(o,"componentDidLoad")}l();{t.O(n);if(!c){H()}}}else{l()}{if(t.k){t.k();t.k=undefined}if(t.u&512){vt((()=>T(t,false)))}t.u&=~(4|512)}};const H=e=>{{V(ut.documentElement)}vt((()=>m(rt,"appload",{detail:{namespace:t}})))};const I=(t,e,n)=>{if(t&&t[e]){try{return t[e](n)}catch(t){ot(t)}}return undefined};const V=t=>t.classList.add("hydrated");const _=(t,e)=>et(t).P.get(e);const z=(t,e,n,s)=>{const l=et(t);const o=l.P.get(e);const c=l.u;const i=l.C;n=y(n,s.U[e][0]);const f=Number.isNaN(o)&&Number.isNaN(n);const r=n!==o&&!f;if((!(c&8)||o===undefined)&&r){l.P.set(e,n);if(i){if((c&(2|16))===2){T(l,false)}}}};const B=(t,e,n)=>{if(e.U){const s=Object.entries(e.U);const l=t.prototype;s.map((([t,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(l,t,{get(){return _(this,t)},set(n){z(this,t,n,e)},configurable:true,enumerable:true})}}));if(n&1){const n=new Map;l.attributeChangedCallback=function(t,e,s){at.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e)){s=this[e];delete this[e]}else if(l.hasOwnProperty(e)&&typeof this[e]==="number"&&this[e]==s){return}this[e]=s===null&&typeof this[e]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,e])=>e[0]&15)).map((([t,s])=>{const l=s[1]||t;n.set(l,t);if(s[0]&512){e.j.push([t,l])}return l}))}}return t};const G=async(t,e,n,o,c)=>{if((e.u&32)===0){e.u|=32;{c=it(n);if(c.then){const t=l();c=await c;t()}if(!c.isProxied){B(c,n,2);c.isProxied=true}const t=s("createInstance",n.S);{e.u|=8}try{new c(e)}catch(t){ot(t)}{e.u&=~8}t()}if(c.style){let t=c.style;const e=S(n);if(!ft.has(e)){const l=s("registerStyles",n.S);b(e,t,!!(n.u&1));l()}}}const i=e.M;const f=()=>T(e,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const J=t=>{};const K=t=>{if((at.u&1)===0){const e=et(t);const n=e.v;const l=s("connectedCallback",n.S);if(!(e.u&1)){e.u|=1;{let n=t;while(n=n.parentNode||n.host){if(n["s-p"]){N(e,e.M=n);break}}}if(n.U){Object.entries(n.U).map((([e,[n]])=>{if(n&31&&t.hasOwnProperty(e)){const n=t[e];delete t[e];t[e]=n}}))}{G(t,e,n)}}else{if(e===null||e===void 0?void 0:e.C);else if(e===null||e===void 0?void 0:e.L){e.L.then((()=>J()))}}l()}};const Q=t=>{};const X=async t=>{if((at.u&1)===0){const e=et(t);if(e===null||e===void 0?void 0:e.C);else if(e===null||e===void 0?void 0:e.L){e.L.then((()=>Q()))}}};const Y=(t,e={})=>{var n;const l=s();const c=[];const i=e.exclude||[];const r=rt.customElements;const u=ut.head;const a=u.querySelector("meta[charset]");const d=ut.createElement("style");const y=[];let p;let h=true;Object.assign(at,e);at.N=new URL(e.resourcesUrl||"./",ut.baseURI).href;t.map((t=>{t[1].map((e=>{const n={u:e[0],S:e[1],U:e[2],T:e[3]};{n.U=e[2]}{n.j=[]}const s=n.S;const l=class extends HTMLElement{constructor(t){super(t);t=this;st(t,n)}connectedCallback(){if(p){clearTimeout(p);p=null}if(h){y.push(this)}else{at.jmp((()=>K(this)))}}disconnectedCallback(){at.jmp((()=>X(this)))}componentOnReady(){return et(this).L}};n.A=t[0];if(!i.includes(s)&&!r.get(s)){c.push(s);r.define(s,B(l,n,1))}}))}));{d.innerHTML=c+o;d.setAttribute("data-styles","");const t=(n=at.$)!==null&&n!==void 0?n:f(ut);if(t!=null){d.setAttribute("nonce",t)}u.insertBefore(d,a?a.nextSibling:u.firstChild)}h=false;if(y.length){y.map((t=>t.connectedCallback()))}else{{at.jmp((()=>p=setTimeout(H,30)))}}l()};const Z=t=>at.$=t;const tt=new WeakMap;const et=t=>tt.get(t);const nt=(t,e)=>tt.set(e.C=t,e);const st=(t,e)=>{const n={u:0,m:t,v:e,P:new Map};{n.L=new Promise((t=>n.O=t));t["s-p"]=[];t["s-rc"]=[]}return tt.set(t,n)};const lt=(t,e)=>e in t;const ot=(t,e)=>(0,console.error)(t,e);const ct=new Map;const it=(t,e,n)=>{const s=t.S.replace(/-/g,"_");const l=t.A;const o=ct.get(l);if(o){return o[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((t=>{{ct.set(l,t)}return t[s]}),ot)};const ft=new Map;const rt=typeof window!=="undefined"?window:{};const ut=rt.document||{head:{}};const at={u:0,N:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s),ce:(t,e)=>new CustomEvent(t,e)};const dt=t=>Promise.resolve(t);const yt=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const pt=[];const ht=[];const mt=(t,e)=>s=>{t.push(s);if(!n){n=true;if(e&&at.u&4){vt(bt)}else{at.raf(bt)}}};const $t=t=>{for(let e=0;e<t.length;e++){try{t[e](performance.now())}catch(t){ot(t)}}t.length=0};const bt=()=>{$t(pt);{$t(ht);if(n=pt.length>0){at.raf(bt)}}};const vt=t=>dt().then(t);const wt=mt(ht,true);export{Y as b,h as c,r as h,dt as p,nt as r,Z as s};
//# sourceMappingURL=p-8969bb86.js.map