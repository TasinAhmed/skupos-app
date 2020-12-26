import React, { FC } from "react";
import CardGrid from "../../molecules/CardGrid";
import { ClientsContainer } from "./style";

const ClientsSection: FC = () => {
  return (
    <ClientsContainer>
      <CardGrid />
    </ClientsContainer>
  );
};

export default ClientsSection;
