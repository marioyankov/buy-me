import { useEffect, useState } from 'react';
import ProductCard from "./ProductCard";
import * as productService from '../../services/productService';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAllProducts()
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <section className="shop-list">
            <h1 className="products-title">All Products</h1>
            {products.length > 0
                ? products.map(x => <ProductCard key={x.objectId} product={x} />)
                : <h3>No products yet</h3>
            }
        </section>
    )
}

export default Shop;