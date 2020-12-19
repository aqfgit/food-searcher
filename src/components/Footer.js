import React from "react";
import styled from "styled-components";
import cssVars from "../config/cssvars";

const StyledFooter = styled.footer`
  margin: 30px 0;
`;
const Paragraph = styled.footer`
  font-family: ${cssVars.font};
`;

const Link = styled.a`
  color: #66b6e0;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Paragraph>
        Powered by{" "}
        <Link href="https://www.nutritionix.com/business/api">
          Nutritionix API
        </Link>
      </Paragraph>
      <Paragraph>
        Icons made by{" "}
        <Link href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </Link>{" "}
        from{" "}
        <Link href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </Link>
      </Paragraph>
    </StyledFooter>
  );
};

export default Footer;
