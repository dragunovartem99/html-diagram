var v=Object.defineProperty;var k=e=>{throw TypeError(e)};var A=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var h=(e,t,r)=>A(e,typeof t!="symbol"?t+"":t,r),f=(e,t,r)=>t.has(e)||k("Cannot "+r);var P=(e,t,r)=>(f(e,t,"read from private field"),r?r.call(e):t.get(e)),b=(e,t,r)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),N=(e,t,r,n)=>(f(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),l=(e,t,r)=>(f(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const p of o)if(p.type==="childList")for(const i of p.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const p={};return o.integrity&&(p.integrity=o.integrity),o.referrerPolicy&&(p.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?p.credentials="include":o.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function n(o){if(o.ep)return;o.ep=!0;const p=r(o);fetch(o.href,p)}})();const C=`
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
`;function L(){const e=new CSSStyleSheet;return e.replaceSync(C),e}function E(){return Array.from({length:64},(t,r)=>{const n=document.createElement("div");return r*9&8&&n.setAttribute("dark",""),n})}function O(e){return e.split(" ")[0].replace(/\//g,"").replace(/\d/g,t=>"1".repeat(+t)).slice(0,64).split("")}var c;class T{constructor(){b(this,c,E())}setPosition(t){O(t).forEach((r,n)=>isNaN(+r)?P(this,c)[n].setAttribute("is",r):P(this,c)[n].removeAttribute("is"))}get html(){return P(this,c)}}c=new WeakMap;var d,a,s,R,K,Q;class q extends HTMLElement{constructor(){super();b(this,s);b(this,d,new T);b(this,a);N(this,a,this.attachShadow({mode:"closed"}))}connectedCallback(){l(this,s,R).call(this),l(this,s,K).call(this),l(this,s,Q).call(this)}attributeChangedCallback(r,n,o){P(this,d).setPosition(o)}}d=new WeakMap,a=new WeakMap,s=new WeakSet,R=function(){P(this,d).html.forEach(r=>P(this,a).appendChild(r))},K=function(){P(this,a).adoptedStyleSheets.push(L())},Q=function(){if(typeof window.webkitConvertPointFromNodeToPage=="function"){const n=()=>this.setAttribute("style",`--diagram-webkit-unit: ${this.getBoundingClientRect().width/8}px;`);n(),window.addEventListener("resize",n)}},h(q,"observedAttributes",["fen"]);const x=["Cases","Smart"];function $(e,t){e.forEach(r=>{const n=document.createElement("option");n.textContent=r,t.appendChild(n)})}function F(e){const t=new CSSStyleSheet,r=`Diagram${e}`,n=`./fonts/${r}`,o=`${r}.woff2`;t.insertRule(`@font-face { font-family: "Diagram ${e}"; src: url("${n}/${o}"); font-display: block; }`),document.adoptedStyleSheets.push(t)}function M(e){const t=document.querySelector("#app");let r=`--diagram-font: Diagram ${e};`;e==="Assistant"&&(r+=" --diagram-spacing: -0.4cqw"),t.setAttribute("style",r)}function m(e){F(e),M(e)}function D(e){const t=fetch("https://lichess.org/api/tv/feed"),r=o=>e(o),n=()=>console.log("The stream has completed");t.then(z(r)).then(n)}const z=e=>t=>{const r=t.body.getReader(),n=/\r?\n/,o=new TextDecoder;let p="";const i=()=>r.read().then(({done:B,value:g})=>{if(B)p.length>0&&e(JSON.parse(p));else{const w=o.decode(g,{stream:!0});p+=w;const u=p.split(n);p=u.pop();for(const y of u.filter(S=>S))e(JSON.parse(y));return i()}});return i()},H=["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1","rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1","rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2","rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2","rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3","rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R b KQkq - 1 3","rnbqkb1r/pppp1ppp/5n2/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 2 4","rnbqkb1r/pppp1ppp/5n2/4P3/5p2/5N2/PPPP2PP/RNBQKB1R b KQkq - 0 4","rnbqkb1r/pppp1ppp/8/4P3/5pn1/5N2/PPPP2PP/RNBQKB1R w KQkq - 1 5","rnbqkb1r/pppp1ppp/8/4P3/3P1pn1/5N2/PPP3PP/RNBQKB1R b KQkq - 0 5","rnbqkb1r/pppp1p1p/8/4P1p1/3P1pn1/5N2/PPP3PP/RNBQKB1R w KQkq - 0 6","rnbqkb1r/pppp1p1p/8/4P1p1/3P1pn1/2N2N2/PPP3PP/R1BQKB1R b KQkq - 1 6","rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N1nN2/PPP3PP/R1BQKB1R w KQkq - 2 7","rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N1nN2/PPP1Q1PP/R1B1KB1R b KQkq - 3 7","rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N2N2/PPP1Q1PP/R1B1Kn1R w KQkq - 0 8","rnbqkb1r/pppp1p1p/8/4P1p1/3PNp2/5N2/PPP1Q1PP/R1B1Kn1R b KQkq - 1 8","rnbqkb1r/pppp1p1p/8/4P1p1/3PNp2/4nN2/PPP1Q1PP/R1B1K2R w KQkq - 2 9","rnbqkb1r/pppp1p1p/5N2/4P1p1/3P1p2/4nN2/PPP1Q1PP/R1B1K2R b KQkq - 3 9","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/4nN2/PPP1Q1PP/R1B1K2R w KQ - 4 10","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/4nN2/PPPBQ1PP/R3K2R b KQ - 5 10","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PPnBQ1PP/R3K2R w KQ - 0 11","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PPnBQKPP/R6R b - - 1 11","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PP1BQKPP/n6R w - - 0 12","rnbq1b1r/ppppkp1p/8/3NP1p1/3P1p2/5N2/PP1BQKPP/n6R b - - 1 12","rnbq1b1r/pppp1p1p/4k3/3NP1p1/3P1p2/5N2/PP1BQKPP/n6R w - - 2 13","rnbq1b1r/pppp1p1p/4k3/3NP1p1/2QP1p2/5N2/PP1B1KPP/n6R b - - 3 13","rnbq1b1r/p1pp1p1p/4k3/1p1NP1p1/2QP1p2/5N2/PP1B1KPP/n6R w - - 0 14","rnbq1b1r/p1pp1p1p/4k3/1p1NP1N1/2QP1p2/8/PP1B1KPP/n6R b - - 0 14","rnb2b1r/p1pp1p1p/4k3/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R w - - 0 15","rnb2b1r/p1Np1p1p/4k3/1p2P1q1/2QP1p2/8/PP1B1KPP/n6R b - - 0 15","rnb2b1r/p1Npkp1p/8/1p2P1q1/2QP1p2/8/PP1B1KPP/n6R w - - 1 16","rnb2b1r/p2pkp1p/8/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R b - - 2 16","rnb2b1r/p2p1p1p/4k3/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R w - - 3 17","rnb2b1r/p2p1p1p/4k3/1p2P1q1/2QP1N2/8/PP1B1KPP/n6R b - - 0 17","rnb2b1r/p2pkp1p/8/1p2P1q1/2QP1N2/8/PP1B1KPP/n6R w - - 1 18","rnb2b1r/p2pkp1p/8/1p1NP1q1/2QP4/8/PP1B1KPP/n6R b - - 2 18","rnb1kb1r/p2p1p1p/8/1p1NP1q1/2QP4/8/PP1B1KPP/n6R w - - 3 19","rnQ1kb1r/p2p1p1p/8/1p1NP1q1/3P4/8/PP1B1KPP/n6R b - - 0 19","rnQqkb1r/p2p1p1p/8/1p1NP3/3P4/8/PP1B1KPP/n6R w - - 1 20","rnQqkb1r/p1Np1p1p/8/1p2P3/3P4/8/PP1B1KPP/n6R b - - 2 20","rnQq1b1r/p1Npkp1p/8/1p2P3/3P4/8/PP1B1KPP/n6R w - - 3 21","rnQq1b1r/p1Npkp1p/8/1p2P3/1B1P4/8/PP3KPP/n6R b - - 4 21","rnQq1b1r/p1N1kp1p/3p4/1p2P3/1B1P4/8/PP3KPP/n6R w - - 0 22","rnQq1b1r/p1N1kp1p/3B4/1p2P3/3P4/8/PP3KPP/n6R b - - 0 22","rnQ2b1r/p1N1kp1p/3q4/1p2P3/3P4/8/PP3KPP/n6R w - - 0 23","rn2Qb1r/p1N1kp1p/3q4/1p2P3/3P4/8/PP3KPP/n6R b - - 1 23"];function W(){const{random:e}=Math,t=e(),r=(n,o)=>n+e()*o;return t<.05?r(0,200):t<.1?r(2e3,1e3):t<.35?r(900,600):r(300,600)}const I=e=>new Promise(t=>setTimeout(t,e));async function J(e){for(const t of H)e({d:{fen:t}}),await I(W())}customElements.define("demo-diagram",q);{const e=document.querySelector("#typography");$(x,e),m(e.value),e.addEventListener("change",({target:t})=>m(t.value))}{let t=function(r){document.querySelectorAll("demo-diagram").forEach(n=>r?n.setAttribute("colored","colored"):n.removeAttribute("colored"))};var U=t;const e=document.querySelector("#colored");t(e.checked),e.addEventListener("change",({target:r})=>t(r.checked))}{let e=function({players:t,isFlipped:r,figure:n}){let[o,p]=n.querySelectorAll(".player");r&&([o,p]=[p,o]),p.classList.remove("accent"),o.classList.add("accent"),p.textContent=t[0].user.name,o.textContent=t[1].user.name};var _=e;D(({t,d:r})=>{const n=document.querySelector("figure#live"),o=n.querySelector("demo-diagram");if(o.setAttribute("fen",r.fen),t==="featured"){const p=r.orientation==="black";p?o.setAttribute("flipped","flipped"):o.removeAttribute("flipped"),e({...r,isFlipped:p,figure:n})}})}J(({d:e})=>{document.querySelector("figure#bronstein").querySelector("demo-diagram").setAttribute("fen",e.fen)});
