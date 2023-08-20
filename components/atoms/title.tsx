import React from "react";
import { AllSpringSizes } from "../../types/spring-sizes";
import setClasses from "../../util/set-classes";

export interface TitleProps extends React.ComponentPropsWithoutRef<"h1"> {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  size?: keyof AllSpringSizes;
}

const titleSize: AllSpringSizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ tag: Tag = "h1", size = "md", children, className, ...rest }, ref) => {
    const classNames = setClasses([titleSize[size], className]);
    return (
      <Tag className={classNames} {...rest} ref={ref}>
        {children}
      </Tag>
    );
  }
);

Title.displayName = "Title";

export default Title;
