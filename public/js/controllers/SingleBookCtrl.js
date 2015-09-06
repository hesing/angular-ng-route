module.exports = function(ngModule){
	ngModule.controller("SingleBookCtrl", function($routeParams, BookService){
		var vm = this;
		BookService.getSingleBooks($routeParams.bookId)
			.success(function(res){
				vm.book = res;
			});		
	});
};