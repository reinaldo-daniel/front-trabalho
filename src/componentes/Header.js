import { Link } from "react-router-dom";

import "./Header.css"

export default function Header({ isScrolled }) {

    const backgroundStyle = () => {
        return {
            background: isScrolled
                    ? "rgb(26, 63, 63)" 
                    : "rgba(27, 54, 54, 0.591)",
          };
    };

    return(
        <header style={backgroundStyle()}>
            <h1>AnimeWEB</h1>
            <nav>
                <Link>Animes</Link>
                <Link>Mangás</Link>
                <Link>Personagens</Link>
            </nav>
        </header>
    )
}