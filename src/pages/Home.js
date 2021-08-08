import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PokemonActions from '../redux/actions/pokemons';
import { Card, Button, PokemonDetails } from '../components'
import styles from '../assets/scss/Home.module.scss';
const Home = (props) => {
    React.useEffect(() => {
        props.getPokemons();
    }, [])
    React.useEffect(() => {
        if (props.loadedPokemons) {
            props.pokemonsAll.map((pokemon) => {
                props.getPokemon(pokemon.url)
            })
        }
    }, [props.pokemonsAll])
    const handleClick = () => {
        if (props.next !== '') {
            props.getLoadMore(props.next);
        }
    };
    const onChekedCart = (e, stats, img, name) => {
        props.getStats({ name, img, stats });
    }
    return (
        <div className={styles.container}>
            <div className={styles.cardCotainer}>
                {props.loadedPokemons &&
                    props.pokemons.map((pokemon) => (
                        <Card onSelect={onChekedCart} key={pokemon.id} pokemon={pokemon} />
                    ))
                }
                <Button onClick={handleClick} label="Load More" />
            </div>
            {props.pokemonDetails.length !== 0 &&
                <PokemonDetails pokemonDetails={props.pokemonDetails} />
            }

        </div>
    )
}

const mapStateToProps = state => ({
    pokemons: state.pokemons.pokemons,
    pokemonsAll: state.pokemons.pokemonsAll,
    next: state.pokemons.next,
    loadedPokemons: state.pokemons.loadedPokemons,
    pokemonDetails: state.pokemons.pokemonDetails,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...PokemonActions,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home));