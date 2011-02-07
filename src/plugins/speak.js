GlitchText.prototype.glitch_speak = function(str){
    var speak = [
        ['「','」'],
        ['『','』'],
        ['(',')'],
        ['（','）']
    ].choice();
    return speak[0]+str+speak[1];
};