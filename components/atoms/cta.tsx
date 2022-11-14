import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { GlobalContext } from "../../provider/global";
import setClasses from "../../util/set-classes";
import Button, { ButtonProps } from "./button";

export interface CTAProps extends Omit<ButtonProps, "children" | "onClick"> {}

const CTA = ({
  color = "secondary",
  className = "bg-accent font-semibold ring-offset-accent",
  trailingIcon = PaperAirplaneIcon,
  ...rest
}: CTAProps) => {
  const { modalStore } = useContext(GlobalContext);
  const handleModal = () => modalStore.set({ show: true });
  const classNames = setClasses([className]);
  return (
    <Button
      color={color}
      className={classNames}
      trailingIcon={trailingIcon}
      onClick={handleModal}
      {...rest}
    >
      Get in touch
    </Button>
  );
};

export default CTA;
