$('a[href*="#"]').click(function(e) {
		e.preventDefault(); // prevent hard jump, the default behavior
		var position = $(this).attr("href"); // Set the target as variable
		// perform animated scrolling by getting top-position of target-element and set it as scroll target
		$('html, body').animate({
				scrollTop: $(position).offset().top-60,
		}, 600, 'swing');
	});


$(document).scroll(function () {
	var $nav = $(".mybar");
	var $toggler = $(".toggler");
	var $brandLogo = $(".logo");
	// $nav.toggleClass("scrollnav", $(this).scrollTop() > $nav.height()); ....alternate code that also works
	var scroll = $(document).scrollTop();
	if (scroll >= 100) {
		$nav.addClass("scrollnav");
		$toggler.addClass("toggleicon");
		$brandLogo.addClass("brandlogo");
	} else {
		$nav.removeClass("scrollnav");
		$toggler.removeClass("toggleicon");
		$brandLogo.removeClass("brandlogo");
		}
	if (scroll >=300) {
		$('.rightside a i').css('color', 'black');
	} else {
		$('.rightside a i').css('color', 'white')
	}
	});

$('.contain').hover(function () {
	$(this).children(".text").css('opacity','1');
	$(this).children(".text").find(".uppertext h3").css('transform', 'translate(0,0)');
	$(this).children(".text").find(".lowertext").css('transform', 'translate(0,0)');
}, function () {
		$('.text').css('opacity', '0');
		$('.uppertext h3').css('transform', 'translate(0,-50px)');
		$(".lowertext").css('transform', 'translate(0,50px)');
	}
);


$(".toggler").click(function(e) {
    $("#side").animate(
		{width:'toggle'},)
		e.stopPropagation();
	});

$(".sidebar_container a .fa-times").click(function(e) {
	$("#side").animate(
		{width:'toggle'},);
		e.stopPropagation();
	});

	$('.sidebar_container li').click(function(e){
		$("#side").animate(
			{width:'toggle'},);
			e.stopPropagation();
	});
	
	$(document).click(function() { 
		if ($('#side').is(":visible"))  {
			$("#side").animate(
				{width:'toggle'},);
		}        
	  });

	
$(".rightside a").hover(function() {
	$(this).children().addClass("bulleteffect");
}, function() { 
$(this).children().removeClass("bulleteffect");
 });

$(window).scroll(function() {
	var scrollDistance = $(window).scrollTop();
	$('.sections').each(function(i) {
		if ($(this).position().top-100 <= scrollDistance) {
			$('.rightside a').find('i').removeClass('active far').addClass('fas');
			$('.rightside a i').eq(i).removeClass('fas').addClass('active far');
	}
});
});
// .scroll()

$(document).scroll(function () {
	if ($(this).scrollTop() >= 7518 && $(this).scrollTop() < 9399){
		$('.subnav').addClass("fixedsubnav");
	} else {
		$('.subnav').removeClass("fixedsubnav");
	}
});


	// if ($(window).width() <= 1199) { 
	// 	$(document).scroll(function () {
	// 		if ($(this).scrollTop() >= 7306 && $(this).scrollTop() < 9570){
	// 			$('.subnav').addClass("fixedsubnav");
	// 		} else {
	// 			$('.subnav').removeClass("fixedsubnav");
	// 		}
	// 	});
	// };


var number = 1000000;
  setInterval(function(){
		var random = 1+Math.floor(Math.random()*5);
		number += random;
		$('.subtextnumber').text(number);
	}
	, 1000);

		$('.subitems').click(function() {
					$('.subitems').removeClass('subitemcolor');
					$(this).addClass('subitemcolor');
	});

	$('.aboutcontainers').hover(function () {
		$(this).children(".overlay").css('opacity','1');
		$(this).children(".overlay").find('.name').css('transform', 'translate(0,130px)');
	}, function () {
		$(this).children(".overlay").css('opacity','0');
		$(this).children(".overlay").find('.name').css('transform', 'translate(0,0)');
		}
	);


// $(document).ready(function() {
// $(".down i").hover(function () {
// 		$(this).effect("bounce","600", 1000);
// 	});
// });