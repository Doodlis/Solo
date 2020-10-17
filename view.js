var View = function() {
  var instance = {};

  instance.render = function(messages) {
    // debugger;
    messages.forEach(function(item) {

      $("#allMessages").append('<div>'+item+'</div>')
    })

  }

  return instance;
}