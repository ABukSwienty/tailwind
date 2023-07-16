import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import setClasses from "../../util/set-classes";
import { modals } from "../molecules/modal/modals";
import Button, { ButtonProps } from "./button";

export interface CTAProps extends Omit<ButtonProps, "children" | "onClick"> {}

const CTA = ({
  color = "secondary",
  className = "bg-accent font-semibold ring-offset-accent",
  trailingIcon = PaperAirplaneIcon,
  ...rest
}: CTAProps) => {
  const classNames = setClasses([className]);
  return (
    <Button
      color={color}
      className={classNames}
      trailingIcon={trailingIcon}
      onClick={() => {
        modals.contact({});
      }}
      {...rest}
    >
      Get in touch
    </Button>
  );
};

export default CTA;
