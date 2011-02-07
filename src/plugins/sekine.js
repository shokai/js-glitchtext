GlitchText.prototype.glitch_sekine = function(str){
    var dic = {
        さ : 'しゃ',
        す : 'しゅ',
        せ : 'しぇ',
        そ : 'しょ',
        ざ : 'じゃ',
        ず : 'じゅ',
        ぜ : 'じぇ',
        ぞ : 'じょ',
        サ : 'シャ',
        ス : 'シュ',
        セ : 'シェ',
        ソ : 'ショ',
        ザ : 'ジャ',
        ズ : 'ジュ',
        ゼ : 'ジェ',
        ゾ : 'ジョ'
    };
    str = str.split('');
    for(k in dic){
        str = str.map(function(c){
            if(c == k) return dic[k];
            return c;
        });
    };
    return str.join('');
};
