import styles from "./header.module.css"
import React from 'react';

type headerProps = {
    query: string;
    setQuery: (query: string ) => void;
}


const Header = ({query, setQuery}: headerProps) => {
    return (
        <header className={styles.header}>        
            <input value={query} className={styles.input} placeholder='Search a Pokemon' type="text" onChange={(event) => setQuery(event.target.value)} />
        </header>

    );
};

export default Header;
