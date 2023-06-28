import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Anime() {
    const { id } = useParams();
    const [ anime, setAnime ] = useState({});

    useEffect(() => {
        axios(`https://api.jikan.moe/v4/anime/${id}/full`)    
            .then((response) => {
                setAnime(response.data.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    console.log('====================================');
    console.log(anime);
    console.log('====================================');

    return (
        <>
            {/* <img src={anime.trailer.images.maximum_image_url} /> */}
        </>
    )
}