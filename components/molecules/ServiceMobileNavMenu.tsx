import { useMemo } from "react";
import useVanillaNavigate from "../../hooks/use-vanilla-navigate";
import { useServiceLinks } from "../../stores/global";
import { useMobileNavActions } from "../../stores/mobile-nav";
import { useSplashActions } from "../../stores/splash";
import MobileNav from "./mobile-nav";

const ServiceLink = ({
  id,
  title,
  subTitle,
}: {
  id: string;
  title: string;
  subTitle: string;
}) => {
  const nav = useVanillaNavigate({ id });

  const splashActions = useSplashActions();
  const mobileNavActions = useMobileNavActions();

  const handleNav = () => {
    splashActions.subscribe("willAnimateIn", mobileNavActions.setClose, true);

    splashActions.show();

    splashActions.subscribe("didAnimateIn", nav, true);
  };

  return (
    <MobileNav.Item size="sm" onClick={handleNav}>
      {title}
      <p className="mx-auto max-w-xs pt-2 text-sm font-medium">{subTitle}</p>
    </MobileNav.Item>
  );
};

const ServiceMobileNavMenu = () => {
  const data = useServiceLinks();

  const renderables = useMemo(
    () =>
      data.map((d) => (
        <ServiceLink
          key={d.id}
          id={d.id}
          title={d.title}
          subTitle={d.subTitle}
        />
      )),
    [data]
  );

  return <MobileNav.Menu label="our services">{renderables}</MobileNav.Menu>;
};

export default ServiceMobileNavMenu;
