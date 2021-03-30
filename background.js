chrome.runtime.onMessageExternal.addListener(
    function (request) {
        console.log(request);
    }
);