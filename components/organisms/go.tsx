import { FramerVariants } from "../../types/framer-variants";
import Card from "../atoms/card";
import { Flex } from "../atoms/flex";
import Section from "../atoms/section";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";

const cards = [
  {
    title: "Translation of Brand DNA into Actionable Sustainability Strategy",
    content:
      "Create initiatives that becomes part of your core storytelling and provide the foundation for engaging, trustworthy and meaningful communication",
  },
  {
    title: "Co-creation of New Business Models",
    content:
      "Align your key business offering with a rapidly changing business environment affected by new regulation, investors requirements, resource scarcity and customer demands for radical transparency",
  },
];

const variants: Partial<FramerVariants> = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: {
      ease: "anticipate",
    },
  },
};

const renderables = cards.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    content={card.content}
    variants={variants}
    className="w-4/5"
  />
));

const Go = () => {
  return (
    <Section color="accent" className="pt-64 pb-32 text-white">
      <Flex direction="col">
        <div className="mx-auto px-8">
          <Title tag="h3" className="font-black">
            ACCELERATE
          </Title>
          <p>Sustainability strategy and business development</p>
          <Title
            tag="h2"
            className="mt-4 font-black sm:text-4xl md:text-6xl lg:text-7xl"
            size="3xl"
          >
            Go from ambition to inspiring
            <TextHighlight text="action." />
          </Title>
        </div>
        <Flex wrap="wrap" justify="center" className="mt-32 gap-32">
          {renderables}
        </Flex>
      </Flex>
    </Section>
  );
};

export default Go;
