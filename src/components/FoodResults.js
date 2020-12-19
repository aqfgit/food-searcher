import React from "react";
import styled, { keyframes } from "styled-components";
import cssVars from "../config/cssvars";

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const ResultCount = styled.p`
  font-family: ${cssVars.font};
  padding: 30px 0;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  list-style: none;
  font-family: ${cssVars.font};
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  box-shadow: 0 0 4px 1px #d3d3d3;
  padding: 25px;
  border-radius: 3px;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FigureCaption = styled.figcaption`
  font-size: 18px;
  padding: 30px 0;
  text-align: center;
`;

const Image = styled.img`
  width: 300px;
  object-fit: scale-down;
`;

const CalorieWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Calories = styled.span`
  margin-left: 5px;
  font-weight: 700;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${rotate} 1s linear infinite;
  height: 70px;
  width: 70px;
  margin: 40px auto;
  border: 3px dashed #20a39e;
  border-radius: 50%;
`;

const FoodResults = (props) => {
  if (props.results == undefined) {
    return null;
  }

  return (
    <Wrapper>
      {props.loading ? <Loader></Loader> : null}
      <ResultCount>Found {props.results.length} results</ResultCount>
      <List>
        {props.results.map((resultItem) => (
          <ListItem key={resultItem.nix_item_id}>
            <Figure>
              <Image src={resultItem.photo.thumb} />
              <FigureCaption>{resultItem.brand_name_item_name}</FigureCaption>
              <CalorieWrapper>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  width="30"
                  height="30"
                >
                  <g>
                    <g>
                      <path
                        style={{ fill: "#FE4E33" }}
                        d="M255.973,512c-110.78,0-200.907-90.346-200.907-201.396c0-86.366,39.25-163.376,96.878-226.622    C199.341,31.964,246.25,3.32,248.223,2.127c10.398-6.29,24.353,2.28,24.353,13.87v137.965l70.585-65.879    c6.127-5.719,15.827-5.323,21.444,1.028c26.827,30.325,48.182,62.348,63.471,95.181C513.35,367.416,395.799,512,255.973,512z"
                      />
                    </g>
                    <path
                      style={{ fill: "#FE1600" }}
                      d="M428.076,184.292c-15.289-32.833-36.644-64.856-63.471-95.181   c-5.617-6.352-15.317-6.747-21.444-1.028l-70.585,65.879V15.997c0-8.726-7.909-15.737-16.255-15.987v511.987   C395.994,511.758,513.279,367.264,428.076,184.292z"
                    />
                    <g>
                      <path
                        style={{ fill: "#FEC356" }}
                        d="M255.973,512c-42.1,0-76.35-34.334-76.35-76.535c0-68.193,66.208-108.571,69.026-110.257    c4.94-2.953,11.125-2.815,15.929,0.35c2.766,1.824,67.744,45.407,67.744,109.907C332.323,477.666,298.073,512,255.973,512z"
                      />
                    </g>
                    <path
                      style={{ fill: "#FEB020" }}
                      d="M332.323,435.465c0-64.499-64.979-108.083-67.744-109.907c-2.502-1.649-5.378-2.468-8.258-2.466   v188.899C298.26,511.802,332.323,477.549,332.323,435.465z"
                    />
                  </g>
                </svg>
                <Calories>{resultItem.nf_calories} calories</Calories>
              </CalorieWrapper>
            </Figure>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default FoodResults;
