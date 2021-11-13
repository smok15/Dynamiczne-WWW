
var game = {
  score : 0,
  lifes : 5,
}

var auth = "Sebastian Dresler 224800 <br> Pozdrawiam Serdecznie :)";

//losowanie państwa 
var word =data[getRandomInt(0,248)]['country'];
document.getElementById("numberOfLives").innerHTML = game.lifes;
document.getElementById("score").innerHTML = game.score;


//FUNKCJE
function addElement()
{
  let div = document.createElement('aut');
  div.id = "aut"; 

  var newClose = document.createElement('span');
  newClose.id = "close";
  newClose.innerHTML = "X";
  newClose.onclick = function(){
    this.parentNode.parentNode.removeChild(this.parentNode);
  }
  div.appendChild(newClose);

  var newSpan = document.createElement('span');
  newSpan.id = "about";
  newSpan.innerHTML = auth;
  div.appendChild(newSpan);

  document.body.appendChild(div);

}


function addSpan() {
  var mydiv = document.getElementById("word");

  for (var i = 0; i <= word.length - 1; i++) {
    var newDiv2 = document.createElement("span");
    newDiv2.classList.add("letter");
    newDiv2.innerHTML = word[i];

    var blank = document.createElement("span");
    blank.classList.add("blank");
    blank.id = i;
    blank.innerHTML = "X";
    newDiv2.appendChild(blank);
    mydiv.appendChild(newDiv2);
  }
}

addSpan();

function removeElement(id) {
  var elem = document.getElementById(id);
  return elem.parentNode.removeChild(elem);
}

function check(){
  var liter = document.getElementById("wpisz_litere").value;
  var flag = 0;
  for(i=0;i<word.length;i++){
      if(word[i] == liter){
        flag =1;
      }
  }
  if (flag ==1){
    game.score+=1;
  }else{
    game.lifes-=1;
  }
  document.getElementById("numberOfLives").innerHTML = game.lifes;
  document.getElementById("score").innerHTML = game.score;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/*
alert(data[0]['country']);
var elem = document.getElementById("panstwa");
elem.innerHTML =data[2]['country'];

alert(data.length);
alert(data[0]['country'][2]);

 for (var i = 0; i < data[0]['country'].length; i += 1) {
    alert(data[0]['country'][i]);  
  }
*/


