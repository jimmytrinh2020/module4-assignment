(function() {
'use strict';  // variables must be declared with a var

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menulist/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

}) ();
