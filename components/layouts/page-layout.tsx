import Head from "next/head";
import { Button } from "../atoms/button";
import Nav from "../molecules/nav";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <header className="fixed w-screen py-4 px-4">
        <Nav>
          <Nav.Link label="nav to" />
          <Nav.Link label="nav to" />
          <Nav.Link label="nav to" />
          <Nav.Item>
            <Button color="accent" size="sm" trailingIcon={PaperAirplaneIcon}>
              Get in touch
            </Button>
          </Nav.Item>
        </Nav>
      </header> */}

      <main className="flex flex-col overflow-x-hidden">{children}</main>

      {/* <footer className="">footer</footer> */}
    </>
  );
};

export default PageLayout;
