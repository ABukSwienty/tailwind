import type { NextPage } from "next";
import PageLayout from "../components/layouts/page-layout";
import Intro from "../components/organisms/intro";
import Landing from "../components/organisms/landing";
import See from "../components/organisms/see";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Landing />
      <Intro />
      <See />
      <See />
    </PageLayout>
  );
};

export default Home;
