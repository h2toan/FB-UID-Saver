function doPost(e) {
    return handleRequest(e);
}

function handleRequest(e) {

    let lock = LockService.getScriptLock();
    lock.waitLock(30000);

    try {

        const PAYLOAD = JSON.parse(e.postData.contents);

        writeToDatabase(PAYLOAD);

        return ContentService.createTextOutput(JSON.stringify(PAYLOAD)).setMimeType(ContentService.MimeType.JSON);

    } catch (e) {
        return ContentService.createTextOutput(e);

    } finally {
        lock.releaseLock();
    };
}