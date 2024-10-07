import 'boxicons/css/boxicons.min.css'
import wtsp from "../../images/svgs/whatsapp.svg"

export const Credits = () => {
  return (
    <div className="bg-black py-8 px-6 rounded-2xl shadow-fondo-white xs:mb-32 lg:mb-0">
      <h1 className="text-3xl text-white text-center font-bold mb-3">Credenciales</h1>
      <div className="text-black w-[310px] gap-y-4 p-6 bg-white rounded-lg flex flex-col justify-center items-center">
        <div className='flex w-fit justify-center gap-x-4'>
          <i className='bx bx-user-circle bx-md'></i>
          <p className='w-[125px]'>doctorpc</p>
        </div>
        <div className='flex w-fit justify-center gap-x-4'>
          <i className='bx bx-cog bx-md'></i>
          <p className='w-[125px]'>Contraseña</p>
        </div>
      </div>
      <div className='w-[310px] text-white text-center my-8'>
        <p>Ingrese las credenciales y obtenga el codigo dando click <span className='text-red-500'><a href="https://mail.hostinger.com" target='_blank'>aqui!</a></span></p>
      </div>

      <div className="w-[310px] flex justify-center items-center bg-[#666666] p-4 rounded-md gap-x-4">
          <p className="text-center text-white">Si tienes una duda por favor envia un mensaje dando click al logo de Whatsapp.</p>
          <button className="bg-black p-3 rounded-md">
            <a href="https://wa.me/984221508" target='_blank'>
              <img className="w-[70px]" src={wtsp} alt="whatsapp" />
            </a>
          </button>
        </div>
    </div>
  )
}
