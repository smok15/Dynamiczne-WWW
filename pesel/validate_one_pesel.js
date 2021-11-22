
this.addEventListener('message', function(e) {
  var data = e.data;
  this.postMessage(validate(generatePesel(data)));
}, false);

function validate(pesel){
  let weight = [1,3,7,9,1,3,7,9,1,3];
  let sum =0;
  let controlNum = parseInt(pesel.substring(10, 11));

  for(let i = 0; i<weight.length;i++){
    sum += (parseInt(pesel.substring(i, i + 1)) * weight[i]);
  }
  sum = sum % 10;
  if((10 - sum) % 10 === controlNum){
    return "Pesel prawidłowy!";
  }else return "Pesel nieprawidłowy!";
}

function generatePesel(data){
  var PESEL = "";
  PESEL = data[0].substr(2,3) + data[1] + data[2] + data[3];
  return PESEL;
}