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

    var musics = [
        {
            src : "audio/1.mp3",
            interval : 0
        }, {
            src : "audio/2.mp3",
            interval : 8
        }, {
            src : "audio/3.mp3",
            interval : 8
        }, {
            src : "audio/4.mp3",
            interval : 8
        }, {
            src : "audio/5.mp3",
            interval : 13
        },
        {
            src : "audio/6.mp3",
            interval : 12
        }, {
            src : "audio/8.mp3",
            interval : 12
        }, {
            src : "audio/9.mp3",
            interval : 8
        }, {
            src : "audio/10.mp3",
            interval : 8
        }
    ];

    var ScenceTime = [8, 8, 8, 8, 15, 8, 8, 8, 8];
    // 组建TimeLine
    util.loopArray( scences, function ( s, i ) {
        TimeLine.push( new Scence( {
            el : s,
            lifeTime : ScenceTime[i]
        } ) );
        document.body.removeChild( s );
    } );

    var subtitles = [
        {
            duration : 8,
            //delay : 0,
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

    sys.play( TimeLine, null, musics );
} );