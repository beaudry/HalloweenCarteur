import './Pigeur.css';
import { useEffect, useState } from 'preact/hooks'
import Carte from '../modeles/Carte';
import melangerVecteur from '../utils/melangerVecteur';
import CarteHalloween from './CarteHalloween';

export type PigeurProps = {
    cartes: Carte[];
    titre: string;
}

function Pigeur({ cartes, titre }: PigeurProps) {
    const [talon, setTalon] = useState<Carte[]>([]);
    const [cartePigee, setCartePigee] = useState<Carte | undefined>();

    function pigerUneCarte() {
        const nouveauTalon = talon.slice();
        const cartePigee = nouveauTalon.shift();

        setTalon(nouveauTalon);
        setCartePigee(cartePigee)
    }

    useEffect(() => {
        if (!talon.length) {
            setTalon(melangerVecteur(cartes));
        }
    }, [cartes, talon])

    return (
        <div>
            <button className="bouton-pigeur" onClick={pigerUneCarte}>
                Piger une carte <span className="nom-categorie">{titre}</span>
                <span className="nombre-restantes">({talon.length} restantes)</span>
            </button>
            {cartePigee && (
                <dialog open onClick={() => setCartePigee(undefined)}>
                    <CarteHalloween carte={cartePigee} />
                </dialog>
            )}
        </div>
    );
}

export default Pigeur