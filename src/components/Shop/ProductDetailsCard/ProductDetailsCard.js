import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContexts';
import { useAlertContext, alertTypes } from '../../../contexts/AlertContext';
import DialogBox from '../../Common/DialogBox';
import * as authService from '../../../services/authService';
import * as productService from '../../../services/productService';

import './ProductDetailsCard.css';

const ProductDetailsCard = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [product, setProduct] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const { objectId } = useParams();
    const { addAlert } = useAlertContext();
    const [showDialogBox, setShowDialogBox] = useState(false, '')


    useEffect(() => {
        productService.getOneProduct(objectId)
            .then(result => {
                setProduct(result)
            })
            .catch(error => {
                authService.gotError(error);
            });
    }, [objectId]);

    useEffect(() => {
        productService.getCartProducts(user.objectId)
            .then(result => {
                setCartProducts(result)
            })
            .catch(error => {
                authService.gotError(error);
            })
    }, [user.objectId])

    const deleteHandler = (e) => {
        e.preventDefault();

        if (user.objectId === product.ownerId) {
            productService.deleteProduct(product, user.objectId)
                .then(() => {
                    navigate('/my-products');
                })
                .catch(error => {
                    authService.gotError(error);
                })
                .finally(() => {
                    setShowDialogBox(false);
                })
        } else {
            addAlert('You cannot delete this product !', alertTypes.error);
            navigate('/my-products');
        }
    };

    const buyHandler = () => {
        if (cartProducts.some(object => object.objectId === product.objectId)) {
            addAlert('You already have this product in your cart!', alertTypes.error);
            return
        } else if (!(user.objectId === product.ownerId)) {
            authService.updateUserCart(user.objectId, product.objectId)
                .then(() => {
                    navigate('/cart');
                })
                .catch(error => {
                    authService.gotError(error);
                })
        }
    };

    const onConfirm = () => {
        setShowDialogBox(true);
    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${objectId}`}>Edit</Link>
            <button className="button" onClick={onConfirm}>Delete</button>
        </>
    );

    const userButtons = <button className="button" onClick={buyHandler}>Buy</button>;


    return (
        <>
            <DialogBox show={showDialogBox} message={''} onCancel={() => setShowDialogBox(false)} onSave={deleteHandler} />

            <section className="product">
                <section className="product-img">
                    <img src={product.imageUrl} alt='#' />
                </section>
                <section className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <h4 className="product-type">Type: {product.type}</h4>
                    <p className="product-description">Description: {product.description}</p>
                    <p className="product-price">Price: {product.price}</p>
                    {user.email && (user.objectId === product.ownerId
                        ? ownerButtons
                        : userButtons
                    )}
                </section>
            </section>
        </>
    );
};

export default ProductDetailsCard;