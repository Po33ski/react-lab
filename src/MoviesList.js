export default function MoviesList (props) {
    return (
        <div>
            <h2>Movies List</h2>
            {props.movies.length < 1 ? <h2>The list of movies is empty</h2> :
        <ul>
            {props.movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
        </ul>}
        </div>
    )
}