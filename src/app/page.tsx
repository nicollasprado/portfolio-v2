"use client";

import { useState } from "react";
import { Code, User } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Home from "./components/Home";

export default function Main() {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div className="flex flex-col items-center h-full">
      <nav className="flex gap-15 mt-5">
        <ol className="flex gap-10 text-foreground font-semibold text-xl">
          <li>
            <button
              type="button"
              className={`cursor-pointer flex items-center gap-2 ${
                selectedPage === "home" && "text-sky-200"
              }`}
              onClick={() => setSelectedPage("home")}
            >
              <User /> Sobre
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`cursor-pointer flex items-center gap-2 ${
                selectedPage === "projects" && "text-sky-200"
              }`}
              onClick={() => setSelectedPage("projects")}
            >
              <Code /> Projetos
            </button>
          </li>
        </ol>
      </nav>

      <AnimatePresence>
        {selectedPage === "home" && (
          <motion.div
            key={selectedPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {selectedPage === "home" && <Home />}
          </motion.div>
        )}
      </AnimatePresence>

      {/* xl:flex
          <div className="hidden flex-col justify-start">
            <h2 className="text-my-purple-info-title font-medium text-3xl">
              Projetos
            </h2>
            <ProjectCard
              title="Minervaguess"
              description="Site de palpites em tempo real de partidas de League of Legends."
              githubUrl="a"
              technologies={["Next.js", "Typescript", "Postgres", "Redis"]}
            />
          </div> */}
    </div>
  );
}
