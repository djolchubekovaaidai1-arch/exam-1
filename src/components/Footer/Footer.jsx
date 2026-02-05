import "./Footer.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="footer-left">
          <h3 className="logo">GREENMIND</h3>
          <p className="desc">We help you find<br />your dream plant</p>

          <div className="socials">
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </div>

          <p className="copyright">
            2023 all Right Reserved Term of use GREENMIND
          </p>
        </div>

        {/* Right */}
        <div className="footer-right">
          <div className="column">
            <h4>Information</h4>
            <span>About</span>
            <span>Product</span>
            <span>Blog</span>
          </div>

          <div className="column">
            <h4>Company</h4>
            <span>Community</span>
            <span>Career</span>
            <span>Our story</span>
          </div>

          <div className="column">
            <h4>Contact</h4>
            <span>Getting Started</span>
            <span>Pricing</span>
            <span>Resources</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
