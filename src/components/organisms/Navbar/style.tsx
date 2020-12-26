import styled from "styled-components";
import { respondTo } from "../../../_respondTo";

export const NavContainer = styled.nav`
  height: 9.8rem;
  display: flex;
  padding-left: 3.4rem;
  padding-right: 3.4rem;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  border-bottom: 1px solid rgba(10, 37, 51, 0.1);
  position: relative;
`;

export const NavLink = styled.div`
  color: #0a2533;
  display: inline-block;
  font-weight: 600;
`;

export const NavItemsLeft = styled.div`
  *:not(:last-child) {
    margin-right: 5.3rem;
  }

  ${respondTo.sm`
      display:none;
  `}
`;

export const NavItemsRight = styled.div`
  *:not(:first-child) {
    margin-left: 5.3rem;
  }

  ${respondTo.sm`
      display:none;
  `}
`;

export const NavLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
