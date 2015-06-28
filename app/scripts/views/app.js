define(['backbone'], function(Backbone){
  var App = Backbone.View.extend({
    initialize: function() {
      console.log('wahoo');
    }
  })
  return App;
});

// define(function (require) {

//   'use strict';

//   var Backbone = require('backbone');

//   return Backbone.View.extend({

//     initialize: function() {
//       console.log('wahoo');
//     }

//   });
// });

