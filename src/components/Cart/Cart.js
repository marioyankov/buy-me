import { useState, useEffect } from 'react';
import { useAuthContext } from '../../contexts/AuthContexts';
import * as productService from '../../services/productService';

import CartProductCard from './CartProductCard/CartProductCard';

import './Cart.css';

const Cart = () => {
    const { user } = useAuthContext();
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        productService.getCartProducts(user.objectId)
            .then(result => {
                setCartProducts(result)
            })
            .catch(error => {
                console.log(error);
            })
    }, [user.objectId]);

    console.log(cartProducts);

    return (
        <article className='cart'>
            <section className='cart-title-section'>
                <h1 className='cart-title'>My Cart</h1>
            </section>
                {cartProducts.length > 0
                    ? cartProducts.map(x => <CartProductCard key={x.objectId} product={x} />)
                    : <h3>No products in cart</h3>
                }
            <section className='cart-total'>
                <h3 className='products-total'>Total: </h3>
                <h3 className='products-total-price'>Price: </h3>
                <button className='buy-btn'>Buy</button>
            </section>

        </article>
    )
}

export default Cart;