import React from "react";
import { GridContainer } from "./style";
import Card from "../Card";
import Img1 from "../../../images/img1.png";
import Img2 from "../../../images/img2.png";
import Img3 from "../../../images/img3.png";
import Img4 from "../../../images/img4.png";
import Img5 from "../../../images/img5.png";
import Img6 from "../../../images/img6.png";

const CardGrid = () => {
  return (
    <GridContainer>
      <Card
        img={Img1}
        category="Retail"
        title="Lectus sed cursus eu adipiscing congue. Egestas et."
        text="Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis."
      />
      <Card
        img={Img2}
        category="Retail"
        title="Lectus sed cursus eu adipiscing congue. Egestas et."
        text="Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis."
      />
      <Card
        img={Img3}
        category="Brand"
        title="Lectus sed cursus eu adipiscing congue. Egestas et."
        text="Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis."
      />
      <Card
        img={Img4}
        category="Retail"
        title="Lectus sed cursus eu adipiscing congue. Egestas et."
        text="Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis."
      />
      <Card
        img={Img5}
        category="Brand"
        title="Lectus sed cursus eu adipiscing congue. Egestas et."
        text="Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis."
      />
      <Card
        img={Img6}
        category="Retail"
        title="Lectus sed cursus eu adipiscing congue. Egestas et."
        text="Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis."
      />
    </GridContainer>
  );
};

export default CardGrid;
