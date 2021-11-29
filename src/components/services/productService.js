// const baseUrl = 'http://buy-me-server.herokuapp.com/data/'

// export function getAllProducts() {
//     return fetch(`${baseUrl}/products`)
//         .then(result => result.json())
// }

// export function getOneProduct(id) {
//     return fetch(`${baseUrl}/products/${id}`)
//         .then(result => result.json())
// }

const Backendless = require('backendless');


export function getAllProducts() {
    return Backendless.Data.of('products').find()     
}