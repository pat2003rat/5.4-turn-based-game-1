
var $ =  require('jquery');
var models = require('./models');
var Handlebars = require('handlebars');
var _ = require('underscore');
//these variables are the splash.hbs file and the fight.hbs files
var splashTemplate = require('../templates/splash.hbs');
var gameTemplate = require('../templates/fight.hbs');

//selects the villains from models.js
var homer = models.homer;
var krusty = models.krusty;
var nelson = models.nelson;
var villainArray = [homer, krusty, nelson];
//chooses random villain and compiles to handlebars template
var selectedVillain = villainArray[_.random(villainArray.length-1)];
var villainSource = $('#villain-template').html();
var villainTemplate = Handlebars.compile(villainSource);

//puts the splash.hbs in the choose-character index.html div
$('#choose-character').html(splashTemplate());

//makes all the things happen in the function when click start game
$('.start-game').on('click', function(event){
  event.preventDefault();
//sets selectedHero to the hero thats selected value
var selectedHero = $('.hero-select').val();// set selectedHero
//empties splash.hbs template from the choose character div in index.html
$('#choose-character').empty();
//fills the choose character div in index.html with selectedHero variable from above. and gets the info from models.js constructors
$('#choose-character').append(gameTemplate(models[selectedHero]));// currentHero = models[selectedHero]
//fills the .villian-input div in index.html with compiled villainTemplate above with the randomly selected villain from selectedVillain variable
$(".villain-input").html(villainTemplate(selectedVillain));
  });

//I couldnt figure out how to select the current hero health or attack to
  //complete the function below

// var selectedVillainHealth = selectedVillain.health;
// console.log(selectedVillainHealth)
//
// $(document).on('click','.fight-button', function(event){
// event.preventDefault();
// selectedVillainHealth -= models[hero.attack]
// $('.health-bar-villain').css("width", selectedVillainHealth + "%");
// console.log(selectedVillainHealth)
// });
