import "./About.css";
import about1 from "../../assets/about1.svg";
import about2 from "../../assets/about2.svg";
import about3 from "../../assets/about3.svg";

export default function About() {
  return (
    <section className="about">
      <h2 className="about__title">About us</h2>
      <p className="about__subtitle">
        Order now and appreciate the beauty of nature
      </p>

      <div className="about__items">
        <div className="about__item">
          <div className="about__icon">
            <img src={about1} alt="" />
          </div>
          <h3 className="about__item-title">Large Assortment</h3>
          <p className="about__item-text">
            we offer many different types of products with fewer variations in
            each category.
          </p>
        </div>

        <div className="about__item">
          <div className="about__icon">
           <img src={about2} alt="" />
          </div>
          <h3 className="about__item-title">Fast & Free Shipping</h3>
          <p className="about__item-text">
            4-day or less delivery time, free shipping and an expedited delivery
            option.
          </p>
        </div>

        <div className="about__item">
          <div className="about__icon">
            <img src={about3} alt="" />
          </div>
          <h3 className="about__item-title">24/7 Support</h3>
          <p className="about__item-text">
            answers to any business related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </section>
  );
}
