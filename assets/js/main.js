function windowResize() {
    screW = window.innerWidth;
    screH = window.innerHeight;
    screHH = (screH / 2);
    screHW = (screW / 2);
}
$(document).ready(function() {
    // pega o tamanho da janela ao carregar o documento
    windowResize();
    $(window).resize(function() {
        // pega tamanhos sempre que a tela for redimensionada
        windowResize();
    });



    // menu toggle

    $("#menu-toggle").click(function(e){
        e.preventDefault();
        $("#header").toggleClass('open');
    });

    
    // ajusta imagens as figures
    $("figure.fit").each(function(){
        var $img = $(this).children("img");
        if ($img) {
            $(this).css('background-image', 'url(\'' + $img.attr('src') + '\')');
            $img.hide();
        }
    });

     jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 50) {
            jQuery("header").addClass('top-fixed');
        } else {
         jQuery("header").removeClass('top-fixed');
     }

    });

      // carrossel clientes home
    $("#home-clientes-carousel").owlCarousel({
        items: 4,
        nav: false,
        dots: true,

        loop: true,

        responsive: {
            0: { items: 1, },
            450: { items: 2, },
            768: { items: 3, },
            992: { items: 4, },
        },
    });
    $('.jarallax').jarallax({
        speed: 0.2
    });
    $( ".wrapbox" ).click(function() {
        if( $(this).hasClass('aparecer')){
            $(this).removeClass('aparecer', {duration:500});
        }else{
            $(this).addClass('aparecer', {duration:500});
        }
    });
});