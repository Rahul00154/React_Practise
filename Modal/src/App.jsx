import { useState } from "react";

import "./App.css";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  return (
    <div className="App">
      <button onClick={() => setIsOpen((prev) => !prev)}>Show modal</button>
      <Modal isOpen={isOpen} />
    </div>
  );
}

export default App;
