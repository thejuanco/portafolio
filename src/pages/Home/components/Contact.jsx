import { Link } from "react-router";
import { useEmployment } from "../../../context/EmploymentContext";

const Contact = () => {
  const { employment } = useEmployment();

  return (
    <section id="contact" className="py-28">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          {employment ? (
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Agenda completa por ahora. ¡Sigamos conectados!
            </h2>
          ) : (
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              ¿Trabajamos Juntos?
            </h2>
          )}
          <p className="mx-auto max-w-[600px] text-gray-600">
            {/* Estoy disponible para nuevos proyectos y oportunidades. ¡Hablemos! */}
            Abierto a conectar y compartir conocimientos. ¡Hablemos!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="flex items-center font-medium bg-gray-900 text-slate-200 py-2 px-4 rounded-full hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
            Enviar Correo
          </Link>
          <Link
            className="flex items-center gap-2 border border-gray-300 font-medium hover:bg-gray-100 text-slate-900 py-2 px-4 rounded-full"
            to="https://www.linkedin.com/in/juan-cruz-ortiz-b56607283/"
            target="_blank"
          >
            <img
              src="/images/linkedin.png"
              alt="Descripción de la imagen"
              className="w-7 h-7"
            />
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
