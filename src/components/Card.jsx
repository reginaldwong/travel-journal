import React from "react"

const Card = (props) => {
    return (
        <div>
            <img src={props.imageUrl} alt="" />
            <h1>{props.title}</h1>
        </div>
    )
}

export default Card;