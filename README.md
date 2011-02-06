glitchtext.js
=============

glitch your text.


use
---

    var g = new GlitchText();
    var source = '今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こう';
    var result = g.random(source);

test
----

test all plugins

    % brew install v8
    % rake test

result

    source : 今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こう
    glitch_addspace : 今 日 は か ず す け 楽 し か っ た ね ー   ま た 遊 ぼ う ね ー   今 度 は お 弁 当 持 っ て 行 こ うglitch_atai : ＼今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こう／
    glitch_double : 今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こう 今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こう
    glitch_doubleChar : 今今日日ははかかずずすすけけ楽楽ししかかっったたねねーーままたた遊遊ぼぼううねねーー今今度度ははおお弁弁当当持持っってて行行ここうう
    glitch_ignoreSearch : 今/日/は/か/ず/す/け/楽/し/か/っ/た/ね/ー/ /ま/た/遊/ぼ/う/ね/ー/ /今/度/は/お/弁/当/持/っ/て/行/ こ/う
    glitch_insertWave : 今日はかずすけ〜楽しかったねー ま〜た遊〜ぼう〜ねー 今度はお弁当持って行こう
    glitch_kaibu : 今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こうこ行てっ持当弁おは度今 ーねうぼ遊たま ーねたっかし楽けすずかは日今
    glitch_reverse : うこ行てっ持当弁おは度今 ーねうぼ遊たま ーねたっかし楽けすずかは日今

build
-----

build glitchtext.js

    % rake build
