define(function (require) {

    'use strict';

    var Backbone = require('backbone');
    var Track = require('skylab/models/track');
    var Soundcloud = require('soundcloud');

    return Backbone.Collection.extend({

      model: Track,

      // url: 'http://api.soundcloud.com/tracks',

      initialize: function(options) {
        this.state = options.state;
        this.initSoundcloud();
        this.listenTo(this.state, 'change:searchterm', this.search);
        // this.data.client_id = this.state.get('soundcloudClientID');
      },

      initSoundcloud: function() {
        SC.initialize({
          client_id: this.state.get('soundcloudClientID'),
        // redirect_uri: "http://example.com/callback",
        });
      },

      parse: function(response) {
        return response.collection;
      },

      search: function() {
        var pageSize = this.state.get('tracksPerPage');
        var q = this.state.get('searchterm');

        SC.get('/tracks', {
          q: q,
          limit: pageSize,
          linked_partitioning: 5
        }, function(tracks, error) {
          if(error){
            console.log(error);
            this.trigger('error', error);
          }

          tracks = this.parse(tracks);
          this.reset(tracks);
        }.bind(this));
      },

    });
});
