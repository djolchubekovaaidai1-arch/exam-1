import "./Categories.css";
import artificial from "../../assets/artificial.png";
import natural from "../../assets/natural.png";
import accessories from "../../assets/accessories.png"

export default function Categories() {
  return (
    <div className="page">
      <h2 className="title">Categories</h2>
      <p className="subtitle">Find what you are looking for</p>

      <div className="section">
        <div className="cards">
          {/* Левая карточка */}
          <div className="card card-up">
            <div className="img-wrapper">
              <img
                src={natural}
                alt="Natural Plants"
              />
            </div>
            <h3>Natural Plants</h3>
          </div>

          {/* Центральная карточка */}
          <div className="card card-center">
            <div className="img-wrapper">
              <img
                src={accessories}
                alt="Plant Accessories"
              />
            </div>
            <h3>Plant Accessories</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="btn">
              Explore <span>→</span>
            </button>
          </div>

          {/* Правая карточка */}
          <div className="card card-up">
            <div className="img-wrapper">
              <img
                src={artificial}
                alt="Artificial Plants"
              />
            </div>
            <h3>Artificial Plants</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
