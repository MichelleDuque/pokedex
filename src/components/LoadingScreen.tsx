import React, { useState } from "react";
import LoadingIcon from "../assets/LoadingIcon.svg";
import styles from "./loadingScreen.module.css";

const LoadingScreen = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return( 
        <div className={styles.loadingScreen}>
            <img
                className={`${styles.loadingScreenIcon} ${imageLoaded ? styles.loaded : ''}`}
                src={LoadingIcon}
                alt="Pokedex"
                onLoad={() => setImageLoaded(true)} 
            />
            <h2 className={styles.loading}></h2>
        </div>
    );
};
  
export default LoadingScreen;
