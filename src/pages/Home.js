import { useState, useEffect } from "react";
import axios from "axios";

import "./Home.css"
import Card from "../componentes/Card"

export default function Home() {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        axios.get("https://api.jikan.moe/v4/top/anime")
        .then((response) => {
            setAnimes(response.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    console.log('====================================');
    console.log(animes);
    console.log('====================================');

    return(
        <>
            <div className="cards">
                {animes.map((anime) => {
                    return <Card 
                    key={anime.mal_id}
                    img={anime.images.jpg.image_url}
                    title={anime.title}
                    score={anime.score}
                    year={anime.year}
                    duration={anime.duration}
                    rating={anime.rating}
                    />
                })}
            </div>
        </>
    );
}