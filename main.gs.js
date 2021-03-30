function writeToDatabase(PAYLOAD = TEST_PAYLOAD) {
    const DATABASE = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data List');
    const LAST_ROW = DATABASE.getLastRow();
    const MAX_ROW = DATABASE.getMaxRows();
    if (LAST_ROW == MAX_ROW) {
        DATABASE.insertRowAfter(LAST_ROW);
    };
}