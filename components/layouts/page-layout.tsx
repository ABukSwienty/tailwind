import Head from "next/head";
import { IDS } from "../../constants/ids";
import useVanillaNavigate from "../../hooks/use-vanilla-navigate";
import { useMobileNavActions } from "../../stores/mobile-nav";
import { useSplashActions } from "../../stores/splash";
import WindowProgressBar from "../atoms/window-progress-bar";
import ServiceMobileNavMenu from "../molecules/ServiceMobileNavMenu";
import ServiceNavMenu from "../molecules/ServiceNavMenu";
import Loading from "../molecules/loading";
import MobileNav from "../molecules/mobile-nav";
import Nav from "../molecules/nav";
import { useScrollLock } from "../../hooks/use-lock-scroll";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const navAbout = useVanillaNavigate({ id: IDS.about });
  const navCases = useVanillaNavigate({ id: IDS.cases });
  const navIntro = useVanillaNavigate({ id: IDS.introduction });

  const [lock, unlock] = useScrollLock();

  const splashActions = useSplashActions();
  const mobileNavActions = useMobileNavActions();

  const handleNavCases = () => {
    mobileNavActions.setClose();
    splashActions.show();
    splashActions.subscribe("didAnimateIn", navCases, true);
  };

  const handleNavAbout = () => {
    mobileNavActions.setClose();
    splashActions.show();
    splashActions.subscribe("didAnimateIn", navAbout, true);
  };

  const handleLogoClick = () => {
    mobileNavActions.setClose();
    splashActions.show();
    splashActions.subscribe("didAnimateIn", () => navIntro, true);
  };

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
          <Nav onClickLogo={handleLogoClick}>
            <ServiceNavMenu />
            <Nav.Link onClick={handleNavCases}>cases</Nav.Link>
            <Nav.Link onClick={handleNavAbout}>about</Nav.Link>
          </Nav>

          <MobileNav onClickLogo={handleLogoClick}>
            <ServiceMobileNavMenu />
            <MobileNav.Item onClick={handleNavCases}>cases</MobileNav.Item>
            <MobileNav.Item onClick={handleNavAbout}>about</MobileNav.Item>
          </MobileNav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="flex h-20 items-center justify-center bg-brand text-center text-white">
        <p>© tailwind co. 2022</p>
      </footer>
    </>
  );
};

export default PageLayout;
