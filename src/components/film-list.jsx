import "./film-list.css";
import { FilmCard } from "../components"

const FilmList = ({films}) => {
    const filmList = films.map((film,index) => 
        <li key={index}><FilmCard film={film}/></li>
    );

    return (
        <ul className="film-list">
            {filmList}
        </ul>
    );
};

export default FilmList;