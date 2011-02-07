GlitchText.prototype.glitch_updown = function(str){
    var count = 0;
    return str.split('').map(function(c){
        if(Math.random() > 0.7){
            count++;
            if(count % 2 == 0){
                return c+'↑';
            }
            else{
                return c+'↓';
            }
        };
        return c;
    }).join('');
};
