import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PokemonSprite from './../components/PokemonSprite';
import Loading from './../components/Loading';
import { capitalizeName } from '../utility/functions';

const PokemonDetails = (props) => {
	const pokemonName = props.match.params.name;
	// console.log(props);

	const [pokedexNum, setPokedexNum] = useState(0);
	const [frontDefaultSprite, setFrontDefaultSprite] = useState('');
	const [backDefaultSprite, setBackDefaultSprite] = useState('');
	const [frontShinySprite, setFrontShinySprite] = useState('');
	const [backShinySprite, setBackShinySprite] = useState('');
	const [types, setTypes] = useState([]);
	const [description, setDescription] = useState('');
	// const [evolutions, setEvolutions] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const getPokemonDetails = async () => {
			try {
				let data;

				/////////////////////////
				// first fetch: base data
				const firstFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
				data = await firstFetch.json();

				setPokedexNum(data.id);
				setFrontDefaultSprite(data.sprites.front_default);
				setFrontShinySprite(data.sprites.front_shiny);
				setBackDefaultSprite(data.sprites.back_default);
				setBackShinySprite(data.sprites.back_shiny);
				setTypes(data.types);

				/////////////////////////
				// second fetch: description
				const secondFetch = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
				data = await secondFetch.json();

				setDescription(data.flavor_text_entries[0].flavor_text.replace('', ' '));

				/////////////////////////
				// third fetch: evolution(s)
				// const thirdFetch = await fetch(data.evolution_chain.url);
				// data = await thirdFetch.json();

				// console.log('DATA: ', data);

				// const baseEvolution = data.chain.species.name;
				// console.log('BASE EVO: ', baseEvolution);

				// const middleEvolution = data.chain.evolves_to[0].species.name;
				// console.log('MIDDLE EVO: ', middleEvolution);

				// console.log('CURRENT EVO: ', pokemonName);
				// setEvolutions(evolutions.push(baseEvolution));

				// console.log('EVOLUTIONS: ', evolutions);

				setIsLoaded(true);
			} catch (error) {
				console.log(error);
			}
		};

		getPokemonDetails();
	}, [pokemonName]);

	if (isLoaded) {
		return (
			<div className='details'>
				<Link to='/' className='details__button'>
					<i className='details__button-icon fas fa-angle-left'></i>{' '}
					<span className='details__button-text'>Go back</span>
				</Link>
				<div className='details__wrapper'>
					<h2 className='details__heading'>
						#{pokedexNum}: {capitalizeName(pokemonName)}
					</h2>
					<div className='details__sprite-wrapper'>
						<div className='details__sprite-row'>
							<PokemonSprite
								source={frontDefaultSprite}
								direction='front'
								version='default'
								name={pokemonName}
							/>
							<PokemonSprite
								source={frontShinySprite}
								direction='front'
								version='shiny'
								name={pokemonName}
							/>
						</div>
						<div className='details__sprite-row'>
							<PokemonSprite
								source={backDefaultSprite}
								direction='back'
								version='default'
								name={pokemonName}
							/>
							<PokemonSprite
								source={backShinySprite}
								direction='back'
								version='shiny'
								name={pokemonName}
							/>
						</div>
					</div>
					<div className='details__info'>
						<div className='details__types'>
							<h3 className='details__types-heading'>Types:</h3>
							<div className='details__types-wrapper'>
								{types.map((type) => (
									<span className={`details__types-type text-${type.type.name}`} key={type.slot}>
										{type.type.name}
									</span>
								))}
							</div>
						</div>
						<div className='details__description'>
							<h3 className='details__description-heading'>Description:</h3>
							<p className='details__description-copy'>{description}</p>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <Loading />;
	}
};

export default PokemonDetails;
