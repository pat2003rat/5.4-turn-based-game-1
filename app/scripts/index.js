
var $ =  require('jquery');
var models = require('../scripts/models');

var splashTemplate = require('../templates/splash.hbs');
var gameTemplate = require('../templates/fight.hbs');

// $('#choose-character').append(splashTemplate());
  $('#choose-character').html(splashTemplate());

  $('.start-game').click(function(event){
    $('#choose-character').html(gameTemplate());
  })








//make a page to select hero type from dropdown

//show enemies list (allow to select enemy if have enough time/dont have to)

//float in players (stretch goal)

//say "who ever is computer" wants to fight

//user attack

//say what user did attack was (stretch goal)

//show damage to "computer" in health bar

//computer attacks automatically

//show damage to user in health bar

//set whoevers health is at 0 looses
