import React, { useState } from "react";

const FoodInput = (props) => {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <div>
      <label htmlFor="foodSearch">Food search query</label>
      <input
        id="foodSearch"
        type="text"
        value={props.foodInputValue}
        onChange={(e) => {
          props.setFoodInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (props.foodInputValue.length == 0) {
            setIsEmpty(true);
            return;
          }
          setIsEmpty(false);
          props.searchFood();
        }}
      >
        Search
      </button>
      <button onClick={props.clearResults}>Clear</button>
      {isEmpty ? <p>The search box cannot be empty</p> : null}
    </div>
  );
};

export default FoodInput;
