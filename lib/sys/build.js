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

    function showSubTitle( border, subtitles, isLoop ) {
        var curIndex = 0;

        function show() {
            setTimeout( function () {
                border.innerText = subtitles[curIndex].text;
                curIndex = isLoop ? (curIndex + 1) % subtitles.length : curIndex + 1;
                if ( !isLoop && curIndex >= subtitles.length ) {
                    return;
                }
                show();
            }, subtitles[curIndex].delay * 1000 );
        }

        show();
    }

    function playMusic( timeline ) {
        var curIndex = 0;

        function play() {
            setTimeout( function () {
                audioScence.src = timeline[curIndex].src;
                curIndex++;
                play();
            }, timeline[curIndex].interval * 1000 );
        }

        play();
    }

    function play( scenceTimeLine, titleTimeLine, audioTimeLine, isLoop ) {
        var curIndex = 0;

        function playOneScence() {
            var curScence = scenceTimeLine[curIndex];
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
                curIndex = isLoop ? (curIndex + 1) % scenceTimeLine.length : curIndex + 1;
                if ( !isLoop && curIndex >= scenceTimeLine.length ) {
                    // 如果不循环，则到达结尾的时候就要停止
                    return;
                }
                playOneScence();
            }, curScence.lifeTime * 1000 );
        }

        playOneScence();

        if ( titleTimeLine ) {
            var subtitlesBorder = dom.element( "div", {classList : "subtitles-border"}, document.body );
            showSubTitle( subtitlesBorder, titleTimeLine, isLoop );
        }
        if ( audioTimeLine ) {
            playMusic( audioTimeLine );
        }

    }

    exports.play = play;

} );