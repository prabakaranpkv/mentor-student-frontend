import React from "react";

export default function Home() {
  return (
    <div class=" container-fluid home">
      <div className="row">
        <div className="col-md-3 col-sm-12"></div>
        <div className="col-md-6 col-sm-12">
          <h3 className="headLine">Learn. Practise. Get Hired.</h3>
          <img
            className="image"
            src="https://www.guvi.in/images/webps/artwork-skillup.webp"
            alt=""
          />
        </div>
        <div className="col-md-3 col-sm-12"></div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-12"></div>
        <div className="col-md-6 col-sm-12">
          <h3 className="headLine">
            Learn and Practise Programming with courses created by industry
            experts
          </h3>
          <img
            className="image"
            src="https://www.guvi.in/images/webps/artwork-native.webp"
            alt=""
          />
        </div>
        <div className="col-md-3 col-sm-12"></div>
      </div>
      <div className="row footer">
        <div className="col-12">
          <p>copyrights@PK</p>
        </div>
      </div>
    </div>
  );
}
