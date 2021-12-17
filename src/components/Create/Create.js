import { useNavigate } from 'react-router-dom';
import { useAlertContext, types } from '../../contexts/AlertContext';
import { isAuthenticated } from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContexts';
import { gotError } from '../../services/authService';
import * as productService from '../../services/productService';


import './Create.css';

const Create = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { addAlert } = useAlertContext();

    const onProductCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('product-name');
        let type = formData.get('product-type');
        let imageUrl = formData.get('imageUrl');
        let price = formData.get('product-price');
        let description = formData.get('product-description');

        if (isAuthenticated(user)) {
            productService.create({
                name,
                type,
                imageUrl,
                price,
                description
            }).then(() => {
                addAlert('You have successfully added a product!', types.success);
                navigate('/shop')
            })
            .catch(error => {
                gotError(error);
            });
        }
    };

    return (
        <section className="create">
            <form id="create-form" onSubmit={onProductCreate} method="POST">

                <article className="create-article">
                    <h1 className="create-title">Create</h1>

                    <label htmlFor="product-name">Name:</label>
                    <input
                        type="text"
                        id="product-name"
                        name="product-name"
                    />

                    <label htmlFor="product-type">Type: </label>
                    <input
                        type="text"
                        id="product-type"
                        name="product-type"
                    />

                    <label htmlFor="imageUrl">ImageUrl: </label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                    />

                    <label htmlFor="product-price">Price: </label>
                    <input
                        type="text"
                        id="product-price"
                        name="product-price"
                    />

                    <label htmlFor="product-description">Description: </label>
                    <textarea
                        id="product-description"
                        name="product-description"
                    />

                    <button type="submit" className="btn-submit" >Create Product</button>

                </article>
            </form>
        </section>
    );
};

export default Create;