var Controller = function(model, view) {
  var instance = {};
  var onSuccess = function(data, textStatus) {
    debugger;
    console.log("succcess");
    this.model.messages = data.results;
    this.view.render(this.model.messages);
  };
  var onFailure = function() {
    console.log("failure");
  };


  instance.model = model;
  instance.view = view;

  instance.doAllOfIt = function() {
    instance.model.readAll(onSuccess.bind(this), onFailure);
  };

  instace.postMessage = function(){
    instance.model.postMessage("hello");
    instanta.doAllOfIt();
  }

  return instance;
}