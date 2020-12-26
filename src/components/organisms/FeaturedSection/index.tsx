import React, { FC } from "react";
import Featured from "../../molecules/Featured";
import { FeaturedContainer } from "./style";

const FeaturedSection: FC = () => {
  return (
    <FeaturedContainer>
      <Featured />
    </FeaturedContainer>
  );
};

export default FeaturedSection;
