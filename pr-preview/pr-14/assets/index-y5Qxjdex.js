var T=Object.defineProperty;var K=t=>{throw TypeError(t)};var x=(t,e,r)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Q=(t,e,r)=>x(t,typeof e!="symbol"?e+"":e,r),q=(t,e,r)=>e.has(t)||K("Cannot "+r);var P=(t,e,r)=>(q(t,e,"read from private field"),r?r.call(t):e.get(t)),s=(t,e,r)=>e.has(t)?K("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),d=(t,e,r,o)=>(q(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r),b=(t,e,r)=>(q(t,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const p of n)if(p.type==="childList")for(const a of p.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const p={};return n.integrity&&(p.integrity=n.integrity),n.referrerPolicy&&(p.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?p.credentials="include":n.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(n){if(n.ep)return;n.ep=!0;const p=r(n);fetch(n.href,p)}})();var k,w;class ${constructor(){s(this,k)}reverse(e){return e.split("").reverse().join("")}encode({fen:e}){return b(this,k,w).call(this,e)}}k=new WeakSet,w=function(e){return e.split(" ")[0].replace(/\//g,"").replace(/\d/g,r=>" ".repeat(+r)).slice(0,64)};function F(){return Array.from({length:64},(e,r)=>{const o=document.createElement("div");return r*9&8&&o.setAttribute("dark",""),o})}const M=`
	:host {
		display: grid;
		container-type: inline-size;
		grid-template-columns: repeat(8, 1fr);
		grid-auto-rows: 1fr;
	}

	div {
		user-select: none;
		line-height: 1;
		color: var(--diagram-stroke, black);
		font-size: var(--diagram-webkit-unit, 12.5cqw);
		font-family: var(--diagram-font);
	}

	div::before { content: "+" } [dark]::before { content: "=" }

	[is=K]::before { content: "K" } [is=Q]::before { content: "Q" }
	[is=R]::before { content: "R" } [is=B]::before { content: "B" }
	[is=N]::before { content: "N" } [is=P]::before { content: "P" }
	[is=k]::before { content: "Ц" } [is=q]::before { content: "Ф" }
	[is=r]::before { content: "Л" } [is=b]::before { content: "С" }
	[is=n]::before { content: "К" } [is=p]::before { content: "П" }

	[dark][is=K]::before { content: "k" } [dark][is=Q]::before { content: "q" }
	[dark][is=R]::before { content: "r" } [dark][is=B]::before { content: "b" }
	[dark][is=N]::before { content: "n" } [dark][is=P]::before { content: "p" }
	[dark][is=k]::before { content: "ц" } [dark][is=q]::before { content: "ф" }
	[dark][is=r]::before { content: "л" } [dark][is=b]::before { content: "с" }
	[dark][is=n]::before { content: "к" } [dark][is=p]::before { content: "п" }
	
	:host([colored]) div { position: relative }

	:host([colored]) div::after {
		content: "";
		position: absolute;
		inset: 0;
		z-index: -1;
		background-color: var(--diagram-light, white);
		color: var(--diagram-fill, white);
	}

	:host([colored]) [dark]::after { background: var(--diagram-dark, lightgray) }
	:host([colored]) [dark]::before { content: "+" }

	:host([colored]) [dark][is=K]::before { content: "K" }
	:host([colored]) [dark][is=Q]::before { content: "Q" }
	:host([colored]) [dark][is=R]::before { content: "R" }
	:host([colored]) [dark][is=B]::before { content: "B" }
	:host([colored]) [dark][is=N]::before { content: "N" }
	:host([colored]) [dark][is=P]::before { content: "P" }

	:host([colored]) [dark][is=k]::before { content: "Ц" }
	:host([colored]) [dark][is=q]::before { content: "Ф" }
	:host([colored]) [dark][is=r]::before { content: "Л" }
	:host([colored]) [dark][is=b]::before { content: "С" }
	:host([colored]) [dark][is=n]::before { content: "К" }
	:host([colored]) [dark][is=p]::before { content: "П" }

	:host([colored]) [is=K]::after { content: "0" }
	:host([colored]) [is=Q]::after { content: "1" }
	:host([colored]) [is=R]::after { content: "2" }
	:host([colored]) [is=B]::after { content: "3" }
	:host([colored]) [is=N]::after { content: "4" }
	:host([colored]) [is=P]::after { content: "5" }
	:host([colored]) [is=k]::after { content: "6" }
	:host([colored]) [is=q]::after { content: "7" }
	:host([colored]) [is=r]::after { content: "8" }
	:host([colored]) [is=b]::after { content: "9" }
	:host([colored]) [is=n]::after { content: ":" }
	:host([colored]) [is=p]::after { content: ";" }
`;function D(){const t=new CSSStyleSheet;return t.replaceSync(M),t}function B(t,e){return[t.toLowerCase(),""].includes(e==null?void 0:e.toLowerCase())}var u,f,h,N,l,c,i,S,v,m;class y extends HTMLElement{constructor(){super();s(this,i);s(this,u,new $);s(this,f,"8/8/8/8/8/8/8/8");s(this,h,!1);s(this,N,!1);s(this,l);s(this,c);d(this,l,this.attachShadow({mode:"closed"}))}connectedCallback(){P(this,c)||(b(this,i,S).call(this),b(this,i,v).call(this)),b(this,i,m).call(this)}attributeChangedCallback(r,o,n){switch(r){case"fen":d(this,f,n);break;case"flipped":d(this,h,B("flipped",n));break;case"colored":d(this,N,B("colored",n))}P(this,c)&&b(this,i,m).call(this)}}u=new WeakMap,f=new WeakMap,h=new WeakMap,N=new WeakMap,l=new WeakMap,c=new WeakMap,i=new WeakSet,S=function(){const r=F();if(d(this,c,r),r.forEach(n=>P(this,l).appendChild(n)),typeof window.webkitConvertPointFromNodeToPage=="function"){const n=()=>this.setAttribute("style",`--diagram-webkit-unit: ${this.getBoundingClientRect().width/8}px;`);n(),window.addEventListener("resize",n)}},v=function(){P(this,l).adoptedStyleSheets.push(D())},m=function(){[...P(this,u).encode({fen:P(this,f),colored:!1})].forEach((o,n)=>o===" "?P(this,c)[n].removeAttribute("is"):P(this,c)[n].setAttribute("is",o))},Q(y,"observedAttributes",["fen","flipped","colored"]);const z=["Cases","Smart"];function H(t,e){t.forEach(r=>{const o=document.createElement("option");o.textContent=r,e.appendChild(o)})}function J(t){const e=new CSSStyleSheet,r=`Diagram${t}`,o=`./fonts/${r}`,n=`${r}.woff2`;e.insertRule(`@font-face { font-family: "Diagram ${t}"; src: url("${o}/${n}"); font-display: block; }`),document.adoptedStyleSheets.push(e)}function W(t){const e=document.querySelector("#app");let r=`--diagram-font: Diagram ${t};`;t==="Assistant"&&(r+=" --diagram-spacing: -0.4cqw"),e.setAttribute("style",r)}function g(t){J(t),W(t)}function _(t){const e=fetch("https://lichess.org/api/tv/feed"),r=n=>t(n),o=()=>console.log("The stream has completed");e.then(j(r)).then(o)}const j=t=>e=>{const r=e.body.getReader(),o=/\r?\n/,n=new TextDecoder;let p="";const a=()=>r.read().then(({done:A,value:C})=>{if(A)p.length>0&&t(JSON.parse(p));else{const L=n.decode(C,{stream:!0});p+=L;const R=p.split(o);p=R.pop();for(const E of R.filter(O=>O))t(JSON.parse(E));return a()}});return a()},I=["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1","rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1","rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2","rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2","rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3","rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R b KQkq - 1 3","rnbqkb1r/pppp1ppp/5n2/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 2 4","rnbqkb1r/pppp1ppp/5n2/4P3/5p2/5N2/PPPP2PP/RNBQKB1R b KQkq - 0 4","rnbqkb1r/pppp1ppp/8/4P3/5pn1/5N2/PPPP2PP/RNBQKB1R w KQkq - 1 5","rnbqkb1r/pppp1ppp/8/4P3/3P1pn1/5N2/PPP3PP/RNBQKB1R b KQkq - 0 5","rnbqkb1r/pppp1p1p/8/4P1p1/3P1pn1/5N2/PPP3PP/RNBQKB1R w KQkq - 0 6","rnbqkb1r/pppp1p1p/8/4P1p1/3P1pn1/2N2N2/PPP3PP/R1BQKB1R b KQkq - 1 6","rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N1nN2/PPP3PP/R1BQKB1R w KQkq - 2 7","rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N1nN2/PPP1Q1PP/R1B1KB1R b KQkq - 3 7","rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N2N2/PPP1Q1PP/R1B1Kn1R w KQkq - 0 8","rnbqkb1r/pppp1p1p/8/4P1p1/3PNp2/5N2/PPP1Q1PP/R1B1Kn1R b KQkq - 1 8","rnbqkb1r/pppp1p1p/8/4P1p1/3PNp2/4nN2/PPP1Q1PP/R1B1K2R w KQkq - 2 9","rnbqkb1r/pppp1p1p/5N2/4P1p1/3P1p2/4nN2/PPP1Q1PP/R1B1K2R b KQkq - 3 9","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/4nN2/PPP1Q1PP/R1B1K2R w KQ - 4 10","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/4nN2/PPPBQ1PP/R3K2R b KQ - 5 10","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PPnBQ1PP/R3K2R w KQ - 0 11","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PPnBQKPP/R6R b - - 1 11","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PP1BQKPP/n6R w - - 0 12","rnbq1b1r/ppppkp1p/8/3NP1p1/3P1p2/5N2/PP1BQKPP/n6R b - - 1 12","rnbq1b1r/pppp1p1p/4k3/3NP1p1/3P1p2/5N2/PP1BQKPP/n6R w - - 2 13","rnbq1b1r/pppp1p1p/4k3/3NP1p1/2QP1p2/5N2/PP1B1KPP/n6R b - - 3 13","rnbq1b1r/p1pp1p1p/4k3/1p1NP1p1/2QP1p2/5N2/PP1B1KPP/n6R w - - 0 14","rnbq1b1r/p1pp1p1p/4k3/1p1NP1N1/2QP1p2/8/PP1B1KPP/n6R b - - 0 14","rnb2b1r/p1pp1p1p/4k3/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R w - - 0 15","rnb2b1r/p1Np1p1p/4k3/1p2P1q1/2QP1p2/8/PP1B1KPP/n6R b - - 0 15","rnb2b1r/p1Npkp1p/8/1p2P1q1/2QP1p2/8/PP1B1KPP/n6R w - - 1 16","rnb2b1r/p2pkp1p/8/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R b - - 2 16","rnb2b1r/p2p1p1p/4k3/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R w - - 3 17","rnb2b1r/p2p1p1p/4k3/1p2P1q1/2QP1N2/8/PP1B1KPP/n6R b - - 0 17","rnb2b1r/p2pkp1p/8/1p2P1q1/2QP1N2/8/PP1B1KPP/n6R w - - 1 18","rnb2b1r/p2pkp1p/8/1p1NP1q1/2QP4/8/PP1B1KPP/n6R b - - 2 18","rnb1kb1r/p2p1p1p/8/1p1NP1q1/2QP4/8/PP1B1KPP/n6R w - - 3 19","rnQ1kb1r/p2p1p1p/8/1p1NP1q1/3P4/8/PP1B1KPP/n6R b - - 0 19","rnQqkb1r/p2p1p1p/8/1p1NP3/3P4/8/PP1B1KPP/n6R w - - 1 20","rnQqkb1r/p1Np1p1p/8/1p2P3/3P4/8/PP1B1KPP/n6R b - - 2 20","rnQq1b1r/p1Npkp1p/8/1p2P3/3P4/8/PP1B1KPP/n6R w - - 3 21","rnQq1b1r/p1Npkp1p/8/1p2P3/1B1P4/8/PP3KPP/n6R b - - 4 21","rnQq1b1r/p1N1kp1p/3p4/1p2P3/1B1P4/8/PP3KPP/n6R w - - 0 22","rnQq1b1r/p1N1kp1p/3B4/1p2P3/3P4/8/PP3KPP/n6R b - - 0 22","rnQ2b1r/p1N1kp1p/3q4/1p2P3/3P4/8/PP3KPP/n6R w - - 0 23","rn2Qb1r/p1N1kp1p/3q4/1p2P3/3P4/8/PP3KPP/n6R b - - 1 23"];function U(){const{random:t}=Math,e=t(),r=(o,n)=>o+t()*n;return e<.05?r(0,200):e<.1?r(2e3,1e3):e<.35?r(900,600):r(300,600)}const G=t=>new Promise(e=>setTimeout(e,t));async function X(t){for(const e of I)t({d:{fen:e}}),await G(U())}customElements.define("demo-diagram",y);{const t=document.querySelector("#typography");H(z,t),g(t.value),t.addEventListener("change",({target:e})=>g(e.value))}{let e=function(r){document.querySelectorAll("demo-diagram").forEach(o=>r?o.setAttribute("colored","colored"):o.removeAttribute("colored"))};var Z=e;const t=document.querySelector("#colored");e(t.checked),t.addEventListener("change",({target:r})=>e(r.checked))}{let t=function({players:e,isFlipped:r,figure:o}){let[n,p]=o.querySelectorAll(".player");r&&([n,p]=[p,n]),p.classList.remove("accent"),n.classList.add("accent"),p.textContent=e[0].user.name,n.textContent=e[1].user.name};var V=t;_(({t:e,d:r})=>{const o=document.querySelector("figure#live"),n=o.querySelector("demo-diagram");if(n.setAttribute("fen",r.fen),e==="featured"){const p=r.orientation==="black";p?n.setAttribute("flipped","flipped"):n.removeAttribute("flipped"),t({...r,isFlipped:p,figure:o})}})}X(({d:t})=>{document.querySelector("figure#bronstein").querySelector("demo-diagram").setAttribute("fen",t.fen)});
