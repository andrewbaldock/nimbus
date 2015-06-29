require.config({
  paths: {
    'jquery': 'vendor/jquery/dist/jquery',
    'underscore': 'vendor/underscore-amd/underscore',
    'text': 'vendor/requirejs-text/text',
    'backbone': 'vendor/backbone-amd/backbone',
  }
});

require(['app/app'], function(AppView) {
  new AppView;
});
