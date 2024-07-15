import { Navbar, Pagination, Topic } from "./components";
import { topic } from "./data/topicData";
import { useState } from "react";

export default function App() {
  const [currentTopic, setCurrentTopic] = useState(0);
  return (
    <>
      <Navbar />
      <Topic topic={topic[currentTopic]} />
      <Pagination
        currentTopic={currentTopic}
        setCurrentTopic={setCurrentTopic}
      />
    </>
  );
}
