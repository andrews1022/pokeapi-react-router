# PokeAPI with React Router

This is a project I build to practice working with React Router DOM.

### Components

[x] Header/main nav <br />
[x] Footer <br />
[x] List of PokeCards + pagination <br />
[x] Individual PokeCard <br />
[x] Page to display details of clicked PokeCard <br />
[x] Error/404 page <br />

### Overall data flow

[x] Have header and footer on all pages <br />
[x] Fetch data from API, then create PokemonCard component for each (PokemonList.js & PokemonCard.js) <br />
[x] Include Link to view that specific Pokemon in more detail (PokemonCard.js) <br />
[x] On home page, display list of Pokemon Cards with pagination buttons (PokemonList.js) <br />
[x] Handle state of next/previous buttons (PokemonList.js) <br />
[ ] Have "Go Back" url be same group/page of poke cards last displayed (pass down current page url) <br />

### Things I learned

This was my first project on my own using React Router DOM, and I've known of the PokeAPI for sometime now, so I wanted to work with both of these to make an app with this in mind. Here are some of the things I learned on the way:

- Using DOM API 'AbortController' to handle cancelling previous fetch requests and prevent and race conditions
- Further practice/use of the useEffect & useState Hooks
- Further practice using React Router DOM, and common components such as BrowserRouter, Switch, Route, & Link
