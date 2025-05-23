import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex gap-8">
        <div className="relative w-full max-w-[25rem] aspect-[1/1] shadow-2xl">
          <Image
            src={"/PhotoMe.png"}
            alt="Foto de mim mesmo"
            fill
            className="object-contain"
          />
        </div>

        <section className="flex flex-col gap-4">
          <h1 className="text-my-yellow font-extrabold text-6xl">
            NICOLLAS PRADO
          </h1>
          <h3 className="text-my-purple-subtitle font-semibold text-3xl">
            Desenvolvedor de Software
          </h3>
        </section>
      </div>
    </div>
  );
}
