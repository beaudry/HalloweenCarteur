import './CarteHalloween.css'
import Carte from "../modeles/Carte"
import Filigrane from './Filigrane';

export type CarteHalloweenProps = {
    carte: Carte,
    verso?: boolean,
}

const espaceFineInsecable = "\u202f";
const ajouterDesEspaces = true;

function ajouterLesEspacesSiDesire(chaineAAjuster: string) {
    if (!ajouterDesEspaces) {
        return chaineAAjuster;
    }

    return chaineAAjuster.replace(/([!?%])/, espaceFineInsecable + "$1");

}

function CarteHalloween({ carte, verso }: CarteHalloweenProps) {
    if (verso) {
        return <div className="carte">
            <Filigrane categorie={carte.categorie} className="image" />
        </div>
    }

    return <div className="carte">
        <Filigrane categorie={carte.categorie} className="image filigrane" />
        <div className="carte-contenu">
            <h2>{ajouterLesEspacesSiDesire(!!carte.titre ? carte.titre : "Aucun titre :(")}</h2>
            {Array.isArray(carte.description) ?
                <ul>
                    {carte.description.map(itemDescription => <li key={itemDescription}>{itemDescription}</li>)}
                </ul>
                : <p dangerouslySetInnerHTML={{ __html: ajouterLesEspacesSiDesire(carte.description) }}></p>
            }
        </div>
        <div className="carte-pied">
            <span>{carte.categorie}</span>
        </div>
    </div>
}

export default CarteHalloween