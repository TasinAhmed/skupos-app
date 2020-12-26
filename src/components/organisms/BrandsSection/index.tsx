import React, { FC } from "react";
import Button from "../../atoms/Button";
import CardGrid from "../../molecules/CardGrid";
import { BrandsContainer } from "./style";

const BrandsSection: FC = () => {
  return (
    <BrandsContainer>
      <CardGrid />
      <Button size="1.8rem" padding="2rem 4rem" color="white" fill="#0A2533">
        Load More
      </Button>
    </BrandsContainer>
  );
};

export default BrandsSection;
