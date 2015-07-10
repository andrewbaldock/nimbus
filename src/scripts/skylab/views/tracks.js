define(function (require) {

  'use strict';

  var Backbone = require('backbone');

  var TrackView = require('skylab/views/track');

  var tpl = require('text!skylab/templates/tracks.ejs');
  var template = _.template(tpl);

  return Backbone.View.extend({

    initialize: function(options) {
      this.state = options.state;
      this.collection = options.collection;
      this.listenTo(this.collection, 'sync', this.onLoad); // add reset set change
    },

    render: function() {
      this.$el.html(template(this));
      return this;
    },

    clearTracks: function() {
      if(this.trackViews && this.trackViews.length) {
        _.each(this.trackViews, function(trackView){
            trackView.remove();
        });
      } else {
        this.trackViews = [];
      }
    },

    onLoad: function() {
      this.clearTracks();
      if(this.collection.length) {
        _.each(this.collection.models, function(model){
          var trackView = new TrackView({model:model});
          this.trackViews.push(trackView);
          this.$('.tracks').append(trackView.render().el);
        }.bind(this));
      }
    },


  })

});

