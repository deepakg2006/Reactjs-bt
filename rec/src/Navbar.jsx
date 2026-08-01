import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="brand">
        <Link to="/product" className="brand-link">
        

          <img
            src="https://img.logo.dev/flipkart.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=512&retina=true&format=png"
            alt="Flipkart Logo"
            className="logo"
          />

          <span>Mobile Store</span>

        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/example">Example</Link></li>
        <li><Link to="/test">Test</Link></li>
        <li><Link to="/useeffect">UseEffect</Link></li>
        <li><Link to="/fact">Fact</Link></li>
</ul>

    </nav>
  );
}

export default Navbar;