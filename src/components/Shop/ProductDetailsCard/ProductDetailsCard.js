import { useEffect, useState } from 'react';
import * as productService from '../services/productService';

const ProductDetailsCard = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        productService.getOneProduct(id)
            .then(result => {
                setProduct(result)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

}

export default ProductDetailsCard;