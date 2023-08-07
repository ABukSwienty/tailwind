import { useMemo } from "react";
import {
  useCurrentColor,
  useGlobalActions,
  useServiceLinks,
  useServiceNavMenu,
} from "../../stores/global";
import useVanillaNavigate from "../../hooks/use-vanilla-navigate";
import { SectionColors } from "../../types/section-colors";
import Nav from "./nav";
import { useSplashActions } from "../../stores/splash";

const titleColors: Record<SectionColors, string> = {
  brand: "text-gray-900",
  accent: "text-gray-50",
  light: "text-gray-50",
  dark: "text-gray-900",
};

const subTitleColors: Record<SectionColors, string> = {
  brand: "text-gray-600",
  accent: "text-gray-100",
  light: "text-gray-100",
  dark: "text-gray-600",
};

const hoverColors: Record<SectionColors, string> = {
  brand: "hover:bg-gray-200",
  accent: "hover:bg-brand-600",
  light: "hover:bg-gray-600",
  dark: "hover:bg-gray-600",
};

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
  const globalActions = useGlobalActions();
  const actions = useSplashActions();
  const color = useCurrentColor();

  const titleColor = titleColors[color];
  const subTitleColor = subTitleColors[color];
  const hoverColor = hoverColors[color];

  const handleNav = () => {
    const handleCloseServiceNav = () =>
      globalActions.setIsServiceNavOpen(false);

    actions.subscribe("willAnimateIn", handleCloseServiceNav, true);

    actions.show();

    actions.subscribe("didAnimateIn", nav, true);
  };

  return (
    <li
      onClick={handleNav}
      role="link"
      className={`flex max-w-xs cursor-pointer flex-col justify-start rounded-md p-2 transition-all duration-300 ease-in-out ${hoverColor} ${titleColor}`}
    >
      <h2 className="text-lg font-medium">{title.toUpperCase()}</h2>
      <p className={`text-sm ${subTitleColor}`}>{subTitle}</p>
    </li>
  );
};

const ServiceLinks = () => {
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

  return <ul className="grid grid-cols-2 gap-4">{renderables}</ul>;
};

const ServiceNavMenu = () => {
  const isOpen = useServiceNavMenu();
  const actions = useGlobalActions();

  return (
    <Nav.Menu
      isOpen={isOpen}
      handleOpen={actions.setIsServiceNavOpen}
      label="our services"
    >
      <ServiceLinks />
    </Nav.Menu>
  );
};

export default ServiceNavMenu;
