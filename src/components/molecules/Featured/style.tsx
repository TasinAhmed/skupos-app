import styled from "styled-components";
import { respondTo } from "../../../_respondTo";

export const FeaturedContent = styled.div`
  max-width: 120rem;
  margin-top: -19.108rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10rem;
  padding-right: 10rem;

  ${respondTo.sm`
      padding-left: 2rem;
      padding-right: 2rem;
  `}

  ${respondTo.xs`
      margin-top: -10rem;
  `}
`;

export const FeaturedImg = styled.img`
  width: 100%;
  margin-bottom: 7.62rem;

  ${respondTo.sm`
      margin-bottom: 4rem;
  `}
`;

export const FeaturedSubContent = styled.div`
  max-width: 79.2rem;
  padding-left: 5rem;
  padding-right: 5rem;

  ${respondTo.sm`
      padding-left: 2rem;
  padding-right: 2rem;
  `}

  p {
    font-weight: 600;
    font-size: clamp(2rem, 4vw, 3.6rem);
    line-height: 5.4rem;
    margin-bottom: 3.034rem;

    ${respondTo.xs`
      line-height: 3rem;
  `}
  }
`;
