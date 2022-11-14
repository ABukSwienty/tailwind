import React, { useContext } from "react";
import CARDS from "../../../constants/cards";
import { GlobalContext } from "../../../provider/global";
import Card from "../../atoms/card";
import ServiceSection from "../../molecules/service-section";

const renderables = CARDS.PREPARE.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    className="mx-0 xs:mx-auto"
  />
));

const sliderRenderables = CARDS.PREPARE.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    isAnimated={false}
  />
));

const Prepare = () => {
  const { prepareRef } = useContext(GlobalContext);
  return (
    <ServiceSection
      innerRef={prepareRef}
      title="prepare"
      description="Thought leadership pieces on the trends that will have the biggest impact on our future"
      tagline="Navigate unknown territory."
      renderables={renderables}
      sliderRenderables={sliderRenderables}
      color="accent"
      offsetBy={0}
    />
  );
};

export default Prepare;
