
var $ =  require('jquery');
var models = require('./models');
var Handlebars = require('handlebars');
var _ = require('underscore');

var splashTemplate = require('../templates/splash.hbs');
var gameTemplate = require('../templates/fight.hbs');

var homer = models.homer;
var krusty = models.krusty;
var nelson = models.nelson;
var randomArray = [homer, krusty, nelson];
var selectedVillain = randomArray[_.random(randomArray.length-1)];
var villainSource = $('#villain-template').html();
var villainTemplate = Handlebars.compile(villainSource);

//make a page to select hero type from dropdown
$('#choose-character').html(splashTemplate());

$('.start-game').on('click', function(event){
  event.preventDefault();

var selectedHero = $('.hero-select').val();// set selectedHero
  // var myVillian = $('.villian-select').val();
$('#choose-character').empty();
$('#choose-character').append(gameTemplate(models[selectedHero]));// currentHero = models[selectedHero]
$(".villain-input").html(villainTemplate(selectedVillain));
  });
