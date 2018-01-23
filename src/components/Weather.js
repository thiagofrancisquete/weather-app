import React from "react";

const Weather = props => (
        <div>
            { props.city &&  props.country && <p>Location: { props.city }, { props.country }</p> }
            { props.temperature && <p>Temperature: { props.temperature } ºC </p> }
            { props.max && <p>Max: {props.max} ºC </p>}
            { props.min  && <p>Min: {props.min} ºC </p>}
            { props.humidity && <p>Humidity: { props.humidity } %</p> }
            { props.description && <p>Description: { props.description }</p> }
            { props.error && <p> { props.error } </p> }
        </div>
)

export default Weather