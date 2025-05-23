import { Heading, Input } from "@/ui-components";
import SectionHeaderWithInfo from "./components/SectionHeaderWithInfo";
import SectionHeader from "./components/SectionHeader";

const page = () => {
  return (
    <div className="flex flex-col">
      <Heading as="h1">Your Account</Heading>
      <Heading as="h2">Profile</Heading>
      <SectionHeaderWithInfo title="User Image" />
      <SectionHeader title="User Details" />
      <div className="flex flex-col">
        <Input
          type="text"
          label="Username"
          id="username"
          wrapperClassName="w-[220px]"
        />
        <Input
          type="text"
          label="Display Name"
          id="display-name"
          wrapperClassName="w-[220px]"
        />
      </div>
    </div>
  );
};

export default page;
