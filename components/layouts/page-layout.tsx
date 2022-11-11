import Head from "next/head";
import Nav from "../molecules/nav";
import WindowProgressBar from "../atoms/window-progress-bar";
import useNavTo from "../../hooks/use-nav-to";
import { useCallback, useContext } from "react";
import { GlobalContext } from "../../provider/global";
import MobileNav from "../molecules/mobile-nav";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { casesRef, understandRef, navHideStore, mobileNavStore } =
    useContext(GlobalContext);

  const navService = useNavTo(understandRef);
  const navCases = useNavTo(casesRef);

  const handleMdNavServices = useCallback(() => {
    navHideStore.set({ show: true, callback: navService });
  }, [navHideStore, navService]);

  const handleMdNavCases = useCallback(() => {
    navHideStore.set({ show: true, callback: navCases });
  }, [navHideStore, navCases]);

  const handleSMNavServices = useCallback(() => {
    navService();
    mobileNavStore.set({ show: false });
  }, [mobileNavStore, navService]);

  const handleSMNavCases = useCallback(() => {
    navCases();
    mobileNavStore.set({ show: false });
  }, [mobileNavStore, navCases]);

  return (
    <>
      <Head>
        <title>Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed z-50 w-screen backdrop-blur-sm">
        <WindowProgressBar />
        <div className="py-4 px-4">
          <Nav>
            <Nav.Link onClick={handleMdNavServices} label="our services" />
            <Nav.Link onClick={handleMdNavCases} label="cases" />
            <Nav.Link label="about" />
          </Nav>
          <MobileNav>
            <MobileNav.Item onClick={handleSMNavServices}>
              our services
            </MobileNav.Item>
            <MobileNav.Item onClick={handleSMNavCases}>cases</MobileNav.Item>
            <MobileNav.Item onClick={() => {}}>about</MobileNav.Item>
          </MobileNav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-brand">footer</footer>
    </>
  );
};

export default PageLayout;
