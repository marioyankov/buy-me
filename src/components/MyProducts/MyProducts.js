import { useEffect, useState, useContext } from 'react';
import ProductCard from "../Shop/ProductCard";
import { AuthContext } from '../../contexts/AuthContexts';

import * as productService from '../../services/productService';


const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        productService.getMyProducts(user.objectId)
            .then(result => {
                setMyProducts(result)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <section className="my-products">
            <h1 className="my-products-title">My Products</h1>
            {myProducts.length > 0
                ? myProducts.map(x => <ProductCard key={x.objectId} product={x} />)
                : <h3>No products yet</h3>
            }
        </section>
    )
}

export default MyProducts;