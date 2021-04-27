import React from 'react';
import PropTypes from 'prop-types';
import pokemon from './Pokemon.css'

class Pokemon extends React.Component {
  render() {
    return (
      <li className={pokemon}>
        <p>{this.props.name}</p>
        <img src={this.props.image} alt={this.props.name}/>
        <p>Tipo: {this.props.type}</p>
        <p>Peso Médio: {this.props.averageWeight.value}
          <span>{this.props.averageWeight.measurementUnit}</span>
        </p>
      </li>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: {
    value: PropTypes.number,
    measurementUnit: PropTypes.string
  },
  image: PropTypes.string,
}

export default Pokemon;