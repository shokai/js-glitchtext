GlitchText.prototype.glitch_doubleChar = function(str){
    var res = '';
    ss = str.split('');
    for(i in ss){
        var c = ss[i];
        if(!(c.match(/[ 　\t]/))) res += c+c
    };
    return res;
};