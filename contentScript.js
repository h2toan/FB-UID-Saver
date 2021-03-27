console.log('Script injected!');

const LINK = document.querySelectorAll('a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p');
let button = document.createElement('img');
button.src = chrome.runtime.getURL('img/marker.svg'); // chrome-extension://gjbgieplgdekhcjbelpbjjfkffodekol/img/marker.svg

for (let index = 0; index < LINK.length; index++) {
    const ELEMENT = LINK[index];
    console.log(ELEMENT);
    ELEMENT.parentElement.append(button);
}