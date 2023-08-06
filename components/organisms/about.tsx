import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { IDS } from "../../constants/ids";
import useSetCurrentColor from "../../hooks/use-set-current-color";
import { useSanityStoreAbout } from "../../stores/sanity-store";
import { SanityTypes } from "../../types/sanity-data";
import { Flex } from "../atoms/flex";
import ObservableSection from "../atoms/observable-section";
import TeamPortrait from "../atoms/team-portrait";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";
import Slider from "../molecules/slider";

const TeamPortraitWrapper = ({
  teamMember,
  index,
}: {
  teamMember: SanityTypes.TeamMember;
  index: number;
}) => (
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
  >
    <TeamPortrait teamMember={teamMember} />
  </motion.div>
);

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

const About = () => {
  const data = useSanityStoreAbout();

  const aboutRenderables = useMemo(
    () =>
      data
        ? data.tagLines.map((line) => <AboutItem text={line} key={line} />)
        : null,
    [data]
  );

  const teamRenderables = useMemo(
    () =>
      data
        ? data.teamMembers.map((member, index) => (
            <TeamPortraitWrapper
              key={member._id}
              teamMember={member}
              index={index}
            />
          ))
        : null,

    [data]
  );

  const teamSliderRenderables = useMemo(
    () =>
      data
        ? data.teamMembers.map((member) => (
            <TeamPortrait key={member._id} teamMember={member} />
          ))
        : null,
    [data]
  );

  const handleEnter = useSetCurrentColor({ color: "light" });

  return (
    <ObservableSection
      className="min-h-screen space-y-12 bg-gray-50 py-32"
      id={IDS.about}
      onEnter={handleEnter}
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
        {teamRenderables}
      </Flex>

      <div className="h-96 w-full xs:hidden">
        {teamSliderRenderables && (
          <Slider
            slideSize={75}
            offsetBy={0}
            extendSlides={0}
            mode="snapToCenter"
          >
            {teamSliderRenderables}
          </Slider>
        )}
      </div>
    </ObservableSection>
  );
};

export default About;
