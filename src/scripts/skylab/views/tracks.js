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
      this.listenTo(this.state, 'change:searchterm', this.startSearch);
      this.listenTo(this.collection, 'reset', this.onLoad);
    },

    render: function() {
      this.$el.html(template(this));
      return this;
    },

    startSearch: function() {
      this.clearTracks();
      this.$('.spinner').show();
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
      this.$('.spinner, .load-message').hide();
      if(this.collection.length) {
        this.$('.responsive-message').show();
        _.each(this.collection.models, function(model){
          var trackView = new TrackView({model:model});
          this.trackViews.push(trackView);
          this.$('.tracks').append(trackView.render().el);
        }.bind(this));
      } else {
        this.$('.load-message').show();
      }
    },

    removeSubViews: function() {
      this.clearTracks();
    },

    remove: function() {
      this.removeSubViews();
      Backbone.View.prototype.remove.apply(this, arguments);
    }


  })

});

