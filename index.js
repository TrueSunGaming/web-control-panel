(() => {
    const VERSION = "2.0.0";
    const RELEASE = "January 22, 2023";
    var win = null;
    var win2 = null;
    var win3 = null;
    var lastClick = Date.now();

    var autoclicking = false;
    var cps = 20;

    const clickInterval = setInterval(() => {
        window.TRUESUNGAMING_WEBCONTROLS_WINDOW = win;
        if (autoclicking && Date.now() - lastClick >= 1000 / cps) {
            lastClick = Date.now();
            autoclick();
        }
    }, 0);

    addEventListener("beforeunload", () => {
        if (win2) win2.close();
        if (win3) win3.close();
        if (win) win.close();
    });

    function loadScript(url, onto = win.document.head) {
        return new Promise((r) => {
            const el = document.createElement("script");
            el.src = url;
            onto.appendChild(el);
            el.onload = () => {
                r();
            };
        });
    }

    function loadLink(rel, href, dataname = null, onto = win.document.head) {
        return new Promise((r) => {
            const el = document.createElement("link");
            el.rel = rel;
            el.href = href;
            if (dataname) el.dataset.name = dataname;
            onto.appendChild(el);
            el.onload = () => {
                r();
            };
        });
    }

    function css(styles, onto = win.document.body) {
        const el = document.createElement("style");
        if (el.styleSheet) el.styleSheet.cssText = styles;
        else el.appendChild(document.createTextNode(styles));
        onto.appendChild(el);
    }

    function button(html, onclick, noappend = false) {
        const el = document.createElement("button");
        el.innerHTML = html;
        el.addEventListener("mouseup", onclick);
        if (!noappend) win.document.body.appendChild(el);
        return el;
    }

    function header(htype, label, noappend = false) {
        const el = document.createElement(`h${htype}`);
        el.innerHTML = label;
        if (!noappend) win.document.body.appendChild(el);
        return el;
    }

    function text(txt, noappend = false) {
        const el = document.createElement("p");
        el.innerHTML = txt;
        if (!noappend) win.document.body.appendChild(el);
        return el;
    }

    function link(txt, href, noappend = false) {
        const el = text(txt, true);
        el.innerHTML = txt;
        el.style.textDecoration = "underline";
        el.style.cursor = "pointer";
        el.addEventListener("mouseup", () => {
            window.open(href, "_blank");
        });
        if (!noappend) win.document.body.appendChild(el);
        return el;
    }

    function br(noappend = false) {
        const el = document.createElement("br");
        if (!noappend) win.document.body.appendChild(el);
        return el;
    }

    function div(filler = () => {}, noappend = false) {
        const el = document.createElement("div");
        if (!noappend) win.document.body.appendChild(el);
        filler(el);
        return el;
    }

    function input(type, id, params = {}, noappend = false) {
        const el = document.createElement("input");
        el.id = id;
        el.type = type;
        for (const i of Object.keys(params)) el[i] = params[i];
        if (!noappend) win.document.body.appendChild(el);
        return el;
    }

    function getTextNodes() {
        const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
        const a = [];
        var n;
        while((n = w.nextNode()) != null) if (!(n.parentElement instanceof HTMLScriptElement)) a.push(n);
        return a;
    }

    function getHoveredNodes() {
        return document.querySelectorAll(":hover");
    }

    function replacerDo() {
        const r = win.document.querySelector("#replacerSearchQuery").value;
        const r2 = win.document.querySelector("#replacerResult").value;
        if (!r) return;
        const t = getTextNodes();
        for (const i of t) i.data = i.data.replaceAll(r, r2);
    }

    function replacerDoNocase() {
        const r = win.document.querySelector("#replacerSearchQuery").value;
        const r2 = win.document.querySelector("#replacerResult").value;
        if (!r) return;
        const t = getTextNodes();
        const esc = r.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        for (const i of t) i.data = i.data.replace(new RegExp(esc, "ig"), r2);
    }

    function autoclick() {
        for (const i of getHoveredNodes()) {
            i.dispatchEvent(new CustomEvent("mouseup"));
            i.dispatchEvent(new CustomEvent("mousedown"));
            i.click();
        }
    }

    function sidebar() {
        div((el) => {
            el.appendChild((() => {
                const b = button("", () => {
                    homepage();
                }, true);

                b.style.backgroundColor = "var(--color-success-dark)";

                b.appendChild((() => {
                    const h = header(3, "Home", true);
                    h.style.display = "inline";
                    return h;
                })());

                return b;
            })());

            el.appendChild(br(true));
            el.appendChild(br(true));
            el.appendChild((() => {
                const b = button("", () => {
                    replacer();
                }, true);

                b.style.backgroundColor = "var(--color-success-dark)";

                b.appendChild((() => {
                    const h = header(3, "Replacer", true);
                    h.style.display = "inline";
                    return h;
                })());

                return b;
            })());

            el.appendChild(br(true));
            el.appendChild(br(true));
            el.appendChild((() => {
                const b = button("", () => {
                    autoclicker();
                }, true);

                b.style.backgroundColor = "var(--color-success-dark)";

                b.appendChild((() => {
                    const h = header(3, "Autoclicker", true);
                    h.style.display = "inline";
                    return h;
                })());

                return b;
            })());

            el.appendChild(br(true));
            el.appendChild(br(true));
            el.appendChild((() => {
                const b = button("", () => {
                    scripting();
                }, true);

                b.style.backgroundColor = "var(--color-success-dark)";

                b.appendChild((() => {
                    const h = header(3, "Scripting", true);
                    h.style.display = "inline";
                    return h;
                })());

                return b;
            })());
            el.appendChild(br(true));
            el.appendChild(br(true));

            el.appendChild((() => {
                const b = button("", () => {
                    other();
                }, true);

                b.style.backgroundColor = "var(--color-success-dark)";

                b.appendChild((() => {
                    const h = header(3, "Other", true);
                    h.style.display = "inline";
                    return h;
                })());

                return b;
            })());

            el.style.position = "absolute";
            el.style.top = 0;
            el.style.left = 0;
            el.style.width = "100px";
            el.style.height = "100%";
            el.style.backgroundColor = "var(--color-main-dark)";
            el.style.overflow = "auto";
            el.style.padding = "5px";
        });
    }

    function homepage() {
        win.document.body.innerHTML = "";
        css("body,html{background-color:var(--color-main);text-align:center}");

        sidebar();

        div((el) => {
            el.appendChild(header(1, "Web Control Panel", true));

            el.appendChild(text("A user interface built into a bookmark.", true));
            el.appendChild(text(`Version ${VERSION} (${RELEASE})`, true));

            el.appendChild(br(true));
            el.appendChild(link("Created by TrueSunGaming", "https://github.com/TrueSunGaming", true));
            el.appendChild(link("Source Code", "https://github.com/TrueSunGaming/web-control-panel", true));

            el.style.position = "absolute";
            el.style.top = 0;
            el.style.left = "100px";
            el.style.width = "calc(100% - 100px)";
            el.style.height = "100%";
        });
    }

    function replacer() {
        win.document.body.innerHTML = "";
        css("body,html{background-color:var(--color-main);text-align:center}");

        sidebar();

        div((el) => {
            el.appendChild(header(1, "Search and Replace", true));

            el.appendChild(text("Search for:", true));
            el.appendChild((() => {
                const inp = input("text", "replacerSearchQuery", true);
                inp.style.width = "80%";
                return inp;
            })());

            el.appendChild(br(true));
            el.appendChild(text("Replace with:", true));
            el.appendChild((() => {
                const inp = input("text", "replacerResult", true);
                inp.style.width = "80%";
                return inp;
            })());

            el.appendChild(br(true));
            el.appendChild(br(true));
            el.appendChild((() => {
                const b = button("Replace (Case Sensitive)", replacerDo, true);
                b.style.backgroundColor = "var(--color-success-dark)"
                return b;
            })());

            el.appendChild(br(true));
            el.appendChild(br(true));
            el.appendChild((() => {
                const b = button("Replace (Case Insensitive)", replacerDoNocase, true);
                b.style.backgroundColor = "var(--color-success-dark)"
                return b;
            })());

            el.style.position = "absolute";
            el.style.top = 0;
            el.style.left = "100px";
            el.style.width = "calc(100% - 100px)";
            el.style.height = "100%";
        });
    }

    function autoclicker() {
        win.document.body.innerHTML = "";
        css("body,html{background-color:var(--color-main);text-align:center}");

        sidebar();

        div((el) => {
            el.appendChild(header(1, "Autoclicker", true));

            el.appendChild(text("Clicks per Second:", true));
            el.appendChild((() => {
                const inp = input("text", "cpsInput", true);
                inp.style.width = "80%";
                inp.addEventListener("input", () => {
                    cps = Number(inp.value) || 0;
                    autoclickerInfo.innerHTML = `Autoclicker ${autoclicking ? "En" : "Dis"}abled.<br>Clicks per second: ${cps}`;
                });
                return inp;
            })());

            el.appendChild(text("Note:<br>Clicks per second is limited by the speed of your computer.", true));
            
            el.appendChild((() => {
                const b = button("<strong>Enable</strong>", () => {
                    autoclicking = !autoclicking;
                    b.innerHTML = `<strong>${autoclicking ? "Dis" : "En"}able</strong>`;
                    autoclickerInfo.innerHTML = `Autoclicker ${autoclicking ? "En" : "Dis"}abled.<br>Clicks per second: ${cps}`;
                }, false);
                b.style.fontSize = "20px";
                b.style.backgroundColor = "var(--color-success-dark)";
                return b;
            })());

            const autoclickerInfo = text(`Autoclicker ${autoclicking ? "En" : "Dis"}abled.<br>Clicks per second: ${cps}`, true);
            el.appendChild(autoclickerInfo);

            el.style.position = "absolute";
            el.style.top = 0;
            el.style.left = "100px";
            el.style.width = "calc(100% - 100px)";
            el.style.height = "100%";
        });
    }

    function scripting() {
        win.document.body.innerHTML = "";
        css("body,html{background-color:var(--color-main);text-align:center}");

        sidebar();

        div((el) => {
            el.appendChild(header(1, "Scripting", true));
            
            el.appendChild((() => {
                const b = button("Open Script Editor", scriptWindow, true);
                b.style.backgroundColor = "var(--color-success-dark)"
                return b;
            })());

            el.appendChild(br(true));
            el.appendChild(br(true));
            el.appendChild((() => {
                const b = button("Open Stylesheet Editor", cssWindow, true);
                b.style.backgroundColor = "var(--color-success-dark)"
                return b;
            })());

            el.style.position = "absolute";
            el.style.top = 0;
            el.style.left = "100px";
            el.style.width = "calc(100% - 100px)";
            el.style.height = "100%";
        });
    }

    function other() {
        win.document.body.innerHTML = "";
        css("body,html{background-color:var(--color-main);text-align:center}");

        sidebar();

        div((el) => {
            el.appendChild(header(1, "Miscellaneous Tools", true));

            el.appendChild((() => {
                const b = button("⚠️ Emergency Exit ⚠️", () => {
                    if (win) win.close();
                    if (win2) win2.close();
                    if (win3) win3.close();
                    window.open("https://google.com", "_blank");
                }, true);
                b.style.backgroundColor = "var(--color-error)"
                return b;
            })());
            el.appendChild(br(true));
            el.appendChild(text("Closes Web Control Panel and opens Google in a new tab.", true));

            el.appendChild((() => {
                const b = button("Custom Popup", () => {
                    window.open("https://google.com", "_blank", "popup fullscreen");
                }, true);
                b.style.backgroundColor = "var(--color-success-dark)"
                return b;
            })());
            el.appendChild(br(true));
            el.appendChild(text("Creates a popup window with any valid URL.", true));

            el.style.position = "absolute";
            el.style.top = 0;
            el.style.left = "100px";
            el.style.width = "calc(100% - 100px)";
            el.style.height = "100%";
        });
    }

    async function scriptWindow() {
        if (win2) win2.close();

        win2 = win.open("about:blank", "_blank");

        win2.require = { paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' } };

        const loadingSteps = 4;
        var loadsFinished = 0;

        function updateLoad() {
            win2.document.body.innerHTML = `<h1 style="color: black">Loading dependencies... ${Math.floor(loadsFinished / loadingSteps * 100)}%</h1>`;
        }

        function intoEditor(el, options) {
            return win2.monaco.editor.create(el, options);
        }

        await loadLink("stylesheet", "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/editor/editor.main.min.css", "vs/editor/editor.main", win2.document.head);
        loadsFinished++;
        updateLoad();

        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/loader.min.js", win2.document.head);
        loadsFinished++;
        updateLoad();

        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/editor/editor.main.nls.js", win2.document.head);
        loadsFinished++;
        updateLoad();

        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/editor/editor.main.js", win2.document.head);
        loadsFinished++;
        updateLoad();

        css("@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;600&display=swap);:not(div,div *){font-family:'Titillium Web'}", win2.document.head);

        win2.document.body.innerHTML = "";
        win2.document.body.style.height = "100%";

        win2.document.body.appendChild(header(2, `Script editor for ${location.href}`));
        
        win2.document.body.appendChild(button("Run", () => {
            console.log(edit.getValue());
            win2.alert("Code is being ran. Switch back to the original tab.");
            const el = document.createElement("script");
            el.innerHTML = edit.getValue();
            document.head.appendChild(el);
        }, true));

        const editor = div((el) => {
            el.style.height = "80%";
            el.style.width = "100%";
        }, true);
        win2.document.body.appendChild(editor);
        const edit = intoEditor(editor, {
            language: "javascript",
            theme: "vs-dark"
        });
    }

    async function cssWindow() {
        if (win3) win3.close();

        win3 = win.open("about:blank", "_blank");

        win3.require = { paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' } };

        const loadingSteps = 4;
        var loadsFinished = 0;

        function updateLoad() {
            win3.document.body.innerHTML = `<h1 style="color: black">Loading dependencies... ${Math.floor(loadsFinished / loadingSteps * 100)}%</h1>`;
        }

        function intoEditor(el, options) {
            return win3.monaco.editor.create(el, options);
        }

        await loadLink("stylesheet", "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/editor/editor.main.min.css", "vs/editor/editor.main", win3.document.head);
        loadsFinished++;
        updateLoad();

        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/loader.min.js", win3.document.head);
        loadsFinished++;
        updateLoad();

        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/editor/editor.main.nls.js", win3.document.head);
        loadsFinished++;
        updateLoad();

        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/editor/editor.main.js", win3.document.head);
        loadsFinished++;
        updateLoad();

        css("@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;600&display=swap);:not(div,div *){font-family:'Titillium Web'}", win3.document.head);

        win3.document.body.innerHTML = "";
        win3.document.body.style.height = "100%";

        win3.document.body.appendChild(header(2, `Stylesheet editor for ${location.href}`));
        
        win3.document.body.appendChild(button("Inject", () => {
            console.log(edit.getValue());
            win3.alert("CSS has been injected.");
            const el = document.createElement("style");
            el.innerHTML = edit.getValue();
            document.head.appendChild(el);
        }, true));

        const editor = div((el) => {
            el.style.height = "80%";
            el.style.width = "100%";
        }, true);
        win3.document.body.appendChild(editor);
        const edit = intoEditor(editor, {
            language: "css",
            theme: "vs-dark"
        });
    }

    function init() {
        if (window.TRUESUNGAMING_WEBCONTROLS_WINDOW) window.TRUESUNGAMING_WEBCONTROLS_WINDOW.close();

        win = window.open("about:blank", "_blank", "popup width=600 height=600");
        if (!win) return alert("Please allow popups to use Web Control Panel.");

        window.TRUESUNGAMING_WEBCONTROLS_USED = true;

        win.addEventListener("beforeunload", () => {
            clearInterval(clickInterval);
            window.TRUESUNGAMING_WEBCONTROLS_WINDOW = null;
        });

        win.document.title = `Web Control Panel v${VERSION}`;
        console.log(`Web Control Panel version ${VERSION} initialized.\n\nWritten by TrueSunGaming\nhttps://github.com/TrueSunGaming/web-control-panel`);

        css(`
            @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;600&display=swap');

            :root {
                --color-main: hsl(0, 0%, 10%);
                --color-main-dark: hsl(0, 0%, 5%);
                --color-error: hsl(0, 100%, 50%);
                --color-error-dark: hsl(0, 100%, 25%);
                --color-success-dark: hsl(120, 100%, 25%);
            }

            html, body {
                overflow: hidden;
            }

            * {
                font-family: "Titillium Web";
                color: white;
            }

            button {
                border: none;
                border-radius: 10px;
                cursor: pointer;
                transition-duration: .5s;
            }

            button:hover {
                border-radius: 5px;
            }

            input {
                border: none;
                border-radius: 10px;
                background-color: var(--color-main-light);
            }
        `, win.document.head);

        homepage();
    }

    init();
})()
