import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as productService from '../../services/productService';

const Edit = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const { productId } = useParams();

    useEffect(() => {
        productService.getOneProduct(productId)
            .then(result => {
                setProduct(result)
            })
            .catch(error => {
                console.log(error);
            })
    }, [productId]);

    const onProductEdit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('product-name');
        let type = formData.get('product-type');
        let imageUrl = formData.get('imageUrl');
        let price = formData.get('product-price');
        let description = formData.get('product-description');

        productService.create({
            name,
            type,
            imageUrl,
            price,
            description
        })
        .then(() => {
            navigate('/shop')
        })
    };

    return (
        <section className="create">
            <form id="create-form" onSubmit={onProductEdit} method="PUT">

                <article className="create-article">
                    <h1 className="create-title">Create</h1>

                    <label htmlFor="product-name">Name:</label>
                    <input
                        type="text"
                        id="product-name"
                        name="product-name"
                        defaultValue={product.name}
                    />

                    <label htmlFor="product-type">Type: </label>
                    <input
                        type="text"
                        id="product-type"
                        name="product-type"
                        defaultValue={product.type}

                    />

                    <label htmlFor="imageUrl">ImageUrl: </label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        defaultValue={product.imageUrl}

                    />

                    <label htmlFor="product-price">Price: </label>
                    <input
                        type="text"
                        id="product-price"
                        name="product-price"
                        defaultValue={product.price}

                    />

                    <label htmlFor="product-description">Description: </label>
                    <textarea
                        id="product-description"
                        name="product-description"
                        defaultValue={product.description}
                    />

                    <button type="submit" className="btn-submit" >Create Product</button>
                
                </article>
            </form>
        </section>
    )
}

export default Edit;