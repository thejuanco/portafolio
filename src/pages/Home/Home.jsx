import { Link } from "react-router";
import { useEmployment } from "../../context/EmploymentContext";

import NavBar from "../../components/NavBar";
import Projects from "./components/Projects";
import SkillsAndTech from "./components/SkillsAndTech";
import Contact from "./components/Contact";
import Footer from "../../components/Footer";

const Home = () => {
  const { employment } = useEmployment()

  return (
    <div className="min-h-screen">
      <NavBar />
      <section className="py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <span class="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 inset-ring inset-ring-blue-700/10">
            <span class="h-1.5 w-1.5 bg-blue-600 rounded-full me-1"></span>
            <p>Preview</p>
          </span>
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              {employment ? <p>Agenda completa por ahora. ¡Sigamos conectados!</p> : <p>Disponible para proyectos</p>}
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Juan
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-gray-500 sm:text-xl mt-6">
                Desarrollador Full Stack apasionado por crear experiencias
                digitales excepcionales. Con experiencia en React, Next.js,
                .NET, C#, SQL Server y tecnologías modernas.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
              <Link
                to="https://github.com/thejuanco"
                className="flex items-center bg-gray-800 text-white font-medium py-2 px-4 rounded-full hover:bg-gray-900 transition-transform duration-300 transform hover:scale-105"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Ver Perfil en Github
              </Link>
              <a href="/docs/CV_Juan_Manuel_Cruz.pdf" download="CV_Juan_Manuel_Cruz.pdf" className="flex items-center gap-2 bg-gray-200 text-slate-900 font-medium py-2 px-4 rounded-full hover:bg-gray-300 transition-transform duration-300 transform hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Descargar CV
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Link to="/contact" className="p-2 rounded-lg hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Projects />
      <SkillsAndTech />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
