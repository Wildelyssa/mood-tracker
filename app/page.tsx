import AppHeader from "./components/Header/AppHeader";
import WelcomeText from "./components/Header/WelcomeText";

export default function Home() {
  return (
    <div className="py-4 px-2 w-full flex flex-col items-center justify-center bg-linear-to-b/srgb from-primary-6 to primary-1 min-h-screen">
      <div className="flex flex-col w-[1600px] min-h-screen">
        <AppHeader />
        <WelcomeText />
        <main className="flex flex-col"></main>
      </div>
    </div>
  );
}
