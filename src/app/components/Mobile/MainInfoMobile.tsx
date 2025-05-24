import Image from "next/image";
import ContactMobile from "./ContactMobile";
import LanguagesMobile from "./LanguagesMobile";

export default function MainInfoMobile() {
  return (
    <main className="flex flex-col py-5 w-full items-center">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <h1 className="text-my-yellow font-extrabold text-3xl">
            NICOLLAS PRADO
          </h1>
          <h3 className="text-my-purple-subtitle font-semibold text-xl">
            Desenvolvedor de Software
          </h3>
        </div>

        <div className="relative w-full max-w-[25rem] aspect-[1/1] shadow-2xl">
          <Image
            src={"/PhotoMe.png"}
            alt="Foto de mim mesmo"
            fill
            className="object-contain"
          />
        </div>

        <ol className="flex flex-col justify-between gap-8">
          <li>
            <ContactMobile />
          </li>
          <li>
            <LanguagesMobile />
          </li>
        </ol>
      </div>
    </main>
  );
}
