import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Flex } from "./flex";
import Title from "./title";
import AllBirds from "../../public/cases/all-birds.png";
import AllBirdsFilm from "../../public/cases/all-birds-film.gif";
import TextileExchange from "../../public/cases/textile-exchange.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "../../hooks/use-media-query";
import Spinner from "./spinner";

const cases = {
  allBirds: {
    src: AllBirds,
    alt: "All Birds logo",
    link: "https://www.instagram.com/allbirds/",
    hover: {
      src: AllBirdsFilm,
      alt: "All Birds film",
    },
  },
};

export interface CaseProps {}

const Case = ({}: CaseProps) => {
  const ref = useRef(null);

  const [isHovering, setIsHovering] = useState(false);

  const [hasLoaded, setHasLoaded] = useState(false);

  const inView = useInView(ref);

  const isMobile = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    if (inView && isMobile) {
      setIsHovering(true);
    }
  }, [inView, isMobile]);

  return (
    <motion.div
      ref={ref}
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
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Flex
        direction="col"
        justify="between"
        className="h-80 w-72 cursor-pointer rounded-lg bg-accent pt-4 shadow-md md:h-96 md:w-80"
      >
        <Title size="2xl" className="px-4 font-black">
          Allbirds
        </Title>
        <p className="my-2 px-4 text-lg font-medium">
          From PDF report to global SoMe sustainability campaign
        </p>
        <Flex
          className={`relative grow ${isHovering && hasLoaded ? "hidden" : ""}`}
          align="center"
        >
          <Image
            src={cases.allBirds.src}
            alt={cases.allBirds.alt}
            placeholder="blur"
          />
        </Flex>
        <Flex
          className={`relative grow ${isHovering && hasLoaded ? "" : "hidden"}`}
          align="center"
        >
          <Image
            src={cases.allBirds.hover.src}
            alt={cases.allBirds.hover.alt}
            onLoadingComplete={() => setHasLoaded(true)}
          />
        </Flex>
        <div className="group rounded-b-lg bg-accent-600 transition-colors duration-300 ease-in-out hover:bg-accent-700">
          <a
            href={cases.allBirds.link}
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
