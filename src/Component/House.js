//Create a functional component (created with the function keyword) in the Header and Product files. For now just return a div containing the component's name.
import React from "react";

export default function house(props) {
  console.log(props);
  return (
    <div className="property-list">
      <div className="button-delete">
        <button onClick={() => props.removeProperty(props.id)}>X</button>
      </div>
      <div>
        <p>Property Name: {props.name}</p>
        <br />
        <p>Address: {props.address}</p>
        <br />
        <p>City: {props.city}</p>
        <br />
        <p>State: {props.state}</p>
        <br />
        <p>Zip: {props.zip}</p>
      </div>
    </div>
  );
}
