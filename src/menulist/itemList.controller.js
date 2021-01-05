(function() {
'use strict';  // variables must be declared with a var

angular.module('MenuApp')
.controller('ItemListController', ItemListController);

ItemListController.$inject = ['items'];
function ItemListController(items) {
  var itemList = this;
  itemList.items = items.data.menu_items;
  itemList.category = items.data.category;
  console.log("items.data: ", items.data);
  console.log("itemList.category: ", itemList.category);
}

})(); // end module Immediately Invoked Function (IIFE)
