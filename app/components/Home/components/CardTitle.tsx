import { cn } from "@/lib/utils";
import { Text } from "@/ui-components";
import { IconProps } from "@/ui-components/lib/Icons/Index";

const CardTitle = ({
  title,
  loggedItem,
  icon: Icon,
  iconClasses,
}: {
  title: string;
  loggedItem?: string;
  icon?: React.ComponentType<IconProps>;
  iconClasses?: string;
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-1">
        {Icon && <Icon className={cn("h-8 w-8 text-gray", iconClasses)} />}
        <Text className="text-gray" size="lg">
          {title}
        </Text>
      </div>

      {loggedItem && <Text size="xl">{loggedItem}</Text>}
    </div>
  );
};

export default CardTitle;
