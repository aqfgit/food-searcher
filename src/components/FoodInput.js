import React, { useState } from "react";
import styled from "styled-components";
import cssVars from "../config/cssvars";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
  font-family: ${cssVars.font};
  font-size: 22px;
  color: #474747;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-family: ${cssVars.font};
  padding: 10px 20px;
  border: 0;
  border-radius: 4px;
  color: #ffffff;
  font-size: 18px;
  box-shadow: -1px 1px 2px 1px #cccccc6b;

  &:active {
    position: relative;
    bottom: -1px;
    left: -1px;
  }

  &:focus {
    outline: 1px solid grey;
    box-shadow: 0 0 1pt 1pt grey;
  }
`;

const ButtonSearch = styled(Button)`
  background: #20a39e;
  margin-left: 10px;
`;

const ButtonClear = styled(Button)`
  background: #ef5b5b;
  margin-top: 20px;
`;

const Input = styled.input`
  font-family: ${cssVars.font};
  font-size: 17px;
  color: #595959;
  border: 1px solid #454545;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
`;

const ErrorMessage = styled.p`
  font-family: ${cssVars.font};
  font-size: 16px;
  color: #595959;
`;

const FoodInput = (props) => {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <Wrapper>
      <Label htmlFor="foodSearch">Search for branded foods</Label>
      <SearchWrapper>
        <Input
          id="foodSearch"
          type="text"
          value={props.foodInputValue}
          onChange={(e) => {
            props.setFoodInputValue(e.target.value);
          }}
        />
        <ButtonSearch
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
        </ButtonSearch>
      </SearchWrapper>
      {isEmpty ? (
        <ErrorMessage>The search box cannot be empty</ErrorMessage>
      ) : null}

      <div>
        <ButtonClear onClick={props.clearResults}>Clear</ButtonClear>
      </div>
    </Wrapper>
  );
};

export default FoodInput;
