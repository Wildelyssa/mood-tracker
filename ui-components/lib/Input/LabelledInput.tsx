import { cn } from "@/lib/utils";

interface Props {
  label: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  id: string;
  className?: string;
  labelClassName?: string;
}

const LabeledInput = ({
  children,
  labelClassName,
  className,
  label,
  id,
  size,
}: Props) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <label
        htmlFor={id}
        className={cn(
          "block font-medium text-gray",
          size === "xs" && "mb-1 text-xs",
          size === "sm" && "mb-1 text-sm",
          size === "md" && "text-md mb-1.5",
          size === "lg" && "mb-1.5 text-lg",
          size === "xl" && "mb-1.5 text-xl",
          labelClassName
        )}
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default LabeledInput;
