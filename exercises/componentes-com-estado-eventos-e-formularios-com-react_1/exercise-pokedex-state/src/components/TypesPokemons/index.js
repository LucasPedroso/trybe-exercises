import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TypePokemons extends Component {
  render() {
    const { types, onClick } = this.props
    const typesPokemon = [...new Set(types.map((pokemon) => pokemon.type))]
    // console.log(onClick);
    return (
      <>
        <button key="All" className="types-pokemons" onClick={onClick}>All</button>
        {typesPokemon.map(x => <button key={x} className="types-pokemons" onClick={onClick}>{x}</button>)}
      </>
    );
  }
}

TypePokemons.propTypes = {
	types: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		averageWeight: PropTypes.shape({
			value: PropTypes.string.isRequired,
			measurementUnit: PropTypes.string.isRequired
		}).isRequired,
		image: PropTypes.string.isRequired,
	}).isRequired).isRequired,
}

export default TypePokemons;