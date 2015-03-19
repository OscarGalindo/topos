$(document).ready(function () {
    $('.topo').data('active', false);

    var $game = $('#juego'),
        $topo = $('.topo'),
        $hits = 0,
        $topos = 0;

    setInterval(function () {
        if ($topos < 5) {
            var randomDiv = parseInt(Math.random() * $topo.length);
            if(false === $topo.eq(randomDiv).data('active')) {
                $game.trigger('nuevoTopo');
                $topo.eq(randomDiv).data('active', true);
                $topos++;
            }
        }
    }, 1000)

});