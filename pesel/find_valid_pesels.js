
this.addEventListener('message', function(e) {
    var data = e.data;
    this.postMessage(dateGenerator());
  }, false);

  function dateGenerator(){
      var date = new Date(1930,0,1);
      date.setTime(date.getTime() + 86400000);
      return date;
  }