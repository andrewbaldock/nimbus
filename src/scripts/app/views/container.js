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
      this.$('.container').html(view.render().el);
    },

    removeSubViews: function() {
      this.homeView.remove();
      this.nimbusView.remove();
    },

  })

});

