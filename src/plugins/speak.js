GlitchText.prototype.glitch_speak = function(str){
    var speaks = [
        ['「','」'],
        ['『','』'],
        ['(',')'],
        ['（','）']
    ];
    var sp = speaks[Math.floor(Math.random()*speaks.length)];
    return sp[0]+str+sp[1];
};