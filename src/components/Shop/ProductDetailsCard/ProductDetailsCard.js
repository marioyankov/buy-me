import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContexts';
import * as authService from '../../../services/authService';
import * as productService from '../../../services/productService';

import './ProductDetailsCard.css';

const ProductDetailsCard = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [product, setProduct] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const { objectId } = useParams();

    useEffect(() => {
        productService.getOneProduct(objectId)
            .then(result => {
                setProduct(result)
            })
            .catch(error => {
                console.log(error);
            })
    }, [objectId]);

    useEffect(() => {
        productService.getCartProducts(user.objectId)
            .then(result => {
                setCartProducts(result)
            })
            .catch(error => {
                console.log(error);
            })
    }, [user.objectId])

    const deleteHandler = (e) => {
        e.preventDefault();

        if (user.objectId === product.ownerId) {
            productService.deleteProduct(product, user.objectId)
                .then(() => {
                    navigate('/my-products');
                })
        } else {
            // notify
            navigate('/my-products');
        }
    };

    const buyHandler = () => {
        if (cartProducts.some(object => object.objectId === product.objectId)) {
            // notify already in cart
            return
        } else if (!(user.objectId === product.ownerId)) {
            authService.updateUserCart(user.objectId, product.objectId)
                .then(() => {
                    console.log('buy');
                    navigate('/cart');
                })
        }
    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${objectId}`}>Edit</Link>
            <button className="button" onClick={deleteHandler}>Delete</button>
        </>
    );

    const userButtons = <button className="button" onClick={buyHandler}>Buy</button>;


    return (
        <section className="product">
            <section className="product-img">
                <img src={product.imageUrl} alt='#' />
            </section>
            <section className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <h4 className="product-type">Type: {product.type}</h4>
                <p className="product-description">Description: {product.description}</p>
                <p className="product-price">Price: {product.price}</p>
                {user.email && (user.objectId === product.ownerId
                    ? ownerButtons
                    : userButtons
                )}
            </section>
        </section>
    )
}

export default ProductDetailsCard;