export default function Education(props){
    return(
        <div className="education">
            <h3>{props.degree}</h3>
            <p>{props.institute}</p>
            <p> { props.year}</p>
        </div>
    )
}