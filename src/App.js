import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import FoodInput from "./components/FoodInput";
import FoodResults from "./components/FoodResults";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components";
import getData from "./util/getData";

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Main = styled.main`
  padding: 60px 0;
`;

const App = () => {
  const [foodInputValue, setFoodInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchFood = () => {
    setLoading(true);
    getData(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${foodInputValue}`
    ).then((data) => {
      setResults(data.branded);
      setLoading(false);
    });
  };

  const clearResults = () => {
    setResults([]);
    setFoodInputValue("");
  };

  return (
    <>
      <Wrapper>
        {console.log(results)}
        <Header />
        <Main>
          <FoodInput
            foodInputValue={foodInputValue}
            setFoodInputValue={setFoodInputValue}
            searchFood={searchFood}
            clearResults={clearResults}
          />
          <FoodResults results={results} loading={loading} />
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
};

render(<App />, document.getElementById("root"));
