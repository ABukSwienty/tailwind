export namespace SanityTypes {
  export interface Image {
    image: {
      asset: {
        _ref: string;
      };
    };
    description: string;
  }

  export interface Card {
    _id: string;
    title: string;
    content: string;
  }

  export type SectionCase = Pick<
    ClientCase,
    "_id" | "title" | "subTitle" | "link" | "description"
  >;

  export interface Section {
    _id: string;
    title: string;
    subTitle: string;
    tagLine: string;
    cards: Card[];
    cases: null | SectionCase[];
  }

  export interface TeamMember {
    _id: string;
    title: string;
    jobTitle: string;
    image: Image;
  }

  export interface ClientCase {
    _id: string;
    title: string;
    subTitle: string;
    caseImage: Image;
    link: string;
    description?: string;
  }

  export type HowWeWorkPage = Section[];

  export interface AboutUsPage {
    tagLines: string[];
    teamMembers: TeamMember[];
  }

  export type CasesPage = ClientCase[];
}
