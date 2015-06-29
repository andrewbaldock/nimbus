define(function (require) {

  'use strict';

  var Backbone = require('backbone');
  var AppRouter = require('app/router');

  var App = Backbone.View.extend({

    initialize: function() {
      Backbone.history.start();
    }

  })
  return App;
});

