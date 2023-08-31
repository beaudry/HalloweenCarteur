import './app.css'
import CarteHalloween from './composants/CarteHalloween';
import cartes from './donnees/cartes';
import Categorie from './modeles/Categorie';

function obtenirCartesDeLaCategorie(categorie: Categorie) {
  return cartes.filter(carte => carte.categorie === categorie);
}

function App() {
  return (
    <div>
      <div className="ne-pas-imprimer">
        <h1>Halloween Carteur</h1>
        <p>Nombre de cartes: {cartes.length}</p>
      </div>

      <div id="grille">
        {cartes.map(carte => <div class="carte-conteneur"><CarteHalloween carte={carte} /></div>)}
      </div>
    </div>
  )
}

export default App;
