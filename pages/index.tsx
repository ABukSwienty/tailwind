import type { NextPage } from "next";
import PageLayout from "../components/layouts/page-layout";
import About from "../components/organisms/about";
import Cases from "../components/organisms/cases";
import Intro from "../components/organisms/intro";
import Landing from "../components/organisms/landing";
import Accelerate from "../components/organisms/service-sections/accelerate";
import Communicate from "../components/organisms/service-sections/communicate";
import Educate from "../components/organisms/service-sections/educate";
import Prepare from "../components/organisms/service-sections/prepare";
import Understand from "../components/organisms/service-sections/understand";

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

      <About />
      <Cases />
    </PageLayout>
  );
};

export default Home;
