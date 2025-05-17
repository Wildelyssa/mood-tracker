import Logo from "../Logo/Logo";
import UserNameplate from "../UserNameplate/UserNameplate";

const AppHeader = () => {
  return (
    <div className="flex flex-row w-full items-start justify-between">
      <Logo />
      <UserNameplate />
    </div>
  );
};

export default AppHeader;
