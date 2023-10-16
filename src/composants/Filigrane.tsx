import { JSX } from 'preact'
import Categorie from "../modeles/Categorie";
import aide from '../images/aide.png';
import chaos from '../images/chaos.png';
import defi from '../images/defi.png';
import verite from '../images/verite.png';

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