import styled from "styled-components";
import { respondTo } from "../../../_respondTo";

export const ClientsContainer = styled.div`
  padding: 13.1rem 11.984rem;

  ${respondTo.lg`
    padding: 10rem 4rem;
  `}

  ${respondTo.xs`
    padding: 7rem 2rem;
  `}
`;
