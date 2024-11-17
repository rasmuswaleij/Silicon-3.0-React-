import React from "react";
import Breadcrumb from "../components/contact/Breadcrumb";
import Footer from "../components/home/Footer";
import ContactCard from "../components/contact/ContactCard";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import MedicalCard from "../components/contact/MedicalCard";
import SocialLinks from "../components/contact/SocialLinks";

const Contact = () => {
  const contactCard = {
    heading: "Email us",
    body: "Please feel free to drop us a line. We will respond as soon as possible.",
    a: "Leave a message",
    src: "./assets/images/message.svg",
    aSrc: "./assets/images/arrow-right.svg",
  };
  const contactCard2 = {
    heading: "Careers",
    body: "Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.",
    a: "Send an application",
    src: "./assets/images/friends.svg",
    aSrc: "./assets/images/arrow-right.svg",
  };
  const medicalCard1 = {
    heading: "Medical Center 1",
    body1: "4517 Washington Ave. Manchester, Kentucky 39495",
    body2: "(406) 555-0120",
    body3: "Mon – Fri: 9:00 am – 22:00 am Sat – Sun: 9:00 am – 20:00 am",
  };
  const medicalCard2 = {
    heading: "Medical Center 2",
    body1: "2464 Royal Ln. Mesa,New Jersey 45463",
    body2: "(406) 544-0123",
    body3: "Mon – Fri: 9:00 am – 22:00 am Sat – Sun: 9:00 am – 20:00 am",
  };
  return (
    <>
      <div>
        <div className="partly-bg" style={{ paddingTop: "2rem" }}>
          <section className="container ">
            <Breadcrumb />
            <div className="even-columns" style={{ marginTop: "2rem" }}>
              <div>
                <h1
                  className="fs-secondary-heading fw-bold"
                  style={{ paddingBottom: "4rem" }}
                >
                  Contact Us
                </h1>
                <ContactCard contactCard={contactCard} />
                <ContactCard contactCard={contactCard2} />
              </div>
              <ContactForm />
            </div>
          </section>
        </div>
        <section
          className="even-columns container bg-neutral-100"
          style={{
            paddingTop: "7rem",
            display: "flex",
            gap: "6rem",
            paddingBottom: "30rem",
          }}
        >
          <Map />
          <div>
            <MedicalCard medicalCard={medicalCard1} />
            <MedicalCard medicalCard={medicalCard2} />
            <SocialLinks />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
