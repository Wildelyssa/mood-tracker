import { Heading } from "@/ui-components";
import IconInfo from "@/ui-components/lib/Icons/Info";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-row gap-1">
      <Heading as="h2">{title}</Heading>
      <IconInfo />
    </div>
  );
};

export default SectionHeader;
