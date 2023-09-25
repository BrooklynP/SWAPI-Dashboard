import "./film-card.css";

const FilmCard = ({ film }) => {
    return (
        <article className="film-card">
            <header>
                <h2> - {film.title || ""} - </h2>
            </header>
            <div className="film-card-body">
                <div>
                    <h3>Directed By {film.director || ""}</h3>
                    <h4><small>{film.opening_crawl || ""}</small></h4>
                </div>
                <div className="film-card-stats">
                    <div title="Film Number"><p><i className="fa-solid fa-hashtag"></i></p><p>{film.episode_id || -1}</p></div>
                    <div title="Release Date"><p><i className="fa-solid fa-calendar-days"></i></p><p>{film.release_date || -1}</p></div>
                </div>
            </div>
            <footer title={film.producer|| ""}>
                Produced by {film.producer|| ""}
            </footer>
        </article>
    );
};

export default FilmCard;