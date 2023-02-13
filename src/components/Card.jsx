import React from "react"

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt="" />
            <h3>{props.item.location}</h3> <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            <h2>{props.item.title}</h2>
            <p>{props.item.startDate} - {props.item.endDate}</p>
            <p>{props.item.description}</p>
        </div>
    )
}

export default Card;