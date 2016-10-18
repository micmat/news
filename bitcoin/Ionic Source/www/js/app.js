// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/setting/settings.html'
      }
    }
  })
  
  .state('app.photo', {
    url: '/photo',
    views: {
      'menuContent': {
        templateUrl: 'templates/photo/photo.html'
      }
    }
  })
  
  .state('app.video', {
    url: '/video',
    views: {
      'menuContent': {
        templateUrl: 'templates/video/video.html'
      }
    }
  })
  
  .state('app.detail', {
    url: '/photo/detail',
    views: {
      'menuContent': {
        templateUrl: 'templates/photo/detail.html'
      }
    }
  })
  
  
  .state('app.newss', {
    url: '/news_daily',
    views: {
      'menuContent': {
        templateUrl: 'templates/dailynews/newss.html'
      }
    }
  })
  
   .state('app.notification', {
    url: '/settings/notification',
    views: {
      'menuContent': {
        templateUrl: 'templates/setting/noti.html'
      }
    }
  })
  
  .state('app.login', {
    url: '/settings/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/setting/login.html'
      }
    }
  })
  
  .state('app.terms', {
    url: '/settings/terms',
    views: {
      'menuContent': {
        templateUrl: 'templates/setting/terms.html'
      }
    }
  })
  
  .state('app.about', {
    url: '/settings/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/setting/about.html'
      }
    }
  })
  
  .state('app.setting-success', {
    url: '/setting-success',
    views: {
      'menuContent': {
        templateUrl: 'templates/setting/setting-success.html'
      }
    }
  })
  
  .state('app.signup', {
    url: '/settings/login/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/setting/signup.html'
      }
    }
  })
  
  .state('app.policy', {
    url: '/settings/policy',
    views: {
      'menuContent': {
        templateUrl: 'templates/setting/policy.html'
      }
    }
  })
  
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

 ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})

;
