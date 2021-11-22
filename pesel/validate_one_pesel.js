
this.addEventListener('message', function(e) {
  var data = e.data;
  switch(data[0]) {
      case 'start':
          //validate();
          this.postMessage(data[1]);
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