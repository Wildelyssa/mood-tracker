import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const DEFAULT_SIZE = "sm";

export const labelVariants = cva(
  "font-inter uppercase relative font-condensed font-bold tracking-[0.04em]",
  {
    variants: {
      size: {
        none: "",
        xl: "text-xl",
        lg: "text-lg",
        md: "text-md",
        sm: "text-sm",
        xs: "text-xs",
        xxs: "text-xxs",
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
      size: DEFAULT_SIZE,
      color: "subtle",
    },
  }
);

export interface Props
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<HTMLSpanElement, Props>(
  ({ size = DEFAULT_SIZE, color, children, className, ...props }, ref) => {
    const classes = cn(labelVariants({ size, color, className }));

    return (
      <span className={classes} {...props} ref={ref}>
        {children}
      </span>
    );
  }
);

Label.displayName = "Label";
export default Label;
