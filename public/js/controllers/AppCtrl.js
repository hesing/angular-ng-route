module.exports = function(ngModule){
	ngModule.controller("AppCtrl", function($scope, $location){
		 $scope.isActive = function (viewLocation) { 
		        return viewLocation === $location.path();
		    };
	});
};