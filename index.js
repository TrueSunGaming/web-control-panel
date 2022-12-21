(() => {
    const win = window.open("about:blank", "_blank", "popup, width=600, height=600");
    if (!win) return alert("Please allow popups.");
    const startTime = Date.now();
    window.addEventListener("beforeunload", () => {
        win.close();
    });
    const doc = win.document;
    doc.title = "Web Control Panel";
    const br = document.createElement("br");
    function button(label, script) {
        const el = document.createElement("button");
        el.innerHTML = label;
        el.addEventListener("mouseup", script);
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
    header(1, "Web Control Panel");
    header(2, "Information");
    text("Created by TrueSunGaming");
    text("Version 1.0");
    const timeDisplay = text("Unix Time: ");
    const runtimeDisplay = text("Panel Runtime: ");
    header(2, "Main Controls");
    button("Exit", () => {
        win.close();
    });
    doc.body.appendChild(br.cloneNode());
    button("Execute JavaScript", () => {
        win.alert(`Return value: ${eval(win.prompt("Enter JavaScript to run:"))}`);
    });
    header(2, "Page Controls");
    button("Set Page Content", () => {
        const s = win.prompt("Enter new page content:");
        document.body.innerHTML = s ? s : document.body.innerHTML;
    });
    doc.body.appendChild(br.cloneNode());
    button("Clear Page Content", () => {
        if (win.confirm("Are you sure you want to delete all the content of this page? This will turn the site into a blank screen.")) document.body.innerHTML = "";
    });
    css("* {color: lime; font-family: monospace;} html {background-color: black; text-align: center;} button {background-color: #303030; border-radius: 10px; cursor: pointer; margin: 5px; border: none;} button:hover {color: red;}");
    setInterval(() => {
        timeDisplay.innerHTML = `Unix Time: ${(Date.now() / 1000).toFixed(3)} seconds`;
        runtimeDisplay.innerHTML = `Panel Runtime: ${((Date.now() - startTime) / 1000).toFixed(3)} seconds`;
    });
})();