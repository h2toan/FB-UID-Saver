const TEST_PAYLOAD = JSON.parse('[{"uid":"100001737604884","name":"Vịt Shmily","timeTaken":"2021-04-01T02:45:40.178Z"},{"uid":"100004947794849","name":"Lan Hương","timeTaken":"2021-04-01T02:47:17.260Z"},{"uid":"100010126620062","name":"Đỗ Thị Nguyên Phương","timeTaken":"2021-04-01T02:46:12.384Z"},{"uid":"100025576605692","name":"NY NY","timeTaken":"2021-04-01T03:03:43.848Z"},{"uid":"100034109737914","name":"Hoa Anh Đào","timeTaken":"2021-04-01T03:01:42.667Z"},{"uid":"100039588876156","name":"Linh Nhi","timeTaken":"2021-04-01T02:47:23.072Z"},{"uid":"100040985168445","name":"Tuyết Trinh","timeTaken":"2021-04-01T02:50:46.320Z"},{"uid":"100047493000935","name":"Hà Như","timeTaken":"2021-04-01T02:46:10.009Z"},{"uid":"100050702328351","name":"Vivian Vo","timeTaken":"2021-04-01T03:03:38.424Z"},{"uid":"100062700468518","name":"Hạnh Đù","timeTaken":"2021-04-01T02:46:06.704Z"}]');

function writeToDatabase(PAYLOAD = TEST_PAYLOAD) {
    const DATABASE = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet2');
    const LAST_ROW = DATABASE.getLastRow();
    const MAX_ROW = DATABASE.getMaxRows();
    if (LAST_ROW == MAX_ROW) {
        DATABASE.insertRowAfter(LAST_ROW);
    };
    DATABASE.getRange('A1').setValue(JSON.stringify(PAYLOAD));
}