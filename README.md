glitchtext.js
=============

glitch your text.


dependencies
============

* [TinySegmenter](http://chasen.org/~taku/software/TinySegmenter/)


use
===

load js

    <script src="tiny_segmenter-0.1.js" type="text/javascript" />
    <script src="glitchtext.js" type="text/javascript" />


use

    var g = new GlitchText();
    var source = '今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こう';
    var result = g.random(source);


test
====

test all plugins

    % brew install v8
    % rake test

result

    source : ここにソース置いた https://github.com/shokai/js-glitchtext
    glitch_addspace : こ こ に ソ ー ス 置 い た   h t t p s : / / g i t h u b . c o m / s h o k a i / j s - g l i t c h t e x t
    glitch_atai : ＼ここにソース置いた https://github.com/shokai/js-glitchtext／
    glitch_cmabridge : ここにーソスい置た htpts://github.com/shokai/js-giltchtext
    glitch_double : ここにソース置いた https://github.com/shokai/js-glitchtext ここにソース置いた https://github.com/shokai/js-glitchtext
    glitch_doubleChar : ここここににソソーースス置置いいたた hhttttppss::////ggiitthhuubb..ccoomm//sshhookkaaii//jjss--gglliittcchhtteexxtt
    glitch_dullness : ごごにゾーズ置いだ https://github.com/shokai/js-glitchtext
    glitch_face : ここにソース置いた https://github.com/shokai/js-glitchtext ｫヵｪﾘ☆彡..._〆(｀･∀･´o) 
    glitch_fill140 : ここにソース置いた https://github.com/shokai/js-glitchtextここにソース置いた https://github.com/shokai/js-glitchtextここにソース置いた https://github.com/shokai/js-glitchtext
    glitch_hiragana : ここにそーす置いた https://github.com/shokai/js-glitchtext
    glitch_hirakata : ココニそーす置イタ https://github.com/shokai/js-glitchtext
    glitch_ignoreSearch : こ/こ/に/ソ/ー/ス/置/い/た/ /h/t/t/p/s/://///g/i/t/h/u/b/./c/o/m///s/h/o/k/a/i///j/s/-/g/l/i/t/c/h/t/e/x/t
    glitch_insertWave : こ〜こに〜ソー〜ス置〜いた h〜ttp〜s://g〜ithu〜b〜.com/shok〜a〜i/j〜s-g〜litch〜text
    glitch_kaibu : ここにソース置いた https://github.com/shokai/js-glitchtextxethctilg-sj/iakohs/moc.buhtig//:sptth たい置スーソにここ
    glitch_katakana : ココニソース置イタ https://github.com/shokai/js-glitchtext
    glitch_kirakira : .'｡:｡'★｡.:ﾟ｡*:*ﾟ*'ここにソース置いた https://github.com/shokai/js-glitchtext'*ﾟ*:*｡ﾟ:.｡★'｡:｡'.
    glitch_linePrefix : ────ここにソース置いた https://github.com/shokai/js-glitchtext
    glitch_reverse : txethctilg-sj/iakohs/moc.buhtig//:sptth たい置スーソにここ
    glitch_sekine : ここにショーシュ置いた https://github.com/shokai/js-glitchtext
    glitch_speak : （ここにソース置いた https://github.com/shokai/js-glitchtext）
    glitch_updown : ここにソー↓ス↑置いた ↓h↑t↓tps://g↑i↓t↑hub.com/shoka↓i↑/↓j↑s-gli↓tch↑t↓e↑xt
    glitch_vertical_reverse : ここにソース置いた ɥʇʇds://bıʇɥnb.ɔoɯ/sɥoʞɐı/ظs-b1ıʇɔɥʇǝxʇ


build
=====

build glitchtext.js

    % rake build


LICENSE:
========

(The MIT License)

Copyright (c) 2011 Sho Hashimoto

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.