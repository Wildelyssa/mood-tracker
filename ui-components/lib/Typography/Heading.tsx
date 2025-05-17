import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const variants = cva("font-[600] relative font-header", {
  variants: {
    size: {
      xxl: "text-6xl",
      xl: "text-5xl",
      lg: "text-4xl",
      md: "text-3xl",
      sm: "text-2xl",
      xs: "text-xl",
      xxs: "text-lg",
      none: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof variants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, Props>(
  ({ as = "h1", size, children, className, ...props }, ref) => {
    const classes = cn(variants({ size, className }));
    switch (as) {
      case "h1":
        return (
          <h1 className={classes} {...props} ref={ref}>
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2 className={classes} {...props} ref={ref}>
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3 className={classes} {...props} ref={ref}>
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4 className={classes} {...props} ref={ref}>
            {children}
          </h4>
        );
      case "h5":
        return (
          <h5 className={classes} {...props} ref={ref}>
            {children}
          </h5>
        );
      case "h6":
        return (
          <h6 className={classes} {...props} ref={ref}>
            {children}
          </h6>
        );
    }
  }
);

Heading.displayName = "Heading";
export default Heading;
