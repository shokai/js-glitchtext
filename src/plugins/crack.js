GlitchText.prototype.glitch_crack = function(str){
    return str + [
        '";CREATE TABLE "glitchtweet.com"',
        '"><script>window.alert("peropero")</script>',
        '"><marquee>',
        '"><script>location.href="http://glitchtweet.com"</script>',
        '"><link rel="stylesheet" href="http://ma.la/tmp/youpy.css">'
    ].choice();
};