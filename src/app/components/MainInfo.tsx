import Image from "next/image";
import Contact from "./Contact";
import Languages from "./Languages";

export default function MainInfo() {
  return (
    <main className="flex gap-8 w-full justify-center">
      <div className="relative w-full max-w-[25rem] aspect-[1/1] shadow-2xl">
        <Image
          src={"/PhotoMe.png"}
          alt="Foto de mim mesmo"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-my-yellow font-extrabold text-6xl">
            NICOLLAS PRADO
          </h1>
          <h3 className="text-my-purple-subtitle font-semibold text-3xl">
            Desenvolvedor de Software
          </h3>
        </div>
        <ol className="flex justify-between">
          <li>
            <Contact />
          </li>
          <li>
            <Languages />
          </li>
        </ol>
      </div>
    </main>
  );
}
