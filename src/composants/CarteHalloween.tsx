import './CarteHalloween.css'
import Carte from "../modeles/Carte"

export type CarteHalloweenProps = {
    carte: Carte
}

function CarteHalloween({ carte }: CarteHalloweenProps) {
    return <div className="carte">
        <div className="carte-contenu">
            <h2>{carte.titre ?? "Aucun titre :("}</h2>
            {Array.isArray(carte.description) ?
                <ul>
                    {carte.description.map(itemDescription => <li key={itemDescription}>{itemDescription}</li>)}
                </ul>
                : <p>{carte.description}</p>
            }
        </div>
        <div className="carte-pied">
            <span>Type: {carte.categorie}</span>
            {carte.cycle && <span>Cycle: {carte.cycle}</span>}
        </div>
    </div>
}

export default CarteHalloween