define(function (require) {

    'use strict';

    var Backbone = require('backbone');
    var Track = require('skylab/models/track');
    var Soundcloud = require('soundcloud');

    var soundcloudClientID = '455ab76a4b27b53d13fd49089b511613';
    var tracksPerPage = 200;

    return Backbone.Collection.extend({

      model: Track,

      // url: 'http://api.soundcloud.com/tracks',

      initialize: function(options) {
        this.state = options.state;
        this.initSoundcloud();
        this.listenTo(this.state, 'change:searchterm', this.search);
      },

      initSoundcloud: function() {
        SC.initialize({
          client_id: soundcloudClientID,
        // redirect_uri: "http://example.com/callback",
        });
      },

      parse: function(response) {
        return response.collection;
      },

      search: function() {
        var q = this.state.get('searchterm');

        SC.get('/tracks', {
          q: q,
          limit: tracksPerPage,
          linked_partitioning: 1
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
