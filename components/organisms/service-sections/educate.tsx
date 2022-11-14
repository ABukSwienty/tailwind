import React, { useContext } from "react";
import CARDS from "../../../constants/cards";
import { GlobalContext } from "../../../provider/global";
import Card from "../../atoms/card";
import ServiceSection from "../../molecules/service-section";

const renderables = CARDS.EDUCATE.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    className="mx-0 xs:mx-auto"
    color="accent"
  />
));

const sliderRenderables = CARDS.EDUCATE.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    isAnimated={false}
    color="accent"
  />
));

const Educate = () => {
  const { educateRef } = useContext(GlobalContext);
  return (
    <ServiceSection
      innerRef={educateRef}
      title="educate"
      description="Tailwind Academy - Sustainability training and masterclasses"
      tagline="Grow your skills."
      renderables={renderables}
      sliderRenderables={sliderRenderables}
      color="light"
      offsetBy={1}
    />
  );
};

export default Educate;
