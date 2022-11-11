import React from "react";
import Card from "../components/atoms/card";
import { Flex } from "../components/atoms/flex";
import Section from "../components/atoms/section";
import TextHighlight from "../components/atoms/text-highlight";
import Title from "../components/atoms/title";
import Slider from "../components/molecules/slider";
import { FramerVariants } from "../types/framer-variants";

/* Content Creation
Get help in transforming your sustainability work into engaging content and creative campaigns in any media from LinkedIn to Instagram and TikTok 
Media Strategy
Learn how to think and communicate like a media house
Sustainability reporting 2.0
From a dusty annual pdf with ‘repeated content’ to concise communication individually targeted at your stakeholders through different channels and formats
Campaigns
Creative campaign development and production. */

const cards = [
  {
    title: "Content Creation",
    content:
      "Get help in transforming your sustainability work into engaging content and creative campaigns in any media from LinkedIn to Instagram and TikTok",
  },
  {
    title: "Media Strategy",
    content: "Learn how to think and communicate like a media house",
  },
  {
    title: "Sustainability reporting 2.0",
    content:
      "From a dusty annual pdf with 'repeated content' to concise communication individually targeted at your stakeholders through different channels and formats Campaigns",
  },
  {
    title: "Campaigns",
    content: "Creative campaign development and production",
  },
];

const variants: Partial<FramerVariants> = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      ease: "anticipate",
    },
  },
};

const animatedRenderables = cards.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    className="mx-0 xs:mx-auto"
    variants={variants}
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

const Engage = () => {
  return (
    <Section
      className="grid min-h-screen grid-cols-1 gap-16 py-32 text-white md:grid-cols-2 md:px-0"
      color="accent"
    >
      <div className="block px-8 md:hidden">
        <div className="sticky top-1/3">
          <Title tag="h3" className="font-black">
            COMMUNICATE
          </Title>
          <p>Communications strategy and content development</p>
          <Title tag="h2" className="mt-4 font-black lg:text-7xl" size="4xl">
            Engage people in your <TextHighlight text="journey." />
          </Title>
        </div>
      </div>

      <div>
        <Flex
          direction="row"
          wrap="wrap"
          className="hidden h-fit w-full gap-4 space-y-0 overflow-x-hidden pt-0 xs:flex lg:flex-col lg:space-y-16 lg:pt-64"
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

      <div className="hidden px-8 md:block md:px-0">
        <div className="sticky top-1/3">
          <Title tag="h3" className="font-black">
            COMMUNICATE
          </Title>
          <p>Communications strategy and content development</p>
          <Title tag="h2" className="mt-4 font-black lg:text-7xl" size="4xl">
            Engage people in your <TextHighlight text="journey." />
          </Title>
        </div>
      </div>
    </Section>
  );
};

export default Engage;
