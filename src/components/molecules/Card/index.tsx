import React, { FC } from "react";
import {
  CardContainer,
  CardImg,
  CardCategory,
  CardTitle,
  CardText,
} from "./style";

interface Props {
  img: string;
  title: string;
  category: string;
  text: string;
}

const Card: FC<Props> = ({ img, title, category, text }) => {
  return (
    <CardContainer>
      <CardImg src={img} alt="" />
      <CardCategory>{category}</CardCategory>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default Card;
