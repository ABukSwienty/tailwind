import { ArrowDownIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { Button } from "../components/atoms/button";
import Section from "../components/atoms/section";
import TextHighlight from "../components/atoms/text-highlight";
import PageLayout from "../components/layouts/page-layout";
import Intro from "../components/organisms/intro";
import Landing from "../components/organisms/landing";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Landing />
      <Intro />
    </PageLayout>
  );
};

export default Home;
