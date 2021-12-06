import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as productService from '../../../services/productService';

const ProductDetailsCard = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();

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
        <article className="product">
            <section className="product-img">
                <img src={product.imageUrl} alt='#' />
            </section>
            <section className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <h4 className="product-type">Type: {product.type}</h4>
                <p className="product-description">Description: {product.description}</p>
                <p className="product-price">Price: {product.price}</p>
                <button className="buy-btn">Buy</button>
            </section>
        </article>
    )
}

export default ProductDetailsCard;