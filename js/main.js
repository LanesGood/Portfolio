$(function() {
    $('#menuIcon').click(function(e){
      e.preventDefault();
      $('.top-nav ul').slideToggle('slow');
    });
    $('.top-nav__secondary a').click(function() {
        var $linkClicked = $(this).attr('href');
        document.location.hash = $linkClicked;
        if (!$(this).hasClass("active")) {
            $(".top-nav__secondary a").removeClass("active");
            $(this).addClass("active");
            $('main').hide();
            $($linkClicked).fadeIn().css('display', 'flex').css('display', 'grid');
            return false;
        }
        else {
            return false;
        }
    });
    var hash = window.location.hash;
    hash = hash.replace(/^#/, '');
    switch (hash) {
        case 'Moth' :
            $("#" + hash + "-link").trigger("click");
            break;
        case 'Guinea' :
            $("#" + hash + "-link").trigger("click");
            break;
        case 'India' :
            $("#" + hash + "-link").trigger("click");
            break;
    }
});
