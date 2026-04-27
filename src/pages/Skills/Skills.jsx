import React from "react";
import NavBar from "../../components/NavBar";
import SkillBadget from "./components/SkillBadget";

export default function Skills() {
  return (
    <div>
      <NavBar />
      <div className="py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <SkillBadget />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl">
              Mis{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Habilidades
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-gray-500 sm:text-xl mt-6">
              Tecnologías y herramientas que domino, organizadas por área de especialización
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
