const TEST_PAYLOAD = JSON.parse('{"uid":"100010126620062","name":"Đỗ Thị Nguyên Phương","timeTaken":"2021-04-01T14:18:02.634Z","postContent":"E cần tìm đầm này ạ,ai có báo em nha","group":"♥️ HỘI THANH LÝ VÁY MAXI, VÁY VOAN HOA, VINTAGE"}');

function writeToDatabase(PAYLOAD = TEST_PAYLOAD) {
    const DATABASE = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data List');
    const LAST_ROW = DATABASE.getLastRow();
    const MAX_ROW = DATABASE.getMaxRows();
    if (LAST_ROW == MAX_ROW) {
        DATABASE.insertRowAfter(LAST_ROW);
    };
    DATABASE.getRange(`A${LAST_ROW+1}:I${LAST_ROW+1}`).setValues([
        [PAYLOAD.uid, PAYLOAD.name, PAYLOAD.timeTaken, PAYLOAD.group, PAYLOAD.postContent, PAYLOAD.postId, PAYLOAD.commentId, PAYLOAD.replyCommentId, `=CONCATENATE(A${LAST_ROW+1}," | ",B${LAST_ROW+1})`]
    ]);
}