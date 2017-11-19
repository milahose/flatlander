(() => {
  const gems = [
    {
      name: 'Dodecahedron', 
      price: 2.00, 
      description: '. . .', 
      canPurchase: true, 
      soldOut: true
    }, 
    {
      name: 'Pentagonal Gem', 
      price: 5.95, 
      description: '. . .', 
      canPurchase: false
    }
  ];

  const app = angular.module('gemStore', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });
})();