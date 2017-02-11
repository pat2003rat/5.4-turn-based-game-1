
var $ =  require('jquery');
var models = require('./models');
var Handlebars = require('handlebars');

var splashTemplate = require('../templates/splash.hbs');
var gameTemplate = require('../templates/fight.hbs');

//make a page to select hero type from dropdown
(function startGame(){

  console.log($('#choose-character'));
  $('#choose-character').html(splashTemplate());

  $('.start-game').on('click', function(event){
    event.preventDefault();
    var myHero = $('.hero-select').val();// set selectedHero
    // var myVillian = $('.villian-select').val();

    $('#choose-character').empty();
    $('#choose-character').append(gameTemplate(models[myHero]));// currentHero = models[selectedHero]
    // $('#choose-character').append(gameTemplate(models[myVillian]));
  });
}());

//show enemies list (allow to select enemy if have enough time/dont have to)

//select enemy


//display selected Hero

//display selected villian

//user attack

//say what users attack was (stretch goal)

//show damage to "computer" in health bar

//computer attacks automatically

//show damage to user in health bar

//set whoevers health is at 0 looses



var badGuy = bart;
