import { Text } from "@/ui-components";
import { IconProps } from "@/ui-components/lib/Icons/Icon";

const SectionTitle = ({
  icon: Icon,
  title,
}: {
  icon?: React.ComponentType<IconProps>;
  title: string;
}) => {
  const iconClasses = "text-gray";
  return (
    <div className="flex flex-row gap-1 items-center">
      {Icon && <Icon className={iconClasses} />}
      <Text className="text-gray text-lg weight-semibold">{title}</Text>
    </div>
  );
};

export default SectionTitle;
