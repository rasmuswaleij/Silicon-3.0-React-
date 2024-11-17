import React from "react";

const Manage2 = () => {
  return (
    <section className="gradient first-section">
      <div className="container first-section-container">
        <h1 className="manage-heading fs-primary-heading fw-extra-bold">
          Manage All Your Money in One App
        </h1>
        <div className="manage-content">
          <p>
            We offer you a new generation of the mobile banking. Save, spend &
            manage money in your pocket.
          </p>
          <div className="app-store only-shown-light-theme">
            <button>
              <img src="/assets/images/group.svg" alt="" />
            </button>
            <button>
              <img src="/assets/images/googleplay-light.svg.svg" alt="" />
            </button>
          </div>
          <div className="app-store only-shown-dark-theme">
            <button>
              <img src="/assets/images/appstore-dark.svg" alt="" />
            </button>
            <button>
              <img src="/assets/images/googleplay-dark.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="discover-div">
          <button style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <img
              src="/assets/images/arrow_down_grey.svg"
              alt=""
              className="arrow-down only-shown-light-theme"
            />
            <img
              src="/assets/images/arrow_down_dark.svg"
              alt=""
              className="arrow-down only-shown-dark-theme"
            />
            <p>Discover more</p>
          </button>
        </div>
        <img
          src="/assets/images/double-iphones.svg"
          alt=""
          className="tablet desktop manage-double-iphones"
        />
      </div>
    </section>
  );
};

export default Manage2;
