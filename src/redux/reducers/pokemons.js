const initialState = {
	loadingPokemons: false,
	loadedPokemons: false,
	loadingPokemon: false,
	loadedPokemon: false,
	pokemons: [],
	pokemonsAll: [],
	next: '',
	pokemonDetails: [],
	error: null,
	selected: ''
}

const pokemons = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_POKEMONS_REQUEST':
			return { ...state, loadingPokemons: true }

		case 'GET_POKEMONS_SUCCESS':
			const next = action.payload.next
			return { ...state, loadingPokemons: false, loadedPokemons: true, pokemonsAll: action.payload.results, next: next }

		case 'GET_POKEMONS_ERROR':
			return { ...state, loadingPokemons: false, error: action.payload }

		case 'GET_LOAD_MORE_REQUEST':
			return { ...state, loadingPokemons: true }

		case 'GET_LOAD_MORE_SUCCESS':
			return { ...state, loadingPokemons: false, loadedPokemons: true, pokemonsAll: action.payload.results, next: action.payload.next }

		case 'GET_LOAD_MORE_ERROR':
			return { ...state, loadingPokemons: false, error: action.payload }

		case 'GET_POKEMON_REQUEST':
			return { ...state, loadingPokemons: true }

		case 'GET_POKEMON_SUCCESS':
			const pokemon = action.payload
			const obj = {}
			obj.id = pokemon.id;
			obj.forms = pokemon.forms[0];
			obj.stats = pokemon.stats;
			obj.types = pokemon.types;
			obj.url = pokemon.sprites.other.dream_world.front_default;
			return { ...state, loadingPokemons: false, loadedPokemons: true, pokemons: [...state.pokemons, obj] }

		case 'GET_POKEMON_ERROR':
			return { ...state, loadingPokemons: false, error: action.payload }

		case 'GET_STATS':
			return { ...state, pokemonDetails: action.payload, selected: action.id }

		default:
			return state
	}
};

export default pokemons;
