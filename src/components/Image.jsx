import './image.css'

export function Image(props) {
    return(
        <img className="image" src={props.link} />
    )
}