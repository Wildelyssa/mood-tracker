import { Text, Heading } from "@/ui-components/index";
const WelcomeText = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <Text weight="bold" className="text-dark-blue text-2xl">
        Hello Lysa!
      </Text>
      <Heading className="font-inter" as="h1" size="lg">
        How are you feeling today?
      </Heading>
    </div>
  );
};

export default WelcomeText;
