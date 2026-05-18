import { useContext } from "react"
import { Card, Col } from "react-bootstrap"
import SearchBar from "./SearchBar"
import { MovieContext } from "../contexts/MovieContext"
import "flag-icons/css/flag-icons.min.css";

function HomePage() {
    const movies = useContext(MovieContext);
    console.log(movies);
    

    return (
        <>
            <div className="container">
                <div className="row">
                    {movies.movies.map(movie => {
                        const {
                            id,
                            original_language,
                            original_title,
                            title,
                            vote_average,
                        } = movie;

                        return (
                            <Col key={id} xs={12} sm={6} md={4} data-bs-theme="dark">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>
                                            <h5>Titolo: {title}</h5>
                                            {original_title !== title && <h5>Titolo Originale:{original_title}</h5>}
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            Lingua Originale: <span className="fi fi-us" />
                                        </Card.Text>
                                        <Card.Text>
                                            Voto: {vote_average.toFixed(2)};
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default HomePage