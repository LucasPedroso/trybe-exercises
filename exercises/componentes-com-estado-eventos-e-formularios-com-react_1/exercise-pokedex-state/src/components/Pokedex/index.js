import React from 'react';
import Pokemon from '../Pokemon';
import TypePokemons from '../TypesPokemons';
import PropTypes from 'prop-types';


class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPokemon: this.props.pokemons,
      index: 0,
    }

    this.nextPokemon = this.nextPokemon.bind(this);
    this.previousPokemon = this.previousPokemon.bind(this);
    this.mapPokemonsToType = this.mapPokemonsToType.bind(this);
    this.pokemonsLengthMinusOne = this.pokemonsLengthMinusOne.bind(this);
    this.handleFilteredPokemon = this.handleFilteredPokemon.bind(this);
  }

  handleFilteredPokemon(ev) {
    const { pokemons } = this.props;
    this.setState({
      filteredPokemon: pokemons.filter(({type}) => ev.target.textContent === 'All' ? true : type === ev.target.textContent ),
      index: 0,
    })
  }

  nextPokemon() {
    this.setState(({ index }, _props) => ({
      index: index === 0 ? this.pokemonsLengthMinusOne() : index - 1,
    }))
  }

  previousPokemon() {
    this.setState(({ index }, _props) => ({
      index: index === this.pokemonsLengthMinusOne() ? 0 : index + 1,
    }))
  }

  mapPokemonsToType(type='All') {
    return this.props.pokemons.map((pokemon) => pokemon.type)
  }

  pokemonsLengthMinusOne() {
    return this.state.filteredPokemon.length - 1;
  }

  render() {
    return (
      <>
        <div className="pokedex">
          <Pokemon key={this.state.filteredPokemon[this.state.index].id}
            pokemon={this.state.filteredPokemon[this.state.index]} />
        </div>
        <TypePokemons types={this.props.pokemons} onClick={this.handleFilteredPokemon}/>
        <div>
          <button className="btn" onClick={this.previousPokemon}>Previous</button>
          <button className="btn" onClick={this.nextPokemon}>Next</button>
        </div>
      </>
    );
  }
}

Pokedex.propTypes = {
	pokemons: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		averageWeight: PropTypes.shape({
			value: PropTypes.string.isRequired,
			measurementUnit: PropTypes.string.isRequired
		}).isRequired,
		image: PropTypes.string.isRequired,
	}).isRequired).isRequired,
}

export default Pokedex;