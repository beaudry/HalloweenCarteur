import { JSX } from 'preact'
import Categorie from "../modeles/Categorie";
import chaos from '../images/chaos.png';
import defi from '../images/defi.png';
import qui from '../images/qui.png';
import verite from '../images/verite.png';

function obtenirCheminImage(categorie: Categorie) {
    if (categorie === Categorie.qui) {
        return qui;
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

export type FiligraneProps = {
    categorie: Categorie,
} & JSX.HTMLAttributes<HTMLImageElement>

function Filigrane({ categorie, ...others }: FiligraneProps) {
    const cheminImage = obtenirCheminImage(categorie);

    if (!cheminImage) {
        return null;
    }

    return <img src={cheminImage} {...others} />;
}

export default Filigrane;