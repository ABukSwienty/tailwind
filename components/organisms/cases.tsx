import { useContext } from "react";
import { GlobalContext } from "../../provider/global";
import Case from "../atoms/case";
import CTA from "../atoms/cta";
import { Flex } from "../atoms/flex";
import Section from "../atoms/section";
import Title from "../atoms/title";

const Cases = () => {
  const { casesRef } = useContext(GlobalContext);
  return (
    <Section
      innerRef={casesRef}
      className="min-h-screen space-y-16 py-32 text-white"
      color="brand"
    >
      <Flex direction="col" align="start" className="mx-auto w-fit px-8">
        <Title size="4xl" className="font-black md:text-8xl">
          Cases
        </Title>
        <p>
          Here are some of the clients we are helping turn headwind into
          tailwind.
        </p>
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
          description="From PDF report to global SoMe sustainability campaign."
        />
        <Case
          case="academy"
          title="Tailwind Academy"
          description="Teaching lawyers how to work strategically with sustainability."
        />
        <Case
          case="textileExchange"
          title="Textile Exchange"
          description="2022 conference development and execution."
        />
      </Flex>
      <div className="mx-auto w-fit">
        <CTA className="" color="brand" size="xl" />
      </div>
    </Section>
  );
};

export default Cases;
