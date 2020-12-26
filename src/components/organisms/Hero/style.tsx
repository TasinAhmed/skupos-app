import styled from "styled-components";
import { respondTo } from "../../../_respondTo";

export const HeroContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${respondTo.md`
    padding: 7rem 7rem;
  `}

  ${respondTo.sm`
      padding-left: 2rem;
      padding-right: 2rem;
  `}
`;

export const HeroText = styled.div`
  margin-bottom: 15rem;
  max-width: 95.6rem;
  font-size: clamp(3.5rem, 6vw, 6.2rem);
  font-weight: 600;
  line-height: 6.7rem;
  /* or 108% */

  text-align: center;
  letter-spacing: -1.5px;

  /* SK Black */

  color: #0a2533;

  ${respondTo.xs`
    line-height: 4.5rem;
  `}
`;
