(function() {
'use strict';  // variables must be declared with a var

angular.module('MenuApp')
.controller('CategoryListController', CategoryListController);

CategoryListController.$inject = ['categories'];
function CategoryListController(categories) {
  var categoryList = this;
  categoryList.categories = categories.data;
  //console.log("CategoryListController - categories: ", categoryList.categories);
}

})(); // end module Immediately Invoked Function (IIFE)
