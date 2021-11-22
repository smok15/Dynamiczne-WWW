
this.addEventListener('message', function(e) {
  switch(e.data) {
      case 'start':
          //validate();
          this.postMessage('watek uruchomiony!');
          break;
      case 'stop':
          this.postMessage('watek zatrzymany!');
          this.close(); // zatrzymanie skryptu wewnatrz watku roboczego
          break;
      default:
          this.postMessage('nieznane polecenie!');
  }
}, false);

function validate(){
  var licz =  document.getElementById("wpisz_rok").value;
  this.postMessage(licz);
}