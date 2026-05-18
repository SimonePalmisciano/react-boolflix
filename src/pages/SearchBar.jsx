import { useState, useContext } from "react";
import useFetch from "../hooks/useFetch";
import {MovieContext} from "../contexts/MovieContext";

const initialSearchValue = '';

function SearchBar() {
    const [searchValue, setSearchValue] = useState(initialSearchValue);
    const { setMovies } = useContext(MovieContext)

    const handleChange = (event) => {
        const target = event.target;
        const {
            value,
            name,
        } = target;

        setSearchValue(value);
        console.log(value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        useFetch(searchValue)
            .then(data => {
                setMovies(data)
            });

        setSearchValue(initialSearchValue);
    };

    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid d-flex justify-content-between">
                <span className="text-white">
                    BOOLFLIX
                </span>
                <div className="d-flex justify-content-center">
                    <form className="d-flex" onSubmit={submitHandler}>
                        <input
                            className="form-control me-2"
                            type="text"
                            placeholder="Search Movie..."
                            value={searchValue}
                            name="search"
                            onChange={handleChange}
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default SearchBar