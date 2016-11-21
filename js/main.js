/* Using jQuery */
(function($) {

  var strength1 = 50;
  var strength2 = 100;
  var strength3 = 200;
  $("html").mousemove(function(e){
      var pageX = e.pageX - ($(window).width() / 2);
      var pageY = e.pageY - ($(window).height() / 2);
      var newvalueX = 1* pageX * -1;
      var newvalueY = 1* pageY * -1;
      $('#background').css("background-position", (strength1 / $(window).width() * pageX * -1)+"px "+(strength1  / $(window).height() * pageY * -1)+"px");
      $('#middleground').css("background-position", (strength2 / $(window).width() * pageX * -1)+"px "+(strength2  / $(window).height() * pageY * -1)+"px");
      $('#foreground').css("background-position", (strength3 / $(window).width() * pageX * -1)+"px "+(strength3  / $(window).height() * pageY * -1)+"px");
  });

  var wh = window.innerHeight,
    $iphone = $('.iphone'),
    $innerS1 = $('.innerS1'),
    $innerS2 = $('.innerS2'),
    $innerS3 = $('.innerS3'),
    $innerS4 = $('.innerS4'),
    $screenHat = $('.screenHat'),
    $screenA = $('.screenA'),
    $screenB = $('.screenB'),
    $screenC = $('.screenC');

  // Initialize ScrollMagic
  var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  // Create scene
  $("section").each(function() {

    var name = $(this).attr('id');

    new ScrollMagic.Scene({
      triggerElement: this,
      duration: '50%'
    })
    .setPin(this)
    .addIndicators({
      name:name
    })
    .loglevel(3)
    .addTo(ctrl);
  });

  // iPhone intro animation Tween
  /*
  var iphoneIntro = TweenMax.from($iphone, 1, {
    yPercent: 50,
    xPercent: 100,
    ease: Cubic.easeOut
  });
  */

  // iPhone intro animation Timeline
  var iphoneIntroTl = new TimelineMax();
  iphoneIntroTl
    .from($iphone, 1, {yPercent: 20,xPercent: 100, ease: Power4.easeInOut})
    .to($innerS1, 0.5, {opacity: 0, yPercent: -5, scale: 0.98}, '0');

  // Hook iphone animation onto the scrollbar
  new ScrollMagic.Scene({
    offset: wh,
    duration: '70%'
  })
  .setTween(iphoneIntroTl)
  .triggerElement($('body')[0])
  .addTo(ctrl);

  // Animate the hat up, letter A in and fade in content of section 2
  var iphoneContentHat = new TimelineMax();
  iphoneContentHat    
    .to($screenHat, 1, {yPercent: -50, ease: Power4.easeOut})
    .fromTo($screenA, 1, {yPercent: 20, autoAlpha: 0, scale: 0.8}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '0')
    .from($innerS2, 1, {autoAlpha: 0}, '-=0.3');

  new ScrollMagic.Scene({
    offset: wh*0.6,
    triggerElement: $('body')[0],
    duration: '80%'
  })
  .setTween(iphoneContentHat)
  .addIndicators()
  .addTo(ctrl);

// Animate letter A out, letter B in and fade in content of section 3
  var iphoneContent1Tl = new TimelineMax();
  iphoneContent1Tl    
    .to($screenA, 0.3, {yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut})
    .fromTo($screenB, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut})
    .from($innerS3, 1, {autoAlpha: 0}, '-=0.7');

  new ScrollMagic.Scene({
    triggerElement: $('.innerS2 h2')[0],
    duration: '50%'
  })
  .setTween(iphoneContent1Tl)
  .addTo(ctrl);

  // Animate letter B out, letter C in and fade in content of section 4
  var iphoneContent2Tl = new TimelineMax();
  iphoneContent2Tl    
    .to($screenB, 0.3, {yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut})
    .fromTo($screenC, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut})
    .from($innerS4, 1, {autoAlpha: 0}, '-=0.7');

  new ScrollMagic.Scene({
    triggerElement: $('.innerS3 h2')[0],
    duration: '50%'
  })
  .setTween(iphoneContent2Tl)
  .addTo(ctrl);

})(jQuery);
