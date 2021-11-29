import { useEffect, useState } from 'react';
import ProductCard from "./ProductCard";
import * as productService from '../services/productService';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAllProducts()
            .then(result => {
                setProducts(result)
            })
    }, []);

    return (
        <section>
            <h1>All Products</h1>
            {products.length > 0
                ? products.map(x => <ProductCard key={x._id} product={x} />)
                : <h3>No products yet</h3>
            }
        </section>
    )
}

export default Shop;