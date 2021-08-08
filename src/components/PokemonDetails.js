import React from 'react';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from '../assets/scss/PokemonDetails.module.scss';

const PokemonDetails = ({ pokemonDetails }) => {
    return (
        <div className={styles.pokemonDetails}>
            <div className={styles.block}>
                <CardMedia
                    className={styles.img}
                    image={pokemonDetails.img}
                    title={pokemonDetails.name}
                />
                <Typography component="h4" variant="h4">
                    {pokemonDetails.name}
                </Typography>

                <table>
                    <thead>
                        <tr>
                            <th className={styles.type}>Type</th>
                            <th className={styles.fire}>Fire</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemonDetails.stats.map((stat, index) => (
                            <tr key={index}>
                                <td className={styles.type}>{stat.stat.name}</td>
                                <td className={styles.fire}>{stat.base_stat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
PokemonDetails.propTypes = {
    pokemonDetails: PropTypes.object
}
export default PokemonDetails