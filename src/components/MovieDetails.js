import React, { useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
    const param = useParams();
    const [movie, setMovie] = useState([]);
    const [showPlayer, setShowPlayer] = useState(false);

    // Get movie details
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=ar`);
        setMovie(res.data);
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    const handleWatch = () => {
        setShowPlayer(true);
        // Scroll to the player after a short delay to allow rendering
        setTimeout(() => {
            const playerSection = document.getElementById('video-player-section');
            if (playerSection) {
                playerSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4">
                    <div className="card-detalis d-flex flex-column flex-md-row align-items-center">
                        <img
                            className="img-movie"
                            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                            alt="poster"
                        />
                        <div className="justify-content-center text-center mx-auto px-2">
                            <p className="card-text-details border-bottom">
                                اسم الفيلم: {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                تاريخ الفيلم: {movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                عدد المقيمين: {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                التقييم: {movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1">
                    <div className="card-story d-flex flex-column align-items-start">
                        <div className="text-end p-3 p-md-4 w-100">
                            <p className="card-text-title border-bottom">القصة:</p>
                        </div>
                        <div className="text-end px-2 px-md-3 pb-3 w-100">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="10" xs="12" sm="12" className="mt-2 d-flex flex-wrap justify-content-center gap-2">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary">
                            عوده للرئيسيه
                        </button>
                    </Link>
                    <button
                        onClick={handleWatch}
                        style={{ backgroundColor: showPlayer ? "#8a4528" : "#b45b35", border: "none" }}
                        className="btn btn-primary">
                        {showPlayer ? "جاري التشغيل ▶" : "مشاهده الفيلم"}
                    </button>
                </Col>
            </Row>

            {/* Video Player Section */}
            {showPlayer && (
                <Row className="justify-content-center" id="video-player-section">
                    <Col md="12" xs="12" sm="12" className="mt-3 mb-4 px-1 px-md-3">
                        <div className="video-player-container">
                            <div className="video-player-header">
                                <span className="video-player-title">
                                    🎬 {movie.title || "مشاهدة الفيلم"}
                                </span>
                                <button
                                    className="video-player-close"
                                    onClick={() => setShowPlayer(false)}
                                    title="إغلاق المشغل"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="video-player-wrapper">
                                <iframe
                                    src={`https://vidapi.xyz/embed/movie/${param.id}`}
                                    title={movie.title || "Movie Player"}
                                    frameBorder="0"
                                    allowFullScreen
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    className="video-player-iframe"
                                ></iframe>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default MovieDetails;


