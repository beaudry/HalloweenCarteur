import Categorie from "./Categorie"

type Carte = {
    categorie: Categorie;
    cycle?: string;
    description?: string | string[],
    titre?: string,
}

export default Carte;