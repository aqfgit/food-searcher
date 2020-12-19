import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import FoodInput from "./components/FoodInput";
import FoodResults from "./components/FoodResults";

const App = () => {
  const [foodInputValue, setFoodInputValue] = useState("");
  const [results, setResults] = useState([]);

  async function postData(url = "") {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": "fd9687ec",
        "x-app-key": "a42963d4c80b3e9c59533754bb4872ce",
      },
    });
    return response.json();
  }

  const searchFood = () => {
    postData(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${foodInputValue}`
    ).then((data) => {
      setResults(data.branded);
    });
  };

  const clearResults = () => {
    setResults([]);
    setFoodInputValue("");
  };

  return (
    <>
      <FoodInput
        foodInputValue={foodInputValue}
        setFoodInputValue={setFoodInputValue}
        searchFood={searchFood}
        clearResults={clearResults}
      />
      <FoodResults results={results} />
    </>
  );
};

render(<App />, document.getElementById("root"));
