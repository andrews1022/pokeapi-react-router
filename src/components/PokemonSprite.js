import React from 'react';

const PokemonSprite = ({ source, direction, version, name }) => (
	<img className='sprite' src={source} alt={`${direction} facing ${version} sprite for ${name}`} />
);

export default PokemonSprite;
