import TextInfoMobile from "./TextInfoMobile";

export default function OtherInfoMobile() {
  return (
    <ol className="flex flex-col gap-8 mb-10">
      <li>
        <TextInfoMobile
          title="Experiência"
          description="1 mês trabalhando como bolsista no ITNC - IFRN, desenvolvendo aplicações web."
        />
      </li>
      <li>
        <TextInfoMobile
          title="Educação"
          description="Tecnólogo em Análise e Desenvolvimento de Sistemas - Instituto Federal do Rio Grande do Norte"
        />
      </li>
    </ol>
  );
}
