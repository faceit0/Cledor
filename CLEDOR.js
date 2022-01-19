// JavaScript Document

/* docu ready*/
$(document).ready(function(){
//	alert('이 페이지는 크롬에 최적화되어 있습니다.')


/* mobile product li height*/
	liWidth=$('.product_nav>ul>li').width();
	$('.product_nav>ul>li').height(liWidth);

$('.product_nav>ul>li')
$('.product_nav>ul>li').on('click',function(){
	idx=$(this).index();
	$name=$(this).attr('class').slice(2);
	console.log($name)

//	console.log($('.m-products>div').eq(idx).attr('class').slice(10));

//	$('.m-products').prepend($('.m-products>div'));
	$('.m-products').children().not($('[data-name="'+$name+'"]')).css({display:'none'});
	$('[data-name="'+$name+'"]').css({display:'block'});

	if($name=="all"){$('.m-products').children().css({display:'block'});}

	$('.m-products').scrollTop(0);
});

	$('section').stop().animate({opacity:1},function(){
		$('.line').stop().animate().fadeIn(500);
	});



menuliFocused=function(aa){
	$not=$('nav.menu_bar>div>ul>li').eq(aa).css({color:'rgba(255,212,34,0.8)', 'font-style':'bold', background:'rgba(255,255,255,0.25)'});
	$('nav.menu_bar>div>ul>li').not($not).css({color:'rgba(255,255,255,0.8)', 'font-style':'normal', background:'none'});

	/*logo*/
	if(aa==0){
		console.log('aa: '+aa);
		$('nav.menu_bar>div>ul>li').css({color:'rgba(255,255,255,0.8)', 'font-style':'normal', background:'none'});
	}
};

$switch=function(bb){
	switch(bb){
		case 0:
		break;
		case 1:
		break;
		case 2:
			$('img.bg_top').stop().animate({top:0, left:0},700);
			$('img.caramel').stop().delay(200).animate({top:0, right:0},900);
			$('img.milk2').stop().animate({right:0, bottom:0},700);
			$('img.bg_bottom').stop().delay(400).animate({left:0, bottom:0},700);
			$('div.ad_wrap').stop().delay(1000).animate({top:-30},function(){
				$('nav.variety').stop().delay(500).animate({opacity:1})
			});
		break;

		case 3:
			$('div.AllProducts').css({opacity:1, transform:'rotate(360deg)'});
			$('div.logo_InCircle>img').delay(1000).fadeIn();
		break;

		case 4:
		break;
	}
};

num=0

/* MouseWheel Function */
$(window).on('mousewheel DOMMouseScroll MozMousePixelScroll', function(event,delta){
ani=$('body').is(':animated')

//console.log('num:'+num+' delta:'+delta);

if(delta<0 && num<4 && !ani){num++
//	console.log('down num: '+num);
}
else if(delta>0 && num>0 && !ani){num--
//	console.log('up num: '+num)
}

$('body').stop().animate({left:-($(window).width()*num)}, function(){
	$('section').each(function(){

$switch(num)
	});

});

menuliFocused(num)

});

menu_li=$('nav.menu_bar>div>ul>li');
/* Mobile Menu */
menu_li.on('click',function(){
	idx=$(this).index();

	winWid=$(window).width();

	idx=$(this).index();
	menuliFocused(idx);

//	console.log('idx: '+idx);

$('body').stop().animate({left:-winWid*(idx)}, function(){$switch(idx)});
});


/* mobile menu Navigator */
$('.m_menu').on('click',function(){
	if($(window).width()<1200){
	if($('nav.menu_bar').css('left')=='-93px')
	{
	$('nav.menu_bar').stop().animate({left:0},300)
	}

	else{$('nav.menu_bar').stop().animate({left:'-93px'})
		}
	}
});

	winWid=$(window).width()
	winHigh=$(window).height()
	winRatio=winWid-winHigh

	$('div.logo').on('click',function(){
	$('body').stop().animate({left:0});
	menu_li.css({color:'rgba(255,255,255,0.9)', background:'none'})
	});

//console.log('docu Height: '+$(document).height())

/*$(window).scroll(function(){
	now=$(this).scrollTop()
	winWid=$(window).width()
	winHigh=$(window).height()
	restOfScroll=$(document).height()-now
	docu=Number(now+winWid)
	console.log('now: '+now)
//	console.log('restOfScroll: '+restOfScroll)
	$('body').stop().animate({left:-winWid, top:0});
});*/





/* section 2 AD*/
frame_high=$('.frame>img').height()
$('div.frame').height(frame_high);
	$('div.frame>video').height($('div.frame>video').width()*0.5625);

/*Ad Nav-li*/
$('nav.variety>ul>li').on('click',function(){
		idx=$(this).index();
$('.frame>video').not($('.frame>video').eq(idx)).fadeOut();

$('.frame>video').eq(idx).fadeIn();

$('.frame>video').get(idx).play();

});

/* secrtion 3 product*/

$PopUp_detail=function(){
	var name=new Array("끌레도르 와플콘 밀크앤녹차", "끌레도르 와플콘 밀크초코", "끌레도르 베리믹스", "끌레도르 쿠키앤크림", "끌레도르 에스프레소", "끌레도르 바닐라", "끌레도르 초코브라우니", "끌레도르 솔티드 카라멜콘", "끌레도르 초코브라우니콘");

	var description=["신선한 우유와 진한 녹차를 고소한 와플에 가득 담아 한 입 가득 고급스러운 풍미를 선사합니다", "고소한 검은깨 와플 위에 진한 초콜릿과 풍부한 밀크가 어우러져 다채로운 맛의 향연이 시작됩니다", "스트로베리, 블루베리, 라즈베리가 화이트 초콜릿 코팅속에 가득차 봄날의 싱그러운 햇살처럼 상큼한 순간을 선사합니다", "두껍고 진한 초콜릿 코팅 속에 바삭한 쿠키와 달콤한 크림을 가득 담아 한입 베어 물면 입 안 가득 즐거움이 더해집니다", "입 안 가득 에스프레소 커피의 은은한 향과 두껍고 진한 깊은 밀크초콜릿을 듬뿍 담아 행복한 순간을 선사합니다", "향긋한 바닐라와 유지방 15%의 깊고 진한 두 배 농축유가 어우러져, 순수함 그대로 진한 프리미엄을 경험할 수 있습니다", "초콜릿 후레이크와 갓 짜낸 신선하고 깊고 진한 유지방 14%의 농축유를 파인트에 가득 담아 진한 프리미엄을 경험할 수 있습니다", "달콤한 카라멜과 짭쪼름한 청정 소금을 맛있게 믹스해 짠맛과 카라멜과 단맛의 조화를 경험할 수 있습니다", "진한 초콜릿 아이스크림에 쫀득한 식감의 브라우니 케익과 고소한 카라멜 아몬드 토핑이 조화되어 당신을 진하고 달콤한 시간으로 안내합니다"];

$('div.details').css({zIndex:300});
	$('div.details').stop().delay(500).animate({top:0, opacity:1}, function(){
//	console.log(name[$slice-1]);
	$('.name').text(name[$slice-1]);
	$('.description').text(description[$slice-1]);
	$('.products').css({display:'none'});
	$('.products').eq($slice-1).css({display:'flex'});

	$('.name').stop().animate({top:0},500, function(){
			$('.description').stop().animate({opacity:1},500, function(){
				$('.detail_border1').stop().delay(400).animate({width:'100%',opacity:1},400, function(){
					$('.detail_title>p').eq(0).stop().animate({top:0,opacity:1},300,function(){
						$('.cutting_board').stop().animate({top:0,opacity:1},300,function(){
							$('.products').eq($slice-1).children().find('img').stop().animate({top:0},function(){
							$('.detail_border2').stop().animate({width:'100%', opacity:1},400,function(){
								$('.detail_title>p').eq(1).stop().animate({top:0,opacity:1},300,function(){
									$('.newtrient').stop().animate({top:0, opacity:1});
								});
							});
							});
						});
					});
				});
			});
		});
	});
}

/* WHEN YOU CLICK THE PRODUCT IMG */
$('.item>img').on('click',function(){


	$offset_T=$('div.details_offset').offset().top;
	$offset_L=$('div.details_offset').offset().left;
//	console.log($('div.details_offset').offset().top+20);

	$class=$(this).attr('class');
	$slice=$class.substring(8,9);

	/* Product Animation */
	if($(this).parent().hasClass('bar')){
		$(this).css({width:'75%',transform:'rotate(0deg)',  zIndex:300,right:'initial',bottom:'initial'}).offset({left:$offset_L,top:$offset_T+5});
	}

	else if($(this).parent().hasClass('cup')){
		$(this).css({width:'45%',transform:'rotate(0deg)', zIndex:300}).offset({left:$offset_L,top:$offset_T+15});
	}

	else if($(this).parent().hasClass('waffle')){
		$(this).css({transform:'rotate(-50deg)', height:'70%',  zIndex:300}).offset({left:$offset_L+10,top:$offset_T+5});
	}

	else{
		$(this).css({transform:'rotate(-60deg)',height:'70%',  zIndex:300}).offset({left:$offset_L+60,top:$offset_T+25});
	}

/* Whenever you click the product image */
	$PopUp_detail($slice);

/*Img click End*/});



//	order=$(this).attr('data-order');


/* WHEN YOU CLICK DETAILS OF THE PRODUCT */
$('div.details').click(function(){
		/* Part of Details */
		$(this).stop().animate({top:30, opacity:0,zIndex:50},500,function(){
			$('.name').css({top:'-100%'});
			$('.description').css({opacity:0});
			$('.detail_middle').children().not($('.detail_title')).css({opacity:0, top:20});
			$('.detail_border1, .detail_border2').width(0);
			$('.detail_title>p').css({opacity:0, top:20});
		});



	/* Part of products */
	$('.waffle>img').css({height:'55%'});
		$('.corn>img').css({height:'55%'});
		$('.bar>img').css({width:'45%'});
		$('.cup>img').css({width:'30%'});
		$('.item>img').css({zIndex:100});
			$('.waffle>img').eq(0).css({transform:'rotate(-70deg)',left:90, top:120});
			$('.waffle>img').eq(1).css({transform:'rotate(-30deg)',left:160, top:40});
			$('.bar>img').eq(0).css({right:'initial', bottom:150, transform:'rotate(-80deg)',left:-10, top:'initial'});
			$('.bar>img').eq(1).css({right:'initial', bottom:100, transform:'rotate(-45deg)',left:75, top:'initial'});
			$('.bar>img').eq(2).css({right:'initial', bottom:25, transform:'rotate(-20deg)',left:120, top:'initial'});
			$('.cup>img').eq(0).css({right:'initial', bottom:'initial', transform:'rotate(120deg)',left:120, top:40});
			$('.cup>img').eq(1).css({right:'initial', bottom:'initial', transform:'rotate(150deg)',left:40, top:130});
			$('.corn>img').eq(0).css({ transform:'rotate(-100deg)',left:100, top:0});
			$('.corn>img').eq(1).css({ transform:'rotate(-160deg)',left:170, top:90});

	/* SECION Product */
});

//console.log('winWidth:'+$(window).width())

/*sectionSize=function(){$('section').css({width:$(window).width(),height:$(window).height()})};

window.resize(function(){
	sectionSize();


});*/

/* End of document*/});
