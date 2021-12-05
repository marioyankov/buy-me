const Backendless = require('backendless');

export function getAllProducts() {
    return Backendless.Data.of('products').find()     
}

export function getOneProduct(id) {
    return Backendless.Data.of('products').findById({objectId:id})
}