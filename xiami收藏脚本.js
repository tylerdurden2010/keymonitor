// ==UserScript==
// @name        Ximai
// @namespace   *
// @include     http://www.xiami.com/*
// @exclude     *
// @version     1
// @grant       none
// ==/UserScript==
window.onload=function(){
document.body.onkeydown = function(e){
    switch (e.keyCode)
    {
        case 77:
            document.getElementById("J_trackFav").click();
            break;
        case 83:
            document.getElementById("J_trackShare").click();
            break;
    }
    
   }; 
}