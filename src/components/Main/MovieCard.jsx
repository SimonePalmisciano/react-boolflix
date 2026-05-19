import { Card, CardText, Col } from "react-bootstrap"
import { getImageURL } from "../../utils/fetchUtils";
import languageUtils from "../../utils/languageUtils";
import styles from "./MovieCard.module.css"

function MovieCard({ movie }) {
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
        <div key={id} className={styles.col}>
            <Card className={styles.card}>
                <Card.Header className={styles.cardHeader}>
                    <img
                        src={getImageURL(poster_path, 'w342')}
                        alt={title}
                        className={styles.image}
                    />
                    <Card.Body className={styles.cardBody}>
                        <Card.Title className={styles.cardTitle}>
                            <div className={styles.titleText}>{title}</div>
                            {original_title !== title && (
                                <div className={styles.originalTitle}>{original_title}</div>
                            )}
                        </Card.Title>
                        <Card.Text className={styles.cardText}>
                            <span className={styles.rating}>{vote_average.toFixed(1)}/10</span>
                        </Card.Text>
                        <Card.Text className={styles.cardText}>
                            <span className={`${styles.language} ${languageUtils(original_language)}`} />
                        </Card.Text>
                        <div className={styles.stars}>
                            {[1, 2, 3, 4, 5].map((index) =>
                                index <= stars ? (
                                    <i key={index} className={`bi bi-star-fill ${styles.star}`}></i>
                                ) : (
                                    <i key={index} className={`bi bi-star ${styles.star}`}></i>
                                )
                            )}
                        </div>
                    </Card.Body>
                </Card.Header>
            </Card>
        </div>
    )
}

export default MovieCard