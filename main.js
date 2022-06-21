// ==UserScript==
// @name         部分动漫网站去广告【AZMIAO版】
// @namespace    http://tampermonkey.net/
// @version      1.3
// @icon         https://pic.594594.xyz/i/2022/06/06/629e2324ca76c.png
// @description  支持的网站：假的D站，动漫岛，bimibimi，去看吧（即k8dm这个网站非常全，力荐），奇米奇米，age动漫，233动漫，漫岛动漫，异世界动漫，动漫花园
// @author       AZMIAO
// @license      GNU GPLv3
// @match        *://*.dilidili.io/*
// @match        *://*.dmd85.com/*
// @match        *://*.dm55.cc/*
// @match        *://*.bimiacg4.net/*
// @match        *://*.bimiacg.one/*
// @match        *://k8dm.com/*
// @match        *://k6dm.com/*
// @match        *://*.agemys.com/*
// @match        *://*.age.tv/*
// @match        *://*.dm233.cc/*
// @match        *://*.qimiqimi.net/*
// @match        *://*.mandao.tv/*
// @match        *://*.ysjdm.net/*
// @match        *://*.dmhy.org/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    //bimi和去看吧和233，这几个有延迟响应，需要周期调用函数，0.5秒一次直至关闭
    setInterval(function () {
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
    //动漫岛
    $('div[class="mb"]').remove();
    //假的D站
    $('script[src="//rndhaunteran.com/400/4571896"]').remove();
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
    //奇米奇米
    $('div[style="z-index:2147483647;right:2px;bottom:1px;height:270px;width:320px;overflow:hidden;position:fixed;_position:absolute; _margin-top:expression(document.documentElement.clientHeight-this.style.pixelHeight+document.documentElement.scrollTop);"]').remove();

})();