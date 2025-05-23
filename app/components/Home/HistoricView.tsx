import { Label } from "@/ui-components";
import Card from "../Card/Card";
import {
  IconHappy,
  IconSleep,
  IconTrends,
} from "@/ui-components/lib/Icons/Index";
import SectionWrapper from "./SectionWrapper";
import TrendsSnapshot from "./TrendsSnapshot";

const HistoricView = () => {
  return (
    <SectionWrapper title="Average 5 check-ins" icon={IconTrends}>
      <div className="grid grid-cols-[1fr_2fr] gap-4">
        <Card className="gap-4">
          <TrendsSnapshot
            icon={IconHappy}
            title="Average Mood"
            value="Neutral"
            details="Same as the previous 5 chick-ins"
            cardClasses="bg-primary-4 "
          />
          <TrendsSnapshot
            icon={IconSleep}
            title="Average Sleep"
            value="5-6 hours"
            details="Increase from the last 5 check-ins"
          />
        </Card>

        <Card>
          <Label>Mood and sleep trends</Label>
          Chart here
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default HistoricView;
