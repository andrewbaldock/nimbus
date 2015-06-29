define(function (require) {

  'use strict';

  var Backbone = require('backbone');
  var AppRouter = require('app/router');

  var App = Backbone.View.extend({

    el: '.app-content',

    initialize: function() {
      console.log('wahoo');
      Backbone.history.start();
    },

    render: function() {
      this.$el.html('<div>YO</div>');
    },

  })
  return App;
});

