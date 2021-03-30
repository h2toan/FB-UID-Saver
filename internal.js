import $ from './jquery-3.6.0.slim.min.js';
import idb from './index-min.js';
$(() => {
    const DOM_OBSERVER = new MutationObserver((mutationList) => {
        mutationList.forEach(e => {
            if (e.type == 'childList') {
                insertSaveButton();
            };
        });
    });
    DOM_OBSERVER.observe(document.querySelector("body"), {
        childList: true,
        subtree: true
    });
});

function insertSaveButton() {
    let saveButton = document.createElement('img');
    saveButton.src = "chrome-extension://cckalpbchfcoaohpfabnnojjmjbfaflh/img/marker.png";
    saveButton.className = "fbsaver-save-button";
    const POST_ANCHOR = $('span.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d9wwppkn.fe6kdd0r.mau55g9w.c8b282yb.mdeji52x.e9vueds3.j5wam9gi.knj5qynh.m9osqain.hzawbc8m>span');
    const COMMENT_ANCHOR = $('ul._6coi.oygrvhab.ozuftl9m.l66bhrea.linoseic');
    POST_ANCHOR.not(POST_ANCHOR.has('img.fbsaver-save-button')).append(saveButton);
    COMMENT_ANCHOR.not(COMMENT_ANCHOR.has('img.fbsaver-save-button')).append(saveButton.cloneNode());
    $('img.fbsaver-save-button').map((i, e) => e.onclick = save);
}

function save() {
    switch ($(this).parent()[0].tagName) {
        case "SPAN":
            writeToDatabase(getDataFromProfileHref($(this).parents('div.j83agx80.cbu4d94t.ew0dbk1b.irj2b8pg').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p')[0].href, $(this).parents('div.j83agx80.cbu4d94t.ew0dbk1b.irj2b8pg').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p')[0].innerText));
            break;

        case "UL":
            writeToDatabase(getDataFromProfileHref($(this).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8')[0].href, $(this).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8')[0].innerText));
            break;
    }
}

async function writeToDatabase(PAY_LOAD) {
    const DATA_BASE = await idb.openDB('FB-UID-Saver', 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('Data List')) {
                const SHEET = db.createObjectStore('Data List', {
                    keyPath: 'uid'
                });
                SHEET.createIndex('name', 'name', {
                    unique: false
                });
            }
        }
    });

    const TRANSACTION = DATA_BASE.transaction('Data List', 'readwrite');
    await TRANSACTION.store.put(PAY_LOAD)
}

function getDataFromProfileHref(PROFILE_HREF, PROFILE_NAME) {
    const PROFILE_UID = PROFILE_HREF.substring(PROFILE_HREF.indexOf('/user/') + 6, PROFILE_HREF.indexOf('/?'));
    return {
        uid: PROFILE_UID,
        name: PROFILE_NAME
    }
}