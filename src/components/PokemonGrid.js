import React from "react";

function PokemonGrid(props) {
  const { pokemons, isLoading, isError } = props;
  /* INSTRUCTION: add a loading message when isLoading is true */
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  /* INSTRUCTION: add an error message when isError is true */
  if (isError) {
    return (
      <div className="error">Error fetching data. Please try again later.</div>
    );
  }

  return (
    <div className="pokemon-grid">
      {/* INSTRUCTION: if pokemons data is available, display the pokemons in a 3-columns grid. if not, display a "No pokemons found." message */}
      {pokemons.length > 0 ? (
        <div className="grid">
          {pokemons.map((pokemon) => (
            <div key={pokemon._id} className="pokemon-card">
              <p>Name: {pokemon.name}</p>
              <p>Type: {pokemon.type}</p>
              <p>Level: {pokemon.level}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-pokemon">No pokemons found.</div>
      )}
    </div>
  );
}

export default PokemonGrid;
