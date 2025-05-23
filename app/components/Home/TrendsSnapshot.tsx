import { Label, Prose, Text } from "@/ui-components";
import { IconProps } from "@/ui-components/lib/Icons/Icon";
import Card from "../Card/Card";
import { cn } from "@/lib/utils";

const TrendsSnapshot = ({
  icon: Icon,
  value,
  details,
  title,
  cardClasses,
}: {
  icon: React.ComponentType<IconProps>;
  title: string;
  value: string;
  details: string;
  cardClasses?: string;
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <Label>{title}</Label>
      <Card
        className={cn(
          "bg-primary-3 border-none shadow-none w-full items-center justify-center",
          cardClasses
        )}
      >
        <div className="flex flex-col gap-1 w-full items-center justify-center">
          <div className="flex flex-row gap-1 items-center">
            <Icon />
            <Text>{value}</Text>
          </div>
          <Prose className="text-gray">{details}</Prose>
        </div>
      </Card>
    </div>
  );
};

export default TrendsSnapshot;
