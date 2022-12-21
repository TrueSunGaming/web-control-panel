# Web Control Panel
A user interface built into a bookmark.

## Usage
Paste the following into the URL of a bookmark:
```js
javascript:(()=>{const win=window.open("about:blank","_blank","popup, width=600, height=600");if(!win)return alert("Please allow popups.");const startTime=Date.now();window.addEventListener("beforeunload",(()=>{win.close()}));const doc=win.document;doc.title="Web Control Panel";const br=document.createElement("br");function button(e,n){const t=document.createElement("button");return t.innerHTML=e,t.addEventListener("mouseup",n),doc.body.appendChild(t),t}function header(e,n){const t=document.createElement(`h${e}`);return t.innerHTML=n,doc.body.appendChild(t),t}function text(e){const n=document.createElement("p");return n.innerHTML=e,doc.body.appendChild(n),n}function css(e){const n=document.createElement("style");n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),doc.head.appendChild(n)}header(1,"Web Control Panel"),header(2,"Information"),text("Created by TrueSunGaming"),text("Version 1.0");const timeDisplay=text("Unix Time: "),runtimeDisplay=text("Panel Runtime: ");header(2,"Main Controls"),button("Exit",(()=>{win.close()})),doc.body.appendChild(br.cloneNode()),button("Execute JavaScript",(()=>{win.alert(`Return value: ${eval(win.prompt("Enter JavaScript to run:"))}`)})),header(2,"Page Controls"),button("Set Page Content",(()=>{const e=win.prompt("Enter new page content:");document.body.innerHTML=e||document.body.innerHTML})),doc.body.appendChild(br.cloneNode()),button("Clear Page Content",(()=>{win.confirm("Are you sure you want to delete all the content of this page? This will turn the site into a blank screen.")&&(document.body.innerHTML="")})),css("* {color: lime; font-family: monospace;} html {background-color: black; text-align: center;} button {background-color: #303030; border-radius: 10px; cursor: pointer; margin: 5px; border: none;} button:hover {color: red;}"),setInterval((()=>{timeDisplay.innerHTML=%60Unix Time: ${(Date.now()/1e3).toFixed(3)} seconds%60,runtimeDisplay.innerHTML=%60Panel Runtime: ${((Date.now()-startTime)/1e3).toFixed(3)} seconds%60}))})();
```

## Features

Information
* Unix Time
* Panel Runtime

Main Controls
* Execute JavaScript

Page Controls
* Set Page Content
* Clear Page Content
