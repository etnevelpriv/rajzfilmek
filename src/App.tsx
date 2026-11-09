import { useEffect } from "react"
import { RajzfilmLista } from "./Components/RajzfilmLista/RajzfilmLista"
import { ReadData } from "./Helper_scripts/ReadData"
export function App() {
  useEffect(() => {
    const useEffectReadData = async ()=> {
      const data = await ReadData("rajzfilmek.json");
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