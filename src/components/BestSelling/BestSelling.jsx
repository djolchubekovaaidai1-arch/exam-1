import "./BestSelling.css";
import plant1 from "../../assets/plant1.png";
import plant2 from "../../assets/plant2.png";
import plant3 from "../../assets/plant3.png";

export default function BestSelling() {
  return (
    <section className="best">
      <div className="best__left">
        <h2 className="best__title">
          Best Selling <br /> Plants
        </h2>

        <p className="best__text">
          Easiest way to <br />
          healthy life by buying <br />
          your favorite plants
        </p>

        <button className="best__button">
          See more <span>→</span>
        </button>
      </div>

      <div className="best__right">
        <div className="card">
          <img
            src={plant1}
            alt="plant"
          />
          <h3 className="card__title">Natural Plants</h3>
          <p className="card__price">₱ 1,400.00</p>
        </div>

        <div className="card">
          <img
            src={plant2}
            alt="plant"
          />
          <h3 className="card__title">Artificial Plants</h3>
          <p className="card__price">₱ 900.00</p>
        </div>

        <div className="card">
          <img
            src={plant3}
            alt="plant"
          />
          <h3 className="card__title">Artificial Plants</h3>
          <p className="card__price">₱ 3,500.00</p>
        </div>
      </div>
    </section>
  );
}
