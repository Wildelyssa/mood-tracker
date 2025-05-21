"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTooltip = TooltipPrimitive.Tooltip;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipArrow = TooltipPrimitive.Arrow;

const TooltipPortal = TooltipPrimitive.Portal;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 5, children, side = "bottom", ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    side={side}
    className={cn(
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 rounded-[6px] bg-white px-2.5 py-1.5 text-[0.75rem] font-bold leading-[120%] text-black",
      className
    )}
    {...props}
  >
    {children}
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

interface Props {
  children: React.ReactNode;
  label: string | React.ReactNode;
  asChild?: boolean;
  className?: string;
  delayDuration?: number;
  side?: "top" | "bottom" | "left" | "right";
  triggerClassName?: string;
  hideArrow?: boolean;
  disableHoverableContent?: boolean;
  collisionPadding?: number;
  arrowClassName?: string;
}

const Tooltip = ({
  children,
  label,
  asChild,
  className,
  delayDuration = 200,
  side,
  triggerClassName,
  hideArrow,
  collisionPadding,
  arrowClassName,
}: Props) => (
  <TooltipProvider delayDuration={delayDuration}>
    <TooltipRoot>
      <TooltipTrigger
        asChild={asChild}
        className={cn("inline-flex", triggerClassName)}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent
        collisionPadding={collisionPadding}
        side={side}
        className={cn(
          "max-w-[200px] leading-[130%] shadow-[0_0_4px_rgb(var(--color-black)/0.2)]",
          className
        )}
      >
        {label}
        {!hideArrow && (
          <TooltipArrow className={cn("fill-white", arrowClassName)} />
        )}
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
);

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipPortal,
  TooltipRoot,
  TooltipTooltip,
  TooltipArrow,
};
