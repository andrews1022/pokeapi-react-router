import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './../components/Header';
import Error from './../pages/Error';
import Home from './../pages/Home';
import PokemonDetails from '../pages/PokemonDetails';
import Footer from './../components/Footer';

const PokeRouter = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/pokemon/:name' component={PokemonDetails} />
				<Route component={Error} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default PokeRouter;
