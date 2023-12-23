import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

const Product = () => {
  //manage state of product
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return <Card product={product} />;
};

export default Product;
