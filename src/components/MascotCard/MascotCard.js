import React from "react";
import "./MascotCard.css";

const MascotCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  
    {/* <span   onClick={() => props.removeMascot(props.id)} className="remove">𝘅</span> */}
  </div>
);

export default MascotCard;
