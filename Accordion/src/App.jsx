import { useState } from "react";
// import Data from "./Data/data";
import "./App.css";

const Data = [
  {
    id: 1,
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    id: 2,
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    id: 3,
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

function App() {
  // const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      {Data.map((data, index) => {
        return (
          <div key={data.id} className="content-wrapper">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50px"
              >
                <path
                  d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"
                  fill="currentColor"
                ></path>
              </svg>

              <h1 className="question" onClick={() => setIsOpen(index)}>
                {data.question}
              </h1>
            </div>
            {isOpen === index && <p className="answer">{data.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default App;
