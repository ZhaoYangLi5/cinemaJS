/**
 * Created by WQ on 2015/7/1.
 */

Package( function ( exports ) {

    var dom = imports( "dom.js" );

    function Scence( obj ) {
        var s = this;
        s.el = obj.el;
        s.child = {};
        s.audio = obj.audio;
        s.addElement = function ( klass, el ) {
            obj.appendChild( el );
            s.child[klass] = el;
        };
        s.lifeTime = obj.lifeTime;
        s.die = obj.die;
        s.born = function () {
            s.el.classList.add( "born" );
        }
    }

    exports.Scence = Scence;


} );