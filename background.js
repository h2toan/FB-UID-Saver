chrome.runtime.onMessageExternal.addListener(
    function (request) {
        fetch('https://script.google.com/macros/s/AKfycbxgG65tcpImwBfbFK0wpdFqqm9Jh3RxAXoB4G78K53EQAryZDjqZMESj3t-F-T6kEfB/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(request)
        });
    }
);