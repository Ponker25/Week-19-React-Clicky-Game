import React from "react";
import "./MascotCard.css";

const MascotCard = props => (
  
  <div className="card">
    <div className="img-container"
      value={props.id}
      onClick={() => props.mascotClick(props.id)}
      >
      <img alt={props.name} src={props.image} />
      
    </div>
  
    {/* <span   onClick={() => props.shuffleMascot(props.id)} className="shuffleMascot"></span> */}
  </div>
);

export default MascotCard;
