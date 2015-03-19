var doc = $(document),
    juego = $('#juego'),
    topo = $('.topo');

juego.on('nuevoTopo', function (e, data) {
    var divTopoNuevo = data.div,
        topo = 1;

    divTopoNuevo.data('active', true);
    var intervalTopo = setInterval(function () {
        divTopoNuevo.css('background-image', 'url(images/topo/position-' + topo + '.png)');
        if(topo === 7) {
            $('#juego').trigger('finTopo', {div: divTopoNuevo});
            clearInterval(intervalTopo);
        }
        topo++;
    }, 200);
});

juego.on('finTopo', function(e, data) {
    var divFinTopo = data.div;
    divFinTopo.css('background-image', 'url(images/hole.png)');
    divFinTopo.data('active', false);
    doc.topos -= 1;
});

topo.on('click', function() {
    var divTopo = $(this);

    if(true === divTopo.data('active')) {
        doc.hits++;
        $('#capturados').html(doc.hits);
        divTopo.data('active', false);
        divTopo.css('background-image', 'url(images/captured.png)');
        setTimeout(function() {
            divTopo.css('background-image', 'url(images/hole.png)');
        }, 1000);
    }
});

