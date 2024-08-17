import { useEffect, useState } from "preact/hooks";
import Case from "../modeles/Cases/Case";
import "./TableauConteneur.css";

const nombreDeCellules = 40;
const plateauInitial = [...Array(nombreDeCellules).keys()].map(() => new Case());

function TableauConteneur() {
    const [nombreDeJoueurs, setNombreDeJoueurs] = useState(10);
    const [de, setDe] = useState(10);

    const positionsInitiales = [...Array(nombreDeJoueurs).keys()].map(() => 0);
    const [plateau, setPlateau] = useState(plateauInitial);

    useEffect(() => {
        setPlateau(plateauInitial);
    }, [nombreDeJoueurs, de]);

    let joueurs = positionsInitiales.slice();
    let joueurActif = -1;
    const nouveauPlateau = plateau.slice();

    let joueurGagnant = -1;

    if (plateau[nombreDeCellules - 1].nombreDePassage < 10000) {
        setTimeout(() => {
            do {
                joueurActif++;
                joueurActif %= nombreDeJoueurs;

                const positionJoueurActif = joueurs[joueurActif];
                const nouvellePosition = Math.min(positionJoueurActif + Math.ceil(Math.random() * de), nombreDeCellules - 1);
                joueurs[joueurActif] = nouvellePosition;

                nouveauPlateau[nouvellePosition] = new Case(nouveauPlateau[nouvellePosition].nombreDePassage + 1);

                joueurGagnant = joueurs.findIndex(position => position >= nombreDeCellules - 1);
            } while (joueurGagnant === -1);

            setPlateau(nouveauPlateau);
        }, 0);
    }

    const maximum = Math.max(...plateau.map(cellule => cellule.nombreDePassage));
    const total = plateau.reduce((sommePartielle, caseCourante) => sommePartielle + caseCourante.nombreDePassage, 0)

    return <div>
        {/* <div>
            <label>
                Nombre de joueurs:
                <input type="number" onInput={(event) => setNombreDeJoueurs(parseInt(event.currentTarget.value))} value={nombreDeJoueurs} />
            </label>
        </div>
        <div>
            <label>
                Dé:
                <input type="number" onInput={(event) => setDe(parseInt(event.currentTarget.value))} value={de} />
            </label>
        </div> */}

        <div className="plateau">
            {plateau.map((cellule, index) => (
                <div className="case">
                    <div className="entete">
                        <span>{index + 1}</span>
                        <span>{(cellule.nombreDePassage / total * 100).toFixed(2)}%</span>
                    </div>
                    <meter value={cellule.nombreDePassage / maximum} />
                </div>
            ))}
        </div>

        Parties jouées: {plateau[nombreDeCellules - 1].nombreDePassage}
    </div>
}

export default TableauConteneur;