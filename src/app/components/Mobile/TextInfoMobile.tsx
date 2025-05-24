interface TextInfoPropsMobile {
  title: string;
  description: string;
}

export default function TextInfoMobile({ title, description }: TextInfoPropsMobile) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-my-purple-info-title text-2xl font-medium text-center">
        {title}
      </h2>

      <p className="text-my-purple-text text-lg font-medium max-w-120">
        {description}
      </p>
    </section>
  );
}
