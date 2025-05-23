import { IconMoods } from "@/ui-components/lib/Icons/Index";
import { Text } from "@/ui-components/index";

const Logo = () => {
  return (
    <div className="flex flex-row items-center justify-start gap-1">
      <div className="flex flex-row items-center justify-center p-2 rounded-md bg-dark-blue aspect-square w-8 h-8">
        <IconMoods className="w-6 h-6 text-white" />
      </div>
      <Text className="text-xl">Mood Tracker</Text>
    </div>
  );
};

export default Logo;
