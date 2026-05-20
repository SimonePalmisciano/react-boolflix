import { useState, useContext, useEffect } from "react";
import { initCatalog } from "../utils/fetchUtils";
import { MovieContext } from "../contexts/MovieContext";
import { Container } from "react-bootstrap"
import styles from "./SearchBar.module.css"
import { fetchTrendingMovies, fetchTrendingTv } from "../utils/fetchTrending";
import { Link } from "react-router";

const initialSearchValue = '';

function SearchBar() {
    const [searchValue, setSearchValue] = useState(initialSearchValue);
    const { setMovies } = useContext(MovieContext);

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        initCatalog(searchValue)
            .then(data => setMovies(data))
            .catch(err => console.error(err));
        setSearchValue(initialSearchValue);
    };

    useEffect(() => {
        fetchTrendingMovies()
            .then(trendMovies => setMovies(trendMovies));
        // fetchTrendingTv()
        //     .then(trendTv => setTrendingTv(trendTv));
    }, [])

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    BOOLFLIX
                </Link>
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