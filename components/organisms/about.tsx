import { useMemo } from "react";
import Section from "../atoms/section";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";
import Slider from "../molecules/slider";

const images = [
  "image1",
  "image2",
  "image3",
  "image4",
  "image5",
  "image6",
  "image7",
  "image8",
];

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
  const renderables = useMemo(
    () =>
      images.map((image, index) => (
        <div key={index} className="h-[40rem] w-96 bg-gray-500">
          {image}
        </div>
      )),
    []
  );
  return (
    <Section
      color="accent"
      className="flex min-h-screen flex-col overflow-hidden py-32"
    >
      {/* <div className="pl-32">
        <Title size="5xl" className=" font-black lg:text-7xl">
          Our <TextHighlight text="team" />
        </Title>
        <p className="w-full max-w-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
          aperiam maxime! Aliquid autem incidunt minima cumque, earum inventore
          dolorum nulla!
        </p>
      </div> */}
      <Slider slideSize={25} mode="normal" offsetBy={1} extendSlides={0}>
        {[
          <div key={-1} className="relative h-[40rem] w-96 bg-gray-500">
            our team
          </div>,
          ...renderables,
        ]}
      </Slider>
    </Section>
  );
};

export default About;
