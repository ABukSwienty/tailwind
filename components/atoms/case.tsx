import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Flex } from "./flex";
import Title from "./title";
import AllBirds from "../../public/cases/all-birds.png";
import TextileExchange from "../../public/cases/textile-exchange.png";
import Image from "next/image";
import { motion } from "framer-motion";

const cases = {
  textileExchange: {
    src: TextileExchange,
    alt: "Textile Exchange logo",
    link: "https://textileexchange.org/2022-conference/",
  },
  allBirds: {
    src: AllBirds,
    alt: "All Birds logo",
    link: "https://www.instagram.com/allbirds/",
  },
};

export interface CaseProps {
  case: keyof typeof cases;
  title: string;
  description: string;
}

const Case = ({ title, description, case: caseProp }: CaseProps) => {
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
        className="h-80 w-72 cursor-pointer rounded-lg bg-accent pt-4 shadow-md md:h-96 md:w-80"
      >
        <Title size="2xl" className="px-4 font-black">
          {title}
        </Title>
        <p className="my-2 px-4 text-lg font-medium">{description}</p>
        <Flex className="relative grow" align="center">
          <Image
            src={cases[caseProp].src}
            alt={cases[caseProp].alt}
            placeholder="blur"
          />
        </Flex>
        <div className="group rounded-b-lg bg-accent-600 transition-colors duration-300 ease-in-out hover:bg-accent-700">
          <a
            href={cases[caseProp].link}
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
