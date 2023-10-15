import "./Filigrane.css"
import Categorie from "../../modeles/Categorie";
import aide from '../../images/aide.png';
import chaos from '../../images/chaos.png';
import defi from '../../images/defi.png';
import verite from '../../images/verite.png';

export type FiligraneProps = {
    categorie: Categorie,
}

function obtenirCheminImage(categorie: Categorie) {
    if (categorie === Categorie.aide) {
        return aide;
    }

    if (categorie === Categorie.chaos) {
        return chaos;
    }

    if (categorie === Categorie.defi) {
        return defi;
    }

    if (categorie === Categorie.verite) {
        return verite;
    }
}

let fonce = false;

function Filigrane({ categorie }: FiligraneProps) {
    fonce = !fonce;
    const cheminImage = obtenirCheminImage(categorie);

    if (!cheminImage) {
        return null;
    }

    return <img className="filigrane" src={cheminImage} />;
}

export default Filigrane;