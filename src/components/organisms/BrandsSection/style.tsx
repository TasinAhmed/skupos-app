import styled from "styled-components";
import Button from "../../atoms/Button";
import { respondTo } from "../../../_respondTo";

export const BrandsContainer = styled.div`
  padding: 16rem 11.984rem;
  text-align: center;

  ${respondTo.lg`
  padding: 10rem 4rem;
  `}

  ${respondTo.xs`
    padding: 7rem 2rem;
  `}

  ${Button} {
    margin-top: 8.179rem;
  }
`;
