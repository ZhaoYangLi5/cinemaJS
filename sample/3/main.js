/**
 * Created by WQ on 2015/7/6.
 */

main( function () {
    var Scence = imports( "../../lib/cinema.js" ).Scence;
    var util = imports( "../../lib/util.js" );
    var sys = imports( "../../lib/sys/build.js" );

    var TimeLine = [];
    var scences = document.querySelectorAll( ".scence" );
    util.loopArray( scences, function ( s ) {
        TimeLine.push( new Scence( {
            el : s,
            lifeTime : 6
        } ) );
        document.body.removeChild( s );
    } );
    sys.play( TimeLine, null, null );
} );