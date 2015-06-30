require.config({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'underscore': '../bower_components/underscore/underscore',
    'text': '../bower_components/requirejs-text/text',
    'backbone': '../bower_components/backbone/backbone',
  },
  shim: {
    // handle non-amd libraries
    'underscore': {
        exports: '_'
    },
    'backbone': {
        exports: 'Backbone'
    }
  }
});

require(['app/app'], function(AppView) {
  new AppView;
});
