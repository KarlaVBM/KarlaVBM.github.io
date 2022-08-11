
$("#home").on('click', function (e) {
    //Subir el scroll arriba
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
}); 

$("#info").on('click', function (e) {
    //Subir el scroll arriba
    $('html, body').animate({
        scrollTop: $(".cont-full-info").offset().top - 70
        }, 2000);
    return false;
}); 

$('#habilidades').on('click', function (e){
    /*$("html, body").animate({ scrollTop: 900-70 }, "slow");*/
    $('html, body').animate({
        scrollTop: $(".cont-full-skills").offset().top - 70
        }, 2000);
    return false;
} );

$('#briefcase').on('click', function (e){
    $('html, body').animate({
        scrollTop: $(".cont-full-briefcase").offset().top - 70
        }, 2000);
    return false;
} );

$("#contact").on('click', function (e){
    $('html, body').animate({
        scrollTop: $(".cont-full-contact").offset().top - 70
        }, 2000);
    return false;
});


$("#home2").on('click', function (e) {
    e.preventDefault();
    //Subir el scroll arriba
    $(".cont-full-MinMenu").css({ 'display': 'none' });
    $("body").css({ 'overflow-y': 'scroll' });
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
}); 

$("#info2").on('click', function (e) {
    e.preventDefault();
    //Subir el scroll arriba
    $(".cont-full-MinMenu").css({ 'display': 'none' });
    $("body").css({ 'overflow-y': 'scroll' });
    $('html, body').animate({
        scrollTop: $(".cont-full-info").offset().top - 70
        }, 2000);
    return false;
}); 

$('#habilidades2').on('click', function (e){
    e.preventDefault();
    /*$("html, body").animate({ scrollTop: 900-70 }, "slow");*/
    $(".cont-full-MinMenu").css({ 'display': 'none' });
    $("body").css({ 'overflow-y': 'scroll' });
    $('html, body').animate({
        scrollTop: $(".cont-full-skills").offset().top - 70
        }, 2000);
    return false;
} );

$('#briefcase2').on('click', function (e){
    e.preventDefault();
    $(".cont-full-MinMenu").css({ 'display': 'none' });
    $("body").css({ 'overflow-y': 'scroll' });
    $('html, body').animate({
        scrollTop: $(".cont-full-briefcase").offset().top - 70
        }, 2000);
    return false;
} );

$("#contact2").on('click', function (e){
    e.preventDefault();
    $(".cont-full-MinMenu").css({ 'display': 'none' });
    $("body").css({ 'overflow-y': 'scroll' });
    $('html, body').animate({
        scrollTop: $(".cont-full-contact").offset().top - 70
        }, 2000);
    return false;
});



