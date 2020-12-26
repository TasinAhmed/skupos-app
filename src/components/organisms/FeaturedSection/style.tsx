import styled from "styled-components";
import { respondTo } from "../../../_respondTo";

export const FeaturedContainer = styled.div`
  height: 80rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${respondTo.sm`
      height: 70rem;
  `}

  ${respondTo.xs`
      height: 50rem;
  `}
`;
