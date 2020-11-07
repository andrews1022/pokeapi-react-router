import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import Footer from './components/Footer';
import './styles/app.min.css';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path='/' component={PokemonList} />
					<Route path='/pokemon/:id' component={PokemonDetails} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
