import type { NextPage } from "next";

import PageLayout from "../components/layouts/page-layout";
import Accelerate from "../components/organisms/accelerate";
import Cases from "../components/organisms/cases";
import Communicate from "../components/organisms/communicate";
import Educate from "../components/organisms/educate";

import Intro from "../components/organisms/intro";
import Landing from "../components/organisms/landing";
import Prepare from "../components/organisms/prepare";
import Understand from "../components/organisms/understand";

const containers = [];

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Landing />
      <Intro />
      <Understand />
      <Accelerate />
      <Communicate />
      <Educate />
      <Prepare />

      <Cases />
      {/* <About /> */}
    </PageLayout>
  );
};

export default Home;
