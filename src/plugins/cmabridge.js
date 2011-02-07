
GlitchText.prototype.glitch_cmabridge = function(str){
    var tseg = new TinySegmenter();
    return tseg.segment(str).map(function(seg){
        seg = seg.split('');
        var i = Math.floor(Math.random()*(seg.length-1));
        var tmp = seg[i];
        seg[i] = seg[i+1];
        seg[i+1] = tmp;
        return seg.join('');
    }).join('');
};
