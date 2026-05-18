import { createContext, useState } from "react"

const MovieContext = createContext(null);

function MovieProvider({ children }) {
    const [movies, setMovies] = useState([]);

    const valueToSend = {
        movies,
        setMovies,
    };

    return (
        <>
            <MovieContext value={valueToSend}>
                {children}
            </MovieContext>
        </>
    )
}
export {
    MovieContext,
    MovieProvider
}