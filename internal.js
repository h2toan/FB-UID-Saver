import $ from './jquery-3.6.0.slim.min.js';
import idb from './index-min.js';
console.log(idb);
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

async function save() {
    switch ($(this).parent()[0].tagName) {
        case "SPAN":
            const PROFILE_HREF = $(this).parents('div.j83agx80.cbu4d94t.ew0dbk1b.irj2b8pg').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p')[0].href;
            const PROFILE_UID = PROFILE_HREF.substring(PROFILE_HREF.indexOf('/user/') + 6, PROFILE_HREF.indexOf('/?'));
            const PROFILE_NAME = $(this).parents('div.j83agx80.cbu4d94t.ew0dbk1b.irj2b8pg').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p')[0].innerText;
            const PAY_LOAD = {
                uid: PROFILE_UID,
                name: PROFILE_NAME
            };
            chrome.runtime.sendMessage('cckalpbchfcoaohpfabnnojjmjbfaflh', PAY_LOAD);
            break;

        case "UL":
            console.log($(this).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8')[0].href);
            break;
    }
}