import React, { useState } from "react";

const ContactForm = () => {
  const [information, setInformation] = useState({
    name: "",
    email: "",
    speciality: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    if (
      information.name.length < 1 ||
      information.email.length < 1 ||
      information.speciality.length < 1
    ) {
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
    <div
      className="contactForm-div"
      style={{ padding: "3rem", background: "white" }}
    >
      <h2 className="fs-tertiary-heading fw-bold">Get Online Consultation</h2>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", marginTop: "3rem" }}
        noValidate
      >
        <div className="input-group">
          <label htmlFor="name" className="fw-bold">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="inputForm"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email" className="fw-bold">
            Email adress
          </label>
          <input
            name="email"
            id="email"
            type="text"
            className="inputForm"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="div-group">
          <label htmlFor="specialist" className="fw-bold">
            Specialist
          </label>
          <input
            name="speciality"
            id="specialist"
            type=""
            className="inputForm"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        {errorMessage}
        <button
          className="button"
          type="submit"
          style={{ paddingBlock: "1rem", marginTop: "5rem" }}
        >
          Make an appointment
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
