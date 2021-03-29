(function injectInternalScript() {
    getScript(chrome.runtime.getURL('jquery-3.6.0.slim.min.js'));
    getScript(chrome.runtime.getURL('internal.js'));
})()

function getScript(src, defer) {
    let script = document.createElement("script");
    script.src = src;
    script.type = "module";
    return document.getElementsByTagName("head")[0].appendChild(script);
}

