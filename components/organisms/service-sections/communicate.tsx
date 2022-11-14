import React, { useContext } from "react";
import CARDS from "../../../constants/cards";
import { GlobalContext } from "../../../provider/global";
import Card from "../../atoms/card";
import ServiceSection from "../../molecules/service-section";

const renderables = CARDS.COMMUNICATE.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    className="mx-0 xs:mx-auto"
  />
));

const sliderRenderables = CARDS.COMMUNICATE.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    isAnimated={false}
  />
));

const Communicate = () => {
  const { communicateRef } = useContext(GlobalContext);
  return (
    <ServiceSection
      innerRef={communicateRef}
      title="communicate"
      description="Communications strategy and content development"
      tagline="Engage people in your journey."
      renderables={renderables}
      sliderRenderables={sliderRenderables}
      color="accent"
      offsetBy={1}
    />
  );
};

export default Communicate;
