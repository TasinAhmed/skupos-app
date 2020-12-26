import styled from "styled-components";
import { respondTo } from "../../../_respondTo";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5rem;
  row-gap: 7rem;

  ${respondTo.lg`
    grid-template-columns: 1fr 1fr;
  `}

  ${respondTo.xs`
    grid-template-columns: 1fr;
  `}
`;
