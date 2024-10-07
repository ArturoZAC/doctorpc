import netflixLOGO from "../../images/svgs/netflix.svg"

interface CardProps {
  setCredits: (value: boolean) => void;
  credits: boolean
}

export const CardCode = ({setCredits, credits}: CardProps) => {

  const credintsAcc = () => {
    setCredits(!credits)
    window.scroll({
      top: 350,
      behavior: "smooth"
    })
  }

  return (
    <div className="bg-black rounded-2xl py-8 px-6 xs:px-4 flex flex-col justify-center items-center shadow-fondo-white max-w-[355px] xs:mt-32 lg:mt-0">
      <h1 className="text-3xl text-white text-center font-bold mb-6 flex flex-col">Consigue tu Codigo <span>Hogar Ya!</span></h1>
      <div className="flex flex-col gap-y-8 w-fit">
        {/* ITEM 1 */}
        <div className="text-white w-fit flex flex-row items-center bg-red-600 p-4 rounded-lg shadow-lg gap-x-6">
          <p className="text-center flex flex-col">Dale click al boton para que <span>consigas tu codigo de netflix.</span></p>
          <button onClick={credintsAcc} className="w-[60px] py-4 bg-white flex justify-center items-center rounded-md">
            <img className="w-[30px]" src={netflixLOGO} alt="netlfix" />
          </button>
        </div>


      </div>
    </div>
  )
}
