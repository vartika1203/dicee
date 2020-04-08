var randomNumber1=Math.floor(Math.random()*6)+1;
var randomimage1="dice"+ randomNumber1 +".png";
var randomadd1="images/" + randomimage1;


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimage2="dice"+ randomNumber2 +".png";
var randomadd2="images/" + randomimage2;


var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomadd1);
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomadd2);
