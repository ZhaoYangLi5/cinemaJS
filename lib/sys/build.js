/**
 * Created by WQ on 2015/7/1.
 */

Package( function ( exports ) {

    var dom = imports( "../dom.js" );
    var audioScence = dom.element( "audio", {
            classList : "track-scence",
            autoplay : true
        }, document.body ),
        audioBG = dom.element( "audio", {
            classList : "track-bg",
            autoplay : true
        }, document.body );

    function showSubTitle( border, subtitles ) {
        var curIndex = 0;

        function show() {
            border.innerText = subtitles[curIndex].text;
            curIndex = (curIndex + 1) % subtitles.length;
            setTimeout( arguments.callee, subtitles[curIndex].duration * 1000 );
        }

        show();
    }

    function play( TimeLine, subtitles ) {
        var curIndex = 0;

        function playOneScence() {
            var curScence = TimeLine[curIndex];
            if ( curScence.audio ) {
                if ( curScence.audio.delay ) {
                    setTimeout( function () {
                        audioScence.src = curScence.audio.src;
                    }, curScence.audio.delay * 1000 );
                }
                else {
                    audioScence.src = curScence.audio.src;
                }
            }
            curScence.born();
            document.body.appendChild( curScence.el );
            setTimeout( function () {
                if ( curScence.audio && curScence.audio.isJust ) {
                    audioScence.src = "";
                }
                document.body.removeChild( curScence.el );
                curScence.el.classList.remove( "born" );
                curIndex = (curIndex + 1) % TimeLine.length;
                playOneScence();
            }, curScence.lifeTime * 1000 );
        }

        playOneScence();

        if ( subtitles ) {
            var subtitlesBorder = dom.element( "div", {classList : "subtitles-border"}, document.body );
            showSubTitle( subtitlesBorder, subtitles );
        }

    }

    exports.play = play;

} );