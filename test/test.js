g = new GlitchText();

s = "今日はかずすけ楽しかったねー マタ遊ボウネー 今度はお弁当持って行こう"
print("source : "+s);

g.methods().each(function(m){
    print(m+" : "+g[m](s));
});
