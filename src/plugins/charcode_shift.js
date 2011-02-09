GlitchText.prototype.glitch_charcode_shift = function(str){
    return String.fromCharCode.apply(null, str.split('').map(function(c){
        return c.charCodeAt(0);
    }).map(function(i){
        return i+1;
    }));
};