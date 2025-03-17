import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        {/* Add your logo here */}
        <img src="/path/to/your/logo.png" alt="Study Sphere Logo" className="logo" />
      </div>

      <nav className="main-nav">
        <ul>
          <li>
            <a href="#" aria-label="Your Classes">
              Your Classes
            </a>
          </li>
          <li>
            <a href="#" aria-label="Explore">
              Explore
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;