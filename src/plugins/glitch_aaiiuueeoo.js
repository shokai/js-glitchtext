GlitchText.prototype.glitch_aaiiuueeoo = function(str){
    return str.split('').map(function(i){
        if(i.match(/[aiueoあいうえおアイウエオ]/)){
            var count = Math.random()*3;
            for(var j = 0; j < count; j++) i += i;
        }
        return i
    }).join('');
};
