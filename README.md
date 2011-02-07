glitchtext.js
=============

glitch your text.


use
===

    var g = new GlitchText();
    var source = '今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こう';
    var result = g.random(source);

test
====

test all plugins

    % brew install v8
    % rake test

result

    source : 今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こう
    glitch_addspace : 今 日 は か ず す け 楽 し か っ た ね ー   ま た 遊 ぼ う ね ー   今 度 は お 弁 当 持 っ て 行 こ う
    glitch_atai : ＼今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こう／
    glitch_double : 今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こう 今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こう
    glitch_doubleChar : 今今日日ははかかずずすすけけ楽楽ししかかっったたねねーーままたた遊遊ぼぼううねねーー今今度度ははおお弁弁当当持持っってて行行ここうう
    glitch_ignoreSearch : 今/日/は/か/ず/す/け/楽/し/か/っ/た/ね/ー/ /ま/た/遊/ぼ/う/ね/ー/ /今/度/は/お/弁/当/持/っ/て/行/ こ/う
    glitch_insertWave : 今日はかずすけ〜楽しかったねー ま〜た遊〜ぼう〜ねー 今度はお弁当持って行こう
    glitch_kaibu : 今日はかずすけ楽しかったねー また遊ぼうねー 今度はお弁当持って行こうこ行てっ持当弁おは度今 ーねうぼ遊たま ーねたっかし楽けすずかは日今
    glitch_reverse : うこ行てっ持当弁おは度今 ーねうぼ遊たま ーねたっかし楽けすずかは日今

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