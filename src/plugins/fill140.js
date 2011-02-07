GlitchText.prototype.glitch_fill140 = function(str){
    var res = '';
    for(var i = 0; i < 140/str.length; i++){
        res += str;
    }
    return res;
};
