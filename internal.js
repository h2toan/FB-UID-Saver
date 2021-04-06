import $ from './jquery-3.6.0.slim.min.js';
$(() => {
    const DOM_OBSERVER = new MutationObserver((mutationList) => {
        mutationList.forEach(e => {
            if (e.type == 'childList') {
                if (location.pathname.match(/^\/groups\/[\d\w]+$/)) {
                    insertSaveButton('span.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d9wwppkn.fe6kdd0r.mau55g9w.c8b282yb.mdeji52x.e9vueds3.j5wam9gi.knj5qynh.m9osqain.hzawbc8m>span', 'feed-post');
                    insertSaveButton('ul._6coi.oygrvhab.ozuftl9m.l66bhrea.linoseic', 'feed-comment');
                }
                if (location.pathname.match(/^\/groups\/\d+\/search/)) {
                    insertSaveButton('span.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.nkwizq5d.roh60bw9.hop8lmos.scwd0bx6.n8tt0mok.hyh9befq.jwdofwj8.r8blr3vg', 'search-post');
                    insertSaveButton('ul._6coi.oygrvhab.ozuftl9m.l66bhrea.linoseic', 'search-comment');
                }
            };
        });
    });
    DOM_OBSERVER.observe(document.querySelector("body"), {
        childList: true,
        subtree: true
    });
    let spywareButton = document.createElement('img');
    spywareButton.src = "chrome-extension://cckalpbchfcoaohpfabnnojjmjbfaflh/img/spyware.png";
    spywareButton.className = `spyware-button`;
    spywareButton.onclick = () => {
        $('img.search-post')[0].className += ' clicked';
        $('img.search-post')[1].className += ' clicked';
        $('img.search-post')[2].className += ' clicked';
        $('img.search-post')[3].click();
    };
    $('body').append(spywareButton);
});

function insertSaveButton(anchorSelector, typeOfAnchor) {
    let saveButton = document.createElement('img');
    saveButton.src = "chrome-extension://cckalpbchfcoaohpfabnnojjmjbfaflh/img/marker.png";
    saveButton.className = `fbsaver-save-button ${typeOfAnchor}`;
    const ANCHOR_COLLECTION = $(anchorSelector);
    ANCHOR_COLLECTION.not(ANCHOR_COLLECTION.has('img.fbsaver-save-button')).append(saveButton);
    $('img.fbsaver-save-button').map((i, e) => e.onclick = handleSaveClick);
}

function handleSaveClick() {
    this.className += ' clicked';
    chrome.runtime.sendMessage('cckalpbchfcoaohpfabnnojjmjbfaflh', getPayLoad(), saveLoop);
}

function getPayLoad(this) {
    let payLoad = {
        uid: '',
        name: '',
        timeTaken: new Date(),
        postContent: '',
        group: document.title.match(/(\(\d+\)\s)*(.+)(\s\| Facebook)/)[2]
    };
    if (this.classList[1] === 'feed-post') {
        payLoad.uid = $(this).parents('div.j83agx80.cbu4d94t.ew0dbk1b.irj2b8pg').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p')[0].href.match(/(\/user\/)(\d+)/)[2];
        payLoad.name = $(this).parents('div.j83agx80.cbu4d94t.ew0dbk1b.irj2b8pg').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p')[0].innerText;
        payLoad.postContent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().children()[2].innerText;
        $(this).parent().find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8.b1v8xokw')[0].focus();
        payLoad.postId = $(this).parent().find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8.b1v8xokw')[0].href.match(/(\/permalink\/)(\d+)/)[2];
        return payLoad;
    };
    if (this.classList[1] === 'feed-comment') {
        payLoad.uid = $(this).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8')[0].href.match(/(\/user\/)(\d+)/)[2];
        payLoad.name = $(this).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8')[0].innerText;
        payLoad.postContent = $(this).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('div.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.c1et5uql')[0] ? $(this).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('div.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.c1et5uql')[0].innerText : '';
        payLoad.postId = $(this).parent().find('a')[0].href.match(/(\/permalink\/)(\d+)/)[2];
        payLoad.commentId = $(this).parent().find('a')[0].href.match(/(\?comment_id=)(\d+)/)[2];
        payLoad.replyCommentId = $(this).parent().find('a')[0].href.match(/(reply_comment_id=)(\d+)/) ? $(this).parent().find('a')[0].href.match(/(reply_comment_id=)(\d+)/)[2] : '';
        return payLoad;
    };
    if (this.classList[1] === 'search-post') {
        payLoad.uid = $(this).parent().children(':first-child')[0].href.match(/(\/user\/)(\d+)/)[2];
        payLoad.name = $(this).parent().children(':first-child')[0].innerText;
        payLoad.postContent = $(this).parents('div.rq0escxv.l9j0dhe7.du4w35lb.hybvsw6c.io0zqebd.m5lcvass.fbipl8qg.nwvqtn77.k4urcfbm.ni8dbmo4.stjgntxs.sbcfpzgs').find('span.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7')[1].childNodes[1].data;
        payLoad.postId = $(this).parents('div.rq0escxv.l9j0dhe7.du4w35lb.hybvsw6c.io0zqebd.m5lcvass.fbipl8qg.nwvqtn77.k4urcfbm.ni8dbmo4.stjgntxs.sbcfpzgs').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.a8c37x1j.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.p8dawk7l')[0].href.match(/(\/permalink\/)(\d+)/)[2];
        return payLoad;
    };
    if (this.classList[1] === 'search-comment') {
        payLoad.uid = $(this).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8')[0].href.match(/(\/user\/)(\d+)/)[2];
        payLoad.name = $(this).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8')[0].innerText;
        payLoad.postContent = $(this).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('div.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.c1et5uql')[0] ? $(this).parents('div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc').find('div.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.c1et5uql')[0].innerText : '';
        payLoad.postId = $(this).parent().find('a')[0].href.match(/(\/permalink\/)(\d+)/)[2];
        payLoad.commentId = $(this).parent().find('a')[0].href.match(/(\?comment_id=)(\d+)/)[2];
        payLoad.replyCommentId = $(this).parent().find('a')[0].href.match(/(reply_comment_id=)(\d+)/) ? $(this).parent().find('a')[0].href.match(/(reply_comment_id=)(\d+)/)[2] : '';
        return payLoad;
    };
}

function saveLoop() {
    return
    if ($('img.search-post').not($('img.search-post.clicked'))[0] == undefined && $('span.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.jq4qci2q.a3bd9o3v.knj5qynh.m9osqain.oqcyycmt')[0] !== undefined) {
        console.log('Done');
        return;
    }
    if ($('img.search-post').not($('img.search-post.clicked'))[0] == undefined) {
        scroll(0, document.body.scrollHeight);
        setTimeout(saveLoop, 5000);
    } else $('img.search-post').not($('img.search-post.clicked'))[0].click();
}