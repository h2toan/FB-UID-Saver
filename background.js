chrome.runtime.onMessageExternal.addListener(
    function (request) {
        console.log(request);
        fetch('https://script.google.com/macros/s/AKfycbx7zafCoJwOWE34SK0RX_a3irP5mAetJVfAZz6xeJR5GCEfhB_HIW5b97MdUoEU-vxq/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(request)
        });
    }
);