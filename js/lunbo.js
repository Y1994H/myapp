 var mySwiper = new Swiper('.swiper-container', {
	    autoplay: true,//可选选项，自动滑动
        pagination: {
        el: '.swiper-pagination',        
        },
        pagination: {
            el: '.swiper-pagination-fraction',
            type: 'fraction',
        },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    for(var i = 0; i<$('.swiper-pagination-total').text(); i++){
        $('.swiper-pagination-bullets').append("<span class='swiper-pagination-bullet'></span>")
    }

    // 圆点js
    var numindex1 = $('.swiper-pagination-current').text()
    $('.swiper-pagination-bullet').eq(numindex1-1).addClass('swiper-pagination-bullet-color').siblings().removeClass('swiper-pagination-bullet-color');
    $('.swiper-pagination-current').on('DOMNodeInserted',function(){
        var numindex = $('.swiper-pagination-current').text()
        $('.swiper-pagination-bullet').eq(numindex-1).addClass('swiper-pagination-bullet-color').siblings().removeClass('swiper-pagination-bullet-color');
    })