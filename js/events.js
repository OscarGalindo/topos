var doc = $(document);

doc.on('nuevoTopo', function () {
    var noTopo = $('.topo');
    console.log(noTopo.length);
    console.log('New topo!');
});

