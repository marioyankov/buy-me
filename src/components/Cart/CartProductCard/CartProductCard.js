import { useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContexts';
import * as authService from '../../../services/authService';
import DialogBox from '../../Common/DialogBox';


import './CartProductCard.css';

const CartProductCard = ({
    product,
}) => {
    const { user } = useAuthContext();
    const [showDialogBox, setShowDialogBox] = useState(false, '')

    const onConfirm = () => {
        setShowDialogBox(true);

    }

    const onRemove = () => {
        if (authService.isAuthenticated(user)) {
            authService.removeCartProduct(user.objectId, product.objectId)
                .catch(error => {
                    authService.gotError(error);
                })
                .finally(() => {
                    setShowDialogBox(false);
                })
        }
    };

    return (
        <>
            <DialogBox show={showDialogBox} message={''} onCancel={() => setShowDialogBox(false)} onSave={onRemove} />

            <section className="product">
                <section className="product-img">
                    <img src={product.imageUrl} alt='#' />
                </section>
                <section className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <h4 className="product-type">Type: {product.type}</h4>
                    <p className="product-price">Price: {product.price}</p>
                    <button className="remove-btn" onClick={onConfirm}>Remove</button>
                </section>
            </section>
        </>
    );
};

export default CartProductCard;