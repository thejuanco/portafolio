import NavBar from "../../components/NavBar"
import CertificationsCard from "./components/CertificationsCard"
import Education from "./components/Education"

export default function Certifications() {
  return (
    <>
      <NavBar/>
      <div className="py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
              Validado Profesionalmente
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl">
                Mis{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Certificaciones
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-gray-500 sm:text-xl mt-6">
                Certificaciones oficiales, licencias y credenciales que validan mi experiencia y conocimientos técnicos en desarrollo de software y tecnologías en la nube.
              </p>
            </div>
            <Education/>
            <CertificationsCard/>
          </div>
        </div>
      </div>
    </>
  )
}
