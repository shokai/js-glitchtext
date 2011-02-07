GlitchText.prototype.glitch_insertWave = function(str){
    return str.split('').map(function(c){
        if(!c.match(/[ 　\t]/) && Math.random() > 0.8) return c+'〜';
        return c;
    }).join('');
};