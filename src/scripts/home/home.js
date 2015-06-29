define(function (require) {

  'use strict';

  var Backbone = require('backbone');

  return Backbone.View.extend({

    initialize: function(options) {
      this.state = options.state;
      this.render();
    },

    render: function() {
      this.$el.html('<div class="home"><a href="#nimbus">nimbus</a><br><p>Home</p></div>');
      return this;
    }

  })

});

