var $ = require ('jquery');
var pain = require('./pain.js');


function Character(config){
  this.health = 100 || {};
};

/*
*Hero prototype of Character
*/

function Hero(options){
  var defaults = {
    health: 100,
    autoTurn: false
  };

  $.extend(this, defaults, options);
  };

Hero.prototype = new Character();

Hero.prototype.attack = function(villain){
  if(pain.painInflicted()){
    villain.health -= this.attack;
  };
};

Hero.prototype.kick = function(villain){
    if(pain.painInflicted2()){
      villain.health -= this.kick;
    };
  };

Hero.prototype.donut = function(villain){
    if(pain.painInflicted3()){
      villain.health -= this.donut;
    };
  };

var bart = new Hero({
  name: "bart",
  image: "images/BARTslingshot-psd.png",
  animation: "shake-opacity",
  attack: 10,
  kick: 30,
  donut: 50
});

var lisa = new Hero({
  name: "lisa",
  image: "images/lisa.png",
  animation: 'shake-vertical',
  attack: 14,
  kick: 27,
  donut: 41
});

var ned = new Hero({
  name: "ned",
  image: "images/Ned_Flanders.png",
  animation: 'shake-vertical',
  attack: 10,
  kick: 15,
  donut: 55
});

/*
*Villains prototype of Character
*/

function Villain(options){
  var defaults = {
    health: 100,
    autoTurn: true
  };

  $.extend(this, defaults, options);
};

Villain.prototype = new Character();

Villain.prototype.attack = function(villain){
  if(pain.painInflicted()){
    hero.health -= this.attack;
  };
};


  Villain.prototype.sneeze = function(villain){
    if(pain.painInflicted2()){
      hero.health -= this.sneeze;
    };
  };

    Villain.prototype.burp = function(villain){
      if(pain.painInflicted3()){
        hero.health -= this.burp;
      };
};

var homer = new Villain({
  name: 'homer',
  image: 'images/homer-doh.png',
  animation: 'shake-slow',
  attack: 19,
  sneeze: 10,
  burp: 30
});

var krusty = new Villain({
  name: 'krusty',
  image: 'images/Krusty_The_Clown.png',
  animation: 'shake-hard',
  attack: 21,
  sneeze: 19,
  burp: 32
});

var nelson = new Villain({
  name: 'nelson',
  image: 'images/Nelson_Muntz.png',
  animation: 'shake-hard',
  attack: 28,
  sneeze: 15,
  burp: 40
});

var villains = ["homer", "krusty", "nelson"];


module.exports = {
  "bart": bart,
  "lisa": lisa,
  "ned": ned,
  "homer": homer,
  "krusty": krusty,
  "nelson": nelson,
};
