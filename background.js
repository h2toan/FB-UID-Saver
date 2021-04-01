chrome.runtime.onMessageExternal.addListener(
    function (request) {
        fetch('https://script.google.com/macros/s/AKfycbxtB29n2q9yUd8scfIs__zQCpRw7Yv_uXfjSMDgA0jlF_whwWGCCRFCO_MU-41QRYlS/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(request)
        });
    }
);