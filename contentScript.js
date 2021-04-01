(function injectInternalScript() {
    getScript(chrome.runtime.getURL('jquery-3.6.0.slim.min.js'));
    getScript(chrome.runtime.getURL('internal.js'));
    getCSS(chrome.runtime.getURL('fb-uid-saver.css'));
})()

function getScript(src) {
    let script = document.createElement("script");
    script.src = src;
    script.type = "module";
    return document.getElementsByTagName("head")[0].appendChild(script);
}

function getCSS(href) {
    let css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = href;
    return document.getElementsByTagName("head")[0].appendChild(css);
}