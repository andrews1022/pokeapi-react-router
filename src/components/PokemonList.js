import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import Loading from './Loading';
import PaginationButton from './PaginationButton';

const PokemonList = () => {
	// state variables
	const [pokemon, setPokemon] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
	const [nextPageUrl, setNextPageUrl] = useState('');
	const [prevPageUrl, setPrevPageUrl] = useState('');

	// make initial request - get first 20 pokemon
	useEffect(() => {
		// AbortController allows us to cancel fetch requests
		// this is an alternative to using axios with its built in cancel + cancelToken functionality
		const abortController = new AbortController();

		setIsLoaded(false);

		const getPokemon = async () => {
			try {
				const response = await fetch(currentPageUrl);
				const data = await response.json();

				// set various state values
				setNextPageUrl(data.next);
				setPrevPageUrl(data.previous);
				setPokemon(data.results);
				setIsLoaded(true);
			} catch (error) {
				console.log(error);
			}
		};

		// run the above function each time
		getPokemon();

		// we can return a function
		// this allows for cleanup/prevent race conditions (cancel previous request each time we make a new one)
		return () => {
			abortController.abort();
		};

		// we pass in the currentPageUrl as argument to say that each time it changes, re-run this effect
		// this is great for pagination, so we can fetch the next/previous 20 pokemon
	}, [currentPageUrl]);

	// handle going to next and previous pages
	const gotoNextPage = () => setCurrentPageUrl(nextPageUrl);
	const gotoPrevPage = () => setCurrentPageUrl(prevPageUrl);

	if (isLoaded) {
		return (
			<div className='pokemon'>
				<ul className='pokemon__list'>
					{pokemon.map((poke) => (
						<PokemonCard key={poke.name} pokemon={poke} goBackUrl={currentPageUrl} />
					))}
				</ul>
				{prevPageUrl && (
					<PaginationButton direction='left' pageChange={prevPageUrl ? gotoPrevPage : null} />
				)}
				{nextPageUrl && (
					<PaginationButton direction='right' pageChange={nextPageUrl ? gotoNextPage : null} />
				)}
			</div>
		);
	} else {
		return <Loading />;
	}
};

export default PokemonList;
