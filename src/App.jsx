import { useState } from "react";
import { Navbar, Topic, Pagination } from "./components";
import { topic } from "./data/topicData";

export default function App() {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className="sth"></div>
      <Navbar />
      <Topic topic={topic[current]} key={topic[current].id} />
      <Pagination current={current} setCurrent={setCurrent} />
    </>
  );
}
