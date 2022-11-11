import React from "react";
import CARDS from "../../constants/cards";
import Card from "../atoms/card";
import { Flex } from "../atoms/flex";
import Section from "../atoms/section";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";
import ServiceSection from "../molecules/service-section";
import Slider from "../molecules/slider";

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

const Communicate = () => (
  <ServiceSection
    title="communicate"
    description="Communications strategy and content development"
    tagline="Engage people in your journey."
    renderables={renderables}
    sliderRenderables={sliderRenderables}
    color="accent"
    offsetBy={1}
  />
);

export default Communicate;
