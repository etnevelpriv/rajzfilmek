import { useState } from "react";
import type { Rajzfilm_prop } from "../../Models/Props/Rajzfilm.prop";

export const Rajzfilm = function (props: Rajzfilm_prop) {
    const [premierLathatosag, setPremierLathatosag] = useState<boolean>(false);
    return (
        <div key={props.rajzfilm.id} className="card">
            <div className="card-body" >
                <h5 className="card-title">{props.rajzfilm.cim}</h5>
                <ul>
                    <li>
                        <p className="card-text">Studio: <i>{props.rajzfilm.studio}</i></p>
                    </li>
                    <li>
                        <p className="card-text">Megjelenes eve: <b>{props.rajzfilm.megjelenesEve}</b></p>
                    </li>
                    <li>
                        <p className="card-text">Kategoria: {(props.rajzfilm.megjelenesEve < 2000) ? ("Klasszikus rajzfilm") : (props.rajzfilm.megjelenesEve > 2010) ? ("Modern rajzfilm") : ("Regebbi rajzfilm")}</p>
                    </li>
                    {premierLathatosag && (
                        <li>
                            <p className="card-text">Premier: {props.rajzfilm.premier.toString()}</p>
                        </li>

                    )}
                    <li>
                        <button onClick={() => {
                            setPremierLathatosag(!premierLathatosag)
                        }}>Premier {premierLathatosag ? "eltuntetes" : "megjelenites"}</button>
                    </li>
                </ul>
            </div >
        </div >
    )
}