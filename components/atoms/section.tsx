import { SpringColors } from "../../types/spring-colors";
import setClasses from "../../util/set-classes";

export interface SectionProps
  extends React.ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
  color?: keyof typeof sectionColors;
}

const sectionColors: Pick<SpringColors, "brand" | "accent" | "light" | "dark"> =
  {
    brand: "bg-brand",
    accent: "bg-accent",
    light: "bg-gray-50",
    dark: "bg-gray-800",
  };

const Section = ({
  children,
  color = "light",
  className,
  ...rest
}: SectionProps) => {
  const classNames = setClasses([
    "h-fit min-h-screen w-screen",
    className,
    sectionColors[color],
  ]);

  return <section className={classNames}>{children}</section>;
};

export default Section;
