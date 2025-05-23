import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const variants = cva("", {
  variants: {
    weight: {
      bold: "font-bold",
      normal: "font-normal",
      medium: "font-medium",
    },
    size: {
      xxl: "text-xxl",
      xl: "text-xl",
      lg: "text-lg",
      md: "text-md",
      sm: "text-sm",
      xs: "text-xs",
      xxs: "text-xxs",
      none: "",
    },
    color: {
      inherit: "inherit",
      white: "text-white",
      subtle: "text-gray",
      error: "text-error",
      black: "text-black",
    },
  },
  defaultVariants: {
    weight: "medium",
    size: "md",
    color: "inherit",
  },
});

export interface Props
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "color">,
    VariantProps<typeof variants> {
  as?: "span" | "p";
}

const Text = React.forwardRef<HTMLParagraphElement, Props>(
  (
    { as = "span", weight, size, color, children, className, ...props },
    ref
  ) => {
    const classes = cn(variants({ weight, size, color, className }));
    switch (as) {
      case "span":
        return (
          <span className={classes} {...props} ref={ref}>
            {children}
          </span>
        );
      case "p":
        return (
          <p className={classes} {...props} ref={ref}>
            {children}
          </p>
        );
    }
  }
);

Text.displayName = "Text";
export default Text;
