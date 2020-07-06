function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    var range = document.querySelector("[type=range]");

    screen.init( volume, {
        width: window.innerWidth*0.8,
        height: window.innerHeight,
	targetDom: document.getElementById('display'),
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );
  
    range.addEventListener('input', function() {
      //document.write(range.value);
      screen.scene.remove( surfaces );
      isovalue = 128*range.value;
      surfaces = Isosurfaces( volume, isovalue )
      screen.scene.add( surfaces );
    });

    var isovalue = 128*range.value;
    var surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

    screen.loop();
}
