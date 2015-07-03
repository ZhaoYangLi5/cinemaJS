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
    // 组建TimeLine
    util.loopArray( scences, function ( s, i ) {
        TimeLine.push( new Scence( {
            el : s,
            lifeTime : 8,
            audio : {
                src : musics[i],
                delay : 0,
                isJust : true
            }
        } ) );
        document.body.removeChild( s );
    } );

    var subtitles = [
        {
            duration : 8,
            //delay:,
            text : "人们常说：单身只有两种情况：一种不知道什么叫做，爱。"
        },
        {
            duration : 8,
            text : "另一种不知道什么叫，做爱。两种都懂，你就碉堡了。"
        },
        {
            duration : 8,
            text : "呀！我口红找不见了。"
        }
    ];

    sys.play( TimeLine, subtitles );
} );