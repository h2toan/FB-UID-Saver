import $ from './jquery-3.6.0.slim.min.js';
$(() => {
    const DOM_OBSERVER = new MutationObserver((mutationList) => {
        mutationList.forEach(e => {
            if (e.type == 'childList') {
                if (location.pathname.match(/^\/groups\/\d+$/)) {
                    insertSaveButton('span.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d9wwppkn.fe6kdd0r.mau55g9w.c8b282yb.mdeji52x.e9vueds3.j5wam9gi.knj5qynh.m9osqain.hzawbc8m>span');
                    insertSaveButton('ul._6coi.oygrvhab.ozuftl9m.l66bhrea.linoseic', 'Group Feed');
                }
                if (location.pathname.match(/^\/groups\/\d+\/search\/$/)) {
                    insertSaveButton('span.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.nkwizq5d.roh60bw9.hop8lmos.scwd0bx6.n8tt0mok.hyh9befq.jwdofwj8.r8blr3vg', 'Group Search');
                }
            };
        });
    });
    DOM_OBSERVER.observe(document.querySelector("body"), {
        childList: true,
        subtree: true
    });
});

function insertSaveButton(ANCHOR_SELECTOR, tag) {
    let saveButton = document.createElement('img');
    saveButton.src = "chrome-extension://cckalpbchfcoaohpfabnnojjmjbfaflh/img/marker.png";
    saveButton.alt = tag;
    saveButton.className = "fbsaver-save-button";
    const ANCHOR_COLLECTION = $(ANCHOR_SELECTOR);
    ANCHOR_COLLECTION.not(ANCHOR_COLLECTION.has('img.fbsaver-save-button')).append(saveButton);
    $('img.fbsaver-save-button').map((i, e) => e.onclick = save);
}

function save() {
    let payLoad = {
        uid: '',
        name: '',
        timeTaken: new Date(),
        postContent: '',
        group: document.title.match(/(\(\d+\)\s)*(.+)(\s\| Facebook)/)[2]
    };
    switch ($(this).parent()[0].tagName) {
        case "SPAN":

            break;

        case "UL":

            break;
    }
    if (this.alt === 'Group Feed' && $(this).parent()[0].tagName === 'SPAN') {
        payLoad.uid = $(this).parents('div.j83agx80.cbu4d94t.ew0dbk1b.irj2b8pg').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p')[0].href.match(/(\/user\/)(\d+)/)[2];
        payLoad.name = $(this).parents('div.j83agx80.cbu4d94t.ew0dbk1b.irj2b8pg').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p')[0].innerText;
        payLoad.postContent = $(element).parent().parent().parent().parent().parent().parent().parent().parent().children()[2].innerText || '';
    }
    if (this.alt === 'Group Feed' && $(this).parent()[0].tagName === 'UL') {
        payLoad.uid = $(this).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8')[0].href.match(/(\/user\/)(\d+)/)[2];
        payLoad.name = $(this).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8')[0].innerText;
        payLoad.postContent = $(element).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('div.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.c1et5uql')[0].innerText || '';
    }
    chrome.runtime.sendMessage('cckalpbchfcoaohpfabnnojjmjbfaflh', payLoad);
}

function prepareData(element, isPost) {
    const PROFILE_HREF = isPost ? $(element).parents('div.j83agx80.cbu4d94t.ew0dbk1b.irj2b8pg').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p')[0].href : $(element).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8')[0].href;
    const PROFILE_NAME = isPost ? $(element).parents('div.j83agx80.cbu4d94t.ew0dbk1b.irj2b8pg').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p')[0].innerText : $(element).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8')[0].innerText;
    const PROFILE_UID = PROFILE_HREF.match(/(\/user\/)(\d+)/)[2];
    const POST_CONTENT = isPost ? $(element).parent().parent().parent().parent().parent().parent().parent().parent().children()[2] : $(element).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('div.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.c1et5uql')[0];
    return {
        uid: PROFILE_UID,
        name: PROFILE_NAME,
        timeTaken: new Date(),
        postContent: POST_CONTENT ? POST_CONTENT.innerText : '',
        group: document.title.match(/(\(\d+\)\s)*(.+)(\s\| Facebook)/)[2]
    };
}