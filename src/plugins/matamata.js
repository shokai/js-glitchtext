GlitchText.prototype.glitch_matamata = function(str){
    var result;
    var len = Math.floor(str.length/2);
    var arr = str.split('');
    while(true){
        if(len < 2) break;
        for(var j = 0; j < len; j++){
            for(var i = 0; i < arr.length/len; i++){
                var a = arr.slice(i*len+j, (i+1)*len+j+1).join('');
                var b = arr.slice((i+1)*(len)+j+1, (i+2)*len+j+2).join('');
                if(a.length > 0 && a == b){
                    print(a);
                    print(b);
                    var result = [arr.slice(0,i*len+j).join('')];
                    result.push(a);
                    result.push(a);
                    while(true){
                        result.push(a);
                        if(Math.random() < 0.4) break
                    }
                    result.push(arr.slice((i+2)*len+j+2).join(''));
                    return result.join('');
                }
            }
            
        }
        len--;
    };
    return str;
};
