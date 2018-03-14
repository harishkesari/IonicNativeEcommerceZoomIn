# IonicNativeEcommerceZoomIn
Native Image gallery zoom in Html5 and Ionic framework.
    When double click on image. It navigates to  native gallery image zoom in.
 It supports: 
 -> Selecting the random images from row and display in gallery block.
 -> Pinch to zoom to max level of image resolutions.
 -> Gallery boxes.
 
 
   Load the following code in html
```
<ion-header-bar class="bar-stable">
      <h1 class="title">Ecommerce Zoom-in in Ionic</h1>
    </ion-header-bar>
    <ion-content>
      <div class="card">
        <div class="item item-image">
        //on double tab zoom page is opened
          <img ng-src="{{Images[selectedIndex].src}}" on-double-tap="zoomInModal($event,selectedIndex);" width="100" height="400">
        </div>
      </div>
      <!-- row Images -->
      <div class="row">
        <div class="col" ng-repeat="image in Images" >
          <div class="item item-image" ng-class="{ 'ImageSelected-BorderCss': $index == selectedIndex }" ng-click="setSelected(image.id,$index)">
          <img ng-src="{{image.src}}" height="100px" width="100px">
          </div>
        </div>
      </div>
    </ion-content>
```

Load the following code in script file

```
//default showing first image
    $rootScope.selectedIndex = 0;
    //sample Json Images List
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
    
  ```
    
    
    here comes the zooming feature after double tapping the image box in product description page
    
 ```
    <ion-modal-view class="imageModalZoom">
  <ion-header-bar>
    <span class="HeaderTitle">Image Zoom-In</span><span class="ImageZoomClosebutton-right"><span class="icon ion-ios-close-outline" ng-click="closeMenu($event)" style="font-size:30px;"></span></span>
  </ion-header-bar>
  <ion-content style="top:-5px;">
    <span>
    <ion-pane class="has-header imageContent" ng-style="{height:deviceHeight + 'px'}"  >
      <ion-slide-box  auto-play="false" on-slide-changed=ImgeZoomSlideChange($index); does-continue="false" ng-style="{height:deviceHeight/1.35 + 'px'}" style="width:100%">
        <ion-slide   ng-repeat="image in Images" style="width:100% !important;height:auto !important">
          <ion-scroll class="imageContent centerFooterAlignment" zooming="true" overflow-scroll="false" min-zoom="1" max-zoom="3" scrollbar-x="false" scrollbar-y="false" direction="xy" has-bouncing="true" ng-style="{height:deviceHeight/1.25 + 'px'}" style="top:0px">
             <img ng-src="{{Images[selectedIndex].src}}" style="width:100%;height:100%"/>
           </ion-scroll>
        </ion-slide>
     </ion-slide-box>
    </ion-pane>
</span>
  </ion-content>
  <ion-footer-bar class="has-footer CenterDataAlignment">
    <div ng-repeat="image in Images" ng-click="setSelected(image.id,$index)">
      <div ng-class="{ 'footerImageData': $index == selectedIndex  }">
        <img ng-src="{{image.src}}" height="40" width="50">
      </div>
    </div>
  </ion-footer-bar>
</ion-modal-view>
```

Load the css code

```.ImageSelected-BorderCss{
  border-color: #311B92 !important;
  border-radius:8px;
   border-width:2px;
}
.footerImageData {
  border-color: #311B92 !important;
  border-radius:8px;
  border-style:solid;
   border-width:2px ;
}

.imageModalZoom{
  width:100%;
  height:100%;
}
/*for tab showing the modal has full page*/
@media (min-width: 680px) {
  .imageModalZoom {
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    /*min-height: 240px;*/
    width: 100%; }
  }

.HeaderTitle{
  width:100%;
    font-weight:bold;
    padding:5px;
    font-size:16px;
  }
  .ImageZoomClosebutton-right{
    display: block !important;
    width: 20% !important;
    text-align:right !important;
  }

  .imageContent{
    display: -webkit-flex !important;
    align-content: center!important;
    align-items: center!important;
  }

  .CenterDataAlignment{
    display: -webkit-box;
   display: -moz-box;
   display: -ms-flexbox;
   display: -webkit-flex;
   display: flex;
   -webkit-box-direction: normal;
   -moz-box-direction: normal;
   -webkit-box-orient: horizontal;
   -moz-box-orient: horizontal;
   -webkit-flex-direction: row;
   -ms-flex-direction: row;
   flex-direction: row;
   -webkit-flex-wrap: nowrap;
   -ms-flex-wrap: nowrap;
   flex-wrap: nowrap;
   -webkit-box-pack: center;
   -moz-box-pack: center;
   -webkit-justify-content: center;
   -ms-flex-pack: center;
   justify-content: center;
   -webkit-align-content: stretch;
   -ms-flex-line-pack: stretch;
   align-content: stretch;
   -webkit-box-align: center;
   -moz-box-align: center;
   -webkit-align-items: center;
   -ms-flex-align: center;
   align-items: center;
  }
  ```
  

 
  Screen shots
  
<div class="row" >
<div class="col" style="padding:10px">
  <img src='https://github.com/harishkesari/IonicNativeEcommerceZoomIn/blob/master/img/Screenshot_20170420-150328%5B1%5D.jpg' height='100' width='100'/>
  </div>
  <div class="col" style="padding:10px">
  <img src='https://github.com/harishkesari/IonicNativeEcommerceZoomIn/blob/master/img/Screenshot_20170420-150337%5B1%5D.jpg' height='100' width='100'/>
  <div class="col" style="padding:10px">
  <img src='https://github.com/harishkesari/IonicNativeEcommerceZoomIn/blob/master/img/Screenshot_20170420-150345%5B1%5D.jpg' height='100' width='100' />
  </div>
</div>
  Happy Coding have a nice day.. :)
