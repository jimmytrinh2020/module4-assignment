(function() {
'use strict';  // variables must be declared with a var

angular.module('MenuApp')
.component('showCategories', {
  templateUrl: 'src/menulist/templates/categoryList.template.html',
  bindings: {
    categories: '<'
  }
});

}) ();
