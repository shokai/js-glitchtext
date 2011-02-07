g = new GlitchText();

ss = ['今日はかずすけ楽しかったねー マタ遊ボウネー 今度はお弁当持って行こう',
      'ここにソース置いた https://github.com/shokai/js-glitchtext']

ss.each(function(s){
    print("source : "+s);
    
    g.methods().each(function(m){
        print(m+" : "+g[m](s));
    });
});
