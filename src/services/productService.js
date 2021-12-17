import { Backendless } from '../backendlessConfig';

import { gotError } from './authService';

export const getAllProducts = async () => {
    let result = await Backendless.Data.of('products').find();

    return result;
};

export const getOneProduct = async (id) => {
    let result = await Backendless.Data.of('products').findById({ objectId: id });

    return result;
};

export const getMyProducts = async (ownerId) => {
    let whereClause = `ownerId = '${ownerId}'`;
    let query = Backendless.DataQueryBuilder.create().setWhereClause(whereClause);

    let result = await Backendless.Data.of('products').find(query);
    return result;
};

export const getCartProducts = async (userId) => {
    let loadRelationsQueryBuilder = Backendless.LoadRelationsQueryBuilder.create();
    loadRelationsQueryBuilder.setRelationName('cart');

    let result = await Backendless.Data.of('users').loadRelations(userId, loadRelationsQueryBuilder);

    return result;
};

export const create = async (product) => {
    let result = await Backendless.Data.of('products').save(product);

    return result;
};

export const edit = async (product, userId) => {
    try {
        if (product.ownerId === userId) {
            let result = await Backendless.Data.of('products').save(product);

            return result;
        }
    }catch (error) {
        gotError(error);
    }
};

export const deleteProduct = async (product, userId) => {
    try {
        if (product.ownerId === userId) {
            let result = await Backendless.Data.of('products').remove(product);
            
            return result;
        }
    }catch(error) {
        return gotError(error);
    }
};