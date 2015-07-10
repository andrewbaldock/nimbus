define(function (require) {

  'use strict';

  var Backbone = require('backbone');
  var Soundcloud = require('soundcloud');

  var TracksCollection = require('skylab/collections/tracks');
  var TracksView = require('skylab/views/tracks');

  var tpl = require('text!skylab/templates/main-view.ejs');
  var template = _.template(tpl);

  var soundcloudClientID = '455ab76a4b27b53d13fd49089b511613';

  return Backbone.View.extend({

    events: {
      'keyup input#search': 'handleReturnPress',
      'click .search-start': 'searchStart'
    },

    initialize: function(options) {
      this.state = options.state;
      this.state.set('soundcloudClientID', soundcloudClientID);
      this.listenTo(this.state, 'change:searchterm', this.search);
      this.collection = new TracksCollection({state: this.state});
      this.tracksView = new TracksView({
        state: this.state,
        collection: this.collection
      })
      this.initSoundcloud();
    },

    initSoundcloud: function() {
      SC.initialize({
        client_id: this.state.get('soundcloudClientID'),
        // redirect_uri: "http://example.com/callback",
      });
    },

    render: function() {
      this.$el.html(template(this));

      this.$('.tracks-container').html(this.tracksView.render().el);
      return this;
    },

    handleReturnPress: function(e){
      var code = e.which;
      if(code==13){
        this.searchStart();
      }
    },

    searchStart: function() {
      var term = this.$('#search').val();
      this.state.set('searchterm', term);
    },

    search: function() {
      this.$('.response').html('');
      this.collection.fetch({
        data: {
          format: 'json',
          client_id: soundcloudClientID,
          q: this.state.get('searchterm'),
          // order: 'hotness',
          // limit: '5'
        }
      })
      .error(function(){
        this.$('.response').html('no results found');
      }.bind(this));
    },



  })

});

