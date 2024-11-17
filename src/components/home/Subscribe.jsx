import React, { useState } from "react";

const Subscribe = () => {
  const [information, setInformation] = useState({
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    if (information.email.length < 1) {
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInformation({ ...information, [name]: value });
    console.log(value);
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
      setErrorMessage(`Every field must contain at least 1 character`);
    } else {
      console.log("Form valid");
      setErrorMessage("");
    }
    setInformation({ name: "", email: "", speciality: "" });
  };

  return (
    <section className="">
      <div className="padding-block-800 container padding-inline-900 even-columns bg-neutral-150 subscribe-container">
        <div className="flex-row-center bell-and-header">
          <img src="/assets/images/bell.svg" alt="" className="bell" />
          <h2 className="desktop fs-quaternary-heading fw-extra-bold subscribe-heading">
            Subscribe to our newsletter to stay informed about latest updates
          </h2>
          <h2
            className="fs-quinary-heading fw-extra-bold tablet mobile"
            style={{ textAlign: "start" }}
          >
            Subscribe to our newsletter
          </h2>
        </div>
        <div className="email-form">
          <form
            noValidate
            className="subscribe-form"
            onSubmit={handleSubmit}
            style={{
              display: "",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <div style={{ display: "flex" }}>
              <label className="fw-regular fs-100 label-placeholder">
                Your Email
              </label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                title="Your Email"
                className="email-input"
              />
              <button className="button subscribe">Subscribe</button>
            </div>
            {errorMessage}{" "}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
