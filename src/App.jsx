import { Navbar, Topic, Pagination } from "./components";
import { topic } from "./data/topicData";
import { useState } from "react";

export default function App() {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className="sth"></div>
      <Navbar />
      <Topic topic={topic[current]} />
      <Pagination current={current} setCurrent={setCurrent} />
    </>
  );
}