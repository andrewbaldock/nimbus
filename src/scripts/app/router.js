define(function (require) {

    'use strict';

    var Backbone = require('backbone');

    var ContainerView = require('app/views/container');
    var State = require('app/models/state');

    var AppRouter = Backbone.Router.extend({
        routes: {
            '':       'nimbus',
            'home':   'home',
            'nimbus': 'nimbus'
        },

        initialize: function(){
            if (!this.state) {
                this.state = new State();
            }
            if (!this.container) {
                this.container = new ContainerView({state: this.state});
            }
        },

        home: function() {
            this.container.render();
            this.state.set('view', 'home');
        },

        nimbus: function() {
            this.container.render();
            this.state.set('view', 'nimbus');
        }

    });

    return new AppRouter();
});
