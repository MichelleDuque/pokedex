import { useNavigate, useParams } from "react-router-dom";
import PokeballImg from "../assets/pokeball.png";
import BulbasaurImg from "../assets/bulbasaur.gif";
import Footer from "../components/Footer";
import styles from "./pokemon.module.css"

const Pokemon = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
  <>
  {/* The -1 in navigate works to go back a website before that one, this case pokemons */}
  <button className={styles.pokeballButton} onClick={()=> navigate(-1)}>
    <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" />
    Go Back
  </button>
  <div className={styles.pokemon}>
    <main className={styles.pokemonInfo}>
      <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
      <div>Nr. 001</div>
      <div>
        <img src={BulbasaurImg} alt="Bulbasaur" className={styles.pokemonInfoImg}/>
      </div>
      <div>HP: 000</div>
      <div>Attack: 000</div>
      <div>Defense: 000</div>
    </main>
  </div>
  <Footer />
  </>
  );
};

export default Pokemon;