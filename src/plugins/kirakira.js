GlitchText.prototype.glitch_kirakira = function(str){
    var arr = "☆ .。.:* .。.:*･ﾟ∞∮+'∮+'★*｡.::･'ﾟ｡.::･'ﾟ｡.:*:･'ﾟ".split('');
    var last;
    var kira = '';
    while(true){
        c = arr[Math.floor(Math.random()*arr.length)];
        if(c != last){
            kira += c;
            last = c;
            if(kira.length > 8 && Math.random() < 0.1) break;
        };
    };
    return kira + str + kira.split('').reverse().join('');
};