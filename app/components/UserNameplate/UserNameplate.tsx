import Image from "next/image";
import NamePlate from "./NamePlate";
import IconHappy from "@/ui-components/lib/Icons/Happy";

const UserNameplate = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col items-center justify-center relative">
        <Image
          className="rounded-full border-2 border-dark-blue"
          src="/images/profile-pic-example.jpg"
          alt="This will be username"
          width={40}
          height={40}
        />
        <div className="bg-dark-blue rounded-full flex place-center absolute -top-0 -left-2">
          <IconHappy className="text-white w-5 h-5" />
        </div>
      </div>
      <NamePlate />
    </div>
  );
};

export default UserNameplate;
