import { Heading } from "@/ui-components";
import { ReactElement } from "react";

const SectionHeader = ({
  title,
  icon,
  variant = "h2",
}: {
  title: string;
  icon?: ReactElement;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  return (
    <div className="flex flex-row gap-1">
      <Heading as={variant}>{title}</Heading>
      {icon && icon}
    </div>
  );
};

export default SectionHeader;
