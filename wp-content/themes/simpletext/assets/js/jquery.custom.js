(function($){ //create closure so we can safely use $ as alias for jQuery

    $(document).ready(function(){

        "use strict";

        /*-----------------------------------------------------------------------------------*/
        /*  Superfish Menu
        /*-----------------------------------------------------------------------------------*/
        // initialise plugin
        var example = $('#primary-menu').superfish({
            //add options here if required
            delay:       100,
            speed:       'fast',
            autoArrows:  false  
        });

        $('#primary-menu').slicknav({
            prependTo: '#slick-mobile-menu',
            allowParentLinks: true,
            label:'菜单'            
        });   

        /*-----------------------------------------------------------------------------------*/
        /* Header Search
        /*-----------------------------------------------------------------------------------*/

        $('.search-icon > .icon-search').click(function(){

            $('.header-search').slideDown('fast', function() {});
            $('.search-icon > .icon-search').toggleClass('active');
            $('.search-icon > .icon-close').toggleClass('active');                                                                

        });

        $('.search-icon > .icon-close').click(function(){

            $('.header-search').slideUp('fast', function() {});
            $('.search-icon > .icon-search').toggleClass('active');
            $('.search-icon > .icon-close').toggleClass('active');                                       

        });                         
    
    });

})(jQuery);
(function addEvent(obj,type,fn){
if(obj.attachEvent){ //ie
obj.attachEvent('on'+type,function(){
fn.call(obj);
})
}else{
obj.addEventListener(type,fn,false);
}
})(window,'scroll',navigationshow);
function navigationshow(){
var isSupportTouch = "ontouchend" in document ? true : false;
if (isSupportTouch) return;
var t=document.getElementById('gotop');
var h = ("innerHeight" in window?window.innerHeight:document.documentElement.offsetHeight);
if(document.documentElement.scrollTop>h/2){
t.style="display:inline;";
}else{
t.style="display:none;";
}
}
const scrollToTop=()=>{const y=document.documentElement.scrollTop||document.body.scrollTop;if(y>0){window.requestAnimationFrame(scrollToTop);window.scrollTo(0,y-y/8)}};
(function(){var e=document.getElementById('search-hidden');e.value=(new Date().getTime());})();
function fetchreply(id, e) {
var a = new XMLHttpRequest;
var b = document.getElementById(e);
if (b === null) return;
var c = event.target;
event.target.innerHTML="正在获取最新信息，请稍后...";
a.timeout = 60e3;
url = 'https://www.fq12345.cc/fz12345/fetchreply.php?id='+id
a.open("GET", url, true);
a.onreadystatechange = function() {
if (200 === a.status || 4 === a.readyState) {
if(a.responseText != 0) {
b.innerHTML = a.responseText;
}
c.innerHTML="加载更新完成，已经是最新信息！";
}
};
a.ontimeout = function(e) {c.innerHTML = "超时，请重试。"};
a.onerror = function(e) {c.innerHTML = "出现错误，请重试。"};
a.send()
}
