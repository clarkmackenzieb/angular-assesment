angular.module('shopApp').service('shopService', function($http){


this.getProducts = () => {
    return $http.get('https://practiceapi.devmountain.com/products')}

this.getProductDetails = (id) => {
    return $http.get('https://practiceapi.devmountain.com/products/'+id)
}

})