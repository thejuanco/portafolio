import { Link } from "react-router"

export default function ContactInformation() {
  return (
    <div>
      <div className="border border-gray-200 rounded-lg p-6">
        
        <h2 className="font-medium text-2xl text-start">
          Sígueme en Redes
        </h2>

        <p className="text-start text-gray-500">
          Conecta conmigo en mis redes sociales
        </p>

        <div className="flex gap-8 mt-10">
          
          <Link
            to="https://github.com/tu-usuario"
            className="w-16 h-16 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="/images/github.png"
              alt="GitHub"
              className="w-7 h-7"
            />
          </Link>

          <Link
            to="https://www.linkedin.com/in/juancooo"
            className="w-16 h-16 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </Link>

          <Link
            to="https://twitter.com/tu-usuario"
            className="w-16 h-16 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="/images/x.png"
              alt="Twitter"
              className="w-6 h-6"
            />
          </Link>

        </div>
      </div>
    </div>
  )
}
