import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeName } from './../utility/functions';

const PokemonDetails = ({ match }) => {
	console.log(match);

	return (
		<div>
			<Link to='/'>Go back</Link>
			<p>Welcome to PokemonDetails page for {capitalizeName(match.params.name)}!</p>
		</div>
	);
};

export default PokemonDetails;
