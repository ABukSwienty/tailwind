import { motion } from "framer-motion";
import { useContext } from "react";
import { GlobalContext } from "../../provider/global";
import { Flex } from "../atoms/flex";
import Section from "../atoms/section";
import TeamPortrait, { portraits } from "../atoms/team-portrait";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";
import Slider from "../molecules/slider";

const team: Array<keyof typeof portraits> = [
  "morten",
  "kim",
  "keld",
  "sandra",
  "gizem",
  "thomas",
  "pernille",
  "eva",
];

const renderables = team.map((name, index) => (
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.95,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.1,
      },
    }}
    viewport={{
      once: true,
      margin: "-25%",
    }}
    key={name}
  >
    <TeamPortrait name={name} key={name} />
  </motion.div>
));

const sliderRenderables = team.map((name, index) => (
  <TeamPortrait name={name} key={name} />
));

const About = () => {
  const { aboutRef } = useContext(GlobalContext);
  return (
    <Section innerRef={aboutRef} color="light" className="space-y-12 py-32">
      <div className="px-8">
        <Title tag="h2" className="font-black lg:text-7xl" size="4xl">
          Our <TextHighlight text="team." />
        </Title>
        <p className="text-gray-700">
          We have teamed up with thought-leaders in Scandinavia within
          sustainability, media, brand building and documentary filmmaking.
        </p>
      </div>
      <Flex
        wrap="wrap"
        className="hidden w-full gap-16 px-8 xs:flex"
        align="center"
        justify="center"
      >
        {renderables}
      </Flex>
      <div className="h-96 w-full xs:hidden">
        <Slider
          slideSize={75}
          offsetBy={0}
          extendSlides={0}
          mode="snapToCenter"
        >
          {sliderRenderables}
        </Slider>
      </div>
    </Section>
  );
};

export default About;
