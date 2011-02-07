GlitchText.prototype.glitch_doubleChar = function(str){
    var res = '';
    ss = str.split('');
    ss.each(function(c){
        if(!(c.match(/[ 　\t]/))) res += c+c
    });
    return res;
};