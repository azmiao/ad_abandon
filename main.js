// ==UserScript==
// @name         部分动漫网站去广告
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @icon         https://cdn.jsdelivr.net/gh/azmiao/picture-bed/img/%E5%9B%BE%E6%A0%87.png
// @description  支持的网站：bimibimi，去看吧（即k8dm这个网站非常全，力荐），假的樱花动漫（真的樱花好像没有广告的），age动漫（最近好像炸了），233动漫
// @author       鹿友のKICO
// @match        *://*.bimiacg4.net/*
// @match        *://k8dm.com/*
// @match        *://*.imomoe.live/*
// @match        *://*.agemys.com/*
// @match        *://www.dm233.cc/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    //bimi和去看吧
    setInterval(function () {
        $("#HMRichBox").remove();
        $("#HMcoupletDivleft").remove();
        $("#HMcoupletDivright").remove();
        //233动漫
        $("#coupletright").remove();
        $("#coupletleft").remove();
    }, 500);
    $('img[src*="https://dd-static.jd.com/ddimg/jfs/t1/219538/38/10100/4280447/61d54b57E825de7ba/881b8d66ef69284c.gif"]').remove();
    $("#fix_bottom_dom").remove();
    //俩樱花
    $("#HMcoupletDivleft").remove();
    $("#HMcoupletDivright").remove();
    $("#HMRichBox").remove();
    $("#HMcoupletDivleft").remove();
    $("#HMCOVER_ID1").remove();
    //Age动漫
    $('a[href*="https://vip.huijujiavip.com:8443?f=www.agemys.com"]').remove();
})();
