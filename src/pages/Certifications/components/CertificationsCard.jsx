import { Link } from "react-router"
import { certifications } from "../../../helpers"

export default function CertificationsCard() {
    return (
        <section className="py-12">
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Certificaciones Destacadas
                    </h2>
                    <p className="mx-auto max-w-[700px] text-slate-500">
                       Mis certificaciones más importantes y reconocidas en la industria
                    </p>
                </div>
                <div className="grid gap-8 mx-8 md:grid-cols-2">
                    {certifications.map((item, index) => (
                        <div key={index} className="p-8 border border-gray-300 rounded-xl">
                            <div className="">
                                <h2 className="font-medium text-lg">{item.title}</h2>
                                <p className="text-gray-600 text-start">{item.issuer}</p>
                                <div className="flex justify-start space-x-2 mb-4 items-start">
                                    <p>{item.date}</p>
                                    <span className="border border-gray-800 bg-gray-900 text-white px-1.5 text-sm rounded-full">{item.status}</span>
                                </div>
                                <p className="text-start text-gray-600">{item.description}</p>
                                <p className="text-start mt-3 font-medium mb-1">Habilidades Validadas:</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill, index) => (
                                        <div key={index} className="border border-gray-300 px-1.5 rounded-full">
                                            <span className="text-xs font-semibold">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-4">
                                    <Link 
                                        to={item.certificateUrl}
                                        className="py-2 bg-gray-900 text-white px-3 rounded-lg"
                                    >Verificar</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
