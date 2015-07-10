define(function (require) {

  'use strict';

  var Backbone = require('backbone');

  var HomeView = require('home/home');
  var NimbusView = require('nimbus/nimbus');
  var SkylabView = require('skylab/main-view');

  var tpl = require('text!app/templates/container.ejs');
  var template = _.template(tpl);

  return Backbone.View.extend({

    el: '.app-content',

    initialize: function(options) {
      this.state = options.state;
      this.listenTo(this.state, 'change:view', this.handleViewChange);
      this.view;
    },

    render: function() {
      this.$el.html(template(this));
    },

    handleViewChange: function(state) {
      if (this.view) {
        this.removeSubViews();
      }

      // default
      if (!state.get('view')) {
        state.set('view', 'home');
      }

      if(state.get('view') === 'home') {
        this.view = new HomeView({state: this.state});
      }
      if(state.get('view') === 'nimbus') {
        this.view = new NimbusView({state: this.state});
      }
      if(state.get('view') === 'skylab') {
        this.view = new SkylabView({state: this.state});
      }
      // add new modules here [1 of 3]

      this.$('.container').html(this.view.render().el);
      this.updateNav();
    },

    removeSubViews: function() {
      this.view.remove();
    },

    updateNav: function() {
      this.$('.global-nav a').removeClass('clicked');
      this.$('.global-nav #' + this.state.get('view')).addClass('clicked');
    },

    remove: function() {
      this.removeSubViews();
      Backbone.View.prototype.remove.apply(this,arguments);
    }

    /* ----------------------------------------------------------------------------------------

    Adding a new module?  Add at the above listed points, then also:

    [2 of 3] add the modules' routes to /src/scripts/app/router.js
    [3 of 3] add the modules style.css to the @imports at top of  /src/scripts/nimbus/style.css

     ---------------------------------------------------------------------------------------- */

  })

});

