import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function useMovie() {
    const movies = useContext(MovieContext);
    if (!movies) {
        console.error("Hai dimenticato di wrappare MovieProvider attorno all'APP");
    }
    return movies
}

export default useMovie;