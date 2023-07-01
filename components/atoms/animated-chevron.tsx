import { ChevronDownIcon } from "@heroicons/react/24/solid";
import setClasses from "../../util/set-classes";

export interface AnimatedChevronProps extends React.ComponentProps<"svg"> {
  isOpen: boolean;
  containerClassName?: string;
}

const AnimatedChevron = ({
  isOpen,
  containerClassName,
  ...rest
}: AnimatedChevronProps) => {
  const classNames = setClasses([
    `origin-center transition-transform duration-300 ease-in-out ${
      isOpen ? "rotate-180" : "rotate-0"
    }`,
    containerClassName,
  ]);
  return (
    <div className={classNames}>
      <ChevronDownIcon {...rest} />
    </div>
  );
};

export default AnimatedChevron;
