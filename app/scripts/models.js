var $ = require ('jquery');
var pain = require('./pain.js');
var index = require('./index.js');


function Character(options){
  options = options || {};
  this.name = 'character';
  this.health = 100;
  this.attack = 19;
  this.image = 'image';
};

Character.prototype.attack = function(enemy) {
  enemy.health = enemy.health - this.attack;
};
/*
*Hero prototype of Character
*/

function Hero(options){
  options = options || {};
  this.name = options.name;
  this.health = options.health;
  this.attack = options.attack;
  this.image = options.image;
};
Hero.prototype = new Character();

// Hero.prototype.attack = function(villain){
//   if(pain.painInflicted()){
//     villain.health -= this.attack;
//   };
// };
//
// Hero.prototype.kick = function(villain){
//     if(pain.painInflicted2()){
//       villain.health -= this.kick;
//     };
//   };
//
// Hero.prototype.donut = function(villain){
//     if(pain.painInflicted3()){
//       villain.health -= this.donut;
//     };
//   };


/*
*Villains prototype of Character
*/

function Villain(options){
  options = options || {};
  this.name = options.name;
  this.health = options.health;
  this.attack = options.attack;
  this.image = options.image;
};

Villain.prototype = new Character();

// Villain.prototype.attack = function(villain){
//   if(pain.painInflicted()){
//     hero.health -= this.attack;
//   };
// };
//
//
//   Villain.prototype.sneeze = function(villain){
//     if(pain.painInflicted2()){
//       hero.health -= this.sneeze;
//     };
//   };
//
//     Villain.prototype.burp = function(villain){
//       if(pain.painInflicted3()){
//         hero.health -= this.burp;
//       };
// };



module.exports = {
  Character: Character,
  Hero: Hero,
  Villain: Villain
};
