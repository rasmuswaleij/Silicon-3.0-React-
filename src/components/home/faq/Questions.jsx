import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeProvider";

const Questions = ({ item }) => {
  const { darkMode } = useContext(DarkModeContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleOpen} className="faq-question1 flex-row-center">
        <h3>{item.title}</h3>

        <img
          src="/assets/images/blue-arrow.svg"
          alt=""
          className={`faq-arrow mobile ${
            darkMode || !isOpen ? `hidden` : `shown`
          }`}
        />
        <img
          src="/assets/images/arrow-grey-down.svg"
          alt=""
          className={`faq-arrow-down tablet desktop ${
            darkMode || isOpen ? `hidden` : `shown`
          }`}
        />
        <img
          src="/assets/images/arrow-dark.svg"
          alt=""
          className={`${darkMode ? `shown` : `hidden`}`}
        />
      </div>
      <div className="faqanswer ">{isOpen && <p>{item.content}</p>}</div>
    </div>
  );
};

export default Questions;
