import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  const arrows = ">>";
  return (
    <div className="" style={{ display: "flex", gap: "10px" }}>
      <img src="./assets/images/house.svg" alt="" />
      <Link to="/" style={{ opacity: "0.5" }}>
        Homepage
      </Link>
      <p>{arrows}</p>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Breadcrumb;
