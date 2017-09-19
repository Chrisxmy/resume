
		
	
	var local = true
	$('#fullpage').fullpage({
		anchors:['about','skills','item','contact'],
		loopHorizontal:false,
		fixedElements:'#arrow',
		menu:'#myMenu',
		// verticalCentered:true,
		scrollingSpeed:500,
		//navigation:true,
		//navigationTooltips:['about','skills','item','contact'],
		css3:true,
		paddingTop:'4em',
		slidesNavigation:true,
		controlArrows:false,
		continuousVertical: true,
		afterLoad:function(anchors,index){
			if(local && index === 2 ){
   	              circle() 	
			}
		},
		onLeave:function(anchors,index){
			
		}
	});

function circle(){
var percent=0;
    let loading=setInterval(function(){  
        if(percent > 80){  
           return 
        }else if(percent>50){  
            $('.circle').addClass('clip-auto');  
            $('.right').removeClass('wth0');  
        }  
        $('.c .circle .left').css("transform","rotate("+(18/5)*percent+"deg)");
        $('.c .num>span').text(percent);  
        percent++;  
    }); 
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



 var $line = $('.about .line')
 var $intro = $('.about .intro p')
 $line.animate({width:'60%'},800,function(){   
	    $('.about .name').addClass('nameAnimate')     
	    $intro.animate({
			opacity:1,
			top:'-30px'
		},600)
 })






