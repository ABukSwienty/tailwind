import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SanityTypes } from "../../types/sanity-data";
import { SpringColors } from "../../types/spring-colors";
import sanityImageUrl from "../../util/sanity-image-url";
import { Flex } from "./flex";
import Title from "./title";
import { modals } from "../molecules/modal/modals";

export interface CaseProps {
  case: SanityTypes.ClientCase;
  color?: keyof Pick<SpringColors, "brand" | "accent">;
}

const colors: Record<keyof Pick<SpringColors, "brand" | "accent">, string> = {
  brand: "bg-brand",
  accent: "bg-accent",
};

const linkColors: Record<keyof Pick<SpringColors, "brand" | "accent">, string> =
  {
    brand: "bg-brand-600 hover:bg-brand-600",
    accent: "bg-accent-600 hover:bg-accent-600",
  };

const Case = ({ case: caseProp, color = "accent" }: CaseProps) => {
  const savedCase = useRef(caseProp);

  const handleModal = () => {
    modals.case({
      clientCase: savedCase.current,
    });
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.2,
        },
      }}
      viewport={{
        once: true,
      }}
    >
      <Flex
        direction="col"
        justify="between"
        className={`h-fit w-72 rounded-lg ${colors[color]} pt-4 text-left shadow-md md:h-96 md:w-80`}
      >
        <div>
          <Title
            size="xl"
            className="w-full cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap px-4 font-black"
          >
            {savedCase.current.title}
          </Title>

          {/* <div className="mt-4 px-4">
            <span className="rounded-md border py-1 px-2 text-xs font-medium">
              keynote
            </span>
          </div> */}
          <p className="my-5 px-4 text-lg font-medium">
            {savedCase.current.subTitle}
          </p>
        </div>

        <Image
          src={sanityImageUrl(
            savedCase.current.caseImage.image.asset._ref
          ).url()}
          alt={savedCase.current.caseImage.description}
          style={{
            objectFit: "cover",
          }}
          className="h-64 w-full overflow-hidden"
          width={400}
          height={256}
        />
        <button
          className={`group w-full grow rounded-b-lg transition-colors duration-300 ease-in-out ${linkColors[color]}`}
          onClick={handleModal}
        >
          <div className="flex h-full w-full flex-row items-center p-4 text-lg">
            Check out more here
            <ArrowRightIcon className="ml-3 h-6 w-6 transition-all duration-300 ease-in-out group-hover:ml-6 group-hover:scale-x-110" />
          </div>
        </button>
      </Flex>
    </motion.div>
  );
};

export default Case;
