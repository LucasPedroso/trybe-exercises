import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { pokemon } = this.props;
        const { name, type, averageWeight, image } = pokemon;

        return (
            <div className="pokemon">
                <div>
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div>
                <img src={image} alt={`${name} sprite`} />
            </div>
        );
    }
}

Pokemon.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		averageWeight: PropTypes.shape({
			value: PropTypes.string.isRequired,
			measurementUnit: PropTypes.string.isRequired
		}).isRequired,
		image: PropTypes.string.isRequired,
	}).isRequired	
}

export default Pokemon;