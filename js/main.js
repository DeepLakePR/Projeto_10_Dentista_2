$(function(){

    $('nav.nav-desktop a').hover((e)=>{
        $('nav li').removeClass('selected');

        $(e.target).parent().addClass('selected');
    })

    $('nav.nav-mobile h3').click((e)=>{

        $(e.target).parent().parent().children().eq(1).slideToggle();

    })

})