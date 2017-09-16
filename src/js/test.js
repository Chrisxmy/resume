$(document).ready(function() {
var local = true
	$('#fullpage').fullpage({
		resize:true,
		anchors:['about','skills','item','contact'],
		loopHorizontal:false,
		fixedElements:'#arrow',
		menu:'#myMenu',
		verticalCentered:true,
		//navigation:true,
		//navigationTooltips:['about','skills','item','contact'],
		css3:true,
		paddingTop:'4em',
		slidesNavigation:true,
		controlArrows:false,
		continuousVertical: true,
		afterLoad:function(anchors,index){
			console.log(index)
			if(local && index === 2 )
			circle()
		},
	});

function circle(){
var percent=0;
    var loading=setInterval(function(){  
        if(percent > 80){  
           return 
        }else if(percent>50){  
            $('.circle').addClass('clip-auto');  
            $('.right').removeClass('wth0');  
        }  
        $('.c .circle .left').css("transform","rotate("+(18/5)*percent+"deg)");
        $('.c .num>span').text(percent);  
        percent++;  
    },10); 
	local = false
}

function myMenu(){
 var $myMenu = $('#myMenu li')
	 $myMenu.on('mouseenter',function(){
	   $(this).children().eq(0).fadeIn('fast','linear')
})
      $myMenu.on('mouseleave',function(){
	   $(this).children().eq(0).fadeOut()
})
}
myMenu()

function arrow(){
   $('#arrow img').animate({bottom:'10px'})
                   .fadeOut()
				   .animate({bottom:'0'})
				   .fadeIn()
}
let timer =setInterval(arrow,500)



 var $line = $('.about .line')
 var $intro = $('.about .intro p')
 $line.animate({width:'60%'},1200,function(){   
	    $('.about .name').addClass('nameAnimate')     
	    $intro.animate({
			opacity:1,
			top:'-15px'
		},1000)
 })



})