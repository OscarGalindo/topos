var doc = $(document);

doc.ready(function () {
    var $game = $('#juego'),
        $topo = $('.topo'),
        $hits = 0;
    doc.topos = 0;

    $topo.data('active', false);

    setInterval(function () {
        if (doc.topos < 5) {
            var randomDiv = parseInt(Math.random() * $topo.length),
                divRandom = $topo.eq(randomDiv);

            if(false === divRandom.data('active')) {
                $game.trigger('nuevoTopo', {div: divRandom});
                doc.topos++;
            }
        }
    }, 1000)

});