/**
 * Created by WQ on 2015/7/1.
 */

Package( function ( exports ) {

    var util = imports( "util.js" );

    var loopObj = util.loopObj;

    var insertCSSRules = function () {
        var style = document.createElement( "style" );
        document.querySelector( "head" ).appendChild( style );
        return function ( rules ) {
            for ( var selector in rules ) {
                style.sheet.insertRule( selector + "" + JSON.stringify( rules[selector] ).replace( /"/g, "" ), style.sheet.rules.length );
            }
        }
    }();

    Node.prototype.css = function ( styles ) {
        var el = this;
        loopObj( styles, function ( value, key ) {
            el.style.setProperty( key, value, null );
        } );
    };

    exports.insertCSSRules = insertCSSRules;
} );