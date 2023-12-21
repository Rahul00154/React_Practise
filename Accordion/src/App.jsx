import { useState } from "react";
import Data from "./Data/data";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className="container">
      {Data.map((data) => {
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

              <h1 className="question" onClick={() => setIsOpen(!isOpen)}>
                {data.question}
              </h1>
            </div>
            {isOpen && <p className="answer">{data.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default App;
