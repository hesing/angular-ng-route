require("../css/bootstrap.css");
require("../scss/app.scss");
var angular = require("angular");
require("angular-route");


var app = angular.module("myApp", ['ngRoute']);

require("./appConfig")(app);
require("./controllers/AppCtrl")(app);
require("./controllers/BookCtrl")(app);
require("./controllers/SingleBookCtrl")(app);
require("./services/BookService")(app);
//require("./directives/user-list")(app);