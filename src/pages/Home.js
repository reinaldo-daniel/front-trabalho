import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import Typewriter from "typewriter-effect"

import "./Home.css"
import Card from "../componentes/Card"
import Carregando from "../images/carregando.gif"

export default function Home() {
    const [animes, setAnimes] = useState([]);
    const [valor, setValor] = useState('');

    const handleChange = (event) => {
        setValor(event.target.value);
      };

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
    console.log(valor);
    console.log('====================================');

    return(
        <>
            <div className="banner">
                <div className="pesquisa">
                    <h2 className="titlePesquisa">
                        Aqui você encontra seus 
                        <Typewriter 
                            onInit={(typewriter) =>{
                                typewriter
                                    .typeString("mangás")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("personagens")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("animes")
                                    .start();
                            }}
                        />
                    </h2>
                    <form className="pesquisar" onSubmit={handleChange}>
                        <input className="inputPesquisa" onChange={handleChange} type={"text"} placeholder={"Example: Black Clover"}/>
                        <button type="submit" className="botao"><AiOutlineSearch className="lupa"/></button>
                    </form>
                </div>
            </div>
            <div className="container">
                {animes.length === 0 && <img className="carregando" src={Carregando} alt="loading..."/>}
                {animes.length > 0 &&
                    <div className="carousel">
                        {animes.map((anime) => {
                            const genres = anime.genres.map((genre) => {
                                return genre.name
                            })
                            return <Card 
                            key={anime.mal_id}
                            img={anime.images.jpg.image_url}
                            title={anime.title}
                            score={anime.score}
                            year={anime.year}
                            genres={genres}
                            synopsis={anime.synopsis}
                            duration={anime.duration}
                            rating={anime.rating}
                            />
                        })}
                    </div>
                }
            </div>
        </>
    );
}