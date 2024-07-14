import { AnimatePresence } from "framer-motion";
import { Opinion } from "../opinion";
import { useState, useEffect } from "react";
import "./slider.css";

export function Slider({ opinions, date }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(false);
  const handleController = (state = "") => {
    if (state == "increase") {
      setCurrent((prev) => prev + 1);
      if (current >= opinions.length - 1) {
        setCurrent(0);
      }
      setDirection(true);
    } else {
      setCurrent((prev) => prev - 1);
      if (current < 1) {
        setCurrent(opinions.length - 1);
      }
      setDirection(false);
    }
  };
  useEffect(() => {
    setCurrent(0);
  }, [opinions]);
  return (
    <section className="slider">
      <AnimatePresence mode="wait" onExitComplete={true} custom={direction}>
        <Opinion POV={opinions[current]} key={opinions[current].id} date={date} />
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
        {opinions.map(({ id }) => (
          <li
            className={id == current + 1 ? "active" : null}
            key={id}
            onClick={() => setCurrent(id - 1)}
          ></li>
        ))}
      </ul>
    </section>
  );
}
