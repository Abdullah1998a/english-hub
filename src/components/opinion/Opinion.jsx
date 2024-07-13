import { AnimatePresence, motion } from "framer-motion";
import "./opinion.css";

export function Opinion({ POV, date }) {
  const { name, avatar, rank, opinion } = POV;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", ease: "linear", duration: .25 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="opinion"
      >
        <div className="member">
          <div className="avatar">
            <img
              src={avatar}
              alt={`avatar of ${name}`}
              width={50}
              height={50}
            />
            <div>
              <h3>{name}</h3>
              <p>{rank}</p>
            </div>
          </div>
          <span>{date}</span>
        </div>
        <p>{opinion}</p>
      </motion.div>
    </AnimatePresence>
  );
}
