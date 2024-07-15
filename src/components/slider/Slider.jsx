import emptyOpinions from "../../assets/empty-opinions.png";
import { opinions } from "../../data/opinionsData";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Opinion } from "../opinion";
import "./slider.css";

export function Slider({ id, date }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(false);
  const opinion = opinions.find((item) => item.topicID == id).ideas;
  const handleController = (state = "") => {
    let length = opinion.length;
    if (state == "increase") {
      let newSlide = currentSlide + 1;
      setCurrentSlide(newSlide >= length ? 0 : newSlide);
      setDirection(true);
    } else {
      let newSlide = currentSlide - 1;
      setCurrentSlide(newSlide < 0 ? length - 1 : newSlide);
      setDirection(false);
    }
  };
  useEffect(() => {
    setCurrentSlide(0);
  }, [id]);
  if (opinion.length == 0) {
    return (
      <div className="empty-opinions">
        <img src={emptyOpinions} alt="empty opinions" />
      </div>
    );
  }
  return (
    <section className="slider">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => true}
        custom={direction}
      >
        {opinion[currentSlide] && (
          <Opinion
            POV={opinion[currentSlide]}
            direction={direction}
            key={opinion[currentSlide].id}
            date={date}
          />
        )}
      </AnimatePresence>
      <div className="controllers">
        <button onClick={() => handleController()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 21 21"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13"
            />
          </svg>
        </button>
        <button onClick={() => handleController("increase")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 21 21"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13"
            />
          </svg>
        </button>
      </div>
      <ul className="indicators">
        {opinion.map(({ id }) => (
          <li
            className={id == currentSlide + 1 ? "active" : null}
            key={id}
            onClick={() => setCurrentSlide(id - 1)}
          ></li>
        ))}
      </ul>
    </section>
  );
}
