import "./Hero.css";
import photo from "../../assets/photo.svg";
import lupa from "../../assets/lupa.svg";
import arrow1 from "../../assets/arrow1.svg";
import arrow2 from "../../assets/arrow2.svg";
import photo2 from "../../assets/photo2.svg";
import line from "../../assets/line.svg"

export default function Hero() {
  return (
   <main className="container">
        <div className="main">
          <div className="main-l">
            <h1>Buy your dream plants</h1>

            <div className="counts">
              <div>
                <span>50+</span>
                <h5>Plant Species</h5>
              </div>

              <img src={line} alt="" />

              <div>
                <span>100+</span>
                <h5>Customers</h5>
              </div>

            </div>

            <div className="box">
              <input type="text" placeholder="What are you looking for?" />
              <button><img src={lupa} alt="" /></button>
            </div>

          </div>

          <div className="mainfon">
            <img src={photo2} alt="" />
          </div>

          <div className="mainplant">
            <img src={photo} alt="" />
          </div>

          <div className="arrow1">
            <img src={arrow1} alt="" />
          </div>

          <div className="arrow2">
            <img src={arrow2} alt="" />
          </div>

        </div>

      </main >
  );
}
