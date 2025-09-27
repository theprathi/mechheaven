import React from 'react';
import { FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';
import './ProductShowcase.css';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Enchanted Dollhouse Kitchen Set',
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviews: 124,
    image: '🏠',
    category: 'Miniature Houses',
    isBestseller: true,
  },
  {
    id: 2,
    name: 'Magical Tea Party Set',
    price: 18.99,
    rating: 4.6,
    reviews: 89,
    image: '🫖',
    category: 'Kitchen Toys',
    isNew: true,
  },
  {
    id: 3,
    name: 'Fairy Garden Accessories',
    price: 12.99,
    originalPrice: 19.99,
    rating: 4.7,
    reviews: 156,
    image: '🧚',
    category: 'Garden Miniatures',
  },
  {
    id: 4,
    name: 'Tiny Baking Utensils Set',
    price: 15.99,
    rating: 4.5,
    reviews: 73,
    image: '🥧',
    category: 'Kitchen Accessories',
    isNew: true,
  },
  {
    id: 5,
    name: 'Whimsical Teddy Bear Collection',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviews: 201,
    image: '🧸',
    category: 'Plush Toys',
    isBestseller: true,
  },
  {
    id: 6,
    name: 'Miniature Food Play Set',
    price: 22.99,
    rating: 4.4,
    reviews: 67,
    image: '🍰',
    category: 'Play Food',
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      {(product.isNew || product.isBestseller || discountPercentage > 0) && (
        <div className="product-badges">
          {product.isNew && <span className="badge badge-new">New</span>}
          {product.isBestseller && <span className="badge badge-bestseller">Bestseller</span>}
          {discountPercentage > 0 && (
            <span className="badge badge-discount">-{discountPercentage}%</span>
          )}
        </div>
      )}
      
      <button className="wishlist-btn">
        <FiHeart />
      </button>

      <div className="product-image">
        <div className="product-emoji">{product.image}</div>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
              />
            ))}
          </div>
          <span className="rating-text">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <div className="product-pricing">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>

        <button className="add-to-cart-btn">
          <FiShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  return (
    <section className="product-showcase section" id="shop">
      <div className="container">
        <div className="showcase-header">
          <h2 className="section-title">Magical Treasure Collection</h2>
          <p className="section-subtitle">
            Discover enchanting miniature worlds filled with whimsical toys and charming kitchen treasures
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="showcase-footer">
          <a href="#collections" className="btn btn-outline">
            Explore All Treasures
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;