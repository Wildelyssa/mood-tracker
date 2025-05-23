import SectionTitle from "./SectionTitle";
import { cn } from "@/lib/utils";
import { IconProps } from "@/ui-components/lib/Icons/Icon";

const SectionWrapper = ({
  children,
  title,
  icon,
  className,
}: {
  children: React.ReactNode;
  title: string;
  icon?: React.ComponentType<IconProps>;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <SectionTitle title={title} icon={icon} />
      {children}
    </div>
  );
};

export default SectionWrapper;
