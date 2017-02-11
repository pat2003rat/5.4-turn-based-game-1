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
    health: 100
  };

  $.extend(this, defaults, options);
};

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
  // attack:
  name: "bart",
  image: "images/BARTslingshot-psd.png",
  animation: "shake-opacity",
  attack: 10,
  kick: 30,
  donut: 50

});

var lisa = new Hero({
  // attack:
  name: "lisa",
  image: "images/lisa.png",
  animation: 'shake-vertical',
  attack: 14,
  kick: 27,
  donut: 41
});

/*
*Villains prototype of Character
*/

function Villain(options){
  var defaults = {
    health: 100
  };

  $.extend(this, defaults, options);
};

Villain.prototype.attack = function(villain){
  if(pain.painInflicted()){
    hero.health -= this.attack;
  };
};


  Villain.prototype.sneeze = function(villain){
    if(pain.painInflicted()){
      hero.health -= this.attack;
    };
  };

    Villain.prototype.burp = function(villain){
      if(pain.painInflicted()){
        hero.health -= this.attack;
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

module.exports = {
  "bart": bart,
  "lisa": lisa,
  "homer": homer,
  "krusty": krusty
};
