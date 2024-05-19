$(function(){

	$('a.shownav').on('click', function(){
		$('nav.headernav').slideDown();
		$(this).next('a.hidenav').fadeIn();
		$(this).hide();
	});
	$('a.hidenav').on('click', function(){
		$('nav.headernav').fadeOut();
		$(this).prev('a.shownav').fadeIn();
		$(this).hide();
	});

	var setscreen_width = $(window).width();
	if(setscreen_width < 960){
		$('nav ul li').on('click', function(){
			$('nav.headernav').fadeOut('slow');
			$('a.hidenav').hide();
			$('a.shownav').fadeIn();
		});
	}
		

	$(window).scroll(function() {
		if($(this).scrollTop() >= 100){
			$('header').addClass('fixed');
		}else{
			$('header').removeClass('fixed');
		}
	});

	//Testimonial Slider

	    const P_testimonials = document.querySelector('.Testimonial');
		const img = document.querySelector('.img');
		const name = document.querySelector('.name');
		const title = document.querySelector('.title');

		let index = 0;

		const testimonials = [
			{
				img: 'images/ismail.jpg',
				name: 'Ismail Desire',
				title: 'Secretary General',
				P_testimonials: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
			},
			{
				img: 'images/sheikh zubeir.jpeg',
				name: 'Sheikh Zubeir',
				title: 'President\'s Assistant',
				P_testimonials: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
			},
			{
				img: 'images/mama natasha.avif',
				name: 'Mama Natasha',
				title: 'Treasurer',
				P_testimonials: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
			},
		];

		function updateTestimonial() {

			const { img: image, name: Name, title: Title, P_testimonials: p_testimonials } = testimonials[index];
			img.src = image;
			name.innerHTML = Name;
			title.innerHTML = Title;
			P_testimonials.innerHTML = p_testimonials;

			index++;
			if (index > testimonials.length - 1) {
				index = 0;
			}
		}

		setInterval(updateTestimonial, 5000); // 5 seconds


	var bxslider = $('.bxslider').bxSlider({
		mode: 'horizontal',
		pager: false,
		auto: false,
		pause: 6000,
		stopAutoOnClick: true,
		speed: 500,
		infiniteLoop: true,
		controls: false,
		startSlide: 0,
		//nextText: '<span class="lnr lnr-chevron-right"></span>',
		//prevText: '<span class="lnr lnr-chevron-left"></span>',
		//pagerCustom: '.customdots',
		onSliderLoad: function(currentIndex){
			//alert(currentIndex);
			var letstry = $('.slide').eq(currentIndex);
			var newcurrentindex;
			if(letstry.hasClass('bx-clone')){
				newcurrentindex = 1;
			}else{
				newcurrentindex = 0;
			}
			$('.slide').eq(newcurrentindex).find('.fromleft').addClass('animate');
			$('.slide').eq(newcurrentindex).find('.fromright').addClass('animate');
			$('.slide').eq(newcurrentindex).find('.fromtop').addClass('animate');
			$('.slide').eq(newcurrentindex).find('.frombottom').addClass('animate');
			$('.slide').eq(newcurrentindex).find('.bigtosmall').addClass('animate');
			$('.slide').eq(currentIndex).find('.fromleft').addClass('animate');
			$('.slide').eq(currentIndex).find('.fromright').addClass('animate');
			$('.slide').eq(currentIndex).find('.fromtop').addClass('animate');
			$('.slide').eq(currentIndex).find('.frombottom').addClass('animate');
			$('.slide').eq(currentIndex).find('.bigtosmall').addClass('animate');
		},
		onSlideAfter: function($slideElement, oldIndex, newIndex){
			$('.slide').find('.fromleft').removeClass('animate');
			$slideElement.find('.fromleft').addClass('animate');
			$('.slide').find('.fromright').removeClass('animate');
			$slideElement.find('.fromright').addClass('animate');
			$('.slide').find('.fromtop').removeClass('animate');
			$slideElement.find('.fromtop').addClass('animate');
			$('.slide').find('.frombottom').removeClass('animate');
			$slideElement.find('.frombottom').addClass('animate');
			$('.slide').find('.bigtosmall').removeClass('animate');
			$slideElement.find('.bigtosmall').addClass('animate');
		}
	});
	$(window).resize(function() {
		bxslider.reloadSlider();
	});
	$('.gonext').click(function() {
		bxslider.goToNextSlide();
	});
	$('.goprev').click(function() {
		bxslider.goToPrevSlide();
	});


	var getcopyrightyear=document.querySelector(".copyrightyear");
	var dateobj=new Date;
	var getyear=dateobj.getFullYear();
	getcopyrightyear.innerHTML=getyear;


	$('a.vplay').on('click', function() {
		$(this).parents('.item.video').find('video').trigger('play');
		$(this).parents('.item.video').siblings('.item.video').find('video').trigger('pause');

		$(this).siblings('a.vpause').show();
		$(this).parents('.item.video').siblings('.item.video').find('a.vpause').hide();

		$(this).hide();
		$(this).parents('.item.video').siblings('.item.video').find('a.vplay').show();
	});

	$('a.vpause').on('click', function() {
		$(this).parents('.item.video').find('video').trigger('pause');
		$(this).siblings('a.vplay').show();
		$(this).hide();
	});

	$('.videowrap video').on('ended', function() {
		$(this).parents('.item.video').find('a.vplay').show();
		$(this).parents('.item.video').find('a.vpause').hide();
	});

});