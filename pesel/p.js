
function validate(){
  var worker = new Worker('validate_one_pesel.js');

  worker.addEventListener('message', function(e) {
    alert('otrzymano odpowiedź: ' + e.data);
  }, false);

  alert("siema");
  worker.postMessage('start');
  //worker.postMessage('stop');
}


