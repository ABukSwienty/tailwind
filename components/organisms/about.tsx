import { useContext, useMemo } from "react";
import { GlobalContext } from "../../provider/global";
import Section from "../atoms/section";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";
import ServiceSection from "../molecules/service-section";
import Slider from "../molecules/slider";

const renderables = [<p key={1}>renderable</p>];

const sliderRenderables = [<p key={1}>renderable</p>];

{
  /* <div className="h-96 w-96">
  <Title size="5xl" className=" font-black lg:text-7xl">
    Our <TextHighlight text="team" />
  </Title>
  <p className="w-full max-w-md">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
    aperiam maxime! Aliquid autem incidunt minima cumque, earum inventore
    dolorum nulla!
  </p>
</div>; */
}

const About = () => {
  const { aboutRef } = useContext(GlobalContext);
  return (
    <ServiceSection
      innerRef={aboutRef}
      tagline="Our team."
      renderables={renderables}
      sliderRenderables={sliderRenderables}
      offsetBy={0}
    />
  );
};

export default About;
