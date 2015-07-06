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
            lifeTime : 8
        } ) );
        document.body.removeChild( s );
    } );

    var subtitle = [
        {
            text : "风吹落最后一片叶",
            delay : 13.17
        },
        {
            text : "我的心也飘着雪",
            delay : 6.52
        },
        {
            text : "爱只能往回忆里堆叠",
            delay : 5.82
        },
        {
            text : "oh~　给下个季节",
            delay : 4.39
        },
        {
            text : "忽然间树梢冒花蕊",
            delay : 6.87
        },
        {
            text : "我怎么会都没有感觉",
            delay : 5.4
        },
        {
            text : "oh~　整条街　都是恋爱的人",
            delay : 4.55
        },
        {
            text : "我独自走在暖风的夜",
            delay : 6.78
        }, {
            text : "多想要向过去告別",
            delay : 9.14
        }
    ];
    sys.play( TimeLine, subtitle, null );
} );