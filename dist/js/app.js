webpackJsonp([0],[,,,function(t,e,n){"use strict";n(4),n(5),n(6)},function(t,e){},function(t,e,n){"use strict";(function(t){function e(){var e=0;setInterval(function(){e>80||(e>50&&(t(".circle").addClass("clip-auto"),t(".right").removeClass("wth0")),t(".c .circle .left").css("transform","rotate("+3.6*e+"deg)"),t(".c .num>span").text(e),e++)});n=!1}var n=!0;t("#fullpage").fullpage({anchors:["about","skills","item","contact"],loopHorizontal:!1,fixedElements:"#arrow",menu:"#myMenu",scrollingSpeed:500,css3:!0,paddingTop:"4em",slidesNavigation:!0,controlArrows:!1,continuousVertical:!0,afterLoad:function(t,a){n&&2===a&&e()},onLeave:function(t,e){}}),function(){var e=t("#myMenu li");e.on("mouseenter",function(){t(this).children().eq(0).fadeIn("fast","linear")}),e.on("mouseleave",function(){t(this).children().eq(0).fadeOut()})}();var a=t(".about .line"),o=t(".about .intro p");a.animate({width:"60%"},800,function(){t(".about .name").addClass("nameAnimate"),o.animate({opacity:1,top:"-30px"},600)})}).call(e,n(0))},function(t,e,n){"use strict";(function(t){function e(t){}function n(t){}function a(){t("#WidgetFloaterPanels").hide()}function o(){}function i(){"1"===sessionStorage.getItem("language")?sessionStorage.setItem("language","0"):sessionStorage.setItem("language","1"),window.location.reload()}var c=document.createElement("script");c.type="text/javascript",c.src="http://www.microsoftTranslator.com/ajax/v3/WidgetV3.ashx?siteData=ueOIGRSKkd965FeEGM5JtQ**",document.getElementsByTagName("head")[0].appendChild(c);var s=sessionStorage.getItem("language");document.onreadystatechange=function(){"complete"===document.readyState&&(t("#loading").fadeOut(),"1"===s&&Microsoft.Translator.Widget.Translate("zh-CHS","en",e,n,a,o,2e3))},t("#change").click(function(){i()})}).call(e,n(0))}],[3]);