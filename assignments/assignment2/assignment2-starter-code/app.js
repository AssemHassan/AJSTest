(function () {
  'use strict';

  angular.module('ShoppingApp', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListService', ShoppingListService);

  ToBuyController.$inject = ['$scope', 'ShoppingListService'];
  function ToBuyController($scope, ShoppingListService) {

    this.toBuyItems = ShoppingListService.getToBuyItems();  
    console.log(this.toBuyItems);
    this.buy = function (itemIndex) {
       ShoppingListService.buyItem(itemIndex);
    };
  }

AlreadyBoughtController.$inject = ['$scope', 'ShoppingListService'];
  function AlreadyBoughtController($scope, ShoppingListService) { 
     this.boughtItems = ShoppingListService.getBoughtItems();  
  }

 
function ShoppingListService() {
  var service = this; 
  var toBuyItems = [{ name: "cookies type A", quantity: 10 },{ name: "cookies type B", quantity: 9 },{ name: "cookies type C", quantity: 8 },{ name: "cookies type D", quantity: 7 },{ name: "cookies type E", quantity: 6 }];
  var boughtItems = [];

  service.buyItem = function (itemIdex) {

    var item  = toBuyItems[itemIdex];
    toBuyItems.splice(itemIdex, 1);
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

   service.getBoughtItems = function () {
    return boughtItems;
  };
}

  
})();
