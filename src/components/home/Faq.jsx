import React, { useEffect, useState } from "react";
import Questions from "./faq/questions";

const Faq = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/faq"
    );
    const data = await res.json();
    setQuestions(data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <section className="padding-block-700">
      <div className="container">
        <div className="faq-grid flow">
          <div className="flow faq-heading">
            <h2 className="fs-tertiary-heading fw-extra-bold faq-header">
              Any questions? Check out the FAQs
            </h2>
            <p className="fs-250 faq-p">
              Still have unanswered questions and need to get in touch?
            </p>
          </div>

          <div className="faq">
            {questions.map((item) => (
              <Questions item={item} key={item.id} />
            ))}
          </div>

          <div className="flex-gap faq-card-div">
            <div className="desktop tablet card-faq flow-500">
              <img src="/assets/images/icon (1).svg" alt="" />
              <p>Still have questions?</p>
              <button className="button-faq flex-row-center">
                <p className="text-accent-400">Contact us</p>
                <img src="/assets/images/icon-r.svg" alt="" />
              </button>
            </div>
            <div className="desktop tablet card-faq flow-500">
              <img src="/assets/images/icon (2).svg" alt="" />
              <p>Don't like phone calls?</p>
              <button className="button-faq flex-row-center">
                <p className="text-system-400">Contact us</p>
                <img src="/assets/images/icon-r-green.svg" alt="" />
              </button>
            </div>
          </div>
          <div
            className="contact-button mobile"
            style={{ marginInline: "auto" }}
          >
            <button className="button" style={{ paddingBlock: "4vw" }}>
              <p className="text-static-100 fs-100">Contact us now</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
