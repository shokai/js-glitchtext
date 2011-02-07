GlitchText.prototype.glitch_katakana = function(str){
    var dic = {
        あ : 'ア',
        い : 'イ',
        う : 'ウ',
        え : 'エ',
        お : 'オ',
        か : 'カ',
        き : 'キ',
        く : 'ク',
        け : 'ケ',
        こ : 'コ',
        さ : 'サ',
        し : 'シ',
        す : 'ス',
        せ : 'セ',
        そ : 'ソ',
        た : 'タ',
        ち : 'チ',
        つ : 'ツ',
        て : 'テ',
        と : 'ト',
        な : 'ナ',
        に : 'ニ',
        ぬ : 'ヌ',
        ね : 'ネ',
        の : 'ノ',
        は : 'ハ',
        ひ : 'ヒ',
        ふ : 'フ',
        へ : 'ヘ',
        ほ : 'ホ',
        ま : 'マ',
        み : 'ミ',
        む : 'ム',
        め : 'メ',
        も : 'モ',
        や : 'ヤ',
        ゆ : 'ユ',
        よ : 'ヨ',
        ら : 'ラ',
        り : 'リ',
        る : 'ル',
        れ : 'レ',
        ろ : 'ロ',
        わ : 'ワ',
        を : 'ヲ',
        ん : 'ン'
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
