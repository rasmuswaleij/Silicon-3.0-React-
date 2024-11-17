import React, { useEffect, useState } from "react";
import Testimonial from "../clients-are/Testimonial";

const Clients = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetchTestimonial();
  }, []);

  const fetchTestimonial = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/testimonials"
    );
    const data = await res.json();
    setTestimonial(data);
  };

  return (
    <section className="padding-block-900 desktop bg-neutral-150">
      <div className="container">
        <div
          className="even-columns"
          style={{ gridTemplateColumns: "3fr 5fr" }}
        >
          <h2
            className="fs-secondary-heading fw-extra-bold"
            style={{ maxWidth: "80%" }}
          >
            Clients are Loving Our App
          </h2>
          <div className="flex-gap">
            {testimonial.map((item) => (
              <Testimonial item={item} key={item.id} />
            ))}
            {/* Flow below is not right since it I didn't know how to transfer --flow-space (1em) variable to React */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
