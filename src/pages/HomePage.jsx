import { useContext } from "react"
import { Card, CardText, Col, Container, Row } from "react-bootstrap"
import SearchBar from "./SearchBar"
import { MovieContext } from "../contexts/MovieContext"
import "flag-icons/css/flag-icons.min.css";
import { getImageURL } from "../utils/fetchUtils";
import languageUtils from "../utils/languageUtils";

function HomePage() {
    const movies = useContext(MovieContext);
    console.log(movies);


    return (
        <>
            <Container>
                <Row>
                    {movies.movies.map(movie => {
                        const {
                            id,
                            original_language,
                            original_title,
                            title,
                            vote_average,
                            poster_path,
                        } = movie;

                        const stars = Math.ceil(vote_average / 2);

                        return (
                            <Col key={id} xs={12} sm={6} md={4} data-bs-theme="dark">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>
                                            <h5>{title}</h5>
                                            {original_title !== title && <h5>Titolo Originale:{original_title}</h5>}
                                            <img src={getImageURL(movie.poster_path, 'w342')} alt={movie.title} />
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            Lingua Originale: <span className={languageUtils(original_language)} />
                                        </Card.Text>
                                        <Card.Text>
                                            Voto: {vote_average.toFixed(2)};
                                        </Card.Text>
                                        <CardText>
                                            {[1, 2, 3, 4, 5].map((index) =>
                                                index <= stars ? (
                                                    <i key={index} className="bi bi-star-fill text-warning"></i>
                                                ) : (
                                                    <i key={index} className="bi bi-star text-warning"></i>
                                                )
                                            )}
                                        </CardText>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}
export default HomePage