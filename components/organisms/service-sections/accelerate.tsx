import React, { useContext } from "react";
import CARDS from "../../../constants/cards";
import { GlobalContext } from "../../../provider/global";
import Card from "../../atoms/card";
import ServiceSection from "../../molecules/service-section";

const renderables = CARDS.ACCELERATE.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    className="mx-0 xs:mx-auto"
    color="accent"
  />
));

const sliderRenderables = CARDS.ACCELERATE.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    isAnimated={false}
    color="accent"
  />
));

const Accelerate = () => {
  const { accelerateRef } = useContext(GlobalContext);
  return (
    <ServiceSection
      innerRef={accelerateRef}
      title="accelerate"
      description="Sustainability strategy and business development"
      tagline="Go from ambition to inspiring action."
      renderables={renderables}
      sliderRenderables={sliderRenderables}
      color="light"
      offsetBy={0}
    />
  );
};

export default Accelerate;
