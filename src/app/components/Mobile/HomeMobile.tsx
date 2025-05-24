import MainInfoMobile from "./MainInfoMobile";
import OtherInfoMobile from "./OtherInfoMobile";

export default function HomeMobile() {
  return (
    <div className="flex flex-col justify-evenly w-[100dvw] h-full items-center px-5">
      <MainInfoMobile />
      <OtherInfoMobile />
    </div>
  );
}
