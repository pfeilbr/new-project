import { useState } from 'react'
import './App.css'

function App() {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const product = {
    name: 'AeroFloat Pro',
    tagline: 'Levitating Bluetooth Speaker',
    price: 199.99,
    rating: 4.8,
    reviews: 2847,
    description: 'Experience sound like never before with the AeroFloat Pro. Using magnetic levitation technology, this speaker floats and rotates while delivering 360° immersive audio. Perfect for any modern space.',
    features: [
      '🎵 360° Surround Sound',
      '🧲 Magnetic Levitation',
      '🔋 24-Hour Battery Life',
      '📱 Bluetooth 5.3',
      '💧 IPX5 Water Resistant',
      '🎨 RGB Ambient Lighting'
    ],
    colors: ['Obsidian Black', 'Arctic White', 'Sunset Rose']
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
        </nav>
      </header>

      <main className="product-container">
        <div className="product-image">
          <div className="floating-speaker">
            <div className="speaker-base"></div>
            <div className="speaker-orb">
              <div className="speaker-ring"></div>
            </div>
          </div>
        </div>

        <div className="product-details">
          <span className="badge">New Release</span>
          <h1>{product.name}</h1>
          <p className="tagline">{product.tagline}</p>
          
          <div className="rating">
            <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
            <span className="rating-text">{product.rating} ({product.reviews.toLocaleString()} reviews)</span>
          </div>

          <p className="description">{product.description}</p>

          <div className="features">
            <h3>Features</h3>
            <ul>
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="color-options">
            <h3>Color</h3>
            <div className="colors">
              {product.colors.map((color, i) => (
                <button key={i} className={`color-btn ${i === 0 ? 'selected' : ''}`}>
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="purchase-section">
            <div className="price">${product.price}</div>
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
        </div>
      </main>

      <footer>
        <p>© 2026 TechNova. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
