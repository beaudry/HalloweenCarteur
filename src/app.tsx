import './app.css'
import CarteHalloween from './composants/CarteHalloween';
import Pigeur from './composants/Pigeur';
import cartes from './donnees/cartes';
import Categorie from './modeles/Categorie';

function obtenirCartesDeLaCategorie(categorie: Categorie) {
  return cartes.filter(carte => carte.categorie === categorie);
}

const cartesAide = obtenirCartesDeLaCategorie(Categorie.aide);
const cartesChaos = obtenirCartesDeLaCategorie(Categorie.chaos);
const cartesDefi = obtenirCartesDeLaCategorie(Categorie.defi);
const cartesVerite = obtenirCartesDeLaCategorie(Categorie.verite);

function App() {
  return (
    <div>
      <div className="ne-pas-imprimer">
        <h1>Halloween Carteur</h1>

        <div id="decomptes">
          <div>Nombre de cartes: {cartes.length}</div>
          <div>Nombre de cartes sans titre: {cartes.filter(carte => !carte.titre).length}</div>
        </div>

        <div id="conteneur-boutons">
          <Pigeur cartes={cartesAide} titre="Aide" />
          <Pigeur cartes={cartesChaos} titre="Chaos" />
          <Pigeur cartes={cartesDefi} titre="Défi" />
          <Pigeur cartes={cartesVerite} titre="Vérité" />
        </div>
      </div>

      <div id="grille">
        {cartes.map(carte => <div class="carte-conteneur"><CarteHalloween carte={carte} /></div>)}
      </div>
    </div>
  )
}

export default App;
