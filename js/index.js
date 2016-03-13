$(function(){
    
    $(document).ready(function() {
        $('#lightSlider_1').lightSlider({
            enableDrag: false,
            speed: 500,
            pause: 3000,
            auto: true,
            loop: true,
            gallery: false,
            item: 1,
            galleryMargin: -20,
            slideMargin: 0
        });
        $('#lightSlider_2').lightSlider({
            speed: 500,
            pause: 3000,
            gallery: false,
            item: 4,
            vertical: true,
            slideMargin: 0
        });
    });
});