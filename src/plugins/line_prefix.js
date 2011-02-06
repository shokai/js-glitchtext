GlitchText.prototype.glitch_linePrefix = function(str){
    var res = '───';
    while(true){
        res += '─';
        if(Math.random() > 0.8) break;
    };
    return res+str;
};