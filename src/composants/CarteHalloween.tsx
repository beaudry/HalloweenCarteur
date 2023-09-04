import './CarteHalloween.css'
import Carte from "../modeles/Carte"

export type CarteHalloweenProps = {
    carte: Carte
}

const espaceFineInsecable = "\u202f";
const ajouterDesEspaces = true;

function ajouterLesEspacesSiDesire(chaineAAjuster: string) {
    if (!ajouterDesEspaces) {
        return chaineAAjuster;
    }

    return chaineAAjuster.replace(/([!?])$/, espaceFineInsecable + "$1");

}

function CarteHalloween({ carte }: CarteHalloweenProps) {
    return <div className="carte">
        <div className="carte-entete">
            <span>{carte.categorie}</span>
            {carte.cycle && <span>{carte.cycle}</span>}
        </div>
        <div className="carte-contenu">
            <h2>{ajouterLesEspacesSiDesire(!!carte.titre ? carte.titre : "Aucun titre :(")}</h2>
            {Array.isArray(carte.description) ?
                <ul>
                    {carte.description.map(itemDescription => <li key={itemDescription}>{itemDescription}</li>)}
                </ul>
                : <p>{ajouterLesEspacesSiDesire(carte.description)}</p>
            }
        </div>
    </div>
}

export default CarteHalloween