import type { Rajzfilm_interface } from "../../Models/Interfaces/Rajzfilm.interface";
import type { RajzfilmStat_prop } from "../../Models/Props/RajzfilmStat.prop";

export const RajzfilmStat = function (props: RajzfilmStat_prop) {
    const rajzfilmCount = props.rajzfilmek.length;
    const rajzfilmMinDate = Math.min(...props.rajzfilmek.map((rajzfilm: Rajzfilm_interface) => rajzfilm.megjelenesEve));
    const rajzfilmMaxDate = Math.max(...props.rajzfilmek.map((rajzfilm: Rajzfilm_interface) => rajzfilm.megjelenesEve));
    return (
        <ul>
            <li>Rajzfilmek szama:{rajzfilmCount}</li>
            <li>Legkorabbi megjelenesi ev:{rajzfilmMinDate}</li>
            <li>Legkesobbi megjelenesi ev:{rajzfilmMaxDate}</li>
        </ul>
    )
};