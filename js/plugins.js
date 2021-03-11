$(document).ready(function(){
    //header height

    $(function(){
        $('.header').height($(window).height());

        $(window).resize(function(){
            $('.header').height($(window).height());

        })


    })

//venobox
$('.venobox').venobox(); 



// nac color

$(window).scroll(function(){

    if($(window).scrollTop() >= 100){

        $('nav').css({
            'background-color' : '#0E1B4D',
            'padding' : '7px 0'
        })
    }
    else {
        $('nav').css({
            'background-color' : 'transparent',
            'padding' : '15px 0'
        })
    }


})

if($(window).scrollTop() >= 100){

    $('nav').css({
        'background-color' : '#0E1B4D',
        'padding' : '7px 0'
    })
}
else {
    $('nav').css({
        'background-color' : 'transparent',
        'padding' : '15px 0'
    })
}


//testimonials

$('.testimonials .buttons .btn').on('click',function(e){

    $(this).addClass('active').removeClass('active')


    e.preventDefault()

    $('#' + $(this).data('click')).siblings().fadeOut(200,function(){

        $('#' + $(this).data('click')).siblings().removeClass('active')

    })
     
    $('#' + $(this).data('click')).delay(200).fadeIn(200,function(){

        $('#' + $(this).data('click')).addClass('active')
    })

})
        //owl cariusall

        $('.owl-carousel').owlCarousel({
            loop:true,
            dots:true,
            center:true,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })
        
        //F.A.Q

        $('.faq .content .info i').on('click',function(){
            $(this).parent().parent().find('p').slideToggle(300);

            if($(this).hasClass('fa-plus-circle')){

                $(this).attr('class', 'fas fa-minus-circle');
                $(this).css('color', '#F8234A');
                $(this).parent().find('h4').css('color', '#F8234A')
                
                
            } 
            else {
                $(this).attr('class', 'fas fa-plus-circle');
                $(this).css('color', '#000');
                $(this).parent().find('h4').css('color', '#000')


            }
        })


})