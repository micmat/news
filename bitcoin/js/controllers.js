angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$ionicPopup,$ionicPopover, $state) {
	
	$ionicPopover.fromTemplateUrl('templates/popover/popover.html', {
		scope: $scope
	}).then(function(popover) {
		$scope.popover = popover;
		});
		document.body.classList.remove('platform-ios');
		document.body.classList.add('platform-android');
	$scope.openPopover = function($event) {
		$scope.popover.show($event);
	};
	
	$scope.showPopuptheme = function() {
		$scope.data = {};
		var myPopuptheme = $ionicPopup.show({
		title: 'Choose application theme',
		template:'<input type="radio" value="white"ng-model="a"> White <br/> <input type="radio" value="black" ng-model="a"> Black <br/> <input type="radio" value="sepia" ng-model="a"> Sepia <br/>',
		scope: $scope,
		
		
		});
		$timeout(function() {
			 myPopuptheme.close(); //close the popup after 2 seconds for some reason
		  }, 2000);
	};
	
	$scope.showPopuptext = function() {
		$scope.data = {};
		var myPopuptext = $ionicPopup.show({
		title: 'Choose default text size for story pages',
		template:'<input type="radio" value="small" ng-model="a"> Small <br/> <input type="radio" value="normal" ng-model="a"> Normal <br/> <input type="radio" value="large" ng-model="a"> Large <br/>',
		scope: $scope,
		
		
		});
		$timeout(function() {
			 myPopuptext.close(); //close the popup after 2 seconds for some reason
		  }, 2000);
	};
	
	$scope.showPopupfb = function() {
		$scope.data = {};
		var myPopupfb = $ionicPopup.show({
		template:'<span class="item item-avatar" style="background:none;display:flex;align-items:center"><img src="img/rolling.gif"> <span class="add">Logging with FB...</span></span>',
		scope: $scope,
		
		});
		  
		  
		$timeout(function() {
			 myPopupfb.close(); //close the popup after 2 seconds for some reason
		  }, 2000).then ($scope.showPopupg = function() {
					$scope.data = {};
					var myPopupg = $ionicPopup.show({
					title: 'My Account select',
					templateUrl:'templates/popup/loging.html',
					scope: $scope,
					
					
					});
					$timeout(function() {
						 myPopupg.close(); //close the popup after 2 seconds for some reason
					  }, 2000);
				});
		  
	};
	
	$scope.showPopupg = function() {
		$scope.data = {};
		var myPopupg = $ionicPopup.show({
		title: 'My Account select',
		templateUrl:'templates/popup/loging.html',
		scope: $scope,
		
		
		});
		$timeout(function() {
			 myPopupg.close(); //close the popup after 2 seconds for some reason
		  }, 2000);
	};
	
	$scope.showConfirm = function() {
	   var confirmPopup = $ionicPopup.show({
		 title: 'Do you want to Logout?',
		 templateUrl:'templates/popup/logout.html',
		 buttons:[
			{
				text:'NO',
				type:'bar-button'
			},
			{
				text:'YES',
				type:'bar-button',
				onTap: function(e){ $state.go('app.settings') }
			}
		]
	   });

	   confirmPopup.then(function(res) {
		 if(res) {
		   console.log('You are sure');
		 } else {
		   console.log('You are not sure');
		 }
	   });
	 };
	
	$scope.showPopupshare = function() {
		$scope.data = {};
		var myPopupshare = $ionicPopup.show({
		title: '<center>Share post via</center>',	
		templateUrl:'templates/popup/share.html',
		scope: $scope,
		 buttons: [
			{ text: 'Cancel',
				type: 'bar-button'
			}
			
			]
		
		
		});
		/*$timeout(function() {
			 myPopupfb.close(); //close the popup after 2 seconds for some reason
		  }, 2000);*/
	};
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  
})

.controller('HomeCtrl', function($scope) {

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
