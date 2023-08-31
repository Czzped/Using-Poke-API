import { useState } from "react"

export function App() {
  const [pokemonsList, setPokemonsList] = useState([])

  async function fetchPokemonApi() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/")
    const data = await response.json()

    setPokemonsList(data.results)
  }

  if (pokemonsList.length === 0) {
    fetchPokemonApi()
  }

  console.log(pokemonsList)

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
                    <button>saiba mais</button>
                    <br /> <br />
                  </div>
                )
              })
              :
              <h4>Parece que não esta mais funcionando :(</h4>
          }
        </ul>
        <hr />
        <div>
          <h1>Testando</h1>
        </div>
      </div >
    </>
  )
}