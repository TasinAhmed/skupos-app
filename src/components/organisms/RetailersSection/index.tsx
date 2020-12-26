import React, { FC } from "react";
import Button from "../../atoms/Button";
import { RetailersContainer, RetailersText } from "./style";

const RetailersSection: FC = () => {
  return (
    <RetailersContainer>
      <RetailersText>
        Unlock the power of 14,000+ retailers connected to Skupos
      </RetailersText>
      <Button size="2rem" padding="1.5rem 3.4rem" color="#00B481" fill="#fff">
        Get started
      </Button>
    </RetailersContainer>
  );
};

export default RetailersSection;
