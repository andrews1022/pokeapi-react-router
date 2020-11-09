import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
	const [pokemon, setPokemon] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPokemon();
	}, []);

	const getPokemon = async () => {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon');
		const pokemon = await response.json();

		setIsLoaded(true);
		setPokemon(pokemon.results);
	};

	if (isLoaded) {
		return (
			<div className='pokemon'>
				<ul className='pokemon__list'>
					{pokemon.map((poke) => (
						<PokemonCard key={poke.name} pokemon={poke} />
					))}
				</ul>
			</div>
		);
	} else {
		return <p>Loading...</p>;
	}
};

export default PokemonList;
