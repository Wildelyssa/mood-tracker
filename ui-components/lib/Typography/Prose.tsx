import { cn } from "@/lib/utils";

export interface Props {
  as?: "span" | "p";
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  className?: string;
}

const Prose = ({
  as = "p",
  size = "md",
  className,
  children,
  ...props
}: Props) => {
  let classes = "leading-[160%] font-normal";

  if (size === "xs") {
    classes += " text-[0.7rem]";
  } else if (size === "sm") {
    classes += " text-[0.875rem]";
  } else if (size === "md") {
    classes += " text-[1rem]";
  } else if (size === "lg") {
    classes += " text-[1.125rem]";
  } else if (size === "xl") {
    classes += " text-[1.25rem]";
  }

  switch (as) {
    case "span":
      return (
        <span className={cn(classes, className)} {...props}>
          {children}
        </span>
      );
    case "p":
      return (
        <p className={cn(classes, className)} {...props}>
          {children}
        </p>
      );
  }
};

export default Prose;
