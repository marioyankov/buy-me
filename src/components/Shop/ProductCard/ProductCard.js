import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({
    product,
}) => {
    return (
        <section className="product">
            <section className="product-img">
                <img src={product.imageUrl} alt='#' />
            </section>
            <section className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <h4 className="product-type">Type: {product.type}</h4>
                <p className="product-price">Price: {product.price}</p>
                <Link to={`/details/${product.objectId}`} className="details-btn">Details</Link>
            </section>
        </section>
    )
}

export default ProductCard;