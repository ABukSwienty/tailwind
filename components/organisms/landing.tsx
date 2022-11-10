import Section from "../atoms/section";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";

const Landing = () => (
  <Section
    className="flex min-h-screen flex-col justify-end px-4 py-8 font-black text-white"
    color="brand"
  >
    <Title size="5xl" className="xs:text-7xl sm:text-8xl lg:text-9xl">
      <TextHighlight text="turn" mode="italic" /> HEADWIND
    </Title>
    <Title size="5xl" className="xs:text-7xl sm:text-8xl lg:text-9xl">
      <TextHighlight text="into" mode="italic" /> TAILWIND
    </Title>
  </Section>
);

export default Landing;
