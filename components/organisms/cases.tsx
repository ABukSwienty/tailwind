import { useContext, useMemo, useRef } from "react";
import { IDS } from "../../constants/ids";
import useSetCurrentColor from "../../hooks/use-set-current-color";
import { GlobalContext } from "../../provider/global";
import { SanityTypes } from "../../types/sanity-data";
import Case from "../atoms/case";
import CTA from "../atoms/cta";
import { Flex } from "../atoms/flex";
import ObservableSection from "../atoms/observable-section";
import Title from "../atoms/title";

const Cases = ({ data }: { data: SanityTypes.CasesPage }) => {
  const savedCases = useRef(data);

  const { casesRef } = useContext(GlobalContext);

  const renderables = useMemo(
    () => savedCases.current.map((item) => <Case key={item._id} case={item} />),
    []
  );

  const handleEnter = useSetCurrentColor({ color: "brand" });

  return (
    <ObservableSection
      className="min-h-screen space-y-16 bg-brand py-32 text-white"
      id={IDS.cases}
      onEnter={handleEnter}
    >
      <Flex direction="col" align="start" className="mx-auto w-fit px-8">
        <Title size="4xl" className="font-black md:text-8xl">
          Cases
        </Title>
        <p>
          Here are some of the clients we are helping turn headwind into
          tailwind.
        </p>
      </Flex>
      <Flex
        direction="row"
        wrap="wrap"
        justify="center"
        className="gap-16 px-8"
      >
        {renderables}
      </Flex>
      <div className="mx-auto w-fit">
        <CTA className="" color="brand" size="xl" />
      </div>
    </ObservableSection>
  );
};

export default Cases;
