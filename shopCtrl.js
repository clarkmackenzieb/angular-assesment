angular.module('shopApp').controller('shopCtrl', function($scope, $stateParams, shopService){
    
    shopService.getProducts().then(res => $scope.products = res.data)
    
    
        
    })