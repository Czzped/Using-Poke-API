import { useState } from "react"

export function App() {
  const [pokemonsList, setPokemonsList] = useState([])
  const [shownPokemon, setShownPokemon] = useState(null)

  async function fetchPokemonApi() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/")
    const data = await response.json()

    setPokemonsList(data.results)
  }

  async function fetchPokemonInformation(pokemonURL) {
    const response = await fetch(pokemonURL)
    const pokemonData = await response.json()

    const shownPokemon = {
      name: pokemonData.name,
      capture_rate: pokemonData.capture_rate,
      base_happiness: pokemonData.base_happiness,
      hatch_counter: pokemonData.hatch_counter,
      is_legendary: pokemonData.is_legendary ? "Yes" : "No",
      is_mythical: pokemonData.is_mythical ? "Yes" : "No",
      habitat: pokemonData.habitat.name,
      generation: pokemonData.generation.name,
      growth_rate: pokemonData.growth_rate.name,
      shape: pokemonData.shape.name,
      varieties: pokemonData.varieties
    }

    setShownPokemon(shownPokemon)
    console.log(shownPokemon)
  }

  if (pokemonsList.length === 0) {
    fetchPokemonApi()
  }

  return (
    <>
      <h1> Pokes Informations!!</h1 >
      <br /><br />
      <div className="pokemonsInformations">
        <ul>
          {
            pokemonsList.length !== 0 ?
              pokemonsList.map((pokemon) => {
                return (
                  <div key={Math.random() * 1000000}>
                    <h2>{pokemon.name}</h2>
                    <button onClick={() => { fetchPokemonInformation(pokemon.url) }}>saiba mais</button>
                    <br /> <br />
                  </div>
                )
              })
              :
              <h2>Parece que não esta mais funcionando :(</h2>
          }
        </ul>
        <hr />
        <div>
          {
            shownPokemon ?
              <>
                <h1>{shownPokemon.name}</h1>
                <br />
                <h3>Base Happiness: {shownPokemon.base_happiness}</h3>
                <br />
                <h3>Capture Rate: {shownPokemon.capture_rate}</h3>
                <h3>Capture Rate: {shownPokemon.capture_rate}</h3>
                <br />
                <h3>Hatch Counter: {shownPokemon.hatch_counter}</h3>
                <br />
                <h3>Is Legendary: {shownPokemon.is_legendary}</h3>
                <h3>Is Mythical: {shownPokemon.is_mythical}</h3>
                <br />
                <h3>Shape: {shownPokemon.shape}</h3>
                <br />
                <ul>
                  <h2>Varieties:</h2>
                  {
                    shownPokemon.varieties.map((variation) => {
                      return (
                        <li>{variation.pokemon.name}</li>
                      )
                    })
                  }
                </ul>
              </>
              :
              <h1>{null}</h1>
          }
        </div>
      </div >
    </>
  )
}