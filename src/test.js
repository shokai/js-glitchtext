g = new GlitchText();

s = "今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こう"
print("source : "+s);

var ms = g.methods();
for(i in ms){
    m = ms[i];
    print(m+" : "+g[m](s));
}
