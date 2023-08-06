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
import { SanityTypes } from "../../types/sanity-data";
import textEllipsis from "../../util/text-ellipsis";

const CaseButton = ({
  color,
  clientCase,
}: {
  color: "light" | "accent";
  clientCase: SanityTypes.SectionCase;
}) => {
  return (
    <Button
      color={color === "accent" ? "light" : "accent"}
      className="h-16 w-full min-w-[256px] overflow-hidden md:max-w-[256px]"
      onClick={() => {
        modals.case({
          clientCase,
        });
      }}
    >
      <div className="flex flex-row justify-start md:justify-end">
        <ArrowRightIcon height={24} />
        <p className="ml-4 text-lg font-bold">{clientCase.title}</p>
      </div>
      <p className="text-left">{textEllipsis(clientCase.subTitle, 30)}</p>
    </Button>
  );
};

export interface ServiceSectionProps {
  section: SanityTypes.Section;
  renderables: JSX.Element[];
  sliderRenderables: JSX.Element[];
  offsetBy?: number;
  color?: keyof Pick<SpringColors, "light" | "accent">;
  id?: string;
}

const colors: Record<keyof Pick<SpringColors, "light" | "accent">, string> = {
  light: "bg-gray-50",
  accent: "bg-accent",
};

const ServiceSection = ({
  section,
  renderables,
  sliderRenderables,
  offsetBy = 0,
  color = "accent",
  id,
}: ServiceSectionProps) => {
  const { title, subTitle: description, tagLine: tagline, cases } = section;
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

          <div className="mt-8 hidden cursor-pointer flex-row flex-wrap items-center justify-start gap-4 transition-all md:flex md:justify-end">
            {section.cases &&
              section.cases.length > 0 &&
              section.cases.map((c) => (
                <CaseButton key={c._id} color={color} clientCase={c} />
              ))}
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
      <div className="flex cursor-pointer flex-row flex-wrap items-center justify-start gap-4 px-12 transition-all md:hidden md:justify-end">
        {section.cases &&
          section.cases.length > 0 &&
          section.cases.map((c) => (
            <CaseButton key={c._id} color={color} clientCase={c} />
          ))}
      </div>
    </ObservableSection>
  );
};

export default ServiceSection;
