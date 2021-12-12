import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContexts';
import * as productService from '../../../services/productService';

import './ProductDetailsCard.css';

const ProductDetailsCard = () => {
    const navigate = useNavigate(); 
    const { user } = useContext(AuthContext);
    const [product, setProduct] = useState([]);
    const { productId } = useParams();

    let currentUser = { ...user }

    const deleteHandler = (e) => {
        e.preventDefault();

        productService.deleteProduct(product);
        navigate('/my-products');
    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${productId}`}>Edit</Link>
            <button className="button" onClick={deleteHandler}>Delete</button>
        </>
    );

    const userButtons = <button className="button">Buy</button>;

    useEffect(() => {
        productService.getOneProduct(productId)
            .then(result => {
                setProduct(result)
            })
            .catch(error => {
                console.log(error);
            })
    }, [productId]);

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
                {currentUser.email
                        ? ownerButtons
                        : userButtons
                    }
            </section>
        </section>
    )
}

export default ProductDetailsCard;