GlitchText.prototype.glitch_vertical_reverse = function(str){
    var a = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var b = 'ɐqɔpǝɟbɥıظʞ1ɯuodbɹsʇnʌʍxʎz'.split('');
    var str = str.split('');
    for(var i = 0; i < a.length; i++){
        var ac = a[i];
        str = str.map(function(c){
            if(c == ac) return b[i];
            return c;
        });
    };
    return str.join('');
};
