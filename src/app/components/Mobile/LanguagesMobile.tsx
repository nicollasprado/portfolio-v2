export default function LanguagesMobile() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-my-purple-info-title text-2xl font-medium text-center">
        Idiomas
      </h2>

      <ol className="flex gap-8">
        <li className="text-my-purple-text text-lg font-medium">
          🇺🇸 EN Avançado
        </li>
        <li className="text-my-purple-text text-lg font-medium">
          🇧🇷 PT-BR Nativo
        </li>
      </ol>
    </div>
  );
}
