import React from "react";

const Make = () => {
  return (
    <section className="padding-block-900 desktop">
      <div className="container flow">
        <div className="even-columns make-your-even-columns">
          {/* Flow below is not right since it I didn't know how to transfer --flow-space (2%) variable to React */}
          <div className="flow money-transfer-div">
            <h2 className="fs-tertiary-heading fw-extra-bold make-your-header">
              Make your money transfer simple and clear
            </h2>
            <div className="gap-100" style={{ marginTop: "6%" }}>
              <img src="/assets/images/bx-check-circle.svg" alt="" />
              <p>Banking transactions are free for you</p>
            </div>
            <div className="gap-100">
              <img src="/assets/images/bx-check-circle.svg" alt="" />
              <p>No monthly cash commission</p>
            </div>
            <div className="gap-100">
              <img src="/assets/images/bx-check-circle.svg" alt="" />
              <p>Manage payments and transactions online</p>
            </div>
            <button
              className="button"
              style={{
                marginTop: "7%",
                maxWidth: "fit-content",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                paddingBlock: "0.7rem",
              }}
            >
              <p className="text-static-100">Learn more</p>
              <img src="/assets/images/learn-grey-arrow.svg" alt="" />
            </button>
          </div>
          <div>
            <img src="/assets/images/simple-screen.svg" alt="" />
          </div>
        </div>
        <div className="even-columns" style={{ gap: "15%" }}>
          <div>
            <img src="/assets/images/recieve-screen.svg" alt="" />
          </div>
          <div
            className="flow"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              className="fs-tertiary-heading fw-extra-bold"
              style={{ maxWidth: "80%" }}
            >
              Receive payment from international bank details
            </h2>
            <div className="even-columns">
              <div className="flow">
                {/* Sätt bakgrundsfärgen i css-filen istället för nedan clr-neutral-200 */}
                <img
                  src="/assets/images/credit-card.svg"
                  alt=""
                  style={{
                    backgroundColor: "",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    marginBottom: "auto",
                    display: "grid",
                    placeItems: "center",
                  }}
                />
                <p>
                  Manage your payments online. Mollis congue egestas egestas
                  fermentum fames.
                </p>
              </div>
              <div className="flow">
                <img
                  src="/assets/images/wallet.svg"
                  alt=""
                  style={{
                    backgroundColor: "",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    marginBottom: "auto",
                    display: "grid",
                    placeItems: "center",
                  }}
                />
                <p>
                  A elementur and imperdiet enim, pretium etiam facilisi aenean
                  quam mauris.
                </p>
              </div>
            </div>
            <button
              className="button"
              style={{
                marginTop: "7%",
                maxWidth: "fit-content",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                paddingBlock: "0.7rem",
              }}
            >
              <p className="text-static-100">Learn more</p>
              <img src="/assets/images/learn-grey-arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Make;
