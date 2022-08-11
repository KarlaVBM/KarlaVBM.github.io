$(function () {
    $("#btn-min-menu").on('click', function (e) {
        e.preventDefault();

        if ($(".cont-full-MinMenu").css('display') == 'none') {
            $(".cont-full-MinMenu").css({ 'display': 'block' });
            $("body").css({ 'overflow-y': 'hidden' });
        } else {
            $(".cont-full-MinMenu").css({ 'display': 'none' });
            $("body").css({ 'overflow-y': 'scroll' });
        }

        e.stopImmediatePropagation();


    });

    //Para ocultar el menu cuando den click afuera de el
    $(document).on("click", function (e) {
        var container = $('.container-minMenu');
        var container2 = $("#btn-min-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0) {

            //Se ha pulsado en cualquier lado fuera de los elementos contenidos en la variable container
            $(".cont-full-MinMenu").css({ 'display': 'none' });
            $("body").css({ 'overflow-y': 'scroll' });
        }
    });

});
