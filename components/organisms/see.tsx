import { motion, useInView, Variants } from "framer-motion";
import React, { useMemo, useRef } from "react";
import Card from "../atoms/card";
import { Flex } from "../atoms/flex";
import Section from "../atoms/section";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";
import Slider from "../molecules/slider";

const cards = [
  {
    title: "Holistic Assessment of Your Sustainability Performance",
    content:
      "Identification of gaps, opportunities and how they will be affected by current and future legislation and trends",
  },
  {
    title: "Trend Spotting and Scenario Building",
    content:
      "Forecasting and scenario building depicting how the consequences of e.g. the climate crisis will affect your business",
  },
  {
    title: "Stakeholder Mapping and Engagement",
    content:
      "Mapping, analysis and advice on how best to engage your most important internal and external stakeholders",
  },
];

const animatedRenderables = cards.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    className="mx-0 xs:mx-auto"
  />
));

const renderables = cards.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    isAnimated={false}
  />
));

const See = () => {
  return (
    <Section
      className="grid min-h-screen grid-cols-1 gap-16 py-32 text-white md:grid-cols-2 md:px-0"
      color="accent"
    >
      <div className="px-8 text-left md:px-0 md:text-right">
        <div className="sticky top-1/3">
          <Title tag="h3" className="font-black">
            UNDERSTAND
          </Title>
          <p>Sustainability analysis and assessment</p>
          <Title tag="h2" className="mt-4 font-black lg:text-7xl" size="4xl">
            See headwinds as <TextHighlight text="possibilities." />
          </Title>
        </div>
      </div>

      <div>
        <Flex
          direction="row"
          wrap="wrap"
          className="hidden w-full gap-4 space-y-0 overflow-x-hidden pt-0 xs:flex lg:flex-col lg:space-y-16 lg:pt-64"
        >
          {animatedRenderables}
        </Flex>
        <div className="mt-8 block xs:hidden">
          <Slider
            slideSize={75}
            offsetBy={3}
            extendSlides={2}
            mode="snapToCenterAndInfinite"
          >
            {renderables}
          </Slider>
        </div>
      </div>
    </Section>
  );
};

export default See;
