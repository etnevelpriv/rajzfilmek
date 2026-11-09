import { useEffect, useState } from "react"
import { RajzfilmLista } from "./Components/RajzfilmLista/RajzfilmLista"
import { ReadData } from "./Helper_scripts/ReadData"
import type { Rajzfilm_interface } from "./Models/Interfaces/Rajzfilm.interface"
export function App() {
  const [rajzfilmek, setRajzfilmek] = useState<Rajzfilm_interface[]>([])
  useEffect(() => {
    const useEffectReadData = async ()=> {
      const data = await ReadData("rajzfilmek.json");
      setRajzfilmek(data);
      console.log(data);
    };
    useEffectReadData();
  }, [])
  return (
    <div className="container">
      <h1>Rajzfilmek</h1>
      <RajzfilmLista></RajzfilmLista>
    </div>
  )
}