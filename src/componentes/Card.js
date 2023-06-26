import { AiFillStar, AiFillCalendar, AiFillClockCircle } from "react-icons/ai";

import "./Card.css";
import Rating from "./Rating";
import Timing from "./Duration";

export default function Card({img, title, score, year, duration, rating}) {
    const abreviaTitulo = title.length > 20
        ? title.substring(0, 20) + "..." 
        : title;
    
    const renderData = ((data) => {
        return data 
            ? <p className="anoLanc"><AiFillCalendar className="calendar"/>{year}</p>
            :null
    })

    return (
        <div className="card">
            <img src={img} alt={"imagem do anime" + title} />
            <h2 className="title">{abreviaTitulo}</h2>
            <div className="info">
                <p className="score"><AiFillStar className="star"/>{score}</p>
                <p className="duration"><AiFillClockCircle />{Timing({duration})}</p>
                {renderData(year)}
                <Rating rating={rating} />
            </div>
        </div>
    )
}