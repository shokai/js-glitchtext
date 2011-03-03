GlitchText.prototype.glitch_crack = function(str){
    return [
        str+'";CREATE TABLE "glitchtweet.com"',
        '"><script>alert("'+str+'")</script>',
        str+'"><marquee>',
        str+'"><script>location.href="http://glitchtweet.com"</script>',
        str+'"><link rel="stylesheet" href="http://ma.la/tmp/youpy.css">'
    ].choice();
};