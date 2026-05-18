function MainLayout() {
    return (
        <header>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-secondary" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}
export default MainLayout