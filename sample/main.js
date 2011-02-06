var result = '';
var g = new GlitchText();

$(function(){
    $('input#glitch').click(glitch);
    $('input#tweet').click(tweet);
});


function glitch(){
    var source = $('textarea#source').val();
    var n = Math.floor(Math.random()*3+1);
    for(var i = 0; i < n; i++){
        source = g.random(source);
        log(source);
    }
    result = source;
    $('div#result').html(result);
}

function tweet(){
    location.href = 'http://twitter.com/home?status='+result;
};


var log_count = 0;
function log(message){
    log_count++;
    $('div#log').prepend($('<p>').append(log_count+": "+message));
};