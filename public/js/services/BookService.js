module.exports = function(ngModule){
	ngModule.constant("BASE_URL", "http://hkapi.herokuapp.com/");
	ngModule.factory("BookService", function($http, BASE_URL){
		return{
			getAllBooks: function(){
				return $http.get(BASE_URL+"books");
			},
			getSingleBooks: function(bookId){
				return $http.get(BASE_URL+"books/"+bookId);
			}

		};
	});
};