import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import selectedImg from '../assets/img/selected.png';
import styles from '../assets/scss/Card.module.scss';


function MediaControlCard({ pokemon, onSelect, selected }) {
    return (
        <Card onClick={(e) => onSelect(e, pokemon.stats, pokemon.url, pokemon.forms.name, pokemon.id)} className={styles.card}>
            <CardMedia
                className={styles.img}
                image={pokemon.url}
                title={pokemon.forms.name}
            />
            {selected === pokemon.id && <img className={styles.selected} src={selectedImg} alt="selected" />}
            <div className={styles.details}>
                <CardContent className={styles.content}>
                    <Typography component="h4" variant="h4">
                        {pokemon.forms.name}
                    </Typography>

                    {pokemon.types.length !== 0 && <ul className={styles.ul} >
                        {pokemon.types.map((type) => (
                            <li className={styles[type.type.name]} key={type.slot}><span>{type.type.name}</span></li>
                        ))}
                    </ul>}
                </CardContent>
            </div>
        </Card>
    );
}
MediaControlCard.propTypes = {
    pokemon: PropTypes.object,
    onSelect: PropTypes.func,
}

export default MediaControlCard;