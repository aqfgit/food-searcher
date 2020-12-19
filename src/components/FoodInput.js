import React from "react";

const FoodInput = (props) => {
  const errorMessage = null;
  return (
    <div>
      <label htmlFor="foodSearch">Food search query</label>
      <input
        id="foodSearch"
        type="text"
        value={props.foodInputValue}
        onChange={(e) => props.setFoodInputValue(e.target.value)}
      />
      <button onClick={props.searchFood}>Search</button>
      <button onClick={props.clearResults}>Clear</button>
      <p>{errorMessage}</p>
    </div>
  );
};

export default FoodInput;
