
function validate(){
  var worker = new Worker('validate_one_pesel.js');

  worker.addEventListener('message', function(e) {
    alert('otrzymano odpowiedź: ' + e.data);
  }, false);

  var year = document.getElementById("wpisz_rok").value;
  var month = document.getElementById("wpisz_miesiac").value;
  var day = document.getElementById("wpisz_dzien").value;
  var pesel = document.getElementById("wpisz_pesel").value;
  worker.postMessage([year,month,day,pesel]);
}


function showAll(){
  var worker1 = new Worker('show_all_pesels.js');

  worker1.addEventListener('message', function(e) {
    alert('otrzymano odpowiedź: ' + e.data);
  }, false);

  var year = document.getElementById("wpisz_rok").value;
  var month = document.getElementById("wpisz_miesiac").value;
  var day = document.getElementById("wpisz_dzien").value;
  worker1.postMessage([year,month,day]);
}