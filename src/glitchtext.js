var GlitchText = function(){
    this.random = function(str){
        var ms = this.methods();
        var m = ms[Math.floor(Math.random()*ms.length)];
        return this[m](str);
    };

    this.methods = function(){
        var ms = new Array();
        for(m in this){
            if(m.match(/^glitch_.+/)) ms.push(m);
        };
        return ms;
    };

};
