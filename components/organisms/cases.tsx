import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Case from "../atoms/case";
import { Flex } from "../atoms/flex";
import Section from "../atoms/section";
import Title from "../atoms/title";

const Cases = () => {
  return (
    <Section className="min-h-screen space-y-16 py-32 text-white" color="brand">
      <Flex direction="col" align="start" className="mx-auto w-fit px-8">
        <Title size="5xl" className="text-8xl font-black">
          Cases
        </Title>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Flex>
      <Flex
        direction="row"
        wrap="wrap"
        justify="center"
        className="gap-16 px-8"
      >
        <Case
          case="allBirds"
          title="Allbirds"
          description="From PDF report to global SoMe sustainability campaign"
        />
        <Case
          case="textileExchange"
          title="Textile Exchange"
          description="2022 conference development and execution"
        />
        <Case
          case="textileExchange"
          title="Textile Exchange"
          description="2022 conference development and execution"
        />
      </Flex>
    </Section>
  );
};

export default Cases;
