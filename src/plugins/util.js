Array.prototype.choice = function(){
    return this[Math.floor(Math.random()*this.length)];
};

Array.prototype.each = function(func){
    for(var i = 0; i < this.length; i++){
        func(this[i]);
    };
};
