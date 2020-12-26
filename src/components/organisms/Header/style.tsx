import styled from "styled-components";
import { respondTo } from "../../../_respondTo";

export const HeaderContainer = styled.div`
  background-color: #fbd224;
  height: 101.236rem;
  display: flex;
  flex-flow: column;

  ${respondTo.sm`
    height: 90rem;
  `}

  ${respondTo.xs`
    height: 70rem;
  `}
`;
