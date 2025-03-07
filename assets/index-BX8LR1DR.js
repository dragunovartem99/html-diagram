var x=Object.defineProperty;var K=e=>{throw TypeError(e)};var T=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Q=(e,t,r)=>T(e,typeof t!="symbol"?t+"":t,r),m=(e,t,r)=>t.has(e)||K("Cannot "+r);var P=(e,t,r)=>(m(e,t,"read from private field"),r?r.call(e):t.get(e)),s=(e,t,r)=>t.has(e)?K("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),u=(e,t,r,o)=>(m(e,t,"write to private field"),o?o.call(e,r):t.set(e,r),r),a=(e,t,r)=>(m(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const p of n)if(p.type==="childList")for(const c of p.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const p={};return n.integrity&&(p.integrity=n.integrity),n.referrerPolicy&&(p.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?p.credentials="include":n.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(n){if(n.ep)return;n.ep=!0;const p=r(n);fetch(n.href,p)}})();function F(){return Array.from({length:64},(t,r)=>{const o=document.createElement("div");return r*9&8&&o.setAttribute("dark",""),o})}function $({fen:e,reversed:t}){return t?[...B(e)].reverse():[...B(e)]}function B(e){return e.split(" ")[0].replace(/\//g,"").replace(/\d/g,t=>"1".repeat(+t)).slice(0,64)}var b,k,h,N,q;class M{constructor(){s(this,N);s(this,b,F());s(this,k,"8/8/8/8/8/8/8/8");s(this,h,!1)}get html(){return P(this,b)}set fen(t){u(this,k,t),a(this,N,q).call(this)}set flipped(t){u(this,h,t),a(this,N,q).call(this)}}b=new WeakMap,k=new WeakMap,h=new WeakMap,N=new WeakSet,q=function(){$({fen:P(this,k),reversed:P(this,h)}).forEach((t,r)=>isNaN(+t)?P(this,b)[r].setAttribute("is",t):P(this,b)[r].removeAttribute("is"))};const z=`
	:host {
		display: grid;
		container-type: inline-size;
		grid-template-columns: repeat(8, 1fr);
		grid-auto-rows: 1fr;
	}

	div {
		line-height: 1;
		user-select: none;
		font-family: var(--diagram-font);
		color: var(--diagram-stroke, black);
		font-size: var(--diagram-webkit-unit, 12.5cqw);
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
		color: var(--diagram-fill, white);
		background-color: var(--diagram-light, white);
		-webkit-text-stroke-width: var(--diagram-outline);
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
`;function D(){const e=new CSSStyleSheet;return e.replaceSync(z),e}function H(e){return typeof e.webkitConvertPointFromNodeToPage=="function"}function W(e){return e!==null}var d,l,f,i,y,v,S;class w extends HTMLElement{constructor(){super();s(this,i);s(this,d,new M);s(this,l);s(this,f);u(this,l,this.attachShadow({mode:"closed"}))}connectedCallback(){a(this,i,y).call(this),a(this,i,v).call(this),H(window)&&a(this,i,S).call(this)}disconnectedCallback(){var r;(r=P(this,f))==null||r.unobserve(this)}attributeChangedCallback(r,o,n){r==="fen"&&(P(this,d).fen=n),r==="flipped"&&(P(this,d).flipped=W(n))}}d=new WeakMap,l=new WeakMap,f=new WeakMap,i=new WeakSet,y=function(){P(this,d).html.forEach(r=>P(this,l).appendChild(r))},v=function(){P(this,l).adoptedStyleSheets.push(D())},S=function(){const r=()=>{this.setAttribute("style",`--diagram-webkit-unit: ${this.clientWidth/8}px;`)};requestAnimationFrame(()=>r()),u(this,f,new ResizeObserver(r)),P(this,f).observe(this)},Q(w,"observedAttributes",["fen","flipped"]);const I=["Adventurer","Cases","Merida","Smart"];function J(e,t){e.forEach(r=>{const o=document.createElement("option");o.textContent=r,t.appendChild(o)})}function _(e){const t=new CSSStyleSheet,r=`Diagram${e}`,o=`./fonts/${r}`,n=`${r}.woff2`;t.insertRule(`@font-face { font-family: "Diagram ${e}"; src: url("${o}/${n}"); font-display: block; }`),document.adoptedStyleSheets.push(t)}function U(e){const t=document.querySelector("#app");let r=`--diagram-font: Diagram ${e};`;e==="Assistant"&&(r+=" --diagram-spacing: -0.4cqw"),t.setAttribute("style",r)}function g(e){_(e),U(e)}function j(e){const t=fetch("https://lichess.org/api/tv/feed"),r=n=>e(n),o=()=>console.log("The stream has completed");t.then(G(r)).then(o)}const G=e=>t=>{const r=t.body.getReader(),o=/\r?\n/,n=new TextDecoder;let p="";const c=()=>r.read().then(({done:A,value:C})=>{if(A)p.length>0&&e(JSON.parse(p));else{const L=n.decode(C,{stream:!0});p+=L;const R=p.split(o);p=R.pop();for(const E of R.filter(O=>O))e(JSON.parse(E));return c()}});return c()},V=["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1","rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1","rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2","rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2","rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3","rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R b KQkq - 1 3","rnbqkb1r/pppp1ppp/5n2/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 2 4","rnbqkb1r/pppp1ppp/5n2/4P3/5p2/5N2/PPPP2PP/RNBQKB1R b KQkq - 0 4","rnbqkb1r/pppp1ppp/8/4P3/5pn1/5N2/PPPP2PP/RNBQKB1R w KQkq - 1 5","rnbqkb1r/pppp1ppp/8/4P3/3P1pn1/5N2/PPP3PP/RNBQKB1R b KQkq - 0 5","rnbqkb1r/pppp1p1p/8/4P1p1/3P1pn1/5N2/PPP3PP/RNBQKB1R w KQkq - 0 6","rnbqkb1r/pppp1p1p/8/4P1p1/3P1pn1/2N2N2/PPP3PP/R1BQKB1R b KQkq - 1 6","rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N1nN2/PPP3PP/R1BQKB1R w KQkq - 2 7","rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N1nN2/PPP1Q1PP/R1B1KB1R b KQkq - 3 7","rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N2N2/PPP1Q1PP/R1B1Kn1R w KQkq - 0 8","rnbqkb1r/pppp1p1p/8/4P1p1/3PNp2/5N2/PPP1Q1PP/R1B1Kn1R b KQkq - 1 8","rnbqkb1r/pppp1p1p/8/4P1p1/3PNp2/4nN2/PPP1Q1PP/R1B1K2R w KQkq - 2 9","rnbqkb1r/pppp1p1p/5N2/4P1p1/3P1p2/4nN2/PPP1Q1PP/R1B1K2R b KQkq - 3 9","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/4nN2/PPP1Q1PP/R1B1K2R w KQ - 4 10","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/4nN2/PPPBQ1PP/R3K2R b KQ - 5 10","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PPnBQ1PP/R3K2R w KQ - 0 11","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PPnBQKPP/R6R b - - 1 11","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PP1BQKPP/n6R w - - 0 12","rnbq1b1r/ppppkp1p/8/3NP1p1/3P1p2/5N2/PP1BQKPP/n6R b - - 1 12","rnbq1b1r/pppp1p1p/4k3/3NP1p1/3P1p2/5N2/PP1BQKPP/n6R w - - 2 13","rnbq1b1r/pppp1p1p/4k3/3NP1p1/2QP1p2/5N2/PP1B1KPP/n6R b - - 3 13","rnbq1b1r/p1pp1p1p/4k3/1p1NP1p1/2QP1p2/5N2/PP1B1KPP/n6R w - - 0 14","rnbq1b1r/p1pp1p1p/4k3/1p1NP1N1/2QP1p2/8/PP1B1KPP/n6R b - - 0 14","rnb2b1r/p1pp1p1p/4k3/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R w - - 0 15","rnb2b1r/p1Np1p1p/4k3/1p2P1q1/2QP1p2/8/PP1B1KPP/n6R b - - 0 15","rnb2b1r/p1Npkp1p/8/1p2P1q1/2QP1p2/8/PP1B1KPP/n6R w - - 1 16","rnb2b1r/p2pkp1p/8/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R b - - 2 16","rnb2b1r/p2p1p1p/4k3/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R w - - 3 17","rnb2b1r/p2p1p1p/4k3/1p2P1q1/2QP1N2/8/PP1B1KPP/n6R b - - 0 17","rnb2b1r/p2pkp1p/8/1p2P1q1/2QP1N2/8/PP1B1KPP/n6R w - - 1 18","rnb2b1r/p2pkp1p/8/1p1NP1q1/2QP4/8/PP1B1KPP/n6R b - - 2 18","rnb1kb1r/p2p1p1p/8/1p1NP1q1/2QP4/8/PP1B1KPP/n6R w - - 3 19","rnQ1kb1r/p2p1p1p/8/1p1NP1q1/3P4/8/PP1B1KPP/n6R b - - 0 19","rnQqkb1r/p2p1p1p/8/1p1NP3/3P4/8/PP1B1KPP/n6R w - - 1 20","rnQqkb1r/p1Np1p1p/8/1p2P3/3P4/8/PP1B1KPP/n6R b - - 2 20","rnQq1b1r/p1Npkp1p/8/1p2P3/3P4/8/PP1B1KPP/n6R w - - 3 21","rnQq1b1r/p1Npkp1p/8/1p2P3/1B1P4/8/PP3KPP/n6R b - - 4 21","rnQq1b1r/p1N1kp1p/3p4/1p2P3/1B1P4/8/PP3KPP/n6R w - - 0 22","rnQq1b1r/p1N1kp1p/3B4/1p2P3/3P4/8/PP3KPP/n6R b - - 0 22","rnQ2b1r/p1N1kp1p/3q4/1p2P3/3P4/8/PP3KPP/n6R w - - 0 23","rn2Qb1r/p1N1kp1p/3q4/1p2P3/3P4/8/PP3KPP/n6R b - - 1 23"];function X(){const{random:e}=Math,t=e(),r=(o,n)=>o+e()*n;return t<.05?r(0,200):t<.1?r(2e3,1e3):t<.35?r(900,600):r(300,600)}const Y=e=>new Promise(t=>setTimeout(t,e));async function Z(e){for(const t of V)e({d:{fen:t}}),await Y(X())}customElements.define("demo-diagram",w);{const e=document.querySelector("#typography");J(I,e),g(e.value),e.addEventListener("change",({target:t})=>g(t.value))}{let t=function(r){document.querySelectorAll("demo-diagram").forEach(o=>r?o.setAttribute("colored","colored"):o.removeAttribute("colored"))};var te=t;const e=document.querySelector("#colored");t(e.checked),e.addEventListener("change",({target:r})=>t(r.checked))}{let e=function({players:t,isFlipped:r,figure:o}){let[n,p]=o.querySelectorAll(".player");r&&([n,p]=[p,n]),p.classList.remove("accent"),n.classList.add("accent"),p.textContent=t[0].user.name,n.textContent=t[1].user.name};var re=e;j(({t,d:r})=>{const o=document.querySelector("figure#live"),n=o.querySelector("demo-diagram");if(n.setAttribute("fen",r.fen),t==="featured"){const p=r.orientation==="black";p?n.setAttribute("flipped","flipped"):n.removeAttribute("flipped"),e({...r,isFlipped:p,figure:o})}})}Z(({d:e})=>{document.querySelector("figure#bronstein").querySelector("demo-diagram").setAttribute("fen",e.fen)});
