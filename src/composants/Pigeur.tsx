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
    const [talon, setTalon] = useState<number[]>([]);
    const [indexCartePigee, setIndexCartePigee] = useState<number | undefined>();

    function pigerUneCarte() {
        const nouveauTalon = talon.slice();
        const cartePigee = nouveauTalon.shift();

        setTalon(nouveauTalon);
        setIndexCartePigee(cartePigee)
    }

    useEffect(() => {
        if (!talon.length) {
            setTalon(melangerVecteur(cartes.map((_, index) => index)));
        }
    }, [cartes, talon])

    return (
        <div>
            <button className="bouton-pigeur" onClick={pigerUneCarte}>
                Piger une carte <span className="nom-categorie">{titre}</span>
                <span className="nombre-restantes">({talon.length} restantes)</span>
            </button>
            {indexCartePigee !== undefined && (
                <dialog open onClick={() => setIndexCartePigee(undefined)}>
                    <CarteHalloween carte={cartes[indexCartePigee]} />
                </dialog>
            )}
        </div>
    );
}

export default Pigeur