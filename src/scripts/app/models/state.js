define(function (require) {

    'use strict';

    var Backbone = require('backbone');

    return Backbone.Model.extend({

      // this model holds runtime state attributes
      // such as what view it's on, or
      // what the current search term is

      // listening for change events in this model
      // serves as an app-wide communications bus

    });
});
