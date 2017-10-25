angular.module('shopApp').controller('productDetailsCtrl', function($scope, $stateParams, shopService){

    var id = $stateParams.id;

    shopService.getProductDetails(id).then(res => $scope.productdetails = res.data)


})