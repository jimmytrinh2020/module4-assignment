(function() {
'use strict';  // variables must be declared with a var

angular.module('MenuData')
.service('MenuDataService', MenuDataService)
.constant('UrlBase',"http://davids-restaurant.herokuapp.com");

MenuDataService.$inject =  ['$http','UrlBase'];
function MenuDataService($http, UrlBase) {
  var service = this;
  var categories = [];
  service.getAllCategories = function () {
    //console.log("MenuDataService.getAllCategories()");
    var response = $http({
      method: "GET",
      url: (UrlBase + "/categories.json")
    });
    categories = response;
    //console.log("categories: ", categories);
    return response;
  };

  service.getItemsForCategory = function(shortName) {
    //console.log("MenuDataService.getItemsForCategory()");
    var response = $http({
      method: "GET",
      url: (UrlBase + "/menu_items.json"),
      params: {category: shortName}
    });
    //console.log("response: ", response);
    return response;
  };
}

})(); // end module Immediately Invoked Function (IIFE)
