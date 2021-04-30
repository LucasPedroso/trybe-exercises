import React, { Component } from 'react';

class TypePokemons extends Component {
  render() {
    const { type } = this.props
    return (
      <button className="types-pokemons">{type}</button>
    );
  }
}

export default TypePokemons;