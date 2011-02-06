GlitchText.prototype.glitch_kaibu = function(str){
    var rev = str.split('').reverse();
    rev.shift();
    return str + rev.join('');
};