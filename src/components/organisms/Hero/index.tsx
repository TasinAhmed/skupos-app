import React, { FC } from "react";
import { HeroContainer, HeroText } from "./style";

const Hero: FC = () => {
  return (
    <HeroContainer>
      <HeroText>
        Retailers and brands <span style={{ color: "white" }}>transform</span>{" "}
        their sales and marketing strategies with Skupos. Have a closer look at
        how we’re helping them succeed.
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;
