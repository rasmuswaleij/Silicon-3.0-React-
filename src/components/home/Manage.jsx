import React from "react";

const One = () => {
  return (
    <section
      className="padding-block-950 gradient"
      style={{ paddingBottom: "0", display: "none" }}
    >
      <div className="container manage-grid flow">
        <h1 className="fs-primary-heading fw-extra-bold width-70 manage-header">
          Manage All Your Money in One App
        </h1>

        <div className="manage-text-content" style={{ height: "fit-content" }}>
          <p className="fs-250 text-primary-700 width-60">
            We offer you a new generation of the mobile banking. Save, spend &
            manage money in your pocket.
          </p>
          {/* Flow below is not right since it I didn't know how to transfer --flow-space (3.5em) variable to React */}
          <div className="app-markets-div flow">
            <button className="appMarketsLogosDiv">
              <img src={"/assets/images/Group.svg"} alt="" />
            </button>
            {/* Flow below is not right since it I didn't know how to transfer --flow-space (0.9em) variable to React */}
            <button className="appMarketsLogosDiv">
              <img src={"/assets/images/googleplay-light.svg.svg"} alt="" />
            </button>
          </div>
        </div>
        <div className="discover-more-div" style={{ width: "100%" }}>
          <button className="discover-more" style={{ marginInline: "0" }}>
            <img
              src={"/assets/images/arrow_down_grey.svg"}
              alt=""
              className="arrow-down only-shown-light-theme"
            />
            <img
              src={"/assets/images/arrow_down_dark.svg"}
              alt=""
              className="arrow-down only-shown-dark-theme"
            />
            <p className="fs-100 text-primary-700" id="discover-more-p">
              Discover more
            </p>
          </button>
        </div>
        <div className="tablet desktop double-iphones">
          <img src={"/assets/images/double-iphones.svg"} alt="" />
        </div>
      </div>
    </section>
  );
};

export default One;
