import { topic } from "../../data/topicData";
import "./pagination.css";

export function Pagination({ currentTopic, setCurrentTopic }) {
  return (
    <ol className="pagination">
      {topic.map(({ id }) => (
        <li
          className={currentTopic + 1 == id ? "active" : null}
          key={id}
          onClick={() => setCurrentTopic(id - 1)}
        >
          {id}
        </li>
      ))}
    </ol>
  );
}
