Array.prototype.choice = function(){
    return this[Math.floor(Math.random()*this.length)];
};

Array.prototype.each = function(func){
    for(var i = 0; i < this.length; i++){
        func(this[i]);
    };
};

Array.prototype.map = function(func){
    var res = new Array();
    this.each(function(i){res.push(func(i))});
    return res;
};
