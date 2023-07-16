import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SanityTypes } from "../../types/sanity-data";
import { SpringColors } from "../../types/spring-colors";
import sanityImageUrl from "../../util/sanity-image-url";
import { Flex } from "./flex";
import Title from "./title";

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
        <Title size="2xl" className="px-4 font-black">
          {savedCase.current.title}
        </Title>
        <p className="my-5 px-4 text-lg font-medium">
          {savedCase.current.subTitle}
        </p>
        <Flex className="relative h-52 overflow-hidden" align="center">
          <Image
            src={sanityImageUrl(savedCase.current.caseImage.image.asset._ref)
              .width(400)
              .url()}
            alt={savedCase.current.caseImage.description}
            style={{
              objectFit: "cover",
            }}
            width={400}
            height={100}
          />
        </Flex>
        <div
          className={`group rounded-b-lg transition-colors duration-300 ease-in-out ${linkColors[color]}`}
        >
          <a
            href={savedCase.current.link}
            target="_blank"
            rel="noreferrer"
            className="flex h-full w-full flex-row items-center p-4 text-lg"
          >
            Check out more here
            <ArrowRightIcon className="ml-3 h-6 w-6 transition-all duration-300 ease-in-out group-hover:ml-6 group-hover:scale-x-110" />
          </a>
        </div>
      </Flex>
    </motion.div>
  );
};

export default Case;
