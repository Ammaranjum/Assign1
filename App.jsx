// App.jsx
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <MenuSection />
      <Footer />
    </div>
  );
}

// Header.jsx
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul>
          <li className="logo"><strong>Sweet Delight</strong></li>
          <div className="menu-items">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Gallery</li>
            <li>Contact</li>
          </div>
          <div className="social-icons">
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

// HeroSection.jsx
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="intro">
          <h1>Delicious Donuts, Made with Love</h1>
          <p>Indulge in the sweetest treats in town! At Sweet Delight, we craft every donut to perfection, bringing joy with every bite.</p>
          <button>Order Now</button>
        </div>
        <div className="image">
          <img src="donut-hero.jpg" alt="Delicious Donuts" />
        </div>
      </div>
    </section>
  );
}

// MenuSection.jsx
import './MenuSection.css';

export default function MenuSection() {
  return (
    <section className="menu-section">
      <div className="container">
        <h2>Our Menu</h2>
        <div className="menu-items">
          {menuData.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const menuData = [
  { img: 'glazed-donut.jpg', name: 'Classic Glazed' },
  { img: 'chocolate-donut.jpg', name: 'Chocolate Bliss' },
  { img: 'strawberry-donut.jpg', name: 'Strawberry Dream' },
  { img: 'sprinkle-donut.jpg', name: 'Rainbow Sprinkle' },
];

// Footer.jsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Sweet Delight</h2>
          <p>Bringing Sweetness to Your Day!</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
