javascript:(()=>{var e=null,n=null,t=null,o=Date.now(),l=!1,d=20;const r=setInterval((()=>{window.TRUESUNGAMING_WEBCONTROLS_WINDOW=e,l&&Date.now()-o>=1e3/d&&(o=Date.now(),function(){for(const e of document.querySelectorAll(":hover"))e.dispatchEvent(new CustomEvent("mouseup")),e.dispatchEvent(new CustomEvent("mousedown")),e.click()}())}),0);function a(n,t=e.document.head){return new Promise((e=>{const o=document.createElement("script");o.src=n,t.appendChild(o),o.onload=()=>{e()}}))}function i(n,t,o=null,l=e.document.head){return new Promise((e=>{const d=document.createElement("link");d.rel=n,d.href=t,o&&(d.dataset.name=o),l.appendChild(d),d.onload=()=>{e()}}))}function c(n,t=e.document.body){const o=document.createElement("style");o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n)),t.appendChild(o)}function s(n,t,o=!1){const l=document.createElement("button");return l.innerHTML=n,l.addEventListener("mouseup",t),o||e.document.body.appendChild(l),l}function p(n,t,o=!1){const l=document.createElement(`h${n}`);return l.innerHTML=t,o||e.document.body.appendChild(l),l}function u(n,t=!1){const o=document.createElement("p");return o.innerHTML=n,t||e.document.body.appendChild(o),o}function h(n,t,o=!1){const l=u(n,!0);return l.innerHTML=n,l.style.textDecoration="underline",l.style.cursor="pointer",l.addEventListener("mouseup",(()=>{window.open(t,"_blank")})),o||e.document.body.appendChild(l),l}function m(n=!1){const t=document.createElement("br");return n||e.document.body.appendChild(t),t}function y(n=(()=>{}),t=!1){const o=document.createElement("div");return t||e.document.body.appendChild(o),n(o),o}function b(n,t,o={},l=!1){const d=document.createElement("input");d.id=t,d.type=n;for(const e of Object.keys(o))d[e]=o[e];return l||e.document.body.appendChild(d),d}function C(){const e=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n=[];for(var t;null!=(t=e.nextNode());)t.parentElement instanceof HTMLScriptElement||n.push(t);return n}function g(){const n=e.document.querySelector("#replacerSearchQuery").value,t=e.document.querySelector("#replacerResult").value;if(!n)return;const o=C();for(const e of o)e.data=e.data.replaceAll(n,t)}function f(){const n=e.document.querySelector("#replacerSearchQuery").value,t=e.document.querySelector("#replacerResult").value;if(!n)return;const o=C(),l=n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");for(const e of o)e.data=e.data.replace(new RegExp(l,"ig"),t)}function v(){y((o=>{o.appendChild((()=>{const e=s("",(()=>{w()}),!0);return e.style.backgroundColor="var(--color-success-dark)",e.appendChild((()=>{const e=p(3,"Home",!0);return e.style.display="inline",e})()),e})()),o.appendChild(m(!0)),o.appendChild(m(!0)),o.appendChild((()=>{const n=s("",(()=>{e.document.body.innerHTML="",c("body,html{background-color:var(--color-main);text-align:center}"),v(),y((e=>{e.appendChild(p(1,"Search and Replace",!0)),e.appendChild(u("Search for:",!0)),e.appendChild((()=>{const e=b("text","replacerSearchQuery",!0);return e.style.width="80%",e})()),e.appendChild(m(!0)),e.appendChild(u("Replace with:",!0)),e.appendChild((()=>{const e=b("text","replacerResult",!0);return e.style.width="80%",e})()),e.appendChild(m(!0)),e.appendChild(m(!0)),e.appendChild((()=>{const e=s("Replace (Case Sensitive)",g,!0);return e.style.backgroundColor="var(--color-success-dark)",e})()),e.appendChild(m(!0)),e.appendChild(m(!0)),e.appendChild((()=>{const e=s("Replace (Case Insensitive)",f,!0);return e.style.backgroundColor="var(--color-success-dark)",e})()),e.style.position="absolute",e.style.top=0,e.style.left="100px",e.style.width="calc(100% - 100px)",e.style.height="100%"}))}),!0);return n.style.backgroundColor="var(--color-success-dark)",n.appendChild((()=>{const e=p(3,"Replacer",!0);return e.style.display="inline",e})()),n})()),o.appendChild(m(!0)),o.appendChild(m(!0)),o.appendChild((()=>{const n=s("",(()=>{e.document.body.innerHTML="",c("body,html{background-color:var(--color-main);text-align:center}"),v(),y((e=>{e.appendChild(p(1,"Autoclicker",!0)),e.appendChild(u("Clicks per Second:",!0)),e.appendChild((()=>{const e=b("text","cpsInput",!0);return e.style.width="80%",e.addEventListener("input",(()=>{d=Number(e.value)||0,n.innerHTML=`Autoclicker ${l?"En":"Dis"}abled.<br>Clicks per second: ${d}`})),e})()),e.appendChild(u("Note:<br>Clicks per second is limited by the speed of your computer.",!0)),e.appendChild((()=>{const e=s("<strong>Enable</strong>",(()=>{l=!l,e.innerHTML=`<strong>${l?"Dis":"En"}able</strong>`,n.innerHTML=`Autoclicker ${l?"En":"Dis"}abled.<br>Clicks per second: ${d}`}),!1);return e.style.fontSize="20px",e.style.backgroundColor="var(--color-success-dark)",e})());const n=u(`Autoclicker ${l?"En":"Dis"}abled.<br>Clicks per second: ${d}`,!0);e.appendChild(n),e.style.position="absolute",e.style.top=0,e.style.left="100px",e.style.width="calc(100% - 100px)",e.style.height="100%"}))}),!0);return n.style.backgroundColor="var(--color-success-dark)",n.appendChild((()=>{const e=p(3,"Autoclicker",!0);return e.style.display="inline",e})()),n})()),o.appendChild(m(!0)),o.appendChild(m(!0)),o.appendChild((()=>{const n=s("",(()=>{e.document.body.innerHTML="",c("body,html{background-color:var(--color-main);text-align:center}"),v(),y((e=>{e.appendChild(p(1,"Scripting",!0)),e.appendChild((()=>{const e=s("Open Script Editor",k,!0);return e.style.backgroundColor="var(--color-success-dark)",e})()),e.appendChild(m(!0)),e.appendChild(m(!0)),e.appendChild((()=>{const e=s("Open Stylesheet Editor",T,!0);return e.style.backgroundColor="var(--color-success-dark)",e})()),e.style.position="absolute",e.style.top=0,e.style.left="100px",e.style.width="calc(100% - 100px)",e.style.height="100%"}))}),!0);return n.style.backgroundColor="var(--color-success-dark)",n.appendChild((()=>{const e=p(3,"Scripting",!0);return e.style.display="inline",e})()),n})()),o.appendChild(m(!0)),o.appendChild(m(!0)),o.appendChild((()=>{const o=s("",(()=>{e.document.body.innerHTML="",c("body,html{background-color:var(--color-main);text-align:center}"),v(),y((o=>{o.appendChild(p(1,"Miscellaneous Tools",!0)),o.appendChild((()=>{const o=s("⚠️ Emergency Exit ⚠️",(()=>{e&&e.close(),n&&n.close(),t&&t.close(),window.open("https://google.com","_blank")}),!0);return o.style.backgroundColor="var(--color-error)",o})()),o.appendChild(m(!0)),o.appendChild(u("Closes Web Control Panel and opens Google in a new tab.",!0)),o.appendChild((()=>{const e=s("Custom Popup",(()=>{window.open("https://google.com","_blank","popup fullscreen")}),!0);return e.style.backgroundColor="var(--color-success-dark)",e})()),o.appendChild(m(!0)),o.appendChild(u("Creates a popup window with any valid URL.",!0)),o.style.position="absolute",o.style.top=0,o.style.left="100px",o.style.width="calc(100% - 100px)",o.style.height="100%"}))}),!0);return o.style.backgroundColor="var(--color-success-dark)",o.appendChild((()=>{const e=p(3,"Other",!0);return e.style.display="inline",e})()),o})()),o.style.position="absolute",o.style.top=0,o.style.left=0,o.style.width="100px",o.style.height="100%",o.style.backgroundColor="var(--color-main-dark)",o.style.overflow="auto",o.style.padding="5px"}))}function w(){e.document.body.innerHTML="",c("body,html{background-color:var(--color-main);text-align:center}"),v(),y((e=>{e.appendChild(p(1,"Web Control Panel",!0)),e.appendChild(u("A user interface built into a bookmark.",!0)),e.appendChild(u("Version 2.0.0 (January 22, 2023)",!0)),e.appendChild(m(!0)),e.appendChild(h("Created by TrueSunGaming","https://github.com/TrueSunGaming",!0)),e.appendChild(h("Source Code","https://github.com/TrueSunGaming/web-control-panel",!0)),e.style.position="absolute",e.style.top=0,e.style.left="100px",e.style.width="calc(100% - 100px)",e.style.height="100%"}))}async function k(){n&&n.close(),(n=e.open("about:blank","_blank")).require={paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs"}};var t=0;function o(){n.document.body.innerHTML=`<h1 style="color: black">Loading dependencies... ${Math.floor(t/4*100)}%</h1>`}await i("stylesheet","https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/editor/editor.main.min.css","vs/editor/editor.main",n.document.head),t++,o(),await a("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/loader.min.js",n.document.head),t++,o(),await a("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/editor/editor.main.nls.js",n.document.head),t++,o(),await a("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/editor/editor.main.js",n.document.head),t++,o(),c("@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;600&display=swap);:not(div,div *){font-family:'Titillium Web'}",n.document.head),n.document.body.innerHTML="",n.document.body.style.height="100%",n.document.body.appendChild(p(2,`Script editor for ${location.href}`)),n.document.body.appendChild(s("Run",(()=>{console.log(d.getValue()),n.alert("Code is being ran. Switch back to the original tab.");const e=document.createElement("script");e.innerHTML=d.getValue(),document.head.appendChild(e)}),!0));const l=y((e=>{e.style.height="80%",e.style.width="100%"}),!0);n.document.body.appendChild(l);const d=(r=l,u={language:"javascript",theme:"vs-dark"},n.monaco.editor.create(r,u));var r,u}async function T(){t&&t.close(),(t=e.open("about:blank","_blank")).require={paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs"}};var n=0;function o(){t.document.body.innerHTML=`<h1 style="color: black">Loading dependencies... ${Math.floor(n/4*100)}%</h1>`}await i("stylesheet","https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/editor/editor.main.min.css","vs/editor/editor.main",t.document.head),n++,o(),await a("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/loader.min.js",t.document.head),n++,o(),await a("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/editor/editor.main.nls.js",t.document.head),n++,o(),await a("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/editor/editor.main.js",t.document.head),n++,o(),c("@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;600&display=swap);:not(div,div *){font-family:'Titillium Web'}",t.document.head),t.document.body.innerHTML="",t.document.body.style.height="100%",t.document.body.appendChild(p(2,`Stylesheet editor for ${location.href}`)),t.document.body.appendChild(s("Inject",(()=>{console.log(d.getValue()),t.alert("CSS has been injected.");const e=document.createElement("style");e.innerHTML=d.getValue(),document.head.appendChild(e)}),!0));const l=y((e=>{e.style.height="80%",e.style.width="100%"}),!0);t.document.body.appendChild(l);const d=(r=l,u={language:"css",theme:"vs-dark"},t.monaco.editor.create(r,u));var r,u}addEventListener("beforeunload",(()=>{n&&n.close(),t&&t.close(),e&&e.close()})),function(){if(window.TRUESUNGAMING_WEBCONTROLS_WINDOW&&window.TRUESUNGAMING_WEBCONTROLS_WINDOW.close(),!(e=window.open("about:blank","_blank","popup width=600 height=600")))return alert("Please allow popups to use Web Control Panel.");window.TRUESUNGAMING_WEBCONTROLS_USED=!0,e.addEventListener("beforeunload",(()=>{clearInterval(r),window.TRUESUNGAMING_WEBCONTROLS_WINDOW=null})),e.document.title="Web Control Panel v2.0.0",console.log("Web Control Panel version 2.0.0 initialized.\n\nWritten by TrueSunGaming\nhttps://github.com/TrueSunGaming/web-control-panel"),c("\n            @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;600&display=swap');\n\n            :root {\n                --color-main: hsl(0, 0%, 10%);\n                --color-main-dark: hsl(0, 0%, 5%);\n                --color-error: hsl(0, 100%, 50%);\n                --color-error-dark: hsl(0, 100%, 25%);\n                --color-success-dark: hsl(120, 100%, 25%);\n            }\n\n            html, body {\n                overflow: hidden;\n            }\n\n            * {\n                font-family: \"Titillium Web\";\n                color: white;\n            }\n\n            button {\n                border: none;\n                border-radius: 10px;\n                cursor: pointer;\n                transition-duration: .5s;\n            }\n\n            button:hover {\n                border-radius: 5px;\n            }\n\n            input {\n                border: none;\n                border-radius: 10px;\n                background-color: var(--color-main-light);\n            }\n        ",e.document.head),w()}()})();
