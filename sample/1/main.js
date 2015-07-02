/**
 * Created by WQ on 2015/7/2.
 */

main( function () {
    var insertCSS = imports( "../../lib/css.js" ).insertCSSRules;
    var Scence = imports( "../../lib/cinema.js" ).Scence;
    var util = imports( "../../lib/util.js" );
    var sys = imports( "../../lib/sys/build.js" );

    var TimeLine = [];
    var scences = document.querySelectorAll( ".scence" );

    insertCSS( {
        ".bg.b-bg-mask" : {
            width : document.body.offsetHeight / 1008 * 1417 + "px"
        }
    } );

    var musics = ["audio/1.mp3", "audio/2.mp3", "audio/3.mp3"];
    var lefeTimes = [7, 7, 5];
    // 组建TimeLine
    util.loopArray( scences, function ( s, i ) {
        TimeLine.push( new Scence( {
            el : s,
            lifeTime : lefeTimes[i],
            audio : {
                src : musics[i],
                delay : 0,
                isJust : true
            }
        } ) );
        document.body.removeChild( s );
    } );

    sys.play( TimeLine );
} );