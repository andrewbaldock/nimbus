define(function (require) {

  'use strict';

  var Backbone = require('backbone');

  // var tpl = require('text!skylab/templates/track.ejs');
  // var template = _.template(tpl);

  return Backbone.View.extend({

    className: 'track-container',

    initialize: function(options) {
      this.state = options.state;
      this.collection = options.collection;
    },

    render: function() {
      //this.$el.html(template(this));
      var artUrl = this.model.get('artwork_url') ? this.model.get('artwork_url') : this.model.get('user').avatar_url;
      var output = '<a class="track" target="_track" href="'
        + this.model.get('permalink_url') + '"><img src="' + artUrl + '"><br><p>'
        + this.model.get('title') + '</p></a>';
      this.$el.html(output);
      return this;
    },


  })

});

