import styled from "styled-components";
import { respondTo } from "../../../_respondTo";

export const EmailSectionContainer = styled.div<{ background?: string }>`
  height: 55.594rem;
  background: ${({ background }) => background || "#fbd224"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${respondTo.sm`
    padding: 7rem 2rem;
  `}
`;

export const EmailSectionText = styled.p`
  max-width: 78.8rem;
  font-size: clamp(3rem, 5vw, 4.8rem);
  font-weight: 600;
  text-align: center;
  line-height: 5.4rem;
  letter-spacing: -1.5px;
  margin-bottom: 3.266rem;
`;
