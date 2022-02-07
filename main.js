// ==UserScript==
// @name         部分动漫网站去广告
// @namespace    http://tampermonkey.net/
// @version      1.1
// @icon         https://cdn.jsdelivr.net/gh/azmiao/picture-bed/img/%E5%9B%BE%E6%A0%87.png
// @description  支持的网站：假的D站，动漫岛，bimibimi，去看吧（即k8dm这个网站非常全，力荐），假的樱花动漫和真的樱花，age动漫（最近好像炸了），233动漫，漫岛动漫，异世界动漫，动漫花园
// @author       鹿友のKICO
// @match        *://*.dilidili.io/*
// @match        *://*.88dmw.com/*
// @match        *://*.bimiacg4.net/*
// @match        *://k8dm.com/*
// @match        *://*.imomoe.live/*
// @match        *://*.agemys.com/*
// @match        *://www.dm233.cc/*
// @match        *://*.mandao.tv/*
// @match        *://*.ysjdm.net/*
// @match        *://*.dmhy.org/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    //假的D站和bimi和去看吧和233，这几个有延迟响应，需要周期调用函数，0.5秒一次直至关闭
    setInterval(function () {
        //假的D站
        $("iframe").remove();
        //bimi和去看吧和动漫岛
        $("#HMRichBox").remove();
        $("#HMcoupletDivleft").remove();
        $("#HMcoupletDivright").remove();
        $("#fix_bottom_dom").remove();
        //去看吧
        $('div[class="tuiguang"]').remove();
        //233动漫
        $("#coupletright").remove();
        $("#coupletleft").remove();
    }, 500);
    //假的D站
    $('script[src="//rndhaunteran.com/400/4571896"]').remove();
    //假樱花
    $("#HMcoupletDivleft").remove();
    $("#HMcoupletDivright").remove();
    $("#HMRichBox").remove();
    $("#HMcoupletDivleft").remove();
    $("#HMCOVER_ID1").remove();
    //真樱花
    $('a[href="https://97z4w.mtdlqd1.com/"]').remove();
    //Age动漫
    $('div[style="text-align:center;padding:10px;"]').remove();
    //漫岛动漫
    $('div[class="zbcszxx"]').remove();
    $('div[class="info-right"]').remove();
    //异世界动漫
    $('div[class="ads ads_w"]').remove();
    //动漫花园
    $('#1280_adv').remove();
    $('#pkpk').remove();
    $('img[src="/sheng1.gif?7"]').remove();
})();