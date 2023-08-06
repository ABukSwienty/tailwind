import { useMemo, useRef } from "react";
import { SanityTypes } from "../../types/sanity-data";
import Card from "../atoms/card";
import ServiceSection, {
  ServiceSectionProps,
} from "../molecules/service-section";
import { removeNull } from "../../util/remove-null";
import { useSanityStoreHowWeWork } from "../../stores/sanity-store";
import evenMap from "../../util/even-map";

export interface ServiceSectionWrapperProps
  extends Pick<ServiceSectionProps, "color"> {
  section: SanityTypes.Section;
}

const Comp = ({ color, section }: ServiceSectionWrapperProps) => {
  const cardColor = color === "light" ? "accent" : "brand";

  const renderables = useMemo(
    () =>
      removeNull(section.cards).map((card, index) => (
        <Card
          key={card._id}
          title={card.title}
          content={card.content}
          className="mx-0 xs:mx-auto"
          color={cardColor}
        />
      )),
    [cardColor, section.cards]
  );

  const sliderRenderables = useMemo(
    () =>
      removeNull(section.cards).map((card, index) => (
        <Card
          key={card._id}
          title={card.title}
          content={card.content}
          isAnimated={false}
          color={cardColor}
        />
      )),
    [cardColor, section.cards]
  );

  return (
    <ServiceSection
      section={section}
      renderables={renderables}
      sliderRenderables={sliderRenderables}
      color={color}
      offsetBy={0}
      id={section._id}
    />
  );
};

const ServiceSectionWrapper = () => {
  const data = useSanityStoreHowWeWork();

  if (!data) return null;

  return (
    <>
      {evenMap(data, (section, _, isEven) => (
        <Comp
          key={section._id}
          section={section}
          color={isEven ? "accent" : "light"}
        />
      ))}
    </>
  );
};

export default ServiceSectionWrapper;
