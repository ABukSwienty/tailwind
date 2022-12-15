export namespace SanityTypes {
  export interface Image {
    image: string;
    description: string;
  }

  export interface Card {
    title: string;
    content: string;
  }

  export interface Section {
    title: string;
    subTitle: string;
    tagLine: string;
    cards: Card[];
  }

  export interface TeamMember {
    name: string;
    jobTitle: string;
    image: Image;
  }

  export interface clientCase {
    title: string;
    subTitle: string;
    caseImage: Image;
    link: string;
  }

  export interface HowWeWorkPage {
    sections: Section[];
  }

  export interface AboutUsPage {
    tagLines: string[];
    teamMembers: TeamMember[];
  }

  export interface CasesPage {
    cases: clientCase[];
  }
}
