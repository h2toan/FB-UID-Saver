chrome.runtime.onMessageExternal.addListener(
    async function (request, sender, sendResponse) {
        const res = await fetch('https://script.google.com/macros/s/AKfycbwZqapZno2sHVCRVjrh0O-ZxB9K94ecIQrEPDBWZsnp6-0iEPmHNxETh6wbKPM-uQLT/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(request)
        });
        console.log(res);
        sendResponse('Success');
    }
);