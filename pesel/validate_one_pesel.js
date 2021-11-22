this.addEventListener('message', function(e) {
  var data = e.data;
    this.postMessage(data[1]);
}, false);

function validate(){
  var licz =  document.getElementById("wpisz_rok").value;
  this.postMessage(licz);
}