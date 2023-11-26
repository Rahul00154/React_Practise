import styled from "styled-components";
import React, { useEffect, useState } from "react";
import FoodCards from "./components/FoodCard/FoodCards";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filterData, setFilterData] = useState(null);

  // const [filteredFood, setfilteredFood] = useState(null);

  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setFilterData(json);
        setData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilterData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
    // setFilterData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilterData(data);
      setSelectedBtn("all");           
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading.....</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Search..." />
          </div>
        </TopContainer>
        <FilterContainer>
          {filterBtns?.map((value) => (
            <Button
              isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <FoodCards data={filterData} />
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search > input {
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 4px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
    &::placeholder {
      color: white;
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 40px;
`;
export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff4343")};
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #f22f2f;
  }
`;

export default App;
