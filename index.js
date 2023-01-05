(() => {
    const VERSION = "1.1.1";

    const win = window.open("about:blank", "_blank", "popup, width=600, height=600");
    if (!win) return alert("Please allow popups.");
    console.log(`Web Controls Version ${VERSION} Initialized.\n\nWritten by TrueSunGaming.`);
    TRUESUNGAMING_WEBCONTROLS_USED = true;
    addEventListener("beforeunload", () => {
        win.close();
    });
    win.addEventListener("beforeunload", () => {
        clearInterval(renderLoop);
        clearInterval(saveLoop);
        clearInterval(autoclickerInterval);
    });
    const doc = win.document;
    doc.title = `Web Control Panel v${VERSION}`;

    const br = document.createElement("br");

    function button(label, script, title = "") {
        const el = document.createElement("button");
        el.innerHTML = label;
        el.addEventListener("mouseup", script);
        el.title = title;
        doc.body.appendChild(el);
        return el;
    }

    function header(htype, label) {
        const el = document.createElement(`h${htype}`);
        el.innerHTML = label;
        doc.body.appendChild(el);
        return el;
    }

    function text(txt) {
        const el = document.createElement("p");
        el.innerHTML = txt;
        doc.body.appendChild(el);
        return el;
    }

    function css(styles) {
        const el = document.createElement("style");
        if (el.styleSheet) el.styleSheet.cssText = styles;
        else el.appendChild(document.createTextNode(styles));
        doc.head.appendChild(el);
    }

    function nl() {
        const el = br.cloneNode();
        doc.body.appendChild(el);
        return el;
    }

    function getTextNodes() {
        const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
        const a = [];
        var n;
        while(n = w.nextNode()) if (!(n.parentElement instanceof HTMLScriptElement)) a.push(n);
        return a;
    }

    function getHoveredNodes() {
        return document.querySelectorAll(":hover");
    }

    var data = JSON.parse(localStorage.TRUESUNGAMING_WEBCONTROLS_DATA ?? "null");
    if (!data) {
        const defaultData = {
            scripts: []
        };
        if (data instanceof Object) for (const i of Object.keys(defaultData)) data[i] = defaultData[i];
        else data = defaultData;
    };

    var autoclicker = false;
    var autoclickerCPS = 20;
    var autoclickerInterval = null;
    
    var mouseEvent = null;

    addEventListener("mousemove", (e) => mouseEvent = e);

    const startTime = Date.now();

    header(1, "Web Control Panel");
    header(2, "Information");

    text("Created by TrueSunGaming");
    text(`Version ${VERSION}`);
    text(`Running on ${location.hostname || "Local File"}`);
    const timeDisplay = text("Unix Time: ");
    const runtimeDisplay = text("Panel Runtime: ");
    const cpsDisplay = text("Autoclicker: ");

    header(2, "Main Controls");

    button("Exit", () => {
        win.close();
    }, "Closes Web Controls.");
    nl();
    button("Execute JavaScript", () => {
        const r = eval(win.prompt("Enter JavaScript to run:"));
        if (r) win.alert(`Return value: ${r}`);
    }, "Runs JavaScript code inside an eval() function.");
    nl();
    button("Popup Window", () => {
        const r = win.prompt("Enter URL to view:");
        if (!r) return;
        window.open(r, "_blank", "popup");
    }, "Opens a popup window of a URL.");
    nl();
    const autoclickerButton = button("Enable Autoclicker", () => {
        autoclicker = !autoclicker;
        autoclickerButton.innerHTML = `${autoclicker ? "Dis" : "En"}able Autoclicker`;
        if (autoclicker) autoclickerInterval = setInterval(() => {
            for (const i of getHoveredNodes()) {
                i.dispatchEvent(new CustomEvent("mouseup"));
                i.dispatchEvent(new CustomEvent("mousedown"));
                i.click();
            }
        }, 1000 / autoclickerCPS);
        else clearInterval(autoclickerInterval)
    });
    nl();
    button("Set Autoclicker CPS", () => {
        const r = win.prompt(`Clicks per second (Current: ${autoclickerCPS}):`);
        if (!r || isNaN(Number(r)) || Number(r) < 0 || Number(r) % 1 != 0) return;
        autoclickerCPS = Number(r);
    });
    
    header(2, "Visual Studio Code")

    button("Tab", () => {
        window.open("https://vscode.dev", "_blank");
    }, "Opens Visual Studio Code in a new tab.");
    nl();
    button("Popup", () => {
        window.open("https://vscode.dev", "_blank", "popup fullscreen");
    }, "Opens Visual Studio Code in a new window.");
    nl();
    button("Insiders Tab", () => {
        window.open("https://insiders.vscode.dev", "_blank");
    }, "Opens Visual Studio Code Insiders in a new tab.");
    nl();
    button("Insiders Popup", () => {
        window.open("https://insiders.vscode.dev", "_blank", "popup fullscreen");
    }, "Opens Visual Studio Code Insiders in a new window.");
    nl();

    header(2, "Script Manager");

    button("Create Script", () => {
        const n = win.prompt("Program name:");
        if (!n) return;
        const s = win.prompt("Program script:");
        if (!s) return;
        data.scripts.push({
            name: n,
            script: s
        });
    }, "Creates a JavaScript script to run later.");
    nl();
    button("Run Script", () => {
        const n = win.prompt("Program name to run:");
        if (!n) return;
        const idx = data.scripts.findIndex(v => v.name == n);
        if (idx == -1) return win.alert(`Cannot find script ${n}. Make sure it is spelled correctly and capitalization is correct.`);
        const r = eval(data.scripts[idx].script);
        if (r) win.alert(`Return value: ${r}`);
    }, "Runs a created script.");
    nl();
    button("Rename Script", () => {
        const n = win.prompt("Program name to rename:");
        if (!n) return;
        const idx = data.scripts.findIndex(v => v.name == n);
        if (idx == -1) return win.alert(`Cannot find script ${n}. Make sure it is spelled correctly and capitalization is correct.`);
        const n2 = win.prompt("New name for the program:");
        if (!n2) return;
        data.scripts[idx].name = n2;
    }, "Changes the name of a script.");
    nl();
    button("Delete Script", () => {
        const n = win.prompt("Program name to delete:");
        if (!n) return;
        const idx = data.scripts.findIndex(v => v.name == n);
        if (idx == -1) return win.alert(`Cannot find script ${n}. Make sure it is spelled correctly and capitalization is correct.`);
        data.scripts.splice(idx, 1);
    }, "Deletes a script.");
    nl();
    const scriptsDisplay = text("No scripts.");

    header(2, "Page Controls");
    
    button("Set Page Content", () => {
        const s = win.prompt("Enter new page content:");
        document.body.innerHTML = s ? s : document.body.innerHTML;
    }, "Replaces the page content with your message.");
    nl();
    button("Clear Page Content", () => {
        if (win.confirm("Are you sure you want to delete all the content of this page? This will turn the site into a blank screen.")) document.body.innerHTML = "";
    }, "Removes all page content.");
    nl();
    button("Replace Text", () => {
        if (!win.confirm("Are you sure you want to replace text on this page?")) return;
        const r = win.prompt("Enter text to be replaced:");
        const r2 = win.prompt("Enter text to replace with:");
        if (!r2) return;
        const t = getTextNodes();
        if (r) for (const i of t) {
            i.data = i.data.replaceAll(r, r2);
        }
        else for (const i of t) i.data = r2;
    }, "Replaces every instance of a certain group of characters with another group of characters.");

    css("* {color: lime; font-family: monospace;} html {background-color: black; text-align: center;} button {background-color: #303030; border-radius: 10px; cursor: pointer; margin: 5px; border: none;} button:hover {color: red;}");

    const renderLoop = setInterval(() => {
        timeDisplay.innerHTML = `Unix Time: ${(Date.now() / 1000).toFixed(3)} seconds`;
        runtimeDisplay.innerHTML = `Panel Runtime: ${((Date.now() - startTime) / 1000).toFixed(3)} seconds`;
        cpsDisplay.innerHTML = `Autoclicker: ${autoclicker ? `Enabled, ${autoclickerCPS} CPS` : "Disabled"}`;
        if (data.scripts.length > 0) {
            scriptsDisplay.innerHTML = "Scripts:";
            for (const i of data.scripts) scriptsDisplay.innerHTML += `<br>${i.name}`;
        } else scriptsDisplay.innerHTML = "No scripts.";
    }, 50/3);

    const saveLoop = setInterval(() => {
        localStorage.TRUESUNGAMING_WEBCONTROLS_DATA = JSON.stringify(data);
    }, 500);
})();