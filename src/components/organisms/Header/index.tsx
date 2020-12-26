import React, { FC } from "react";
import { HeaderContainer } from "../../../GlobalStyles";

const Header: FC<{ children: any }> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
