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
            delay : 5.55
        },
        {
            text : "我独自走在暖风的夜",
            delay : 6.78
        },
        {
            text : "多想要向过去告別",
            delay : 9.14
        },
        {
            text : "当季节不停更迭　oh~",
            delay : 6.41
        },
        {
            text : "却还是少一点坚决",
            delay : 5.51
        },
        {
            text : "在这寂寞的季节",
            delay : 6.51
        },
        {
            text : "艳阳高照在那海边",
            delay : 7.15
        },
        {
            text : "爱情盛开的世界",
            delay : 6.3
        },
        {
            text : "远远看着热闹一切",
            delay : 5.83
        },
        {
            text : "oh~　我记得那狂烈",
            delay : 5.2
        },
        {
            text : "窗外是快枯黃的叶",
            delay : 6.52
        },
        {
            text : "感伤在心中有一些　oh~",
            delay : 6.22
        },
        {
            text : "我瞭解　那些爱过的人",
            delay : 6.42
        },
        {
            text : "心是如何慢慢在凋谢",
            delay : 5.69
        },
        {
            text : "多想要向过去告別",
            delay : 5.71
        },
        {
            text : "当季节不停更迭　oh~",
            delay : 6.82
        },
        {
            text : "却永远少一点坚决",
            delay : 5.26
        },
        {
            text : "在这寂寞的季节",
            delay : 6.79
        },
        {
            text : "又走过风吹的冷冽",
            delay : 6.58
        },
        {
            text : "最后一盏灯熄灭",
            delay : 7.06
        },
        {
            text : "从回忆我慢慢穿越",
            delay : 5.59
        },
        {
            text : "在这寂寞的季节",
            delay : 5.77
        },
        {
            text : "还是寂寞的季节",
            delay : 5.12
        },
        {
            text : "一样寂寞的季节",
            delay : 7.38
        }
    ];
    sys.play( TimeLine, subtitle, null );
} );