(function() {
'use strict';  // variables must be declared with a var

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  //Set up UI states
  $stateProvider
    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menulist/templates/home.template.html'
    })
    // LIst of Categories
    .state('categoryList', {
      url: '/category-list',
      templateUrl: 'src/menulist/templates/main-categoryList.template.html',
      // controller: 'CategoryListController as categoryList'
      controller: 'CategoryListController as categoryList',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
                    }]
      }
    })
    // List of Items for the category selected from above state
    .state('categoryList.itemList', {
      url: '/item-list/{category}',
      templateUrl: 'src/menulist/templates/itemList.template.html',
      controller: 'ItemListController as itemList',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.category);
              }]
      }
    });

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider
      .otherwise('/');
}

}) ();
