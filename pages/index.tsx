import type { NextPage } from "next";
import Section from "../components/atoms/section";
import PageLayout from "../components/layouts/page-layout";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Section className="flex items-end px-4 py-8" color="brand">
        <h1 className="text-9xl font-black text-white">
          <span className="font-garamond font-light italic">turn</span> HEADWIND{" "}
          <br />
          <span className="font-garamond font-light italic">into</span> TAILWIND
        </h1>
      </Section>
    </PageLayout>
  );
};

export default Home;
