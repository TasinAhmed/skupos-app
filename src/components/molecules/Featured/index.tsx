import React, { FC } from "react";
import Button from "../../atoms/Button";
import { FeaturedContent, FeaturedImg, FeaturedSubContent } from "./style";
import MainImg from "../../../images/main.png";

const Featured: FC = () => {
  return (
    <FeaturedContent>
      <FeaturedImg src={MainImg} />
      <FeaturedSubContent>
        <p>
          Ac tincidunt massa laoreet eu, phasellus at adipiscing. Ornare
          ultricies aliquam, ultrices neque. Amet ac varius scelerisque orci.
        </p>
        <Button
          padding="2rem 4rem"
          size="1.8rem"
          fill="transparent"
          color="black"
          border="1px solid #D0D8E3"
        >
          See how they did it
        </Button>
      </FeaturedSubContent>
    </FeaturedContent>
  );
};

export default Featured;
