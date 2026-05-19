import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import { MovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/Main/MovieCard";
import { useState } from "react";
import { useEffect } from "react";
import fetchTrending from "../utils/fetchTrending";

{/*
                    {movies.length !== 0 ? movies.movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))} */}

function HomePage() {
    const movies = useContext(MovieContext);
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        fetchTrending()
        .then(trendMovies => setTrendingMovies(trendMovies))
        console.log(trendingMovies);
        console.log(fetchTrending());
        
    },[])

    return (
        <>
            {movies.length === 0 ?
                <Container className="my-3">
                    <Row>
                        {movies.movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </Row>
                </Container>
                :
                <Container className="my-3">
                    <h1>mettere i film in tendenza prima che faccia la ricerca</h1>
                    <Row className="my-3">
                        {trendingMovies.map(movie => {
                            return (
                                <MovieCard key={movie.id} movie={movie} />
                            )
                        })}
                    </Row>
                    <h1>mettere i film in tendenza prima che faccia la ricerca</h1>
                    <Row className="my-3">
                        <p>card</p>
                    </Row>
                    <h1>mettere i film in tendenza prima che faccia la ricerca</h1>
                    <Row className="my-3">
                        <p>card</p>
                    </Row>
                    <h1>mettere i film in tendenza prima che faccia la ricerca</h1>
                    <Row className="my-3">
                        <p>card</p>
                    </Row>
                </Container>
            }
        </>
    )
}

export default HomePage