"use client";
import { cn } from "@/lib/utils";
import React, { SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGSVGElement> {}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ children, className, fill = "currentColor", stroke, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        className={cn("h-6 w-6 flex-shrink-0", className)}
        {...props}
      >
        {children}
      </svg>
    );
  }
);
