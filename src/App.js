import './App.css';
import Card from './Card';
import pokemonsInfo from './data';
console.log(pokemonsInfo);

function App() {
  return (
    <main>
      <h1>Pokedex</h1>
      <section>
        <Card pokemons={ pokemonsInfo } />

      </section>
    </main>
  );
}

export default App;
