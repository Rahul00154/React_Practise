import React from "react";

function MiddleSection() {
  return (
    <main className="middle_section container">
      <div className="content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="btn">
          <button className="primarybtn">Shop Now</button>
          <button className="category">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand_icons">
            <img
              src="/images/flipkart.png"
              alt="flipkart-logo"
              className="flipkart"
            />
            <img
              src="/images/amazon.png"
              alt="amazon-logo"
              className="amazon"
            />
          </div>
        </div>
      </div>
      <div className="shoe-img">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
}

export default MiddleSection;
