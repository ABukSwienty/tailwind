import Head from "next/head";
import Button from "../atoms/button";
import Nav from "../molecules/nav";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import WindowProgressBar from "../atoms/window-progress-bar";
import Loading from "../molecules/loading";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Loading /> */}
      <Head>
        <title>Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed z-50 w-screen backdrop-blur-sm">
        <WindowProgressBar />
        <div className="py-4 px-4">
          <Nav>
            <Nav.Link label="nav to" />
            <Nav.Link label="nav to" />
            <Nav.Link label="nav to" />
            {/* <Nav.Item>
              <Button color="accent" size="sm" trailingIcon={PaperAirplaneIcon}>
                Get in touch
              </Button>
            </Nav.Item> */}
          </Nav>
        </div>
      </header>

      <main>{children}</main>

      {/* <footer className="">footer</footer> */}
    </>
  );
};

export default PageLayout;
