import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import { MovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/Main/MovieCard";
import { useState } from "react";
import { useEffect } from "react";

function HomePage() {
    const movies = useContext(MovieContext);

    return (
        <>
            <Container className="my-3">
                <Row>
                    {movies.movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </Row>
            </Container>

        </>
    )
}

export default HomePage