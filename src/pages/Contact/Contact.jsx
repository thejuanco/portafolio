import NavBar from "../../components/NavBar";
import { useEmployment } from "../../context/EmploymentContext";

const Contact = () => {
  const {employment, setEmployment} = useEmployment()

    console.log(employment)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      console.log("Desde el formulario")
    } catch(ex){
      console.log(ex)
    }
  }

  return (
    <>
      <NavBar />
      <div className="py-18 md:py-20">
        <div className="text-center">
          {employment ? (
            <div>
              <div className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
                Actualmente enfocado en nuevos retos en mi rol actual.
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl">
                Envíame un {""}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Correo
                </span>
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 mt-1">
                Abierto a conectar y compartir conocimientos. ¡Hablemos!
              </p>
            </div>
          ) : (
            <div className="flex">
              <div className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
                ¡Hablemos!
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl">
                Envíame un {""}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Correo
                </span>
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 mt-1">
                Estoy disponible para nuevos proyectos y oportunidades.
                ¡Hablemos!
              </p>
            </div>
          )}

          <div className="flex justify-center items-center">
            <div className="md:w-1/3 sm:w-1/2 lg:w-1/3 sm:m-10 border border-gray-100 p-6 rounded-xl shadow">
              <div className="flex items-center">
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
                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                  />
                </svg>
                <h2 className="font-medium ml-1 tracking-tighter sm:text-2xl md:text-xl lg:text-3xl">
                  Envíame un mensaje
                </h2>
              </div>
              {employment ?
              <p className="flex justify-start text-gray-500">
                Completa el formulario para networking o futuras colaboraciones.
              </p> :
              <p className="flex justify-start text-gray-500">
                Completa y formulario y responderé lo antes posible
              </p>
              }

              <form onSubmit={handleSubmit} className="mt-8">
                <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 font-medium">
                  Disponible proximamente
                </span>
                <img src="/images/make.svg" className="mt-2" />

                <button className="bg-gray-500 text-white p-2 w-full font-medium rounded-3xl my-3 hover:cursor-no-drop">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
