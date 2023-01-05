javascript:(()=>{const VERSION="1.1.1",win=window.open("about:blank","_blank","popup, width=600, height=600");if(!win)return alert("Please allow popups.");console.log(`Web Controls Version ${VERSION} Initialized.\n\nWritten by TrueSunGaming.`),TRUESUNGAMING_WEBCONTROLS_USED=!0,addEventListener("beforeunload",(()=>{win.close()})),win.addEventListener("beforeunload",(()=>{clearInterval(renderLoop),clearInterval(saveLoop),clearInterval(autoclickerInterval)}));const doc=win.document;doc.title=`Web Control Panel v${VERSION}`;const br=document.createElement("br");function button(e,t,n=""){const o=document.createElement("button");return o.innerHTML=e,o.addEventListener("mouseup",t),o.title=n,doc.body.appendChild(o),o}function header(e,t){const n=document.createElement(`h${e}`);return n.innerHTML=t,doc.body.appendChild(n),n}function text(e){const t=document.createElement("p");return t.innerHTML=e,doc.body.appendChild(t),t}function css(e){const t=document.createElement("style");t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),doc.head.appendChild(t)}function nl(){const e=br.cloneNode();return doc.body.appendChild(e),e}function getTextNodes(){const e=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),t=[];for(var n;n=e.nextNode();)n.parentElement instanceof HTMLScriptElement||t.push(n);return t}function getHoveredNodes(){return document.querySelectorAll(":hover")}var data=JSON.parse(localStorage.TRUESUNGAMING_WEBCONTROLS_DATA??"null");if(!data){const e={scripts:[]};if(data instanceof Object)for(const t of Object.keys(e))data[t]=e[t];else data=e}var autoclicker=!1,autoclickerCPS=20,autoclickerInterval=null,mouseEvent=null;addEventListener("mousemove",(e=>mouseEvent=e));const startTime=Date.now();header(1,"Web Control Panel"),header(2,"Information"),text("Created by TrueSunGaming"),text(`Version ${VERSION}`),text(`Running on ${location.hostname||"Local File"}`);const timeDisplay=text("Unix Time: "),runtimeDisplay=text("Panel Runtime: "),cpsDisplay=text("Autoclicker: ");header(2,"Main Controls"),button("Exit",(()=>{win.close()}),"Closes Web Controls."),nl(),button("Execute JavaScript",(()=>{const r=eval(win.prompt("Enter JavaScript to run:"));r&&win.alert(`Return value: ${r}`)}),"Runs JavaScript code inside an eval() function."),nl(),button("Popup Window",(()=>{const e=win.prompt("Enter URL to view:");e&&window.open(e,"_blank","popup")}),"Opens a popup window of a URL."),nl();const autoclickerButton=button("Enable Autoclicker",(()=>{autoclicker=!autoclicker,autoclickerButton.innerHTML=(autoclicker?"Dis":"En")+"able Autoclicker",autoclicker?autoclickerInterval=setInterval((()=>{for(const e of getHoveredNodes())e.dispatchEvent(new CustomEvent("mouseup")),e.dispatchEvent(new CustomEvent("mousedown")),e.click()}),1e3/autoclickerCPS):clearInterval(autoclickerInterval)}));nl(),button("Set Autoclicker CPS",(()=>{const e=win.prompt(`Clicks per second (Current: ${autoclickerCPS}):`);!e||isNaN(Number(e))||Number(e)<0||Number(e)%1!=0||(autoclickerCPS=Number(e))})),header(2,"Visual Studio Code"),button("Tab",(()=>{window.open("https://vscode.dev","_blank")}),"Opens Visual Studio Code in a new tab."),nl(),button("Popup",(()=>{window.open("https://vscode.dev","_blank","popup fullscreen")}),"Opens Visual Studio Code in a new window."),nl(),button("Insiders Tab",(()=>{window.open("https://insiders.vscode.dev","_blank")}),"Opens Visual Studio Code Insiders in a new tab."),nl(),button("Insiders Popup",(()=>{window.open("https://insiders.vscode.dev","_blank","popup fullscreen")}),"Opens Visual Studio Code Insiders in a new window."),nl(),header(2,"Script Manager"),button("Create Script",(()=>{const e=win.prompt("Program name:");if(!e)return;const t=win.prompt("Program script:");t&&data.scripts.push({name:e,script:t})}),"Creates a JavaScript script to run later."),nl(),button("Run Script",(()=>{const n=win.prompt("Program name to run:");if(!n)return;const idx=data.scripts.findIndex((e=>e.name==n));if(-1==idx)return win.alert(`Cannot find script ${n}. Make sure it is spelled correctly and capitalization is correct.`);const r=eval(data.scripts[idx].script);r&&win.alert(`Return value: ${r}`)}),"Runs a created script."),nl(),button("Rename Script",(()=>{const e=win.prompt("Program name to rename:");if(!e)return;const t=data.scripts.findIndex((t=>t.name==e));if(-1==t)return win.alert(`Cannot find script ${e}. Make sure it is spelled correctly and capitalization is correct.`);const n=win.prompt("New name for the program:");n&&(data.scripts[t].name=n)}),"Changes the name of a script."),nl(),button("Delete Script",(()=>{const e=win.prompt("Program name to delete:");if(!e)return;const t=data.scripts.findIndex((t=>t.name==e));if(-1==t)return win.alert(`Cannot find script ${e}. Make sure it is spelled correctly and capitalization is correct.`);data.scripts.splice(t,1)}),"Deletes a script."),nl();const scriptsDisplay=text("No scripts.");header(2,"Page Controls"),button("Set Page Content",(()=>{const e=win.prompt("Enter new page content:");document.body.innerHTML=e||document.body.innerHTML}),"Replaces the page content with your message."),nl(),button("Clear Page Content",(()=>{win.confirm("Are you sure you want to delete all the content of this page? This will turn the site into a blank screen.")&&(document.body.innerHTML="")}),"Removes all page content."),nl(),button("Replace Text",(()=>{if(!win.confirm("Are you sure you want to replace text on this page?"))return;const e=win.prompt("Enter text to be replaced:"),t=win.prompt("Enter text to replace with:");if(!t)return;const n=getTextNodes();if(e)for(const o of n)o.data=o.data.replaceAll(e,t);else for(const e of n)e.data=t}),"Replaces every instance of a certain group of characters with another group of characters."),css("* {color: lime; font-family: monospace;} html {background-color: black; text-align: center;} button {background-color: #303030; border-radius: 10px; cursor: pointer; margin: 5px; border: none;} button:hover {color: red;}");const renderLoop=setInterval((()=>{if(timeDisplay.innerHTML=`Unix Time: ${(Date.now()/1e3).toFixed(3)} seconds`,runtimeDisplay.innerHTML=`Panel Runtime: ${((Date.now()-startTime)/1e3).toFixed(3)} seconds`,cpsDisplay.innerHTML="Autoclicker: "+(autoclicker?`Enabled, ${autoclickerCPS} CPS`:"Disabled"),data.scripts.length>0){scriptsDisplay.innerHTML="Scripts:";for(const e of data.scripts)scriptsDisplay.innerHTML+=`<br>${e.name}`}else scriptsDisplay.innerHTML="No scripts."}),50/3),saveLoop=setInterval((()=>{localStorage.TRUESUNGAMING_WEBCONTROLS_DATA=JSON.stringify(data)}),500)})();