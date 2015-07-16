var getProtocol = function() {
  if(document.location.protocol === 'https:') {
    return 'https:';
  } else {
    return 'http:';
  }
}

require.config({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'underscore': '../bower_components/underscore/underscore',
    'text': '../bower_components/requirejs-text/text',
    'backbone': '../bower_components/backbone/backbone',
    'soundcloud': getProtocol() + '//connect.soundcloud.com/sdk-2.0.0'
  },
  shim: {
    // handle non-amd libraries
    'underscore': {
        exports: '_'
    },
    backbone: {
        deps: [
            'underscore',
            'jquery'
        ],
        exports: 'Backbone'
    },
    'soundcloud': {
      exports: 'Soundcloud'
    }
  }
});

require(['app/app'], function(AppView) {
  new AppView;
});
