GlitchText.prototype.glitch_insertWave = function(str){
    var res = '';
    var ss = str.split('');
    for(i in ss){
        res += ss[i];
        if(Math.random() > 0.8) res += '〜';
    };
    return res;
};