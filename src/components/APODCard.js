import React from "react";

const APODCard = props => {
    return (
        <div className="apod_card">
            <img className="apod_img" alt="Picture of the Day" src={props.img} />
            <h2>{props.date}</h2>
            <h2>{props.title}</h2>
            <p>{props.description}}</p>
        </div>
    )
};

export default APODCard;