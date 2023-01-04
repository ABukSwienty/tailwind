import Image from "next/image";
import { useRef } from "react";
import { SanityTypes } from "../../types/sanity-data";
import teamMemberImageUrl from "../../util/team-member-url";
import { Flex } from "./flex";
import Title from "./title";

export interface TeamPortraitProps {
  teamMember: SanityTypes.TeamMember;
}

const TeamPortrait = ({ teamMember }: TeamPortraitProps) => {
  const savedTeam = useRef(teamMember);

  return (
    <Flex
      direction="col"
      justify="center"
      align="end"
      className="h-fit  w-fit  space-y-4"
    >
      <div className="relative h-full w-full overflow-hidden rounded-lg shadow-md xs:h-72 xs:w-72 sm:h-80 sm:w-80 md:h-96 md:w-96">
        <Image
          src={teamMemberImageUrl(savedTeam.current.image.image.asset._ref)}
          alt={savedTeam.current.image.description}
          width={600}
          height={600}
        />
      </div>
      <div className="text-right">
        <p className="text-accent-800">{savedTeam.current.jobTitle}</p>
        <Title tag="h3" size="xl" className="font-black text-brand">
          {savedTeam.current.title}
        </Title>
      </div>
    </Flex>
  );
};

export default TeamPortrait;
