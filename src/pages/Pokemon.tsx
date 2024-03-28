import { useNavigate, useParams } from "react-router-dom";
import PokeballImg from "../assets/pokeball.png";
import Footer from "../components/Footer";
import styles from "./pokemon.module.css"
import { useEffect, useState } from "react";
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";

const Pokemon = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() =>{
    async function getPokemon(){
      setIsLoading(true);
      await waitFor(500);
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon)
      setIsLoading(false);
    }
    getPokemon();

}, [name])

if (isLoading || !pokemon){
  return <LoadingScreen />;
}

  return (
  <>
  {/* The -1 in navigate works to go back a website before that one, this case pokemons */}
  <button className={styles.pokeballButton} onClick={()=> navigate(-1)}>
    <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" />
    Go Back
  </button>
  <div className={styles.pokemon}>
    <main className={styles.pokemonInfo}>
      <div className={styles.pokemonTitle}>{pokemon?.name?.toUpperCase()}</div>
      <div><h3>Nr. {pokemon?.id}</h3></div>
      <div>
        <img src={pokemon?.imgSrc} alt={pokemon?.name} className={styles.pokemonInfoImg}/>
      </div>
      <div><h3 className={styles.pokemonInfoText}>HP:<span> {pokemon?.hp}</span></h3></div>
      <div><h3 className={styles.pokemonInfoText}>Attack:<span> {pokemon?.attack}</span></h3></div>
      <div><h3 className={styles.pokemonInfoText}>Defense:<span> {pokemon?.defense}</span></h3></div>
    </main>
  </div>
  <Footer />
  </>
  );
};

export default Pokemon;