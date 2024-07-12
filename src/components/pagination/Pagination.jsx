import { topic } from "../../data/topicData";
import "./pagination.css";

export function Pagination({ current, setCurrent }) {
  return (
    <ol className="pagination">
      {topic.map(({ id }) => (
        <li
          className={current + 1 == id ? "active" : null}
          key={id}
          onClick={() => setCurrent(id - 1)}
        >
          {id}
        </li>
      ))}
    </ol>
  );
}
