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

    this.glitch_reverse = function(str){
        return str.split('').reverse().join('');
    };

    this.glitch_addspace = function(str){
        return str.split('').join(' ');
    };

    this.glitch_atai = function(str){
        return "＼"+str+"／";
    };

    this.glitch_double = function(str){
        return str + " " + str;
    };

    this.glitch_doubleChar = function(str){
        var res = '';
        ss = str.split('');
        for(i in ss){
            var c = ss[i];
            if(!(c.match(/[ 　\t]/))) res += c+c
        };
        return res;
    };

    this.glitch_ignoreSearch = function(str){
        return str.split('').join('/');
    };

    this.glitch_insertWave = function(str){
        var res = '';
        var ss = str.split('');
        for(i in ss){
            res += ss[i];
            if(Math.random() > 0.8) res += '〜';
        };
        return res;
    };
};
