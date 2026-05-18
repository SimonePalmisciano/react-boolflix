function SearchBar() {

    const MVDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
            .then(response => {                
                return response.json()
            })
            .then(data => console.log(data))
            .catch(err => console.error(err));
    };

    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid d-flex justify-content-between">
                <span className="text-white">
                    BOOLFLIX
                </span>
                <div className="d-flex justify-content-center">
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search Movie..."
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="submit"
                            onClick={submitHandler}
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