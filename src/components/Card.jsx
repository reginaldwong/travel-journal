import React from "react"

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt="" className="card--image" />
            <div className="card--stats">
            <div className="card--location"> <img src="/public/assets/pin.png" alt="pin" /> <h2>{props.item.location} </h2>
                <a href={props.item.googleMapsUrl} className="card--link" target="_blank">View on Google Maps</a>
            </div> 
            <h2 className="card--title">{props.item.title}</h2>
            <p className="card--dates">{props.item.startDate} - {props.item.endDate}</p>
            <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card;