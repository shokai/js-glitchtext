load('glitchtext.js');

g = new GlitchText();

s = "今日はかずすけ楽しかったねーまた遊ぼうねー今度はお弁当持って行こう"
print("source : "+s);

var ms = g.methods();
for(i in ms){
    m = ms[i];
    print(m+" : "+g[m](s));
}
