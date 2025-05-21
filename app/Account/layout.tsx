import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "Your Account details and settings",
};

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="mx-auto flex w-full max-w-6xl flex-col">{children}</div>
    </>
  );
};

export default AccountLayout;
