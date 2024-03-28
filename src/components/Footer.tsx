import { Link } from "react-router-dom";

//Assets

import PokemonPic from "../assets/pikachu.png"
import LocationPic from "../assets/pointer.png"
import ItemsPic from "../assets/pokeball.png"
import styles from "./footer.module.css"


const Footer = () => {
    return (
    
    <footer className={styles.footer}>
        <Link to="/pokemons" className={styles.footerLink}>
            <img className={styles.footerIcon} src={PokemonPic} alt="Pikachu" />
            Pokemons
        </Link>
        <Link to="/items" className={styles.footerLink}>
            <img className={styles.footerIcon} src={ItemsPic} alt="PokeBall" />
            Items
        </Link>
        <Link to="/location" className={styles.footerLink}>
            <img className={styles.footerIcon} src={LocationPic} alt="Location" />
            Maps
        </Link>
    </footer>
    );
  };
  
  export default Footer;