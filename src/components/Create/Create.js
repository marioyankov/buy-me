const Create = () => {
    const onProductCreate = (e) => {
        e.preventDefault();
    };

    return (
        <section className="create">
            <form id="create-form" onSubmit={onProductCreate} method="POST">

                <article className="create-article">
                    <h1 className="create-title">Login</h1>

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

                    <input type="submit" className="btn-submit" value="Create Product" />
                
                </article>
            </form>
        </section>
    )
}

export default Create;