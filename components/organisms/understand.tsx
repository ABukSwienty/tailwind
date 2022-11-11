import React from "react";
import CARDS from "../../constants/cards";
import Card from "../atoms/card";
import ServiceSection from "../molecules/service-section";

const renderables = CARDS.UNDERSTAND.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    className="mx-0 xs:mx-auto"
  />
));

const sliderRenderables = CARDS.UNDERSTAND.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    isAnimated={false}
  />
));

const Understand = () => (
  <ServiceSection
    title="understand"
    description="Sustainability analysis and assessment"
    tagline="See headwinds as possibilities."
    renderables={renderables}
    sliderRenderables={sliderRenderables}
    offsetBy={1}
  />
);

export default Understand;
