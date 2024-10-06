import React from "react";
import { Link } from "react-router-dom";
import "./TripSelection.css";

// Import images
import leftImage from "../assests/tours/bg3-left.jpg";
import rightImage from "../assests/tours/bg3-right.jpg";
import tour2 from "../assests/tours/tour2.jpg";
import tour1 from "../assests/tours/tour1.webp";
import tour4 from "../assests/tours/Colosseum-Rome-Italy.webp";
import tour3 from "../assests/tours/tour2.jpg.webp";

const TripSelection = () => {
  return (
    <div className="trip-selection-container">
      {/* Left image */}
      <div className="image-section left">
        <img src={leftImage} alt="Left Side" className="side-image" />
      </div>

      {/* Middle section */}
      <div className="trip-content">
        <h1>Select Your Virtual Trip</h1>
        <div className="trip-selection">
          <Link to="/tour/1" className="trip-link">
            <div className="trip-card first-card" style={{backgroundImage: `url(${tour2})`, backgroundSize: "cover", height:"100px"}}>
              <h2>Taj Mahal</h2>
            </div>
          </Link>
          <Link to="/tour/2" className="trip-link">
            <div className="trip-card second-card" style={{backgroundImage: `url(${tour1})`, backgroundSize:"cover"}}>
              <h2>The Pyramids of Egypt</h2>
            </div>
          </Link>
          <Link to="/tour/3" className="trip-link">
            <div className="trip-card" style={{backgroundImage: `url(${tour3})`}}>
              <h2>The Great Wall of China</h2>
            </div>
          </Link>
          <Link to="/tour/4" className="trip-link">
            <div className="trip-card" style={{backgroundImage: `url(${tour4})` ,backgroundSize:"cover", height: "100px"}}>
              <h2>Colosseum</h2>
            </div>
          </Link>
          
        </div>
      </div>

      {/* Right image */}
      <div className="image-section right">
        <img src={rightImage} alt="Right Side" className="side-image" />
      </div>
    </div>
  );
};

export default TripSelection;
