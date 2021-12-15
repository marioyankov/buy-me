import './CartProductCard.css'

const CartProductCard = ({
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
                <button className="remove-btn">Remove</button>
            </section>
        </section>
    );
};

export default CartProductCard;