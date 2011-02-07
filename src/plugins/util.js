Array.prototype.choice = function(){
    return this[Math.floor(Math.random()*this.length)];
};

Array.prototype.map = function(func){
    var res = new Array();
    this.forEach(function(i){res.push(func(i))});
    return res;
};
