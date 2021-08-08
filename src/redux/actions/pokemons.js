import axios from 'axios';


/**
 * Get Pokemons
 */
const getPokemons = () => async dispatch => {
    dispatch({ type: 'GET_POKEMONS_REQUEST' })
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12`)
        dispatch({ type: 'GET_POKEMONS_SUCCESS', payload: response.data })
    }
    catch (err) {
        dispatch({ type: 'GET_POKEMONS_ERROR', payload: err.message })
    }
}
/**
 * Get Pokemon info
 */
const getPokemon = (url) => async dispatch => {
    dispatch({ type: 'GET_POKEMON_REQUEST' })
    try {
        const response = await axios.get(`${url}`)
        dispatch({ type: 'GET_POKEMON_SUCCESS', payload: response.data })
    }
    catch (err) {
        dispatch({ type: 'GET_POKEMON_ERROR', payload: err.message })
    }
}

/**
 * Load More
 */
const getLoadMore = (url) => async dispatch => {
    dispatch({ type: 'GET_LOAD_MORE_REQUEST' })
    try {
        const response = await axios.get(`${url}`)
        dispatch({ type: 'GET_LOAD_MORE_SUCCESS', payload: response.data })
    }
    catch (err) {
        dispatch({ type: 'GET_LOAD_MORE_ERROR', payload: err.message })
    }
}

/**
 * Get Stats info
 */
const getStats = (pokemonDetails) => dispatch => {
    dispatch({ type: 'GET_STATS', payload: pokemonDetails })
}

export {
    getPokemons, getPokemon, getLoadMore, getStats
}

