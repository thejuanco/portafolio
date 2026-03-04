import { education } from "../../../helpers";

export default function Education() {
  return (
    <div className="py-12 mt-12">
      <div className="space-y-12">
        <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Formación Académica
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-500">
                Titulos universitarios y doctorados que respaldan mi experiencia profesional.
            </p>
        </div>
        <div className="py-8">
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                <h3 className="font-semibold text-2xl">Lincenciatura / Ingeniería</h3>
            </div>
            <div className="mt-6">
                {education.map((edu, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-start gap-4">
                            <div>
                                {/*Image*/}
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                                <div className="text-start">
                                    <h4 className="font-medium text-lg tracking-tighter">{edu.degree}</h4>
                                    <p className="text-sm text-gray-600">{edu.institution}</p>
                                    <p className="text-xs text-gray-600">{edu.location}</p>
                                </div>
                                <div className="text-xs border border-gray-500 py-0.5 px-1 rounded-full">{edu.status}</div>
                            </div>
                            <div className="grid grid-cols-2 mt-4 md:grid-cols-4 gap-4 mb-4 text-sm">
                                <div>
                                    <h2 className="text-start">Período:</h2>
                                    <p className="text-start text-gray-600">{edu.startDate} - {edu.endDate}</p>
                                </div>
                            </div>
                            <p className="text-sm mb-3 text-start ">{edu.description}</p>

                            <div className="flex flex-wrap gap-2">
                            {edu.skills.map((skill, index) => (
                                <div key={index} className="text-xs font-semibold border border-gray-300 py-0.5 px-1 rounded-full">
                                    {skill}
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
