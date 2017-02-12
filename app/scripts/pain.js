var _= require('underscore');

var hit = true;
var miss = false;
//painInflicted means that it has a 50/50 chance of hitting

var painInflicted = function(){
  var randomNum = _.random(1, 2)

  if (randomNum == 1){
    return true
  }else{
    return false
    }
};
console.log(painInflicted());

//painInflicted2 means that it has a 1 in 3 chance of hitting

var painInflicted2 = function(){
  var randomNum2 = _.random(1, 3)

  if (randomNum2 == 3){
    return true
  }else{
    return false
  }
};
console.log(painInflicted2());

//painInflicted3 means that ti has a 1 in 5 chance of hitting

var painInflicted3 = function(){
  var randomNum3 = _.random(1, 5)
  if (randomNum3 == 5){
    return true
  }else{
    return false
  }
};
console.log(painInflicted3());
module.exports = {
  painInflicted:painInflicted,
  painInflicted2:painInflicted2,
  painInflicted3:painInflicted3
};
