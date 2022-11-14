import Image from "next/image";
import Morten from "../../public/portraits/morten.jpg";
import Thomas from "../../public/portraits/thomas.jpg";
import Kim from "../../public/portraits/kim.jpg";
import Gizem from "../../public/portraits/gizem.jpg";
import Eva from "../../public/portraits/eva.jpg";
import Pernille from "../../public/portraits/pernille.jpg";
import Sandra from "../../public/portraits/sandra.jpg";
import Keld from "../../public/portraits/keld.jpg";
import { Flex } from "./flex";
import Title from "./title";

export const portraits = {
  morten: {
    name: "Morten Lehmann",
    title: "CEO & Co-founder",
    src: Morten,
  },
  kim: {
    name: "Kim Boisen",
    title: "Co-founder",
    src: Kim,
  },
  keld: {
    name: "Keld Reinicke",
    title: "Co-founder",
    src: Keld,
  },
  sandra: {
    name: "Sandra Gonza",
    title: "Strategy & Business Impact Lead",
    src: Sandra,
  },
  gizem: {
    name: "Gizem Arici",
    title: "Insights & Analysis Lead",
    src: Gizem,
  },
  thomas: {
    name: "Thomas Koefoed",
    title: "Creative Director",
    src: Thomas,
  },
  pernille: {
    name: "Pernille Rose Grønkjær",
    title: "Documentary Filmmaker",
    src: Pernille,
  },
  eva: {
    name: "Eva Mulvad",
    title: "Documentary Filmmaker",
    src: Eva,
  },
};

export interface TeamPortraitProps {
  name: keyof typeof portraits;
}

const TeamPortrait = ({ name: nameProp }: TeamPortraitProps) => {
  const { name, title, src } = portraits[nameProp];
  return (
    <Flex
      direction="col"
      justify="center"
      align="end"
      className="h-fit  w-fit  space-y-4"
    >
      <div className="relative h-full w-full overflow-hidden rounded-lg shadow-md xs:h-72 xs:w-72 sm:h-80 sm:w-80 md:h-96 md:w-96">
        <Image
          src={src}
          alt={`Portrait of ${name} - ${title}`}
          placeholder="blur"
        />
      </div>
      <div className="text-right">
        <p className="text-accent-800">{title}</p>
        <Title tag="h3" size="xl" className="font-black text-brand">
          {name}
        </Title>
      </div>
    </Flex>
  );
};

export default TeamPortrait;
