/**
 * Created by WQ on 2015/7/1.
 */

Package( function ( exports ) {

    var util = imports( "util.js" );

    function element( tag, properties, parent ) {
        var el = document.createElement( tag );
        util.loopObj( properties, function ( value, key ) {
            switch ( key ) {
                case "css":
                    el.css( value );
                    break;
                default :
                    el[key] = value
            }
        } );
        parent && parent.appendChild( el );
        return el;
    }

    exports.element = element;

} );