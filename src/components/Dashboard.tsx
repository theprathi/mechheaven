import React from 'react';
import { FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

interface Product {
  product_name: string;
  discounted_price: string;
  original_price: string;
  discount_percentage: string;
  rating: string;
  review_count: string;
  brand: string;
  image_url: string;
}

const products: Product[] = [
  {
    product_name: "CUTEBEE Book Nook Kit - DIY Miniature House Dollhouse Kit for Adults and Beginners, 3D Wooden Puzzle Booknook Build Bookshelf Decor, Gifts for Family and Friends (Bookshop Memories)",
    discounted_price: "₹3,499.00",
    original_price: "₹14,999.00",
    discount_percentage: "77% Off",
    rating: "4.6",
    review_count: "7",
    brand: "CUTEBEE",
    image_url: "https://m.media-amazon.com/images/I/81ouKKo59gL._AC_SS180_.jpg"
  },
  {
    product_name: "CUTEBEE Book Nook Kit - DIY Miniature House Dollhouse Kit for Adults and Teens, Booknook Tiny House Bookshelf Decor 3D Wooden Puzzle, Gifts for Family, Friends (Champs-Élysées Florist)",
    discounted_price: "₹4,990.00",
    original_price: "₹14,999.00",
    discount_percentage: "67% Off",
    rating: "4.8",
    review_count: "60",
    brand: "CUTEBEE",
    image_url: "https://m.media-amazon.com/images/I/81hN-Ui1LyL._AC_SS180_.jpg"
  },
  {
    product_name: "CUTEBEE Book Nook Kit - DIY Miniature House, Dollhouse Miniature House DIY Construction Kit with Dust Cover and LED Light, Booknook Library Model Kits for Adults to Build (Soul Travel Agency)",
    discounted_price: "₹2,999.00",
    original_price: "₹9,999.00",
    discount_percentage: "70% Off",
    rating: "4.6",
    review_count: "684",
    brand: "CUTEBEE",
    image_url: "https://m.media-amazon.com/images/I/91G9LqxEj2L._AC_SS180_.jpg"
  },
  {
    product_name: "CUTEBEE Book Nook Kit - DIY Miniature House Magic Dollhouse Kit for Adults, Booknook Tiny House Bookshelf Decor 3D Wooden Puzzle, Gifts for Family, Friends (The Darkness Herbarium)",
    discounted_price: "₹3,990.00",
    original_price: "₹8,999.00",
    discount_percentage: "56% Off",
    rating: "4.6",
    review_count: "1,135",
    brand: "CUTEBEE",
    image_url: "https://m.media-amazon.com/images/I/71R17cde1NL._AC_SS180_.jpg"
  },
  {
    product_name: "CUTEBEE Book Nook Kit - DIY Miniature House Kit for Adults and Beginners, Dollhouse Library Tiny House Bookshelf Decor 3D Wooden Puzzle, Gifts for Family, Friends Memories Music Bookshop",
    discounted_price: "₹3,999.00",
    original_price: "₹9,999.00",
    discount_percentage: "60% Off",
    rating: "4.6",
    review_count: "23",
    brand: "CUTEBEE",
    image_url: "https://m.media-amazon.com/images/I/81ycNw1om8L._AC_SS180_.jpg"
  },
  {
    product_name: "CUTEBEE Premium Bookcase Diorama Kit with LED Lighting - Renaissance Bookstore Miniature Made of Solid Wood, 3D Puzzle for Adults from 14 Years (Count Cat's Study)",
    discounted_price: "₹3,499.00",
    original_price: "₹12,999.00",
    discount_percentage: "73% Off",
    rating: "4.8",
    review_count: "12",
    brand: "CUTEBEE",
    image_url: "https://m.media-amazon.com/images/I/812P7HC6caL._AC_SS180_.jpg"
  },
  {
    product_name: "CUTEBEE Book Nook Kit - DIY Miniature House Dollhouse Kit for Adults and Teens, Booknook Tiny Japanese House Bookshelf Decor 3D Wooden Puzzle, Gifts for Family, Friends (Morita-Ya)",
    discounted_price: "₹3,999.00",
    original_price: "₹14,999.00",
    discount_percentage: "73% Off",
    rating: "4.4",
    review_count: "19",
    brand: "CUTEBEE",
    image_url: "https://m.media-amazon.com/images/I/71TEmUTZ2lL._AC_SS180_.jpg"
  },
  {
    product_name: "CUTEBEE Book Nook Kit - DIY Miniature House Kit for Adults, Teens and Beginners, Tiny House Dollhouse Booknook Library Model Build Bookshelf Decor, Gifts for Family, Friends(Amazing Toys Store)",
    discounted_price: "₹3,499.00",
    original_price: "₹9,999.00",
    discount_percentage: "65% Off",
    rating: "4.4",
    review_count: "16",
    brand: "CUTEBEE",
    image_url: "https://m.media-amazon.com/images/I/91f9KAXCbIL._AC_SS180_.jpg"
  },
  {
    product_name: "Smart Lock by Mech Heaven US H9 Smart Door Lock for Home and Office| 6-Way Unlocking Features|Fingerprint|Passcode|Key Card Access|Bluetooth|Mechanical Key|OTP Access|2 Year Warranty|(Black)|",
    discounted_price: "₹4,999.00",
    original_price: "₹14,999.00",
    discount_percentage: "67% Off",
    rating: "No rating available",
    review_count: "No reviews",
    brand: "Mech Heaven",
    image_url: "https://m.media-amazon.com/images/I/31SC1EZCAdL._AC_SS180_.jpg"
  },
  {
    product_name: "Loona: Your Adorably Intelligent Petbot - Chat GPT-4o Enabled with Voice Command & Gesture Recognition - Top Boys and Girls Gifts for 2024 - V21 - Without Charging Dock",
    discounted_price: "₹1,29,999.00",
    original_price: "₹1,50,000.00",
    discount_percentage: "13% Off",
    rating: "4.1",
    review_count: "42",
    brand: "Unknown",
    image_url: "https://m.media-amazon.com/images/I/61J0QWnMysL._AC_SS180_.jpg"
  }
];

const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  // Extract discount percentage from string (e.g., "77% Off" -> "77%")
  const discountBadge = product.discount_percentage;
  
  // Parse rating - handle "No rating available"
  const hasRating = product.rating !== "No rating available";
  const ratingValue = hasRating ? parseFloat(product.rating) : 0;
  
  // Parse review count - handle "No reviews" 
  const hasReviews = product.review_count !== "No reviews";
  const reviewText = hasReviews ? `(${product.review_count} reviews)` : "No reviews yet";

  // Create a short title from the long product name
  const shortTitle = product.product_name.length > 60 
    ? product.product_name.substring(0, 60) + "..."
    : product.product_name;

  // Determine product category from name
  const getCategory = (name: string) => {
    if (name.includes("Book Nook") || name.includes("Dollhouse")) return "Miniature Houses";
    if (name.includes("Smart Lock")) return "Smart Home";
    if (name.includes("Petbot") || name.includes("Loona")) return "AI Toys";
    return "DIY Kits";
  };

  return (
    <div className="dashboard-product-card">
      <div className="product-badges">
        {discountBadge && (
          <span className="badge badge-discount">{discountBadge}</span>
        )}
        {product.brand === "Mech Heaven" && (
          <span className="badge badge-brand">Mech Heaven</span>
        )}
      </div>
      
      <button className="wishlist-btn">
        <FiHeart />
      </button>

      <div className="product-image">
        <img 
          src={product.image_url} 
          alt={product.product_name}
          className="product-img"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const placeholder = target.nextElementSibling as HTMLElement;
            if (placeholder) placeholder.style.display = 'flex';
          }}
        />
        <div className="product-placeholder" style={{ display: 'none' }}>
          <div className="product-icon">{index % 3 === 0 ? "🏠" : index % 3 === 1 ? "🔧" : "🎁"}</div>
          <span className="no-image-text">Image not available</span>
        </div>
      </div>

      <div className="product-info">
        <span className="product-category">{getCategory(product.product_name)}</span>
        <h3 className="product-name" title={product.product_name}>{shortTitle}</h3>
        <span className="product-brand">by {product.brand}</span>
        
        {hasRating && (
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={i < Math.floor(ratingValue) ? 'star-filled' : 'star-empty'}
                />
              ))}
            </div>
            <span className="rating-text">
              {product.rating} {reviewText}
            </span>
          </div>
        )}

        {!hasRating && (
          <div className="product-rating">
            <span className="no-rating-text">No rating available</span>
          </div>
        )}

        <div className="product-pricing">
          <span className="current-price">{product.discounted_price}</span>
          <span className="original-price">{product.original_price}</span>
        </div>

        <button className="add-to-cart-btn">
          <FiShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();

  const categories = ['All', 'Miniature Houses', 'Smart Home', 'AI Toys', 'DIY Kits'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const getCategory = (name: string) => {
    if (name.includes("Book Nook") || name.includes("Dollhouse")) return "Miniature Houses";
    if (name.includes("Smart Lock")) return "Smart Home";
    if (name.includes("Petbot") || name.includes("Loona")) return "AI Toys";
    return "DIY Kits";
  };

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => getCategory(product.product_name) === selectedCategory);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="container">
          <div className="welcome-section">
            <h1>Welcome, {currentUser?.displayName?.split(' ')[0]}! ✨</h1>
            <p>Discover magical treasures in our enchanted collection</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="container">
          <div className="category-filters">
            <div className="category-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="products-section">
            <div className="section-header">
              <h2>
                {selectedCategory === 'All' 
                  ? 'All Magical Treasures' 
                  : selectedCategory
                }
              </h2>
              <span className="product-count">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;