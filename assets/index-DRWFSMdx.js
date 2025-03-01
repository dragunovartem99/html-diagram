var A=Object.defineProperty;var q=e=>{throw TypeError(e)};var z=(e,r,t)=>r in e?A(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var R=(e,r,t)=>z(e,typeof r!="symbol"?r+"":r,t),u=(e,r,t)=>r.has(e)||q("Cannot "+t);var a=(e,r,t)=>(u(e,r,"read from private field"),t?t.call(e):r.get(e)),o=(e,r,t)=>r.has(e)?q("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),l=(e,r,t,P)=>(u(e,r,"write to private field"),P?P.call(e,t):r.set(e,t),t),b=(e,r,t)=>(u(e,r,"access private method"),t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))P(p);new MutationObserver(p=>{for(const n of p)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&P(c)}).observe(document,{childList:!0,subtree:!0});function t(p){const n={};return p.integrity&&(n.integrity=p.integrity),p.referrerPolicy&&(n.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?n.credentials="include":p.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function P(p){if(p.ep)return;p.ep=!0;const n=t(p);fetch(p.href,n)}})();function x(){return new Map([["K",{light:"K",dark:"k"}],["Q",{light:"Q",dark:"q"}],["R",{light:"R",dark:"r"}],["B",{light:"B",dark:"b"}],["N",{light:"N",dark:"n"}],["P",{light:"P",dark:"p"}],["k",{light:"Ц",dark:"ц"}],["q",{light:"Ф",dark:"ф"}],["r",{light:"Л",dark:"л"}],["b",{light:"С",dark:"с"}],["n",{light:"К",dark:"к"}],["p",{light:"П",dark:"п"}],[" ",{light:"+",dark:"-"}]])}var k;class M{constructor(){o(this,k,x())}encode(r){return r.split(" ")[0].replace(/\//g,"").replace(/\d/g,t=>" ".repeat(+t)).slice(0,64).replace(/./g,(t,P)=>{const p=a(this,k).get(t);if(!p)return t;const n=P*9&8?"dark":"light";return p[n]})}reverse(r){return r.split("").reverse().join("")}}k=new WeakMap;function E(){const e=document.createElement("div"),r=document.createElement("div"),t=document.createElement("div");return e.classList.add("files"),r.classList.add("ranks"),t.classList.add("position"),r.appendChild(t),e.appendChild(r),{root:e,position:t}}const O=`
	:host {
		display: block;
		--diagram-files-content: "abcdefgh";
		--diagram-ranks-content: "87654321";
	}
	:host([flipped]) { --diagram-files-content: "hgfedcba"; --diagram-ranks-content: "12345678"; }
	:host([coords~=left   i]) .ranks:before { content: var(--diagram-ranks-content); }
	:host([coords~=top    i]) .files:before { content: var(--diagram-files-content); }
	:host([coords~=right  i]) .ranks:after { content: var(--diagram-ranks-content); }
	:host([coords~=bottom i]) .files:after { content: var(--diagram-files-content); }
	.position {
		aspect-ratio: 1 / 1;
		font-size: 12.5cqw;
		line-break: anywhere;
		white-space: break-spaces;
		text-align: center;
		user-select: none;
		font-family: var(--diagram-font);
		letter-spacing: var(--diagram-spacing, -0.1cqw);
		color: var(--diagram-color);
	}
	*:before, *:after {
		display: block;
		text-align: start;
		white-space: nowrap;
		color: var(--diagram-coords-color, var(--diagram-color));
		font-family: var(--diagram-coords-font);
		font-size: var(--diagram-coords-size, 6.25cqw);
		text-transform: var(--diagram-coords-capitalize, lowercase);
	}
	.files {
		container-type: inline-size;
		line-height: 1;
	}
	.files:before, .files:after {
		padding-inline-start: var(--diagram-files-start);
		letter-spacing: var(--diagram-files-gap);
		font-size: var(--diagram-files-size, var(--diagram-coords-size));
	}
	.files:before { margin-bottom: var(--diagram-files-offset); }
	.files:after { margin-top: var(--diagram-files-offset); }
	.ranks {
		border: var(--diagram-border);
		container-type: inline-size;
	}
	.ranks:before, .ranks:after {
		position: absolute;
		top: 0;
		writing-mode: vertical-rl;
		text-orientation: upright;
		padding-inline-start: var(--diagram-ranks-start);
		letter-spacing: var(--diagram-ranks-gap);
		font-size: var(--diagram-ranks-size, var(--diagram-coords-size));
	}
	.ranks:before { left: calc(var(--diagram-ranks-offset, 0cqw) * -1); }
	.ranks:after { right: calc(var(--diagram-ranks-offset, 0cqw) * -1); }
`;function T(){const e=new CSSStyleSheet;return e.replaceSync(O),e}var f,g,m,d,s,i,B,w,h;class Q extends HTMLElement{constructor(){super();o(this,i);o(this,f,"8/8/8/8/8/8/8/8");o(this,g,!1);o(this,m,new M);o(this,d);o(this,s);l(this,d,this.attachShadow({mode:"closed"}))}connectedCallback(){a(this,s)||(b(this,i,B).call(this),b(this,i,w).call(this)),b(this,i,h).call(this)}attributeChangedCallback(t,P,p){if(p!==P){switch(t){case"fen":l(this,f,p);break;case"flipped":const n=["flipped",""].includes(p==null?void 0:p.toLowerCase());l(this,g,n),n||this.removeAttribute("flipped")}a(this,s)&&b(this,i,h).call(this)}}}f=new WeakMap,g=new WeakMap,m=new WeakMap,d=new WeakMap,s=new WeakMap,i=new WeakSet,B=function(){const{root:t,position:P}=E();l(this,s,P),a(this,d).appendChild(t)},w=function(){a(this,d).adoptedStyleSheets.push(T())},h=function(){let t=a(this,m).encode(a(this,f));a(this,g)&&(t=a(this,m).reverse(t)),a(this,s).textContent=t},R(Q,"observedAttributes",["fen","flipped"]);const $=["Adventurer","Alfonso-X","Alpha","Cases","Kingdom","Leipzig","Mark","Merida","Smart","Tasc"];function F(e,r){e.forEach(t=>{const P=document.createElement("option");P.textContent=t,r.appendChild(P)})}function D(e){const r=new CSSStyleSheet,t=`Diagram${e}`,P=`./fonts/${t}`,p=`${t}.woff2`;r.insertRule(`@font-face { font-family: "Diagram ${e}"; src: url("${P}/${p}"); font-display: block; }`),document.adoptedStyleSheets.push(r)}function H(e){const r=document.querySelector("#app");let t=`--diagram-font: Diagram ${e};`;e==="Assistant"&&(t+=" --diagram-spacing: -0.4cqw"),r.setAttribute("style",t)}function K(e){D(e),H(e)}function j(e){const r=fetch("https://lichess.org/api/tv/feed"),t=p=>e(p),P=()=>console.log("The stream has completed");r.then(J(t)).then(P)}const J=e=>r=>{const t=r.body.getReader(),P=/\r?\n/,p=new TextDecoder;let n="";const c=()=>t.read().then(({done:y,value:v})=>{if(y)n.length>0&&e(JSON.parse(n));else{const S=p.decode(v,{stream:!0});n+=S;const N=n.split(P);n=N.pop();for(const C of N.filter(L=>L))e(JSON.parse(C));return c()}});return c()},I=["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1","rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1","rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2","rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2","rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3","rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R b KQkq - 1 3","rnbqkb1r/pppp1ppp/5n2/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 2 4","rnbqkb1r/pppp1ppp/5n2/4P3/5p2/5N2/PPPP2PP/RNBQKB1R b KQkq - 0 4","rnbqkb1r/pppp1ppp/8/4P3/5pn1/5N2/PPPP2PP/RNBQKB1R w KQkq - 1 5","rnbqkb1r/pppp1ppp/8/4P3/3P1pn1/5N2/PPP3PP/RNBQKB1R b KQkq - 0 5","rnbqkb1r/pppp1p1p/8/4P1p1/3P1pn1/5N2/PPP3PP/RNBQKB1R w KQkq - 0 6","rnbqkb1r/pppp1p1p/8/4P1p1/3P1pn1/2N2N2/PPP3PP/R1BQKB1R b KQkq - 1 6","rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N1nN2/PPP3PP/R1BQKB1R w KQkq - 2 7","rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N1nN2/PPP1Q1PP/R1B1KB1R b KQkq - 3 7","rnbqkb1r/pppp1p1p/8/4P1p1/3P1p2/2N2N2/PPP1Q1PP/R1B1Kn1R w KQkq - 0 8","rnbqkb1r/pppp1p1p/8/4P1p1/3PNp2/5N2/PPP1Q1PP/R1B1Kn1R b KQkq - 1 8","rnbqkb1r/pppp1p1p/8/4P1p1/3PNp2/4nN2/PPP1Q1PP/R1B1K2R w KQkq - 2 9","rnbqkb1r/pppp1p1p/5N2/4P1p1/3P1p2/4nN2/PPP1Q1PP/R1B1K2R b KQkq - 3 9","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/4nN2/PPP1Q1PP/R1B1K2R w KQ - 4 10","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/4nN2/PPPBQ1PP/R3K2R b KQ - 5 10","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PPnBQ1PP/R3K2R w KQ - 0 11","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PPnBQKPP/R6R b - - 1 11","rnbq1b1r/ppppkp1p/5N2/4P1p1/3P1p2/5N2/PP1BQKPP/n6R w - - 0 12","rnbq1b1r/ppppkp1p/8/3NP1p1/3P1p2/5N2/PP1BQKPP/n6R b - - 1 12","rnbq1b1r/pppp1p1p/4k3/3NP1p1/3P1p2/5N2/PP1BQKPP/n6R w - - 2 13","rnbq1b1r/pppp1p1p/4k3/3NP1p1/2QP1p2/5N2/PP1B1KPP/n6R b - - 3 13","rnbq1b1r/p1pp1p1p/4k3/1p1NP1p1/2QP1p2/5N2/PP1B1KPP/n6R w - - 0 14","rnbq1b1r/p1pp1p1p/4k3/1p1NP1N1/2QP1p2/8/PP1B1KPP/n6R b - - 0 14","rnb2b1r/p1pp1p1p/4k3/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R w - - 0 15","rnb2b1r/p1Np1p1p/4k3/1p2P1q1/2QP1p2/8/PP1B1KPP/n6R b - - 0 15","rnb2b1r/p1Npkp1p/8/1p2P1q1/2QP1p2/8/PP1B1KPP/n6R w - - 1 16","rnb2b1r/p2pkp1p/8/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R b - - 2 16","rnb2b1r/p2p1p1p/4k3/1p1NP1q1/2QP1p2/8/PP1B1KPP/n6R w - - 3 17","rnb2b1r/p2p1p1p/4k3/1p2P1q1/2QP1N2/8/PP1B1KPP/n6R b - - 0 17","rnb2b1r/p2pkp1p/8/1p2P1q1/2QP1N2/8/PP1B1KPP/n6R w - - 1 18","rnb2b1r/p2pkp1p/8/1p1NP1q1/2QP4/8/PP1B1KPP/n6R b - - 2 18","rnb1kb1r/p2p1p1p/8/1p1NP1q1/2QP4/8/PP1B1KPP/n6R w - - 3 19","rnQ1kb1r/p2p1p1p/8/1p1NP1q1/3P4/8/PP1B1KPP/n6R b - - 0 19","rnQqkb1r/p2p1p1p/8/1p1NP3/3P4/8/PP1B1KPP/n6R w - - 1 20","rnQqkb1r/p1Np1p1p/8/1p2P3/3P4/8/PP1B1KPP/n6R b - - 2 20","rnQq1b1r/p1Npkp1p/8/1p2P3/3P4/8/PP1B1KPP/n6R w - - 3 21","rnQq1b1r/p1Npkp1p/8/1p2P3/1B1P4/8/PP3KPP/n6R b - - 4 21","rnQq1b1r/p1N1kp1p/3p4/1p2P3/1B1P4/8/PP3KPP/n6R w - - 0 22","rnQq1b1r/p1N1kp1p/3B4/1p2P3/3P4/8/PP3KPP/n6R b - - 0 22","rnQ2b1r/p1N1kp1p/3q4/1p2P3/3P4/8/PP3KPP/n6R w - - 0 23","rn2Qb1r/p1N1kp1p/3q4/1p2P3/3P4/8/PP3KPP/n6R b - - 1 23"];function X(){const{random:e}=Math,r=e(),t=(P,p)=>P+e()*p;return r<.05?t(0,200):r<.1?t(2e3,1e3):r<.35?t(900,600):t(300,600)}const G=e=>new Promise(r=>setTimeout(r,e));async function U(e){for(const r of I)e({d:{fen:r}}),await G(X())}customElements.define("demo-diagram",Q);{const e=document.querySelector("#typography");F($,e),K(e.value),e.addEventListener("change",({target:r})=>K(r.value))}{let e=function({players:r,isFlipped:t,figure:P}){let[p,n]=P.querySelectorAll(".player");t&&([p,n]=[n,p]),n.classList.remove("accent"),p.classList.add("accent"),n.textContent=r[0].user.name,p.textContent=r[1].user.name};var Y=e;j(({t:r,d:t})=>{const P=document.querySelector("figure#live"),p=P.querySelector("demo-diagram");if(p.setAttribute("fen",t.fen),r==="featured"){const n=t.orientation==="black";n?p.setAttribute("flipped","flipped"):p.removeAttribute("flipped"),e({...t,isFlipped:n,figure:P})}})}U(({d:e})=>{document.querySelector("figure#bronstein").querySelector("demo-diagram").setAttribute("fen",e.fen)});
