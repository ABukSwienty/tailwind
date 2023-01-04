import { useContext } from "react";
import { GlobalContext } from "../../provider/global";

// pretty hacky but needed to link to the service section
const ServicesLinkContainer = () => {
  const { serviceRef } = useContext(GlobalContext);
  return <div ref={serviceRef} />;
};

export default ServicesLinkContainer;
