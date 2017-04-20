// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function($ionicPlatform, $rootScope, $ionicModal) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
    //default showing first image
    $rootScope.selectedIndex = 0;
    //var Json Images List
    $rootScope.Images = [{
        "id": 1,
        "created_at": "2015-11-19T05:08:46Z",
        "updated_at": "2016-03-31T09:28:50Z",
        "src": "img/images.jpg",
        "title": "Shirt1"
      }, {
        "id": 2,
        "created_at": "2015-11-23T07:25:37Z",
        "updated_at": "2015-11-23T07:25:37Z",
        "src": "img/image2.jpg",
        "title": "shirt2"

      }, {
        "id": 3,
        "created_at": "2015-11-23T07:25:38Z",
        "updated_at": "2015-11-23T07:25:38Z",
        "src": "img/image3.jpg",
        "title": "shirt3"
      },
      {
        "id": 4,
        "created_at": "2015-11-23T07:25:38Z",
        "updated_at": "2015-11-23T07:25:38Z",
        "src": "img/image4.jpg",
        "title": "shirt4"
      }
    ]
    //geeting the device height based on screen
    $rootScope.deviceHeight = window.screen.height;
    //on click changing the css and addind to slide box
    $rootScope.setSelected = function(id, $index) {
      $rootScope.selectedIndex = $index;
      $rootScope.imageId = id;
      //adjusting the side box image based on index and updating css
      // $rootScope.$broadcast('slideBox.setSlide', $rootScope.selectedIndex);
    };
    //adding the template modal
    $ionicModal.fromTemplateUrl('js/zoomModal.html', {
      scope: $rootScope,
      animation: 'slide-in-left'
    }).then(function(modal) {
      $rootScope.popup = modal;
    });
    //on double tap zoom-in model is opened
    $rootScope.zoomInModal = function($event, selectedIndex) {
      $rootScope.popup.show();
      $rootScope.$broadcast('slideBox.setSlide', selectedIndex);
    }
    //closing modal
    $rootScope.closeMenu = function($event) {
      $rootScope.popup.hide($event);
    };

    //updating the index value when slide changes
    $rootScope.ImgeZoomSlideChange = function($index) {
      $rootScope.selectedIndex = $index;
    }
  })
