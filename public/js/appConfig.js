module.exports = function(ngModule){
	ngModule.config(function($routeProvider){
			$routeProvider
			.when("/home", {
				//controller: "HomeCtrl",
				//controllerAs: "home",
				template: require("../views/home.html")
			})
			.when("/books", {
				controller: "BookCtrl as book",
				template: require("../views/books.html"),
				resolve: {
					books: function(BookService){
						return BookService.getAllBooks();
					}
				}
			})
			.when("/books/:bookId", {
				controller: "SingleBookCtrl",
				controllerAs: "sb",
				template: require("../views/book.html")
			})
			.when("/about", {
				template: require("../views/about.html")
			})
			.otherwise("/home");
		});
};