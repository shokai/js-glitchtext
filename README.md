glitchtext.js
=============

glitch your text.


use
---

    var g = new GlitchText();
    var source = '今日はかずすけ楽しかったねーまた遊ぼうねー今度はお弁当も持って行こう';
    var result = g.random(source);

test
----

test all plugins

    % brew install v8
    % rake test


build
-----

build glitchtext.js

    % rake build
