import { useState } from "react";
import "./Testimonials.css";
import star from "../../assets/star.svg"
import avatar1 from "../../assets/avatar1.svg"
import avatar2 from "../../assets/avatar2.svg"

const data = [
  {
    text:
      "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "John Doe",
    role: "Youtuber",
    rating: "4.5",
    avatar: avatar2,
  },
  {
    text:
      "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    name: "Alex Smith",
    role: "Designer",
    rating: "4.7",
    avatar: avatar1,
  },
  {
    text:
      "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.",
    name: "Mike Ross",
    role: "Developer",
    rating: "4.8",
    avatar: avatar2,
  },
];


export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <section className="testimonials">
      {/* Header */}
      <div className="testimonials-header">
        <h2>
          What customers say about <br />
          <span>GREEMIND?</span>
        </h2>

        <div className="lines">
          {data.map((_, i) => (
            <span
              key={i}
              className={`line ${i === index ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="slider">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 460}px)` }}
        >
          {data.map((item, i) => (
            <div className="testimonial-card" key={i}>
              <p className="text">{item.text}</p>

              <div className="card-bottom">
                <div className="user">
                  <img src={item.avatar} alt="" className="avatar" />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>

                <div className="rating">
                  <img src={star} alt="" />
                   <span>{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="next-btn" onClick={next}>
        →
      </button>
    </section>
  );
}
