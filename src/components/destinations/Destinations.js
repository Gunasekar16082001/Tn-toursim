import React from "react";
import "./DestinationsStyles.css";

import img6 from "../../assets/6.jpg";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img5 from "../../assets/5.jpg";
import img4 from "../../assets/4.jpg";

function Destinations() {
  return (
    <div name="destinations" className="destinations">
      <div className="container">
        <h1>Top places to visit</h1>
        <p>On the best structural temples are hear</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={img6} alt="/" />
          <img src={img1} alt="/" />
          <img src={img2} alt="/" />
          <img src={img5} alt="/" />
          <img src={img4} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Destinations;
