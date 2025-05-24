interface TextInfoProps {
  title: string;
  description: string;
}

export default function TextInfo({ title, description }: TextInfoProps) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-my-purple-info-title text-3xl font-medium">
        {title}
      </h2>

      <p className="text-my-purple-text text-xl font-medium max-w-120">
        {description}
      </p>
    </section>
  );
}
