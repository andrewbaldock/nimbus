define(function (require) {

  'use strict';

  var Backbone = require('backbone');

  var tpl = require('text!nimbus/templates/nimbus.ejs');
  var template = _.template(tpl);

  return Backbone.View.extend({

    initialize: function(options) {
      this.state = options.state;
    },

    render: function() {
      this.$el.html(template(this));
      $('body').addClass('nimbus-body');
      return this;
    },

    remove: function() {
      $('body').removeClass('nimbus-body');
      Backbone.View.prototype.remove.apply(this, arguments);
    }

  })

});

