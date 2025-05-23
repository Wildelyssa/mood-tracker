import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import MinimalLoader from "../Loader/MinimalLoader";
import { cn } from "@/lib/utils";

const variants = cva(
  "flex items-center flex-shrink-0 justify-center transition-colors focus:outline-none focus-visible:ring-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40 active:scale-95",
  {
    variants: {
      size: {
        xs: "h-6 w-6 [&>svg]:h-3 [&>svg]:w-3 rounded-[3px]",
        sm: "h-8 w-8 [&>svg]:h-5 [&>svg]:w-5 rounded-[3px]",
        md: "h-10 w-10 [&>svg]:h-6 [&>svg]:w-6 rounded-[5px]",
        lg: "h-12 w-12 [&>svg]:h-7 [&>svg]:w-7 rounded-[7px]",
      },
      variant: {
        primary:
          "bg-dark-blue text-white hover:dark-blue-600/90 hover:ring-dark-blue/30 hover:ring-1 hover:ring-offset-2 shadow-[inset_0_1px_0_rgba(54, 101, 125, 0.3),inset_0_10px_16px_0_rgba(20, 241, 252, 0.3),inset_0_-1px_0_rgba(54, 101, 125, 0.3,inset_0_-10px_10px_rgba(54, 101, 125, 0.4)] focus-visible:ring-dark-blue/40 disabled:bg-transparent disabled:text-gray disabled:shadow-none",
        minimal: "text-gray hover:text-white disabled:gray",
        secondary:
          "bg-primary-3 text-white hover:border-white border border-gray disabled:border-gray",
        outline:
          "border border-gray text-gray hover:text-white hover:border-white",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "secondary",
    },
  }
);

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  isBusy?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, size, variant, isBusy, children, ...props }, ref) => {
    const loaderSize = size === "sm" ? 16 : size === "md" ? 20 : 24;

    return (
      <button
        className={cn(variants({ size, variant, className }))}
        ref={ref}
        {...props}
      >
        {isBusy ? <MinimalLoader size={loaderSize} /> : children}
      </button>
    );
  }
);
IconButton.displayName = "IconButton";

export default IconButton;

export { variants };
