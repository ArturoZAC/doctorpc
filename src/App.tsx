import { useState } from "react"
import { CardCode, Credits, Information } from "./components"

function App() {
  const [credits, setCredits] = useState<boolean>(true);

  return (

    <div className="xs:bg-imageXS xs:aspect-[375, 875] lg:bg-imageLG bg-no-repeat bg-cover bg-center lg:h-[100vh]">
      <div className="flex xs:flex-col lg:flex-row gap-x-8 justify-center items-center xs:gap-y-24 lg:my-0 lg:h-[100vh]">
          <CardCode 
            setCredits={setCredits}
            credits={credits}
            />
          {credits&&(<Information />)
            ||
          <Credits />
          }
      </div>
    </div>
  )
}

export default App
