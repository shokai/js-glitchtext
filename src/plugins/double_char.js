GlitchText.prototype.glitch_doubleChar = function(str){
    return str.split('').map(function(i){
        if(i.match(/[ 　\t]/)) return i;
        return i+i;
    }).join('');
};