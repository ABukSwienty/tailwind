import { useMemo, useRef } from "react";
import { SanityTypes } from "../../types/sanity-data";
import Card from "../atoms/card";
import ServiceSection, {
  ServiceSectionProps,
} from "../molecules/service-section";
import { removeNull } from "../../util/remove-null";

export interface ServiceSectionWrapperProps
  extends Pick<ServiceSectionProps, "color"> {
  section: SanityTypes.Section;
}

const ServiceSectionWrapper = ({
  color,
  section,
}: ServiceSectionWrapperProps) => {
  const savedSection = useRef(section);
  const ref = useRef<HTMLElement>(null);

  const cardColor = color === "light" ? "accent" : "brand";

  const renderables = useMemo(
    () =>
      removeNull(savedSection.current.cards).map((card, index) => (
        <Card
          key={card._id}
          title={card.title}
          content={card.content}
          className="mx-0 xs:mx-auto"
          color={cardColor}
        />
      )),
    [cardColor]
  );

  const sliderRenderables = useMemo(
    () =>
      removeNull(savedSection.current.cards).map((card, index) => (
        <Card
          key={card._id}
          title={card.title}
          content={card.content}
          isAnimated={false}
          color={cardColor}
        />
      )),
    [cardColor]
  );

  return (
    <ServiceSection
      innerRef={ref}
      title={savedSection.current.title}
      description={savedSection.current.subTitle}
      tagline={savedSection.current.tagLine}
      renderables={renderables}
      sliderRenderables={sliderRenderables}
      color={color}
      offsetBy={0}
      id={section._id}
    />
  );
};

export default ServiceSectionWrapper;
