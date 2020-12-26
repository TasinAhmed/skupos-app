import styled from "styled-components";
import { respondTo } from "../../../_respondTo";

export const FooterContainer = styled.footer`
  background: #0a2533;
  color: #fff;
  padding: 9rem 11.987rem;
  display: grid;
  grid-template-columns: 50rem 1fr 1fr 1fr auto;

  ${respondTo.xl`
      grid-template-columns: 40rem 1fr 1fr 1fr auto;
  `}

  ${respondTo.lg`
      grid-template-columns: 1fr 1fr 1fr auto;
      row-gap: 5rem;
  `}

  ${respondTo.xs`
      grid-template-columns: 1fr;
      row-gap: 5rem;
      padding: 7rem 2rem;
  `}
`;

export const FooterLogo = styled.div``;

export const FooterTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 161.5%;
  /* or 19px */

  letter-spacing: -0.015em;
  text-transform: uppercase;
  margin-bottom: 1.874rem;
`;

export const FooterLink = styled.div`
  font-size: 1.4rem;
  line-height: 161.5%;
  /* identical to box height, or 23px */

  letter-spacing: -0.7px;
  color: rgba(243, 246, 249, 0.8);

  &:not(:last-child) {
    margin-bottom: 1.164rem;
  }
`;

export const FooterBottom = styled.div`
  grid-column: 1/-1;
  margin-top: 15rem;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 161.5%;
  /* or 19px */

  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${respondTo.xs`
    margin-top: 10rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  `}
`;

export const FooterLeft = styled.div`
  *:not(:last-child) {
    margin-right: 3.664rem;
  }

  ${respondTo.xs`
    margin-bottom: 2rem;
  `}
`;

export const FooterRight = styled.div`
  *:not(:first-child) {
    margin-left: 2.514rem;
  }
`;

export const FooterItemMain = styled.div`
  ${respondTo.lg`
      grid-column: 1/-1;
      justify-self: center;
  `}
`;
