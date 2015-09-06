//var UserService = require("../services/UserService");
module.exports = function(app){
	app.directive("userList", function(UserService){
		return {
			restrict: "E",
			template: require("../../views/users.html"),
			controller: function($scope){
				$scope.users = UserService;
			}
		};
	});
};
