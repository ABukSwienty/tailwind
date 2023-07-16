import { ArrowRightIcon } from "@heroicons/react/24/outline";
import useSetCurrentColor from "../../hooks/use-set-current-color";
import { SpringColors } from "../../types/spring-colors";
import retrieveLastWord from "../../util/retrieve-last-word";
import Button from "../atoms/button";
import { Flex } from "../atoms/flex";
import ObservableSection from "../atoms/observable-section";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";
import Slider from "./slider";
import { modals } from "./modal/modals";

const CaseButton = ({ color }: { color: "light" | "accent" }) => {
  return (
    <Button
      color={color === "accent" ? "light" : "accent"}
      className="h-16 min-w-[256px] max-w-[256px]"
      onClick={() => {
        modals.case({});
      }}
    >
      <div className="ml-auto w-fit">
        <div className="flex flex-row justify-start md:justify-end">
          <ArrowRightIcon height={24} />
          <p className="ml-4 text-lg font-bold">Allbirds</p>
        </div>
        <p className="text-left">Creating a global SoMe campaign</p>
      </div>
    </Button>
  );
};

export interface ServiceSectionProps {
  title?: string;
  description?: string;
  tagline: string;
  renderables: JSX.Element[];
  sliderRenderables: JSX.Element[];
  offsetBy?: number;
  color?: keyof Pick<SpringColors, "light" | "accent">;
  innerRef?: React.RefObject<HTMLElement>;
  id?: string;
}

const colors: Record<keyof Pick<SpringColors, "light" | "accent">, string> = {
  light: "bg-gray-50",
  accent: "bg-accent",
};

const ServiceSection = ({
  title,
  description,
  tagline,
  renderables,
  sliderRenderables,
  offsetBy = 0,
  color = "accent",
  innerRef,
  id,
}: ServiceSectionProps) => {
  const { lastWord, withoutLastWord } = retrieveLastWord(tagline);

  const handleEnter = useSetCurrentColor({ color });

  return (
    <ObservableSection
      className={`grid min-h-screen grid-cols-1 gap-16 py-32 md:grid-cols-2 md:px-0 ${
        color === "accent" ? "text-white" : "text-gray-700"
      } ${colors[color]}`}
      onEnter={handleEnter}
      id={id}
    >
      <article className="pl-4 text-left md:pl-8 md:text-right">
        <div className="px-4 md:sticky md:top-1/3 md:px-0">
          {title && (
            <Title tag="h2" size="2xl" className="font-black">
              {title.toLocaleUpperCase()}
            </Title>
          )}
          {description && <p>{description}</p>}
          <Title tag="h3" className="mt-4 font-black lg:text-7xl" size="4xl">
            {withoutLastWord} <TextHighlight text={lastWord} />
          </Title>

          <div className="mt-8 flex cursor-pointer flex-row flex-wrap items-center justify-start gap-4 transition-all md:justify-end">
            <CaseButton color={color} />
            <CaseButton color={color} />
            <CaseButton color={color} />
          </div>
        </div>
      </article>

      <article>
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
      </article>
    </ObservableSection>
  );
};

export default ServiceSection;
