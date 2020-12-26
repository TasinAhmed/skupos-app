import styled from "styled-components";
import { respondTo } from "../../../_respondTo";

export const RetailersContainer = styled.div`
  height: 59.13rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #00b481;

  ${respondTo.sm`
    padding: 7rem 2rem;
  `}
`;

export const RetailersText = styled.p`
  font-weight: bold;
  font-size: clamp(3rem, 5vw, 4.8rem);
  line-height: 5.4rem;
  /* or 112% */

  text-align: center;
  letter-spacing: -1.5px;

  /* Light Grey */
  max-width: 70.686rem;
  margin-bottom: 3.439rem;
  color: #f5f7fa;
`;
