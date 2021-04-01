const TEST_PAYLOAD = JSON.parse('{"uid":"100047590807335","name":"Lê Thanh Ngân","timeTaken":"2021-04-01T09:02:07.770Z"}');

function writeToDatabase(PAYLOAD = TEST_PAYLOAD) {
    const DATABASE = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet2');
    const LAST_ROW = DATABASE.getLastRow();
    const MAX_ROW = DATABASE.getMaxRows();
    if (LAST_ROW == MAX_ROW) {
        DATABASE.insertRowAfter(LAST_ROW);
    };
    DATABASE.getRange('A1').setValue(JSON.stringify(PAYLOAD));
}