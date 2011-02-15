GlitchText.prototype.glitch_shoooooookai = function(str){
    var arr = str.split('');
    for(var i = 0; i < arr.length-1; i++){
        if(arr[i] == arr[i+1]){
            var count = Math.random()*3;
            for(var j = 0; j < count; j++) arr[i] += arr[i];
        };
    };
    return arr.join('');
};
