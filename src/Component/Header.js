//Create a functional component (created with the function keyword) in the Header and Product files. For now just return a div containing the component's name.
import React from "react";
import "./Header.css";

export default function header(props) {
  return (
    <div className="header-main">
      <h2>Houser</h2>
    </div>
  );
}
