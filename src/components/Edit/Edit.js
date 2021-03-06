import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContexts';
import { isAuthenticated } from '../../services/authService';
import { useAlertContext, alertTypes } from '../../contexts/AlertContext';
import { gotError } from '../../services/authService';

import * as productService from '../../services/productService';

const Edit = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [product, setProduct] = useState([]);
    const { objectId } = useParams();
    const { addAlert } = useAlertContext();

    useEffect(() => {
        productService.getOneProduct(objectId)
            .then(result => {
                setProduct(result)
            })
            .catch(error => {
                gotError(error);
            })
    }, [objectId]);

    const onProductEdit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let name = formData.get('product-name');
        let type = formData.get('product-type');
        let imageUrl = formData.get('imageUrl');
        let price = formData.get('product-price');
        let description = formData.get('product-description');

        if (isAuthenticated(user) && user.objectId === product.ownerId) {
            productService.edit({
                objectId,
                ownerId: product.ownerId,
                name,
                type,
                imageUrl,
                price,
                description
            }, user.objectId)
                .then(() => {
                    addAlert('You have successfully edited the product!', alertTypes.success);
                    navigate('/my-products');
                })
                .catch(error => {
                    gotError(error);
                });
        } else {
            navigate('/my-products');
        };
    };

    const inputHandler = (e) => {
        let currentInput = e.target.value;

        let fields = {
            'product-name': 'name',
            'product-type': 'type',
            'product-price': 'price',
        }

        if (currentInput.length < 1 || currentInput.length > 32) {
            addAlert(`Field ${fields[e.target.name]} should be between 1 and 32 symbols!`, alertTypes.error);
        } 
    }

    return (
        <section className="create">
            <form id="create-form" onSubmit={onProductEdit} method="PUT">

                <article className="create-article">
                    <h1 className="create-title">Create</h1>

                    <label htmlFor="product-name">Name:</label>
                    <input
                        type="text"
                        id="product-name"
                        name="product-name"
                        defaultValue={product.name}
                        onBlur={inputHandler}
                    />

                    <label htmlFor="product-type">Type: </label>
                    <input
                        type="text"
                        id="product-type"
                        name="product-type"
                        defaultValue={product.type}
                        onBlur={inputHandler}
                    />

                    <label htmlFor="imageUrl">ImageUrl: </label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        defaultValue={product.imageUrl}
                    />

                    <label htmlFor="product-price">Price: </label>
                    <input
                        type="text"
                        id="product-price"
                        name="product-price"
                        defaultValue={product.price}
                        onBlur={inputHandler}
                    />

                    <label htmlFor="product-description">Description: </label>
                    <textarea
                        id="product-description"
                        name="product-description"
                        defaultValue={product.description}
                    />

                    <button type="submit" className="btn-submit" >Edit Product</button>

                </article>
            </form>
        </section>
    );
};

export default Edit;