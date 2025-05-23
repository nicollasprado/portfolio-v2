import { Github, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-my-purple-info-title text-3xl font-medium">
        Contato
      </h2>

      <ol className="flex gap-6">
        <li>
          <a
            href="https://github.com/nicollasprado"
            className="p-3 inline-block border-1 rounded-full w-fit text-my-purple-text hover:text-amber-200 transition duration-400 cursor-pointer"
            target="_blank"
            title="Github"
          >
            <Github />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nicollas-prado-420082302/"
            className="p-3 inline-block border-1 rounded-full text-my-purple-text hover:text-amber-200 transition duration-400 cursor-pointer"
            target="_blank"
            title="Linkedin"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nicollasmp/"
            className="p-3 inline-block border-1 rounded-full text-my-purple-text hover:text-amber-200 transition duration-400 cursor-pointer"
            target="_blank"
            title="Instagram"
          >
            <Instagram />
          </a>
        </li>
      </ol>
    </div>
  );
}
