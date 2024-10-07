import wtsp from "../../images/svgs/whatsapp.svg"

export const Information = () => {

  return (
    <div className="bg-black py-8 px-6 rounded-2xl shadow-fondo-white max-w-[355px] xs:mb-32 lg:mb-0">
          <h1 className="text-3xl text-white text-center font-bold mb-3">Soporte DoctorPC</h1>
          <div className="flex flex-col gap-y-7 justify-center items-center">
            <div className="text-justify">
              <p className="text-white">Estimado cliente, ¡Gracias por elegir DoctorPC! Valoramos su preferencia y estamos comprometidos a ofrecerle los mejores servicios de reparación y soporte técnico. Nuestro equipo está aquí para atender sus necesidades y asegurar que su experiencia con nosotros sea excepcional.</p>
            </div>
            <div className="flex justify-center items-center bg-[#666666] p-4 rounded-md gap-x-4">
              <p className="text-center text-white">Si tienes una duda por favor envia un mensaje dando click al logo de Whatsapp.</p>
              <button className="bg-black p-3 rounded-md">
                <a href="https://wa.me/984221508" target='_blank'>
                  <img className="w-[70px]" src={wtsp} alt="whatsapp" />
                </a>
              </button>
            </div>
          </div>
    </div>
  )
}
