import type { Rajzfilm_prop } from "../../Models/Props/Rajzfilm.prop";

export const Rajzfilm = function (props: Rajzfilm_prop) {
    return (
        <div key={props.rajzfilm.id} className="card">
            <div className="card-body" >
                <h5 className="card-title">{props.rajzfilm.cim}</h5>
                <ul>
                    <li>
                        <p className="card-text">Megjelenes eve: {props.rajzfilm.megjelenesEve}</p>
                    </li>
                    <li>
                        <p className="card-text">Premier: {props.rajzfilm.premier.toString()}</p>
                    </li>
                    <li>
                        <p className="card-text">Studio: {props.rajzfilm.studio}</p>
                    </li>
                </ul>
            </div >
        </div >
    )
}