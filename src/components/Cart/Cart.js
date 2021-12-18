import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartProductCard from './CartProductCard/CartProductCard';
import { useAuthContext } from '../../contexts/AuthContexts';
import DialogBox from '../Common/DialogBox';
import * as productService from '../../services/productService';
import * as authService from '../../services/authService';

import './Cart.css';

const Cart = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [cartProducts, setCartProducts] = useState([]);
    const [showDialogBox, setShowDialogBox] = useState(false, '');

    const message = 'Continue to billing and filling shipping address ?';
    let totalPrice = 0;
    cartProducts.map(x => (totalPrice += x.price));

    useEffect(() => {
        productService.getCartProducts(user.objectId)
            .then(result => {
                setCartProducts(result)
            })
            .catch(error => {
                authService.gotError(error);
            });
    }, [user.objectId, cartProducts]);

    const onBuyBtnClick = () => {
        setShowDialogBox(true);
    }

    const onBuy = () => {
        if (authService.isAuthenticated(user)) {
            authService.buyCartProducts(user.objectId, cartProducts)
                .then(() => {
                    navigate('/shop');
                })
                .catch(error => {
                    authService.gotError(error);
                });
        };
    };

    return (
        <>
            <DialogBox show={showDialogBox} message={message} onCancel={() => setShowDialogBox(false)} onSave={onBuy} />

            <article className='cart'>
                <section className='cart-title-section'>
                    <h1 className='cart-title'>My Cart</h1>
                </section>
                {cartProducts.length > 0
                    ? cartProducts.map(x => <CartProductCard key={x.objectId} product={x} />)
                    : <h3 className='cart-title'>No products in cart</h3>
                }
                <section className='cart-total'>
                    <h3 className='products-total'>Total: {cartProducts.length}</h3>
                    <h3 className='products-total-price'>Price: {totalPrice}</h3>
                    <button className='buy-btn' onClick={onBuyBtnClick}>Buy</button>
                </section>

            </article>
        </>
    );
};

export default Cart;