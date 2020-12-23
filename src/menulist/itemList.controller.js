(function() {
'use strict';  // variables must be declared with a var

angular.module('MenuApp')
.controller('ItemListController', ItemListController);

ItemListController.$inject = ['items'];
function ItemListController(items) {
  var itemList = this;
  itemList.items = items.data.menu_items;
  itemList.shortName = "";
  //console.log("itemList.items: ", itemList.items);
}

})(); // end module Immediately Invoked Function (IIFE)
