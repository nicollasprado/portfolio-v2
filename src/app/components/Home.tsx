import MainInfo from "./MainInfo";
import OtherInfo from "./OtherInfo";

export default function Home() {
  return (
    <div className="flex flex-col justify-evenly w-[100dvw] h-full items-center">
      <MainInfo />
      <OtherInfo />
    </div>
  );
}
