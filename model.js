 var Model = function() {
   var instance = {};


    instance.messages = [];
    instance.readAll = function(onSuccess, onFailure) {
      $.ajax({
        url: `http://parse.atx.hackreactor.com/chatterbox/classes/messages`,
        type: 'GET',
        beforeSend: function(xhr){xhr.setRequestHeader('X-Parse-Application-Id', '28f10c64a8b1b900a057b74cabaebaf474573436'); xhr.setRequestHeader('X-Parse-REST-API-Key','7543f778eede3b2723e3018977563e69738d7c1b')},
        contentType: 'application/json',
        success: onSuccess.bind(this),
        error: onFailure || function(error) {
          console.error('chatterbox: Failed to fetch messages', error);
        }
      });
    };
   return instance;

 };




