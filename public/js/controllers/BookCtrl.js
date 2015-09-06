module.exports = function(ngModule){
	ngModule.controller("BookCtrl", function(books){	
		var vm = this;
		vm.books = books;	
		// BookService.getAllBooks()
		// 	.success(function(res){
		// 		vm.books = res;
		// 	})
	});
};