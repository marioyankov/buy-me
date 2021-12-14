import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContexts';
import * as productService from '../../../services/productService';

import './ProductDetailsCard.css';

const ProductDetailsCard = () => {
    const navigate = useNavigate(); 
    const { user } = useAuthContext();
    const [product, setProduct] = useState([]);
    const { objectId } = useParams();

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
    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${objectId}`}>Edit</Link>
            <button className="button" onClick={deleteHandler}>Delete</button>
        </>
    );

    const userButtons = <button className="button">Buy</button>;

    useEffect(() => {
        productService.getOneProduct(objectId)
            .then(result => {
                setProduct(result)
            })
            .catch(error => {
                console.log(error);
            })
    }, [objectId]);

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