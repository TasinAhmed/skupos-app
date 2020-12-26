import React, { FC } from "react";
import SearchBox from "../../molecules/SearchBox";
import { EmailSectionContainer, EmailSectionText } from "./style";

interface Props {
  text: string;
  background: string;
}

const EmailSection: FC<Props> = ({ text, background }) => {
  return (
    <EmailSectionContainer background={background}>
      <EmailSectionText>{text}</EmailSectionText>
      <SearchBox />
    </EmailSectionContainer>
  );
};

export default EmailSection;
