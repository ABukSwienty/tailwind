import type { NextPage } from "next";
import PageLayout from "../components/layouts/page-layout";
import ContactModal from "../components/molecules/contact-modal";
import ServicesLinkContainer from "../components/molecules/services-link-container";
import About from "../components/organisms/about";
import Cases from "../components/organisms/cases";
import Intro from "../components/organisms/intro";
import Landing from "../components/organisms/landing";
import ServiceSectionWrapper from "../components/organisms/service-section-wrapper";
import { SanityTypes } from "../types/sanity-data";
import evenMap from "../util/even-map";
import sanityClient from "../util/sanity-client";

type Props = {
  sanityData: {
    howWeWork: SanityTypes.HowWeWorkPage;
    cases: SanityTypes.CasesPage;
    about: SanityTypes.AboutUsPage;
  };
};

const Home: NextPage<Props> = ({ sanityData }) => {
  return (
    <PageLayout>
      <ContactModal />
      <Landing />
      <Intro />
      <ServicesLinkContainer />
      {evenMap(sanityData.howWeWork, (section, index, isEven) => (
        <ServiceSectionWrapper
          key={section._id}
          section={section}
          color={isEven ? "accent" : "light"}
        />
      ))}
      <About data={sanityData.about} />
      <Cases data={sanityData.cases} />
    </PageLayout>
  );
};

export async function getStaticProps() {
  try {
    const howWeWorkProps = await sanityClient.fetch(`{
      "howWeWork": *[_type == "howWeWorkPage"]{sections[]->{_id, title, subTitle, tagLine, cards[]->}}[0],
      "cases": *[_type == "casesPage"]{cases[]->{_id, title, subTitle, link, caseImage->}}[0],
      "about": *[_type == "aboutUsPage"]{tagLines, teamMembers[]->{_id, title, jobTitle, image->}}[0],
    }`);

    return {
      props: {
        sanityData: {
          howWeWork: howWeWorkProps.howWeWork.sections,
          cases: howWeWorkProps.cases.cases,
          about: howWeWorkProps.about,
        },
      },
    };
  } catch (error) {
    console.log("Could not fetch sanity data!", error);

    return {
      props: {},
    };
  }
}

export default Home;
