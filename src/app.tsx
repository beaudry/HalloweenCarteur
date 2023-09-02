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

const nombreTotalDeCartes = cartes.length;
const nombreDeCartesAvecTitre = cartes.filter(carte => carte.titre).length;

function App() {
  return (
    <div>
      <div className="ne-pas-imprimer">
        <h1>Halloween Carteur</h1>

        <div id="decomptes">
          <div>Nombre de cartes: {nombreTotalDeCartes}</div>
          <div>Nombre de cartes sans titre: {nombreTotalDeCartes - nombreDeCartesAvecTitre}</div>
          <div><progress value={nombreDeCartesAvecTitre} max={nombreTotalDeCartes} /> {(nombreDeCartesAvecTitre / nombreTotalDeCartes * 100).toFixed(2)}%</div>
        </div>

        <div id="conteneur-boutons">
          <Pigeur cartes={cartesAide} titre={Categorie.aide} />
          <Pigeur cartes={cartesChaos} titre={Categorie.chaos} />
          <Pigeur cartes={cartesDefi} titre={Categorie.defi} />
          <Pigeur cartes={cartesVerite} titre={Categorie.verite} />
        </div>
      </div>

      <div id="grille">
        {cartes.map(carte => <div class="carte-conteneur"><CarteHalloween carte={carte} /></div>)}
      </div>
    </div>
  )
}

export default App;
