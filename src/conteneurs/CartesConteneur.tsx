import { useState } from 'preact/hooks';
import './CartesConteneur.css'
import CarteHalloween from '../composants/CarteHalloween';
import Pigeur from '../composants/Pigeur';
import cartes from '../donnees/cartes';
import Categorie from '../modeles/Categorie';

function obtenirCartesDeLaCategorie(categorie: Categorie) {
  return cartes.filter(carte => carte.categorie === categorie);
}

const cartesAide = obtenirCartesDeLaCategorie(Categorie.qui);
const cartesChaos = obtenirCartesDeLaCategorie(Categorie.chaos);
const cartesDefi = obtenirCartesDeLaCategorie(Categorie.defi);
const cartesVerite = obtenirCartesDeLaCategorie(Categorie.verite);
const cartesSansTitre = cartes.filter(carte => !carte.titre);

const nombreTotalDeCartes = cartes.length;
const nombreDeCartesAvecTitre = nombreTotalDeCartes - cartesSansTitre.length;

function CartesConteneur() {
  const [pourImpression, setPourImpression] = useState(false);

  return (
    <div>
      <div className="ne-pas-imprimer">
        <h1>Halloween Carteur</h1>

        <div id="panneau-de-controle">
          <div>
            <div>Nombre de cartes: {nombreTotalDeCartes}</div>
            <div>Nombre de cartes sans titre: {nombreTotalDeCartes - nombreDeCartesAvecTitre}</div>
            <div><progress value={nombreDeCartesAvecTitre} max={nombreTotalDeCartes} /> {(nombreDeCartesAvecTitre / nombreTotalDeCartes * 100).toFixed(2)}%</div>
          </div>
          <div>
            <label><input type="checkbox" checked={pourImpression} onChange={() => setPourImpression(ancienPourImpression => !ancienPourImpression)} /> Afficher le verso des cartes</label>
          </div>
        </div>

        <div id="conteneur-boutons">
          <Pigeur cartes={cartesAide} titre={Categorie.qui} />
          <Pigeur cartes={cartesChaos} titre={Categorie.chaos} />
          <Pigeur cartes={cartesDefi} titre={Categorie.defi} />
          <Pigeur cartes={cartesVerite} titre={Categorie.verite} />
        </div>
      </div>

      <div className={"grille"}>
        {cartes.map(carte => (
          <div class="carte-conteneur">
            <CarteHalloween carte={carte} />
            {pourImpression && <CarteHalloween carte={carte} verso />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CartesConteneur;
