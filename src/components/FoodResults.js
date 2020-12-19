import React from "react";

const FoodResults = (props) => {
  const errorMessage = null;
  return (
    <div>
      <ul>
        {props.results.map((resultItem) => (
          <li key={resultItem.nix_item_id}>
            <figure>
              <img src={resultItem.photo.thumb} />
              <figcaption>{resultItem.brand_name_item_name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodResults;
