import React, { useRef } from "react";
import "./card.css";

const Card = ({ product }) => {
  const containerRef = useRef();
  console.log(containerRef);

  const handlePrev = () => {
    const width = containerRef.current.clientWidth;
    console.log(width);
    containerRef.current.scrollLeft = containerRef.current.scrollLeft - width;
  };

  const handleNext = () => {
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollLeft = containerRef.current.scrollLeft + width;
  };

  return (
    <div className="container" ref={containerRef}>
      <button className="prev-btn" onClick={handlePrev}>
        <p>&lt;</p>
      </button>
      {product.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} />
        </div>
      ))}
      <button onClick={handleNext} className="next-btn">
        <p>&gt;</p>
      </button>
    </div>
  );
};

export default Card;
