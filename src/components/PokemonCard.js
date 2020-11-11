import React, { useState, useEffect } from 'react';
import PokemonSprite from './PokemonSprite';
import { Link } from 'react-router-dom';
import { capitalizeName } from './../utility/functions';
import Loading from './Loading';

const PokemonCard = ({ pokemon }) => {
	const [frontSprite, setFrontSprite] = useState('');
	const [backSprite, setBackSprite] = useState('');
	const [pokemonName, setPokemonName] = useState('');
	const [pokedexNum, setPokedexNum] = useState(0);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const abortController = new AbortController();

		const getSprites = async () => {
			try {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
				const data = await response.json();

				setFrontSprite(data.sprites.front_default);
				setBackSprite(data.sprites.back_default);
				setPokedexNum(data.id);
				setPokemonName(pokemon.name);
				setIsLoaded(true);
			} catch (error) {
				console.log(error);
			}
		};

		getSprites();

		return () => {
			abortController.abort();
		};
	}, [pokemon.name]);

	if (isLoaded) {
		return (
			<li className='card'>
				<div className='card__sprite-row'>
					<PokemonSprite
						source={frontSprite}
						direction='front'
						version='default'
						name={pokemonName}
					/>
					<PokemonSprite
						source={backSprite}
						direction='back'
						version='default'
						name={pokemonName}
					/>
				</div>
				<h2 className='card__heading'>
					#{pokedexNum}: {capitalizeName(pokemonName)}
				</h2>
				<Link className='card__button' to={`/pokemon/${pokemonName}`}>
					View Details
				</Link>
			</li>
		);
	} else {
		return (
			<li className='card'>
				<Loading />
			</li>
		);
	}
};

export default PokemonCard;
