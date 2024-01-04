import React from "react";

const ProductCard = ({ product }) => {
  const { id, title, price, thumbnail } = product;

  const handleAddToCart = () => {};

  return (
    <div className="product_container">
      <div className="first_row">
        <img width={60} height={60} src={product.thumbnail} />

        <div>
          <p>Price: ${product.price}</p>
          <p>Brand: {product.brand}</p>
        </div>
      </div>

      <div className="title">{product.title}</div>
      <div className="description">Description: {product.description}</div>
      <div className="rating">Rating: {product.rating}</div>
      <div className="discount">Discount: {product.discountPercentage}</div>
      <div className="stock">Stock: {product.stock}</div>
      <div className="row">
        <img
          className="slider_image"
          src={product.images[0]}
          width={250}
          height={200}
          alt=""
        />
        <img
          className="slider_image"
          src={product.images[1]}
          width={250}
          height={200}
          alt=""
        />
        <img
          className="slider_image"
          src={product.images[2]}
          width={250}
          height={200}
          alt=""
        />
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
