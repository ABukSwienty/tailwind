import { motion, useInView, Variants } from "framer-motion";
import { useMemo, useRef } from "react";
import { Flex } from "../atoms/flex";
import Section from "../atoms/section";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";
import Slider from "../molecules/slider";

const variants: Variants = {
  initial: {
    opacity: 0,
    x: 100,
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
    x: 100,
    transition: {
      ease: "easeInOut",
    },
  },
};

const Card = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "-15%",
  });
  return (
    <div
      ref={ref}
      style={{
        perspective: "2000px",
      }}
    >
      <motion.div
        variants={variants}
        initial="initial"
        animate={inView ? "animate" : "exit"}
        className="mx-auto h-96 w-80 rounded-lg bg-brand shadow-md"
      >
        card
      </motion.div>
    </div>
  );
};

const cards = ["card1", "card2", "card3"];

const See = () => {
  const renderables = useMemo(
    () =>
      cards.map((card, index) => (
        <div
          key={index}
          className="mx-0 h-72 w-full rounded-lg bg-brand shadow-md xs:mx-auto xs:h-72 xs:w-64 lg:h-96 lg:w-80"
        >
          {card}
        </div>
      )),
    []
  );

  return (
    <Section className="min-h-screen pb-16 text-white" color="accent">
      <Flex direction="col" className="relative h-fit min-h-screen lg:flex-row">
        <div className="w-full px-8 pt-32 md:px-16 lg:w-1/2 lg:pt-64">
          <div className="sticky top-1/3 mx-auto">
            <Title tag="h3" className="font-black">
              UNDERSTAND
            </Title>
            <p>Sustainability analysis and assessment</p>
            <Title tag="h2" className="mt-4 font-black lg:text-7xl" size="4xl">
              See headwinds as <TextHighlight text="possibilities." />
            </Title>
          </div>
        </div>

        <Flex
          direction="row"
          wrap="wrap"
          className="hidden w-full gap-4 space-y-0 pt-16 xs:flex lg:w-1/2 lg:flex-col lg:space-y-16 lg:pt-64"
        >
          {renderables}
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
      </Flex>
    </Section>
  );
};

export default See;
