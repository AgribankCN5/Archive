document.body.style.overflow = "hidden";
var admcreateEle = function(a, d) {
    var b = 1 == admExpandCase ? parent.document : document,
        c = b.getElementById(d);
    c.style.width = "980px";
    c.style.transition = "height 2s ease-out";
    c = b.createDocumentFragment();
    b = b.createElement("div");
    for (b.innerHTML = a; b.firstChild;) c.appendChild(b.firstChild);
    return c
};

function admExpand() {
    var a = admGetUrlCk(),
        a = a.replace("cid=-1", "cid=1"),
        a = a.replace("cov=1", "cov=0"),
		btnClose = admExpandPram.btnClose || '//adi.vcmedia.vn/adt/banners/nam2015/148/expand/closeBtn0004.png';
		setCloseLocal_T = admExpandPram.Top || 'bottom';
		setCloseLocal_L = admExpandPram.Left || 'right';

    (new Image).src = a;
    1 == admExpandCase && (a = document.getElementById("_AdmExpand"), void 0 == a && (a = admcreateEle('<div style="border: 0px none; margin: 0px; padding: 0px; text-align: left; overflow: visible; position: relative; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>', admid), document.body.insertBefore(a, document.body.childNodes[0]), a = document.getElementById("_AdmExpand")), a.innerHTML =
        '<iframe src="' + admExpandPram.src + '?url=' + encodeURIComponent(admGetUrlCk() + encodeURIComponent(__admLink)) + '&admid='+admid+'" frameborder="0" scrolling="no" width="' + admExpandPram.wd + '" height="' + admExpandPram.he + '"></iframe><a href="javascript:closeExpand()" style="position:absolute; z-index:9999;'+ setCloseLocal_T +':2px;'+ setCloseLocal_L +':2px;"><img border="0" src="'+btnClose+'" /></a>', window.setTimeout(function(){ExpandAnimation(admid, admExpandPram.hs, admExpandPram.he, !0)},500))
}

function ScrollContent(a, d, b, c, g, k, e) {
    var h = (new Date).getTime() - k,
        f = g ? b + Math.floor((c - b) * h / e) : c - Math.floor((c - b) * h / e),
        l = parent.document.getElementById(a);
    h > e ? (g ? f = c : (f = b, document.getElementById("_AdmExpand").innerHTML = ""), l.style[d] = f + "px") : (l.style[d] = f + "px", window.setTimeout(function() {
        ScrollContent(a, d, b, c, g, k, e)
    }, 100))
}

function ExpandAnimation(a, d, b, c) {
    a = parent.document.getElementById(a);
    c ? (a.style.height = b + "px", a.style.transition = "height 2s ease-out") : (a.style.height = d + "px", a.style.transition = "height 1.5s ease-out", window.setTimeout(function() {
        document.getElementById("_AdmExpand").innerHTML = ""
    }, 1400))
}

function closeExpand() {
    1 == admExpandCase && ExpandAnimation(admid, admExpandPram.hs, admExpandPram.he, !1)
}
parent.window.admcloseExpand = function() {
    var a = parent.document.getElementById("_AdmExpand");
    a && (a.innerHTML = "");
    parent.document.body.style.overflow = "auto"
};

function admaddEventListener(a, d, b) {
    "addEventListener" in a ? a.addEventListener(d, b) : "attachEvent" in a && a.attachEvent("on" + d, b)
}
admaddEventListener(parent.window, "message", function(a) {
    "string" == typeof a.data && -1 != a.data.indexOf("ADMexpand_" + admid) && admExpand()
});
