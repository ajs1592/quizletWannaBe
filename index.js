// function removeArrayItem() {
//
// }
//




$('input').val(""); //THIS IS THE ONLY CHANGE. YOU'RE WELCOME - CHRISTOPHER
var score = 0
$("#newScore").text("Score: " + score)

function removeArrayItem() {

if (classmates.firstPeriod.length > 0) {
classmates.firstPeriod.splice(randomNumber,1)
}

else {
  $("#question").text("Game Over!")
}}

function checkAnswer(value) {

  if (value === classmates.firstPeriod[randomNumber].firstName) {
    removeArrayItem();

    console.log(classmates.firstPeriod)
    randomNumber = Math.floor((Math.random() * classmates.firstPeriod.length));
    $('input').val("");
    $("#question").text(classmates.firstPeriod[randomNumber].lastName)
    score++;
    $("#newScore").text("Score: " + score)
  }

  else {
    removeArrayItem();
    randomNumber = Math.floor((Math.random() * classmates.firstPeriod.length));
    $('input').val("");

    $("#question").text(classmates.firstPeriod[randomNumber].lastName);
    score--;
      $("#newScore").text("Score: " + score)
  }



}








randomNumber = Math.floor((Math.random() * classmates.firstPeriod.length));

console.log(randomNumber)



$(document).ready(function(){
$("#question").text(classmates.firstPeriod[randomNumber].lastName);
$(document).keypress(function(key){
if (key.which === 13)  {
    var value = $('input').val();
    checkAnswer(value);




}

})
})
