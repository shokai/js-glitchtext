GlitchText.prototype.glitch_insertWave = function(str){
    var res = '';
    str.split('').each(function(c){
        res += c;
        if(Math.random() > 0.8) res += '〜';
    });
    return res;
};