import { motion } from "framer-motion";
import { members } from "../../data/membersData";
import "./opinion.css";

const sliderVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction ? 100 : -100,
  }),
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction ? -100 : 100,
  }),
};
export function Opinion({ POV, direction, date }) {
  const { memberID, opinion } = POV;
  const { name, rank, avatar } = members.find(
    (member) => member.id == memberID
  );
  return (
    <motion.div
      variants={sliderVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: "tween", duration: 0.25 }}
      custom={direction}
      className="opinion"
    >
      <div className="member">
        <div className="avatar">
          <img src={avatar} alt={`avatar of ${name}`} width={50} height={50} />
          <div>
            <h3>{name}</h3>
            <p>{rank}</p>
          </div>
        </div>
        <span>{date}</span>
      </div>
      <p>{opinion}</p>
    </motion.div>
  );
}
