import TextInfo from "./TextInfo";

export default function OtherInfo() {
  return (
    <ol className="flex">
      <li>
        <TextInfo
          title="Experiência"
          description="1 mês trabalhando como bolsista no ITNC - IFRN, desenvolvendo aplicações web."
        />
      </li>
      <li>
        <TextInfo
          title="Educação"
          description="Tecnólogo em Análise e Desenvolvimento de Sistemas - Instituto Federal do Rio Grande do Norte"
        />
      </li>
    </ol>
  );
}
