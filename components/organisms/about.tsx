import { ArrowRightIcon } from "@heroicons/react/24/outline";
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
      margin: "0px 0px -25% 0px",
    }}
    key={name}
  >
    <TeamPortrait name={name} key={name} />
  </motion.div>
));

const sliderRenderables = team.map((name, index) => (
  <TeamPortrait name={name} key={name} />
));

const AboutItem = ({ text }: { text: string }) => (
  <motion.li
    initial={{
      opacity: 0,
      x: -100,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    viewport={{
      once: true,
      margin: "-15%",
    }}
    className="flex w-fit items-center md:w-1/2"
  >
    <div>
      <ArrowRightIcon className="mr-6 h-6 w-6 md:h-10 md:w-10" />
    </div>
    <p>{text}</p>
  </motion.li>
);

const aboutItems = [
  "We provide solutions that are aligned with a 1.5 degrees pathway",
  "We focus on fixing the root problems instead of applying a band-aid",
  "We seek out blind spots - both our own and those of our customers - to secure truly sustainable solutions",
  "We build bridges and help make sustainability matter across your organisation",
];

const aboutRenderables = aboutItems.map((text, index) => (
  <AboutItem text={text} key={index} />
));

const About = () => {
  const { aboutRef } = useContext(GlobalContext);

  return (
    <Section
      innerRef={aboutRef}
      color="light"
      className="min-h-screen space-y-12 py-32"
    >
      <Title
        tag="h2"
        className="px-8 text-center font-black lg:text-7xl"
        size="4xl"
      >
        About <TextHighlight text="us." />
      </Title>
      <Flex
        as="ul"
        wrap="wrap"
        direction="col"
        align="center"
        className="w-full gap-16 px-8 pb-32 text-xl md:text-3xl"
      >
        {aboutRenderables}
      </Flex>
      <div className="px-8">
        <Title
          tag="h2"
          className="text-center font-black lg:text-7xl"
          size="4xl"
        >
          Our <TextHighlight text="team." />
        </Title>
        <p className="text-center text-gray-700">
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
