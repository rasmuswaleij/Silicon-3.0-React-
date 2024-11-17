import React from "react";

const MedicalCard = (props) => {
  return (
    <div className="medicalCard">
      <h3
        className="fw-bold fs-quinary-heading"
        style={{ marginBottom: "1.5rem" }}
      >
        {props.medicalCard.heading}
      </h3>
      <div className="flex">
        <img src="./assets/images/location.svg" alt="" />
        <p>{props.medicalCard.body1}</p>
      </div>
      <div className="flex">
        <img src="./assets/images/phone.svg" alt="" />
        <p>{props.medicalCard.body2}</p>
      </div>
      <div className="flex" style={{ marginBottom: "2rem" }}>
        <img src="./assets/images/clock.svg" alt="" />
        <p>{props.medicalCard.body3}</p>
      </div>
    </div>
  );
};

export default MedicalCard;
