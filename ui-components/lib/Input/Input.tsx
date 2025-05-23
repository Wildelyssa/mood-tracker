"use client";

import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { IconProps } from "../Icons/Index";
import { cn } from "@/lib/utils";
import LabeledInput from "./LabelledInput";

const DEFAULT_SIZE = "md";

export const inputVariants = cva(
  "flex h-9 w-full rounded-full border border-gray bg-white pl-[16px] py-1 transition-all text-gray shadow-gray placeholder:text-gray/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-blue disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-transparent hover:border-light-blue",
  {
    variants: {
      size: {
        sm: "h-8 pl-[12px] rounded-[5px] text-xs placeholder:text-xs",
        md: "h-10 pl-[13px] rounded-[6px] text-sm placeholder:text-sm",
        lg: "h-12 pl-[16px] rounded-[8px] text-md placeholder:text-md",
      },
    },
    defaultVariants: {
      size: DEFAULT_SIZE,
    },
  }
);

export interface Props
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "size" | "id" | "color"
    >,
    VariantProps<typeof inputVariants> {
  label?: string;
  icon?: React.ComponentType<IconProps>;
  id: string;
  wrapperClassName?: string;
  labelWrapperClassName?: string;
  labelSize?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      icon: Icon,
      id,
      className,
      type,
      size = DEFAULT_SIZE,
      wrapperClassName,
      labelWrapperClassName,
      labelSize,
      ...props
    },
    ref
  ) => {
    let parsedLabelSize = labelSize || size || DEFAULT_SIZE;

    if (parsedLabelSize === "xl" || parsedLabelSize === "lg") {
      parsedLabelSize = "md";
    }

    const input = (
      <>
        <div className={cn("group relative inline-flex", wrapperClassName)}>
          {!!Icon && (
            <Icon
              className={clsx(
                "absolute top-1/2 -translate-y-1/2 transform text-gray transition-colors group-hover:text-black",
                size === "lg" && "left-[15px] h-[22px] w-[22px]",
                size === "md" && "left-[13px] h-5 w-5",
                size === "sm" && "left-[12px] h-4 w-4",
                props.value && "text-black"
              )}
            />
          )}
          <input
            id={id}
            type={type}
            className={cn(
              inputVariants({ size }),
              Icon && size === "lg" && "pl-[41px]",
              Icon && size === "md" && "pl-[37px]",
              Icon && size === "sm" && "pl-[33px]",
              className
            )}
            ref={ref}
            autoComplete="off"
            spellCheck="false"
            {...props}
          />
        </div>
      </>
    );

    if (label) {
      return (
        <LabeledInput
          className={labelWrapperClassName}
          label={label}
          size={parsedLabelSize}
          id={id}
        >
          {input}
        </LabeledInput>
      );
    }

    return input;
  }
);

export default Input;
