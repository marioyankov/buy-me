import { useAuthContext } from '../../../contexts/AuthContexts';
import * as authService from '../../../services/authService';


import './CartProductCard.css';

const CartProductCard = ({
    product,
}) => {
    const { user } = useAuthContext();

    const onRemove = () => {
        if (authService.isAuthenticated(user)) {
            authService.removeCartProduct(user.objectId, product.objectId);
        }else {
            //error
        }
    };

    return (
        <section className="product">
            <section className="product-img">
                <img src={product.imageUrl} alt='#' />
            </section>
            <section className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <h4 className="product-type">Type: {product.type}</h4>
                <p className="product-price">Price: {product.price}</p>
                <button className="remove-btn" onClick={onRemove}>Remove</button>
            </section>
        </section>
    );
};

export default CartProductCard;