import { useState } from 'react'
import './App.css'

function App() {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [selectedColor, setSelectedColor] = useState(0)
  const [activeTab, setActiveTab] = useState('features')

  const product = {
    name: 'AeroFloat Pro',
    tagline: 'Levitating Bluetooth Speaker',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 2847,
    inStock: true,
    description: 'Experience sound like never before with the AeroFloat Pro. Using magnetic levitation technology, this speaker floats and rotates while delivering 360° immersive audio. Perfect for any modern space.',
    features: [
      { icon: '🎵', title: '360° Surround Sound', desc: 'Immersive audio from every angle' },
      { icon: '🧲', title: 'Magnetic Levitation', desc: 'Floats up to 15mm above base' },
      { icon: '🔋', title: '24-Hour Battery', desc: 'All-day listening, quick charge' },
      { icon: '📱', title: 'Bluetooth 5.3', desc: 'Seamless multi-device connection' },
      { icon: '💧', title: 'IPX5 Water Resistant', desc: 'Splash-proof for any environment' },
      { icon: '🎨', title: 'RGB Ambient Lighting', desc: 'Customizable via app' }
    ],
    specs: {
      'Driver Size': '50mm Neodymium',
      'Frequency Response': '20Hz - 20kHz',
      'Power Output': '20W RMS',
      'Battery Capacity': '4000mAh',
      'Charging Time': '2.5 hours',
      'Bluetooth Range': '15m / 49ft',
      'Dimensions': '12cm diameter sphere',
      'Weight': '680g (speaker) / 450g (base)'
    },
    colors: [
      { name: 'Obsidian Black', hex: '#1a1a2e' },
      { name: 'Arctic White', hex: '#f0f0f5' },
      { name: 'Sunset Rose', hex: '#e8a4b8' }
    ],
    reviews: [
      { name: 'Alex M.', rating: 5, date: '2 days ago', title: 'Mind-blowing!', text: 'I bought this as a gift for myself and have no regrets. The levitation feature is mesmerizing and the sound quality rivals speakers twice the price.' },
      { name: 'Sarah K.', rating: 5, date: '1 week ago', title: 'Perfect centerpiece', text: 'Everyone who visits asks about it. The RGB lighting syncs with the music and creates an amazing atmosphere. Worth every penny!' },
      { name: 'James T.', rating: 4, date: '2 weeks ago', title: 'Great but...', text: 'Sound is excellent and the floating effect is cool. Only wish the base was a bit heavier. Sometimes it wobbles on uneven surfaces.' }
    ],
    whatsInBox: ['AeroFloat Pro Speaker', 'Magnetic Base Station', 'USB-C Charging Cable', 'Quick Start Guide', 'Premium Carrying Case']
  }

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="product-page">
      <header className="header">
        <div className="logo">TechNova</div>
        <nav>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Support</a>
          <a href="#" className="cart-link">🛒 Cart (0)</a>
        </nav>
      </header>

      <div className="breadcrumb">
        <a href="#">Home</a> / <a href="#">Audio</a> / <a href="#">Speakers</a> / <span>AeroFloat Pro</span>
      </div>

      <main className="product-container">
        <div className="product-image">
          <div className="image-badges">
            <span className="badge-sale">Save $50</span>
            <span className="badge-new">New</span>
          </div>
          <div className="floating-speaker">
            <div className="speaker-base">
              <div className="base-glow"></div>
            </div>
            <div className="speaker-orb" style={{ background: `linear-gradient(145deg, ${product.colors[selectedColor].hex}, #1a1a2e)` }}>
              <div className="speaker-ring"></div>
              <div className="speaker-ring ring-2"></div>
            </div>
          </div>
          <div className="thumbnail-row">
            <div className="thumbnail active">Front</div>
            <div className="thumbnail">Side</div>
            <div className="thumbnail">Top</div>
            <div className="thumbnail">In Use</div>
          </div>
        </div>

        <div className="product-details">
          <div className="stock-badge">{product.inStock ? '✓ In Stock' : 'Out of Stock'}</div>
          <h1>{product.name}</h1>
          <p className="tagline">{product.tagline}</p>
          
          <div className="rating">
            <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
            <span className="rating-text">{product.rating} ({product.reviews.toLocaleString()} reviews)</span>
            <a href="#reviews" className="see-reviews">See all reviews →</a>
          </div>

          <p className="description">{product.description}</p>

          <div className="color-options">
            <h3>Color: <span className="selected-color">{product.colors[selectedColor].name}</span></h3>
            <div className="colors">
              {product.colors.map((color, i) => (
                <button 
                  key={i} 
                  className={`color-swatch ${i === selectedColor ? 'selected' : ''}`}
                  style={{ background: color.hex }}
                  onClick={() => setSelectedColor(i)}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div className="purchase-section">
            <div className="price-block">
              <div className="price">${product.price}</div>
              <div className="original-price">${product.originalPrice}</div>
            </div>
            <div className="quantity">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button 
              className={`add-to-cart ${added ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              {added ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>
          </div>

          <div className="buy-now-section">
            <button className="buy-now">Buy Now</button>
            <button className="wishlist">♡ Add to Wishlist</button>
          </div>

          <div className="trust-badges">
            <div className="trust-item">🚚 Free Shipping</div>
            <div className="trust-item">↩️ 30-Day Returns</div>
            <div className="trust-item">🛡️ 2-Year Warranty</div>
          </div>
        </div>
      </main>

      <section className="product-tabs">
        <div className="tab-headers">
          <button 
            className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >Features</button>
          <button 
            className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >Specifications</button>
          <button 
            className={`tab-btn ${activeTab === 'inbox' ? 'active' : ''}`}
            onClick={() => setActiveTab('inbox')}
          >What's in the Box</button>
        </div>

        <div className="tab-content">
          {activeTab === 'features' && (
            <div className="features-grid">
              {product.features.map((feature, i) => (
                <div key={i} className="feature-card">
                  <span className="feature-icon">{feature.icon}</span>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="specs-table">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="spec-row">
                  <span className="spec-label">{key}</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'inbox' && (
            <div className="inbox-list">
              {product.whatsInBox.map((item, i) => (
                <div key={i} className="inbox-item">
                  <span className="check">✓</span>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="reviews-section" id="reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews-summary">
          <div className="big-rating">
            <span className="big-number">{product.rating}</span>
            <div className="stars-large">{'★'.repeat(5)}</div>
            <p>Based on {product.reviews.toLocaleString()} reviews</p>
          </div>
          <div className="rating-bars">
            {[5, 4, 3, 2, 1].map(stars => (
              <div key={stars} className="rating-bar-row">
                <span>{stars} ★</span>
                <div className="bar-bg">
                  <div className="bar-fill" style={{ width: stars === 5 ? '72%' : stars === 4 ? '18%' : stars === 3 ? '7%' : '3%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reviews-list">
          {product.reviews.map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">{review.name[0]}</div>
                  <div>
                    <div className="reviewer-name">{review.name}</div>
                    <div className="review-date">{review.date}</div>
                  </div>
                </div>
                <div className="review-rating">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
              </div>
              <h4 className="review-title">{review.title}</h4>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
        <button className="load-more">Load More Reviews</button>
      </section>

      <section className="related-products">
        <h2>You Might Also Like</h2>
        <div className="related-grid">
          {[
            { name: 'AeroFloat Mini', price: 129.99, tag: 'Compact' },
            { name: 'SoundWave Bar', price: 299.99, tag: 'Home Theater' },
            { name: 'BeatPods Ultra', price: 179.99, tag: 'Earbuds' },
            { name: 'BassDrop XL', price: 249.99, tag: 'Portable' }
          ].map((item, i) => (
            <div key={i} className="related-card">
              <div className="related-image">
                <div className="placeholder-img">🔊</div>
              </div>
              <span className="related-tag">{item.tag}</span>
              <h4>{item.name}</h4>
              <p className="related-price">${item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-col">
            <div className="logo">TechNova</div>
            <p>Innovative audio for the modern world.</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <a href="#">Speakers</a>
            <a href="#">Headphones</a>
            <a href="#">Accessories</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Warranty</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 TechNova. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
