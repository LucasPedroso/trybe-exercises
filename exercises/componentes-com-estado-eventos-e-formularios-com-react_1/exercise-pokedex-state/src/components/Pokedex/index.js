import React from 'react';
import Pokemon from '../Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPokemon: [],
      position: 0,
    }

    this.nextPokemon = this.nextPokemon.bind(this);
    this.previousPokemon = this.previousPokemon.bind(this);
    this.filteredPokemon = this.filteredPokemon.bind(this);
  }

  nextPokemon() {
    this.setState((prevState, _props) => ({
      position: prevState.position - 1,
    }))
  }

  previousPokemon() {
    this.setState((prevState, _props) => ({
      position: prevState.position + 1,
    }))
  }

  filteredPokemon() {
    
  }

  render() {
    return (
      <div className="pokedex">
        {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;