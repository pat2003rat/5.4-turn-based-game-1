
var $ =  require('jquery');
var models = require('./models');
var Handlebars = require('handlebars');
var _ = require('underscore');
//these variables are the splash.hbs file and the fight.hbs files
var splashTemplate = require('../templates/splash.hbs');
var gameTemplate = require('../templates/fight.hbs');
var villainTemplate = require('../templates/villain.hbs');

//selects the villains from models.js
var bart = new models.Hero({
  name: "bart",
  image: "images/BARTslingshot-psd.png",
  health: 120,
  animation: "shake-opacity",
  attack: 10,
  kick: 30,
  donut: 50
});

var lisa = new models.Hero({
  name: "lisa",
  image: "images/lisa.png",
  health: 105,
  animation: 'shake-vertical',
  attack: 14,
  kick: 27,
  donut: 41
});

var ned = new models.Hero({
  name: "ned",
  image: "images/Ned_Flanders.png",
  health: 99,
  animation: 'shake-vertical',
  attack: 10,
  kick: 15,
  donut: 55
});

var heroArray = [bart, lisa, ned];

var homer = new models.Villain({
  name: 'homer',
  image: 'images/homer-doh.png',
  health: 118,
  animation: 'shake-slow',
  attack: 19,
  sneeze: 10,
  burp: 30
});

var krusty = new models.Villain({
  name: 'krusty',
  image: 'images/Krusty_The_Clown.png',
  health: 102,
  animation: 'shake-hard',
  attack: 21,
  sneeze: 19,
  burp: 32
});

var nelson = new models.Villain({
  name: 'nelson',
  image: 'images/Nelson_Muntz.png',
  health: 120,
  animation: 'shake-hard',
  attack: 28,
  sneeze: 15,
  burp: 40
});

var villainArray = [homer, krusty, nelson];

var selectedVillain = villainArray[_.random(villainArray.length-1)];
var selectedHero;

$('#choose-character').html(splashTemplate());

$('.start-game').on('click', function(event){
  event.preventDefault();

  selectedHero = heroArray.pop(function(hero){
    return hero.name == $('.hero-select').val();
  });

  $('#choose-character').empty();
  $('#choose-character').append(gameTemplate(selectedHero));
  $(".villain-input").append(villainTemplate(selectedVillain));
});


$(document).on('click','.fight-button', function(event){
  event.preventDefault();
    function counterAttack(enemy){
      selectedHero.health -= selectedVillain.attack
      // Character.attack(selectedVillain);
      $('.health-bar-hero').text(selectedHero.health + "%")
    }
  setTimeout(counterAttack, 2000);
  selectedVillain.health -= selectedHero.attack
  $('.health-bar-villain').text(selectedVillain.health + "%");
});
