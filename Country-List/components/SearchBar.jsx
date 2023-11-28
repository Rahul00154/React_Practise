import React from "react";
import countriesData from "../countriesData";

const filterCountry = (e) => {
  const values = e.target.value;
  console.log(values);
  const filteredCountry = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(values)
  );
};

export default function SearchBar() {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={filterCountry}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
