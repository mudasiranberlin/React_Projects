import React, { useState } from 'react';
import axios from 'axios';
import './product.css'

function Product({ product, loadCart }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);

  const addtoCart = async () => {
    setLoading(true);

    await axios.post('/api/cart-items', {
      productId: product.id,
      quantity: quantity
    });

    await loadCart();

    setLoading(false);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">

      <div className="product-card h-100">

        {/* Product Image */}
        <div className="product-image-container">

          <span className="product-badge">
            New
          </span>

          <img
            src={product.image}
            className="product-image"
            alt={product.name}
          />

          <button className="wishlist-btn">
            ♡
          </button>

        </div>


        {/* Product Details */}
        <div className="product-details">

          {/* Product Name */}
          <h5 className="product-name">
            {product.name}
          </h5>


          {/* Rating */}
          <div className="rating-container">

            <img
              src={`/images/ratings/rating-${product.rating.stars * 10}.png`}
              alt={`${product.rating.stars} stars`}
              className="rating-image"
            />

            <span className="rating-count">
              ({product.rating?.count || 0})
            </span>

          </div>


          {/* Price */}
          <div className="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </div>


          {/* Quantity */}
          <div className="quantity-section">

            <span className="quantity-label">
              Quantity
            </span>

            <select
              className="quantity-select"
              value={quantity}
              onChange={(e) =>
                setQuantity(Number(e.target.value))
              }
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                (num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                )
              )}
            </select>

          </div>


          {/* Bottom */}
          <div className="product-bottom">

            {/* Added Message */}
            <div
              className={`added-message ${
                added ? 'show' : ''
              }`}
            >
              ✓ Added to cart
            </div>


            {/* Add Button */}
            <button
              className={`add-cart-btn ${
                added ? 'added' : ''
              }`}
              onClick={addtoCart}
              disabled={loading}
            >
              {loading
                ? 'Adding...'
                : added
                ? '✓ Added to Cart'
                : 'Add to Cart'}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Product;
