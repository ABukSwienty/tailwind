import { PaperAirplaneIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { Button } from "../atoms/button";
import Section from "../atoms/section";
import TextHighlight from "../atoms/text-highlight";
import Title from "../atoms/title";

const Intro = () => (
  <Section color="accent" className="min-h-fit md:min-h-screen">
    <div className="grid h-fit grid-cols-1 gap-16 py-16 px-8 md:grid-cols-2 md:px-0">
      <div className="self-end font-black text-white">
        <Title
          size="4xl"
          tag="h2"
          className="text-left font-black !leading-[1.1] md:text-right lg:text-6xl xl:text-7xl"
        >
          we <TextHighlight text="help" /> businesses and organizations turn the{" "}
          <TextHighlight text="global" /> headwinds into tailwinds for
          themselves and <TextHighlight text="planet earth." />
        </Title>
        <div className="mt-6 flex w-full justify-start md:mt-12">
          <Button
            className="visible mr-8 font-semibold ring-offset-accent md:invisible"
            trailingIcon={ArrowDownIcon}
          >
            Read more
          </Button>
          <Button
            color="secondary"
            className="ml-0 bg-accent font-semibold ring-offset-accent md:ml-auto"
            trailingIcon={PaperAirplaneIcon}
          >
            Get in touch
          </Button>
        </div>
      </div>
      <div className="self-start font-black text-white md:self-end">
        <div className="mr-auto w-full space-y-4 text-sm md:w-4/5 md:text-base lg:w-2/3 xl:text-lg">
          <p>
            Tailwind Co. is an advisory that help companies, NGO{"'"}s and
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
        <Button
          className="invisible mt-12 font-semibold ring-offset-accent md:visible"
          trailingIcon={ArrowDownIcon}
        >
          Read more
        </Button>
      </div>
    </div>
  </Section>
);

export default Intro;
