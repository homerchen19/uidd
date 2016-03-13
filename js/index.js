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
            enableDrag: false,
            speed: 500,
            pause: 3000,
            gallery: false,
            item: 4,
            vertical: true,
            slideMargin: 0
        });
        
        $('.sliderImage').mouseover(function(){
            if($(this).attr("id") == "pic1" ){
                $('.modal').modal('hide');
                $('.modal-backdrop').remove();
                $('#pic1Modal').modal();
            }
                
            else if($(this).attr("id") == "pic2" ) {
                $('.modal').modal('hide');
                $('.modal-backdrop').remove();
                $('#pic2Modal').modal();
            }
        });
        
        $('.sliderImage').mouseout(function(){
            $('.modal').modal('hide');
            $('.modal-backdrop').remove();
        });
        
    });
});