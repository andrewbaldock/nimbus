define(function (require) {

  'use strict';

  var Backbone = require('backbone');

  var tpl = require('text!_blank-module/templates/main-view.ejs');
  var template = _.template(tpl);

  return Backbone.View.extend({

    initialize: function(options) {
      this.state = options.state;
    },

    render: function() {
      this.$el.html(template(this));
      return this;
    }

  })

});

