define(function (require) {

  'use strict';

  var Backbone = require('backbone');

  var TracksCollection = require('skylab/collections/tracks');
  var TracksView = require('skylab/views/tracks');

  var tpl = require('text!skylab/templates/main-view.ejs');
  var template = _.template(tpl);

  return Backbone.View.extend({

    events: {
      'keyup input#search': 'handleReturnPress',
      'click .search-start': 'searchStart'
    },

    initialize: function(options) {
      this.state = options.state;
      this.collection = new TracksCollection({state: this.state});
      this.tracksView = new TracksView({
        state: this.state,
        collection: this.collection
      })
      this.listenTo(this.state, 'change:searchterm', this.disableInput);
      this.listenTo(this.collection, 'reset', this.enableInput);
    },

    render: function() {
      this.$el.html(template(this));
      $('body').addClass('skylab-body');
      this.$('.tracks-container').html(this.tracksView.render().el);
      this.autofocusInput();
      return this;
    },

    autofocusInput: function() {
      setTimeout(function(){
        this.$('input').focus();
      }.bind(this), 50);
    },

    handleReturnPress: function(e){
      var code = e.which;
      if(code==13){
        this.searchStart();
      }
    },

    disableInput: function() {
      this.$('#search, .search-start')
        .prop('disabled', 'disabled')
        .addClass('disabled');
    },

    enableInput: function() {
      this.$('#search, .search-start')
        .prop('disabled', '')
        .removeClass('disabled');
    },

    searchStart: function() {
      var term = this.$('#search').val();
      this.state.set('searchterm', term);
    },

    removeSubViews: function() {
      this.state.set({searchterm: ''}, {silent: true});
      this.tracksView.remove();
    },

    remove: function() {
      this.removeSubViews();
      $('body').removeClass('skylab-body');
      Backbone.View.prototype.remove.apply(this, arguments);
    }

  })

});

