import {
  IconCalendar,
  IconMoods,
  IconSleep,
  IconVeryHappy,
} from "@/ui-components/lib/Icons/Index";
import Card from "../Card/Card";
import { Button, Text, Label } from "@/ui-components";
import CardTitle from "./components/CardTitle";
import SectionWrapper from "./SectionWrapper";

const TodaysMood = () => {
  // if mood, show mood otherwise show button
  const moodLogged = true;
  // get today's date in correct format=> make function
  const todaysDate = "Thursday, 15th May 2025";
  return (
    <>
      {!moodLogged && (
        <SectionWrapper title={todaysDate} icon={IconCalendar}>
          <Card className="items-center justify-center">
            <Button size="lg" endIcon={IconMoods}>
              Log today's mood
            </Button>
          </Card>
        </SectionWrapper>
      )}
      {moodLogged && (
        <SectionWrapper title={todaysDate} icon={IconCalendar}>
          <div className="grid grid-cols-[2fr_1fr] gap-4 items-stretch">
            <Card className="h-full flex-row justify-between">
              <CardTitle title="I'm feeling" loggedItem="Very Happy" />
              <IconVeryHappy className=" text-dark-blue -top-8 right-0 h-52 w-52" />
            </Card>
            <div className="flex flex-col gap-4 h-full">
              <Card className="flex-1">
                <CardTitle
                  title="Sleep"
                  icon={IconSleep}
                  loggedItem="9+ hours"
                />
              </Card>
              <Card className="flex-1">
                <CardTitle title="Today's Reflection" />
              </Card>
            </div>
          </div>
        </SectionWrapper>
      )}
    </>
  );
};

export default TodaysMood;
