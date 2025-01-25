export default function Movie (props) {

    
    return (
        <div>
            <li key={props.movie.title}>{props.movie.title} {props.movie.year} 
                <button onClick={props.deleteMovie(props.movie.title)}></button>
            </li>
        </div>
    )
}