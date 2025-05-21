"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { IconProps } from "../Icons/Index";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconProps>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, ...props }, ref) => {
    return (
      <div className="relative w-max-fit">
        {Icon && (
          <Icon className="text-gray flex items-center absolute top-[50%] transform -translate-y-[50%] left-[14px]" />
        )}

        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-light-grey bg-white pl-[16px] py-1 text-sm transition-all text-mid-grey shadow-gray/40 placeholder:text-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-blue/20 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-transparent hover:border-dark-blue/20",
            Icon && "pl-[36px]",
            className
          )}
          ref={ref}
          spellCheck={false}
          autoComplete="off"
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
