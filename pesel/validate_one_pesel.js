this.addEventListener('message', function(e) {
  var data = e.data;
  //validate(data);
  this.postMessage(data[0].substr(2,3));
}, false);

function validate(data){
  
}