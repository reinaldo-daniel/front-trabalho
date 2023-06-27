import { AiFillStar, AiFillCalendar, AiFillClockCircle } from "react-icons/ai";

import "./Card.css";
import Rating from "./Rating";
// import Timing from "./Duration";

export default function Card({img, title, score, year, genres, synopsis, duration, rating}) {
    const abreviaTitulo = title.length > 20
        ? title.substring(0, 20) + "..." 
        : title;

    const abreviaSinopse = synopsis.length > 120
        ? synopsis.substring(0, 120) + "..." 
        : synopsis;

    const renderGenres = ((genre) => {
        return genre.length > 15
            ? genre.substring(0, 15) + "..." 
            : genre;
    })

    const renderData = ((data) => {
        return data 
            ? <p className="anoLanc"><AiFillCalendar className="calendar"/>{year}</p>
            :null
    })

    return (
        <div className="card">
            <img src={img} alt={"imagem do anime" + title} />
            <div className="info">
                <div className="cabecalho">
                    <h2 className="title">
                        {abreviaTitulo}
                    </h2>
                    <Rating rating={rating}/>
                </div>
                <div className="especify">
                    <p className="score"><AiFillStar className="star"/> {score}/10</p>
                    <p className="genres">{renderGenres(genres.toString())}</p>
                </div>
                <p className="sinopse">
                    {abreviaSinopse}
                </p>
            </div>
        </div>
    )
}