export default function Languages() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-my-purple-info-title text-3xl font-medium">
        Idiomas
      </h2>

      <ol className="flex flex-col gap-2">
        <li className="text-my-purple-text text-xl font-medium">
          🇺🇸 Inglês Fluente
        </li>
        <li className="text-my-purple-text text-xl font-medium">
          🇧🇷 Português Nativo
        </li>
      </ol>
    </div>
  );
}
