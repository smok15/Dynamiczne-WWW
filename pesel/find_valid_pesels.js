
this.addEventListener('message', function(e) {
    var data = e.data;
    this.postMessage(dateGenerator());
  }, false);

  function dateGenerator(){
      var date = (new Date(1930,0,1))+1;
      date.setDate(date.getDate() + 1);
      return date;
  }