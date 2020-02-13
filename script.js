var userEle = document.body.querySelector(".user");
var dragonEle = document.body.querySelector(".dragon");
var userhealthEle = document.body.querySelector(".userhealth");
var dragonhealthEle = document.body.querySelector(".dragonhealth");
var scoreboardEle = document.body.querySelector(".scoreboardEle");

var attackPrompt = Number(prompt("Enter a number 1-5"));
var userattack = Math.floor(Math.random() * 5) + 1;
var dragonattack = Math.floor(Math.random() * 2) + 1;

var dragon = (10) - userattack;
var user =  (5) - dragonattack;


//user health bar 
if (user == 0) {
  userhealthEle.innerHTML = user;
}else{
  userhealthEle.innerHTML = "You have been severly hurt. The dragon has won!";
}

//if (user < 1 ){
//  userhealthEle.innerHTML= "You have lost";
//} else {
//  userhealthEle.innerHTML= "You have lost ";
//}


//dragon health bar 
 if (dragon == 0) {
 dragonEle.innerHTML = "You have slain the dragon!";
}


//user interface 
userEle.innerHTML = "Dragon damaged you for " + dragonattack;
userhealthEle.innerHTML = "Your Remaining Health = " + user;

//dragon interface
dragonEle.innerHTML = "You damaged the dragon for " + userattack;
dragonhealthEle.innerHTML = "Dragons Remaining Health = " + dragon;

//if (user == 0) {
//  userhealthEle.innerHTML = user;
//}else{
//userhealthEle.innerHTML = "You have been severly hurt. The dragon has won!";
//}

while (user > 0) {
  
}