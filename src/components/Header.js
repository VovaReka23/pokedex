import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png';
import styles from '../assets/scss/Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to={`/pokedex`}>
                <img className={styles.logo} src={logo} alt="logo" />
            </Link>
        </header>
    )
}




export default Header;
