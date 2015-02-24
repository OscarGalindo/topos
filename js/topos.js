$(document).ready(function () {
    $('.topo').data('active', false);

    var $game = $('#juego'),
        $hits = 0,
        $topos = 0;

    setInterval(function () {
        if ($topos < 5) {
            $game.trigger('nuevoTopo');
            $topos++;
        }
    }, 1000)

});