define(function (require) {

    'use strict';

    var Backbone = require('backbone');

    var AppRouter = Backbone.Router.extend({
        routes: {
            '':       'start',
            'start':  'start',
            'nimbus': 'nimbus'
        },

        start: function() {
            alert('started')
        },

    });

    return new AppRouter();
});
