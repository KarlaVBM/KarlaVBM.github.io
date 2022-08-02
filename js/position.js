//obtener heigt del body
var alto=$(".cont-full").height();
var home=$("#home").height();

$("#home").on('click', function (e) {
    //Subir el scroll arriba
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
}); 

$("#info").on('click', function (e) {
    //Subir el scroll arriba
    $("html, body").animate({ scrollTop: 500-70 }, "slow");
    return false;
}); 

$('#habilidades').on('click', function (e){
    $("html, body").animate({ scrollTop: 900-70 }, "slow");
    return false;
} );

$('#briefcase').on('click', function (e){
    $("html, body").animate({ scrollTop: 1150-70 }, "slow");
    return false;
} );

$("#contact").on('click', function (e){
    $("html, body").animate({ scrollTop: 1550-70 }, "slow");
    return false;
});





$("#btnDez-rigth").on('click', function (e){
    $(".cont-skills").animate({ scrollX: 0 });
    //$(".cont-skills").animate({ scrollX: 0 }, "slow");
    return false;
});