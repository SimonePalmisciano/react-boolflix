function SearchBar() {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid d-flex justify-content-between">
                <span className="text-white">
                    BOOLFLIX
                </span>
                <div className="d-flex justify-content-center">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search Movie..." aria-label="Search" />
                        <button className="btn btn-outline-secondary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default SearchBar