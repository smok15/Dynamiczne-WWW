
var game = {
  zdobyte : 0,
  zycia : 1,
}

//losowanie państwa 
var elem = document.getElementById("panstwa");
elem.innerHTML =data[getRandomInt(0,248)]['country'];
addElement("wrap");


//FUNKCJE
function addElement(mydiv)
{
  newDiv = document.createElement("span");
  newDiv.innerHTML = "Sebastian Dresler 224800";

  my_div = document.getElementById(mydiv);
  document.body.insertBefore(newDiv, my_div);

  newDiv.classList.add("mystyle");  
}

function Sprawdz_Litery(){
  var liter = document.getElementById("wpisz_litere").value;
  for(i=0;i<elem.innerHTML.length;i++){
      if(elem.innerHTML[i] == value){
        game.zdobyte+=1;
      }else{
        game.zycia-=1;
      }
  }
  alert(game.zdobyte);
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


