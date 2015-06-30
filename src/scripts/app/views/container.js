define(function (require) {

  'use strict';

  var Backbone = require('backbone');
  var HomeView = require('home/home');
  var NimbusView = require('nimbus/nimbus');

  var tpl = require('text!app/templates/container.ejs');
  var template = _.template(tpl);

  return Backbone.View.extend({

    el: '.app-content',

    initialize: function(options) {
      this.state = options.state;
      this.listenTo(this.state, 'change:view', this.handleViewChange);

      this.homeView = new HomeView({state: this.state});
      this.nimbusView = new NimbusView({state: this.state});
      // add new modules here [1 of 5]
    },

    render: function() {
      this.$el.html(template(this));
    },

    handleViewChange: function(state) {
      this.removeSubViews();
      var view = this.homeView;

      if(state.get('view') === 'nimbus') {
        view = this.nimbusView;
      }
      // add new modules here [2 of 5]

      this.$('.container').html(view.render().el);
      this.updateNav();
    },

    removeSubViews: function() {
      this.homeView.remove();
      this.nimbusView.remove();
      // add new modules here [3 of 5]
    },

    updateNav: function() {
      this.$('.global-nav a').removeClass('clicked');
      this.$('.global-nav #' + this.state.get('view')).addClass('clicked');
    },

    /* ----------------------------------------------------------------------------------------

    Adding a new module?  Add at the above listed points, then also:

    [4 of 5] add the modules' routes to /src/scripts/app/router.js
    [5 of 5] add the modules style.css to the @imports at top of  /src/scripts/nimbus/style.css

     ---------------------------------------------------------------------------------------- */

  })

});

