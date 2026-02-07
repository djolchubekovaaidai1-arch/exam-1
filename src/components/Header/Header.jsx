import "./Header.css";
import btn1 from "../../assets/btn1.svg";
import btn2 from "../../assets/btn2.svg";
import bnt3 from "../../assets/btn3.svg";


export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">GREENMIND</div>

        <nav className="header__nav">
          <a href="#" className="active">Home</a>
          <a href="#">Products</a>
          <a href="#">Contacts</a>
        </nav>

        <div className="header__actions">
          <button className="icon-btn"><img src={btn1} alt="" /></button>
          <button className="icon-btn"><img src={btn2} alt="" /></button>
          <span className="divider"></span>
          <button className="icon-btn"><img src={bnt3} alt="" /></button>
        </div>
      </div>
    </header>
  );
}
