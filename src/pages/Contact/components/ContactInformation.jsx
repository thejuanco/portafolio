import { ClockIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"
export default function ContactInformation() {
  
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h1 className="font-medium text-2xl text-start">Información de Contacto</h1>
      <p className="text-start text-gray-500">Otras formas de contactar conmigo</p>

      <div className="pt-6 space-y-4">
        <div className="flex justify-start items-center space-x-4">
          <div className="p-3 bg-gray-100 rounded-2xl">
            <EnvelopeIcon className="size-7"/>
          </div>
          <div>
            <h3 className="text-start text-lg font-medium">Email</h3>
            <p className="text-gray-500">juanffo874@gmail.com</p>
            <p className="text-gray-500">Respondo en 24 horas</p> 
          </div>
        </div>

        <div className="flex justify-start items-center space-x-4">
          <div className="p-3 bg-gray-100 rounded-2xl">
            <PhoneIcon className="size-7"/>
          </div>
          <div>
            <h3 className="text-start text-lg font-medium">Telefóno</h3>
            <p className="text-gray-500">+53 776 113 6600</p>
            <p className="text-gray-500">Lun-Vie, 9AM - 6PM</p> 
          </div>
        </div>

        <div className="flex justify-start items-center space-x-4">
          <div className="p-3 bg-gray-100 rounded-2xl">
            <EnvelopeIcon className="size-7"/>
          </div>
          <div>
            <h3 className="text-start text-lg font-medium">Ubicación</h3>
            <p className="text-gray-500">Huauchinango, Puebla, MX</p>
            <p className="text-gray-500">Disponible Remotamente</p> 
          </div>
        </div>

        <div className="flex justify-start items-center space-x-4">
          <div className="p-3 bg-gray-100 rounded-2xl">
            <ClockIcon className="size-7"/>
          </div>
          <div>
            <h3 className="text-start text-lg font-medium">Zona Horaria</h3>
            <p className="text-gray-500">GTM-6</p>
            <p className="text-gray-500">Horario flexible</p> 
          </div>
        </div>
      </div>
    </div>
  )
}
