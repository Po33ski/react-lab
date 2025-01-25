import Movie from "./Movie"

export default function MoviesList (props) {

    function deleteMovie (title) {
        props.
    }
    return (
        <div>
            <h2>Movies List</h2>
            {props.movies.length < 1 ? <h2>The list of movies is empty</h2> :
        <ul>
            {props.movies.map((movie) => <Movie movie={movie} deleteMovie={(title) => deleteMovie(title)}/>)}
        </ul>}
        </div>
    )
}