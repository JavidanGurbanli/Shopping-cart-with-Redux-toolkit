import React from 'react';
import Logo from '../images/mapMarker.png';
const Card = (props) => {
    return (
        <div className="container">
            <div className="card">
             <img className="place" src={props.imageUrl}/>
             <div className="card-stats">
              <div class="header">
                <img className="logo"src={Logo}/>
                <div className="location">{props.location}</div>
                <a href={props.mapsUrl}>View on Google Maps</a>
              </div>
              <h1 className="title">{props.title}</h1>
              <p className="date">{props.startDate} - {props.endDate}</p>
              <p className="description">{props.description}</p>
             </div>
            </div>
            <hr/>
        </div>    
    )
}
export default Card;