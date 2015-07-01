/**
 * Created by WQ on 2015/7/1.
 */

Package( function ( exports ) {

    function loopArray( arr, func ) {
        for ( var i = 0; i < arr.length; i++ ) {
            func( arr[i], i );
        }
    }

    function loop( times, func ) {
        for ( var i = 0; i < times; i++ ) {
            if ( func( i ) ) {
                break;
            }
        }
    }

    exports.loopArray = loopArray;
    exports.loop = loop;

} );