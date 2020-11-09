import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './../components/Header';
import PokemonList from './../components/PokemonList';
import PokemonDetails from './../components/PokemonDetails';
import Footer from './../components/Footer';

const PokeRouter = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path='/' component={PokemonList} />
				<Route path='/pokemon/:name' component={PokemonDetails} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default PokeRouter;
