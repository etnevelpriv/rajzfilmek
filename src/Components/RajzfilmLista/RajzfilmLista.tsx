import type { Rajzfilm_interface } from "../../Models/Interfaces/Rajzfilm.interface";
import type { RajzfilmLista_prop } from "../../Models/Props/RajzfilmLista.prop";
import { Rajzfilm } from "../Rajzfilm/Rajzfilm";

export const RajzfilmLista = function(props:RajzfilmLista_prop) {
    return(
        <div className="card-container">
            {props.rajzfilmek.map((rajzfilm:Rajzfilm_interface)=>(
                <Rajzfilm key={rajzfilm.id} rajzfilm={rajzfilm}></Rajzfilm>
            ))}
        </div>
    )
};