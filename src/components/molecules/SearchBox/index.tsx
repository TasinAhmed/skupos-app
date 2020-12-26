import React, { FC } from "react";
import Button from "../../atoms/Button";
import { Input, Search } from "./style";

const SearchBox: FC = () => {
  return (
    <Search>
      <Input placeholder="Enter your email address" />
      <Button padding="1.72rem 2.885rem">Subscribe</Button>
    </Search>
  );
};

export default SearchBox;
