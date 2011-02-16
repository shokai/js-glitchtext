GlitchText.prototype.glitch_sinu = function(str){
    var reg = /([ 　\t\r\n]|https?\:[\w\.\~\-\/\?\&\+\=\:\@\%\;\#\%]+)/
    var arr = str.split(reg);
    var indexes = new Array();
    for(var i = 0; i < arr.length; i++){
        if(!arr[i].match(reg) && arr[i].length > 0) indexes.push(i);
    };
    if(indexes.length > 0){
        var i = indexes.choice();
        arr[i] = 'http://'+arr[i]+'.死ぬ.jp';
    };
    return arr.join('');
};
