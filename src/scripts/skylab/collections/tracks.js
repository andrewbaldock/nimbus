define(function (require) {

    'use strict';

    var Backbone = require('backbone');
    var Track = require('skylab/models/track');

    return Backbone.Collection.extend({

      model: Track,

      url: 'http://api.soundcloud.com/tracks',

      // data: {
      //   format: 'json'
      // },

      initialize: function(options) {
        this.state = options.state;
        // this.data.client_id = this.state.get('soundcloudClientID');
      },

    });
});
