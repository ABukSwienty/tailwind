import type { NextPage } from "next";

import PageLayout from "../components/layouts/page-layout";
import Engage from "../components/organisms/engage";

import Go from "../components/organisms/go";
import Intro from "../components/organisms/intro";
import Landing from "../components/organisms/landing";
import See from "../components/organisms/see";

const containers = [];

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Landing />
      <Intro />
      <See />
      <Go />
      <Engage />
      {/* <About /> */}
    </PageLayout>
  );
};

export default Home;
