import React from 'react';
import data from './data';
import Pokemon from './Pokemon'
import pokedex from './Pokedex.css'


class Pokedex extends React.Component {
  render() {
    return (<ol>{data.map(pokemon => <Pokemon 
      name={pokemon.name}
      image={pokemon.image}
      type={pokemon.type}
      averageWeight={pokemon.averageWeight} />)}
    </ol>);
  }
}

export default Pokedex;