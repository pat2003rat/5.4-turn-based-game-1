
var $ =  require('jquery');
// var models = require('./models');
var Handlebars = require('handlebars');

var splashTemplate = require('../templates/splash.hbs');
var gameTemplate = require('../templates/fight.hbs');

//make a page to select hero type from dropdown
  $('#choose-character').html(splashTemplate());

  $('.start-game').click(function(event){
    $('#choose-character').html(gameTemplate());
  })









//make a page to select hero type from dropdown

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
