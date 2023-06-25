import { IDS } from "../../constants/ids";
import useSetCurrentColor from "../../hooks/use-set-current-color";
import ObservableSection from "../atoms/observable-section";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";

const Landing = () => {
  const handleEnter = useSetCurrentColor({ color: "brand" });

  return (
    <ObservableSection
      onEnter={handleEnter}
      className="flex min-h-screen flex-col justify-end px-4 py-32 font-black text-white md:py-16 lg:py-8"
      id={IDS.landing}
    >
      <Title size="5xl" className="xs:text-7xl sm:text-8xl lg:text-9xl">
        <TextHighlight text="turn" mode="italic" /> HEADWIND
      </Title>
      <Title size="5xl" className="xs:text-7xl sm:text-8xl lg:text-9xl">
        <TextHighlight text="into" mode="italic" /> TAILWIND
      </Title>
    </ObservableSection>
  );
};

export default Landing;
