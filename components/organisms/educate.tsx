import React from "react";
import CARDS from "../../constants/cards";
import Card from "../atoms/card";
import { Flex } from "../atoms/flex";
import Section from "../atoms/section";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";
import ServiceSection from "../molecules/service-section";
import Slider from "../molecules/slider";

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

const Educate = () => (
  <ServiceSection
    title="educate"
    description="Tailwind Academy - Sustainability training and masterclasses"
    tagline="Grow your skills."
    renderables={renderables}
    sliderRenderables={sliderRenderables}
    color="light"
    offsetBy={1}
  />
);

export default Educate;
