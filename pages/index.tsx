import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { Flex } from "../components/atoms/flex";
import Title from "../components/atoms/title";
import PageLayout from "../components/layouts/page-layout";
import { modals } from "../components/molecules/modal/modals";
import ServicesLinkContainer from "../components/molecules/services-link-container";
import About from "../components/organisms/about";
import Cases from "../components/organisms/cases";
import Intro from "../components/organisms/intro";
import Landing from "../components/organisms/landing";
import ServiceSectionWrapper from "../components/organisms/service-section-wrapper";
import useIsomorphicLayoutEffect from "../hooks/use-isomorphic-layout-effect";
import { useGlobalActions } from "../stores/global";
import { SanityTypes } from "../types/sanity-data";
import evenMap from "../util/even-map";
import sanityClient from "../util/sanity-client";

type Props = {
  sanityData: {
    howWeWork: SanityTypes.HowWeWorkPage;
    cases: SanityTypes.CasesPage;
    about: SanityTypes.AboutUsPage;
  };
  error: null | unknown;
};

const Home: NextPage<Props> = (props) => {
  const { setServiceLinks } = useGlobalActions();
  const router = useRouter();

  const isError = props.error !== null || props.sanityData === undefined;

  useMemo(() => {
    if (!props) return;
    if (props.error) return;

    setServiceLinks(
      props.sanityData.howWeWork.map((d) => ({
        id: d._id,
        title: d.title,
        subTitle: d.subTitle,
      }))
    );
  }, [props, setServiceLinks]);

  useIsomorphicLayoutEffect(() => {
    if (isError) {
      // handle error
    }
  }, [isError, router]);

  return (
    <PageLayout>
      <Landing />
      <Intro />
      <ServicesLinkContainer />
      {!isError && (
        <>
          {evenMap(props?.sanityData.howWeWork, (section, index, isEven) => (
            <ServiceSectionWrapper
              key={section._id}
              section={section}
              color={isEven ? "accent" : "light"}
            />
          ))}
          <About data={props?.sanityData.about} />
          <Cases data={props?.sanityData.cases} />
        </>
      )}
      {isError && (
        <div className="flex h-screen w-screen flex-col items-center justify-center space-y-10 bg-brand">
          <Flex>
            <ExclamationCircleIcon className="mr-3 h-10 w-10 text-white" />
            <Title size="3xl" className="text-white">
              Uh oh, something went wrong!
            </Title>
          </Flex>
          <div className="space-y-4 text-center">
            <p className="text-white">
              Could not fetch our data from the server. Please refresh the page.
            </p>
            <p className="text-white">
              We{"'"}ve been notified of this issue and will fix it as soon as
              we can.
            </p>
          </div>
        </div>
      )}
      <button onClick={() => modals.test({})}>press</button>
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
        error: null,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        sanityData: undefined,
        error,
      },
      revalidate: 10,
    };
  }
}

export default Home;
