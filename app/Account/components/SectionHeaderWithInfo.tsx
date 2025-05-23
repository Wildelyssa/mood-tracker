import { Heading } from "@/ui-components";
import IconInfo from "@/ui-components/lib/Icons/Info";

const SectionHeader = ({
  title,
  variant = "h3",
}: {
  title: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  return (
    <div className="flex flex-row gap-1">
      <Heading as={variant}>{title}</Heading>
      <IconInfo />
    </div>
  );
};

export default SectionHeader;
