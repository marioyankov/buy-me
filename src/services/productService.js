const Backendless = require('backendless');

export function getAllProducts() {
    return Backendless.Data.of('products').find()     
}

export function getOneProduct(id) {
    return Backendless.Data.of('products').findById({objectId:id})
}

export function getMyProducts(ownerId) {
    let whereClause = `ownerId = '${ownerId}'`;
    let query = Backendless.DataQueryBuilder.create().setWhereClause(whereClause);
    
    return Backendless.Data.of('products').find(query);
}

export function create(product) {
    return Backendless.Data.of('products').save(product);
}

export function edit(product) {
    return Backendless.Data.of('products').save(product);
}

export function deleteProduct(product) {
    return Backendless.Data.of('products').remove(product);
}