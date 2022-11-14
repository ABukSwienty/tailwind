import Head from "next/head";
import Nav from "../molecules/nav";
import WindowProgressBar from "../atoms/window-progress-bar";
import useNavTo from "../../hooks/use-nav-to";
import { useCallback, useContext } from "react";
import { GlobalContext } from "../../provider/global";
import MobileNav from "../molecules/mobile-nav";
import Loading from "../molecules/loading";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { casesRef, understandRef, navHideStore, mobileNavStore, aboutRef } =
    useContext(GlobalContext);

  const navService = useNavTo(understandRef);
  const navCases = useNavTo(casesRef);
  const navAbout = useNavTo(aboutRef);

  const handleMdNavServices = useCallback(() => {
    navHideStore.set({ show: true, callback: navService });
  }, [navHideStore, navService]);

  const handleMdNavCases = useCallback(() => {
    navHideStore.set({ show: true, callback: navCases });
  }, [navHideStore, navCases]);

  const handleMdNavAbout = useCallback(() => {
    navHideStore.set({ show: true, callback: navAbout });
  }, [navHideStore, navAbout]);

  const handleSMNavServices = useCallback(() => {
    navService();
    mobileNavStore.set({ show: false });
  }, [mobileNavStore, navService]);

  const handleSMNavCases = useCallback(() => {
    navCases();
    mobileNavStore.set({ show: false });
  }, [mobileNavStore, navCases]);

  const handleSMNavAbout = useCallback(() => {
    navAbout();
    mobileNavStore.set({ show: false });
  }, [mobileNavStore, navAbout]);

  return (
    <>
      <Loading />
      <Head>
        <title>
          Tailwind Co. is a sustainability advisory that help turn headwind into
          tailwind for our clients and planet Earth.
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed z-50 w-screen backdrop-blur-sm">
        <WindowProgressBar />
        <div className="py-4 px-4">
          <Nav>
            <Nav.Link onClick={handleMdNavServices} label="our services" />
            <Nav.Link onClick={handleMdNavAbout} label="about" />
            <Nav.Link onClick={handleMdNavCases} label="cases" />
          </Nav>
          <MobileNav>
            <MobileNav.Item onClick={handleSMNavServices}>
              our services
            </MobileNav.Item>
            <MobileNav.Item onClick={handleSMNavCases}>cases</MobileNav.Item>
            <MobileNav.Item onClick={handleSMNavAbout}>about</MobileNav.Item>
          </MobileNav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="h-12 bg-brand text-center text-white">
        <p>© tailwind co. 2022</p>
      </footer>
    </>
  );
};

export default PageLayout;
