import { SpringColors } from "../../types/spring-colors";
import retrieveLastWord from "../../util/retrieve-last-word";
import { Flex } from "../atoms/flex";
import Section from "../atoms/section";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";
import Slider from "./slider";

export interface ServiceSectionProps {
  title: string;
  description: string;
  tagline: string;
  renderables: JSX.Element[];
  sliderRenderables: JSX.Element[];
  offsetBy?: number;
  color?: keyof Pick<SpringColors, "light" | "accent">;
}

const ServiceSection = ({
  title,
  description,
  tagline,
  renderables,
  sliderRenderables,
  offsetBy = 0,
  color = "accent",
}: ServiceSectionProps) => {
  const { lastWord, withoutLastWord } = retrieveLastWord(tagline);
  return (
    <Section
      className={`grid min-h-screen grid-cols-1 gap-16 py-32 md:grid-cols-2 md:px-0 ${
        color === "accent" ? "text-white" : "text-gray-700"
      }`}
      color={color}
    >
      <div className="pl-4 text-left md:pl-8 md:text-right">
        <div className="md:sticky md:top-1/3">
          <Title tag="h3" className="font-black">
            {title.toLocaleUpperCase()}
          </Title>
          <p>{description}</p>
          <Title tag="h2" className="mt-4 font-black lg:text-7xl" size="4xl">
            {withoutLastWord} <TextHighlight text={lastWord} />
          </Title>
        </div>
      </div>

      <div>
        <Flex
          direction="row"
          wrap="wrap"
          className="hidden w-full gap-4 space-y-0 overflow-x-hidden px-4 pt-0 text-white xs:flex md:px-0 lg:flex-col lg:space-y-16 lg:pt-64"
        >
          {renderables}
        </Flex>
        <div className="h-fit xs:hidden">
          <Slider
            slideSize={75}
            offsetBy={offsetBy}
            extendSlides={0}
            mode="snapToCenter"
          >
            {sliderRenderables}
          </Slider>
        </div>
      </div>
    </Section>
  );
};

export default ServiceSection;
