import React from "react";

const ContactCard = (props) => {
  console.log(props.contactCard.heading);
  return (
    <div style={{ display: "flex", gap: "1rem", paddingBottom: "3rem" }}>
      <img
        src={props.contactCard.src}
        alt=""
        style={{
          background: "white",
          padding: "1rem",
          borderRadius: "100vmax",
          aspectRatio: "1/1",
          maxHeight: "4rem",
        }}
      />
      <div style={{ display: "grid", gap: "1rem" }}>
        <h3 className="fw-bold fs-quaternary-heading" style={{}}>
          {props.contactCard.heading}
        </h3>
        <p style={{ maxWidth: "70%" }}>{props.contactCard.body}</p>
        <a href="" style={{ display: "flex", gap: "1rem" }}>
          {props.contactCard.a}
          <img
            src={props.contactCard.aSrc}
            alt=""
            style={{ height: "0.9rem" }}
          />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
