
this.addEventListener('message', function(e) {
    var data = e.data;
    this.postMessage(dateGenerator());
  }, false);

  function dateGenerator(){
      var date = new Date(1930,0,1);
      return date;
  }