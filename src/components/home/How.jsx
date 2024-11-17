import React from "react";

const How = () => {
  return (
    <section className="padding-block-900 bg-neutral-150 how-section">
      <div className="container flow how-does-mobile">
        <h1 className="fs-secondary-heading fw-extra-bold text-align">
          How Does It Work?
        </h1>
        <div className="" style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8%",
              marginTop: "4%",
            }}
          >
            <div className="iphone-centered desktop">
              <img
                src="/assets/images/iPhone 12 Pro (5).svg"
                alt=""
                className="desktop"
              />
            </div>
            <div className="iphone-centered desktop">
              <img
                src="/assets/images/iPhone 12 Pro (2).svg"
                alt=""
                className="desktop"
              />
            </div>
            <div className="iphone-centered desktop">
              <img
                src="assets\images\iphone.svg"
                alt=""
                style={{ position: "relative" }}
                className="desktop"
              />
            </div>
          </div>
          <div>
            <div className="iphone-centered">
              <img
                src="/assets/images/container.svg"
                alt=""
                className="tablet"
              />
              <img
                src="/assets/images/iphone-middle-tablet.svg"
                alt=""
                className="tablet"
                style={{ position: "absolute", height: "93%", top: "27px" }}
              />
            </div>
          </div>
          <div>
            <img
              src="/assets/images/how.svg"
              alt=""
              style={{ position: "relative", zIndex: "1" }}
              className="mobile"
            />

            <img
              src="/assets/images/Change This (4).svg"
              alt=""
              style={{
                position: "absolute",
                left: "15px",
                top: "20px",
                zoom: "84%",
                borderRadius: "2.3rem",
              }}
              className="mobile"
            />
          </div>
        </div>
        <h3 className="fs-quaternary-heading fw-bold desktop text-align">
          Latest transaction history
        </h3>
        <p className="desktop half-opacity-p text-align narrower-when-wider">
          Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu
          sociis tristique quisque hac in consectetur condimentum.
        </p>
        <h3
          className="fs-quaternary-heading fw-extra-bold mobile"
          style={{ width: "85%" }}
        >
          Transfers to people from your contact list
        </h3>
        <h3
          className="fs-quaternary-heading fw-extra-bold tablet"
          style={{ width: "85%" }}
        >
          Step 3. Transfers to people from your contact list
        </h3>
        <p className="text-align tablet mobile width-60">
          Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
          Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
        </p>
      </div>
    </section>
  );
};

export default How;
