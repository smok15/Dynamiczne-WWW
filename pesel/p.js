
function validate(){
  var worker = new Worker('validate_one_pesel.js');

  worker.addEventListener('message', function(e) {
    alert('otrzymano odpowiedź: ' + e.data);
  }, false);

  var x = document.getElementById("wpisz_rok").value;
  worker.postMessage('start',x);
}


