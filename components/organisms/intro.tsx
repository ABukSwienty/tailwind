import { PaperAirplaneIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import useNavTo from "../../hooks/use-nav-to";
import { GlobalContext } from "../../provider/global";
import Button from "../atoms/button";
import CTA from "../atoms/cta";
import Section from "../atoms/section";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";

const Intro = () => {
  const { introRef, understandRef, modalStore } = useContext(GlobalContext);

  const navTo = useNavTo(understandRef, {
    behavior: "smooth",
  });

  return (
    <Section
      innerRef={introRef}
      color="accent"
      className="grid min-h-screen grid-cols-1 gap-16 py-32 px-8 md:grid-cols-2 md:px-0"
    >
      <div className="h-fit self-end pl-0 font-black text-white md:pl-16">
        <Title
          size="3xl"
          tag="h2"
          className="text-left font-black !leading-[1.1] sm:text-4xl md:text-right lg:text-6xl xl:text-7xl"
        >
          we <TextHighlight text="help" /> businesses and organizations turn the{" "}
          <TextHighlight text="global" /> headwinds into tailwinds for
          themselves and <TextHighlight text="planet earth." />
        </Title>
        <div className="mt-6 flex w-full justify-start md:mt-12">
          <Button
            className="mr-8 block font-semibold ring-offset-accent md:hidden"
            trailingIcon={ArrowDownIcon}
            onClick={navTo}
          >
            Read more
          </Button>
          <div className="ml-0 md:ml-auto">
            <CTA />
          </div>
        </div>
      </div>
      <div className="font-black text-white md:self-end">
        <div className="mr-auto w-full space-y-4 text-sm  md:w-4/5 md:text-base lg:w-2/3 xl:text-lg">
          <p>
            Tailwind Co. is an advisory that helps companies, NGO{"'"}s and
            organizations bridge sustainability action, business management and
            effective brand communication.
          </p>
          <p>
            Instead of approaching each area individually we work together with
            our clients in a more holistic way combining all aspects of
            sustainability from product development, stakeholder management to
            external communication and behavior changing solutions.
          </p>
          <p>
            Turning the ever growing global headwinds into steady tailwinds for
            our clients and planet Earth.
          </p>
        </div>
        <div className="mt-12 hidden md:block">
          <Button
            className="font-semibold ring-offset-accent "
            trailingIcon={ArrowDownIcon}
            onClick={navTo}
          >
            Read more
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
