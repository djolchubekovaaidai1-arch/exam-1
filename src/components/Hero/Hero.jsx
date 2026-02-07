import "./Hero.css";
import photo from "../../assets/photo.png";
import lupa from "../../assets/lupa.svg";
import arrow1 from "../../assets/arrow1.svg";
import arrow2 from "../../assets/arrow2.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1 className="hero__title">
          Buy your <br /> dream plants
        </h1>

        <div className="hero__stats">
          <div className="stat">
            <span className="stat__number">50+</span>
            <span className="stat__text">Plant Species</span>
          </div>

          <div className="stat__line"></div>

          <div className="stat">
            <span className="stat__number">100+</span>
            <span className="stat__text">Customers</span>
          </div>
        </div>

        <div className="hero__search">
          <input
            type="text"
            placeholder="What are you looking for?"
          />
          <button className="search__btn">
            <img src={lupa} alt="" />
          </button>
        </div>
      </div>

      <div className="hero__right">
        <div className="hero__circle">
          <img
            src={photo}
            alt="plant"
          />
        </div>

        <div className="arrow arrow--top">
            <img src={arrow1} alt="" />
        </div>
        <div className="arrow arrow--bottom">
            <img src={arrow2} alt="" />
        </div>
      </div>
    </section>
  );
}
