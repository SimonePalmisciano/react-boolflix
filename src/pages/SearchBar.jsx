import { useState, useContext } from "react";
import { initCatalog } from "../utils/fetchUtils";
import { MovieContext } from "../contexts/MovieContext";
import { Container } from "react-bootstrap"
import styles from "./SearchBar.module.css"

const initialSearchValue = '';

function SearchBar() {
    const [searchValue, setSearchValue] = useState(initialSearchValue);
    const { setMovies } = useContext(MovieContext)

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        initCatalog(searchValue)
            .then(data => setMovies(data))
            .catch(err => console.error(err));
        setSearchValue(initialSearchValue);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <span className={styles.logo}>
                    BOOLFLIX
                </span>
                <form className={styles.form} onSubmit={submitHandler}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Cerca film o serie..."
                        value={searchValue}
                        name="search"
                        onChange={handleChange}
                    />
                    <button
                        className={styles.button}
                        type="submit"
                    >
                        Cerca
                    </button>
                </form>
            </div>
        </nav>
    )
}

export default SearchBar