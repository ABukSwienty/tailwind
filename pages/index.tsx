import type { NextPage } from "next";

import PageLayout from "../components/layouts/page-layout";
import Cases from "../components/organisms/cases";
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
      <Cases />
      {/* <About /> */}
    </PageLayout>
  );
};

export default Home;
