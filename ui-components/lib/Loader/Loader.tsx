import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  size?: number;
  className?: string;
}

const Loader = ({ size = 60, className }: Props) => {
  return (
    <div
      className={cn("loader animate-[spin_0.9s_linear_infinite]", className)}
      style={{
        width: size,
        height: size,
        maxWidth: size,
        maxHeight: size,
      }}
    />
  );
};

export default Loader;
